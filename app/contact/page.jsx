import React from 'react';
import Heading from '../components/heading/heading';

const Contact = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-16">
            <Heading title="Get in touch with us" subTitle="Let`s Collaborate" />
            <div className="w-full max-w-7xl flex flex-col md:flex-col lg:flex-row gap-10 lg:gap-12 xl:gap-40 lg:items-start ">
                {/* Left Section */}
                <div >
                    <form className="space-y-8 ">
                        <div className="relative">
                            <label
                                htmlFor="name"
                                className="absolute text-[12px] text-gray-600 transform -translate-y-3 left-2 px-1 uppercase space-x-1 tracking-[4px]"
                            >
                                Your Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                className="w-full lg:w-[700px] border-b border-gray-300 focus:border-black focus:outline-none py-5 mb-10 bg-transparent"
                            />
                        </div>
                        <div className="relative">
                            <label
                                htmlFor="email"
                                className="absolute text-[12px] text-gray-600 transform -translate-y-3 left-2 px-1 uppercase space-x-1 tracking-[4px]"
                            >
                                Your Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                className="w-full lg:w-[700px] border-b border-gray-300 focus:border-black focus:outline-none py-5 mb-10 bg-transparent"
                            />
                        </div>
                        <div className="relative">
                            <label
                                htmlFor="project"
                                className="absolute text-[12px] text-gray-600 transform -translate-y-3 left-2 px-1 uppercase space-x-1 tracking-[4px]"
                            >
                                Tell us about your project
                            </label>
                            <textarea
                                id="project"
                                rows="4"
                                className="w-full lg:w-[700px] border-b border-gray-300 focus:border-black focus:outline-none py-5 mb-10 bg-transparent"
                            ></textarea>
                        </div>
                        <button className=" text-[15px] text-black font-semibold hover:text-gray-700  tracking-wide ">
                            Send a Message
                        </button>
                    </form>
                </div>

                {/* Right Section */}
                <div className="space-y-8 w-full lg:w-[480px] ">
                    <div>
                        <h2 className="text-3xl text-black mb-2 ">
                            Or just say hello:
                        </h2>
                        <p className="text-gray-600">mail-info@webcoronet.com</p>
                    </div>
                    <div>
                        <h2 className="text-lg text-black mb-2">
                            Our office in Bangladesh
                        </h2>
                        <address className="text-gray-600 not-italic">
                            198 West 21th Street, Suite 721 <br />
                            New York, NY 10010
                        </address>
                        <p className="text-gray-600 mt-2">coronet.com</p>
                        <p className="text-gray-600">+88 (0) 101 0000 000</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
