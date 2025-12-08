import Image from 'next/image';
import React from 'react';

const MidSectionReadmore = () => {
    return (
        <div className='mb-16 md:mb-24 lg:mb-28'>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-5 md:gap-7 animation">
                <div className='flex flex-col items-start justify-start w-full lg:w-2/3 gap-4 md:gap-6'>
                    <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>We build and transform businesses through strategy, design and development</h1>
                    <p className='text-sm sm:text-base md:text-lg'>We provide innovative solutions to help your business grow and succeed in the digital age.</p>
                    <button className='px-6 py-2 md:px-12 md:py-3 bg-black text-white text-sm md:text-base hover:bg-gray-800 transition-colors'>Read More</button>
                </div>
                <div className='animation'>
                    <Image src="/h-img-3.jpg" className='w-full' width={1000} height={1000} alt='Business transformation through web development and digital strategy'/>
                </div>
            </div>
        </div>
    );
};

export default MidSectionReadmore;