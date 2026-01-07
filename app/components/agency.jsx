import React from 'react';

const Agency = () => {
    return (
        <div className='my-12 md:my-16 lg:my-20 px-4 md:px-6 lg:px-8'>
            <section className='min-h-[400px] md:min-h-[500px] lg:min-h-[600px] rounded-lg overflow-hidden'>
                <div className='relative h-full w-full px-4 py-8 md:px-6 md:py-10 lg:px-12 xl:px-20 lg:py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black'>
                    <div className='absolute inset-0 bg-[url("https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80")] bg-cover bg-center opacity-15'></div>
                    <div className='relative z-10 h-full flex flex-col items-start justify-start gap-4 md:gap-5 lg:gap-6 w-full md:w-4/5 lg:w-[500px]'>
                        <h4 className='text-xs sm:text-sm uppercase tracking-wide text-gray-400'>Responsive Design</h4>
                        <h1 className='text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white font-normal leading-tight'>
                            Your Agency, Perfectly Optimized for Every Screen Size
                        </h1>
                        <p className='text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 leading-relaxed'>
                            In today's multi-device world, your website must deliver exceptional experiences everywhere. We specialize in creating responsive, mobile-first designs that adapt beautifully from large desktop displays to smartphones, ensuring your agency always looks professional.
                        </p>
                        <p className='text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 leading-relaxed'>
                            Our responsive approach prioritizes mobile users while maintaining desktop excellence. Every element is carefully crafted to provide optimal viewing, interaction, and conversion across all devices and screen sizes.
                        </p>
                        <div className='grid grid-cols-2 gap-4 mt-6 w-full max-w-md'>
                            <div className='bg-white/10 backdrop-blur-sm p-4 rounded-lg'>
                                <h5 className='text-white text-sm font-semibold mb-1'>Mobile-First</h5>
                                <p className='text-gray-300 text-xs'>Optimized for smartphones</p>
                            </div>
                            <div className='bg-white/10 backdrop-blur-sm p-4 rounded-lg'>
                                <h5 className='text-white text-sm font-semibold mb-1'>Tablet Ready</h5>
                                <p className='text-gray-300 text-xs'>Perfect on tablets</p>
                            </div>
                            <div className='bg-white/10 backdrop-blur-sm p-4 rounded-lg'>
                                <h5 className='text-white text-sm font-semibold mb-1'>Desktop Optimized</h5>
                                <p className='text-gray-300 text-xs'>Full-featured experience</p>
                            </div>
                            <div className='bg-white/10 backdrop-blur-sm p-4 rounded-lg'>
                                <h5 className='text-white text-sm font-semibold mb-1'>Fast Loading</h5>
                                <p className='text-gray-300 text-xs'>Lightning-fast performance</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Agency;