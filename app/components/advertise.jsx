import React from 'react';
import Heading from './heading/heading';

const Advertise = () => {
    return (
        <div className='my-12 md:my-16 lg:my-20 px-4 md:px-6 lg:px-8'>
            <Heading 
                subTitle="Digital Marketing & Design" 
                title="Our Creative Solutions" 
            />
            
            <div className='mt-6 md:mt-8 lg:mt-12 flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-8'>
                {/* Digital Marketing Campaign */}
                <div className='flex flex-col items-start justify-between h-full w-full px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12 animation rounded-lg relative overflow-hidden group bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-shadow'>
                    <div className='relative z-10 w-full'>
                        <div className='pb-6 md:pb-8 lg:pb-10'>
                            <p className='text-black text-xs sm:text-sm md:text-base uppercase tracking-wide mb-2 font-medium'>Digital Marketing</p>
                            <h3 className='text-gray-900 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-3'>Brand Awareness Campaign</h3>
                            <p className='text-gray-600 text-xs sm:text-sm md:text-base mb-4'>
                                Executed a multi-channel digital marketing strategy that increased brand visibility by 350% and generated 75,000+ new followers across platforms. Combined SEO, social media, and PPC for maximum impact.
                            </p>
                            <ul className='text-gray-700 text-xs sm:text-sm space-y-1 mb-4'>
                                <li>• 350% increase in brand awareness</li>
                                <li>• 75,000+ new social followers</li>
                                <li>• 250% ROI on ad spend</li>
                            </ul>
                        </div>
                        <div className='flex flex-wrap gap-2 mb-4'>
                            <span className='text-xs px-3 py-1 bg-black text-white rounded-full'>SEO</span>
                            <span className='text-xs px-3 py-1 bg-black text-white rounded-full'>Social Media</span>
                            <span className='text-xs px-3 py-1 bg-black text-white rounded-full'>PPC</span>
                        </div>
                        <button className='text-white text-xs sm:text-sm bg-black px-4 py-2 md:px-5 md:py-2.5 rounded hover:bg-gray-800 transition-colors font-medium'>
                            View Campaign Results →
                        </button>
                    </div>
                </div>

                {/* UI/UX Design Project */}
                <div className='flex flex-col items-start justify-between h-full w-full px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12 animation rounded-lg relative overflow-hidden group bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-shadow'>
                    <div className='relative z-10 w-full'>
                        <div className='pb-6 md:pb-8 lg:pb-10'>
                            <p className='text-black text-xs sm:text-sm md:text-base uppercase tracking-wide mb-2 font-medium'>UI/UX Design</p>
                            <h3 className='text-gray-900 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-3'>Enterprise Platform Redesign</h3>
                            <p className='text-gray-600 text-xs sm:text-sm md:text-base mb-4'>
                                Completely redesigned a complex enterprise dashboard focusing on user experience and accessibility. Reduced task completion time by 65% and increased user satisfaction by 90% through intuitive design.
                            </p>
                            <ul className='text-gray-700 text-xs sm:text-sm space-y-1 mb-4'>
                                <li>• 65% faster task completion</li>
                                <li>• 90% user satisfaction increase</li>
                                <li>• WCAG 2.1 AA compliant</li>
                            </ul>
                        </div>
                        <div className='flex flex-wrap gap-2 mb-4'>
                            <span className='text-xs px-3 py-1 bg-black text-white rounded-full'>Figma</span>
                            <span className='text-xs px-3 py-1 bg-black text-white rounded-full'>User Research</span>
                            <span className='text-xs px-3 py-1 bg-black text-white rounded-full'>Prototyping</span>
                        </div>
                        <button className='text-white text-xs sm:text-sm bg-black px-4 py-2 md:px-5 md:py-2.5 rounded hover:bg-gray-800 transition-colors font-medium'>
                            View Design Process →
                        </button>
                    </div>
                </div>
            </div>

            {/* Additional Info Section */}
            <div className='mt-8 md:mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8'>
                <div className='text-center p-6 bg-white rounded-lg shadow-md animation'>
                    <h4 className='text-base sm:text-lg md:text-xl font-semibold mb-2'>500+</h4>
                    <p className='text-xs sm:text-sm md:text-base text-gray-600'>Successful Projects</p>
                </div>
                <div className='text-center p-6 bg-white rounded-lg shadow-md animation'>
                    <h4 className='text-base sm:text-lg md:text-xl font-semibold mb-2'>98%</h4>
                    <p className='text-xs sm:text-sm md:text-base text-gray-600'>Client Satisfaction</p>
                </div>
                <div className='text-center p-6 bg-white rounded-lg shadow-md animation'>
                    <h4 className='text-base sm:text-lg md:text-xl font-semibold mb-2'>10+</h4>
                    <p className='text-xs sm:text-sm md:text-base text-gray-600'>Years of Experience</p>
                </div>
            </div>
        </div>
    );
};

export default Advertise;