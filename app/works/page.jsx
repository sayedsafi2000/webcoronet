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
        <div className='mt-28'>
            <Heading subTitle="Showcasing Our Creativity and Expertise" title="Our Work" />
            <div className="mt-28 container mx-auto">
                <Service />
                <div className="mt-16">
                    <Heading subTitle="Our Expertise and Commitment to Your Success Sets Us Apart" title="Why Webcoronet ?" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    <div className="w-full flex flex-col gap-3 md:gap-4 lg:gap-5 p-4 md:p-6 lg:p-12 shadow-lg text-center items-center animation">
                        <div className="">
                            <BsPersonWorkspace className="text-3xl sm:text-4xl text-gray-500" />
                        </div>
                        <h3 className='text-lg sm:text-xl md:text-2xl'>Personalized Business <br /> Package</h3>
                        <p className='text-xs sm:text-sm md:text-base'>Choose from a wide range of web solutions that you need to ensure effective, efficient, and sustainable growth of your business. Webcoronet works on the smallest to largest detail of your website---from mobile and speed optimization, to landing page designs, and even SEO---basically, everything under the digital sun!</p>
                    </div>
                    <div className="w-full flex flex-col gap-3 md:gap-4 lg:gap-5 p-4 md:p-6 lg:p-12 shadow-lg text-center items-center animation">
                        <div className="">
                            <BsPersonWorkspace className="text-3xl sm:text-4xl text-gray-500" />
                        </div>
                        <h3 className='text-lg sm:text-xl md:text-2xl'>Results-Driven <br /> Solutions</h3>
                        <p className='text-xs sm:text-sm md:text-base'>At Webcoronet, we are committed to delivering measurable results for our clients. We leverage the latest technologies and marketing tools to create data-driven campaigns that are optimized for performance and ROI. Our team is constantly monitoring and analyzing campaign performance, making adjustments as needed.</p>
                    </div>
                    <div className="w-full flex flex-col gap-3 md:gap-4 lg:gap-5 p-4 md:p-6 lg:p-12 shadow-lg text-center items-center animation">
                        <div className="">
                            <BsPersonWorkspace className="text-3xl sm:text-4xl text-gray-500" />
                        </div>
                        <h3 className='text-lg sm:text-xl md:text-2xl'>Customized <br /> Approach</h3>
                        <p className='text-xs sm:text-sm md:text-base'>Clients from around the globe have raved and benefited from our responsive WordPress and WooCommerce websites. These SMEs are able to stand-up and even surpass bigger and heavier competition at a lower cost here at Webcoronet---all because our services are tailored and uniquely-made for you and your specific vision for your company.</p>
                    </div>
                </div>
                <div className="mt-12 md:mt-14 lg:mt-16 text-pretty lg:text-center">
                    <h2 className='mb-3 md:mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl'>Our Website and Development Projects</h2>
                    <p className='w-full lg:w-2/3 mx-auto text-sm sm:text-base md:text-lg px-4 md:px-0'>At Webcoronet, we are proud of the websites and development projects we have created for our clients. From e-commerce sites to custom CMS builds, our team has the expertise and creativity to develop unique solutions that meet our clients needs. Browse through our portfolio to see examples of our work and learn more about how we can help your business succeed online.

                        Ready to take your website to the next level? Contact us today to schedule a consultation with one of our experts and learn how we can help you achieve your online goals.</p>
                </div>
                <div className='mt-16'>
                    <Carousel
                        opts={{
                            align: "start",
                        }}
                        className="w-full"
                    >
                        <CarouselContent>
                            <CarouselItem className="md:basis-1/2 lg:basis-1/3 w-full">
                                <div className="p-1">
                                    <Card>
                                        <CardContent className="flex items-center justify-center p-0">

                                            <div>
                                                <Image width={1000} height={1000} src="/website (5).png" alt='Web Coronet web development project portfolio' />
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                            <CarouselItem className="md:basis-1/2 lg:basis-1/3 w-full">
                                <div className="p-1">
                                    <Card>
                                        <CardContent className="flex items-center justify-center p-0">

                                            <div>
                                                <Image width={1000} height={1000} src="/website (6).png" alt='Web Coronet web development project portfolio' />
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                            <CarouselItem className="md:basis-1/2 lg:basis-1/3 w-full">
                                <div className="p-1">
                                    <Card>
                                        <CardContent className="flex items-center justify-center p-0">

                                            <div>
                                                <Image width={1000} height={1000} src="/website (4).png" alt='Web Coronet web development project portfolio' />
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                            <CarouselItem className="md:basis-1/2 lg:basis-1/3 w-full">
                                <div className="p-1">
                                    <Card>
                                        <CardContent className="flex items-center justify-center p-0">

                                            <div>
                                                <Image width={1000} height={1000} src="/website (3).png" alt='Web Coronet web development project portfolio' />
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                            <CarouselItem className="md:basis-1/2 lg:basis-1/3 w-full">
                                <div className="p-1">
                                    <Card>
                                        <CardContent className="flex items-center justify-center p-0">

                                            <div>
                                                <Image width={1000} height={1000} src="/website (2).png" alt='Web Coronet web development project portfolio' />
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
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