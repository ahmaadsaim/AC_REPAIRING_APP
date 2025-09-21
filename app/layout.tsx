import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/top_bar";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

// Configure Montserrat font
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

// ✅ Metadata for SEO + Social Sharing
export const metadata: Metadata = {
  title: "AC Services in Hail City",
  description: "Professional AC repairing services at your doorstep",
  keywords: ["AC Repair Hail", "AC Services", "Cooling Solutions", "AC Installation"],
  authors: [{ name: "Naif Anbar" }],

  // ✅ Favicon & Logo (using your Arabic logo file)
  icons: {
    icon: "/نايف عنبر صيانة تبريد وتكييف.png",
    shortcut: "/نايف عنبر صيانة تبريد وتكييف.png",
    apple: "/نايف عنبر صيانة تبريد وتكييف.png",
  },

  // ✅ Open Graph (for Facebook, WhatsApp, LinkedIn sharing)
  openGraph: {
    title: "AC Services in Hail City",
    description: "Professional AC repairing services at your doorstep",
    url: "https://yourwebsite.com", // replace with your real domain
    siteName: "Naif Anbar AC Services",
    images: [
      {
        url: "/نايف عنبر صيانة تبريد وتكييف.png", // used for sharing preview
        width: 1200,
        height: 630,
        alt: "AC Services in Hail City",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // ✅ Twitter Card (for Twitter/X sharing)
  twitter: {
    card: "summary_large_image",
    title: "AC Services in Hail City",
    description: "Professional AC repairing services at your doorstep",
    images: ["/نايف عنبر صيانة تبريد وتكييف.png"],
    creator: "@yourhandle", // optional
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://yourwebsite.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Ensure favicon loads */}
        <link
          rel="icon"
          href="/نايف عنبر صيانة تبريد وتكييف.png"
          type="image/png"
          sizes="any"
        />
      </head>
      <body className={`${montserrat.variable} font-sans antialiased`}>
        <TopBar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
