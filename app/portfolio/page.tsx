"use client";
import { useState } from "react";
import Image from "next/image";

type Item = { src: string; alt: string; tag: "Portraits" | "Branding" | "Dance" | "Events" };
const ITEMS: Item[] = [
  { src: "/portfolio/shot1.jpg", alt: "Portrait 1", tag: "Portraits" },
  { src: "/portfolio/shot2.jpg", alt: "Branding 1", tag: "Branding" },
  { src: "/portfolio/shot3.jpg", alt: "Dance 1", tag: "Dance" },
  { src: "/portfolio/shot4.jpg", alt: "Events 1", tag: "Events" },
  { src: "/portfolio/shot5.jpg", alt: "Portrait 2", tag: "Portraits" },
  { src: "/portfolio/shot6.jpg", alt: "Branding 2", tag: "Branding" },
];

const TAGS = ["All", "Portraits", "Branding", "Dance", "Events"] as const;
type Tag = typeof TAGS[number];

export default function PortfolioPage() {
  const [tag, setTag] = useState<Tag>("All");
  const filtered = tag === "All" ? ITEMS : ITEMS.filter((i) => i.tag === tag);

  return (
    <section>
      <div className="h-kicker text-center">Portfolio</div>
      <h1 className="h-display text-5xl text-center mt-2">A Curated Selection</h1>
      <p className="text-stone text-center max-w-2xl mx-auto mt-3">Movement, emotion, and elegance—captured with intention.</p>

      <div className="flex flex-wrap gap-2 justify-center mt-8">
        {TAGS.map((t) => (
          <button
            key={t}
            onClick={() => setTag(t)}
            className={`px-4 py-2 rounded-lg border transition ${
              tag === t ? "bg-onyx text-paper" : "bg-paper hover:bg-linen"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {filtered.map((img) => (
          <div key={img.src} className="relative h-[420px] rounded-xl2 overflow-hidden bg-paper shadow-soft border">
            <Image src={img.src} alt={img.alt} fill className="object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}
