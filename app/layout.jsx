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
  description: "Web Coronet is a leading web development, design, and digital marketing agency in Sylhet, Bangladesh. We offer custom mobile apps, web development, graphic design, SEO, and digital marketing services to help your business grow online. Contact us at ABC Point, Uposohor, Sylhet. Expert team including Sayed Safi (Fullstack Developer), Jihan (Content Writer), and MD Foyejur Rahman Reza (Manager).",
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
    "email marketing",
    "web development company",
    "best web agency Bangladesh",
    "professional web design",
    "affordable web development",
    "React development",
    "Next.js development",
    "Node.js development",
    "fullstack development",
    "website redesign",
    "landing page design",
    "brand identity design",
    "logo design",
    "online marketing",
    "search engine optimization",
    "local SEO",
    "Google Ads",
    "Facebook marketing",
    "Sayed Safi",
    "Sayed Safi web developer",
    "Sayed Safi fullstack developer",
    "Sayed Safi Facebook",
    "Sayed Safi portfolio",
    "Jihan",
    "Jihan marketing writer",
    "Jihan content writer",
    "Jihan Facebook",
    "MD Foyejur Rahman Reza",
    "Foyejur Reza",
    "Foyejur Reza Manager",
    "Foyejur Reza Facebook",
    "Web Coronet team",
    "Webcoronet",
    "webcoronet.com"
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
    title: "Web Coronet - Web Development, Design & Digital Marketing Agency | Sylhet, Bangladesh",
    description: "Leading web development, design, and digital marketing agency in Sylhet, Bangladesh. Expert team offering custom mobile apps, web development, graphic design, SEO, and digital marketing services. Contact us at ABC Point, Uposohor, Sylhet.",
    images: [
      {
        url: "https://www.webcoronet.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Web Coronet - Web Development Agency in Sylhet, Bangladesh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Coronet - Web Development & Digital Marketing Agency | Sylhet, Bangladesh",
    description: "Leading web development, design, and digital marketing agency in Sylhet, Bangladesh. Expert team offering custom solutions for your business growth.",
    images: ["https://www.webcoronet.com/logo.png"],
    creator: "@webcoronet",
    site: "@webcoronet",
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
      { url: "/logo_url.png", type: "image/png", sizes: "32x32" },
      { url: "/logo_url.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [
      { url: "/logo_url.png", type: "image/png", sizes: "180x180" },
    ],
    shortcut: "/logo_url.png",
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
        <link rel="icon" href="/logo_url.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/logo_url.png" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/logo_url.png" sizes="180x180" />
        <link rel="shortcut icon" href="/logo_url.png" type="image/png" />
        <link rel="preload" href="/logo_url.png" as="image" />
        <link rel="canonical" href="https://www.webcoronet.com" />
        <meta name="geo.region" content="BD-SY" />
        <meta name="geo.placename" content="Sylhet" />
        <meta name="geo.position" content="24.8949;91.8687" />
        <meta name="ICBM" content="24.8949, 91.8687" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="author" content="Sayed Safi, Web Coronet" />
        <meta name="copyright" content="Web Coronet" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="Web Coronet" />
        <meta name="application-name" content="Web Coronet" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <link rel="author" href="https://www.facebook.com/sayedsafiii/" />
        <link rel="alternate" type="application/rss+xml" title="Web Coronet RSS Feed" href="https://www.webcoronet.com/rss.xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.webcoronet.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Services",
                "item": "https://www.webcoronet.com/services"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Works",
                "item": "https://www.webcoronet.com/works"
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": "Team",
                "item": "https://www.webcoronet.com/team"
              },
              {
                "@type": "ListItem",
                "position": 5,
                "name": "Contact",
                "item": "https://www.webcoronet.com/contact"
              },
              {
                "@type": "ListItem",
                "position": 6,
                "name": "Blog",
                "item": "https://www.webcoronet.com/blog"
              }
            ]
          }) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What services does Web Coronet offer?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Web Coronet offers comprehensive digital services including web development, mobile app development, graphic design, and digital marketing. We specialize in custom solutions tailored to your business needs."
                }
              },
              {
                "@type": "Question",
                "name": "Where is Web Coronet located?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Web Coronet is located at ABC Point, Uposohor, Sylhet, Bangladesh. We serve clients locally and globally."
                }
              },
              {
                "@type": "Question",
                "name": "How can I contact Web Coronet?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can contact Web Coronet via email at info@webcoronet.com, phone at +880 1759-231288, or visit our office at ABC Point, Uposohor, Sylhet."
                }
              },
              {
                "@type": "Question",
                "name": "Does Web Coronet provide SEO services?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, Web Coronet provides comprehensive SEO services including on-page optimization, keyword research, content optimization, and local SEO to help your business rank higher in search engines."
                }
              }
            ]
          }) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AggregateRating",
            "itemReviewed": {
              "@type": "LocalBusiness",
              "name": "Web Coronet",
              "@id": "https://www.webcoronet.com/#organization"
            },
            "ratingValue": "4.9",
            "reviewCount": "127",
            "bestRating": "5",
            "worstRating": "1"
          }) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Sayed Safi",
            "jobTitle": "Fullstack Web Developer",
            "description": "Sayed Safi is a highly skilled fullstack web developer specializing in React, Next.js, Node.js, and modern web technologies.",
            "url": "https://sayedsafi.me/",
            "sameAs": [
              "https://www.facebook.com/sayedsafiii/",
              "https://sayedsafi.me/"
            ],
            "worksFor": {
              "@type": "Organization",
              "name": "Web Coronet",
              "url": "https://www.webcoronet.com"
            },
            "knowsAbout": [
              "Web Development",
              "React",
              "Next.js",
              "Node.js",
              "Fullstack Development",
              "Frontend Development",
              "Backend Development"
            ]
          }) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Jihan",
            "jobTitle": "Marketer and Content Writer",
            "description": "Jihan is a creative marketing and content writer specializing in engaging content creation and digital marketing strategies.",
            "url": "https://www.facebook.com/NusaitJihan.nhn505",
            "sameAs": [
              "https://www.facebook.com/NusaitJihan.nhn505"
            ],
            "worksFor": {
              "@type": "Organization",
              "name": "Web Coronet",
              "url": "https://www.webcoronet.com"
            },
            "knowsAbout": [
              "Content Writing",
              "Copywriting",
              "Digital Marketing",
              "Social Media Marketing",
              "Content Strategy"
            ]
          }) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "MD Foyejur Rahman Reza",
            "jobTitle": "Manager",
            "description": "Experienced manager overseeing operations and ensuring smooth workflow at Web Coronet.",
            "url": "https://www.facebook.com/FoyejurReza",
            "sameAs": [
              "https://www.facebook.com/FoyejurReza"
            ],
            "worksFor": {
              "@type": "Organization",
              "name": "Web Coronet",
              "url": "https://www.webcoronet.com"
            },
            "knowsAbout": [
              "Operations Management",
              "Team Leadership",
              "Project Coordination",
              "Business Operations"
            ]
          }) }}
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