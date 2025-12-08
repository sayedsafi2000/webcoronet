import React from 'react';
import Heading from '../components/heading/heading';

export const metadata = {
  title: "Contact Us - Get in Touch with Web Coronet",
  description: "Contact Web Coronet for web development, design, and digital marketing services. Located in Sylhet, Bangladesh. Email: info@webcoronet.com | Phone: +880 1759-231288",
  keywords: [
    "contact webcoronet",
    "web development agency contact",
    "Sylhet web agency",
    "Bangladesh web development contact"
  ],
  openGraph: {
    title: "Contact Us - Get in Touch with Web Coronet",
    description: "Contact Web Coronet for web development, design, and digital marketing services. Located in Sylhet, Bangladesh.",
    url: "https://www.webcoronet.com/contact",
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
                        <h2 className="text-xl sm:text-2xl md:text-3xl text-black mb-2">
                            Or just say hello:
                        </h2>
                        <a href="mailto:info@webcoronet.com" className="text-gray-600 hover:text-black transition-colors text-sm sm:text-base break-all">
                            info@webcoronet.com
                        </a>
                    </div>
                    <div>
                        <h2 className="text-base sm:text-lg text-black mb-2">
                            Our office in Bangladesh
                        </h2>
                        <address className="text-gray-600 not-italic mb-2 text-sm sm:text-base">
                            ABC Point, Uposohor, Sylhet
                        </address>
                        <a href="tel:+8801759231288" className="text-gray-600 hover:text-black transition-colors block text-sm sm:text-base">
                            +880 1759-231288
                        </a>
                    </div>
                </div>
            </div>
        </section>
      </>
    );
};

export default Contact;
