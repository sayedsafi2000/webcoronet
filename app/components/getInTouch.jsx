import React from 'react';
import { PiPen, PiMonitor, PiRocketLaunch } from "react-icons/pi";
import { GoFileDirectory } from "react-icons/go";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "./ui/accordion"
import Heading from './heading/heading';

const GetInTOuch = () => {
    return (
        <div className='my-12 md:my-16 lg:my-20 px-4 md:px-6 lg:px-8'>
            <Heading 
                subTitle="How We Work" 
                title="Our Process" 
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mt-6 md:mt-8 lg:mt-12">
                <div className='flex flex-col gap-4 p-6 md:p-8 lg:p-10 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow animation h-full'>
                    <div className='flex items-center gap-4'>
                        <div className='p-3 bg-blue-100 rounded-lg'>
                            <PiPen className='text-2xl sm:text-3xl md:text-4xl text-blue-600' />
                        </div>
                        <div className="flex flex-col">
                            <span className='text-xs text-gray-500 uppercase tracking-wide'>Step 01</span>
                            <h3 className='text-base sm:text-lg md:text-xl lg:text-2xl font-semibold'>Discovery & Research</h3>
                        </div>
                    </div>
                    <p className='text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed'>
                        We begin by understanding your business goals, target audience, and market landscape. Through comprehensive research and stakeholder interviews, we identify opportunities and define the project scope.
                    </p>
                    <Accordion type="single" collapsible className="w-full mt-auto">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-xs sm:text-sm">Learn More</AccordionTrigger>
                            <AccordionContent className="text-xs sm:text-sm text-gray-600">
                                Our discovery phase includes competitive analysis, user persona development, technical feasibility studies, and requirement gathering. We create detailed project documentation and establish clear success metrics.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>

                <div className='flex flex-col gap-4 p-6 md:p-8 lg:p-10 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow animation h-full'>
                    <div className='flex items-center gap-4'>
                        <div className='p-3 bg-purple-100 rounded-lg'>
                            <PiMonitor className='text-2xl sm:text-3xl md:text-4xl text-purple-600' />
                        </div>
                        <div className="flex flex-col">
                            <span className='text-xs text-gray-500 uppercase tracking-wide'>Step 02</span>
                            <h3 className='text-base sm:text-lg md:text-xl lg:text-2xl font-semibold'>Design & Development</h3>
                        </div>
                    </div>
                    <p className='text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed'>
                        Our team creates stunning designs and builds robust solutions using the latest technologies. We follow agile methodologies, ensuring regular updates and incorporating feedback throughout the development process.
                    </p>
                    <Accordion type="single" collapsible className="w-full mt-auto">
                        <AccordionItem value="item-2">
                            <AccordionTrigger className="text-xs sm:text-sm">Learn More</AccordionTrigger>
                            <AccordionContent className="text-xs sm:text-sm text-gray-600">
                                We use modern frameworks like React, Next.js, and Node.js for development. Our design process includes wireframing, prototyping, user testing, and iterative refinement to ensure optimal user experience.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>

                <div className='flex flex-col gap-4 p-6 md:p-8 lg:p-10 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow animation h-full'>
                    <div className='flex items-center gap-4'>
                        <div className='p-3 bg-green-100 rounded-lg'>
                            <PiRocketLaunch className='text-2xl sm:text-3xl md:text-4xl text-green-600' />
                        </div>
                        <div className="flex flex-col">
                            <span className='text-xs text-gray-500 uppercase tracking-wide'>Step 03</span>
                            <h3 className='text-base sm:text-lg md:text-xl lg:text-2xl font-semibold'>Launch & Support</h3>
                        </div>
                    </div>
                    <p className='text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed'>
                        We handle seamless deployment and provide ongoing support to ensure your solution continues to perform optimally. Our team offers maintenance, updates, and optimization services to keep your digital presence thriving.
                    </p>
                    <Accordion type="single" collapsible className="w-full mt-auto">
                        <AccordionItem value="item-3">
                            <AccordionTrigger className="text-xs sm:text-sm">Learn More</AccordionTrigger>
                            <AccordionContent className="text-xs sm:text-sm text-gray-600">
                                Post-launch support includes performance monitoring, security updates, content management training, SEO optimization, and regular backups. We're committed to your long-term success.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    );
};

export default GetInTOuch;