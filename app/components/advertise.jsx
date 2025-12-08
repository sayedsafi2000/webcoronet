import React from 'react';

const Advertise = () => {
    return (
        <div className='my-16 md:my-24 lg:my-28'>
            <div>
                <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl'>Amazing Advertise</h2>
            </div>
            <div className='mt-8 md:mt-12 lg:mt-16 flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-8 min-h-[400px] md:h-[500px] lg:h-[630px]'>
                <div className='bg-advertiseFirst bg-no-repeat bg-cover bg-center bg-x-[50%] bg-y-[50%] bg-stretch flex flex-col items-start justify-between h-full w-full px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12 animation rounded-lg'>
                    <div className='pb-6 md:pb-8 lg:pb-10'>
                        <p className='text-gray-100 text-xs sm:text-sm md:text-base'>Advertising</p>
                        <h3 className='text-white text-base sm:text-lg md:text-xl lg:text-2xl mt-2'>Commercials for the digital age</h3>
                    </div>
                    <button className='text-black text-xs sm:text-sm bg-white px-3 py-1.5 md:px-4 md:py-2 rounded hover:bg-gray-100 transition-colors'>View Case Study</button>
                </div>
                <div className='bg-advertiseSecond bg-no-repeat bg-cover bg-center bg-x-[50%] bg-y-[50%] bg-stretch flex flex-col items-start justify-between h-full w-full px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12 animation rounded-lg'>
                    <div className=''>
                        <p className='text-gray-100 text-xs sm:text-sm md:text-base'>Web Design</p>
                        <h3 className='text-white text-base sm:text-lg md:text-xl lg:text-2xl mt-2'>Tips for good UI design</h3>
                    </div>
                    <button className='text-black text-xs sm:text-sm bg-white px-3 py-1.5 md:px-4 md:py-2 rounded hover:bg-gray-100 transition-colors'>View Case Study</button>
                </div>
            </div>
        </div>
    );
};

export default Advertise;