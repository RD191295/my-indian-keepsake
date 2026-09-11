import { useState, type ReactNode } from "react";
import {
  ChapterMark,
  Divider,
  FoldedNote,
  PageBorder,
  PhotoFrame,
  Placeholder,
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

/* ---------------- individual pages ---------------- */

function CoverPage() {
  return (
    <div className="cover-surface relative flex h-full flex-col items-center justify-center px-8 text-center">
      <div className="pointer-events-none absolute inset-5 border border-gold/35" />
      <div className="pointer-events-none absolute inset-[26px] border border-gold/15" />
      <p className="font-sans text-[0.58rem] tracking-[0.5em] text-gold-soft/80 uppercase">
        a keepsake
      </p>
      <h1 className="font-deva mt-6 text-4xl leading-[1.5] text-gold-soft sm:text-5xl">
        एक छोटी सी कहानी
      </h1>
      <p className="font-display mt-3 text-xl tracking-[0.22em] text-gold/90 uppercase">
        Ek Chhoti Si Kahaani
      </p>
      <Divider className="mt-6 opacity-80" />
      <p className="font-display mt-6 max-w-[22ch] text-sm leading-relaxed text-paper/70 italic">
        Four months. A few conversations. Many little memories.
      </p>
      <p className="font-guj absolute bottom-8 text-xs tracking-widest text-gold/50">
        હાથ બનાવટની ડાયરી
      </p>
    </div>
  );
}

function TitlePage() {
  return (
    <PageShell>
      <PageBorder />
      <div className="flex h-full flex-col items-center justify-center text-center">
        <p className="font-sans text-[0.55rem] tracking-[0.42em] text-ink-soft uppercase">
          handmade paper · limited edition of one
        </p>
        <h2 className="font-deva mt-8 text-3xl text-maroon">एक छोटी सी कहानी</h2>
        <p className="font-display mt-2 text-lg tracking-[0.18em] text-ink-soft uppercase">
          Ek Chhoti Si Kahaani
        </p>
        <Divider className="my-7" />
        <p className="font-hand max-w-[26ch] text-xl text-ink">
          kept quietly, page by page
        </p>
        <p className="font-sans mt-10 text-[0.6rem] tracking-[0.3em] text-ink-soft/70 uppercase">
          for you
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
        <h2 className="font-display text-center text-2xl tracking-[0.2em] text-maroon uppercase">
          Contents
        </h2>
        <Divider className="mt-3 mb-5" />
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

function BeginningPage() {
  return (
    <PageShell>
      <PageBorder />
      <div className="flex h-full flex-col justify-center gap-5">
        <ChapterMark {...markProps(0)} />
        <div className="space-y-3">
          <p className="font-hand text-xl leading-snug text-ink">
            How it started — placeholder line.
          </p>
          <Placeholder lines={2} />
        </div>
        <FoldedNote className="mx-auto w-11/12">
          <p className="font-hand text-lg text-ink">first note goes here</p>
          <p className="font-sans mt-1 text-[0.65rem] text-ink-soft">
            replace with the real beginning
          </p>
        </FoldedNote>
      </div>
    </PageShell>
  );
}

function BeginningPhotosPage() {
  return (
    <PageShell>
      <div className="flex h-full flex-col justify-center gap-6 px-2">
        <PhotoFrame caption="placeholder photo" rotate="-2deg" className="mx-auto w-3/4" />
        <p className="font-sans text-center text-[0.68rem] leading-relaxed text-ink-soft">
          A page for the very first picture. Placeholder until you send it.
        </p>
        <Divider />
      </div>
    </PageShell>
  );
}

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
                className={`max-w-[78%] px-3 py-2 text-sm ${
                  l.side === "r"
                    ? "font-hand rounded-t-lg rounded-bl-lg bg-maroon/10 text-ink"
                    : "font-hand rounded-t-lg rounded-br-lg bg-paper-deep text-ink"
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
      <div className="ink-underline flex h-full flex-col justify-center px-2">
        <p className="font-display text-center text-2xl leading-[1.75rem] text-maroon italic">
          “a line we said often —
          <br /> placeholder”
        </p>
        <p className="font-hand mt-6 text-center text-lg text-ink-soft">— us, sometime</p>
      </div>
    </PageShell>
  );
}

function MemoriesPage() {
  return (
    <PageShell>
      <PageBorder />
      <div className="flex h-full flex-col justify-center gap-4">
        <ChapterMark {...markProps(2)} />
        <div className="grid grid-cols-2 gap-4 px-1">
          <PhotoFrame caption="placeholder" rotate="-2.2deg" tone="sepia" />
          <PhotoFrame caption="placeholder" rotate="1.8deg" tone="green" />
          <PhotoFrame caption="placeholder" rotate="1.2deg" tone="saffron" />
          <PhotoFrame caption="placeholder" rotate="-1deg" tone="sepia" />
        </div>
      </div>
    </PageShell>
  );
}

function MomentsPage() {
  const stubs = ["placeholder moment", "placeholder moment", "placeholder moment"];
  return (
    <PageShell>
      <div className="flex h-full flex-col justify-center gap-5">
        <ChapterMark {...markProps(3)} />
        <div className="space-y-3">
          {stubs.map((s, i) => (
            <div
              key={i}
              className="relative flex items-center justify-between border border-dashed border-brown/40 bg-paper-deep/60 px-4 py-3"
              style={{ transform: `rotate(${i % 2 ? "0.7deg" : "-0.6deg"})` }}
            >
              <span className="font-hand text-lg text-ink">{s}</span>
              <span className="font-sans text-[0.55rem] tracking-[0.3em] text-brown/70 uppercase">
                no. {i + 1}
              </span>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}

function SmilePage() {
  return (
    <PageShell>
      <PageBorder tone="maroon" />
      <div className="flex h-full flex-col justify-center gap-5">
        <ChapterMark {...markProps(4)} />
        <ul className="space-y-3 px-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <li key={i} className="flex items-baseline gap-3">
              <span className="text-gold">✧</span>
              <span className="font-hand flex-1 border-b border-dotted border-paper-edge pb-1 text-lg text-ink">
                placeholder — something that made me smile
              </span>
            </li>
          ))}
        </ul>
      </div>
    </PageShell>
  );
}

function HiddenMemoriesPage() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <PageShell>
      <div className="flex h-full flex-col justify-center gap-5">
        <ChapterMark {...markProps(5)} />
        <p className="font-sans text-center text-[0.68rem] tracking-wide text-ink-soft">
          एक लिफ़ाफ़ा खोलो — open an envelope
        </p>
        <div className="grid grid-cols-2 gap-3 px-1">
          {[0, 1, 2, 3].map((i) => (
            <button
              key={i}
              type="button"
              onClick={() => setOpen(open === i ? null : i)}
              className="group relative aspect-[4/3] overflow-hidden border border-brown/35 bg-paper-deep transition-transform hover:-translate-y-0.5"
            >
              <span className="pointer-events-none absolute inset-x-0 top-0 h-1/2 border-b border-brown/25 bg-linear-to-b from-saffron/20 to-transparent [clip-path:polygon(0_0,100%_0,50%_100%)]" />
              {open === i ? (
                <span className="font-hand absolute inset-0 flex items-center justify-center bg-paper px-3 text-center text-base text-ink">
                  placeholder memory {i + 1}
                </span>
              ) : (
                <span className="font-sans absolute bottom-2 left-0 right-0 text-center text-[0.55rem] tracking-[0.3em] text-brown/70 uppercase">
                  open
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </PageShell>
  );
}

function PostcardPage() {
  return (
    <PageShell>
      <div className="flex h-full flex-col justify-center gap-4">
        <ChapterMark number="07" deva="Mumbai" english="A postcard" />
        <div className="relative mx-1 border border-brown/40 bg-paper p-3 shadow-[0_10px_24px_-14px_oklch(0_0_0/0.5)]">
          <div className="grid grid-cols-2 gap-3">
            <div className="aspect-[4/3] bg-linear-to-br from-saffron/35 to-maroon/25">
              <div className="flex h-full items-center justify-center">
                <span className="font-sans text-[0.55rem] tracking-[0.3em] text-brown/70 uppercase">
                  photo
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="mb-2 flex justify-end">
                <span className="flex h-9 w-8 items-center justify-center border border-dashed border-maroon/50 text-[0.5rem] text-maroon">
                  ₹5
                </span>
              </div>
              <p className="font-hand text-base leading-tight text-ink">
                placeholder note from Mumbai
              </p>
              <span className="mt-auto space-y-1">
                <span className="block h-px bg-paper-edge" />
                <span className="block h-px bg-paper-edge" />
                <span className="block h-px bg-paper-edge" />
              </span>
            </div>
          </div>
          <p className="font-sans mt-2 text-center text-[0.55rem] tracking-[0.35em] text-brown/60 uppercase">
            मुंबई · by the sea
          </p>
        </div>
      </div>
    </PageShell>
  );
}

function QuizPage() {
  const [picked, setPicked] = useState<Record<number, number>>({});
  const questions = [
    { q: "placeholder question one?", a: ["placeholder", "placeholder", "placeholder"] },
    { q: "placeholder question two?", a: ["placeholder", "placeholder", "placeholder"] },
  ];
  return (
    <PageShell>
      <PageBorder />
      <div className="flex h-full flex-col justify-center gap-5">
        <ChapterMark {...markProps(7)} />
        <div className="space-y-5 px-1">
          {questions.map((item, qi) => (
            <div key={qi}>
              <p className="font-display text-base text-maroon">{item.q}</p>
              <div className="mt-2 flex flex-wrap gap-2">
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

function AboutYouPage() {
  return (
    <PageShell>
      <div className="flex h-full flex-col justify-center gap-5">
        <ChapterMark {...markProps(8)} />
        <div className="space-y-3 px-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex gap-3">
              <span className="font-display text-lg text-gold">{String(i + 1).padStart(2, "0")}</span>
              <p className="font-hand flex-1 text-lg leading-snug text-ink">
                placeholder — something I remember about you
              </p>
            </div>
          ))}
        </div>
        <Divider />
      </div>
    </PageShell>
  );
}

function LetterPage() {
  return (
    <PageShell>
      <PageBorder tone="maroon" />
      <div className="ink-underline flex h-full flex-col justify-center gap-4 px-2">
        <ChapterMark {...markProps(9)} />
        <p className="font-hand text-lg leading-[1.75rem] text-ink">
          placeholder letter — the last page stays open for whatever you want to say next.
        </p>
        <p className="font-hand mt-4 text-right text-xl text-maroon">— placeholder</p>
      </div>
    </PageShell>
  );
}

function EndPage() {
  return (
    <PageShell>
      <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
        <Divider />
        <p className="font-deva text-2xl text-maroon">आगे...</p>
        <p className="font-display text-sm text-ink-soft italic">to be continued</p>
        <p className="font-sans mt-8 text-[0.55rem] tracking-[0.35em] text-ink-soft/70 uppercase">
          made by hand · कागज़ पर
        </p>
      </div>
    </PageShell>
  );
}

/* ---------------- shell ---------------- */

function markProps(i: number) {
  const c = CHAPTERS[i]!;
  return { number: c.n, deva: c.deva, english: c.en };
}

export function PageShell({ children }: { children: ReactNode }) {
  return <div className="relative h-full px-7 py-8 sm:px-9">{children}</div>;
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
