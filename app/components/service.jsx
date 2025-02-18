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
                    <div className='flex flex-col gap-3 text-start '>
                        <h3 className='text-md lg:text-xl'>Mobile App</h3>
                        <p className=''>- Custom Mobile App Design
                        </p>
                        <p className=''>- Smooth UI/UX Experience
                        </p>
                        <p className=''> - Cross-Platform Development
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
                    <div className='flex flex-col gap-3 text-start '>
                        <h3 className='text-md lg:text-xl'>Web Development
                        </h3>
                        <p className=''> - Front-End Development</p>
                        <p className=''> - Back-End Development</p>
                        <p className=''> - E-commerce Solutions</p>
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
                    <div className='flex flex-col gap-3 text-start '>
                        <h3 className='text-md lg:text-xl'>Graphic Design</h3>
                        <p className=''>- Logo and Branding Design</p>
                        <p className=''>- Marketing Collateral Design</p>
                        <p className=''>- Social Media Graphics</p>
                        <p className=''>- Print Design</p>
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
                    <div className='flex flex-col gap-3 text-start '>
                        <h3 className='text-md lg:text-xl'>Digital Marketing</h3>
                        <p className=''>- SEO</p>
                        <p className=''>- PPC Advertising</p>
                        <p className=''>- Social Media Marketing</p>
                        <p className=''>- Content Marketing</p>
                        <p className=''>- Email Marketing</p>
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