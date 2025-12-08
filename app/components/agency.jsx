import React from 'react';

const Agency = () => {
    return (
        <div className='mb-16 md:mb-24 lg:mb-28'>
            <section className='min-h-[400px] md:min-h-[600px] lg:h-[95vh]'>
                <div className='bg-agencybg bg-no-repeat lg:bg-cover bg-left lg:bg-center bg-x-[50%] bg-y-[50%] bg-stretch h-full w-full px-4 py-8 md:px-6 md:py-10 lg:px-6 lg:px-20 lg:py-10 lg:py-16 animation'>
                    <div className='h-full flex flex-col items-start justify-start gap-4 md:gap-5 lg:gap-6 w-full md:w-4/5 lg:w-[420px]'>
                        <h4 className='text-xs sm:text-sm'>Website</h4>
                        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>Making your agency shine on every device</h1>
                        <p className='text-sm sm:text-base md:text-lg'>We create responsive, mobile-first websites that ensure your agency looks professional and functions flawlessly across all devices. Our designs adapt seamlessly from desktop to tablet to mobile, providing an optimal experience for every visitor.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Agency;