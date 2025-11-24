// src/components/Footer.jsx
import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaEnvelope,
  FaHeart,
  FaDownload,
} from "react-icons/fa";
import { SiReact, SiTailwindcss } from "react-icons/si";
import "../App.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [visits, setVisits] = React.useState(null);

  // Fetch unique visitor count
  React.useEffect(() => {
    fetch("/.netlify/functions/visitor-count")
      .then((res) => res.json())
      .then((data) => setVisits(data.count))
      .catch((err) => console.error("Visitor count error:", err));
  }, []);

  return (
    <footer className="bg-gray-900 text-white border-t border-gray-700/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Prajwal T
              </div>
            </div>

            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Full-stack developer passionate about creating innovative web
              solutions and delivering exceptional user experiences through
              modern technologies.
            </p>

            <div className="flex space-x-4">
              {[
                {
                  icon: <FaLinkedin className="w-5 h-5" />,
                  href: "https://www.linkedin.com/in/yourprofile",
                  label: "LinkedIn",
                  color: "hover:bg-indigo-600",
                },
                {
                  icon: <FaGithub className="w-5 h-5" />,
                  href: "https://github.com/yourgithub",
                  label: "GitHub",
                  color: "hover:bg-gray-700",
                },
                {
                  icon: <FaTwitter className="w-5 h-5" />,
                  href: "https://twitter.com/yourprofile",
                  label: "Twitter",
                  color: "hover:bg-blue-500",
                },
                {
                  icon: <FaEnvelope className="w-5 h-5" />,
                  href: "mailto:your.email@example.com",
                  label: "Email",
                  color: "hover:bg-red-500",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-gray-800/50 backdrop-blur-sm rounded-lg transition-all duration-300 transform hover:scale-110 ${social.color}`}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Navigation</h3>
            <ul className="space-y-3">
              {["Home", "About", "Projects", "Education", "Certifications", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center text-gray-300">
                <FaEnvelope className="w-4 h-4 mr-3 text-indigo-400 flex-shrink-0" />
                <span className="truncate">your.email@example.com</span>
              </div>

              <div className="flex items-center text-gray-300">
                <div className="w-4 h-4 mr-3 bg-indigo-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-2 h-2 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
                  </svg>
                </div>
                <span>Bangalore, India</span>
              </div>

              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 group"
              >
                <FaDownload className="w-4 h-4 mr-2" />
                Download Resume
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700/50 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">

          {/* Copyright */}
          <div className="flex items-center text-gray-300 text-sm">
            <span>© {currentYear} Made with</span>
            <FaHeart className="w-4 h-4 mx-2 text-red-500 animate-pulse" />
            <span>by Prajwal T</span>
          </div>

          {/* Privacy */}
          <div className="flex items-center space-x-6 text-sm text-gray-300">
            <a href="#privacy" className="hover:text-indigo-400 transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-indigo-400 transition-colors duration-300">
              Terms of Service
            </a>
          </div>

          {/* Tech */}
          <div className="flex items-center text-gray-300 text-sm gap-2">
            <span className="mr-2">Built with</span>
            <SiReact className="w-4 h-4 text-cyan-400" />
            <span>+</span>
            <SiTailwindcss className="w-4 h-4 text-sky-400" />
            <span>= 💖</span>
          </div>
        </div>

        {/* Unique Visitors */}
        <div className="mt-6 text-center text-gray-400 text-sm">
          Unique Visitors:{" "}
          <span className="text-indigo-400 font-semibold">
            {visits ?? "..."}
          </span>
        </div>
      </div>
    </footer>
  );
}
