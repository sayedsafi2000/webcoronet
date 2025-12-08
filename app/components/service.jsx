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
        <div className='mt-28'>
            <h2>Our services</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 mt-8">
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
                                    Our agency specializes in creating visually appealing and user-centric website designs. We focus on delivering intuitive, responsive, and engaging layouts that reflect your brand identity and enhance user experience.
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
                                We build powerful and scalable websites using the latest technologies. From dynamic e-commerce platforms to custom web applications, our development team ensures seamless performance, security, and functionality.
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
                                Our creative team designs compelling visuals that make your brand stand out. From logos and branding to social media graphics and marketing materials, we bring your vision to life with professional and eye-catching designs.
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
                                We drive business growth through data-driven digital marketing strategies. Our services include SEO, social media marketing, PPC advertising, and content marketing to boost your online presence and maximize conversions.
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