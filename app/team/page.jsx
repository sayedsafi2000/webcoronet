import React from 'react';
import Heading from '../components/heading/heading';
import Image from 'next/image';

const Team = () => {
    return (
        <div className='my-28'>
            <Heading subTitle='Our Team' title="Our Story, Mission, and Values" />
            <div className="flex flex-col lg:flex-row items-center justify-between gap-7 animation">
                <div className='flex flex-col items-start justify-start w-full lg:w-2/3 gap-6'>
                    <h1>Asad Jaman</h1>
                    <p>CEO</p>
                    <p>Vel illum dolore eu feugiat nulla facilisis at vero eros et accu qui blandit praesent luptatum. Ruril delenit augue duis autem vel eum iriure duor ins hendrerit in vulputatev dolore eu feugiat.</p>
                    <button className='px-12 py-3 bg-black text-white'>Read More</button>
                </div>
                <div className='animation'>
                    <Image className='w-full lg:w-10/12 rounded-2xl mx-auto' src="/asad-jaman.jpg"  width={1000} height={1000} alt='website' />
                </div>
            </div>
            <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-0 animation mt-20">
                <div className='flex flex-col items-start justify-start w-full lg:w-2/3 gap-6 mx-auto'>
                    <h1>Sayed Safi</h1>
                    <p>Web Developer</p>
                    <p>Vel illum dolore eu feugiat nulla facilisis at vero eros et accu qui blandit praesent luptatum. Ruril delenit augue duis autem vel eum iriure duor ins hendrerit in vulputatev dolore eu feugiat.</p>
                    <button className='px-12 py-3 bg-black text-white'>Read More</button>
                </div>
                <div className='animation '>
                    <Image src="/sayed-safi-big.jpg" className='w-full lg:w-2/3 rounded-2xl mx-0' width={1000} height={1000} alt='website' />
                </div>
            </div>
        </div>
    );
};

export default Team;