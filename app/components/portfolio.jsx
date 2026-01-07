import React from 'react';
import Heading from './heading/heading';

const Portfolio = () => {
    return (
        <div className='my-12 md:my-16 lg:my-20 px-4 md:px-6 lg:px-8'>
            <Heading 
                subTitle="Featured Projects" 
                title="Our Portfolio" 
            />
            
            <div className='mt-6 md:mt-8 lg:mt-12 flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-8 min-h-[400px] md:min-h-[450px] lg:min-h-[500px]'>
                {/* E-Commerce Platform Project */}
                <div className='flex flex-col items-start justify-between h-full w-full px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12 animation rounded-lg relative overflow-hidden group bg-gradient-to-br from-blue-600 to-purple-700'>
                    <div className='absolute inset-0 bg-[url("https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80")] bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-300'></div>
                    <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent'></div>
                    <div className='relative z-10 w-full'>
                        <div className='pb-6 md:pb-8 lg:pb-10'>
                            <p className='text-blue-200 text-xs sm:text-sm md:text-base uppercase tracking-wide mb-2 font-medium'>E-Commerce Development</p>
                            <h3 className='text-white text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-3'>Modern Online Store Platform</h3>
                            <p className='text-gray-200 text-xs sm:text-sm md:text-base mb-4'>
                                Built a scalable e-commerce solution for a retail brand, featuring advanced product filtering, secure payment integration, and inventory management. Resulted in 65% increase in online sales.
                            </p>
                            <ul className='text-gray-300 text-xs sm:text-sm space-y-1 mb-4'>
                                <li>• Custom shopping cart & checkout</li>
                                <li>• Multi-payment gateway integration</li>
                                <li>• Real-time inventory tracking</li>
                            </ul>
                        </div>
                        <div className='flex flex-wrap gap-2 mb-4'>
                            <span className='text-xs px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full'>Next.js</span>
                            <span className='text-xs px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full'>Stripe</span>
                            <span className='text-xs px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full'>MongoDB</span>
                        </div>
                        <button className='text-white text-xs sm:text-sm bg-white/20 backdrop-blur-sm border border-white/30 px-4 py-2 md:px-5 md:py-2.5 rounded hover:bg-white/30 transition-colors font-medium'>
                            View Project Details →
                        </button>
                    </div>
                </div>

                {/* Mobile App Development Project */}
                <div className='flex flex-col items-start justify-between h-full w-full px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12 animation rounded-lg relative overflow-hidden group bg-gradient-to-br from-green-600 to-teal-700'>
                    <div className='absolute inset-0 bg-[url("https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80")] bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-300'></div>
                    <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent'></div>
                    <div className='relative z-10 w-full'>
                        <div className='pb-6 md:pb-8 lg:pb-10'>
                            <p className='text-green-200 text-xs sm:text-sm md:text-base uppercase tracking-wide mb-2 font-medium'>Mobile Application</p>
                            <h3 className='text-white text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-3'>Healthcare Management System</h3>
                            <p className='text-gray-200 text-xs sm:text-sm md:text-base mb-4'>
                                Developed a comprehensive mobile app for healthcare providers enabling patient management, appointment scheduling, and prescription tracking. Features HIPAA-compliant security and cloud synchronization.
                            </p>
                            <ul className='text-gray-300 text-xs sm:text-sm space-y-1 mb-4'>
                                <li>• Patient record management</li>
                                <li>• Appointment scheduling system</li>
                                <li>• Secure data encryption</li>
                            </ul>
                        </div>
                        <div className='flex flex-wrap gap-2 mb-4'>
                            <span className='text-xs px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full'>React Native</span>
                            <span className='text-xs px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full'>Firebase</span>
                            <span className='text-xs px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full'>Healthcare</span>
                        </div>
                        <button className='text-white text-xs sm:text-sm bg-white/20 backdrop-blur-sm border border-white/30 px-4 py-2 md:px-5 md:py-2.5 rounded hover:bg-white/30 transition-colors font-medium'>
                            View Project Details →
                        </button>
                    </div>
                </div>
            </div>

            {/* Additional Portfolio Info */}
            <div className='mt-8 md:mt-12 lg:mt-16 text-center'>
                <p className='text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto mb-6'>
                    Our portfolio showcases successful projects across various industries. Each project is a testament to our commitment to excellence, innovation, and client satisfaction.
                </p>
                <a href="/works" className='inline-block px-6 py-2 md:px-8 md:py-3 bg-black text-white text-xs sm:text-sm md:text-base hover:bg-gray-800 transition-colors rounded'>
                    View All Projects
                </a>
            </div>
        </div>
    );
};

export default Portfolio;