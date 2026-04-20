"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

interface TopoBackgroundProps {
  className?: string;
}

const VERT = /* glsl */ `
  attribute vec2 position;
  varying vec2 vUv;
  void main() {
    vUv = position * 0.5 + 0.5;
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

/* Slow-drifting topographic contour field.
   Uses fbm noise banded by a sine wave to produce thin isolines,
   tinted in the foreground color at very low alpha. */
const FRAG = /* glsl */ `
  precision highp float;
  varying vec2 vUv;
  uniform float uTime;
  uniform vec2  uResolution;
  uniform vec3  uFg;
  uniform vec3  uBg;

  // Simplex-ish noise (Inigo Quilez style)
  vec2 hash(vec2 p) {
    p = vec2(dot(p, vec2(127.1, 311.7)),
             dot(p, vec2(269.5, 183.3)));
    return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
  }
  float noise(in vec2 p) {
    const float K1 = 0.366025404;
    const float K2 = 0.211324865;
    vec2 i = floor(p + (p.x + p.y) * K1);
    vec2 a = p - i + (i.x + i.y) * K2;
    float m = step(a.y, a.x);
    vec2 o = vec2(m, 1.0 - m);
    vec2 b = a - o + K2;
    vec2 c = a - 1.0 + 2.0 * K2;
    vec3 h = max(0.5 - vec3(dot(a, a), dot(b, b), dot(c, c)), 0.0);
    vec3 n = h * h * h * h * vec3(
      dot(a, hash(i + 0.0)),
      dot(b, hash(i + o)),
      dot(c, hash(i + 1.0))
    );
    return dot(n, vec3(70.0));
  }

  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 5; i++) {
      v += a * noise(p);
      p *= 2.0;
      a *= 0.5;
    }
    return v;
  }

  void main() {
    vec2 uv = vUv;
    float aspect = uResolution.x / uResolution.y;
    vec2 p = vec2(uv.x * aspect, uv.y);

    // Very slow drift
    float t = uTime * 0.005;

    // Base noise field
    vec2 q = vec2(
      fbm(p * 1.2 + vec2(0.0, t)),
      fbm(p * 1.2 + vec2(5.2, t * 1.1))
    );
    vec2 r = vec2(
      fbm(p * 1.8 + 3.0 * q + vec2(1.7, 9.2 + t * 0.5)),
      fbm(p * 1.8 + 3.0 * q + vec2(8.3 + t * 0.4, 2.8))
    );

    float f = fbm(p * 1.5 + 2.0 * r);
    
    // Create contour lines using sine wave
    // Multiply by N to get N contour lines
    float lines = sin(f * 40.0);
    
    // Sharpen the lines
    lines = smoothstep(0.85, 0.95, lines);
    
    // Add some variation to line thickness based on the noise field
    lines *= smoothstep(0.2, 0.8, f);

    // Mix background and foreground based on lines
    // Keep alpha very low (~0.06 - 0.10)
    vec3 col = mix(uBg, uFg, lines * 0.08);

    // Vignette for focus
    float vig = smoothstep(1.2, 0.3, distance(uv, vec2(0.5)));
    col *= 0.6 + 0.4 * vig;

    gl_FragColor = vec4(col, 1.0);
  }
`;

export function TopoBackground({ className }: TopoBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const nav = navigator as Navigator & { deviceMemory?: number };
    const lowEnd =
      (nav.deviceMemory !== undefined && nav.deviceMemory < 4) ||
      (typeof navigator.hardwareConcurrency === "number" && navigator.hardwareConcurrency < 4);
    if (lowEnd) return;

    setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled || !canvasRef.current) return;
    let disposed = false;
    let raf = 0;
    let cleanup: (() => void) | null = null;

    (async () => {
      const { Renderer, Program, Mesh, Triangle, Color } = await import("ogl");
      if (disposed || !canvasRef.current) return;

      const canvas = canvasRef.current;
      const renderer = new Renderer({
        canvas,
        dpr: Math.min(window.devicePixelRatio || 1, 1.5),
        alpha: false,
        antialias: false,
      });
      const gl = renderer.gl;
      gl.clearColor(0, 0, 0, 1);

      const geometry = new Triangle(gl);

      const program = new Program(gl, {
        vertex: VERT,
        fragment: FRAG,
        uniforms: {
          uTime: { value: 0 },
          uResolution: { value: [1, 1] },
          // Foreground color (near white)
          uFg: { value: new Color(0.96, 0.96, 0.96) },
          // Background color (near black)
          uBg: { value: new Color(0.04, 0.05, 0.08) },
        },
      });

      const mesh = new Mesh(gl, { geometry, program });

      const resize = () => {
        const { clientWidth, clientHeight } = canvas;
        renderer.setSize(clientWidth, clientHeight);
        program.uniforms.uResolution.value = [clientWidth, clientHeight];
      };
      const ro = new ResizeObserver(resize);
      ro.observe(canvas);
      resize();

      let visible = true;
      const io = new IntersectionObserver(
        ([entry]) => {
          visible = entry.isIntersecting;
        },
        { threshold: 0 },
      );
      io.observe(canvas);

      const start = performance.now();
      const tick = () => {
        if (visible) {
          program.uniforms.uTime.value = (performance.now() - start) / 1000;
          renderer.render({ scene: mesh });
        }
        raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);

      cleanup = () => {
        cancelAnimationFrame(raf);
        ro.disconnect();
        io.disconnect();
        const ext = gl.getExtension("WEBGL_lose_context");
        ext?.loseContext();
      };
    })();

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      cleanup?.();
    };
  }, [enabled]);

  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)} aria-hidden>
      {/* Static fallback (always rendered as a base layer; WebGL paints over it) */}
      <div className="topo-fallback" />
      {enabled && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full opacity-60"
        />
      )}
      {/* Top fade + bottom fade for content legibility */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[--bg] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[--bg] to-transparent" />
    </div>
  );
}
