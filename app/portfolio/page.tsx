"use client";
import Image from "next/image";
import { useState } from "react";

type Item = { src: string; alt: string; tag: "Portraits" | "Dance" | "Events" };

const items: Item[] = [
  { src: "/portfolio/shot1.jpg", alt: "Portrait 1", tag: "Portraits" },
  { src: "/portfolio/shot2.jpg", alt: "Portrait 2", tag: "Portraits" },
  { src: "/portfolio/shot3.jpg", alt: "Dance 1", tag: "Dance" },
  { src: "/portfolio/shot4.jpg", alt: "Events 1", tag: "Events" },
  { src: "/portfolio/shot5.jpg", alt: "Dance 2", tag: "Dance" },
  { src: "/portfolio/shot6.jpg", alt: "Portrait 3", tag: "Portraits" },
];

const TAGS = ["All Work", "Portraits", "Dance", "Events"] as const;
type Tag = typeof TAGS[number];

export default function PortfolioPage() {
  const [tag, setTag] = useState<Tag>("All Work");
  const filtered = tag === "All Work" ? items : items.filter((i) => i.tag === tag);

  return (
    <section>
      <div className="text-center">
        <h1 className="font-[var(--font-display)] text-5xl">Our Complete Portfolio</h1>
        <p className="text-muted max-w-3xl mx-auto mt-3">
          Explore luxury photography across portraits, dance, and events.
        </p>
      </div>

      <div className="flex flex-wrap gap-3 justify-center mt-8">
        {TAGS.map((t) => (
          <button
            key={t}
            onClick={() => setTag(t)}
            className={`px-4 py-2 rounded-lg border transition ${
              tag === t ? "bg-charcoal text-white" : "bg-white text-charcoal hover:bg-gray-50"
            }`}
          >
            {t}
            <span className="ml-1 text-muted">
              ({t === "All Work" ? items.length : items.filter((i) => i.tag === t).length})
            </span>
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {filtered.map((img) => (
          <div key={img.src} className="relative h-[420px] rounded-2xl overflow-hidden shadow-soft bg-white">
            <Image src={img.src} alt={img.alt} fill className="object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}
