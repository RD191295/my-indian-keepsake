import { useCallback, useEffect, useRef, useState } from "react";
import paperTexture from "@/assets/paper-texture.jpg";
import { useIsMobile } from "@/hooks/use-mobile";
import { PAGES } from "./pages";

const LEAVES = Math.ceil(PAGES.length / 2);

export function Book() {
  const isMobile = useIsMobile();
  const [flipped, setFlipped] = useState(0); // desktop: leaves turned
  const [page, setPage] = useState(0); // mobile: page index
  const [dir, setDir] = useState<"next" | "prev">("next");
  const touch = useRef<{ x: number; y: number } | null>(null);

  const next = useCallback(() => {
    setDir("next");
    if (isMobile) setPage((p) => Math.min(p + 1, PAGES.length - 1));
    else setFlipped((f) => Math.min(f + 1, LEAVES));
  }, [isMobile]);

  const prev = useCallback(() => {
    setDir("prev");
    if (isMobile) setPage((p) => Math.max(p - 1, 0));
    else setFlipped((f) => Math.max(f - 1, 0));
  }, [isMobile]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  const onTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0];
    if (t) touch.current = { x: t.clientX, y: t.clientY };
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (!touch.current) return;
    const t = e.changedTouches[0];
    if (!t) return;
    const dx = t.clientX - touch.current.x;
    const dy = t.clientY - touch.current.y;
    touch.current = null;
    if (Math.abs(dx) < 45 || Math.abs(dx) < Math.abs(dy)) return;
    if (dx < 0) next();
    else prev();
  };

  const paperVars = { ["--paper-fibers" as string]: `url(${paperTexture})` } as React.CSSProperties;
  const progress = isMobile ? page / (PAGES.length - 1) : flipped / LEAVES;

  return (
    <div
      className="flex w-full flex-col items-center gap-6"
      style={paperVars}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {isMobile ? (
        <MobileBook page={page} dir={dir} onNext={next} onPrev={prev} />
      ) : (
        <DesktopBook flipped={flipped} onNext={next} onPrev={prev} />
      )}

      <nav className="flex items-center gap-5">
        <NavButton onClick={prev} disabled={isMobile ? page === 0 : flipped === 0} label="पिछला">
          ←
        </NavButton>
        <div className="h-px w-28 bg-gold/25">
          <div
            className="h-px bg-gold transition-[width] duration-500"
            style={{ width: `${Math.round(progress * 100)}%` }}
          />
        </div>
        <NavButton
          onClick={next}
          disabled={isMobile ? page === PAGES.length - 1 : flipped === LEAVES}
          label="अगला"
        >
          →
        </NavButton>
      </nav>
      <p className="font-sans text-[0.6rem] tracking-[0.3em] text-gold-soft/50 uppercase">
        {isMobile ? "swipe to turn the page" : "click a page edge, swipe or use ← →"}
      </p>
    </div>
  );
}

function NavButton({
  children,
  onClick,
  disabled,
  label,
}: {
  children: React.ReactNode;
  onClick: () => void;
  disabled: boolean;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/40 text-gold-soft transition-colors hover:bg-gold/10 disabled:opacity-25"
    >
      {children}
    </button>
  );
}

/* --------------- desktop: true two-page spread with turning leaves --------------- */

function DesktopBook({
  flipped,
  onNext,
  onPrev,
}: {
  flipped: number;
  onNext: () => void;
  onPrev: () => void;
}) {
  const closed = flipped === 0;
  const finished = flipped === LEAVES;
  const shift = closed ? "translateX(-25%)" : finished ? "translateX(25%)" : "translateX(0)";

  return (
    <div className="book-stage w-full max-w-[62rem] px-4">
      <div
        className="relative mx-auto aspect-[3/2] w-full transition-transform duration-500 ease-out"
        style={{ transform: shift, transformStyle: "preserve-3d" }}
      >
        {/* board / stack under the leaves */}
        <div
          className="absolute inset-y-0 left-0 w-1/2 bg-maroon-deep shadow-[var(--shadow-page)] transition-opacity duration-300"
          style={{ opacity: closed ? 0 : 1 }}
        />
        <div
          className="absolute inset-y-0 right-0 w-1/2 bg-maroon-deep shadow-[var(--shadow-page)] transition-opacity duration-300"
          style={{ opacity: finished ? 0 : 1 }}
        />
        <div
          className="absolute inset-y-2 left-1/2 w-6 -translate-x-1/2 bg-linear-to-r from-maroon-deep via-brown/60 to-maroon-deep transition-opacity duration-300"
          style={{ opacity: closed || finished ? 0 : 0.8 }}
        />

        {PAGES.map((_, i) => {
          if (i % 2) return null;
          const leafIndex = i / 2;
          const isFlipped = leafIndex < flipped;
          const front = PAGES[i]!;
          const back = PAGES[i + 1];
          return (
            <div
              key={leafIndex}
              className="absolute top-0 right-0 h-full w-1/2 transition-transform duration-[700ms] [transition-timing-function:cubic-bezier(0.3,0.7,0.2,1)]"
              style={{
                transformOrigin: "left center",
                transformStyle: "preserve-3d",
                transform: `rotateY(${isFlipped ? -180 : 0}deg)`,
                zIndex: isFlipped ? leafIndex : LEAVES - leafIndex,
                pointerEvents:
                  leafIndex === flipped || leafIndex === flipped - 1 ? "auto" : "none",
              }}
            >
              <div
                className={`leaf-face ${front.cover ? "" : "paper-surface page-shade-left"}`}
                onClick={onNext}
                role="presentation"
              >
                {front.node}
              </div>
              <div
                className="leaf-face paper-surface page-shade-right"
                style={{ transform: "rotateY(180deg)" }}
                onClick={onPrev}
                role="presentation"
              >
                {back?.node}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* --------------- mobile: single page --------------- */

function MobileBook({
  page,
  dir,
  onNext,
  onPrev,
}: {
  page: number;
  dir: "next" | "prev";
  onNext: () => void;
  onPrev: () => void;
}) {
  const current = PAGES[page] ?? PAGES[0]!;
  return (
    <div className="book-stage w-full px-5">
      <div className="relative mx-auto aspect-[3/4] w-full max-w-sm">
        <div className="absolute -inset-1.5 rounded-[2px] bg-maroon-deep shadow-[var(--shadow-page)]" />
        <div
          key={page}
          className={`absolute inset-0 overflow-hidden ${
            current.cover ? "" : "paper-surface"
          } ${dir === "next" ? "anim-page-right" : "anim-page-left"}`}
        >
          {current.node}
        </div>
        <button
          type="button"
          aria-label="previous page"
          onClick={onPrev}
          className="absolute inset-y-0 left-0 w-1/4"
        />
        <button
          type="button"
          aria-label="next page"
          onClick={onNext}
          className="absolute inset-y-0 right-0 w-1/4"
        />
      </div>
    </div>
  );
}
