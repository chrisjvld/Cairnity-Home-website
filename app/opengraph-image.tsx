import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Cairnity — AI that earns its place in your business";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background:
            "radial-gradient(900px 500px at 80% 0%, rgba(120, 90, 40, 0.45), transparent 60%), radial-gradient(700px 400px at 0% 100%, rgba(40, 60, 110, 0.45), transparent 60%), #11151E",
          color: "#F5F1E6",
          padding: "80px",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            opacity: 0.85,
          }}
        >
          {/* Inline cairn mark */}
          <svg width="44" height="44" viewBox="0 0 64 64">
            <ellipse cx="32" cy="50" rx="22" ry="8" fill="#E0B97A" />
            <ellipse cx="32" cy="34" rx="15" ry="7" fill="#E0B97A" />
            <ellipse cx="32" cy="20" rx="9" ry="5.5" fill="#E0B97A" />
          </svg>
          <div style={{ fontSize: 36, letterSpacing: -1 }}>Cairnity</div>
        </div>

        <div
          style={{
            marginTop: "auto",
            fontSize: 84,
            lineHeight: 1.05,
            letterSpacing: -2,
            maxWidth: 950,
          }}
        >
          AI that earns its place in your business.
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 28,
            fontSize: 24,
            fontFamily: "sans-serif",
            color: "rgba(245, 241, 230, 0.7)",
          }}
        >
          <div>AI consulting for SMBs — workshops, audits, custom builds.</div>
          <div style={{ color: "#E0B97A" }}>cairnity.com</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
