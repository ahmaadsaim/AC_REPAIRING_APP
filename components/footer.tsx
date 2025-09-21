"use client";
import { usePathname } from "next/navigation";
import { Phone, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");
  const prefix = isEnglish ? "/en" : "";

  // Texts
  const texts = {
    about: isEnglish
      ? "Providing professional AC repair, maintenance, and installation services for your home and office."
      : "نقدم خدمات احترافية لصيانة وتركيب وإصلاح أجهزة التكييف لمنازلكم ومكاتبكم.",
    quickLinks: isEnglish ? "Quick Links" : "روابط سريعة",
    services: isEnglish ? "Our Services" : "خدماتنا",
    visitShop: isEnglish ? "Visit Shop" : "زيارة المتجر",
    contact: isEnglish ? "Contact" : "تواصل معنا",
    aboutUs: isEnglish ? "About Us" : "من نحن",
    locationLabel: isEnglish ? "Location" : "الموقع",
    locationText: isEnglish ? "Hail, Saudi Arabia" : "حائل، المملكة العربية السعودية",
    viewMap: isEnglish ? "View on Map" : "عرض على الخريطة",
    openMap: isEnglish ? "Open in Google Maps" : "افتح في خرائط جوجل",
    copyright: isEnglish
      ? `© ${new Date().getFullYear()} Naif Anbar AC Services. All rights reserved.`
      : `© ${new Date().getFullYear()} نايف عنبر صيانة تبريد وتكييف. جميع الحقوق محفوظة.`,
  };

  const mapLink =
    "https://www.google.com/maps/place/27%C2%B030'11.9%22N+41%C2%B040'54.1%22E/@27.5032978,41.6791306,17z/data=!3m1!4b1!4m4!3m3!8m2!3d27.5032978!4d41.6817055?hl=en&entry=ttu";

  return (
    <footer className="relative w-full bg-[#1e3a8a] text-white mt-12 overflow-hidden">
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* About / Contact Info */}
        <div className="flex flex-col gap-4 items-start">
          <p className="text-sm text-gray-200">{texts.about}</p>
          <div className="flex items-center gap-2 text-sm text-gray-200">
            <Phone size={16} />
            <span>+966 50 357 0189</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-200">
            <MapPin size={16} />
            <a
              href={mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition break-words"
            >
              {texts.viewMap}
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold mb-2">{texts.quickLinks}</h3>
          <ul className="text-sm text-gray-200 space-y-1">
            <li>
              <Link href={`${prefix}/services`} className="hover:text-blue-300 transition">
                {texts.services}
              </Link>
            </li>
            <li>
              <Link href={`${prefix}/shop`} className="hover:text-blue-300 transition">
                {texts.visitShop}
              </Link>
            </li>
            <li>
              <Link href={`${prefix}/contact`} className="hover:text-blue-300 transition">
                {texts.contact}
              </Link>
            </li>
            <li>
              <Link href={`${prefix}/about`} className="hover:text-blue-300 transition">
                {texts.aboutUs}
              </Link>
            </li>
          </ul>
        </div>

        {/* Location / Info */}
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold mb-2">{texts.locationLabel}</h3>
          <p className="text-sm text-gray-200">{texts.locationText}</p>
          <a
            href={mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-300 hover:underline mt-1 break-words"
          >
            {texts.openMap}
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full border-t border-white/20 py-4 text-center text-xs text-gray-300">
        {texts.copyright}
      </div>
    </footer>
  );
}
