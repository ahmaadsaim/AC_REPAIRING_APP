// app/en/about/page.tsx
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* SEO-friendly heading */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-6">
        About نايف عنبر صيانة تبريد وتكييف – Best AC Services in Hail City
      </h1>

      {/* Intro paragraph */}
      <p className="text-base sm:text-lg text-gray-700 mb-6 text-center sm:text-left">
        نايف عنبر صيانة تبريد وتكييف has been providing reliable and professional AC services
        in Hail City for years. From <strong>window AC services</strong> to full maintenance
        and installation, we ensure every unit works perfectly. Our mission is to keep your
        home and office comfortable, no matter the season.
      </p>

      {/* Image gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        <Image
          src="/image1.jpeg"
          alt="نايف عنبر صيانة تبريد وتكييف shop image 1"
          width={400}
          height={300}
          className="w-full h-64 sm:h-60 md:h-64 lg:h-72 rounded-lg object-cover"
        />
        <Image
          src="/image2.jpeg"
          alt="نايف عنبر صيانة تبريد وتكييف shop image 2"
          width={400}
          height={300}
          className="w-full h-64 sm:h-60 md:h-64 lg:h-72 rounded-lg object-cover"
        />
        <Image
          src="/image3.jpeg"
          alt="نايف عنبر صيانة تبريد وتكييف shop image 3"
          width={400}
          height={300}
          className="w-full h-64 sm:h-60 md:h-64 lg:h-72 rounded-lg object-cover"
        />
      </div>

      {/* Detailed description */}
      <p className="text-gray-700 mb-4 text-base sm:text-lg">
        Our team is highly trained and uses the latest equipment to provide top-quality
        AC servicing. Whether you are searching for <strong>AC service near me</strong> or
        need emergency repairs, we are ready to help. Customer satisfaction is our priority,
        and we ensure each service is fast, reliable, and affordable.
      </p>

      <p className="text-gray-700 mb-6 text-base sm:text-lg">
        Visit us at our shop in Hail City, or contact us directly for any inquiries:
      </p>

      {/* Contact info */}
      <div className="bg-blue-100 p-4 rounded-lg flex flex-col sm:flex-row justify-between items-center mb-6 gap-4 sm:gap-0">
        <div className="text-center sm:text-left">
          <strong>Call us:</strong>{" "}
          <a href="tel:+966503570189" className="text-blue-600">+966 50 357 0189</a>
        </div>
        <div className="text-center sm:text-left">
          <strong>WhatsApp:</strong>{" "}
          <a href="https://wa.me/966552093474?text=Hello" className="text-green-600">966552093474</a>
        </div>
        <div className="text-center sm:text-left">
          <strong>Location:</strong>{" "}
          <a
            href="https://www.google.com/maps/place/27%C2%B030'11.9%22N+41%C2%B040'54.1%22E/@27.5032978,41.6791306,17z/data=!3m1!4b1!4m4!3m3!8m2!3d27.5032978!4d41.6817055?hl=en&entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            View on Map
          </a>
        </div>
      </div>

      {/* Call to action */}
      <div className="mt-8 p-6 bg-blue-50 rounded-lg text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-2">Contact نايف عنبر صيانة تبريد وتكييف Today!</h2>
        <p className="text-gray-700 mb-4 text-base sm:text-lg">
          Call or WhatsApp us for professional AC services in Hail City.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="tel:+966503570189" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition w-full sm:w-auto text-center">Call Now</a>
          <a href="https://wa.me/966552093474?text=Hello" className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition w-full sm:w-auto text-center">WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
