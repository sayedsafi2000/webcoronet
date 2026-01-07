import React from 'react';
import Image from 'next/image';
import Heading from './heading/heading';

const GrateClient = () => {
  const clients = [
    { 
      name: "TechStart Solutions", 
      industry: "Technology",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=200&h=200&fit=crop&q=80"
    },
    { 
      name: "GreenLife Organics", 
      industry: "E-commerce",
      image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=200&h=200&fit=crop&q=80"
    },
    { 
      name: "MedCare Plus", 
      industry: "Healthcare",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=200&h=200&fit=crop&q=80"
    },
    { 
      name: "EduLearn Academy", 
      industry: "Education",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=200&h=200&fit=crop&q=80"
    },
    { 
      name: "FinanceHub", 
      industry: "Financial Services",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=200&fit=crop&q=80"
    },
    { 
      name: "RetailMax", 
      industry: "Retail",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=200&h=200&fit=crop&q=80"
    },
    { 
      name: "Foodie Express", 
      industry: "Food & Beverage",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=200&h=200&fit=crop&q=80"
    },
    { 
      name: "TravelWise", 
      industry: "Travel & Tourism",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=200&h=200&fit=crop&q=80"
    },
    { 
      name: "RealEstate Pro", 
      industry: "Real Estate",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=200&h=200&fit=crop&q=80"
    },
    { 
      name: "FitnessFirst", 
      industry: "Health & Fitness",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=200&h=200&fit=crop&q=80"
    },
    { 
      name: "BeautyGlow", 
      industry: "Beauty & Cosmetics",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=200&h=200&fit=crop&q=80"
    },
    { 
      name: "AutoDrive", 
      industry: "Automotive",
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=200&h=200&fit=crop&q=80"
    },
  ];

  return (
    <div className="my-12 md:my-16 lg:my-20 px-4 md:px-6 lg:px-8">
      <Heading 
        subTitle="Trusted By Industry Leaders" 
        title="Our Clients" 
      />
      <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 text-center max-w-3xl mx-auto mb-6 md:mb-8 lg:mb-12">
        We're proud to work with businesses of all sizes, from startups to established enterprises. Our clients trust us to deliver exceptional digital solutions that drive growth and success.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 lg:gap-8 place-items-center">
        {clients.map((client, index) => (
          <div 
            key={index} 
            className="relative overflow-hidden w-full flex flex-col items-center justify-center animation p-4 md:p-6 rounded-lg group"
          >
            <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center mb-3 relative overflow-hidden rounded-full bg-gray-50 mx-auto">
              <Image
                src={client.image}
                alt={client.name}
                width={120}
                height={120}
                className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="text-center w-full">
              <p className="text-xs sm:text-sm font-semibold text-gray-800 mb-1">{client.name}</p>
              <p className="text-[10px] sm:text-xs text-gray-500">{client.industry}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 md:mt-12 text-center">
        <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-4">
          Join hundreds of satisfied clients who have transformed their digital presence with Web Coronet
        </p>
        <a href="/contact" className="inline-block px-6 py-2 md:px-8 md:py-3 bg-black text-white text-xs sm:text-sm md:text-base hover:bg-gray-800 transition-colors rounded">
          Become Our Client
        </a>
      </div>
    </div>
  );
};

export default GrateClient;
