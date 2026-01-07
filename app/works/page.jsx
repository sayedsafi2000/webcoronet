import React from 'react';
import Heading from '../components/heading/heading';
import Service from '../components/service';
import { BsPersonWorkspace } from "react-icons/bs";

import { Card, CardContent } from "../components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../components/ui/carousel"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "../components/ui/tooltip"
import Image from 'next/image';

export const metadata = {
  title: "Our Work - Portfolio & Projects | Web Coronet",
  description: "Explore Web Coronet's portfolio of successful web development projects, mobile apps, and digital marketing campaigns. See how we've helped businesses grow online.",
  keywords: [
    "webcoronet portfolio",
    "web development portfolio",
    "mobile app portfolio",
    "website projects",
    "e-commerce projects"
  ],
  openGraph: {
    title: "Our Work - Portfolio & Projects | Web Coronet",
    description: "Explore Web Coronet's portfolio of successful web development projects, mobile apps, and digital marketing campaigns.",
    url: "https://www.webcoronet.com/works",
  },
  alternates: {
    canonical: "https://www.webcoronet.com/works",
  },
};

const Works = () => {
    return (
        <div className='mt-12 md:mt-16 lg:mt-20 px-4 md:px-6 lg:px-8'>
            <Heading subTitle="Showcasing Our Creativity and Expertise" title="Our Work" />
            <div className="mt-12 md:mt-16 lg:mt-20 max-w-7xl mx-auto">
                <Service />
                <div className="mt-16">
                    <Heading subTitle="Our Expertise and Commitment to Your Success Sets Us Apart" title="Why Webcoronet ?" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    <div className="w-full flex flex-col gap-4 md:gap-5 p-6 md:p-8 lg:p-10 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow animation border border-gray-100">
                        <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                            <BsPersonWorkspace className="text-3xl sm:text-4xl text-blue-600" />
                        </div>
                        <h3 className='text-lg sm:text-xl md:text-2xl font-semibold mb-3'>Personalized Business Solutions</h3>
                        <p className='text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed'>
                            We understand that every business is unique. That's why we offer customized web solutions tailored to your specific needs. From mobile optimization and speed enhancement to landing page design and SEO, we handle every aspect of your digital presence to ensure effective, efficient, and sustainable business growth.
                        </p>
                        <ul className='text-xs sm:text-sm text-gray-600 mt-4 space-y-2 text-left'>
                            <li className='flex items-start gap-2'>
                                <span className='text-blue-600 mt-1'>✓</span>
                                <span>Custom website development</span>
                            </li>
                            <li className='flex items-start gap-2'>
                                <span className='text-blue-600 mt-1'>✓</span>
                                <span>Mobile & speed optimization</span>
                            </li>
                            <li className='flex items-start gap-2'>
                                <span className='text-blue-600 mt-1'>✓</span>
                                <span>SEO & content strategy</span>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full flex flex-col gap-4 md:gap-5 p-6 md:p-8 lg:p-10 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow animation border border-gray-100">
                        <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                            <BsPersonWorkspace className="text-3xl sm:text-4xl text-green-600" />
                        </div>
                        <h3 className='text-lg sm:text-xl md:text-2xl font-semibold mb-3'>Results-Driven Approach</h3>
                        <p className='text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed'>
                            At Web Coronet, we're committed to delivering measurable results for our clients. We leverage the latest technologies and marketing tools to create data-driven campaigns optimized for performance and ROI. Our team continuously monitors and analyzes campaign performance, making real-time adjustments to maximize your success.
                        </p>
                        <ul className='text-xs sm:text-sm text-gray-600 mt-4 space-y-2 text-left'>
                            <li className='flex items-start gap-2'>
                                <span className='text-green-600 mt-1'>✓</span>
                                <span>Data-driven strategies</span>
                            </li>
                            <li className='flex items-start gap-2'>
                                <span className='text-green-600 mt-1'>✓</span>
                                <span>Performance tracking & analytics</span>
                            </li>
                            <li className='flex items-start gap-2'>
                                <span className='text-green-600 mt-1'>✓</span>
                                <span>Continuous optimization</span>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full flex flex-col gap-4 md:gap-5 p-6 md:p-8 lg:p-10 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow animation border border-gray-100">
                        <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                            <BsPersonWorkspace className="text-3xl sm:text-4xl text-purple-600" />
                        </div>
                        <h3 className='text-lg sm:text-xl md:text-2xl font-semibold mb-3'>Customized Solutions</h3>
                        <p className='text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed'>
                            Clients from around the globe have benefited from our responsive WordPress and WooCommerce websites. Small and medium enterprises can compete with larger companies at a fraction of the cost, thanks to our tailored services designed specifically for your business vision and goals.
                        </p>
                        <ul className='text-xs sm:text-sm text-gray-600 mt-4 space-y-2 text-left'>
                            <li className='flex items-start gap-2'>
                                <span className='text-purple-600 mt-1'>✓</span>
                                <span>WordPress & WooCommerce</span>
                            </li>
                            <li className='flex items-start gap-2'>
                                <span className='text-purple-600 mt-1'>✓</span>
                                <span>Custom e-commerce solutions</span>
                            </li>
                            <li className='flex items-start gap-2'>
                                <span className='text-purple-600 mt-1'>✓</span>
                                <span>Scalable & cost-effective</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 md:mt-16 lg:mt-20 text-pretty lg:text-center">
                    <h2 className='mb-4 md:mb-6 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl'>Our Website and Development Projects</h2>
                    <p className='w-full lg:w-2/3 mx-auto text-xs sm:text-sm md:text-base lg:text-lg mb-4 md:mb-6'>
                        At Web Coronet, we take pride in delivering exceptional digital solutions that drive real business results. Our portfolio showcases a diverse range of projects, from sleek corporate websites to complex e-commerce platforms and innovative mobile applications. Each project is crafted with attention to detail, user experience, and performance optimization.
                    </p>
                    <p className='w-full lg:w-2/3 mx-auto text-xs sm:text-sm md:text-base lg:text-lg mb-4 md:mb-6'>
                        Our development process combines cutting-edge technology with strategic thinking, ensuring that every solution not only looks great but also performs flawlessly. We work closely with our clients to understand their unique challenges and goals, resulting in custom solutions that exceed expectations.
                    </p>
                    <p className='w-full lg:w-2/3 mx-auto text-xs sm:text-sm md:text-base lg:text-lg'>
                        Ready to take your digital presence to the next level? Contact us today to schedule a consultation with one of our experts and discover how we can help transform your business online.
                    </p>
                </div>
                <div className='mt-12 md:mt-16 lg:mt-20'>
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent>
                            {[
                                { src: "/website (5).png", title: "E-Commerce Platform", category: "Web Development" },
                                { src: "/website (6).png", title: "Corporate Website", category: "Web Design" },
                                { src: "/website (4).png", title: "Business Portal", category: "Web Application" },
                                { src: "/website (3).png", title: "Portfolio Website", category: "Creative Design" },
                                { src: "/website (2).png", title: "SaaS Platform", category: "Web Application" },
                            ].map((project, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 w-full">
                                    <div className="p-2">
                                        <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                            <CardContent className="p-0 relative group">
                                                <div className="relative overflow-hidden">
                                                    <Image 
                                                        width={1000} 
                                                        height={1000} 
                                                        src={project.src} 
                                                        alt={project.title}
                                                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                                        <div className="text-white">
                                                            <p className="text-xs uppercase tracking-wide mb-1">{project.category}</p>
                                                            <h4 className="text-sm font-semibold">{project.title}</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default Works;