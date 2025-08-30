import Link from "next/link";

export default function ConsultationBanner() {
  return (
    <section className="mt-16 rounded-xl2 bg-onyx text-paper px-8 py-12 shadow-luxe">
      <div className="grid md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-2">
          <div className="h-kicker">Book Now</div>
          <h3 className="h-display text-3xl md:text-4xl mt-2">Let’s Craft Your Signature Portrait</h3>
          <p className="text-paper/80 mt-3">Private studio sessions or on-location in Dubai. Discreet, luxurious, efficient.</p>
        </div>
        <div className="text-center md:text-right">
          <Link href="/contact" className="inline-block bg-gold text-onyx px-6 py-3 rounded-lg hover:bg-goldDark transition">
            Book Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
