import { useState, type ReactNode } from "react";

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

/** Fine ornamental divider — thin line work with one small centred motif. */
export function OrnamentDivider({
  className = "",
  width = "w-40",
  tone = "gold",
}: {
  className?: string;
  width?: string;
  tone?: "gold" | "ink";
}) {
  return (
    <div className={`flex items-center justify-center ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 200 16"
        className={`${width} ${tone === "gold" ? "text-gold" : "text-brown"}`}
        fill="none"
      >
        <path d="M4 8h62" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" />
        <path d="M134 8h62" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" />
        <path
          d="M70 8c6-4 10-4 14 0-4 4-8 4-14 0Zm60 0c-6-4-10-4-14 0 4 4 8 4 14 0Z"
          stroke="currentColor"
          strokeWidth="0.7"
        />
        <path d="M92 8c4-5 8-5 12 0-4 5-8 5-12 0Z" stroke="currentColor" strokeWidth="0.8" />
        <circle cx="98" cy="8" r="1.2" fill="currentColor" />
        <circle cx="76" cy="8" r="0.8" fill="currentColor" opacity=".7" />
        <circle cx="120" cy="8" r="0.8" fill="currentColor" opacity=".7" />
      </svg>
    </div>
  );
}

export const Divider = OrnamentDivider;

/** Thin ornamental border frame drawn inside a page. */
export function PageBorder({ tone = "gold" }: { tone?: "gold" | "maroon" }) {
  const color = tone === "gold" ? "text-gold" : "text-maroon";
  return (
    <div className={`pointer-events-none absolute inset-4 ${color}`} aria-hidden="true">
      <div className="absolute inset-0 border border-current opacity-25" />
      <div className="absolute inset-[6px] border border-current opacity-12" />
      <CornerOrnament className="absolute -top-px -left-px h-8 w-8 opacity-55" />
      <CornerOrnament className="absolute -top-px -right-px h-8 w-8 rotate-90 opacity-55" />
      <CornerOrnament className="absolute -bottom-px -right-px h-8 w-8 rotate-180 opacity-55" />
      <CornerOrnament className="absolute -bottom-px -left-px h-8 w-8 -rotate-90 opacity-55" />
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
      <p className="font-sans text-[0.6rem] tracking-[0.45em] text-ink-soft uppercase">{number}</p>
      <h2 className="font-deva mt-2 text-[1.7rem] leading-tight text-maroon sm:text-3xl">{deva}</h2>
      <p className="font-display mt-1 text-sm tracking-[0.12em] text-ink-soft italic">{english}</p>
      <OrnamentDivider className="mt-3" width="w-32" />
    </header>
  );
}

export function WashiTape({
  className = "",
  tone = "saffron",
  rotate = "-3deg",
}: {
  className?: string;
  tone?: "saffron" | "green" | "maroon";
  rotate?: string;
}) {
  const tint =
    tone === "green"
      ? "bg-leafgreen/25"
      : tone === "maroon"
        ? "bg-maroon/20"
        : "bg-saffron/30";
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute h-5 w-16 ${tint} ${className}`}
      style={{
        transform: `rotate(${rotate})`,
        backgroundImage:
          "repeating-linear-gradient(90deg, oklch(1 0 0 / .25) 0 2px, transparent 2px 6px)",
        boxShadow: "0 1px 3px oklch(0 0 0 / .18)",
      }}
    />
  );
}

/** Polaroid that "develops" when the page is shown. */
export function Polaroid({
  caption,
  rotate = "-1.6deg",
  className = "",
  tone = "sepia",
  develop = false,
  delay = 0,
}: {
  caption: string;
  rotate?: string;
  className?: string;
  tone?: "sepia" | "green" | "saffron";
  develop?: boolean;
  delay?: number;
}) {
  const wash =
    tone === "green"
      ? "from-leafgreen/30 to-brown/20"
      : tone === "saffron"
        ? "from-saffron/35 to-brown/20"
        : "from-brown/28 to-gold/20";
  return (
    <figure
      className={`relative bg-paper p-2 pb-8 shadow-[0_12px_24px_-14px_oklch(0_0_0/0.55)] ${className}`}
      style={{ transform: `rotate(${rotate})` }}
    >
      <div
        className={`aspect-[4/3] w-full bg-linear-to-br ${wash} ${develop ? "anim-develop" : ""}`}
        style={develop ? { animationDelay: `${delay}ms` } : undefined}
      >
        <div className="flex h-full items-center justify-center">
          <span className="font-sans text-[0.55rem] tracking-[0.3em] text-brown/60 uppercase">
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

/** Photo that flips to reveal a handwritten note on its back. */
export function FlipPhoto({
  caption,
  back,
  tone = "sepia",
  rotate = "-1.2deg",
}: {
  caption: string;
  back: string;
  tone?: "sepia" | "green" | "saffron";
  rotate?: string;
}) {
  const [flipped, setFlipped] = useState(false);
  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        setFlipped((f) => !f);
      }}
      className="relative block aspect-[4/5] w-full [perspective:900px]"
      aria-label={flipped ? "show photo" : "show the note on the back"}
      style={{ transform: `rotate(${rotate})` }}
    >
      <span
        className="absolute inset-0 transition-transform duration-500 [transform-style:preserve-3d]"
        style={{ transform: `rotateY(${flipped ? 180 : 0}deg)` }}
      >
        <span className="absolute inset-0 [backface-visibility:hidden]">
          <Polaroid caption={caption} rotate="0deg" tone={tone} className="h-full" />
        </span>
        <span
          className="absolute inset-0 flex items-center justify-center bg-paper-deep p-3 text-center [backface-visibility:hidden] shadow-[0_12px_24px_-14px_oklch(0_0_0/0.55)]"
          style={{ transform: "rotateY(180deg)" }}
        >
          <span className="font-hand text-base leading-snug text-ink">{back}</span>
        </span>
      </span>
    </button>
  );
}

/** Folded note that unfolds on tap. */
export function FoldedNote({
  children,
  label = "एक नोट — tap to unfold",
  className = "",
}: {
  children: ReactNode;
  label?: string;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`relative ${className}`}>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setOpen((o) => !o);
        }}
        className="relative w-full bg-paper-deep px-4 py-3 text-left shadow-[0_8px_18px_-10px_oklch(0_0_0/0.45)] transition-transform hover:-translate-y-0.5"
      >
        <span className="pointer-events-none absolute inset-x-0 top-1/2 h-px bg-paper-edge/70" />
        <span className="pointer-events-none absolute top-0 right-0 h-6 w-6 bg-linear-to-bl from-paper to-paper-edge" />
        <span className="font-sans relative text-[0.6rem] tracking-[0.28em] text-brown/70 uppercase">
          {open ? "fold back" : label}
        </span>
      </button>
      {open && (
        <div className="anim-unfold mt-1 bg-paper px-4 py-3 shadow-[0_10px_20px_-12px_oklch(0_0_0/0.4)]">
          {children}
        </div>
      )}
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
