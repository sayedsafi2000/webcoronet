import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Herotext = () => {
    return (
        <div className='mt-20 md:mt-28 lg:mt-36 px-4 md:px-6 lg:px-8'>
            <div className='max-w-7xl mx-auto'>
                <div className='flex flex-col lg:flex-row items-center gap-8 lg:gap-12'>
                    <div className='w-full lg:w-1/2'>
                        <h4 className='text-xs sm:text-sm md:text-base uppercase tracking-wide text-gray-600 mb-4'>Your Trusted Digital Partner</h4>
                        <h1 className='w-full mt-4 md:mt-6 text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal leading-tight'>
                            Transform Your Business with Cutting-Edge Web Solutions, Stunning Designs & Strategic Digital Marketing
                        </h1>
                        <p className='w-full mt-4 md:mt-6 text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed'>
                            We&apos;re a full-service digital agency specializing in web development, mobile apps, graphic design, and digital marketing. With over 10 years of experience, we help businesses establish a powerful online presence and achieve remarkable growth.
                        </p>
                        <div className='flex flex-col sm:flex-row gap-4 mt-6 md:mt-10'>
                            <Link href="/contact" className='px-6 py-2 md:px-8 md:py-3 bg-black text-white text-sm md:text-base hover:bg-gray-800 transition-colors text-center rounded'>
                                Start Your Project
                            </Link>
                            <Link href="/services" className='px-6 py-2 md:px-8 md:py-3 border border-black text-black text-sm md:text-base hover:bg-black hover:text-white transition-colors text-center rounded'>
                                Our Services
                            </Link>
                        </div>
                        
                        {/* Stats */}
                        <div className='grid grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-12'>
                            <div>
                                <h3 className='text-2xl md:text-3xl lg:text-4xl font-bold text-black'>500+</h3>
                                <p className='text-xs sm:text-sm text-gray-600 mt-1'>Projects</p>
                            </div>
                            <div>
                                <h3 className='text-2xl md:text-3xl lg:text-4xl font-bold text-black'>98%</h3>
                                <p className='text-xs sm:text-sm text-gray-600 mt-1'>Satisfaction</p>
                            </div>
                            <div>
                                <h3 className='text-2xl md:text-3xl lg:text-4xl font-bold text-black'>10+</h3>
                                <p className='text-xs sm:text-sm text-gray-600 mt-1'>Years</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full lg:w-1/2'>
                        <div className='relative rounded-lg overflow-hidden shadow-2xl'>
                            <Image 
                                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80" 
                                alt="Web development and digital solutions" 
                                width={1200}
                                height={500}
                                className='w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Herotext;