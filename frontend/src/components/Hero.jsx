// src/components/Hero.jsx
import React, { useState, useEffect } from "react";
import "../App.css";
import AnimatedBackground from "./AnimatedBackground";
import "../styling/Hero.css";
import resume from "../images/resume.pdf";
import { FaLinkedin, FaGithub, FaDownload, FaCode, FaJava } from "react-icons/fa";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiPython,
  SiDjango,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiExpress,
  SiBootstrap,
} from "react-icons/si";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => setIsVisible(true), []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-16 bg-gray-950 text-white overflow-hidden"
    >
      <AnimatedBackground particleCount={170} />

      {/* Main Content */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center relative z-10">

        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="text-indigo-400 font-mono text-base sm:text-lg">
            Hi, my name is
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            Prajwal{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400">
              T
            </span>
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-300">
            I Build <span className="text-indigo-400">Scalable web applications</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-400 max-w-md leading-relaxed">
            Full-stack MERN developer specializing in building scalable, secure,
            and high-performance web applications with clean architecture and modern
            development practices.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href={resume}
              download
              className="px-5 sm:px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/30 flex items-center gap-2 group"
            >
              <FaDownload className="group-hover:animate-bounce" />
              <span>Resume</span>
            </a>

            <a
              href="#projects"
              className="px-5 sm:px-6 py-3 border border-gray-700 rounded-lg font-medium transition-all duration-300 hover:border-indigo-500 hover:text-indigo-400 flex items-center gap-2 group"
            >
              <FaCode className="group-hover:animate-pulse" />
              <span>View Projects</span>
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 text-2xl pt-4">
            <a
              href="https://www.linkedin.com/in/prajwal-t-2b2t/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-lg hover:bg-indigo-600 transition-colors duration-300 transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/PrajwalGitCode"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-lg hover:bg-indigo-600 transition-colors duration-300 transform hover:scale-110"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-gray-700/30 shadow-2xl">

            {/* Circle */}
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 mx-auto mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full p-1 animate-spin-slow">
                <div className="w-full h-full rounded-full bg-gray-900"></div>
              </div>

              {/* Floating Icons */}
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <SiReact className="floating-icon text-cyan-400 text-xl sm:text-2xl md:text-3xl floating-1" />
                <SiNodedotjs className="floating-icon text-green-500 text-xl sm:text-2xl md:text-3xl floating-2" />
                <SiMongodb className="floating-icon text-green-600 text-xl sm:text-2xl md:text-3xl floating-3" />
                <SiTailwindcss className="floating-icon text-sky-400 text-xl sm:text-2xl md:text-3xl floating-4" />
                <SiPython className="floating-icon text-blue-500 text-xl sm:text-2xl md:text-3xl floating-5" />
                <SiDjango className="floating-icon text-green-700 text-xl sm:text-2xl md:text-3xl floating-6" />
                <SiJavascript className="floating-icon text-yellow-400 text-xl sm:text-2xl md:text-3xl floating-7" />
                <FaJava className="floating-icon text-red-500 text-xl sm:text-2xl md:text-3xl floating-8" />
                <FaGithub className="floating-icon text-gray-300 text-xl sm:text-2xl md:text-3xl floating-9" />
                <SiHtml5 className="floating-icon text-orange-500 text-xl sm:text-2xl md:text-3xl floating-10" />
                <SiCss3 className="floating-icon text-blue-600 text-xl sm:text-2xl md:text-3xl floating-11" />
                <SiExpress className="floating-icon text-gray-300 text-xl sm:text-2xl md:text-3xl floating-12" />
                <SiBootstrap className="floating-icon text-purple-600 text-xl sm:text-2xl md:text-3xl floating-13" />
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-400 bg-gray-800/50 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full mx-auto w-max">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Currently working on exciting projects</span>
            </div>
          </div>

          {/* Glow blobs */}
          <div className="absolute -top-4 -right-4 w-20 sm:w-24 h-20 sm:h-24 bg-indigo-600/20 rounded-full blur-xl animate-pulse-slow z-[-1]"></div>
          <div className="absolute -bottom-4 -left-4 w-24 sm:w-32 h-24 sm:h-32 bg-purple-600/20 rounded-full blur-xl animate-pulse-medium z-[-1]"></div>
        </motion.div>
      </div>

      {/* Scroll Down */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center">
          <span className="text-xs sm:text-sm text-gray-400 mb-2">Scroll down</span>
          <div className="w-5 sm:w-6 h-9 sm:h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2.5 sm:h-3 bg-gray-400 rounded-full mt-2"
            ></motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

const motion = {
  div: ({ children, initial, animate, transition, className }) => (
    <div
      className={className}
      style={{
        opacity: initial?.opacity || 1,
        transform: `translateY(${initial?.y || 0}px) scale(${initial?.scale || 1})`,
        transition: `all ${transition?.duration || 0.3}s ease-out`,
      }}
    >
      {children}
    </div>
  ),
};
