"use client";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloatingButton() {
  const phoneNumber = "+966 55 209 3474"; 
  const message = "Hello! I am interested in your AC services."; 
  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition duration-300"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={24} />
    </button>
  );
}
