import React from 'react';

const Agency = () => {
    return (
        <div className='mb-28'>
            <section className='lg:h-[95vh]'>
                <div className='bg-agencybg bg-no-repeat lg:bg-cover bg-left lg:bg-center bg-x-[50%] bg-y-[50%] bg-stretch h-full w-full px-6 lg:px-20 py-10 lg:py-16 animation'>
                    <div className='h-full flex flex-col items-start justify-start gap-6 w-full lg:w-[420px] '>
                        <h4>Website</h4>
                        <h1>Making your agency shine on every device</h1>
                        <p>We create responsive, mobile-first websites that ensure your agency looks professional and functions flawlessly across all devices. Our designs adapt seamlessly from desktop to tablet to mobile, providing an optimal experience for every visitor.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Agency;