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
        <div className='my-28'>
            <h2>Get In Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-11 mt-8 h-[300px] items-center">
                <div className='flex gap-4 p-10 items-start bg-white h-full animation'>
                    <div className='-rotate-45'>
                        <PiPen className='text-4xl font-[100] border-0 text-gray-500' />
                    </div>
                    <div className='flex flex-col gap-3 text-start justify-between '>
                        <div className="flex flex-col">
                            <h3>Product research</h3>
                            <p className=''>We conduct thorough product research to ensure that your product meets market needs and stands out from the competition.</p>
                        </div>
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Read More</AccordionTrigger>
                                <AccordionContent>
                                    Yes. It adheres to the WAI-ARIA design pattern.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
                <div className='flex gap-4 p-10 items-start bg-white h-full animation'>
                    <div className=''>
                        <PiMonitor className='text-4xl font-[100] border-0 text-gray-500' />
                    </div>
                    <div className='flex flex-col gap-3 text-start justify-between'>
                        <div className="flex flex-col">
                            <h3>Design & Development</h3>
                            <p className=''>Our design and development team sworks collaboratively to create visually appealing and highly functional products.</p>
                        </div>
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Read More</AccordionTrigger>
                                <AccordionContent>
                                    Yes. It adheres to the WAI-ARIA design pattern.
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