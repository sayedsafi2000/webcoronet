import React from 'react';
import Heading from '../components/heading/heading';
import Image from 'next/image';

export const metadata = {
  title: "Our Team - Meet the Experts | Web Coronet",
  description: "Meet the talented team behind Web Coronet. Our experts in web development, design, and digital marketing are dedicated to your success.",
  keywords: [
    "webcoronet team",
    "web developers",
    "graphic designers",
    "digital marketing experts",
    "web development team Bangladesh",
    "Sayed Safi",
    "Sayed Safi web developer",
    "Sayed Safi Facebook",
    "Sayed Safi fullstack developer",
    "Jihan",
    "Jihan marketing writer",
    "Jihan content writer",
    "Jihan Facebook",
    "MD Foyejur Rahman Reza",
    "Foyejur Reza",
    "Foyejur Reza Manager",
    "Foyejur Reza Facebook"
  ],
  openGraph: {
    title: "Our Team - Meet the Experts | Web Coronet",
    description: "Meet the talented team behind Web Coronet. Our experts in web development, design, and digital marketing are dedicated to your success.",
    url: "https://www.webcoronet.com/team",
  },
  alternates: {
    canonical: "https://www.webcoronet.com/team",
  },
};

const Team = () => {
  const teamSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Web Coronet",
    "employee": [
      {
        "@type": "Person",
        "name": "Asad Jaman",
        "jobTitle": "CEO & Founder",
        "description": "Asad has over 15 years of experience in web development and digital marketing.",
        "url": "https://asadsnapper.com/",
        "worksFor": {
          "@type": "Organization",
          "name": "Web Coronet"
        }
      },
      {
        "@type": "Person",
        "name": "Sayed Safi",
        "jobTitle": "Web Developer",
        "description": "Fullstack web developer with 13 years of experience in building and maintaining responsive websites.",
        "url": "https://sayedsafi.me/",
        "sameAs": [
          "https://www.facebook.com/sayedsafiii/",
          "https://sayedsafi.me/"
        ],
        "worksFor": {
          "@type": "Organization",
          "name": "Web Coronet"
        }
      },
      {
        "@type": "Person",
        "name": "Titun Chandra Dey",
        "jobTitle": "Lead Designer",
        "description": "Creative designer with expertise in visual design and user experience.",
        "url": "https://dribbble.com/ImTitun",
        "worksFor": {
          "@type": "Organization",
          "name": "Web Coronet"
        }
      },
      {
        "@type": "Person",
        "name": "Fareea Mehjebin",
        "jobTitle": "Digital Marketing Strategist",
        "description": "Strategic digital marketing expert helping clients achieve their online goals.",
        "worksFor": {
          "@type": "Organization",
          "name": "Web Coronet"
        }
      },
      {
        "@type": "Person",
        "name": "Jihan",
        "jobTitle": "Marketer and Content Writer",
        "description": "Creative marketing and content writer specializing in engaging content creation and digital marketing strategies.",
        "url": "https://www.facebook.com/NusaitJihan.nhn505",
        "sameAs": [
          "https://www.facebook.com/NusaitJihan.nhn505"
        ],
        "worksFor": {
          "@type": "Organization",
          "name": "Web Coronet"
        }
      },
      {
        "@type": "Person",
        "name": "MD Foyejur Rahman Reza",
        "jobTitle": "Manager",
        "description": "Experienced manager overseeing operations and ensuring smooth workflow at Web Coronet.",
        "url": "https://www.facebook.com/FoyejurReza",
        "sameAs": [
          "https://www.facebook.com/FoyejurReza"
        ],
        "worksFor": {
          "@type": "Organization",
          "name": "Web Coronet"
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(teamSchema) }}
      />
      <section itemScope itemType="https://schema.org/Organization" className='my-12 md:my-16 lg:my-20 px-4 md:px-6 lg:px-8'>
            <Heading subTitle='Meet the Team' title="The Experts Behind Your Success" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mt-8 md:mt-12">
                {/* Asad Jaman */}
                <div className="group relative bg-white overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 animation">
                    <div className="relative overflow-hidden">
                        <Image 
                            className='w-full h-[400px] md:h-[450px] object-cover group-hover:scale-110 transition-transform duration-500' 
                            src="/Asad-Jaman.jpg"  
                            quality={100} 
                            width={1000} 
                            height={1000} 
                            alt='Asad Jaman - CEO & Founder of Web Coronet' 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute top-4 left-4 z-10">
                            <span className='px-3 py-1.5 bg-black text-white text-xs font-semibold shadow-lg'>CEO & Founder</span>
                        </div>
                    </div>
                    <div className="p-6 md:p-8">
                        <div className='mb-3'>
                            <h2 className='text-xl sm:text-2xl md:text-3xl font-semibold'>Asad Jaman</h2>
                        </div>
                        <p className='text-sm md:text-base text-gray-600 leading-relaxed mb-4 line-clamp-3'>
                            Visionary leader with over 15 years of experience in web development and digital marketing. His passion for technology drives Web Coronet&apos;s success.
                        </p>
                        <div className='flex flex-wrap gap-2 mb-4'>
                            <span className='text-xs px-2 py-1 bg-gray-100 text-gray-700'>Web Development</span>
                            <span className='text-xs px-2 py-1 bg-gray-100 text-gray-700'>Digital Marketing</span>
                            <span className='text-xs px-2 py-1 bg-gray-100 text-gray-700'>Business Strategy</span>
                        </div>
                        <a href='https://asadsnapper.com/' target='_blank' rel='noopener noreferrer' className='inline-block px-4 py-2 bg-black text-white text-sm hover:bg-gray-800 transition-colors'>
                            View Profile →
                        </a>
                    </div>
                </div>

                {/* MD Foyejur Rahman Reza */}
                <div className="group relative bg-white overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 animation">
                    <div className="relative overflow-hidden">
                        <Image 
                            src="/reza.jpg" 
                            className='w-full h-[400px] md:h-[450px] object-cover group-hover:scale-110 transition-transform duration-500' 
                            quality={100} 
                            width={1000} 
                            height={1000} 
                            alt='MD Foyejur Rahman Reza - Manager at Web Coronet' 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute top-4 left-4 z-10">
                            <span className='px-3 py-1.5 bg-black text-white text-xs font-semibold shadow-lg'>Manager</span>
                        </div>
                    </div>
                    <div className="p-6 md:p-8">
                        <div className='mb-3'>
                            <h2 className='text-xl sm:text-2xl md:text-3xl font-semibold'>MD Foyejur Rahman Reza</h2>
                        </div>
                        <p className='text-sm md:text-base text-gray-600 leading-relaxed mb-4 line-clamp-3'>
                            Experienced manager overseeing operations and ensuring smooth workflow at Web Coronet. Dedicated to maintaining high standards and facilitating team success.
                        </p>
                        <div className='flex flex-wrap gap-2 mb-4'>
                            <span className='text-xs px-2 py-1 bg-gray-100 text-gray-700'>Operations</span>
                            <span className='text-xs px-2 py-1 bg-gray-100 text-gray-700'>Management</span>
                            <span className='text-xs px-2 py-1 bg-gray-100 text-gray-700'>Team Leadership</span>
                            <span className='text-xs px-2 py-1 bg-gray-100 text-gray-700'>Project Coordination</span>
                        </div>
                            <a href='https://www.facebook.com/FoyejurReza' target='_blank' rel='noopener noreferrer' className='inline-block px-4 py-2 bg-black text-white text-sm hover:bg-gray-800 transition-colors'>
                            Connect on Facebook →
                        </a>
                    </div>
                </div>

                {/* Sayed Safi */}
                <div className="group relative bg-white overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 animation">
                    <div className="relative overflow-hidden">
                        <Image 
                            src="/sayed-safi-big.jpg" 
                            className='w-full h-[400px] md:h-[450px] object-cover group-hover:scale-110 transition-transform duration-500' 
                            quality={100} 
                            width={1000} 
                            height={1000} 
                            alt='Sayed Safi - Fullstack Web Developer at Web Coronet' 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute top-4 left-4 z-10">
                            <span className='px-3 py-1.5 bg-black text-white text-xs font-semibold shadow-lg'>Fullstack Developer</span>
                        </div>
                    </div>
                    <div className="p-6 md:p-8">
                        <div className='mb-3'>
                            <h2 className='text-xl sm:text-2xl md:text-3xl font-semibold'>Sayed Safi</h2>
                        </div>
                        <p className='text-sm md:text-base text-gray-600 leading-relaxed mb-4 line-clamp-3'>
                            Highly skilled fullstack web developer specializing in React, Next.js, and Node.js. Passionate about creating scalable, maintainable applications.
                        </p>
                        <div className='flex flex-wrap gap-2 mb-4'>
                            <span className='text-xs px-2 py-1 bg-gray-100 text-gray-700'>React</span>
                            <span className='text-xs px-2 py-1 bg-gray-100 text-gray-700'>Next.js</span>
                            <span className='text-xs px-2 py-1 bg-gray-100 text-gray-700'>Node.js</span>
                            <span className='text-xs px-2 py-1 bg-gray-100 text-gray-700'>Fullstack</span>
                        </div>
                        <div className='flex flex-wrap gap-2'>
                            <a target='_blank' rel='noopener noreferrer' href='https://sayedsafi.me/' className='inline-block px-4 py-2 bg-black text-white text-sm hover:bg-gray-800 transition-colors'>
                                Portfolio →
                            </a>
                            <a target='_blank' rel='noopener noreferrer' href='https://www.facebook.com/sayedsafiii/' className='inline-block px-4 py-2 bg-black text-white text-sm hover:bg-gray-800 transition-colors'>
                                Facebook →
                            </a>
                </div>
            </div>
                </div>

                {/* Titun Chandra Dey */}
                <div className="group relative bg-white overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 animation">
                    <div className="relative overflow-hidden">
                        <Image 
                            src="/titon.jpg" 
                            className='w-full h-[400px] md:h-[450px] object-cover group-hover:scale-110 transition-transform duration-500' 
                            quality={100} 
                            width={1000} 
                            height={1000} 
                            alt='Titun Chandra Dey - Lead Designer at Web Coronet' 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute top-4 left-4 z-10">
                            <span className='px-3 py-1.5 bg-black text-white text-xs font-semibold shadow-lg'>Lead Designer</span>
                        </div>
                    </div>
                    <div className="p-6 md:p-8">
                        <div className='mb-3'>
                            <h2 className='text-xl sm:text-2xl md:text-3xl font-semibold'>Titun Chandra Dey</h2>
                        </div>
                        <p className='text-sm md:text-base text-gray-600 leading-relaxed mb-4 line-clamp-3'>
                            Creative force in visual design with exceptional talent for creating stunning, user-friendly interfaces that are both visually captivating and functional.
                        </p>
                        <div className='flex flex-wrap gap-2 mb-4'>
                            <span className='text-xs px-2 py-1 bg-gray-100 text-gray-700'>UI/UX Design</span>
                            <span className='text-xs px-2 py-1 bg-gray-100 text-gray-700'>Branding</span>
                            <span className='text-xs px-2 py-1 bg-gray-100 text-gray-700'>Graphic Design</span>
                        </div>
                        <a href='https://dribbble.com/ImTitun' target='_blank' rel='noopener noreferrer' className='inline-block px-4 py-2 bg-black text-white text-sm hover:bg-gray-800 transition-colors'>
                            View Dribbble →
                        </a>
                    </div>
                </div>

                {/* Fareea Mehjebin */}
                <div className="group relative bg-white overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 animation">
                    <div className="relative overflow-hidden">
                        <Image 
                            src="/marketer.jpg" 
                            className='w-full h-[400px] md:h-[450px] object-cover group-hover:scale-110 transition-transform duration-500' 
                            quality={100} 
                            width={1000} 
                            height={1000} 
                            alt='Fareea Mehjebin - Digital Marketing Strategist at Web Coronet' 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute top-4 left-4 z-10">
                            <span className='px-3 py-1.5 bg-black text-white text-xs font-semibold shadow-lg'>Marketing Strategist</span>
                        </div>
                    </div>
                    <div className="p-6 md:p-8">
                        <div className='mb-3'>
                            <h2 className='text-xl sm:text-2xl md:text-3xl font-semibold'>Fareea Mehjebin</h2>
                        </div>
                        <p className='text-sm md:text-base text-gray-600 leading-relaxed mb-4 line-clamp-3'>
                            Strategic digital marketing expert who helps clients achieve their online goals through data-driven marketing campaigns and measurable results.
                        </p>
                        <div className='flex flex-wrap gap-2 mb-4'>
                            <span className='text-xs px-2 py-1 bg-gray-100 text-gray-700'>SEO</span>
                            <span className='text-xs px-2 py-1 bg-gray-100 text-gray-700'>Social Media</span>
                            <span className='text-xs px-2 py-1 bg-gray-100 text-gray-700'>PPC</span>
                            <span className='text-xs px-2 py-1 bg-gray-100 text-gray-700'>Content Marketing</span>
                        </div>
                        <a href='https://web.facebook.com/mehjebin.fareea' target='_blank' rel='noopener noreferrer' className='inline-block px-4 py-2 bg-black text-white text-sm hover:bg-gray-800 transition-colors'>
                            Connect on Facebook →
                        </a>
            </div>
                </div>

                {/* Jihan */}
                <div className="group relative bg-white overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 animation">
                    <div className="relative overflow-hidden">
                        <Image 
                            src="/jihan.jpg" 
                            className='w-full h-[400px] md:h-[450px] object-cover group-hover:scale-110 transition-transform duration-500' 
                            quality={100} 
                            width={1000} 
                            height={1000} 
                            alt='Jihan - Marketer and Content Writer at Web Coronet' 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute top-4 left-4 z-10">
                            <span className='px-3 py-1.5 bg-black text-white text-xs font-semibold shadow-lg'>Marketer and Content Writer</span>
                        </div>
                    </div>
                    <div className="p-6 md:p-8">
                        <div className='mb-3'>
                            <h2 className='text-xl sm:text-2xl md:text-3xl font-semibold'>Jihan</h2>
                        </div>
                        <p className='text-sm md:text-base text-gray-600 leading-relaxed mb-4 line-clamp-3'>
                            Creative marketing and content writer specializing in crafting engaging content that resonates with target audiences and builds strong brand connections.
                        </p>
                        <div className='flex flex-wrap gap-2 mb-4'>
                            <span className='text-xs px-2 py-1 bg-gray-100 text-gray-700'>Content Writing</span>
                            <span className='text-xs px-2 py-1 bg-gray-100 text-gray-700'>Copywriting</span>
                            <span className='text-xs px-2 py-1 bg-gray-100 text-gray-700'>Digital Marketing</span>
                            <span className='text-xs px-2 py-1 bg-gray-100 text-gray-700'>Social Media</span>
                        </div>
                        <a href='https://www.facebook.com/NusaitJihan.nhn505' target='_blank' rel='noopener noreferrer' className='inline-block px-4 py-2 bg-black text-white text-sm hover:bg-gray-800 transition-colors'>
                            Connect on Facebook →
                        </a>
                    </div>
                </div>
            </div>
        </section>
      </>
    );
};

export default Team;