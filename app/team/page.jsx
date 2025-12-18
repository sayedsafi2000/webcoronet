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
      <section itemScope itemType="https://schema.org/Organization" className='my-16 md:my-24 lg:my-28'>
            <Heading subTitle='Meet the Team' title="The Experts Behind Your Success" />
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-7 animation">
                <div className='flex flex-col items-start justify-start w-full lg:w-2/3 gap-4 md:gap-5 lg:gap-6'>
                    <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>Asad Jaman</h1>
                    <p className='text-base sm:text-lg md:text-xl'>CEO & Founder</p>
                    <p className='text-sm sm:text-base md:text-lg'>Asad has over 15 years of experience in web development and digital marketing. His vision and leadership drive Web Coronet`s success.</p>
                    <a href='https://asadsnapper.com/' target='blank' className='px-6 py-2 md:px-10 md:py-2.5 lg:px-12 lg:py-3 bg-black text-white text-sm md:text-base hover:bg-gray-800 transition-colors'>Read More</a>
                </div>
                <div className='animation w-full lg:w-1/3'>
                    <Image className='w-full lg:w-2/3 rounded-2xl mx-auto' src="/Asad-Jaman.jpg"  quality={100} width={1000} height={1000} alt='Asad Jaman - CEO & Founder of Web Coronet' />
                </div>
            </div>
            <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-6 md:gap-7 animation mt-12 md:mt-16 lg:mt-20">
                <div className='flex flex-col items-start justify-start w-full lg:w-2/3 gap-4 md:gap-5 lg:gap-6 mx-auto'>
                    <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>Sayed Safi</h1>
                    <p className='text-base sm:text-lg md:text-xl'>Web Developer</p>
                    <p className='text-sm sm:text-base md:text-lg'>I am a fullstack web developer with 13 years of experience in building and maintaining responsive websites. My expertise includes both frontend and backend development, ensuring seamless user experiences and robust functionality.</p>
                    <a target='blank' href='https://sayedsafi.me/' className='px-6 py-2 md:px-10 md:py-2.5 lg:px-12 lg:py-3 bg-black text-white text-sm md:text-base hover:bg-gray-800 transition-colors'>Read More</a>
                </div>
                <div className='animation w-full lg:w-1/3'>
                    <Image src="/sayed-safi-big.jpg" className='w-full lg:w-2/3 rounded-2xl mx-auto' quality={100} width={1000} height={1000} alt='Sayed Safi - Fullstack Web Developer at Web Coronet' />
                </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-7 animation mt-12 md:mt-16 lg:mt-20">
                <div className='flex flex-col items-start justify-start w-full lg:w-2/3 gap-4 md:gap-5 lg:gap-6 mx-auto'>
                    <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>Titun Chandra Dey</h1>
                    <p className='text-base sm:text-lg md:text-xl'>Lead Designer</p>
                    <p className='text-sm sm:text-base md:text-lg'>Titun's creativity and eye for design ensure that every project is visually stunning and user-friendly.</p>
                    <a href='https://dribbble.com/ImTitun' target='blank'  className='px-6 py-2 md:px-10 md:py-2.5 lg:px-12 lg:py-3 bg-black text-white text-sm md:text-base hover:bg-gray-800 transition-colors'>Read More</a>
                </div>
                <div className='animation w-full lg:w-1/3'>
                    <Image src="/titon.jpg" className='w-full lg:w-2/3 rounded-2xl mx-auto' quality={100} width={1000} height={1000} alt='Titun Chandra Dey - Lead Designer at Web Coronet' />
                </div>
            </div>
            <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-6 md:gap-7 animation mt-12 md:mt-16 lg:mt-20">
                <div className='flex flex-col items-start justify-start w-full lg:w-2/3 gap-4 md:gap-5 lg:gap-6 mx-auto'>
                    <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>Fareea Mehjebin</h1>
                    <p className='text-base sm:text-lg md:text-xl'>Digital Marketing Strategist</p>
                    <p className='text-sm sm:text-base md:text-lg'>Fareea's strategic approach to digital marketing helps our clients achieve their online goals.</p>
                    <a href='https://web.facebook.com/mehjebin.fareea' target='blank'  className='px-6 py-2 md:px-10 md:py-2.5 lg:px-12 lg:py-3 bg-black text-white text-sm md:text-base hover:bg-gray-800 transition-colors'>Read More</a>
                </div>
                <div className='animation w-full lg:w-1/3'>
                    <Image src="/marketer.jpg" className='w-full lg:w-2/3 rounded-2xl mx-auto' quality={100} width={1000} height={1000} alt='Fareea Mehjebin - Digital Marketing Strategist at Web Coronet' />
                </div>
            </div>
        </section>
      </>
    );
};

export default Team;