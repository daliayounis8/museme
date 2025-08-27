"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const IMAGES = [
  { src: "/carousel/shot1.jpg", title: "Powerful Portraits" },
  { src: "/carousel/shot2.jpg", title: "City Muse" },
  { src: "/carousel/shot3.jpg", title: "Frozen Dance" },
  { src: "/carousel/shot4.jpg", title: "Confident Goddess" },
];

export default function HeroCarousel() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (paused) return;
    timer.current = setInterval(() => setI((v) => (v + 1) % IMAGES.length), 5000);
    return () => { if (timer.current) clearInterval(timer.current); };
  }, [paused]);

  return (
    <section className="mt-6">
      <div
        className="relative rounded-xl2 overflow-hidden shadow-soft h-[420px] bg-white"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {IMAGES.map((img, idx) => (
          <Image
            key={img.src}
            src={img.src}
            alt={img.title}
            fill
            className={`object-cover transition-opacity duration-[1200ms] ${idx === i ? "opacity-100" : "opacity-0"}`}
            priority={idx === 0}
          />
        ))}

        {/* title */}
        <div className="absolute left-6 bottom-6 text-white font-semibold drop-shadow-lg">
          {IMAGES[i].title}
        </div>

        {/* arrows */}
        <button
          onClick={() => setI((i + IMAGES.length - 1) % IMAGES.length)}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-charcoal w-8 h-8 rounded-full"
          aria-label="Previous"
        >
          ‹
        </button>
        <button
          onClick={() => setI((i + 1) % IMAGES.length)}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-charcoal w-8 h-8 rounded-full"
          aria-label="Next"
        >
          ›
        </button>
      </div>

      {/* dots */}
      <div className="mt-3 flex justify-center gap-2">
        {IMAGES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2.5 rounded-full transition-all ${
              idx === i ? "bg-gold w-6" : "bg-gray-300 w-2.5 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>

      {/* thumbnails row */}
      <div className="mt-5 grid grid-cols-4 gap-3">
        {IMAGES.map((img, idx) => (
          <button
            key={img.src}
            onClick={() => setI(idx)}
            className={`relative h-20 rounded-xl overflow-hidden shadow ${idx === i ? "ring-2 ring-gold" : ""}`}
            aria-label={`Select ${img.title}`}
          >
            <Image src={img.src} alt={img.title} fill className="object-cover" />
          </button>
        ))}
      </div>
    </section>
  );
}
