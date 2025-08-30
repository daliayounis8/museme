"use client";

import Image from "next/image";

const RAIL = [
  "/portfolio/shot1.jpg", "/portfolio/shot2.jpg", "/portfolio/shot3.jpg",
  "/portfolio/shot4.jpg", "/portfolio/shot5.jpg", "/portfolio/shot6.jpg",
]; // put images in public/portfolio/

export default function PortfolioRail() {
  return (
    <section className="mt-16">
      <div className="h-kicker text-center">Signature Work</div>
      <h2 className="h-display text-4xl md:text-5xl text-center mt-2">Editorial Portraits</h2>

      <div className="relative mt-8">
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2">
          {RAIL.map((src) => (
            <div key={src} className="relative min-w-[280px] md:min-w-[420px] h-[360px] snap-start rounded-xl2 overflow-hidden bg-paper shadow-soft border">
              <Image src={src} alt="Portfolio image" fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
