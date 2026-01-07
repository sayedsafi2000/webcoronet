import React from 'react';
import Image from 'next/image';

const ProjectDev = () => {
    return (
        <div className='my-12 md:my-16 lg:my-20 px-4 md:px-6 lg:px-8'>
            <section className='min-h-[400px] md:min-h-[500px] lg:min-h-[600px] animation rounded-lg overflow-hidden'>
                <div className='relative h-full w-full px-4 py-8 md:px-6 md:py-10 lg:px-12 xl:px-20 lg:py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900'>
                    <div className='absolute inset-0 bg-[url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80")] bg-cover bg-center opacity-20'></div>
                    <div className='relative z-10 h-full flex flex-col items-start justify-start gap-4 md:gap-5 lg:gap-6 w-full md:w-4/5 lg:w-[500px]'>
                        <h4 className='text-xs sm:text-sm uppercase tracking-wide text-blue-300'>Community Impact</h4>
                        <h1 className='text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white font-normal leading-tight'>
                            Building Digital Solutions That Make a Difference
                        </h1>
                        <p className='text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 leading-relaxed'>
                            At Web Coronet, we believe technology should serve communities and create positive change. Our projects go beyond business goals—they empower organizations, improve lives, and build stronger digital ecosystems.
                        </p>
                        <p className='text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 leading-relaxed'>
                            From nonprofit websites to educational platforms and healthcare solutions, we develop impactful projects that drive social good while maintaining the highest standards of quality and innovation.
                        </p>
                        <div className='flex flex-col sm:flex-row gap-4 mt-4'>
                            <a href="/works" className='px-6 py-2 md:px-8 md:py-3 bg-white text-black text-xs sm:text-sm md:text-base hover:bg-gray-100 transition-colors rounded text-center'>
                                View Our Projects
                            </a>
                            <a href="/contact" className='px-6 py-2 md:px-8 md:py-3 border border-white text-white text-xs sm:text-sm md:text-base hover:bg-white/10 transition-colors rounded text-center'>
                                Start a Project
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProjectDev;