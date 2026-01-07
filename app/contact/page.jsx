import React from 'react';
import Heading from '../components/heading/heading';

export const metadata = {
  title: "Contact Us - Get in Touch with Web Coronet | Sylhet, Bangladesh",
  description: "Contact Web Coronet for web development, design, and digital marketing services. Located at ABC Point, Uposohor, Sylhet, Bangladesh. Email: info@webcoronet.com | Phone: +880 1759-231288 | WhatsApp: +880 1759-231288",
  keywords: [
    "contact webcoronet",
    "web development agency contact",
    "Sylhet web agency",
    "Bangladesh web development contact",
    "contact web developer",
    "web agency Sylhet contact",
    "web development company contact",
    "get quote web development",
    "web design consultation",
    "digital marketing consultation",
    "Sylhet web services",
    "Bangladesh web agency",
    "contact Sayed Safi",
    "web development inquiry"
  ],
  openGraph: {
    title: "Contact Us - Get in Touch with Web Coronet | Sylhet, Bangladesh",
    description: "Contact Web Coronet for web development, design, and digital marketing services. Located at ABC Point, Uposohor, Sylhet, Bangladesh. Email: info@webcoronet.com | Phone: +880 1759-231288",
    url: "https://www.webcoronet.com/contact",
    type: "website",
    images: [
      {
        url: "https://www.webcoronet.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Contact Web Coronet",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - Get in Touch with Web Coronet",
    description: "Contact Web Coronet for web development, design, and digital marketing services. Located in Sylhet, Bangladesh.",
  },
  alternates: {
    canonical: "https://www.webcoronet.com/contact",
  },
};

const Contact = () => {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "Web Coronet",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "ABC Point, Uposohor",
        "addressLocality": "Sylhet",
        "addressCountry": "BD"
      },
      "telephone": "+8801759231288",
      "email": "info@webcoronet.com"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <section itemScope itemType="https://schema.org/ContactPage" className="flex flex-col items-center justify-center mt-12 md:mt-16">
            <Heading title="Get in touch with us" subTitle="Let`s Collaborate" />
            <div className="w-full max-w-7xl flex flex-col md:flex-col lg:flex-row gap-8 md:gap-10 lg:gap-12 xl:gap-40 lg:items-start px-4 md:px-6">
                {/* Left Section */}
                <div className="w-full">
                    <form className="space-y-6 md:space-y-8">
                        <div className="relative">
                            <label
                                htmlFor="name"
                                className="absolute text-[10px] sm:text-[11px] md:text-[12px] text-gray-600 transform -translate-y-3 left-2 px-1 uppercase space-x-1 tracking-[3px] md:tracking-[4px]"
                            >
                                Your Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                className="w-full lg:w-[700px] border-b border-gray-300 focus:border-black focus:outline-none py-3 md:py-4 lg:py-5 mb-6 md:mb-8 lg:mb-10 bg-transparent text-sm md:text-base"
                            />
                        </div>
                        <div className="relative">
                            <label
                                htmlFor="email"
                                className="absolute text-[10px] sm:text-[11px] md:text-[12px] text-gray-600 transform -translate-y-3 left-2 px-1 uppercase space-x-1 tracking-[3px] md:tracking-[4px]"
                            >
                                Your Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                className="w-full lg:w-[700px] border-b border-gray-300 focus:border-black focus:outline-none py-3 md:py-4 lg:py-5 mb-6 md:mb-8 lg:mb-10 bg-transparent text-sm md:text-base"
                            />
                        </div>
                        <div className="relative">
                            <label
                                htmlFor="project"
                                className="absolute text-[10px] sm:text-[11px] md:text-[12px] text-gray-600 transform -translate-y-3 left-2 px-1 uppercase space-x-1 tracking-[3px] md:tracking-[4px]"
                            >
                                Tell us about your project
                            </label>
                            <textarea
                                id="project"
                                rows="4"
                                className="w-full lg:w-[700px] border-b border-gray-300 focus:border-black focus:outline-none py-3 md:py-4 lg:py-5 mb-6 md:mb-8 lg:mb-10 bg-transparent text-sm md:text-base resize-none"
                            ></textarea>
                        </div>
                        <button className="text-sm md:text-[15px] text-black font-semibold hover:text-gray-700 tracking-wide px-4 py-2 md:px-6 md:py-3 border border-black hover:bg-black hover:text-white transition-colors">
                            Send a Message
                        </button>
                    </form>
                </div>

                {/* Right Section */}
                <div className="space-y-6 md:space-y-8 w-full lg:w-[480px] mt-8 lg:mt-0">
                    <div>
                        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-black mb-4">
                            Get in Touch
                        </h2>
                        <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-4">
                            We&apos;re here to help bring your digital vision to life. Whether you have a question about our services, need a quote, or want to discuss your project, our team is ready to assist you.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-base sm:text-lg md:text-xl text-black mb-3">
                            Email Us
                        </h2>
                        <a href="mailto:info@webcoronet.com" className="text-gray-600 hover:text-black transition-colors text-sm sm:text-base break-all block mb-2">
                            info@webcoronet.com
                        </a>
                        <p className="text-xs sm:text-sm text-gray-500">
                            We typically respond within 24 hours
                        </p>
                    </div>
                    <div>
                        <h2 className="text-base sm:text-lg md:text-xl text-black mb-3">
                            Call Us
                        </h2>
                        <a href="tel:+8801759231288" className="text-gray-600 hover:text-black transition-colors block text-sm sm:text-base mb-2">
                            +880 1759-231288
                        </a>
                        <p className="text-xs sm:text-sm text-gray-500">
                            Monday - Saturday, 9:00 AM - 6:00 PM (BST)
                        </p>
                    </div>
                    <div>
                        <h2 className="text-base sm:text-lg md:text-xl text-black mb-3">
                            Visit Our Office
                        </h2>
                        <address className="text-gray-600 not-italic text-sm sm:text-base leading-relaxed">
                            ABC Point, Uposohor<br />
                            Sylhet, Bangladesh<br />
                            Postal Code: 3100
                        </address>
                    </div>
                    <div className="pt-4 border-t border-gray-200">
                        <h2 className="text-base sm:text-lg md:text-xl text-black mb-3">
                            Follow Us
                        </h2>
                        <p className="text-xs sm:text-sm text-gray-600 mb-3">
                            Stay connected with us on social media for the latest updates, tips, and insights.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.facebook.com/profile.php?id=61582159036502" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition-colors text-sm">
                                Facebook
                            </a>
                            <a href="https://www.youtube.com/@AsadSnapper" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition-colors text-sm">
                                YouTube
                            </a>
                            <a href="https://wa.me/8801759231288" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition-colors text-sm">
                                WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </>
    );
};

export default Contact;
