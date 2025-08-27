export default function Testimonials() {
  const items = [
    {
      q: "MuseMe DXB captured my essence in a way I never thought possible. Luxurious and professional.",
      name: "Sarah Al-Mansouri",
      role: "Dubai Entrepreneur",
    },
    {
      q: "They understood my vision and created portraits that are elegant and powerful. I use them everywhere.",
      name: "Amira Hassan",
      role: "Fashion Designer",
    },
    {
      q: "Seamless from consultation to delivery. I felt comfortable and the results exceeded expectations.",
      name: "Layla Rodriguez",
      role: "Business Executive",
    },
  ];

  return (
    <section className="mt-16 text-center">
      <h2 className="font-[var(--font-display)] text-4xl">What Our Clients Say</h2>
      <p className="text-muted mt-2">Discover why clients trust MuseMe DXB for their most important portraits</p>

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {items.map((t) => (
          <div key={t.name} className="bg-white rounded-2xl shadow-soft p-6 text-left border">
            <div className="text-gold text-lg mb-2">★★★★★</div>
            <p className="italic text-charcoal/80">“{t.q}”</p>
            <div className="mt-6">
              <p className="font-semibold">{t.name}</p>
              <p className="text-sm text-gold">{t.role}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 inline-flex items-center gap-2 bg-gold text-charcoal px-4 py-2 rounded-full font-medium shadow-soft">
        <span>★</span> <span>5.0 Average Rating</span>
      </div>
    </section>
  );
}
