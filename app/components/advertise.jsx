import React from 'react';

const Advertise = () => {
    return (
        <div className='my-28'>
            <div >
                <h2>Amazing Advertise</h2>
            </div>
            <div className='mt-16 flex flex-col lg:flex-row gap-8 h-[630px]'>
                <div className='bg-advertiseFirst bg-no-repeat bg-cover bg-center bg-x-[50%] bg-y-[50%] bg-stretch flex flex-col items-start justify-between h-full w-full px-10 py-12 animation'>
                    <div className='pb-10'>
                        <p className='text-gray-100'>Advertising
                        </p>
                        <h3 className='text-white'>Commercials for the digital age</h3>
                    </div>
                    <button className='text-black text-sm '>View Case Stady</button>
                </div>
                <div className='bg-advertiseSecond bg-no-repeat bg-cover bg-center bg-x-[50%] bg-y-[50%] bg-stretch flex flex-col items-start justify-between h-full w-full px-10 py-12 animation'>
                    <div className=''>
                        <p className='text-gray-100'>Web Design</p>
                        <h3 className='text-white'>Tips for good UI design</h3>
                    </div>
                    <button className='text-black text-sm '>View Case Stady</button>
                </div>
            </div>
        </div>
    );
};

export default Advertise;