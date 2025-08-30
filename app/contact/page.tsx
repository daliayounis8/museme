export default function ContactPage() {
  return (
    <section className="max-w-2xl mx-auto text-center">
      <div className="h-kicker">Contact</div>
      <h1 className="h-display text-5xl mt-2">Let’s Connect</h1>
      <p className="text-stone mt-3">
        Choose the most direct way to reach me — I’ll respond promptly.
      </p>

      <div className="mt-10 grid gap-6">
        {/* WhatsApp with prefilled message */}
        <a
          href="https://wa.me/971526931996?text=Hi%20MuseMe%20DXB%2C%20I%E2%80%99d%20love%20to%20book%20a%20photoshoot.%20Can%20you%20share%20your%20availability%20and%20packages%3F"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-onyx text-paper px-6 py-4 rounded-xl2 shadow-soft hover:bg-black transition text-lg"
        >
          Reach out on WhatsApp
        </a>

        {/* Email */}
        <a
          href="mailto:musemedxb@gmail.com?subject=MuseMe%20DXB%20Enquiry&body=Hi%20Dalia%2C%20I%E2%80%99d%20love%20to%20book%20a%20photoshoot..."
          className="block bg-gold text-onyx px-6 py-4 rounded-xl2 shadow-soft hover:bg-goldDark transition text-lg"
        >
          Reach out on Email
        </a>
      </div>
    </section>
  );
}
