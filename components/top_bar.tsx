"use client";
import Image from "next/image";
import { Phone, MapPin } from "lucide-react";
import { usePathname } from "next/navigation";

export default function TopBar() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");

  // Texts based on route
  const texts = {
    phone: "+966 50 357 0189",
    location: isEnglish ? "Hail" : "حائل",
  };

  return (
    <header className="bg-white text-gray-700 text-base shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <Image
            src="/نايف عنبر صيانة تبريد وتكييف.png"
            alt={isEnglish ? "AC Service Logo" : "شعار خدمات التكييف"}
            width={140}   
            height={45}  
            className="object-contain"
          />
        </div>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row items-center sm:space-x-6 space-y-2 sm:space-y-0 font-semibold text-sm sm:text-base">
          
          <a
            href={`tel:${texts.phone}`}
            className="flex items-center space-x-2 hover:text-[#24a7f3] transition"
          >
            <Phone size={16} color="#24a7f3" />
            <span>{texts.phone}</span>
          </a>

          {/* Separator only visible on desktop */}
          <span className="hidden sm:block border-l border-gray-300 h-5"></span>

          <a
            href="https://www.google.com/maps?q=27.503297805786133,41.681705474853516&z=17&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-[#24a7f3] transition"
          >
            <MapPin size={16} color="#24a7f3" />
            <span>{texts.location}</span>
          </a>
        </div>
      </div>
    </header>
  );
}
