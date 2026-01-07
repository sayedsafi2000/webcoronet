import React from 'react';
import Image from 'next/image';

const ProjectDev = () => {
    return (
        <div className='my-12 md:my-16 lg:my-20 px-4 md:px-6 lg:px-8'>
            <section className='animation rounded-lg overflow-hidden'>
                <div className='flex flex-col lg:flex-row items-center gap-6 md:gap-8 lg:gap-12 bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden'>
                    {/* Left Side - Content */}
                    <div className='flex-1 px-4 py-8 md:px-6 md:py-10 lg:px-12 lg:py-16'>
                        <div className='flex flex-col items-start justify-start gap-4 md:gap-5 lg:gap-6'>
                            <h4 className='text-xs sm:text-sm uppercase tracking-wide text-black font-medium'>Community Impact</h4>
                            <h1 className='text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-900 font-normal leading-tight'>
                                Building Digital Solutions That Make a Difference
                            </h1>
                            <p className='text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed'>
                                At Web Coronet, we believe technology should serve communities and create positive change. Our projects go beyond business goals—they empower organizations, improve lives, and build stronger digital ecosystems.
                            </p>
                            <p className='text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed'>
                                From nonprofit websites to educational platforms and healthcare solutions, we develop impactful projects that drive social good while maintaining the highest standards of quality and innovation.
                            </p>
                            <div className='flex flex-col sm:flex-row gap-4 mt-4'>
                                <a href="/works" className='px-6 py-2 md:px-8 md:py-3 bg-black text-white text-xs sm:text-sm md:text-base hover:bg-gray-800 transition-colors rounded text-center'>
                                    View Our Projects
                                </a>
                                <a href="/contact" className='px-6 py-2 md:px-8 md:py-3 border-2 border-black text-black text-xs sm:text-sm md:text-base hover:bg-black hover:text-white transition-colors rounded text-center'>
                                    Start a Project
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    {/* Right Side - Image */}
                    <div className='flex-1 w-full lg:w-auto h-[300px] md:h-[400px] lg:h-[500px] relative overflow-hidden'>
                        <Image 
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80" 
                            alt="Community impact and digital solutions"
                            fill
                            className='object-cover'
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProjectDev;