import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaHeart, FaCode, FaDownload } from "react-icons/fa";
import { SiReact, SiTailwindcss } from "react-icons/si";
import "../App.css"
import resume from "../images/resume.pdf";
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white border-t border-gray-700/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 relative z-10">

        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center mb-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Prajwal T
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Full-stack developer passionate about creating innovative web solutions
              and delivering exceptional user experiences through modern technologies.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4">
              {[
                { icon: <FaLinkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/prajwal-t-2b2t/", label: "LinkedIn", color: "hover:bg-indigo-600" },
                { icon: <FaGithub className="w-5 h-5" />, href: "https://github.com/PrajwalGitCode", label: "GitHub", color: "hover:bg-gray-700" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-gray-800 rounded-lg transition-all duration-300 transform hover:scale-105 ${social.color}`}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden lg:block"> </div>
          <div className="md:text-right md:pt-2">
            <h3 className="text-lg font-semibold mb-6 text-white md:float-right">Get in Touch</h3>
            <div className="clear-both space-y-4 md:float-right md:max-w-xs md:text-left">
              <div className="flex items-center text-gray-400 md:justify-end md:text-right">
                <span className="truncate">tprajwal3001@gmail.com</span>
                <FaEnvelope className="w-4 h-4 ml-3 text-indigo-400 flex-shrink-0" />
              </div>
              <div className="flex items-center text-gray-400 md:justify-end md:text-right">
                <span>Bangalore, India</span>
                <div className="w-4 h-4 ml-3 bg-indigo-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
                  </svg>
                </div>
              </div>

              <a
                href={resume}
                download
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 group mt-6"
              >
                <FaDownload className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                Download Resume
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700/50 my-10"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm">
          <div className="flex items-center text-gray-400">
            <span>© {currentYear} Made with</span>
            <FaHeart className="w-4 h-4 mx-2 text-red-500 animate-pulse" />
            <span>by Prajwal T</span>
          </div>

          <div className="flex items-center text-gray-400">
            <span className="mr-2">Built with</span>
            <SiReact className="w-4 h-4 text-cyan-400 mx-1" />
            <span className="mx-1">+</span>
            <SiTailwindcss className="w-4 h-4 text-sky-400 mx-1" />
            <span className="ml-2">= 💖</span>
          </div>
        </div>
      </div>
    </footer>
  );
}