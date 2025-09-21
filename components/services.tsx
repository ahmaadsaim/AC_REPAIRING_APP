"use client";
import React from "react";
import { usePathname } from "next/navigation";

export default function OurServices() {
  const pathname = usePathname();

  // Arabic services for default /
  const arabicServices = [
    { name: "تعبئة غاز المكيف", img: "/AC Gas Refill.jpg" },
    { name: "خدمات تركيب المكيف", img: "/AC Installation Services.jpg" },
    { name: "خدمات صيانة المكيف", img: "/AC Maintenance Services.jpg" },
    { name: "استبدال قطع المكيف", img: "/AC Parts Replacement.jpg" },
    { name: "خدمات إصلاح المكيف", img: "/AC Repair Services.jpg" },
    { name: "تشخيص مشاكل المكيف", img: "/AC Troubleshooting.jpg" },
    { name: "تنظيف وصيانة مجاري الهواء", img: "/Duct Cleaning & Maintenance.jpg" },
    { name: "خدمات الطوارئ للمكيف", img: "/Emergency AC Services.jpg" }
  ];

  // English services for /en
  const englishServices = [
    { name: "AC GAS REFILL", img: "/AC Gas Refill.jpg" },
    { name: "AC INSTALLATION SERVICES", img: "/AC Installation Services.jpg" },
    { name: "AC MAINTENANCE SERVICES", img: "/AC Maintenance Services.jpg" },
    { name: "AC PARTS REPLACEMENT", img: "/AC Parts Replacement.jpg" },
    { name: "AC REPAIR SERVICES", img: "/AC Repair Services.jpg" },
    { name: "AC TROUBLESHOOTING", img: "/AC Troubleshooting.jpg" },
    { name: "DUCT CLEANING & MAINTENANCE", img: "/Duct Cleaning & Maintenance.jpg" },
    { name: "Emergency AC Services", img: "/Emergency AC Services.jpg" }
  ];

  const services = pathname.startsWith("/en") ? englishServices : arabicServices;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-[#24a7f3]">
        {pathname.startsWith("/en") ? "OUR SERVICES" : "خدماتنا"}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-white rounded-xl shadow-lg p-4 hover:scale-105 transition-transform duration-300"
          >
            <img
              src={service.img}
              alt={service.name}
              className="w-full h-48 sm:h-56 md:h-48 lg:h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-base sm:text-lg md:text-base lg:text-lg font-semibold text-gray-800">
              {service.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
