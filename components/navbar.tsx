"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isBlogsOpen, setIsBlogsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Blogs data
  const arabicBlogs = [
    { title: "أفضل نصائح لصيانة المكيف", href: "/blogs/best-ac-services-tips" },
    { title: "دليل صيانة مكيف الشباك", href: "/blogs/window-ac-maintenance" },
    { title: "كيف تحافظ على برودة المكيف بكفاءة", href: "/blogs/ac-cooling-tips" },
  ];

  const englishBlogs = [
    { title: "Best AC Services Tips", href: "/en/blogs/best-ac-services-tips" },
    { title: "Window AC Maintenance Guide", href: "/en/blogs/window-ac-maintenance" },
    { title: "How to Keep Your AC Cool Efficiently", href: "/en/blogs/ac-cooling-tips" },
  ];

  const blogs = pathname.startsWith("/en") ? englishBlogs : arabicBlogs;

  const menuItems = pathname.startsWith("/en")
    ? [
        { title: "Home", href: "/en" },
        { title: "Services", href: "/en/services" },
        { title: "About", href: "/en/about" },
        { title: "Contact", href: "/en/contact" },
      ]
    : [
        { title: "الرئيسية", href: "/" },
        { title: "الخدمات", href: "/services" },
        { title: "من نحن", href: "/about" },
        { title: "تواصل معنا", href: "/contact" },
      ];

  const blogsLabel = pathname.startsWith("/en") ? "Blogs" : "المدونة";

  return (
    <header className="bg-white rounded-b-2xl border-b-4 border-[#24a7f3] shadow z-50 relative">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between relative z-50">

        {/* Logo */}
        <div className="text-xl font-bold text-[#24a7f3]">نايف عنبر</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-black hover:text-[#24a7f3] transition"
            >
              {item.title}
            </Link>
          ))}

          {/* Blogs Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsBlogsOpen(true)}
            onMouseLeave={() => setIsBlogsOpen(false)}
          >
            <button className="flex items-center gap-1 text-black hover:text-[#24a7f3] transition font-semibold">
              {blogsLabel}
              <svg
                className={`w-4 h-4 transform transition-transform duration-300 ${isBlogsOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <ul
              className={`absolute top-full left-0 mt-2 w-72 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ${
                isBlogsOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-2 invisible"
              }`}
            >
              {blogs.map((blog) => (
                <li key={blog.href} className="border-b last:border-b-0">
                  <Link
                    href={blog.href}
                    className="block px-4 py-3 text-black hover:bg-[#24a7f3] hover:text-black transition"
                  >
                    {blog.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Language Switch */}
        <div className="hidden md:flex space-x-3 ml-6">
          <Link
            href="/en"
            className="px-3 py-1 rounded-full border border-[#24a7f3] text-black hover:bg-[#24a7f3] hover:text-black transition"
          >
            English
          </Link>
          <Link
            href="/"
            className="px-3 py-1 rounded-full border border-[#24a7f3] text-black hover:bg-[#24a7f3] hover:text-black transition"
          >
            العربية
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-black focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-3 py-2 rounded text-black hover:bg-[#24a7f3] hover:text-black transition"
            >
              {item.title}
            </Link>
          ))}

          <div className="border-t border-gray-200 mt-2 pt-2">
            <span className="block font-semibold mb-1 text-black">{blogsLabel}</span>
            {blogs.map((blog) => (
              <Link
                key={blog.href}
                href={blog.href}
                className="block px-3 py-2 rounded text-black hover:bg-[#24a7f3] hover:text-black transition"
              >
                {blog.title}
              </Link>
            ))}
          </div>

          <div className="flex space-x-3 mt-2">
            <Link
              href="/en"
              className="px-3 py-1 rounded-full border border-[#24a7f3] text-black hover:bg-[#24a7f3] hover:text-black transition"
            >
              English
            </Link>
            <Link
              href="/"
              className="px-3 py-1 rounded-full border border-[#24a7f3] text-black hover:bg-[#24a7f3] hover:text-black transition"
            >
              العربية
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
