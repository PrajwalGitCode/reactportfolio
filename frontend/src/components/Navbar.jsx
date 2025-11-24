// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import resume from "../images/resume.pdf";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);

      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
          setActiveSection(section.getAttribute("id"));
        }
      });
      setScrolled(scrollTop > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navItems = ["home", "about", "education", "internships", "projects", "certifications"];

  return (
    <>
      <nav className="fixed w-full z-50 py-4 bg-gray-900/90 backdrop-blur-md shadow-xl transition-all duration-300">
        <div className="h-1 w-full bg-gray-800 absolute bottom-0 left-0">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-300 ease-out"
            style={{ width: `${scrollProgress}%` }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-between items-center">
            <div className="flex-shrink-0">
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("home");
                }}
                className="text-2xl font-bold text-white flex items-center group"
              >
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mr-1">{"</>"}</span>
                <span className="text-white group-hover:text-indigo-300 transition-colors duration-300">Prajwal T</span>
              </a>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item);
                  }}
                  className={`relative font-medium transition-all duration-300 py-2 ${activeSection === item
                    ? "text-indigo-400"
                    : "text-gray-300 hover:text-white"
                    }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                  {activeSection === item && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-indigo-400 rounded-full"></span>
                  )}
                </a>
              ))}

              <a
                href={resume}
                download
                className="px-4 py-2 border border-indigo-500 text-indigo-300 rounded-md font-medium hover:bg-indigo-500/10 hover:text-white transition-all duration-300 hover:scale-105"
              >
                Resume
              </a>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-white focus:outline-none p-2 transition-colors duration-300"
                aria-label="Toggle menu"
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center relative">
                  <span className={`bg-white h-0.5 w-6 rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
                  <span className={`bg-white h-0.5 w-6 rounded-full transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100 my-1'}`}></span>
                  <span className={`bg-white h-0.5 w-6 rounded-full transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className={`md:hidden absolute top-full left-0 w-full overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="bg-gray-900/95 backdrop-blur-xl border-t border-gray-800/50 px-4 py-3">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item);
                }}
                className={`block py-3 px-4 rounded-md my-1 transition-all duration-300 ${activeSection === item
                  ? "text-indigo-400 bg-indigo-500/10"
                  : "text-gray-300 hover:text-white hover:bg-gray-800/30"
                  }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
            <a
              href={resume}
              download
              className="block py-3 px-4 rounded-md my-1 text-center border border-indigo-500/50 text-indigo-300 hover:bg-indigo-500/10 hover:text-white transition-all duration-300 mt-2"
            >
              Download Resume
            </a>
          </div>
        </div>
      </nav>

      {/* Add space for fixed navbar - consistent height */}
      <div className="h-20"></div>

      {/* Mobile menu backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
}