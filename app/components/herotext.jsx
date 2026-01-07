import React from 'react';
import Link from 'next/link';

const Herotext = () => {
    return (
        <div className='mt-20 md:mt-28 lg:mt-36 px-4 md:px-6 lg:px-8'>
            <h4 className='text-xs sm:text-sm md:text-base uppercase tracking-wide text-gray-600 mb-4'>Your Trusted Digital Partner</h4>
            <h1 className='w-full xl:w-[75%] mt-4 md:mt-6 text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal leading-tight'>
                Transform Your Business with Cutting-Edge Web Solutions, Stunning Designs & Strategic Digital Marketing
            </h1>
            <p className='w-full xl:w-[70%] mt-4 md:mt-6 text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed'>
                We're a full-service digital agency specializing in web development, mobile apps, graphic design, and digital marketing. With over 10 years of experience, we help businesses establish a powerful online presence and achieve remarkable growth.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 mt-6 md:mt-10'>
                <Link href="/contact" className='px-6 py-2 md:px-8 md:py-3 bg-black text-white text-sm md:text-base hover:bg-gray-800 transition-colors text-center rounded'>
                    Start Your Project
                </Link>
                <Link href="/services" className='px-6 py-2 md:px-8 md:py-3 border border-black text-black text-sm md:text-base hover:bg-black hover:text-white transition-colors text-center rounded'>
                    Our Services
                </Link>
            </div>
        </div>
    );
};

export default Herotext;