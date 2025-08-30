"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const HERO = ["/hero/hero1.jpg", "/hero/hero2.jpg", "/hero/hero3.jpg"]; // put images in public/hero/

export default function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % HERO.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative rounded-xl2 overflow-hidden shadow-luxe h-[72vh]">
      {HERO.map((src, idx) => (
        <Image
          key={src}
          src={src}
          alt="MuseMe DXB hero"
          fill
          priority={idx === 0}
          className={`object-cover transition-opacity duration-[1600ms] ${
            idx === i ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Soft vignette & cream tint */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-champagne/40" />

      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <span className="h-kicker animate-fadeIn">Dubai • Portrait & Branding</span>
        <h1 className="h-display text-5xl md:text-7xl text-paper animate-fadeUp mt-3">
          Soft Power <span className="text-gold">&</span> Elegance
        </h1>
        <p className="max-w-2xl text-paper/90 mt-4 animate-fadeUp delay-200">
          Luxury photography for leaders, founders, and creatives. Timeless portraits that command the room — without raising your voice.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 animate-fadeUp delay-400">
          <Link href="/contact" className="bg-onyx text-white px-6 py-3 rounded-lg hover:bg-black transition">
            Book Consultation
          </Link>
          <Link href="/portfolio" className="bg-paper/90 backdrop-blur border px-6 py-3 rounded-lg hover:bg-paper transition">
            View Portfolio
          </Link>
          <Link href="/pricing" className="bg-gold text-onyx px-6 py-3 rounded-lg hover:bg-goldDark transition">
            See Packages
          </Link>
        </div>
      </div>
    </section>
  );
}
