export default function PricingPage() {
  const packs = [
    { name: "Muse Mini", price: "AED 650", list: ["30 minutes", "1 look", "8 retouched images", "Private gallery"], badge: "" },
    { name: "Muse Signature", price: "AED 1,200", list: ["75 minutes", "2–3 looks", "20 retouched images", "Studio or location"], badge: "Most Popular" },
    { name: "Muse Pro", price: "AED 2,200", list: ["2 hours", "3–4 looks", "40 retouched images", "Creative direction"], badge: "Premium" },
  ];

  return (
    <section>
      <div className="h-kicker text-center">Pricing</div>
      <h1 className="h-display text-5xl text-center mt-2">Investment in Timeless Images</h1>
      <p className="text-stone text-center max-w-2xl mx-auto mt-3">Transparent packages designed for portraits, branding, and dance.</p>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {packs.map((p) => (
          <div key={p.name} className="bg-paper border rounded-xl2 shadow-soft p-8 flex flex-col">
            {p.badge && <div className="w-max -mt-6 mb-4 bg-gold text-onyx text-xs px-3 py-1 rounded-full">{p.badge}</div>}
            <h3 className="text-2xl font-semibold">{p.name}</h3>
            <p className="text-3xl font-bold mt-1">{p.price}</p>
            <ul className="mt-4 space-y-2 text-stone">
              {p.list.map((f) => <li key={f}>• {f}</li>)}
            </ul>
            <a href="/contact" className="mt-6 inline-block text-center bg-onyx text-white px-4 py-2 rounded-lg hover:bg-black transition">Book This</a>
          </div>
        ))}
      </div>
    </section>
  );
}
