import Link from "next/link";

export default function Home() {
  return (
    <section className="text-center">
      <h1 className="h-display text-6xl md:text-7xl mt-16">
        Soft Power <span className="text-gold">&</span> Elegance
      </h1>
      <p className="max-w-2xl mx-auto text-stone mt-4">
        Luxury portrait and branding photography in Dubai. Glamour, femininity, and timeless power — captured in every frame.
      </p>
      <div className="mt-8 flex flex-wrap gap-4 justify-center">
        <Link
          href="/portfolio"
          className="bg-onyx text-white px-6 py-3 rounded-lg hover:bg-black transition"
        >
          View Portfolio
        </Link>
        <Link
          href="/contact"
          className="bg-gold text-onyx px-6 py-3 rounded-lg hover:bg-goldDark transition"
        >
          Book Consultation
        </Link>
      </div>
    </section>
  );
}
