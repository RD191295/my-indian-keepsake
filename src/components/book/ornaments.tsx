import type { ReactNode } from "react";

/** Restrained hand-drawn style corner ornament. */
export function CornerOrnament({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden="true">
      <path
        d="M2 22C2 10 10 2 22 2M8 26c0-10 8-18 18-18"
        stroke="currentColor"
        strokeWidth="0.9"
        strokeLinecap="round"
      />
      <path
        d="M16 16c4-2 8-1 9 3 1 4-3 6-6 4-2-1-2-4 0-5"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      <circle cx="26.5" cy="26.5" r="1.1" fill="currentColor" />
    </svg>
  );
}

/** A single quiet motif used as a divider — a lotus-derived diamond, not a mandala. */
export function Divider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
      <span className="gold-rule h-px w-16 opacity-70" />
      <svg viewBox="0 0 24 24" className="h-4 w-4 text-gold" fill="none">
        <path d="M12 2c2.4 3.8 2.4 6.2 0 10-2.4-3.8-2.4-6.2 0-10Z" fill="currentColor" opacity=".8" />
        <path d="M12 22c-2.4-3.8-2.4-6.2 0-10 2.4 3.8 2.4 6.2 0 10Z" fill="currentColor" opacity=".5" />
        <circle cx="12" cy="12" r="1.3" fill="currentColor" />
      </svg>
      <span className="gold-rule h-px w-16 opacity-70" />
    </div>
  );
}

/** Thin ornamental border frame drawn inside a page. */
export function PageBorder({ tone = "gold" }: { tone?: "gold" | "maroon" }) {
  const color = tone === "gold" ? "text-gold" : "text-maroon";
  return (
    <div className={`pointer-events-none absolute inset-4 ${color}`} aria-hidden="true">
      <div className="absolute inset-0 border border-current opacity-30" />
      <div className="absolute inset-[6px] border border-current opacity-15" />
      <CornerOrnament className="absolute -top-px -left-px h-8 w-8 opacity-60" />
      <CornerOrnament className="absolute -top-px -right-px h-8 w-8 rotate-90 opacity-60" />
      <CornerOrnament className="absolute -bottom-px -right-px h-8 w-8 rotate-180 opacity-60" />
      <CornerOrnament className="absolute -bottom-px -left-px h-8 w-8 -rotate-90 opacity-60" />
    </div>
  );
}

export function ChapterMark({
  number,
  deva,
  english,
}: {
  number: string;
  deva: string;
  english: string;
}) {
  return (
    <header className="text-center">
      <p className="font-sans text-[0.62rem] tracking-[0.42em] text-ink-soft uppercase">
        {number}
      </p>
      <h2 className="font-deva mt-2 text-3xl leading-tight text-maroon sm:text-4xl">{deva}</h2>
      <p className="font-display mt-1 text-base tracking-wide text-ink-soft italic">{english}</p>
      <Divider className="mt-3" />
    </header>
  );
}

/** Photograph placeholder with a paper frame and tape. */
export function PhotoFrame({
  caption,
  rotate = "-1.4deg",
  className = "",
  tone = "sepia",
}: {
  caption: string;
  rotate?: string;
  className?: string;
  tone?: "sepia" | "green" | "saffron";
}) {
  const wash =
    tone === "green"
      ? "from-leafgreen/25 to-brown/20"
      : tone === "saffron"
        ? "from-saffron/30 to-brown/20"
        : "from-brown/25 to-gold/20";
  return (
    <figure
      className={`relative bg-paper p-2 pb-7 shadow-[0_10px_22px_-12px_oklch(0_0_0/0.5)] ${className}`}
      style={{ transform: `rotate(${rotate})` }}
    >
      <span className="tape-strip absolute -top-2 left-1/2 h-4 w-14 -translate-x-1/2 -rotate-2" />
      <div className={`aspect-[4/3] w-full bg-linear-to-br ${wash}`}>
        <div className="flex h-full items-center justify-center">
          <span className="font-sans text-[0.55rem] tracking-[0.3em] text-brown/70 uppercase">
            photo
          </span>
        </div>
      </div>
      <figcaption className="font-hand absolute right-0 bottom-1 left-0 text-center text-base text-ink-soft">
        {caption}
      </figcaption>
    </figure>
  );
}

/** Folded note: a small square of paper with fold creases. */
export function FoldedNote({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`relative bg-paper-deep p-4 shadow-[0_8px_18px_-10px_oklch(0_0_0/0.45)] ${className}`}
    >
      <span className="pointer-events-none absolute inset-y-0 left-1/3 w-px bg-paper-edge/70" />
      <span className="pointer-events-none absolute inset-x-0 top-1/2 h-px bg-paper-edge/70" />
      <span className="pointer-events-none absolute top-0 right-0 h-6 w-6 bg-linear-to-bl from-paper to-paper-edge" />
      <div className="relative">{children}</div>
    </div>
  );
}

export function Placeholder({ lines = 3 }: { lines?: number }) {
  return (
    <p className="font-sans text-[0.7rem] leading-relaxed text-ink-soft/80 italic">
      {Array.from({ length: lines })
        .map(() => "· memory placeholder — waiting for the real one ·")
        .join(" ")}
    </p>
  );
}
