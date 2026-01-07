import React from 'react';
import Heading from './heading/heading';

const Features = () => {
    const features = [
        {
            icon: "⚡",
            title: "Lightning Fast",
            description: "Optimized for speed with cutting-edge performance technologies"
        },
        {
            icon: "📱",
            title: "Fully Responsive",
            description: "Perfect experience on all devices from mobile to desktop"
        },
        {
            icon: "🔒",
            title: "Secure & Safe",
            description: "Enterprise-grade security to protect your data and users"
        },
        {
            icon: "🎯",
            title: "SEO Optimized",
            description: "Built with SEO best practices to rank higher in search results"
        },
        {
            icon: "🔄",
            title: "Scalable Solutions",
            description: "Grow without limits with architecture designed to scale"
        },
        {
            icon: "💡",
            title: "Innovation First",
            description: "Latest technologies and trends to keep you ahead"
        }
    ];

    return (
        <div className='my-12 md:my-16 lg:my-20 px-4 md:px-6 lg:px-8'>
            <div className='max-w-7xl mx-auto'>
                <Heading 
                    subTitle="Why Choose Us" 
                    title="Key Features" 
                />
                
                <div className='mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
                    {features.map((feature, index) => (
                        <div key={index} className='bg-white p-6 md:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100 animation'>
                            <div className='text-4xl md:text-5xl mb-4'>
                                {feature.icon}
                            </div>
                            <h3 className='text-lg md:text-xl font-semibold text-gray-900 mb-3'>{feature.title}</h3>
                            <p className='text-sm sm:text-base text-gray-600 leading-relaxed'>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Features;

