import React from 'react';

const Portfolio = () => {
    return (
        <div className='my-28'>
            <div >
                <h2>Amazing portfolio</h2>
            </div>
            <div className='mt-16 flex flex-col lg:flex-row gap-8 h-[630px]'>
                <div className='bg-mobile-app bg-no-repeat bg-cover bg-center bg-x-[50%] bg-y-[50%] bg-stretch flex flex-col items-start justify-between h-full w-full px-10 py-12 animation'>
                    <div className='pb-10'>
                        <p className='text-gray-300'>Website Development</p>
                        <h3 className='text-white'>Make a staning dynamic website for your business.</h3>
                    </div>
                    <button className='text-black text-sm '>View Case Stady</button>
                </div>
                <div className='bg-web-design bg-no-repeat bg-cover  bg-top md:bg-center lg:bg-center bg-x-[50%] bg-y-[50%] bg-stretch flex flex-col items-start justify-between h-full w-full px-10 py-12 animation '>
                    <div className=''>
                        <p>Mobile App Development</p>
                        <h3 className=''>Mobile app with a user-friendly interface and a robust backend.</h3>
                    </div>
                    <button className='text-black text-sm '>View Case Stady</button>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;