import React from 'react';
import Heading from '../components/heading/heading';
import Image from 'next/image';
import Service from '../components/service';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../components/ui/accordion"
import GrateClient from '../components/grateClient';

export const metadata = {
  title: "Our Services - Web Development, Mobile Apps, Design & Marketing",
  description: "Comprehensive digital services including web development, mobile app development, graphic design, and digital marketing. Custom solutions tailored to your business needs.",
  keywords: [
    "web development services",
    "mobile app development",
    "graphic design services",
    "digital marketing services",
    "SEO services",
    "e-commerce development",
    "responsive web design",
    "UI/UX design"
  ],
  openGraph: {
    title: "Our Services - Web Development, Mobile Apps, Design & Marketing",
    description: "Comprehensive digital services including web development, mobile app development, graphic design, and digital marketing.",
    url: "https://www.webcoronet.com/services",
  },
  alternates: {
    canonical: "https://www.webcoronet.com/services",
  },
};

const Services = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Web Development Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Web Coronet",
      "url": "https://www.webcoronet.com"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Bangladesh"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Development",
            "description": "Custom web development using latest technologies"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile App Development",
            "description": "iOS and Android mobile app development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Graphic Design",
            "description": "Professional graphic design and branding services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital Marketing",
            "description": "SEO, PPC, social media and content marketing"
          }
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <section itemScope itemType="https://schema.org/Service" className='mt-12 md:mt-16 lg:mt-20 px-4 md:px-6 lg:px-8'>
            <Heading subTitle="Our Services" title="What We Do & How We Do It" />
            <div className='my-12 md:my-16 lg:my-20'>
                <div className="flex flex-col-reverse lg:flex-row-reverse items-center justify-between gap-5 md:gap-6 lg:gap-8">
                    <div className='flex flex-col items-start justify-start w-full lg:w-2/3 gap-4 md:gap-5 lg:gap-6'>
                        <h1 className='text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>Comprehensive Digital Services</h1>
                        <p className='text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed'>
                            At Web Coronet, we offer a complete suite of digital services designed to elevate your business in the digital landscape. From cutting-edge web development to strategic digital marketing, our team combines technical expertise with creative innovation to deliver solutions that drive real results.
                        </p>
                        <p className='text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed'>
                            Whether you're a startup looking to establish your online presence or an established business seeking to expand your digital footprint, we provide tailored solutions that align with your goals and budget. Our comprehensive approach ensures seamless integration across all digital touchpoints.
                        </p>
                        <div className='grid grid-cols-2 gap-4 mt-4 w-full max-w-md'>
                            <div className='bg-gray-50 p-4 rounded-lg'>
                                <h4 className='text-sm font-semibold mb-1'>500+ Projects</h4>
                                <p className='text-xs text-gray-600'>Successfully delivered</p>
                            </div>
                            <div className='bg-gray-50 p-4 rounded-lg'>
                                <h4 className='text-sm font-semibold mb-1'>10+ Years</h4>
                                <p className='text-xs text-gray-600'>Industry experience</p>
                            </div>
                        </div>
                    </div>
                    <div className='rounded-lg overflow-hidden shadow-lg animation'>
                        <Image 
                            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" 
                            className='w-full h-auto object-cover' 
                            width={1000} 
                            height={1000} 
                            alt='Web development and digital services illustration' 
                        />
                    </div>
                </div>
            </div>
            <Service className="!animation"/>
            <div className='my-12 md:my-16 lg:my-20'>
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-6 md:gap-8 lg:gap-10">
                    <div className='flex flex-col items-center w-full lg:w-1/2 gap-6'>
                        <Accordion type="single" collapsible className="w-full border-b-2">
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-base sm:text-lg md:text-xl lg:text-2xl">Mobile App Development</AccordionTrigger>
                                <AccordionContent>
                                <p className='text-xs sm:text-sm md:text-base mb-3'>Transform your business idea into a powerful mobile application that engages users and drives growth. Our mobile app development services cover both iOS and Android platforms, ensuring your app reaches the widest possible audience.</p>
                                <ul className='list-disc list-inside space-y-2 text-xs sm:text-sm md:text-base'>
                                    <li>Native iOS and Android app development using Swift, Kotlin, and React Native</li>
                                    <li>Cross-platform solutions for faster deployment and cost efficiency</li>
                                    <li>Custom UI/UX design tailored to your brand and user needs</li>
                                    <li>App store optimization and submission assistance</li>
                                    <li>Post-launch maintenance and updates</li>
                                    <li>Integration with third-party APIs and services</li>
                                </ul>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                        <Accordion type="single" collapsible className="w-full  border-b-2">
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-base sm:text-lg md:text-xl lg:text-2xl">Web Development</AccordionTrigger>
                                <AccordionContent>
                                <p className='text-xs sm:text-sm md:text-base mb-3'>Create a powerful online presence with our comprehensive web development services. We build responsive, fast, and secure websites that not only look great but also perform exceptionally well across all devices and browsers.</p>
                                <ul className='list-disc list-inside space-y-2 text-xs sm:text-sm md:text-base'>
                                    <li>Custom website development using React, Next.js, and modern frameworks</li>
                                    <li>E-commerce solutions with WooCommerce, Shopify, and custom platforms</li>
                                    <li>Content Management Systems (CMS) for easy content updates</li>
                                    <li>API development and integration services</li>
                                    <li>Performance optimization and SEO-friendly architecture</li>
                                    <li>Secure hosting setup and ongoing maintenance</li>
                                </ul>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                        <Accordion type="single" collapsible className="w-full border-b-2">
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-base sm:text-lg md:text-xl lg:text-2xl">Graphic Design</AccordionTrigger>
                                <AccordionContent>
                                <p className='text-xs sm:text-sm md:text-base mb-3'>Elevate your brand identity with stunning visual designs that capture attention and communicate your message effectively. Our graphic design team combines creativity with strategic thinking to create visuals that resonate with your target audience.</p>
                                <ul className='list-disc list-inside space-y-2 text-xs sm:text-sm md:text-base'>
                                    <li>Logo design and complete brand identity packages</li>
                                    <li>Business cards, letterheads, and corporate stationery</li>
                                    <li>Social media graphics and marketing collateral</li>
                                    <li>Print design for brochures, flyers, and banners</li>
                                    <li>Packaging design for products</li>
                                    <li>Infographics and data visualization</li>
                                </ul>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                        <Accordion type="single" collapsible className="w-full border-b-2">
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-base sm:text-lg md:text-xl lg:text-2xl">Digital Marketing</AccordionTrigger>
                                <AccordionContent>
                                <p className='text-xs sm:text-sm md:text-base mb-3'>Grow your online presence and reach your target audience with our comprehensive digital marketing services. We use data-driven strategies and proven techniques to increase your visibility, drive traffic, and convert visitors into customers.</p>
                                <ul className='list-disc list-inside space-y-2 text-xs sm:text-sm md:text-base'>
                                    <li>Search Engine Optimization (SEO) to improve organic rankings</li>
                                    <li>Pay-Per-Click (PPC) advertising on Google and social platforms</li>
                                    <li>Social media marketing and community management</li>
                                    <li>Content marketing and blog writing</li>
                                    <li>Email marketing campaigns and automation</li>
                                    <li>Analytics and performance tracking</li>
                                </ul>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                    <div className='w-full lg:w-1/2 rounded-lg overflow-hidden shadow-lg animation'>
                        <Image 
                            src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80" 
                            className='w-full h-auto object-cover' 
                            width={1000} 
                            height={1000} 
                            alt='Professional web development and design services' 
                        />
                    </div>
                </div>
            </div>
            <GrateClient/>
        </section>
      </>
    );
};

export default Services;