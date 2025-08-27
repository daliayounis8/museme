"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const IMAGES = ["/hero1.jpg", "/hero2.jpg", "/hero3.jpg"]; // put these in /public

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % IMAGES.length);
    }, 5000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [paused]);

  return (
    <div
      className="relative h-[66vh] w-full rounded-2xl overflow-hidden shadow-md"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {IMAGES.map((src, i) => (
        <Image
          key={i}
          src={src}
          alt={`Hero ${i + 1}`}
          fill
          priority={i === 0}
          className={`object-cover transition-opacity duration-[2000ms] ${i === current ? "opacity-100" : "opacity-0"}`}
        />
      ))}

      {/* overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* centered content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white px-6">
        <img src="/logo.png" alt="MuseMe DXB" className="w-[120px] h-auto mb-4 animate-fadeIn" />
        <h1 className="text-5xl font-bold tracking-tight animate-fadeInUp">MuseMe DXB</h1>
        <p className="mt-3 text-lg max-w-2xl animate-fadeInUp delay-200">
          Where your power meets your portrait. Elegance, movement, and story.
        </p>
        <div className="mt-6 flex gap-4">
          <Link href="/portfolio" className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition animate-fadeInUp delay-400">View Portfolio</Link>
          <Link href="/pricing" className="bg-black/80 text-white px-6 py-3 rounded-lg font-medium hover:bg-black transition animate-fadeInUp delay-600">View Packages</Link>
        </div>
      </div>

      {/* dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {IMAGES.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setCurrent(i)}
            className={`h-2.5 rounded-full transition-all ${i === current ? "bg-white w-6" : "bg-white/60 w-2.5 hover:bg-white/80"}`}
          />
        ))}
      </div>
    </div>
  );
}
