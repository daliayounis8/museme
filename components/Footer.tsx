import { FaWhatsapp, FaInstagram, FaTiktok, FaGlobe } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-20 border-t">
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8 items-center">
        <div className="text-sm text-stone">
          © {new Date().getFullYear()} MuseMe DXB • Dubai, UAE
        </div>

        <div className="text-center">
          <div className="flex justify-center gap-6 text-xl">
            <a
              href="https://wa.me/971526931996?text=Hi%20MuseMe%20DXB%2C%20I%E2%80%99d%20love%20to%20book%20a%20photoshoot.%20Can%20you%20share%20your%20availability%20and%20packages%3F"
              target="_blank"
              className="hover:text-green-600"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://instagram.com/musemedxb"
              target="_blank"
              className="hover:text-pink-500"
            >
              <FaInstagram />
            </a>
            <a
              href="https://tiktok.com/@musemedxb"
              target="_blank"
              className="hover:text-black"
            >
              <FaTiktok />
            </a>
            <a href="https://museme.ae" target="_blank" className="hover:text-gold">
              <FaGlobe />
            </a>
          </div>
        </div>

        <div className="text-sm md:text-right space-y-2">
          <a
            href="https://wa.me/971526931996?text=Hi%20MuseMe%20DXB%2C%20I%E2%80%99d%20love%20to%20book%20a%20photoshoot.%20Can%20you%20share%20your%20availability%20and%20packages%3F"
            target="_blank"
            className="block hover:underline"
          >
            WhatsApp
          </a>
          <a href="mailto:musemedxb@gmail.com" className="block hover:underline">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
