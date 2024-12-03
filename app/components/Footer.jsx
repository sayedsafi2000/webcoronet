"use client"
import React from "react";
import Link from "next/link";
import { FaTwitter, FaFacebook, FaDribbble, FaYoutube } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { AlarmClock, HomeIcon, MailIcon, PhoneCallIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#100f14] text-white mt-64 lg:mt-28">
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 py-20">
        {/* Left Section */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-white"><span className="bg-white text-black pl-4 py-3">Web </span>Coronet</h1>
          </div>
          <p className="footer-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque actraqum nun nolor sit amet augue dolor.
          </p>
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

        {/* Center Section */}
        <div className="space-y-6">
          <h3 className="footer-heading">Contact Info</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-2">
              <a href="https://map.google.com/198 West 21th Street 721" className="inline-block footer-p"><HomeIcon/></a>
              198 West 21th Street 721
            </li>
            <li className="flex items-center gap-2">
              <a href="https://map.google.com/New York, NY 10010" className="inline-block footer-p"><AlarmClock/></a>
              New York, NY 10010
            </li>
            <li className="flex items-center gap-2">
              <a href="https://mail.google.com/qi22@example.com" className="inline-block footer-p"><MailIcon/></a>
              <a href="mailto:qi22@example.com" className="hover:underline">
                qi22@example.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <a href="+88 (0) 101 0000 000" className="inline-block footer-p"><PhoneCallIcon/></a>
              +88 (0) 101 0000 000
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="space-y-6">
          <h3 className="footer-heading">Support & Downloads</h3>
          <p className="footer-p">
            Quisque actraqum nunc no dolor sit amaugue dolor. Lorem ipsum smorom asdconsyect etur adipiscing elit.
          </p>
          <div className="flex gap-4">
            <Link href="#">
              <img
                src="/images/app-store.png"
                alt="App Store"
                className="w-32"
              />
            </Link>
            <Link href="#">
              <img
                src="/images/google-play.png"
                alt="Google Play"
                className="w-32"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 bg-black py-6 text-center text-sm">
        © 2021 Qode Interactive, All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
