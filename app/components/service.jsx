import React from 'react';
import { PiPen, PiMonitor } from "react-icons/pi";
import { GoBookmark, GoFileDirectory } from "react-icons/go";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "./ui/accordion"
import Heading from './heading/heading';

const Service = () => {
    const services = [
        {
            icon: PiPen,
            title: "Mobile App",
            features: [
                "Custom Mobile App Design",
                "Smooth UI/UX Experience",
                "Cross-Platform Development"
            ],
            description: [
                "Transform your business idea into a powerful mobile application that engages users and drives growth. Our mobile app development services cover both iOS and Android platforms, ensuring your app reaches the widest possible audience.",
                "We specialize in creating native and cross-platform mobile applications with intuitive user interfaces, smooth performance, and robust backend integration. Our apps are designed to provide exceptional user experiences while meeting your business objectives."
            ]
        },
        {
            icon: PiMonitor,
            title: "Web Development",
            features: [
                "Front-End Development",
                "Back-End Development",
                "E-commerce Solutions"
            ],
            description: [
                "Create a powerful online presence with our comprehensive web development services. We build responsive, fast, and secure websites using modern technologies like React, Next.js, and Node.js.",
                "From simple business websites to complex e-commerce platforms and custom web applications, our development team ensures seamless performance, security, and functionality. Every website we build is optimized for search engines and designed to convert visitors into customers."
            ]
        },
        {
            icon: GoFileDirectory,
            title: "Graphic Design",
            features: [
                "Logo and Branding Design",
                "Marketing Collateral Design",
                "Social Media Graphics",
                "Print Design"
            ],
            description: [
                "Elevate your brand identity with stunning visual designs that capture attention and communicate your message effectively. Our graphic design team combines creativity with strategic thinking to create visuals that resonate with your target audience.",
                "We offer comprehensive design services including logo creation, brand identity development, marketing collateral, social media graphics, and print design. Every design we create is crafted to reflect your brand&apos;s personality and values while maintaining professional standards."
            ]
        },
        {
            icon: GoBookmark,
            title: "Digital Marketing",
            features: [
                "SEO",
                "PPC Advertising",
                "Social Media Marketing",
                "Content Marketing",
                "Email Marketing"
            ],
            description: [
                "Grow your online presence and reach your target audience with our comprehensive digital marketing services. We use data-driven strategies and proven techniques to increase your visibility, drive traffic, and convert visitors into customers.",
                "Our digital marketing services include search engine optimization (SEO), pay-per-click (PPC) advertising, social media marketing, content marketing, email campaigns, and analytics tracking. We continuously monitor and optimize campaigns to ensure maximum ROI and sustainable growth for your business."
            ]
        }
    ];

    return (
        <div className='my-8 md:my-12 lg:my-16 px-4 md:px-6 lg:px-8'>
            <div className='max-w-7xl mx-auto'>
                <Heading 
                    subTitle="What We Offer" 
                    title="Our Services" 
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {services.map((service, index) => {
                        const IconComponent = service.icon;
                        return (
                            <div key={index} className='flex flex-col gap-3 md:gap-4 p-4 md:p-5 animation'>
                                <div className='flex items-center gap-3 md:gap-4'>
                                    <IconComponent className='text-3xl md:text-4xl text-black flex-shrink-0' />
                                    <h3 className='text-base md:text-lg lg:text-xl font-semibold text-gray-900'>{service.title}</h3>
                                </div>
                                
                                <div className='flex flex-col gap-2'>
                                    {service.features.map((feature, idx) => (
                                        <p key={idx} className='text-xs sm:text-sm md:text-base text-gray-600'>
                                            {feature}
                                        </p>
                                    ))}
                                </div>
                                
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value={`item-${index}`}>
                                        <AccordionTrigger className="text-xs sm:text-sm">Read More</AccordionTrigger>
                                        <AccordionContent className="text-xs sm:text-sm text-gray-600">
                                            {service.description.map((desc, idx) => (
                                                <p key={idx} className={idx === 0 ? 'mb-2' : ''}>{desc}</p>
                                            ))}
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Service;