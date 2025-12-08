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
      <section itemScope itemType="https://schema.org/Service" className='mt-16 md:mt-24 lg:mt-28'>
            <Heading subTitle="Our Services" title="What We Do & How We Do It" />
            <div className='my-16 md:my-24 lg:my-28'>
                <div className="flex flex-col-reverse lg:flex-row-reverse items-center justify-between gap-5 md:gap-6 lg:gap-7">
                    <div className='flex flex-col items-start justify-start w-full lg:w-2/3 gap-4 md:gap-5 lg:gap-6'>
                        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>Comprehensive Digital Services</h1>
                        <p className='text-sm sm:text-base md:text-lg'>Tailored Solutions to Meet Your Unique Needs</p>
                        <button className='px-6 py-2 md:px-10 md:py-2.5 lg:px-12 lg:py-3 bg-black text-white text-sm md:text-base hover:bg-gray-800 transition-colors'>Read More</button>
                    </div>
                    <div className=''>
                        <Image src="/h-img-3.jpg" className='w-full' width={1000} height={1000} alt='Web development and digital services illustration' />
                    </div>
                </div>
            </div>
            <Service className="!animation"/>
            <div className='my-28'>
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 ">
                    <div className='flex flex-col items-center w-full lg:w-1/2 gap-6'>
                        <Accordion type="single" collapsible className="w-full border-b-2">
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-2xl">Mobile App </AccordionTrigger>
                                <AccordionContent>
                                Our agency specializes in creating visually appealing and user-centric mobile apps. We focus on delivering intuitive, responsive, and engaging layouts that reflect your brand identity and enhance user experience.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                        <Accordion type="single" collapsible className="w-full  border-b-2">
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-2xl">Web Development</AccordionTrigger>
                                <AccordionContent>
                                We build powerful and scalable websites using the latest technologies. From dynamic e-commerce platforms to custom web applications, our development team ensures seamless performance, security, and functionality.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                        <Accordion type="single" collapsible className="w-full border-b-2">
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-2xl">Graphic Design</AccordionTrigger>
                                <AccordionContent>
                                Our creative team designs compelling visuals that make your brand stand out. From logos and branding to social media graphics and marketing materials, we bring your vision to life with professional and eye-catching designs.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                        <Accordion type="single" collapsible className="w-full border-b-2">
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-2xl">Digital Marketing</AccordionTrigger>
                                <AccordionContent>
                                We drive business growth through data-driven digital marketing strategies. Our services include SEO, social media marketing, PPC advertising, and content marketing to boost your online presence and maximize conversions.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                    <div className=' w-full lg:w-1/2'>
                        <Image src="/p4-img-1.jpg" className='w-full' width={1000} height={1000} alt='Professional web development and design services' />
                    </div>
                </div>
            </div>
            <GrateClient/>
        </section>
      </>
    );
};

export default Services;