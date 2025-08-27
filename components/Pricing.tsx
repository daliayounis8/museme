const packages = [
  { name: "Muse Mini", price: "AED 650", features: ["30 minutes", "1 outfit", "8 edited images", "Private gallery"] },
  { name: "Muse Signature", price: "AED 1200", features: ["75 minutes", "2 outfits", "20 edited images", "Studio or location"] },
  { name: "Muse Pro", price: "AED 2200", features: ["2 hours", "3–4 looks", "40 edited images", "Creative direction"] },
];

export default function Pricing() {
  return (
    <div>
      <h2 className="text-3xl font-semibold">Pricing & Packages</h2>
      <p className="text-gray-600 mt-2">Transparent packages designed for portraits, branding, and dance.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {packages.map((p) => (
          <div key={p.name} className="bg-white border rounded-2xl shadow hover:shadow-lg transition p-8 flex flex-col">
            <h3 className="text-xl font-semibold">{p.name}</h3>
            <p className="text-3xl font-bold mt-2">{p.price}</p>
            <ul className="flex-1 space-y-2 text-gray-600 mt-4">{p.features.map((f) => <li key={f}>• {f}</li>)}</ul>
            <a href="/contact" className="mt-6 inline-block text-center bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">Book Now</a>
          </div>
        ))}
      </div>
    </div>
  );
}
