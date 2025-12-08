import React from 'react';

const ProjectDev = () => {
    return (
        <div className='mb-16 md:mb-24 lg:mb-28'>
            <section className='min-h-[400px] md:min-h-[600px] lg:h-[100vh] animation'>
                <div className='bg-project-dev bg-no-repeat bg-cover bg-center bg-x-[50%] bg-y-[50%] bg-stretch h-full w-full px-4 py-8 md:px-6 md:py-10 lg:px-8 lg:px-20 lg:py-12 lg:py-16'>
                    <div className='h-full flex flex-col items-start justify-start gap-4 md:gap-5 lg:gap-6 w-full md:w-4/5 lg:w-[420px]'>
                        <h4 className='text-xs sm:text-sm'>Project Development</h4>
                        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>Working Towards a better community.</h1>
                        <p className='text-sm sm:text-base md:text-lg'>Working towards a better community by developing impactful projects.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProjectDev;