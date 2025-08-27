import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="MuseMe DXB" width={28} height={28} />
          <span className="font-semibold tracking-tight">MuseMe DXB</span>
        </Link>
        <div className="flex gap-8 text-sm font-medium">
          <Link href="/" className="hover:text-muted">Home</Link>
          <Link href="/portfolio" className="hover:text-muted">Portfolio</Link>
          <Link href="/pricing" className="hover:text-muted">Pricing</Link>
          <Link href="/contact" className="hover:text-muted">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
