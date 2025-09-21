// app/en/contact/page.tsx
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* SEO-friendly heading */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-6">
        Contact نايف عنبر صيانة تبريد وتكييف – AC Services in Hail City
      </h1>

      {/* Intro paragraph */}
      <p className="text-base sm:text-lg text-gray-700 mb-6 text-center sm:text-left">
        Have questions or need professional <strong>AC services in Hail City</strong>? 
        Our team at نايف عنبر صيانة تبريد وتكييف is ready to assist you. Whether you need 
        <strong> window AC services</strong>, maintenance, or emergency repair, we are here to help.
      </p>

      {/* Contact information section */}
      <div className="bg-blue-100 p-6 rounded-lg mb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="text-center sm:text-left">
          <h2 className="font-semibold text-lg mb-1">Call Us</h2>
          <a href="tel:+966503570189" className="text-blue-600 hover:underline">+966 50 357 0189</a>
        </div>
        <div className="text-center sm:text-left">
          <h2 className="font-semibold text-lg mb-1">WhatsApp</h2>
          <a href="https://wa.me/966552093474?text=Hello" className="text-green-600 hover:underline">966552093474</a>
        </div>
        <div className="text-center sm:text-left">
          <h2 className="font-semibold text-lg mb-1">Visit Us</h2>
          <a
            href="https://www.google.com/maps/place/27%C2%B030'11.9%22N+41%C2%B040'54.1%22E/@27.5034561,41.6809884,18z/data=!4m4!3m3!8m2!3d27.5033056!4d41.6816944?hl=en&entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Hail City, Saudi Arabia
          </a>
        </div>
      </div>

      {/* Google Maps Embed */}
      <div className="mb-6 w-full h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3629.7628259189437!2d41.68098841502413!3d27.503456079035744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDMwJzExLjkiTiA0McKwNDAnNTQuMSJF!5e0!3m2!1sen!2ssa!4v1695359999999!5m2!1sen!2ssa"
          width="100%"
          height="100%"
          className="rounded-lg"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Contact form */}
      <div className="bg-gray-50 p-6 rounded-lg mb-6">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-center sm:text-left">Send us a Message</h2>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 border border-gray-300 rounded-lg w-full"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 border border-gray-300 rounded-lg w-full"
            required
          />
          <input
            type="tel"
            placeholder="Your Phone"
            className="p-3 border border-gray-300 rounded-lg w-full"
            required
          />
          <textarea
            placeholder="Your Message"
            className="p-3 border border-gray-300 rounded-lg w-full"
            rows={5}
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition w-full sm:w-auto text-center"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Optional call-to-action */}
      <div className="mt-8 p-6 bg-blue-50 rounded-lg text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-2">Get Your AC Serviced Today!</h2>
        <p className="text-gray-700 mb-4 text-base sm:text-lg">Call or WhatsApp us for fast and reliable AC services in Hail City.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="tel:+966503570189" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 w-full sm:w-auto text-center">Call Now</a>
          <a href="https://wa.me/966552093474?text=Hello" className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 w-full sm:w-auto text-center">WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
