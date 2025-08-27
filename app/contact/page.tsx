export default function Contact() {
  return (
    <section>
      <h1 className="text-4xl font-bold mb-4">Contact</h1>
      <p className="text-lg text-gray-600 mb-8">Let’s create something unforgettable ✨</p>

      <form 
        className="bg-white shadow-md rounded-lg p-8 space-y-6 max-w-lg"
        method="POST" 
        action="https://formspree.io/f/YOUR-FORM-ID"
      >
        <div>
          <label className="block text-sm font-medium">Your Name</label>
          <input 
            type="text" 
            name="name" 
            required 
            className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black p-3"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Your Email</label>
          <input 
            type="email" 
            name="email" 
            required 
            className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black p-3"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Message</label>
          <textarea 
            name="message" 
            rows={5} 
            placeholder="Tell me about your shoot..."
            className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black p-3"
          />
        </div>

        <button 
          type="submit"
          className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition"
        >
          Send Message
        </button>
      </form>

      <div className="mt-6 text-gray-700">
        Or message me directly on{" "}
        <a href="https://wa.me/9715XXXXXXXX" className="text-black font-medium underline">
          WhatsApp
        </a>
      </div>
    </section>
  )
}
