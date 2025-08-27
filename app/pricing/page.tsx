export default function PricingPage() {
  const packs = [
    {
      name: "Bronze Package",
      price: "500 AED",
      features: ["1 hour photography session", "Up to 2 outfit changes", "Up to 20 edited images"],
      badge: "",
      style: "bg-white",
    },
    {
      name: "Silver Package",
      price: "600 AED",
      features: ["2 hours photography session", "Up to 5 outfit changes", "Up to 50 edited images"],
      badge: "Most Popular",
      style: "bg-white",
    },
    {
      name: "Gold Package",
      price: "750 AED",
      features: ["3 hours photography session", "Up to 6 outfit changes", "Up to 100 edited images"],
      badge: "Premium Choice",
      style: "bg-gold",
    },
  ];

  return (
    <section>
      <div className="text-center">
        <h1 className="font-[var(--font-display)] text-5xl">Investment in Timeless Art</h1>
        <p className="text-muted max-w-3xl mx-auto mt-3">
          Choose the perfect photography package for your vision.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {packs.map((p) => (
          <div key={p.name} className={`rounded-2xl border shadow-soft p-6 ${p.style === "bg-gold" ? "bg-gold" : "bg-white"}`}>
            {p.badge && (
              <div className="mx-auto -mt-8 mb-4 w-max bg-charcoal text-white text-xs px-3 py-1 rounded-full shadow">
                {p.badge}
              </div>
            )}
            <h3 className={`text-2xl font-semibold ${p.style === "bg-gold" ? "text-charcoal" : ""}`}>{p.name}</h3>
            <p className={`text-3xl font-bold mt-1 ${p.style === "bg-gold" ? "text-charcoal" : ""}`}>{p.price}</p>
            <ul className={`mt-4 space-y-2 ${p.style === "bg-gold" ? "text-charcoal/80" : "text-muted"}`}>
              {p.features.map((f) => <li key={f}>• {f}</li>)}
            </ul>
            <a
              href="/contact"
              className={`mt-6 inline-block w-full text-center px-4 py-2 rounded-lg font-medium transition
              ${p.style === "bg-gold" ? "bg-charcoal text-white hover:bg-black" : "bg-charcoal text-white hover:bg-black"}`}
            >
              {p.badge ? "Book This Package" : "Choose Package"}
            </a>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <h3 className="font-[var(--font-display)] text-2xl">Why Choose MuseMe DXB?</h3>
        <div className="grid md:grid-cols-3 gap-6 mt-6 text-left">
          <div className="rounded-2xl bg-white p-6 shadow-soft border">
            <p className="font-semibold">Professional Excellence</p>
            <p className="text-muted mt-2">Years of experience in luxury photography with attention to every detail.</p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-soft border">
            <p className="font-semibold">Luxury Experience</p>
            <p className="text-muted mt-2">From consultation to final delivery, we ensure a premium experience.</p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-soft border">
            <p className="font-semibold">Timeless Results</p>
            <p className="text-muted mt-2">Portraits that elevate your presence and stand the test of time.</p>
          </div>
        </div>

        <div className="mt-8 flex gap-4 justify-center">
          <a href="/contact" className="bg-gold text-charcoal px-6 py-3 rounded-lg font-medium hover:bg-goldDark transition">Book Consultation</a>
          <a href="/portfolio" className="bg-white border border-charcoal px-6 py-3 rounded-lg hover:bg-gray-50 transition">View Our Work</a>
        </div>
      </div>
    </section>
  );
}
