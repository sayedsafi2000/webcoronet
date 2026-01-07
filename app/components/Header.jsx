"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Nav from "./Nav";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { FaWhatsapp, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from "@/public/logo.png";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    // Set initial scroll state
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const closeMobileNav = () => {
    setIsMobileNavOpen(false);
  };

  return (
    <>
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          mounted && isScrolled
            ? "bg-base-100  backdrop-blur-lg shadow-md"
            : "bg-transparent"
        }`}
        suppressHydrationWarning
      >
        <div className="w-full max-w-screen-5xl mx-auto flex justify-between items-center py-4 px-6 md:px-8 lg:px-12 xl:px-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
            <Image 
              src={logo} 
              alt="Web Coronet Logo" 
              width={300} 
              height={55}
              quality={100}
              className="h-9 xl:h-12 w-auto transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-10 flex-1 justify-center px-8">
            <Nav />
          </div>

          {/* Desktop navigation with drawer */}
          <div className="hidden xl:block relative flex-shrink-0">
            <button 
              onClick={toggleDrawer} 
              className="p-2.5 bg-black text-white rounded-md hover:bg-gray-800 transition-colors duration-200"
              aria-label="Open menu"
            >
              <RxHamburgerMenu className="text-white text-xl" />
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="xl:hidden flex-shrink-0">
            <button 
              onClick={toggleMobileNav} 
              className="p-2.5 bg-black text-white rounded-md hover:bg-gray-800 transition-colors duration-200"
              aria-label="Open mobile menu"
            >
              <RxHamburgerMenu className="text-white text-xl" />
            </button>

            {/* Mobile nav menu */}
            <div
              className={`fixed top-0 right-0 w-3/5 h-full shadow-2xl flex flex-col bg-white transform transition-transform duration-300 z-50 ${
                isMobileNavOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <div className="flex justify-between items-center p-6 border-b border-gray-200">
                <Link href="/" className="flex items-center gap-1.5 group" onClick={closeMobileNav}>
                  <Image 
                    src="/logo.png" 
                    alt="Web Coronet Logo" 
                    width={100} 
                    height={35}
                    className="h-7 w-auto"
                  />
                  <span className="text-base font-bold uppercase tracking-wide bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent">
                    WEBCORONET
                  </span>
                </Link>
                <button 
                  onClick={closeMobileNav}
                  className="p-2 hover:bg-gray-100 rounded-md transition-colors"
                  aria-label="Close menu"
                >
                  <AiOutlineClose className="text-2xl text-gray-700" />
                </button>
              </div>
              <div className="flex-grow overflow-y-auto p-6">
                <Nav />
              </div>
            </div>

            {/* Background overlay */}
            {isMobileNavOpen && (
              <div
                className="fixed inset-0 bg-black bg-opacity-50 z-40"
                onClick={closeMobileNav}
              ></div>
            )}
          </div>
        </div>
      </header>

      {/* Desktop Drawer */}
        <div
          className={`fixed top-0 right-0 bg-black w-3/12 h-full shadow-2xl flex flex-col transform transition-transform duration-500 ease-in-out z-50 ${
            isDrawerOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center p-6 border-b border-gray-800">
            <Link href="/" className="flex items-center gap-1.5" onClick={toggleDrawer}>
              <Image 
                src="/logo.png" 
                alt="Web Coronet Logo" 
                width={100} 
                height={35}
                className="h-7 w-auto brightness-0 invert"
              />
              <span className="text-base font-bold uppercase tracking-wide text-white">
                WEBCORONET
              </span>
            </Link>
            <button 
              onClick={toggleDrawer}
              className="p-2 hover:bg-gray-800 rounded-md transition-colors"
              aria-label="Close drawer"
            >
              <AiOutlineClose className="text-2xl text-white" />
            </button>
          </div>
          <div className="flex flex-col flex-grow px-8 py-12 gap-8 text-white">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                <span className="bg-white text-black px-4 py-2">Web</span>
                <span className="ml-2">Coronet</span>
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Welcome to Web Coronet, your go-to source for web development insights and digital solutions.
              </p>
            </div>
            <div className="flex gap-6">
              <Link 
                href="/" 
                className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter className="text-white text-xl" />
              </Link>
              <Link 
                href="https://www.facebook.com/profile.php?id=61582159036502" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook className="text-white text-xl" />
              </Link>
              <Link 
                href="https://wa.me/8801759231288" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="text-white text-xl" />
              </Link>
              <Link 
                href="https://www.youtube.com/@AsadSnapper" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors"
                aria-label="YouTube"
              >
                <FaYoutube className="text-white text-xl" />
              </Link>
            </div>
          </div>
        </div>

        {/* Background overlay for Drawer */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleDrawer}
        ></div>
      )}
    </>
  );
};

export default Header;
