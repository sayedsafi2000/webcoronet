import React from 'react';
import Heading from './heading/heading';

const Testimonials = () => {
    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "CEO, TechStart Inc.",
            content: "Web Coronet transformed our online presence completely. Their team delivered a stunning website that increased our conversions by 150%. Professional, responsive, and results-driven.",
            rating: 5
        },
        {
            name: "Michael Chen",
            role: "Founder, GreenLife Solutions",
            content: "Working with Web Coronet was a game-changer. They understood our vision and created a mobile app that our users love. The attention to detail and customer service is exceptional.",
            rating: 5
        },
        {
            name: "Emily Rodriguez",
            role: "Marketing Director, Fashion Forward",
            content: "Their digital marketing strategies helped us reach new heights. Our social media engagement increased by 300% and our online sales doubled within 6 months. Highly recommended!",
            rating: 5
        }
    ];

    return (
        <div className='my-12 md:my-16 lg:my-20 px-4 md:px-6 lg:px-8'>
            <div className='max-w-7xl mx-auto'>
                <Heading 
                    subTitle="What Our Clients Say" 
                    title="Client Testimonials" 
                />
                
                <div className='mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8'>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className='bg-white p-6 md:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100 animation'>
                            <div className='flex gap-1 mb-4'>
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <span key={i} className='text-black text-lg'>★</span>
                                ))}
                            </div>
                            <p className='text-sm sm:text-base text-gray-600 mb-6 leading-relaxed'>
                                &quot;{testimonial.content}&quot;
                            </p>
                            <div>
                                <h4 className='text-base md:text-lg font-semibold text-gray-900'>{testimonial.name}</h4>
                                <p className='text-xs sm:text-sm text-gray-500'>{testimonial.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;

