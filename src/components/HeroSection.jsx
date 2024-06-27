import React, { useState, useEffect } from "react";
import "./HeroSection.css";
import logo from "../assets/logoi.png";
import pic1 from "../assets/build.jpg";
import pic2 from "../assets/drive.jpg";
import pic3 from "../assets/music.jpg";
import pic4 from "../assets/oil.jpg";
import logo1 from "../assets/3.png";
import logo2 from "../assets/1.png";
import logo3 from "../assets/2.png";
import logo4 from "../assets/found.png";

const phrases = [
  "A Transportation & Logistics",
  "A Foundation",
  "An Oil & Gas",
  "An Entertainment and Production",
];

const HeroSection = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = phrases[currentPhraseIndex];
      setDisplayedText(
        isDeleting
          ? currentPhrase.substring(0, displayedText.length - 1)
          : currentPhrase.substring(0, displayedText.length + 1),
      );

      if (!isDeleting && displayedText === currentPhrase) {
        setIsDeleting(true);
        setTypingSpeed(100);
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setTypingSpeed(150);
      }
    };

    const typingTimeout = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingTimeout);
  }, [displayedText, isDeleting, currentPhraseIndex, typingSpeed]);

  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <img
        src={logo}
        alt="S.G. Multi-National Investment Ltd Logo"
        className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto mb-8"
      />
      <p className="mt-10 text-2xl sm:text-4xl lg:text-5xl text-center text-neutral-500 max-w-4xl">
        <span className="bg-gradient-to-r from-blue-800 to-red-500 text-transparent bg-clip-text">
          {displayedText}
        </span>
        <span className="blink-cursor">|</span>
        Company.
      </p>
      {/* <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-blue-500 to-blue-800 py-3 px-4 mx-3 rounded-md"
        >
          Transform Your Business
        </a>
      </div> */}
      <div className="flex flex-col md:flex-row mt-10 justify-center md:space-x-4 space-y-4 md:space-y-0">
        <div className="relative w-full md:w-1/2">
          <img
            src={pic1}
            alt="pic1"
            className="rounded-lg w-full border border-blue-700 shadow-blue-400"
          />
          <img
            src={logo4}
            alt="Logo"
            className="absolute bottom-4 left-4 w-18 h-10"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <a
              href="https://sgmultinational.com/sgfoundation"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-3 text-lg rounded hover:bg-blue-700"
            >
              Go to 
            </a>
          </div>
        </div>
        <div className="relative w-full md:w-1/2">
          <img
            src={pic2}
            alt="pic2"
            className="rounded-lg w-full border border-blue-700 shadow-blue-400"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <a
              href="https://www.sgmultinational.com/sgtransport"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-3 text-lg rounded hover:bg-blue-700"
            >
              Go to Website
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row mt-10 justify-center md:space-x-4 space-y-4 md:space-y-0">
        <div className="relative w-full md:w-1/2">
          <img
            src={pic3}
            alt="pic1"
            className="rounded-lg w-full border border-blue-700 shadow-blue-400"
          />
          <img
            src={logo1}
            alt="Logo"
            className="absolute top-4 right-4 w-16 h-16"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <a
              href="https://www.sgmultinational.com/sgentertainment"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-3 text-lg rounded hover:bg-blue-700"
            >
              Go to Website
            </a>
          </div>
        </div>
        <div className="relative w-full md:w-1/2">
          <img
            src={pic4}
            alt="pic2"
            className="rounded-lg w-full border border-blue-700 shadow-blue-400"
          />
          <img
            src={logo3}
            alt="Logo"
            className="absolute top-4 right-4 w-16 h-16"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <a
              href="https://www.sgmultinational.com/sgoilandgas"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-3 text-lg rounded hover:bg-blue-700"
            >
              Go to Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
