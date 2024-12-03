import React from 'react';
import Image from 'next/image';

const GrateClient = () => {
  return (
    <div className="my-28">
      <div className="mb-16">
        <h1 className="text-2xl font-bold text-start">Our Great Clients</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5 md:gap-8 lg:gap-16 lg:ml-10 place-items-center">
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
