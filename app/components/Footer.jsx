"use client"
import React from "react";
import Link from "next/link";
import { FaTwitter, FaFacebook, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { AlarmClock, HomeIcon, MailIcon, PhoneCallIcon } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#100f14] text-white mt-32 md:mt-48 lg:mt-28">
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-4 md:px-6 py-12 md:py-16 lg:py-20">
        {/* Left Section */}
        <div className="space-y-4 md:space-y-6">
          <div>
            <Link href="/" className="flex items-center group">
              <Image 
                src="/logo.png" 
                alt="Web Coronet Logo" 
                width={160} 
                height={55}
                className="h-10 md:h-12 lg:h-14 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
          </div>
          <div className="flex gap-3 md:gap-4 text-lg md:text-xl">
            <Link 
              href="/" 
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter />
            </Link>
            <Link 
              href="https://www.facebook.com/profile.php?id=61582159036502" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <FaFacebook />
            </Link>
            <Link 
              href="https://wa.me/8801759231288" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </Link>
            <Link 
              href="https://www.youtube.com/@AsadSnapper" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="YouTube"
            >
              <FaYoutube />
            </Link>
          </div>
        </div>

        <div className="space-y-4 md:space-y-6">
          <h3 className="footer-heading text-lg md:text-xl lg:text-2xl">Contact Info</h3>
          <ul className="space-y-3 md:space-y-4 text-xs sm:text-sm">
            <li className="flex items-start gap-2 md:gap-3">
              <HomeIcon className="w-4 h-4 md:w-5 md:h-5 text-gray-400 flex-shrink-0 mt-0.5" />
              <span className="text-gray-300 break-words">ABC Point, Uposohor, Sylhet</span>
            </li>
            <li className="flex items-center gap-2 md:gap-3">
              <MailIcon className="w-4 h-4 md:w-5 md:h-5 text-gray-400 flex-shrink-0" />
              <a href="mailto:info@webcoronet.com" className="text-gray-300 hover:text-white hover:underline transition-colors break-all text-xs sm:text-sm">
                info@webcoronet.com
              </a>
            </li>
            <li className="flex items-center gap-2 md:gap-3">
              <PhoneCallIcon className="w-4 h-4 md:w-5 md:h-5 text-gray-400 flex-shrink-0" />
              <a href="tel:+8801759231288" className="text-gray-300 hover:text-white hover:underline transition-colors text-xs sm:text-sm">
                +880 1759-231288
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-4 md:space-y-6">
          <h3 className="footer-heading text-lg md:text-xl lg:text-2xl">Support & Downloads</h3>
          <p className="footer-p text-gray-300 text-xs sm:text-sm md:text-base">
            For any support or inquiries, please contact us at info@webcoronet.com. You can also download our app from the App Store or Google Play.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
            <Link 
              href="#" 
              className="inline-block transition-transform hover:scale-105"
              aria-label="Download on App Store"
            >
              <Image
                height={40}
                width={120}
                src="/app-store.jpg"
                alt="Download on App Store"
                className="h-8 md:h-10 w-auto object-contain"
              />
            </Link>
            <Link 
              href="#" 
              className="inline-block transition-transform hover:scale-105"
              aria-label="Get it on Google Play"
            >
              <Image
                height={40}
                width={135}
                src="/google-play.png"
                alt="Get it on Google Play"
                className="h-8 md:h-10 w-auto object-contain"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-6 md:mt-8 bg-black py-4 md:py-6 text-center text-xs sm:text-sm">
      Copyright: © 2024 Web Coronet. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
