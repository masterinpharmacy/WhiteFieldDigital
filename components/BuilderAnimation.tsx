/* "Digitale bouwer": een browservenster dat zichzelf blok voor blok opbouwt en dan opnieuw begint. Puur CSS. */
export default function BuilderAnimation() {
  return (
    <div aria-hidden className="builder relative mx-auto w-full max-w-md select-none">
      <div className="rounded-2xl border border-ink/10 bg-white shadow-[0_30px_60px_-30px_rgba(18,32,26,0.35)]">
        <div className="flex items-center gap-1.5 border-b border-ink/10 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
          <span className="ml-3 flex h-5 flex-1 items-center rounded-full bg-chalk px-3 text-[10px] text-stone">
            <span className="b-url">uwbedrijf.nl</span>
          </span>
        </div>
        <div className="grid gap-3 p-5">
          <div className="b b1 flex items-center justify-between">
            <span className="h-3 w-20 rounded bg-ink" />
            <span className="flex gap-2">
              <span className="h-2 w-8 rounded bg-ink/15" />
              <span className="h-2 w-8 rounded bg-ink/15" />
              <span className="h-2 w-8 rounded bg-ink/15" />
            </span>
          </div>
          <div className="b b2 mt-2 h-5 w-4/5 rounded bg-ink/80" />
          <div className="b b3 h-3 w-3/5 rounded bg-ink/15" />
          <div className="b b4 mt-1 h-7 w-28 rounded-full bg-field" />
          <div className="mt-3 grid grid-cols-3 gap-3">
            <div className="b b5 h-16 rounded-lg bg-moss" />
            <div className="b b6 h-16 rounded-lg bg-moss" />
            <div className="b b7 h-16 rounded-lg bg-moss" />
          </div>
        </div>
      </div>
      <div className="b-cursor absolute h-5 w-5">
        <svg viewBox="0 0 24 24" className="h-5 w-5 drop-shadow" fill="#12201A">
          <path d="M4 2l16 9-7 2-3 8z" />
        </svg>
      </div>
      <div className="b-chip absolute -left-3 top-10 rounded-full border border-ink/10 bg-white px-3 py-1 text-xs font-semibold shadow-sm">
        ontwerp op maat
      </div>
      <div className="b-chip2 absolute -right-2 bottom-8 rounded-full bg-field px-3 py-1 text-xs font-semibold text-white shadow-sm">
        online binnen een week
      </div>
    </div>
  );
}
