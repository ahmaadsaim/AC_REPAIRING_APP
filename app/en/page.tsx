"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import OurServices from "@/components/services";
import WhatsAppFloatingButton from "@/components/WhatsappFolatingButton";

export default function Home() {
    const [ratingCount, setRatingCount] = useState(0);

    // Animate 4000+ counter
    useEffect(() => {
        let start = 0;
        const end = 4000;
        const duration = 2000;
        const stepTime = Math.abs(Math.floor(duration / end));
        const timer = setInterval(() => {
            start += 20;
            if (start >= end) {
                clearInterval(timer);
                setRatingCount(end);
            } else {
                setRatingCount(start);
            }
        }, stepTime);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex flex-col items-center w-full">
            {/* Hero Section */}
            <div className="relative flex flex-col items-center pt-8 pb-16 w-full min-h-[60vh] bg-gradient-to-b from-blue-50 via-white to-blue-100 overflow-hidden">
                <div className="relative z-10 flex flex-col items-center gap-2 text-center max-w-4xl mx-auto mt-12 px-4 sm:px-6">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-[#24a7f3] leading-tight">
                        WE PROVIDE YOU THE <br /> PROFESSIONAL AC SERVICES
                    </h1>
                    <h2 className="text-sm md:text-base text-black">
                        We bring professional AC repair to your home in just one call.
                    </h2>

                    <div className="flex flex-col sm:flex-row gap-3 mt-2 justify-center">
                        <Link
                            href="/en/contact"
                            className="bg-blue-800 text-white px-3 py-1.5 rounded-md font-medium text-sm hover:bg-blue-900 hover:scale-105 transition transform duration-300 inline-block text-center"
                        >
                            Contact Now
                        </Link>

                        <Link
                            href="/en/services"
                            className="bg-blue-800 text-white px-3 py-1.5 rounded-md font-medium text-sm hover:bg-blue-900 hover:scale-105 transition transform duration-300 inline-block text-center"
                        >
                            Services
                        </Link>
                    </div>


                    {/* Counters */}
                    <div className="mt-12 w-full bg-[#24a7f3] text-white py-4 rounded-lg shadow-lg">
                        <div className="flex flex-col sm:flex-row max-w-7xl mx-auto justify-between items-center px-4 md:px-12 text-sm md:text-base gap-4 sm:gap-0">
                            <div className="flex flex-col items-center">
                                <span className="text-2xl md:text-3xl font-medium">{ratingCount}+</span>
                                <span className="font-light">Customers</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="text-2xl md:text-3xl font-medium">4.9</span>
                                <span className="font-light">Google Rating</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="text-2xl md:text-3xl font-medium">7+</span>
                                <span className="font-light">Years of Experience</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Services Section */}
            <div className="w-full relative z-20 bg-transparent mt-10 px-4 sm:px-6">
                <OurServices />
            </div>

            {/* Shop Section */}
            <div id="shop-section" className="relative z-10 text-center mt-10 mb-4 px-4 sm:px-0">
                <h1 className="text-3xl md:text-4xl font-bold text-[#24a7f3]">
                    VISIT OUR SHOP
                </h1>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mt-4 mb-10 z-10 px-4 sm:px-0">
                <Image
                    src="/image1.jpeg"
                    alt="Shop Image 1"
                    width={200}
                    height={120}
                    className="rounded-b-md object-cover shadow-lg"
                />
                <Image
                    src="/image2.jpeg"
                    alt="Shop Image 2"
                    width={200}
                    height={120}
                    className="rounded-b-md object-cover shadow-lg"
                />
                <Image
                    src="/image3.jpeg"
                    alt="Shop Image 3"
                    width={200}
                    height={120}
                    className="rounded-b-md object-cover shadow-lg"
                />
            </div>

            <WhatsAppFloatingButton />
        </div>
    );
}
