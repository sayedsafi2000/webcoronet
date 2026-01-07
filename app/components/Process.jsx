import React from 'react';
import Heading from './heading/heading';

const Process = () => {
    const steps = [
        {
            number: "01",
            title: "Discovery & Strategy",
            description: "We start by understanding your business goals, target audience, and unique challenges. Through comprehensive research and consultation, we develop a strategic roadmap tailored to your needs.",
            icon: "🔍"
        },
        {
            number: "02",
            title: "Design & Planning",
            description: "Our creative team designs wireframes and prototypes that align with your brand identity. We focus on user experience and visual appeal to create designs that convert.",
            icon: "🎨"
        },
        {
            number: "03",
            title: "Development & Testing",
            description: "Using cutting-edge technologies, we build your solution with clean, efficient code. Rigorous testing ensures flawless performance across all devices and browsers.",
            icon: "💻"
        },
        {
            number: "04",
            title: "Launch & Support",
            description: "We launch your project with confidence and provide ongoing support to ensure continued success. Our team is always available to help you grow and evolve.",
            icon: "🚀"
        }
    ];

    return (
        <div className='mt-8 md:mt-12 lg:mt-16 mb-12 md:mb-16 lg:mb-20 px-4 md:px-6 lg:px-8 '>
            <div className='max-w-7xl mx-auto'>
                <Heading 
                    subTitle="How We Work" 
                    title="Our Process" 
                />
                
                <div className='mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8'>
                    {steps.map((step, index) => (
                        <div 
                            key={index} 
                            className='bg-white p-6 md:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100 animation'
                        >
                            <div className='flex items-center gap-3 mb-4'>
                                <span className='text-4xl'>{step.icon}</span>
                                <span className='text-3xl md:text-4xl font-bold text-gray-300'>{step.number}</span>
                            </div>
                            <h3 className='text-lg md:text-xl font-semibold text-gray-900 mb-3'>{step.title}</h3>
                            <p className='text-sm sm:text-base text-gray-600 leading-relaxed'>{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Process;

