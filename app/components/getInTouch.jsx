import React from 'react';
import { PiPen, PiMonitor } from "react-icons/pi";
import { GoFileDirectory } from "react-icons/go";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "./ui/accordion"

const GetInTOuch = () => {
    return (
        <div className='my-16 md:my-24 lg:my-28'>
            <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl'>Get In Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-11 mt-6 md:mt-8 min-h-[250px] md:h-[300px] items-center">
                <div className='flex gap-3 md:gap-4 p-6 md:p-8 lg:p-10 items-start bg-white h-full animation'>
                    <div className='-rotate-45 flex-shrink-0'>
                        <PiPen className='text-2xl sm:text-3xl md:text-4xl font-[100] border-0 text-gray-500' />
                    </div>
                    <div className='flex flex-col gap-2 md:gap-3 text-start justify-between '>
                        <div className="flex flex-col">
                            <h3 className='text-base sm:text-lg md:text-xl lg:text-2xl'>Product research</h3>
                            <p className='text-xs sm:text-sm md:text-base'>We conduct thorough product research to ensure that your product meets market needs and stands out from the competition.</p>
                        </div>
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Read More</AccordionTrigger>
                                <AccordionContent>
                                    Our product research process involves market analysis, competitor research, user interviews, and data-driven insights. We identify opportunities, validate concepts, and ensure your product aligns with market demands and user expectations before development begins.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
                <div className='flex gap-3 md:gap-4 p-6 md:p-8 lg:p-10 items-start bg-white h-full animation'>
                    <div className='flex-shrink-0'>
                        <PiMonitor className='text-2xl sm:text-3xl md:text-4xl font-[100] border-0 text-gray-500' />
                    </div>
                    <div className='flex flex-col gap-2 md:gap-3 text-start justify-between'>
                        <div className="flex flex-col">
                            <h3 className='text-base sm:text-lg md:text-xl lg:text-2xl'>Design & Development</h3>
                            <p className='text-xs sm:text-sm md:text-base'>Our design and development team works collaboratively to create visually appealing and highly functional products.</p>
                        </div>
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-2">
                                <AccordionTrigger>Read More</AccordionTrigger>
                                <AccordionContent>
                                    Our design and development team works collaboratively using modern frameworks and best practices. We create responsive, accessible, and performant solutions that not only look great but also deliver exceptional user experiences across all devices and platforms.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetInTOuch;