import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { CairnMark } from "@/components/effects/CairnMark";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center">
      <div className="container-x text-center">
        <div className="flex justify-center">
          <CairnMark size={64} className="text-[--accent] opacity-70" />
        </div>
        <p className="mt-8 font-mono text-xs uppercase tracking-[0.3em] text-[--accent]">
          404
        </p>
        <h1 className="mt-4 font-display text-5xl md:text-7xl text-gradient leading-[1.05]">
          The trail ends here.
        </h1>
        <p className="mt-6 max-w-md mx-auto text-[--fg-muted]">
          The page you&apos;re looking for has moved or never existed. Let&apos;s
          get you back to a place with markers.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button href="/" withArrow>
            Back to home
          </Button>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-3 text-sm text-[--fg-muted] hover:text-[--fg]"
          >
            Or get in touch
          </Link>
        </div>
      </div>
    </section>
  );
}
