// RootLayout.js (your existing layout file)
import localFont from "next/font/local";
import Heebo from "next/font/local";
import Litarata from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ThreeVerticalLines from "./components/threeVerticalLines";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const litarata = localFont({
  src: "./fonts/Literata-VariableFont_opsz,wght.ttf",
  variable: "--font-geist-mono",
  weight: "100 200 300 400 500 600 700 800 900",
});
const heebo = localFont({
  src: "./fonts/Heebo-SemiBold.ttf",
  variable: "--font-geist-mono",
  weight: "100 200 300 400 500 600 700 800 900",
});

export const metadata = {
  metadataBase: new URL('https://www.webcoronet.com'),
  title: {
    default: "Web Coronet - Web Development, Design & Digital Marketing Agency",
    template: "%s | Web Coronet"
  },
  description: "Web Coronet is a leading web development, design, and digital marketing agency. We offer custom mobile apps, web development, graphic design, and digital marketing services to help your business grow online.",
  keywords: [
    "web development",
    "web design",
    "mobile app development",
    "graphic design",
    "digital marketing",
    "SEO",
    "web agency",
    "Bangladesh web development",
    "Sylhet web agency",
    "e-commerce development",
    "responsive web design",
    "UI/UX design",
    "PPC advertising",
    "social media marketing"
  ],
  authors: [{ name: "Web Coronet" }],
  creator: "Web Coronet",
  publisher: "Web Coronet",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.webcoronet.com",
    siteName: "Web Coronet",
    title: "Web Coronet - Web Development, Design & Digital Marketing Agency",
    description: "Leading web development, design, and digital marketing agency offering custom solutions for your business growth.",
    images: [
      {
        url: "https://www.webcoronet.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Web Coronet Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Coronet - Web Development & Digital Marketing Agency",
    description: "Leading web development, design, and digital marketing agency offering custom solutions for your business growth.",
    images: ["https://www.webcoronet.com/logo.png"],
    creator: "@webcoronet",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  alternates: {
    canonical: "https://www.webcoronet.com",
  },
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
    ],
    apple: [
      { url: "/logo.png", type: "image/png" },
    ],
    shortcut: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Web Coronet",
    "url": "https://www.webcoronet.com",
    "logo": "https://www.webcoronet.com/logo.png",
    "description": "Leading web development, design, and digital marketing agency",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shahjalal Tower, Payra, Amborkhana",
      "addressLocality": "Sylhet",
      "addressCountry": "Bangladesh"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+8801759231288",
      "contactType": "Customer Service",
      "email": "mail-info@webcoronet.com"
    },
    "sameAs": [
      "https://www.facebook.com/webcoronet",
      "https://www.twitter.com/webcoronet",
      "https://www.dribbble.com/webcoronet",
      "https://www.youtube.com/webcoronet"
    ],
    "areaServed": "Worldwide",
    "serviceType": [
      "Web Development",
      "Mobile App Development",
      "Graphic Design",
      "Digital Marketing",
      "SEO Services"
    ]
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${heebo.variable} ${litarata.variable} antialiased relative bg-[#F7F7F7]`}>
        <Header />
        <ThreeVerticalLines /> {/* Add the vertical lines component */}
        <div className="w-10/12 max-w-screen-2xl mx-auto">
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}