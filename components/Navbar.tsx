"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 bg-paper/80 backdrop-blur border-b">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.jpg" alt="MuseMe DXB" width={32} height={32} />
          <span className="font-semibold tracking-wide">MuseMe DXB</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={`hover:text-stone ${
                pathname === n.href ? "text-onyx" : "text-stone"
              }`}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <a
          href="https://wa.me/971526931996?text=Hi%20MuseMe%20DXB%2C%20I%E2%80%99d%20love%20to%20book%20a%20photoshoot.%20Can%20you%20share%20your%20availability%20and%20packages%3F"
          target="_blank"
          className="hidden md:inline-block bg-onyx text-white px-4 py-2 rounded-lg hover:bg-black transition"
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
}
