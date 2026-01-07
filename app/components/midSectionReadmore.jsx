import Image from 'next/image';
import React from 'react';

const MidSectionReadmore = () => {
    return (
        <div className='my-12 md:my-16 lg:my-20 px-4 md:px-6 lg:px-8'>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8 animation">
                <div className='flex flex-col items-start justify-start w-full lg:w-2/3 gap-4 md:gap-6'>
                    <h1 className='text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>We build and transform businesses through strategy, design and development</h1>
                    <p className='text-xs sm:text-sm md:text-base lg:text-lg'>At Web Coronet, we don&apos;t just create websites and apps—we build digital experiences that transform businesses. Our comprehensive approach combines strategic thinking, creative design, and technical excellence to deliver solutions that drive growth and success.</p>
                    <p className='text-xs sm:text-sm md:text-base lg:text-lg'>With over a decade of experience in the digital industry, we&apos;ve helped countless businesses establish their online presence, reach new customers, and achieve their goals. From startups to established enterprises, we provide the expertise and support needed to thrive in today&apos;s digital landscape.</p>
                    <p className='text-xs sm:text-sm md:text-base lg:text-lg'>Our team of skilled developers, designers, and marketers work collaboratively to ensure every project exceeds expectations. We believe in building long-term partnerships with our clients, providing ongoing support and guidance as their businesses evolve.</p>
                    <a href="/contact" className='px-6 py-2 md:px-12 md:py-3 bg-black text-white text-sm md:text-base hover:bg-gray-800 transition-colors inline-block'>Get Started Today</a>
                </div>
                <div className='animation rounded-lg overflow-hidden shadow-lg'>
                    <Image 
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" 
                        className='w-full h-auto object-cover' 
                        width={1000} 
                        height={1000} 
                        alt='Business transformation through web development and digital strategy'
                    />
                </div>
            </div>
        </div>
    );
};

export default MidSectionReadmore;