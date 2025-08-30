export default function Testimonials() {
  const items = [
    { q: "Felt like a magazine cover. Direction was flawless, images are timeless.", a: "— S.H., Dubai" },
    { q: "Powerful yet soft. These portraits elevated my brand overnight.", a: "— M.R., Founder" },
    { q: "Professional, warm, efficient. The results exceeded expectations.", a: "— K.K., Executive" },
  ];
  return (
    <section className="mt-16">
      <div className="h-kicker text-center">Client Love</div>
      <h2 className="h-display text-4xl md:text-5xl text-center">What They Say</h2>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {items.map((t, i) => (
          <div key={i} className="bg-paper border rounded-xl2 p-6 shadow-soft">
            <div className="text-gold text-xl mb-2">★★★★★</div>
            <p className="italic">{t.q}</p>
            <p className="text-stone mt-4">{t.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
