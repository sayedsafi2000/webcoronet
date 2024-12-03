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
                        <h1>We build and transform businesses through strategy, design and development</h1>
                        <p>Vel illum dolore eu feugiat nulla facilisis at vero eros et accu qui blandit praesent luptatum. Ruril delenit augue duis autem vel eum iriure duor ins hendrerit in vulputatev dolore eu feugiat.</p>
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
                                <AccordionTrigger className="text-2xl">User experience design</AccordionTrigger>
                                <AccordionContent>
                                    Yes. It adheres to the WAI-ARIA design pattern.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                        <Accordion type="single" collapsible className="w-full  border-b-2">
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-2xl">Mobile App</AccordionTrigger>
                                <AccordionContent>
                                    Yes. It adheres to the WAI-ARIA design pattern.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                        <Accordion type="single" collapsible className="w-full border-b-2">
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-2xl">Design & Development</AccordionTrigger>
                                <AccordionContent>
                                    Yes. It adheres to the WAI-ARIA design pattern.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                        <Accordion type="single" collapsible className="w-full border-b-2">
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-2xl">Strategy Research Workshop</AccordionTrigger>
                                <AccordionContent>
                                    Yes. It adheres to the WAI-ARIA design pattern.
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