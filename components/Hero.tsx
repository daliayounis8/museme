import Link from "next/link";

export default function Hero() {
  return (
    <section className="text-center py-16">
      <h1 className="font-[var(--font-display)] text-6xl md:text-7xl leading-tight">MuseMe DXB</h1>
      <p className="font-[var(--font-display)] italic text-2xl md:text-3xl text-gold mt-3">
        Where your passion meets your portrait
      </p>
      <p className="max-w-3xl mx-auto text-lg text-muted mt-6">
        Capturing the essence of elegance, glamour, and timeless beauty through luxury portrait photography in Dubai
      </p>

      <div className="mt-8 flex flex-wrap gap-4 justify-center">
        <Link href="/contact" className="bg-charcoal text-white px-6 py-3 rounded-lg shadow-soft hover:bg-black transition">
          Book Consultation
        </Link>
        <Link href="/portfolio" className="bg-gold text-charcoal px-6 py-3 rounded-lg shadow-soft hover:bg-goldDark transition">
          View Portfolio
        </Link>
        <Link href="/pricing" className="bg-white border border-charcoal px-6 py-3 rounded-lg hover:bg-gray-50 transition">
          See Pricing
        </Link>
      </div>

      <div className="mt-10 text-gold text-2xl animate-bounce">⌄</div>
    </section>
  );
}
