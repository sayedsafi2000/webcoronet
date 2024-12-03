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
const Works = () => {
    return (
        <div className='mt-28'>
            <Heading subTitle="Products" title="Our Featured Products" />
            <div className="mt-28 container mx-auto">
                <Service />
                <div className="mt-16">
                    <Heading subTitle="Our Expertise and Commitment to Your Success Sets Us Apart" title="Why Webcoronet ?" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="w-full flex flex-col gap-5 p-4 lg:p-12 shadow-lg text-center items-center animation">
                        <div className="">
                            <BsPersonWorkspace className="text-4xl text-gray-500" />
                        </div>
                        <h3>Personalized Business <br /> Package</h3>
                        <p>Choose from a wide range of web solutions that you need to ensure effective, efficient, and sustainable growth of your business. Webcoronet works on the smallest to largest detail of your website---from mobile and speed optimization, to landing page designs, and even SEO---basically, everything under the digital sun!</p>
                    </div>
                    <div className="w-full flex flex-col gap-5 p-4 lg:p-12 shadow-lg text-center items-center animation">
                        <div className="">
                            <BsPersonWorkspace className="text-4xl text-gray-500" />
                        </div>
                        <h3>Results-Driven <br /> Solutions</h3>
                        <p>At Webcoronet, we are committed to delivering measurable results for our clients. We leverage the latest technologies and marketing tools to create data-driven campaigns that are optimized for performance and ROI. Our team is constantly monitoring and analyzing campaign performance, making adjustments as needed.</p>
                    </div>
                    <div className="w-full flex flex-col gap-5 p-4 lg:p-12 shadow-lg text-center items-center animation">
                        <div className="">
                            <BsPersonWorkspace className="text-4xl text-gray-500" />
                        </div>
                        <h3>Customized <br /> Approach</h3>
                        <p>Clients from around the globe have raved and benefited from our responsive WordPress and WooCommerce websites. These SMEs are able to stand-up and even surpass bigger and heavier competition at a lower cost here at Webcoronet---all because our services are tailored and uniquely-made for you and your specific vision for your company.</p>
                    </div>
                </div>
                <div className="mt-16 text-pretty text-center">
                    <h2 className='mb-4'>Our Website and Development Projects</h2>
                    <p className='w-2/3 mx-auto'>At Webcoronet, we are proud of the websites and development projects we have created for our clients. From e-commerce sites to custom CMS builds, our team has the expertise and creativity to develop unique solutions that meet our clients needs. Browse through our portfolio to see examples of our work and learn more about how we can help your business succeed online.

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
                                                <Image width={1000} height={1000} src="/website (5).png" alt='web development' />
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
                                                <Image width={1000} height={1000} src="/website (6).png" alt='web development' />
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
                                                <Image width={1000} height={1000} src="/website (4).png" alt='web development' />
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
                                                <Image width={1000} height={1000} src="/website (3).png" alt='web development' />
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
                                                <Image width={1000} height={1000} src="/website (2).png" alt='web development' />
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