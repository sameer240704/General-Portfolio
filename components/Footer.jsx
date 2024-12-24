"use client";

import { MapPin } from "lucide-react";
import India from "@/public";
import Image from "next/image";
import { socialLinks } from "@/constants/footerData";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const FooterButton = ({ isOpen, toggleOpen }) => {
  return (
    <button
      onClick={toggleOpen}
      className={`relative z-20 rounded-full p-4 transition-all duration-300 transform w-16 h-16 flex items-center justify-center bg-purple-500 hover:bg-purple-600`}
      aria-label="Toggle social links"
    >
      <svg
        viewBox="0 0 100 100"
        className={`absolute inset-0 w-full h-full ${
          isOpen ? "" : "animate-rotate"
        }`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <path
            id="circlePath"
            d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
          />
        </defs>
        <text
          className="text-sm font-bold text-white"
          fill="currentColor"
          dy="5"
        >
          <textPath xlinkHref="#circlePath" textLength="250" startOffset="0">
            Connect • Connect • Connect • Connect •
          </textPath>
        </text>
      </svg>
    </button>
  );
};

const SocialLink = ({ link, icon, label, index, isOpen }) => {
  const [isGlitching, setIsGlitching] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const offsetX = (index + 1) * -65;

  const handleMouseEnter = () => {
    setIsGlitching(true);
    setIsHovered(true);
    setTimeout(() => {
      setIsGlitching(false);
    }, 500);
  };

  const handleMouseLeave = () => {
    setIsGlitching(false);
    setIsHovered(false);
  };

  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`absolute w-12 h-12 flex items-center justify-center
        rounded-full transition-all duration-500
        ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[60px]"}
      `}
      style={{
        transform: isOpen ? `translateX(${offsetX}px)` : "translateX(0px)",
        transitionDelay: `${index * 100}ms`,
      }}
      aria-label={label}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span
        className={`relative text-xl transition-all duration-300 ${
          isGlitching
            ? "text-white"
            : isHovered
            ? "text-purple-500"
            : "text-white"
        }`}
      >
        {icon}
      </span>
      {isGlitching && (
        <>
          <span className="absolute inset-0 flex items-center justify-center text-xl text-cyan-400 animate-glitch-cyan pointer-events-none">
            {icon}
          </span>
          <span className="absolute inset-0 flex items-center justify-center text-xl text-pink-400 animate-glitch-pink pointer-events-none">
            {icon}
          </span>
          <span className="absolute inset-0 flex items-center justify-center text-xl text-purple-200 animate-glitch-yellow pointer-events-none">
            {icon}
          </span>
        </>
      )}
    </Link>
  );
};

const NavigationBar = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    // Initial animation after component mount
    const initialDelay = setTimeout(() => {
      setIsAnimating(true);

      // Reset after 1 second (animation duration)
      setTimeout(() => {
        setIsAnimating(false);
      }, 1000);
    }, 1400); // Match the initial slideUp animation delay

    // Set up the repeating interval
    const intervalId = setInterval(() => {
      setIsAnimating(true);

      // Reset after 1 second (animation duration)
      setTimeout(() => {
        setIsAnimating(false);
      }, 1000);
    }, 10000); // Repeat every 10 seconds

    // Cleanup
    return () => {
      clearTimeout(initialDelay);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div
      className="opacity-0 group"
      style={{
        animation: "slideUp 1s ease-out forwards",
        animationDelay: "1.4s",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="relative w-12 h-12 flex items-center justify-center">
        <div className="grid grid-cols-2 gap-1 rotate-45">
          <div
            className={`block-1 w-3 h-3 bg-white rounded-[.2rem] ${
              isAnimating || hover ? "animate-block-1" : ""
            }`}
          ></div>
          <div
            className={`block-2 w-3 h-3 bg-white rounded-[.2rem] ${
              isAnimating || hover ? "animate-block-2" : ""
            }`}
          ></div>
          <div
            className={`block-3 w-3 h-3 bg-white rounded-[.2rem] ${
              isAnimating || hover ? "animate-block-3" : ""
            }`}
          ></div>
          <div
            className={`block-4 w-2 h-2 bg-purple-500 rounded-[.1rem] ${
              isAnimating || hover ? "animate-block-4" : ""
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="absolute w-full flex flex-col justify-center items-center bottom-5 text-white font-montserrat px-24 py-8 max-sm:py-12">
      <NavigationBar />

      <div
        className="w-full flex justify-between items-center opacity-0"
        style={{
          animation: "slideUp 1s ease-out forwards",
          animationDelay: "1.8s",
        }}
      >
        <div className="flex items-center font-light">
          <MapPin className="mr-2 text-lg" />
          <div className="text-base sm:text-lg flex items-baseline gap-x-1.5">
            Located in{" "}
            <span className="relative font-bold text-purple-500 hover:bg-none">
              India
              <Image
                className="h-14 w-auto absolute inset-0 z-10 opacity-0 -top-3 transition-opacity hover:opacity-100"
                src={India}
                alt="India"
              />
            </span>
          </div>
        </div>

        <div className="relative isolate flex justify-center items-center">
          <FooterButton isOpen={isOpen} toggleOpen={() => setIsOpen(!isOpen)} />
          <div className="absolute inset-0 flex items-center justify-center">
            {socialLinks.map((link, index) => (
              <SocialLink
                key={link.label}
                {...link}
                index={index}
                isOpen={isOpen}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
