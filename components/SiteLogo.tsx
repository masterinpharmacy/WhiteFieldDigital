"use client";
import { useState } from "react";

export default function SiteLogo({ slug, name }: { slug: string; name: string }) {
  const [failed, setFailed] = useState(false);
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]!.toUpperCase())
    .join("");

  if (failed) {
    return (
      <span aria-hidden className="flex h-12 w-12 items-center justify-center rounded-xl bg-moss text-sm font-extrabold tracking-tight text-field">
        {initials}
      </span>
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/logos/${slug}.png`}
      alt={`Logo ${name}`}
      width={48}
      height={48}
      className="h-12 w-12 rounded-xl object-contain"
      onError={() => setFailed(true)}
    />
  );
}
