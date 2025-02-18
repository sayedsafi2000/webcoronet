"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Nav from "./Nav";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { FaDribbble, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
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
          isScrolled
            ? "bg-white bg-opacity-80 backdrop-blur-lg shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center py-6 px-4 xl:py-8 xl:px-12">
          {/* Logo */}
          <Link href="/">
            <h1 className="text-2xl xl:text-4xl font-semibold">
              <span className="text-white bg-black py-2 pl-6">Web </span>Coronet
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-8">
            <Nav />
          </div>

          {/* Desktop navigation with drawer */}
          <div className="hidden xl:block relative">
            <button onClick={toggleDrawer} className="p-3 bg-black text-white">
              <RxHamburgerMenu className="text-white text-2xl" />
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="xl:hidden">
            <button onClick={toggleMobileNav} className="p-3 bg-black text-white">
              <RxHamburgerMenu className="text-white text-2xl" />
            </button>

            {/* Mobile nav menu */}
            <div
              className={`fixed top-0 right-0 w-3/5 h-full shadow-lg lg:p-4 flex flex-col bg-white transform transition-transform duration-300 z-50 ${
                isMobileNavOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <div className="flex justify-between items-center mb-6">
                <Link href="/">
                  <h1 className="text-xl font-semibold">
                    <span className="text-black">Web </span>Coroner
                  </h1>
                </Link>
                <button onClick={closeMobileNav}>
                  <AiOutlineClose className="text-2xl" />
                </button>
              </div>
              <div className="flex-grow">
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

      {/* /* Drawer */}
        <div
          className={`fixed top-0 right-0 bg-black w-3/12 h-full shadow-lg flex flex-col transform transition-transform duration-500 ease-in-out z-50 ${
            isDrawerOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end p-4">
            <button onClick={toggleDrawer}>
          <AiOutlineClose className="text-2xl text-white" />
            </button>
          </div>
          <div className="flex flex-col flex-grow px-16 py-20 gap-6 text-white">
            <h3>
          <span className="bg-white text-black pl-10 py-2">Web</span>Coronet
            </h3>
            <p>Welcome to Web Coronet, your go-to source for web development insights.</p>
            <div className="flex gap-10">
          <Link href="https://www.twitter.com">
            <FaTwitter className="text-white hover:text-gray-500" />
          </Link>
          <Link href="https://www.facebook.com">
            <FaFacebook className="text-white hover:text-gray-500" />
          </Link>
          <Link href="https://www.dribbble.com">
            <FaDribbble className="text-white hover:text-gray-500" />
          </Link>
          <Link href="https://www.youtube.com">
            <FaYoutube className="text-white hover:text-gray-500" />
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
