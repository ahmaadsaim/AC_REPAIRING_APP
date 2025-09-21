// app/en/services/page.tsx

import ServicesComponent from "@/components/services";

export default function Services() {
  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* SEO-friendly heading */}
      <h1 className="text-4xl font-bold text-center mb-6">
        Best AC Services in Hail City – نايف عنبر صيانة تبريد وتكييف
      </h1>

      {/* Intro paragraph with keywords */}
      <p className="text-lg text-gray-700 mb-4">
        Looking for reliable <strong>AC services in Hail City</strong>? We provide top-notch
        <strong> window AC services in Hail City</strong> and professional maintenance for
        all types of air conditioners. Our team ensures your AC is running smoothly
        and efficiently.
      </p>

      {/* Contact info */}
      <div className="mb-6 bg-blue-100 p-4 rounded-lg flex flex-col md:flex-row justify-between items-center">
        <div className="mb-2 md:mb-0">
          <strong>Call us:</strong> <a href="tel:+966503570189" className="text-blue-600">+966 50 357 0189</a>
        </div>
        <div className="mb-2 md:mb-0">
          <strong>WhatsApp:</strong> <a href="https://wa.me/966552093474?text=Hello" className="text-green-600">966552093474</a>
        </div>
        <div>
          <strong>Location:</strong> <a href="https://www.google.com/maps/place/27%C2%B030'11.9%22N+41%C2%B040'54.1%22E/@27.5032978,41.6791306,17z/data=!3m1!4b1!4m4!3m3!8m2!3d27.5032978!4d41.6817055?hl=en&entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="text-blue-600">View on Map</a>
        </div>
      </div>

      {/* Keywords inclusion */}
      <p className="text-gray-700 mb-6">
        Whether you are searching for <strong>AC service near me</strong> or need expert 
        assistance with your window AC, we are here to provide prompt and affordable services 
        in Hail City. Our professional team ensures all AC units are serviced, repaired, and 
        refilled with care.
      </p>

      {/* Services component */}
      <ServicesComponent />

      {/* Footer call to action */}
      <div className="mt-8 p-6 bg-blue-50 rounded-lg text-center">
        <h2 className="text-2xl font-semibold mb-2">Contact نايف عنبر صيانة تبريد وتكييف Today!</h2>
        <p className="text-gray-700 mb-4">
          Call or WhatsApp us for immediate AC services in Hail City.
        </p>
        <div className="flex justify-center gap-4">
          <a href="tel:+966503570189" className="px-4 py-2 bg-blue-600 text-white rounded-lg">Call Now</a>
          <a href="https://wa.me/966552093474?text=Hello" className="px-4 py-2 bg-green-600 text-white rounded-lg">WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
