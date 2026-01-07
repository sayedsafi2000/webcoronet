import React from 'react';
import { PiPen, PiMonitor } from "react-icons/pi";
import { GoBookmark, GoBookmarkFill, GoFileDirectory } from "react-icons/go";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "./ui/accordion"
const Service = () => {
    return (
        <div className='mt-12 md:mt-16 lg:mt-20 px-4 md:px-6 lg:px-8'>
            <h2>Our services</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6 mt-6 md:mt-8">
                <div className='flex gap-2 lg:gap-4 p-2 lg:p-4 items-start animation'>
                    <div className='-rotate-45'>
                        <PiPen className='text-4xl font-[100] border-0 text-gray-500' />
                    </div>
                    <div className='flex flex-col gap-2 md:gap-3 text-start '>
                        <h3 className='text-sm sm:text-base md:text-lg lg:text-xl'>Mobile App</h3>
                        <p className='text-xs sm:text-sm md:text-base'>- Custom Mobile App Design
                        </p>
                        <p className='text-xs sm:text-sm md:text-base'>- Smooth UI/UX Experience
                        </p>
                        <p className='text-xs sm:text-sm md:text-base'> - Cross-Platform Development
                        </p>
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Read More</AccordionTrigger>
                                <AccordionContent>
                                    <p className='text-xs sm:text-sm md:text-base mb-2'>Transform your business idea into a powerful mobile application that engages users and drives growth. Our mobile app development services cover both iOS and Android platforms, ensuring your app reaches the widest possible audience.</p>
                                    <p className='text-xs sm:text-sm md:text-base'>We specialize in creating native and cross-platform mobile applications with intuitive user interfaces, smooth performance, and robust backend integration. Our apps are designed to provide exceptional user experiences while meeting your business objectives.</p>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
                <div className='flex gap-2 lg:gap-4 p-2 lg:p-4 items-start animation'>
                    <div className=''>
                        <PiMonitor className='text-4xl font-[100] border-0 text-gray-500' />
                    </div>
                    <div className='flex flex-col gap-2 md:gap-3 text-start '>
                        <h3 className='text-sm sm:text-base md:text-lg lg:text-xl'>Web Development
                        </h3>
                        <p className='text-xs sm:text-sm md:text-base'> - Front-End Development</p>
                        <p className='text-xs sm:text-sm md:text-base'> - Back-End Development</p>
                        <p className='text-xs sm:text-sm md:text-base'> - E-commerce Solutions</p>
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Read More</AccordionTrigger>
                                <AccordionContent>
                                    <p className='text-xs sm:text-sm md:text-base mb-2'>Create a powerful online presence with our comprehensive web development services. We build responsive, fast, and secure websites using modern technologies like React, Next.js, and Node.js.</p>
                                    <p className='text-xs sm:text-sm md:text-base'>From simple business websites to complex e-commerce platforms and custom web applications, our development team ensures seamless performance, security, and functionality. Every website we build is optimized for search engines and designed to convert visitors into customers.</p>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
                <div className='flex gap-2 lg:gap-4 p-2 lg:p-4 items-start animation'>
                    <div className=''>
                        <GoFileDirectory className='text-4xl font-[100] border-0 text-gray-500' />
                    </div>
                    <div className='flex flex-col gap-2 md:gap-3 text-start '>
                        <h3 className='text-sm sm:text-base md:text-lg lg:text-xl'>Graphic Design</h3>
                        <p className='text-xs sm:text-sm md:text-base'>- Logo and Branding Design</p>
                        <p className='text-xs sm:text-sm md:text-base'>- Marketing Collateral Design</p>
                        <p className='text-xs sm:text-sm md:text-base'>- Social Media Graphics</p>
                        <p className='text-xs sm:text-sm md:text-base'>- Print Design</p>
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Read More</AccordionTrigger>
                                <AccordionContent>
                                    <p className='text-xs sm:text-sm md:text-base mb-2'>Elevate your brand identity with stunning visual designs that capture attention and communicate your message effectively. Our graphic design team combines creativity with strategic thinking to create visuals that resonate with your target audience.</p>
                                    <p className='text-xs sm:text-sm md:text-base'>We offer comprehensive design services including logo creation, brand identity development, marketing collateral, social media graphics, and print design. Every design we create is crafted to reflect your brand's personality and values while maintaining professional standards.</p>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
                <div className='flex gap-2 lg:gap-4 p-2 lg:p-4 items-start animation'>
                    <div className=''>
                        <GoBookmark className='text-4xl font-[100] border-0 text-gray-500' />
                    </div>
                    <div className='flex flex-col gap-2 md:gap-3 text-start '>
                        <h3 className='text-sm sm:text-base md:text-lg lg:text-xl'>Digital Marketing</h3>
                        <p className='text-xs sm:text-sm md:text-base'>- SEO</p>
                        <p className='text-xs sm:text-sm md:text-base'>- PPC Advertising</p>
                        <p className='text-xs sm:text-sm md:text-base'>- Social Media Marketing</p>
                        <p className='text-xs sm:text-sm md:text-base'>- Content Marketing</p>
                        <p className='text-xs sm:text-sm md:text-base'>- Email Marketing</p>
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Read More</AccordionTrigger>
                                <AccordionContent>
                                    <p className='text-xs sm:text-sm md:text-base mb-2'>Grow your online presence and reach your target audience with our comprehensive digital marketing services. We use data-driven strategies and proven techniques to increase your visibility, drive traffic, and convert visitors into customers.</p>
                                    <p className='text-xs sm:text-sm md:text-base'>Our digital marketing services include search engine optimization (SEO), pay-per-click (PPC) advertising, social media marketing, content marketing, email campaigns, and analytics tracking. We continuously monitor and optimize campaigns to ensure maximum ROI and sustainable growth for your business.</p>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;