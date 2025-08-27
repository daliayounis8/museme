export default function ContactCTA() {
  return (
    <div className="mt-12 rounded-2xl bg-[#FFFDF6] border p-8 text-center">
      <h3 className="text-2xl font-semibold">Ready to be the muse?</h3>
      <p className="text-gray-600 mt-2">Tell me your vision. I’ll reply quickly.</p>
      <div className="mt-6 flex gap-4 justify-center">
        <a href="/contact" className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">Enquire</a>
        <a href="https://wa.me/9715XXXXXXXX" className="bg-white border border-black text-black px-6 py-3 rounded-lg hover:bg-gray-100 transition">WhatsApp</a>
      </div>
    </div>
  );
}
