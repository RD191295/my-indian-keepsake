import { useState, type ReactNode } from "react";
import {
  ChapterMark,
  FlipPhoto,
  FoldedNote,
  OrnamentDivider,
  PageBorder,
  Placeholder,
  Polaroid,
  WashiTape,
} from "./ornaments";

const CHAPTERS = [
  { n: "01", deva: "शुरुआत", en: "The beginning" },
  { n: "02", deva: "बातें", en: "Our conversations" },
  { n: "03", deva: "यादें", en: "Little memories" },
  { n: "04", deva: "पल", en: "Little moments" },
  { n: "05", deva: "मुस्कान", en: "Things that made me smile" },
  { n: "06", deva: "एक याद खोलो", en: "Hidden memories" },
  { n: "07", deva: "Mumbai", en: "A postcard" },
  { n: "08", deva: "थोड़ा सा मज़ा", en: "A playful quiz" },
  { n: "09", deva: "ख़ास", en: "Things I remember about you" },
  { n: "10", deva: "आगे...", en: "A letter" },
];

function markProps(i: number) {
  const c = CHAPTERS[i]!;
  return { number: c.n, deva: c.deva, english: c.en };
}

const stop = (e: React.MouseEvent) => e.stopPropagation();

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="page-imperfections deckle-edge relative h-full px-7 py-8 sm:px-9">
      {children}
    </div>
  );
}
}

/* ---------------- cover ---------------- */

function CoverPage() {
  return (
    <div className="cover-surface relative flex h-full flex-col items-center justify-center px-10 text-center">
      <div className="cloth-grain pointer-events-none absolute inset-0 opacity-70" />
      <div className="pointer-events-none absolute inset-5 border border-gold/30" />
      <div className="pointer-events-none absolute inset-[27px] border border-gold/14" />

    <h1 className="gold-foil font-deva relative mt-10 text-[2.1rem] leading-[1.35] sm:text-[2.6rem]">
      <span className="block whitespace-nowrap">एक छोटी सी</span>
      <span className="block whitespace-nowrap">कहानी</span>
    </h1>

      <p className="gold-foil font-display relative mt-6 text-[0.82rem] leading-relaxed tracking-[0.28em] uppercase sm:text-[0.95rem]">
        <span className="block whitespace-nowrap">EK CHHOTI SI</span>
        <span className="block whitespace-nowrap">KAHAANI</span>
      </p>

      <div className="relative mt-8 flex flex-col items-center">
      <div className="mb-7 opacity-90">
        <OrnamentDivider width="w-44" />
      </div>
    
      <p className="font-display max-w-[22ch] text-[0.82rem] leading-[1.8] tracking-[0.04em] text-gold-soft/60 italic">
        Four months. A few conversations. Many little memories.
      </p>
    
      <p className="gold-foil font-guj mt-10 text-[0.72rem] tracking-[0.16em] opacity-80">
        એક નાની યાદોની ડાયરી
      </p>
    </div>
    </div>
  );
}

/* ---------------- front matter ---------------- */

function TitlePage() {
  return (
    <PageShell>
      <PageBorder />
      <div className="flex h-full flex-col items-center justify-center text-center">
        <p className="font-sans text-[0.55rem] tracking-[0.42em] text-ink-soft uppercase">
          handmade paper · edition of one
        </p>
        <h2 className="font-deva mt-8 text-[1.6rem] text-maroon">एक छोटी सी कहानी</h2>
        <p className="font-display mt-3 text-sm tracking-[0.3em] text-ink-soft uppercase">
          Ek Chhoti Si Kahaani
        </p>
        <OrnamentDivider className="my-7" width="w-36" />
        <p className="font-hand max-w-[26ch] text-xl text-ink">kept quietly, page by page</p>
        <p className="font-guj mt-10 text-[0.7rem] tracking-[0.18em] text-ink-soft/70">
          એક નાની યાદોની ડાયરી
        </p>
      </div>
    </PageShell>
  );
}

function ContentsPage() {
  return (
    <PageShell>
      <PageBorder tone="maroon" />
      <div className="flex h-full flex-col justify-center px-2">
        <h2 className="font-display text-center text-xl tracking-[0.32em] text-maroon uppercase">
          Contents
        </h2>
        <OrnamentDivider className="mt-3 mb-5" width="w-32" />
        <ol className="space-y-2.5">
          {CHAPTERS.map((c) => (
            <li key={c.n} className="flex items-baseline gap-3">
              <span className="font-sans text-[0.6rem] tracking-[0.2em] text-gold">{c.n}</span>
              <span className="font-deva text-base text-maroon">{c.deva}</span>
              <span className="mx-1 h-px flex-1 bg-paper-edge" />
              <span className="font-display text-xs text-ink-soft italic">{c.en}</span>
            </li>
          ))}
        </ol>
      </div>
    </PageShell>
  );
}

/* ---------------- 01 शुरुआत — developing polaroid ---------------- */

function BeginningPage() {
  return (
    <PageShell>
      <PageBorder />
      <div className="flex h-full flex-col justify-center gap-6">
        <ChapterMark {...markProps(0)} />
        <p className="font-hand text-xl leading-snug text-ink">How it started — placeholder line.</p>
        <Placeholder lines={2} />
      </div>
    </PageShell>
  );
}

function BeginningPhotosPage() {
  return (
    <PageShell>
      <div className="flex h-full flex-col justify-center gap-6 px-2">
        <div className="relative mx-auto w-3/4">
          <WashiTape className="-top-2 left-1/2 -translate-x-1/2" tone="saffron" />
          <Polaroid caption="placeholder photo" rotate="-2deg" develop delay={250} />
        </div>
        <p className="font-sans text-center text-[0.68rem] leading-relaxed text-ink-soft">
          The first picture develops as the page opens.
        </p>
        <OrnamentDivider width="w-28" />
      </div>
    </PageShell>
  );
}

/* ---------------- 02 बातें — folded notes ---------------- */

function ConversationsPage() {
  const lines = [
    { side: "l", text: "placeholder message" },
    { side: "r", text: "placeholder reply" },
    { side: "l", text: "placeholder — a long one" },
    { side: "r", text: "placeholder :)" },
  ];
  return (
    <PageShell>
      <PageBorder />
      <div className="flex h-full flex-col justify-center gap-5">
        <ChapterMark {...markProps(1)} />
        <ul className="space-y-2.5">
          {lines.map((l, i) => (
            <li key={i} className={l.side === "r" ? "flex justify-end" : "flex justify-start"}>
              <span
                className={`font-hand max-w-[78%] px-3 py-2 text-base ${
                  l.side === "r"
                    ? "rounded-t-lg rounded-bl-lg bg-maroon/10 text-ink"
                    : "rounded-t-lg rounded-br-lg bg-paper-deep text-ink"
                }`}
              >
                {l.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </PageShell>
  );
}

function ConversationsQuotePage() {
  return (
    <PageShell>
      <div className="flex h-full flex-col justify-center gap-6 px-1">
        <p className="font-display text-center text-2xl leading-9 text-maroon italic">
          “a line we said often — placeholder”
        </p>
        <OrnamentDivider width="w-28" />
        <FoldedNote className="mx-auto w-11/12">
          <p className="font-hand text-lg text-ink">placeholder — what it actually meant</p>
          <p className="font-sans mt-1 text-[0.62rem] text-ink-soft">replace with the real thing</p>
        </FoldedNote>
      </div>
    </PageShell>
  );
}

/* ---------------- 03 यादें — flip photos ---------------- */

function MemoriesPage() {
  return (
    <PageShell>
      <div className="flex h-full flex-col justify-center gap-4">
        <ChapterMark {...markProps(2)} />
        <p className="font-sans text-center text-[0.62rem] tracking-[0.2em] text-ink-soft uppercase">
          tap a photo to read its back
        </p>
        <div className="grid grid-cols-2 gap-4 px-2">
          <FlipPhoto caption="placeholder" back="placeholder note" tone="sepia" rotate="-2deg" />
          <FlipPhoto caption="placeholder" back="placeholder note" tone="green" rotate="1.6deg" />
        </div>
      </div>
    </PageShell>
  );
}

/* ---------------- 04 पल — timeline ---------------- */

function MomentsPage() {
  const [active, setActive] = useState(0);
  const moments = ["placeholder moment", "placeholder moment", "placeholder moment", "placeholder moment"];
  return (
    <PageShell>
      <div className="flex h-full flex-col justify-center gap-6">
        <ChapterMark {...markProps(3)} />
        <div className="relative px-2" onClick={stop}>
          <span className="absolute top-2.5 right-3 left-3 h-px bg-paper-edge" />
          <div className="relative flex justify-between">
            {moments.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`moment ${i + 1}`}
                className={`h-5 w-5 rounded-full border transition-all ${
                  active === i
                    ? "scale-110 border-maroon bg-maroon"
                    : "border-brown/40 bg-paper hover:border-gold"
                }`}
              />
            ))}
          </div>
        </div>
        <div className="relative mx-2 border border-dashed border-brown/35 bg-paper-deep/50 px-4 py-5">
          <WashiTape className="-top-2 left-4" tone="green" rotate="4deg" />
          <p className="font-hand text-lg text-ink">{moments[active]}</p>
          <p className="font-sans mt-1 text-[0.55rem] tracking-[0.3em] text-brown/70 uppercase">
            no. {active + 1} of {moments.length}
          </p>
        </div>
      </div>
    </PageShell>
  );
}

/* ---------------- 05 मुस्कान — tick list ---------------- */

function SmilePage() {
  const [ticked, setTicked] = useState<number[]>([]);
  const toggle = (i: number) =>
    setTicked((t) => (t.includes(i) ? t.filter((x) => x !== i) : [...t, i]));
  return (
    <PageShell>
      <PageBorder tone="maroon" />
      <div className="flex h-full flex-col justify-center gap-5">
        <ChapterMark {...markProps(4)} />
        <ul className="space-y-3 px-2" onClick={stop}>
          {Array.from({ length: 5 }).map((_, i) => (
            <li key={i}>
              <button
                type="button"
                onClick={() => toggle(i)}
                className="flex w-full items-baseline gap-3 text-left"
              >
                <span
                  className={`font-hand w-4 text-lg ${ticked.includes(i) ? "text-maroon" : "text-gold/50"}`}
                >
                  {ticked.includes(i) ? "✓" : "✧"}
                </span>
                <span
                  className={`font-hand flex-1 border-b border-dotted border-paper-edge pb-1 text-lg transition-colors ${
                    ticked.includes(i) ? "text-ink-soft line-through decoration-maroon/50" : "text-ink"
                  }`}
                >
                  placeholder — something that made me smile
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </PageShell>
  );
}

/* ---------------- 06 एक याद खोलो — envelopes ---------------- */

function HiddenMemoriesPage() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <PageShell>
      <div className="flex h-full flex-col justify-center gap-5">
        <ChapterMark {...markProps(5)} />
        <p className="font-sans text-center text-[0.66rem] tracking-wide text-ink-soft">
          एक लिफ़ाफ़ा खोलो — open an envelope
        </p>
        <div className="grid grid-cols-2 gap-4 px-1" onClick={stop}>
          {[0, 1, 2, 3].map((i) => {
            const isOpen = open === i;
            return (
              <button
                key={i}
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                className="relative aspect-[4/3] [perspective:700px]"
                aria-label={isOpen ? "close envelope" : "open envelope"}
              >
                {isOpen && (
                  <span className="anim-card-out absolute inset-x-2 top-0 z-0 flex h-[86%] items-center justify-center bg-paper px-2 text-center shadow-[0_10px_18px_-12px_oklch(0_0_0/0.5)]">
                    <span className="font-hand text-sm leading-snug text-ink">
                      placeholder memory {i + 1}
                    </span>
                  </span>
                )}
                <span className="absolute inset-0 z-10 border border-brown/35 bg-paper-deep shadow-[0_6px_14px_-10px_oklch(0_0_0/0.5)]">
                  <span className="absolute inset-x-0 bottom-0 h-[62%] bg-linear-to-t from-brown/12 to-transparent" />
                  {!isOpen && (
                    <span className="font-sans absolute right-0 bottom-2 left-0 text-center text-[0.55rem] tracking-[0.3em] text-brown/70 uppercase">
                      open
                    </span>
                  )}
                </span>
                <span
                  className="absolute inset-x-0 top-0 z-20 h-1/2 origin-top border-b border-brown/25 bg-linear-to-b from-saffron/25 to-paper-deep transition-transform duration-500 [clip-path:polygon(0_0,100%_0,50%_100%)]"
                  style={{ transform: `rotateX(${isOpen ? -172 : 0}deg)` }}
                />
              </button>
            );
          })}
        </div>
      </div>
    </PageShell>
  );
}

/* ---------------- 07 Mumbai — flipping postcard ---------------- */

function PostcardPage() {
  const [flipped, setFlipped] = useState(false);
  return (
    <PageShell>
      <div className="flex h-full flex-col justify-center gap-5">
        <ChapterMark number="07" deva="Mumbai" english="A postcard" />
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setFlipped((f) => !f);
          }}
          aria-label="flip the postcard"
          className="relative mx-1 aspect-[3/2] [perspective:1100px]"
        >
          <span
            className="absolute inset-0 transition-transform duration-600 [transform-style:preserve-3d]"
            style={{ transform: `rotateY(${flipped ? 180 : 0}deg)` }}
          >
            <span className="absolute inset-0 border border-brown/40 bg-linear-to-br from-saffron/35 to-maroon/25 [backface-visibility:hidden] shadow-[0_10px_24px_-14px_oklch(0_0_0/0.5)]">
              <span className="font-display absolute right-0 bottom-3 left-0 text-center text-lg tracking-[0.3em] text-paper uppercase">
                Mumbai
              </span>
            </span>
            <span
              className="absolute inset-0 grid grid-cols-2 gap-3 border border-brown/40 bg-paper p-3 [backface-visibility:hidden] shadow-[0_10px_24px_-14px_oklch(0_0_0/0.5)]"
              style={{ transform: "rotateY(180deg)" }}
            >
              <span className="font-hand block text-left text-base leading-tight text-ink">
                placeholder note from Mumbai
              </span>
              <span className="flex flex-col">
                <span className="mb-2 flex justify-end">
                  <span className="flex h-9 w-8 items-center justify-center border border-dashed border-maroon/50 text-[0.5rem] text-maroon">
                    ₹5
                  </span>
                </span>
                <span className="mt-auto block space-y-2">
                  <span className="block h-px bg-paper-edge" />
                  <span className="block h-px bg-paper-edge" />
                  <span className="block h-px bg-paper-edge" />
                </span>
              </span>
            </span>
          </span>
        </button>
        <p className="font-sans text-center text-[0.6rem] tracking-[0.3em] text-brown/60 uppercase">
          मुंबई · tap to turn it over
        </p>
      </div>
    </PageShell>
  );
}

/* ---------------- 08 थोड़ा सा मज़ा — quiz ---------------- */

function QuizPage() {
  const [picked, setPicked] = useState<Record<number, number>>({});
  const questions = [
    { q: "placeholder question one?", a: ["placeholder", "placeholder", "placeholder"] },
    { q: "placeholder question two?", a: ["placeholder", "placeholder", "placeholder"] },
  ];
  const notes = ["शायद!", "hmm...", "बिल्कुल!"];
  return (
    <PageShell>
      <PageBorder />
      <div className="flex h-full flex-col justify-center gap-5">
        <ChapterMark {...markProps(7)} />
        <div className="space-y-5 px-1" onClick={stop}>
          {questions.map((item, qi) => (
            <div key={qi}>
              <p className="font-display text-base text-maroon">{item.q}</p>
              <div className="mt-2 flex flex-wrap items-center gap-2">
                {item.a.map((opt, oi) => (
                  <button
                    key={oi}
                    type="button"
                    onClick={() => setPicked({ ...picked, [qi]: oi })}
                    className={`font-hand border px-3 py-1 text-base transition-colors ${
                      picked[qi] === oi
                        ? "border-maroon bg-maroon/10 text-maroon"
                        : "border-paper-edge text-ink hover:border-gold"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
                {picked[qi] !== undefined && (
                  <span className="font-hand -rotate-6 text-lg text-leafgreen">
                    {notes[picked[qi]! % notes.length]}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
        <p className="font-sans text-center text-[0.6rem] text-ink-soft italic">
          answers are placeholders for now
        </p>
      </div>
    </PageShell>
  );
}

/* ---------------- 09 ख़ास — peel cards ---------------- */

function AboutYouPage() {
  const [peeled, setPeeled] = useState(0);
  const total = 4;
  return (
    <PageShell>
      <div className="flex h-full flex-col justify-center gap-5">
        <ChapterMark {...markProps(8)} />
        <div className="relative mx-auto h-44 w-11/12" onClick={stop}>
          {Array.from({ length: total }).map((_, i) => {
            const gone = i < peeled;
            return (
              <button
                key={i}
                type="button"
                onClick={() => setPeeled(i + 1)}
                disabled={gone || i !== peeled}
                aria-label={`reveal card ${i + 1}`}
                className="absolute inset-0 border border-brown/25 bg-paper p-5 text-left shadow-[0_10px_20px_-14px_oklch(0_0_0/0.5)] transition-all duration-500"
                style={{
                  zIndex: total - i,
                  transform: gone
                    ? "translate(-58%, -12%) rotate(-14deg)"
                    : `translateY(${(i - peeled) * 6}px) rotate(${(i - peeled) * 1.2}deg)`,
                  opacity: gone ? 0 : 1,
                }}
              >
                <span className="font-display block text-lg text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-hand mt-2 block text-lg leading-snug text-ink">
                  placeholder — something I remember about you
                </span>
              </button>
            );
          })}
          {peeled >= total && (
            <button
              type="button"
              onClick={() => setPeeled(0)}
              className="font-sans absolute inset-x-0 bottom-0 text-[0.6rem] tracking-[0.3em] text-ink-soft uppercase"
            >
              stack them again
            </button>
          )}
        </div>
      </div>
    </PageShell>
  );
}

/* ---------------- 10 आगे... — letter ---------------- */

function LetterPage() {
  const [open, setOpen] = useState(false);
  return (
    <PageShell>
      <PageBorder tone="maroon" />
      <div className="flex h-full flex-col justify-center gap-5" onClick={stop}>
        <ChapterMark {...markProps(9)} />
        {open ? (
          <div className="anim-unfold space-y-4 px-1">
            <p className="font-hand text-lg leading-8 text-ink">
              placeholder letter — the last page stays open for whatever you want to say next.
            </p>
            <p className="font-hand text-right text-xl text-maroon">— placeholder</p>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="relative mx-auto flex h-32 w-4/5 items-end justify-center bg-paper-deep pb-4 shadow-[0_10px_20px_-12px_oklch(0_0_0/0.45)] transition-transform hover:-translate-y-0.5"
          >
            <span className="absolute inset-x-0 top-1/3 h-px bg-paper-edge/70" />
            <span className="absolute inset-x-0 top-2/3 h-px bg-paper-edge/70" />
            <span className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-maroon text-gold-soft shadow-[0_4px_10px_-4px_oklch(0_0_0/0.6)]">
              <span className="font-deva text-sm">क</span>
            </span>
            <span className="font-sans text-[0.58rem] tracking-[0.3em] text-brown/70 uppercase">
              unfold the letter
            </span>
          </button>
        )}
      </div>
    </PageShell>
  );
}

function EndPage() {
  return (
    <PageShell>
      <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
        <OrnamentDivider width="w-32" />
        <p className="font-deva text-2xl text-maroon">आगे...</p>
        <p className="font-display text-sm text-ink-soft italic">to be continued</p>
        <p className="font-guj mt-8 text-[0.68rem] tracking-[0.18em] text-ink-soft/70">
          એક નાની યાદોની ડાયરી
        </p>
      </div>
    </PageShell>
  );
}

export const PAGES: Array<{ node: ReactNode; cover?: boolean }> = [
  { node: <CoverPage />, cover: true },
  { node: <TitlePage /> },
  { node: <ContentsPage /> },
  { node: <BeginningPage /> },
  { node: <BeginningPhotosPage /> },
  { node: <ConversationsPage /> },
  { node: <ConversationsQuotePage /> },
  { node: <MemoriesPage /> },
  { node: <MomentsPage /> },
  { node: <SmilePage /> },
  { node: <HiddenMemoriesPage /> },
  { node: <PostcardPage /> },
  { node: <QuizPage /> },
  { node: <AboutYouPage /> },
  { node: <LetterPage /> },
  { node: <EndPage /> },
];
