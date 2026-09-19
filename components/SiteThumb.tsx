"use client";
import { useState } from "react";

/* Browserkader met screenshot van de homepage; ontbreekt die, dan een wireframe in huisstijl. */
export default function SiteThumb({ slug, name }: { slug: string; name: string }) {
  const [failed, setFailed] = useState(false);
  return (
    <span className="block overflow-hidden rounded-lg border border-ink/10 bg-chalk">
      <span className="flex items-center gap-1 border-b border-ink/10 bg-white px-2 py-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-ink/20" />
        <span className="h-1.5 w-1.5 rounded-full bg-ink/20" />
        <span className="h-1.5 w-1.5 rounded-full bg-ink/20" />
        <span className="ml-2 h-2 flex-1 rounded-full bg-ink/5" />
      </span>
      <span className="block aspect-[16/9] w-full">
        {failed ? (
          <span aria-hidden className="grid h-full w-full grid-cols-6 gap-1.5 p-3">
            <span className="col-span-6 h-2 rounded bg-ink/10" />
            <span className="col-span-4 mt-1 h-3 rounded bg-ink/20" />
            <span className="col-span-2" />
            <span className="col-span-3 h-2 rounded bg-ink/10" />
            <span className="col-span-3" />
            <span className="col-span-2 mt-1 h-full rounded bg-moss" />
            <span className="col-span-2 mt-1 h-full rounded bg-moss" />
            <span className="col-span-2 mt-1 h-full rounded bg-field/70" />
          </span>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={`/screens/${slug}.jpg`}
            alt={`Homepage van ${name}`}
            className="h-full w-full object-cover object-top transition group-hover:scale-[1.02]"
            onError={() => setFailed(true)}
          />
        )}
      </span>
    </span>
  );
}
