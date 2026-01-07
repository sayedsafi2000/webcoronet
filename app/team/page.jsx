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
    "web development team Bangladesh"
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
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8 animation bg-white p-4 md:p-6 lg:p-8 rounded-lg shadow-md">
                <div className='flex flex-col items-start justify-start w-full lg:w-2/3 gap-4 md:gap-5 lg:gap-6'>
                    <div className='flex items-center gap-3 mb-2'>
                        <h1 className='text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>Asad Jaman</h1>
                        <span className='px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full'>CEO & Founder</span>
                    </div>
                    <p className='text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed'>
                        Asad Jaman is a visionary leader with over 15 years of experience in web development and digital marketing. His passion for technology and innovation has been the driving force behind Web Coronet's success. Asad specializes in strategic planning, business development, and creating digital solutions that transform businesses.
                    </p>
                    <p className='text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed'>
                        Under his leadership, Web Coronet has grown from a small startup to a trusted digital agency serving clients across Bangladesh and internationally. Asad's expertise spans web architecture, digital marketing strategies, and team management, making him a respected figure in the digital industry.
                    </p>
                    <div className='flex flex-wrap gap-2 mt-2'>
                        <span className='text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full'>Web Development</span>
                        <span className='text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full'>Digital Marketing</span>
                        <span className='text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full'>Business Strategy</span>
                    </div>
                    <a href='https://asadsnapper.com/' target='blank' rel='noopener noreferrer' className='px-6 py-2 md:px-10 md:py-2.5 lg:px-12 lg:py-3 bg-black text-white text-sm md:text-base hover:bg-gray-800 transition-colors rounded mt-2'>
                        View Profile →
                    </a>
                </div>
                <div className='animation w-full lg:w-1/3'>
                    <Image className='w-full lg:w-2/3 rounded-2xl mx-auto shadow-lg' src="/Asad-Jaman.jpg"  quality={100} width={1000} height={1000} alt='Asad Jaman - CEO & Founder of Web Coronet' />
                </div>
            </div>
            <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-6 md:gap-8 animation mt-8 md:mt-12 lg:mt-16 bg-white p-4 md:p-6 lg:p-8 rounded-lg shadow-md">
                <div className='flex flex-col items-start justify-start w-full lg:w-2/3 gap-4 md:gap-5 lg:gap-6'>
                    <div className='flex items-center gap-3 mb-2'>
                        <h1 className='text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>Sayed Safi</h1>
                        <span className='px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full'>Fullstack Developer</span>
                    </div>
                    <p className='text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed'>
                        Sayed Safi is a highly skilled fullstack web developer with 3 years of experience in building and maintaining responsive websites and web applications. His expertise spans both frontend and backend development, ensuring seamless user experiences and robust functionality across all projects.
                    </p>
                    <p className='text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed'>
                        Specializing in modern technologies like React, Next.js, Node.js, and various databases, Sayed has successfully delivered numerous complex web solutions. His attention to detail, code quality, and performance optimization makes him an invaluable asset to our development team. He's passionate about creating scalable, maintainable, and user-friendly applications.
                    </p>
                    <div className='flex flex-wrap gap-2 mt-2'>
                        <span className='text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full'>React</span>
                        <span className='text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full'>Next.js</span>
                        <span className='text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full'>Node.js</span>
                        <span className='text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full'>Fullstack</span>
                    </div>
                    <a target='blank' rel='noopener noreferrer' href='https://sayedsafi.me/' className='px-6 py-2 md:px-10 md:py-2.5 lg:px-12 lg:py-3 bg-black text-white text-sm md:text-base hover:bg-gray-800 transition-colors rounded mt-2'>
                        View Portfolio →
                    </a>
                </div>
                <div className='animation w-full lg:w-1/3'>
                    <Image src="/sayed-safi-big.jpg" className='w-full lg:w-2/3 rounded-2xl mx-auto shadow-lg' quality={100} width={1000} height={1000} alt='Sayed Safi - Fullstack Web Developer at Web Coronet' />
                </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8 animation mt-8 md:mt-12 lg:mt-16 bg-white p-4 md:p-6 lg:p-8 rounded-lg shadow-md">
                <div className='flex flex-col items-start justify-start w-full lg:w-2/3 gap-4 md:gap-5 lg:gap-6'>
                    <div className='flex items-center gap-3 mb-2'>
                        <h1 className='text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>Titun Chandra Dey</h1>
                        <span className='px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full'>Lead Designer</span>
                    </div>
                    <p className='text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed'>
                        Titun Chandra Dey is a creative force in visual design with exceptional talent for creating stunning, user-friendly interfaces. His keen eye for aesthetics and deep understanding of user experience principles ensures that every project he touches is both visually captivating and highly functional.
                    </p>
                    <p className='text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed'>
                        With expertise in UI/UX design, branding, and graphic design, Titun has contributed to numerous successful projects. His work combines modern design trends with timeless principles, creating visual experiences that resonate with users and effectively communicate brand messages. His portfolio showcases a diverse range of projects from startups to established brands.
                    </p>
                    <div className='flex flex-wrap gap-2 mt-2'>
                        <span className='text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full'>UI/UX Design</span>
                        <span className='text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full'>Branding</span>
                        <span className='text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full'>Graphic Design</span>
                    </div>
                    <a href='https://dribbble.com/ImTitun' target='blank' rel='noopener noreferrer' className='px-6 py-2 md:px-10 md:py-2.5 lg:px-12 lg:py-3 bg-black text-white text-sm md:text-base hover:bg-gray-800 transition-colors rounded mt-2'>
                        View Dribbble →
                    </a>
                </div>
                <div className='animation w-full lg:w-1/3'>
                    <Image src="/titon.jpg" className='w-full lg:w-2/3 rounded-2xl mx-auto shadow-lg' quality={100} width={1000} height={1000} alt='Titun Chandra Dey - Lead Designer at Web Coronet' />
                </div>
            </div>
            <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-6 md:gap-8 animation mt-8 md:mt-12 lg:mt-16 bg-white p-4 md:p-6 lg:p-8 rounded-lg shadow-md">
                <div className='flex flex-col items-start justify-start w-full lg:w-2/3 gap-4 md:gap-5 lg:gap-6'>
                    <div className='flex items-center gap-3 mb-2'>
                        <h1 className='text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>Fareea Mehjebin</h1>
                        <span className='px-3 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded-full'>Marketing Strategist</span>
                    </div>
                    <p className='text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed'>
                        Fareea Mehjebin is a strategic digital marketing expert who helps our clients achieve their online goals through data-driven marketing campaigns. Her comprehensive approach to digital marketing combines SEO, social media, content marketing, and paid advertising to deliver measurable results.
                    </p>
                    <p className='text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed'>
                        With a deep understanding of market trends and consumer behavior, Fareea develops customized marketing strategies that align with business objectives. Her expertise in analytics and performance tracking ensures that every campaign is optimized for maximum ROI. She's passionate about helping businesses grow their online presence and reach their target audiences effectively.
                    </p>
                    <div className='flex flex-wrap gap-2 mt-2'>
                        <span className='text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full'>SEO</span>
                        <span className='text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full'>Social Media</span>
                        <span className='text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full'>PPC</span>
                        <span className='text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full'>Content Marketing</span>
                    </div>
                    <a href='https://web.facebook.com/mehjebin.fareea' target='blank' rel='noopener noreferrer' className='px-6 py-2 md:px-10 md:py-2.5 lg:px-12 lg:py-3 bg-black text-white text-sm md:text-base hover:bg-gray-800 transition-colors rounded mt-2'>
                        Connect on Facebook →
                    </a>
                </div>
                <div className='animation w-full lg:w-1/3'>
                    <Image src="/marketer.jpg" className='w-full lg:w-2/3 rounded-2xl mx-auto shadow-lg' quality={100} width={1000} height={1000} alt='Fareea Mehjebin - Digital Marketing Strategist at Web Coronet' />
                </div>
            </div>
        </section>
      </>
    );
};

export default Team;