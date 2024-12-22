"use client";

import { MapPin } from "lucide-react";
import India from "@/public";
import Image from "next/image";
import { socialLinks } from "@/constants/footerData";
import React, { useState } from "react";

const FooterButton = ({ isOpen, toggleOpen }) => {
  return (
    <button
      onClick={toggleOpen}
      className={`relative z-20 rounded-full p-4 transition-all duration-300 transform hover:scale-110 w-16 h-16 flex items-center justify-center bg-purple-500 hover:bg-purple-600`}
      aria-label="Toggle social links"
    >
      {!isOpen && (
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 w-full h-full animate-rotate"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <path
              id="circlePath"
              d="M 50, 50
                   m -40, 0
                   a 40,40 0 1,1 80,0
                   a 40,40 0 1,1 -80,0"
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
      )}

      {isOpen && (
        <span
          className={`text-3xl font-bold transition-transform duration-500 ${
            isOpen ? "scale-125" : "scale-100"
          }`}
        >
          ×
        </span>
      )}
    </button>
  );
};

const SocialLink = ({ href, icon, label, index, isOpen }) => {
  const angle = (360 / socialLinks.length) * index;
  const radius = 80;
  const x = radius * Math.cos((angle * Math.PI) / 180);
  const y = radius * Math.sin((angle * Math.PI) / 180);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`absolute w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-500 transform ${
        isOpen ? "opacity-100 scale-100" : "opacity-0 scale-0"
      } hover:scale-110 hover:shadow-2xl`}
      style={{
        transform: isOpen ? `translate(${x}px, ${y}px)` : "translate(0, 0)",
        transitionDelay: `${index * 100}ms`,
      }}
      aria-label={label}
    >
      <span className="text-lg">{icon}</span>
    </a>
  );
};

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-[10%] w-full flex flex-col justify-center items-center text-white font-montserrat relative px-4 py-8 sm:py-12">
      <div className="w-full flex justify-between items-center">
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
