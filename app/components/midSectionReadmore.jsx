import Image from 'next/image';
import React from 'react';

const MidSectionReadmore = () => {
    return (
        <div className='mb-28'>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-7 animation">
                <div className='flex flex-col items-start justify-start w-full lg:w-2/3 gap-6'>
                    <h1>We build and transform businesses through strategy, design and development</h1>
                    <p>We provide innovative solutions to help your business grow and succeed in the digital age.</p>
                    <button className='px-12 py-3 bg-black text-white'>Read More</button>
                </div>
                <div className='animation'>
                    <Image src="/h-img-3.jpg" className='w-full' width={1000} height={1000} alt='website'/>
                </div>
            </div>
        </div>
    );
};

export default MidSectionReadmore;