export default function FeatureStrip() {
  const items = [
    { title: "Dubai-based", blurb: "Studio + on-location" },
    { title: "Fast delivery", blurb: "48–72h previews" },
    { title: "5★ experience", blurb: "Client-first direction" },
    { title: "Print ready", blurb: "Fine-art store available" },
  ];
  return (
    <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
      {items.map((it) => (
        <div key={it.title} className="rounded-xl bg-[#FFFDF6] border p-4 text-center">
          <p className="font-semibold">{it.title}</p>
          <p className="text-sm text-gray-600 mt-1">{it.blurb}</p>
        </div>
      ))}
    </div>
  );
}
