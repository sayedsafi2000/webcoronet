import React from 'react';
import { PiPen,PiMonitor  } from "react-icons/pi";
import { GoFileDirectory   } from "react-icons/go";
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-11 mt-8">
                <div className='flex gap-2 lg:gap-4 p-2 lg:p-4 items-start animation'>
                    <div className='-rotate-45'>
                        <PiPen className='text-4xl font-[100] border-0 text-gray-500' />
                    </div>
                    <div className='flex flex-col gap-3 text-start '>
                        <h3>Product research</h3>
                        <p className=''>Lorem proin gravida nibh vel velit au sollicitudin lorem quis bibe auctor, consequat gravida nibh.</p>
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
                <div className='flex gap-2 lg:gap-4 p-2 lg:p-4 items-start animation'>
                    <div className=''>
                        <PiMonitor className='text-4xl font-[100] border-0 text-gray-500' />
                    </div>
                    <div className='flex flex-col gap-3 text-start '>
                        <h3>Design & Development</h3>
                        <p className=''>Lorem proin gravida nibh vel velit au sollicitudin lorem quis bibe auctor, consequat gravida nibh.</p>
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
                <div className='flex gap-2 lg:gap-4 p-2 lg:p-4 items-start animation'>
                    <div className=''>
                        <GoFileDirectory  className='text-4xl font-[100] border-0 text-gray-500' />
                    </div>
                    <div className='flex flex-col gap-3 text-start '>
                        <h3>Growth marketing</h3>
                        <p className=''>Lorem proin gravida nibh vel velit au sollicitudin lorem quis bibe auctor, consequat gravida nibh.</p>
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

export default Service;