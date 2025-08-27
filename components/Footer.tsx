import { FaWhatsapp, FaInstagram, FaTiktok, FaGlobe } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-16 border-t bg-white">
      <div className="max-w-6xl mx-auto px-6 py-8 text-center text-sm text-muted flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} MuseMe DXB</p>
        <div className="flex gap-6 text-xl">
          <a
            href="https://wa.me/971526931996"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-600"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://instagram.com/musemedxb"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500"
          >
            <FaInstagram />
          </a>
          <a
            href="https://tiktok.com/@musemedxb"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black"
          >
            <FaTiktok />
          </a>
          <a
            href="https://museme.ae"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold"
          >
            <FaGlobe />
          </a>
        </div>
      </div>
    </footer>
  );
}
