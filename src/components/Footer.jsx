// src/components/Footer.jsx
import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaHeart, FaCode } from "react-icons/fa";
import { SiReact, SiTailwindcss } from "react-icons/si";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white border-t border-gray-700/50">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center mb-4">
                            <div className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                                Prajwal T
                            </div>
                        </div>
                        <p className="text-gray-300 mb-6 max-w-md">
                            Full-stack developer passionate about creating innovative web solutions
                            and delivering exceptional user experiences through modern technologies.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="https://www.linkedin.com/in/yourprofile"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-gray-800 rounded-lg hover:bg-indigo-600 transition-all duration-300 transform hover:scale-110"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin className="w-5 h-5" />
                            </a>
                            <a
                                href="https://github.com/yourgithub"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-110"
                                aria-label="GitHub"
                            >
                                <FaGithub className="w-5 h-5" />
                            </a>
                            <a
                                href="https://twitter.com/yourprofile"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-gray-800 rounded-lg hover:bg-blue-500 transition-all duration-300 transform hover:scale-110"
                                aria-label="Twitter"
                            >
                                <FaTwitter className="w-5 h-5" />
                            </a>
                            <a
                                href="mailto:your.email@example.com"
                                className="p-3 bg-gray-800 rounded-lg hover:bg-red-500 transition-all duration-300 transform hover:scale-110"
                                aria-label="Email"
                            >
                                <FaEnvelope className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">Navigation</h3>
                        <ul className="space-y-3">
                            {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a
                                        href={`#${item.toLowerCase()}`}
                                        className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 flex items-center"
                                    >
                                        <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">Get in Touch</h3>
                        <div className="space-y-3">
                            <div className="flex items-center text-gray-300">
                                <FaEnvelope className="w-4 h-4 mr-3 text-indigo-400" />
                                <span>your.email@example.com</span>
                            </div>
                            <div className="flex items-center text-gray-300">
                                <div className="w-4 h-4 mr-3 bg-indigo-400 rounded-full flex items-center justify-center">
                                    <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
                                    </svg>
                                </div>
                                <span>Bangalore, India</span>
                            </div>
                            <a
                                href="/resume.pdf"
                                download
                                className="inline-flex items-center mt-4 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-500 hover:to-purple-500 transition-all duration-300"
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
                    <div className="flex items-center text-gray-300 text-sm">
                        <span>© {currentYear} Made with</span>
                        <FaHeart className="w-4 h-4 mx-2 text-red-500 animate-pulse" />
                        <span>by Prajwal T</span>
                    </div>

                    <div className="flex items-center space-x-6 text-sm text-gray-300">
                        <a href="#privacy" className="hover:text-indigo-400 transition-colors duration-300">
                            Privacy Policy
                        </a>
                        <a href="#terms" className="hover:text-indigo-400 transition-colors duration-300">
                            Terms of Service
                        </a>
                    </div>

                    <div className="flex items-center text-gray-300 text-sm">
                        <span className="mr-2">Built with</span>
                        <SiReact className="w-4 h-4 text-cyan-400 mx-1" />
                        <span className="mx-1">+</span>
                        <SiTailwindcss className="w-4 h-4 text-sky-400 mx-1" />
                        <span className="ml-2">= 💖</span>
                    </div>
                </div>
            </div>

            {/* Floating CTA */}
            <div className="fixed bottom-6 right-6 z-40">
                <a
                    href="#contact"
                    className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full shadow-2xl hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-110 group"
                    aria-label="Get in touch"
                >
                    <FaEnvelope className="w-6 h-6 group-hover:animate-bounce" />
                </a>
            </div>
        </footer>
    );
}

// Download icon component
const FaDownload = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
);