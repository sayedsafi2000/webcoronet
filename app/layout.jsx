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
  description: "Web Coronet is a leading web development, design, and digital marketing agency in Sylhet, Bangladesh. We offer custom mobile apps, web development, graphic design, SEO, and digital marketing services to help your business grow online. Contact us at ABC Point, Uposohor, Sylhet.",
  keywords: [
    "web development",
    "web design",
    "mobile app development",
    "graphic design",
    "digital marketing",
    "SEO services",
    "web agency",
    "Bangladesh web development",
    "Sylhet web agency",
    "Sylhet web development company",
    "e-commerce development",
    "responsive web design",
    "UI/UX design",
    "PPC advertising",
    "social media marketing",
    "website development Bangladesh",
    "web design Sylhet",
    "mobile app development Bangladesh",
    "SEO company Sylhet",
    "digital marketing agency Bangladesh",
    "web development services",
    "custom website development",
    "WordPress development",
    "WooCommerce development",
    "content marketing",
    "email marketing"
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
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.webcoronet.com/#organization",
    "name": "Web Coronet",
    "alternateName": "Webcoronet",
    "url": "https://www.webcoronet.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.webcoronet.com/logo.png",
      "width": 1200,
      "height": 630
    },
    "image": "https://www.webcoronet.com/logo.png",
    "description": "Leading web development, design, and digital marketing agency in Sylhet, Bangladesh. We provide custom mobile apps, web development, graphic design, SEO, and digital marketing services.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ABC Point, Uposohor",
      "addressLocality": "Sylhet",
      "addressRegion": "Sylhet Division",
      "addressCountry": "BD",
      "postalCode": "3100"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "24.8949",
      "longitude": "91.8687"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+8801759231288",
        "contactType": "Customer Service",
        "email": "info@webcoronet.com",
        "areaServed": "BD",
        "availableLanguage": ["en", "bn"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "+8801759231288",
        "contactType": "Sales",
        "email": "info@webcoronet.com"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61582159036502",
      "https://www.youtube.com/@AsadSnapper"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "Bangladesh"
    },
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Web Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Development",
            "description": "Custom web development services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile App Development",
            "description": "iOS and Android app development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Graphic Design",
            "description": "Professional graphic design services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital Marketing",
            "description": "SEO, PPC, and social media marketing"
          }
        }
      ]
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.webcoronet.com/#website",
    "url": "https://www.webcoronet.com",
    "name": "Web Coronet",
    "description": "Web Development, Design & Digital Marketing Agency",
    "publisher": {
      "@id": "https://www.webcoronet.com/#organization"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.webcoronet.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/logo.png" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/logo.png" sizes="180x180" />
        <link rel="shortcut icon" href="/logo.png" type="image/png" />
        <link rel="canonical" href="https://www.webcoronet.com" />
        <meta name="geo.region" content="BD-SY" />
        <meta name="geo.placename" content="Sylhet" />
        <meta name="geo.position" content="24.8949;91.8687" />
        <meta name="ICBM" content="24.8949, 91.8687" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body
        className={`${heebo.variable} ${litarata.variable} antialiased relative bg-[#F7F7F7]`}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:p-4 focus:bg-black focus:text-white">
          Skip to main content
        </a>
        <Header />
        <ThreeVerticalLines />
        <main id="main-content" className="w-10/12 max-w-screen-2xl mx-auto">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}