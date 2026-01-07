import React from 'react';
import Heading from '../components/heading/heading';

export const metadata = {
  title: "Blog - Web Development Insights & Updates | Web Coronet",
  description: "Stay updated with the latest insights, tips, and trends in web development, design, digital marketing, and technology from Web Coronet's blog.",
  keywords: [
    "web development blog",
    "web design tips",
    "digital marketing blog",
    "technology insights",
    "web development trends"
  ],
  openGraph: {
    title: "Blog - Web Development Insights & Updates | Web Coronet",
    description: "Stay updated with the latest insights, tips, and trends in web development, design, digital marketing, and technology.",
    url: "https://www.webcoronet.com/blog",
  },
  alternates: {
    canonical: "https://www.webcoronet.com/blog",
  },
};

const page = () => {
    const blogPosts = [
        {
            title: "10 Essential Web Development Trends for 2024",
            excerpt: "Discover the latest trends shaping the future of web development, from AI integration to progressive web apps and beyond.",
            category: "Web Development",
            date: "January 15, 2024"
        },
        {
            title: "Mobile-First Design: Why It Matters More Than Ever",
            excerpt: "Learn why mobile-first design is crucial for your business success and how to implement it effectively in your next project.",
            category: "Design",
            date: "January 10, 2024"
        },
        {
            title: "SEO Best Practices: A Complete Guide for 2024",
            excerpt: "Master the fundamentals of SEO with our comprehensive guide covering on-page optimization, technical SEO, and content strategy.",
            category: "Digital Marketing",
            date: "January 5, 2024"
        },
        {
            title: "Building Scalable E-commerce Solutions",
            excerpt: "Explore strategies for creating e-commerce platforms that can grow with your business and handle increasing traffic and sales.",
            category: "Web Development",
            date: "December 28, 2023"
        },
        {
            title: "The Power of Brand Identity in Digital Marketing",
            excerpt: "Understand how strong brand identity influences customer perception and drives engagement in the digital space.",
            category: "Design",
            date: "December 20, 2023"
        },
        {
            title: "Social Media Marketing Strategies That Convert",
            excerpt: "Discover proven social media marketing strategies that help businesses build engaged communities and drive conversions.",
            category: "Digital Marketing",
            date: "December 15, 2023"
        }
    ];

    return (
        <div className='mt-12 md:mt-16 lg:mt-20 px-4 md:px-6 lg:px-8'>
            <Heading subTitle="Latest Insights & Updates" title="Our Blog" />
            <div className='my-12 md:my-16 lg:my-20 max-w-4xl mx-auto'>
                <p className='text-sm sm:text-base md:text-lg text-gray-600 mb-8 md:mb-12 text-center'>
                    Stay updated with the latest insights, tips, and trends in web development, design, digital marketing, and technology. Our blog features expert advice, industry news, and practical guides to help you succeed online.
                </p>
                
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
                    {blogPosts.map((post, index) => (
                        <article key={index} className='bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow animation'>
                            <div className='mb-3'>
                                <span className='text-xs sm:text-sm text-gray-500 uppercase tracking-wide'>{post.category}</span>
                                <span className='text-xs sm:text-sm text-gray-400 mx-2'>•</span>
                                <span className='text-xs sm:text-sm text-gray-500'>{post.date}</span>
                            </div>
                            <h3 className='text-base sm:text-lg md:text-xl font-semibold mb-3 text-gray-900'>
                                {post.title}
                            </h3>
                            <p className='text-xs sm:text-sm md:text-base text-gray-600 mb-4 line-clamp-3'>
                                {post.excerpt}
                            </p>
                            <button className='text-xs sm:text-sm text-black font-medium hover:underline'>
                                Read More →
                            </button>
                        </article>
                    ))}
                </div>

                <div className='mt-12 text-center'>
                    <p className='text-xs sm:text-sm md:text-base text-gray-500 mb-4'>
                        Want to stay updated? Subscribe to our newsletter for weekly insights and tips.
                    </p>
                    <div className='flex flex-col sm:flex-row gap-3 max-w-md mx-auto'>
                        <input 
                            type="email" 
                            placeholder="Enter your email" 
                            className='flex-1 px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-black'
                        />
                        <button className='px-6 py-2 bg-black text-white text-sm rounded-md hover:bg-gray-800 transition-colors'>
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;