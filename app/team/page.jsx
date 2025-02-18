import React from 'react';
import Heading from '../components/heading/heading';
import Image from 'next/image';

const Team = () => {
    return (
        <div className='my-28'>
            <Heading subTitle='Meet the Team' title="The Experts Behind Your Success" />
            <div className="flex flex-col lg:flex-row items-center justify-between gap-7 animation">
                <div className='flex flex-col items-start justify-start w-full lg:w-2/3 gap-6'>
                    <h1>Asad Jaman</h1>
                    <p>CEO & Founder</p>
                    <p>Asad has over 15 years of experience in web development and digital marketing. His vision and leadership drive Web Coronet`s success.</p>
                    <a href='https://asadsnapper.com/' target='blank' className='px-12 py-3 bg-black text-white'>Read More</a>
                </div>
                <div className='animation'>
                    <Image className='w-full lg:w-2/3 rounded-2xl mx-auto' src="/Asad-Jaman.jpg"  quality={100} width={1000} height={1000} alt='website' />
                </div>
            </div>
            <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-0 animation mt-20">
                <div className='flex flex-col items-start justify-start w-full lg:w-2/3 gap-6 mx-auto'>
                    <h1>Sayed Safi</h1>
                    <p>Web Developer</p>
                    <p>I am a fullstack web developer with 13 years of experience in building and maintaining responsive websites. My expertise includes both frontend and backend development, ensuring seamless user experiences and robust functionality.</p>
                    <a target='blank' href='https://sayed-safi.webcoronet.com/' className='px-12 py-3 bg-black text-white'>Read More</a>
                </div>
                <div className='animation '>
                    <Image src="/sayed-safi-big.jpg" className='w-full lg:w-2/3 rounded-2xl mx-0' quality={100} width={1000} height={1000} alt='website' />
                </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-0 animation mt-20">
                <div className='flex flex-col items-start justify-start w-full lg:w-2/3 gap-6 mx-auto'>
                    <h1>Titun Chandra Dey</h1>
                    <p>Lead Designer</p>
                    <p>Titun’s creativity and eye for design ensure that every project is visually stunning and user-friendly.</p>
                    <a href='https://dribbble.com/ImTitun' target='blank'  className='px-12 py-3 bg-black text-white'>Read More</a>
                </div>
                <div className='animation '>
                    <Image src="/titon.jpg" className='w-full lg:w-2/3 rounded-2xl mx-0' quality={100} width={1000} height={1000} alt='website' />
                </div>
            </div>
            <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-0 animation mt-20">
                <div className='flex flex-col items-start justify-start w-full lg:w-2/3 gap-6 mx-auto'>
                    <h1>Fareea Mehjebin</h1>
                    <p>Digital Marketing Strategist</p>
                    <p>Fareea’s strategic approach to digital marketing helps our clients achieve their online goals.</p>
                    <a href='https://web.facebook.com/mehjebin.fareea' target='blank'  className='px-12 py-3 bg-black text-white'>Read More</a>
                </div>
                <div className='animation '>
                    <Image src="/marketer.jpg" className='w-full lg:w-2/3 rounded-2xl mx-0' quality={100} width={1000} height={1000} alt='website' />
                </div>
            </div>
        </div>
    );
};

export default Team;