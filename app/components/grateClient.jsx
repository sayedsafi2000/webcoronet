import React from 'react';
import Image from 'next/image';

const GrateClient = () => {
  return (
    <div className="my-16 md:my-24 lg:my-28">
      <div className="mb-8 md:mb-12 lg:mb-16">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-start">Our Great Clients</h1>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6 lg:gap-8 xl:gap-16 lg:ml-10 place-items-center">
        {[
          "/client-img-1.png",
          "/client-img-2.png",
          "/client-img-3.png",
          "/clients-img-4.png",
          "/clients-img-5.png",
          "/clients-img-6.png",
          "/clients-img-13.png",
          "/clients-img-14.png",
          "/clients-img-15.png",
          "/clients-img-16.png",
          "/clients-img-17.png",
          "/clients-img-18.png",
          "/client-img-1.png",
          "/client-img-2.png",
          "/client-img-3.png",
          "/clients-img-4.png",
          "/clients-img-5.png",
          "/clients-img-6.png",
        ].map((src, index) => (
          <div key={index} className="relative overflow-hidden w-full flex items-center animation ">
            <Image
              src={src}
              className=" w-20 hover-image cursor-pointer mx-auto"
              width={1000}
              height={1000}
              alt={`Client ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GrateClient;
