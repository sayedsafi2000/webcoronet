"use client"
import React from "react";
import Link from "next/link";
import { FaTwitter, FaFacebook, FaDribbble, FaYoutube } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { AlarmClock, HomeIcon, MailIcon, PhoneCallIcon } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#100f14] text-white mt-64 lg:mt-28">
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 py-20">
        {/* Left Section */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-white"><span className="bg-white text-black pl-4 py-3">Web </span>Coronet</h1>
          </div>
          <div className="flex gap-4 text-xl">
            <Link href="#">
              <FaTwitter />
            </Link>
            <Link href="#">
              <FaFacebook />
            </Link>
            <Link href="#">
              <FaDribbble />
            </Link>
            <Link href="#">
              <FaYoutube />
            </Link>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="footer-heading">Contact Info</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-2">
              <a href="Shahjalal Tower, Payra, Amborkhana, Sylhet" className="inline-block footer-p"><HomeIcon /></a>
              Shahjalal Tower, Payra, Amborkhana, Sylhet
            </li>
            <li className="flex items-center gap-2">
              <a href="https://map.google.com/Sylhet, Bangladesh" className="inline-block footer-p"><AlarmClock /></a>
              Sylhet, Bangladesh
            </li>
            <li className="flex items-center gap-2">
              <a href="https://mail.google.com/mail-info@webcoronet.com" className="inline-block footer-p"><MailIcon /></a>
              <a href="mailto:mail-info@webcoronet.com" className="hover:underline">
                mail-info@webcoronet.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <a href="+8801759231288" className="inline-block footer-p"><PhoneCallIcon /></a>
              +8801759231288
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <h3 className="footer-heading">Support & Downloads</h3>
          <p className="footer-p">
            For any support or inquiries, please contact us at support@webcoronet.com. You can also download our app from the App Store or Google Play.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="w-32 h-12">
              <Image
                height={100}
                width={100}
                src="/app-store.jpg"
                alt="App Store"
                className="w-full h-full"
              />
            </Link>
            <Link href="#">
              <Image
                height={100}
                width={100}
                src="/google-play.png"
                alt="Google Play"
                className="w-full h-full"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 bg-black py-6 text-center text-sm">
      Copyright: © 2024 Web Coronet. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
