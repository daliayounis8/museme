import Image from "next/image";

const images = [
  { src: "/portfolio/dance1.jpg", alt: "Dance portrait" },
  { src: "/portfolio/portrait1.jpg", alt: "Studio portrait" },
  { src: "/portfolio/brand1.jpg", alt: "Branding session" },
  { src: "/portfolio/event1.jpg", alt: "Event moment" },
  { src: "/portfolio/couple1.jpg", alt: "Couples" },
  { src: "/portfolio/creative1.jpg", alt: "Creative concept" },
];

export default function PortfolioGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {images.map((img, i) => (
        <div key={i} className="relative w-full h-80 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
          <Image src={img.src} alt={img.alt} fill className="object-cover hover:scale-105 transition-transform duration-500" />
        </div>
      ))}
    </div>
  );
}
