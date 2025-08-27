import Link from "next/link";
import { FaWhatsapp, FaInstagram, FaTiktok, FaGlobe } from "react-icons/fa";

export default function ContactBanner() {
  return (
    <section className="mt-16 rounded-2xl bg-charcoal text-white px-8 py-12 text-center shadow-soft">
      <h3 className="font-[var(--font-display)] text-4xl">Let&apos;s Create Something Beautiful</h3>
      <p className="text-white/80 max-w-3xl mx-auto mt-3">
        Ready to capture your essence in a timeless portrait? Get in touch and let’s bring your vision to life.
      </p>

      <div className="grid md:grid-cols-4 gap-6 mt-8 text-left">
        <div className="flex items-start gap-3 justify-center md:justify-start">
          <FaWhatsapp className="text-2xl text-green-500" />
          <div>
            <p className="font-medium">WhatsApp</p>
            <a
              href="https://wa.me/971526931996"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:underline"
            >
              +971 52 693 1996
            </a>
          </div>
        </div>
        <div className="flex items-start gap-3 justify-center md:justify-start">
          <FaInstagram className="text-2xl text-pink-500" />
          <div>
            <p className="font-medium">Instagram</p>
            <a
              href="https://instagram.com/musemedxb"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:underline"
            >
              @musemedxb
            </a>
          </div>
        </div>
        <div className="flex items-start gap-3 justify-center md:justify-start">
          <FaTiktok className="text-2xl text-white" />
          <div>
            <p className="font-medium">TikTok</p>
            <a
              href="https://tiktok.com/@musemedxb"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:underline"
            >
              @musemedxb
            </a>
          </div>
        </div>
        <div className="flex items-start gap-3 justify-center md:justify-start">
          <FaGlobe className="text-2xl text-gold" />
          <div>
            <p className="font-medium">Website</p>
            <a
              href="https://museme.ae"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:underline"
            >
              museme.ae
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <Link
          href="/contact"
          className="bg-gold text-charcoal px-6 py-3 rounded-lg font-medium hover:bg-goldDark transition"
        >
          Book Your Session
        </Link>
      </div>
    </section>
  );
}
