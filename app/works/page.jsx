import React from 'react';
import Heading from '../components/heading/heading';
import { Card, CardContent } from "../components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../components/ui/carousel"
import Image from 'next/image';

export const metadata = {
  title: "Our Work - Portfolio & Projects | Web Coronet",
  description: "Explore Web Coronet's portfolio of successful web development projects, mobile apps, and digital marketing campaigns. See how we've helped businesses grow online.",
  keywords: [
    "webcoronet portfolio",
    "web development portfolio",
    "mobile app portfolio",
    "website projects",
    "e-commerce projects"
  ],
  openGraph: {
    title: "Our Work - Portfolio & Projects | Web Coronet",
    description: "Explore Web Coronet's portfolio of successful web development projects, mobile apps, and digital marketing campaigns.",
    url: "https://www.webcoronet.com/works",
  },
  alternates: {
    canonical: "https://www.webcoronet.com/works",
  },
};

const Works = () => {
    const projects = [
        { 
            src: "/website (5).png", 
            title: "E-Commerce Platform", 
            category: "Web Development",
            description: "Modern e-commerce solution with advanced features",
            tech: ["Next.js", "Stripe", "MongoDB"],
            results: "65% increase in sales"
        },
        { 
            src: "/website (6).png", 
            title: "Corporate Website", 
            category: "Web Design",
            description: "Professional corporate website with CMS integration",
            tech: ["React", "WordPress", "SEO"],
            results: "300% traffic growth"
        },
        { 
            src: "/website (4).png", 
            title: "Business Portal", 
            category: "Web Application",
            description: "Custom business management portal",
            tech: ["Node.js", "PostgreSQL", "AWS"],
            results: "50% efficiency boost"
        },
        { 
            src: "/website (3).png", 
            title: "Portfolio Website", 
            category: "Creative Design",
            description: "Stunning portfolio showcase for creative agency",
            tech: ["Next.js", "Framer Motion", "Tailwind"],
            results: "90% client engagement"
        },
        { 
            src: "/website (2).png", 
            title: "SaaS Platform", 
            category: "Web Application",
            description: "Scalable SaaS solution for business automation",
            tech: ["React", "Firebase", "Stripe"],
            results: "10K+ active users"
        },
        { 
            src: "/website (5).png", 
            title: "Mobile App Dashboard", 
            category: "Mobile Development",
            description: "Cross-platform mobile application",
            tech: ["React Native", "Node.js", "MongoDB"],
            results: "4.8★ app rating"
        },
    ];

    return (
        <div className='mt-12 md:mt-16 lg:mt-20 px-4 md:px-6 lg:px-8'>
            <Heading subTitle="Showcasing Our Creativity and Expertise" title="Our Work" />
            
            {/* Introduction Section */}
            <div className="mt-8 md:mt-12 lg:mt-16 max-w-4xl mx-auto text-center mb-12 md:mb-16 lg:mb-20">
                <p className='text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-4'>
                    At Web Coronet, we take pride in delivering exceptional digital solutions that drive real business results. Our portfolio showcases a diverse range of projects, from sleek corporate websites to complex e-commerce platforms and innovative mobile applications.
                </p>
                <p className='text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed'>
                    Each project is crafted with attention to detail, user experience, and performance optimization. We combine cutting-edge technology with strategic thinking to create solutions that not only look great but also perform flawlessly.
                </p>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16 lg:mb-20 max-w-5xl mx-auto">
                <div className="bg-white p-6 md:p-8 rounded-lg shadow-md text-center animation">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-2">500+</h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600">Projects Delivered</p>
                </div>
                <div className="bg-white p-6 md:p-8 rounded-lg shadow-md text-center animation">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-2">98%</h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600">Client Satisfaction</p>
                </div>
                <div className="bg-white p-6 md:p-8 rounded-lg shadow-md text-center animation">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-2">10+</h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600">Years Experience</p>
                </div>
                <div className="bg-white p-6 md:p-8 rounded-lg shadow-md text-center animation">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-2">50+</h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600">Industries Served</p>
                </div>
            </div>

            {/* Enhanced Carousel Section */}
            <div className='mb-12 md:mb-16 lg:mb-20'>
                <div className="text-center mb-8 md:mb-12">
                    <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4'>Featured Projects</h2>
                    <p className='text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto'>
                        Explore our handpicked selection of successful projects that showcase our expertise across different industries and technologies.
                    </p>
                </div>
                
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-2 md:-ml-4">
                        {projects.map((project, index) => (
                            <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                                <div className="group relative">
                                    <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white">
                                        <CardContent className="p-0 relative">
                                            <div className="relative overflow-hidden">
                                                <Image 
                                                    width={1000} 
                                                    height={600} 
                                                    src={project.src} 
                                                    alt={project.title}
                                                    className="w-full h-[300px] md:h-[350px] object-cover group-hover:scale-110 transition-transform duration-700"
                                                />
                                                {/* Gradient Overlay */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                                
                                                {/* Category Badge */}
                                                <div className="absolute top-4 left-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                                    <span className="px-3 py-1.5 bg-black text-white text-xs font-semibold shadow-lg">
                                                        {project.category}
                                                    </span>
                                                </div>

                                                {/* Hover Content */}
                                                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                                                    <div className="text-white">
                                                        <h4 className="text-lg md:text-xl font-bold mb-2">{project.title}</h4>
                                                        <p className="text-xs sm:text-sm text-gray-200 mb-3">{project.description}</p>
                                                        <div className="flex flex-wrap gap-2 mb-3">
                                                            {project.tech.map((tech, i) => (
                                                                <span key={i} className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded">
                                                                    {tech}
                                                                </span>
                                                            ))}
                                                        </div>
                                                        <p className="text-xs sm:text-sm font-semibold text-white">
                                                            ✓ {project.results}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            {/* Default Content (visible when not hovering) */}
                                            <div className="p-4 md:p-6 group-hover:hidden">
                                                <div className="mb-2">
                                                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium">
                                                        {project.category}
                                                    </span>
                                                </div>
                                                <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-1">{project.title}</h4>
                                                <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">{project.description}</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-0 md:left-4" />
                    <CarouselNext className="right-0 md:right-4" />
                </Carousel>
            </div>

            {/* Project Categories */}
            <div className="mb-12 md:mb-16 lg:mb-20">
                <div className="text-center mb-8 md:mb-12">
                    <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4'>Our Expertise Across Industries</h2>
                    <p className='text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto'>
                        We&apos;ve successfully delivered projects across various industries, each tailored to meet specific business needs and objectives.
                    </p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
                    {[
                        { name: "E-Commerce", count: "120+", icon: "🛒" },
                        { name: "Healthcare", count: "45+", icon: "🏥" },
                        { name: "Education", count: "60+", icon: "🎓" },
                        { name: "Finance", count: "35+", icon: "💰" },
                        { name: "Real Estate", count: "50+", icon: "🏠" },
                        { name: "Food & Beverage", count: "40+", icon: "🍔" },
                        { name: "Travel", count: "30+", icon: "✈️" },
                        { name: "Technology", count: "80+", icon: "💻" },
                    ].map((industry, index) => (
                        <div key={index} className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center animation">
                            <div className="text-3xl md:text-4xl mb-2">{industry.icon}</div>
                            <h4 className="text-sm md:text-base font-semibold text-gray-900 mb-1">{industry.name}</h4>
                            <p className="text-xs text-gray-600">{industry.count} Projects</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-gray-900 to-black text-white p-8 md:p-12 lg:p-16 rounded-lg text-center mb-12 md:mb-16 lg:mb-20">
                <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4'>
                    Ready to Start Your Project?
                </h2>
                <p className='text-sm sm:text-base md:text-lg text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto'>
                    Let&apos;s discuss how we can bring your digital vision to life. Our team is ready to create something amazing for your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="/contact" className='px-6 py-3 md:px-8 md:py-4 bg-white text-black text-sm md:text-base font-semibold hover:bg-gray-100 transition-colors rounded'>
                        Get Started Today
                    </a>
                    <a href="/services" className='px-6 py-3 md:px-8 md:py-4 border-2 border-white text-white text-sm md:text-base font-semibold hover:bg-white/10 transition-colors rounded'>
                        View Our Services
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Works;