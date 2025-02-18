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
const Services = () => {
    return (
        <div className='mt-28'>
            <Heading subTitle="Our Services" title="What We Do & How We Do It" />
            <div className='my-28'>
                <div className="flex flex-col-reverse lg:flex-row-reverse items-center justify-between gap-7 ">
                    <div className='flex flex-col items-start justify-start w-full lg:w-2/3 gap-6'>
                        <h1>Comprehensive Digital Services</h1>
                        <p>Tailored Solutions to Meet Your Unique Needs</p>
                        <button className='px-12 py-3 bg-black text-white'>Read More</button>
                    </div>
                    <div className=''>
                        <Image src="/h-img-3.jpg" className='w-full' width={1000} height={1000} alt='website' />
                    </div>
                </div>
            </div>
            <Service className="!animation"/>
            <div className='my-28'>
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 ">
                    <div className='flex flex-col items-center w-full lg:w-1/2 gap-6'>
                        <Accordion type="single" collapsible className="w-full border-b-2">
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-2xl">Web Design</AccordionTrigger>
                                <AccordionContent>
                                Our agency specializes in creating visually appealing and user-centric website designs. We focus on delivering intuitive, responsive, and engaging layouts that reflect your brand identity and enhance user experience.
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
                        <Image src="/p4-img-1.jpg" className='w-full' width={1000} height={1000} alt='website' />
                    </div>
                </div>
            </div>
            <GrateClient/>
        </div>
    );
};

export default Services;