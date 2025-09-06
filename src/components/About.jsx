// src/components/About.jsx
import React from "react";
import "../styling/About.css";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiPython,
  SiDjango,
  SiBootstrap,
} from "react-icons/si";
import { FaJava, FaGithub } from "react-icons/fa";

export default function About() {
  const skills = [
    { name: "React", icon: <SiReact className="text-cyan-400 text-4xl" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-green-500 text-4xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-4xl" /> },
    { name: "Express", icon: <SiExpress className="text-gray-300 text-4xl" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-4xl" /> },
    { name: "HTML5", icon: <SiHtml5 className="text-orange-500 text-4xl" /> },
    { name: "CSS3", icon: <SiCss3 className="text-blue-500 text-4xl" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400 text-4xl" /> },
    { name: "Python", icon: <SiPython className="text-blue-500 text-4xl" /> },
    { name: "Django", icon: <SiDjango className="text-green-700 text-4xl" /> },
    { name: "Java", icon: <FaJava className="text-red-500 text-4xl" /> },
    { name: "GitHub", icon: <FaGithub className="text-gray-300 text-4xl" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600 text-4xl" /> },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              width: Math.floor(Math.random() * 4) + 2 + 'px',
              height: Math.floor(Math.random() * 4) + 2 + 'px',
              top: Math.floor(Math.random() * 100) + '%',
              left: Math.floor(Math.random() * 100) + '%',
              backgroundColor: i % 3 === 0
                ? 'rgba(99, 102, 241, 0.5)'
                : i % 3 === 1
                  ? 'rgba(139, 92, 246, 0.5)'
                  : 'rgba(236, 72, 153, 0.5)',
              animationDuration: `${Math.floor(Math.random() * 15) + 10}s`,
              animationDelay: `${Math.floor(Math.random() * 5)}s`,
            }}
          ></div>
        ))}

        {/* Gradient blobs */}
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-purple-600 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-indigo-600 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-600 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse-slow" style={{ animationDelay: '4s' }}></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(to right, #718096 1px, transparent 1px), linear-gradient(to bottom, #718096 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <h3 className="text-2xl font-semibold mb-6 text-gray-200">
                Passionate{" "}
                <span className="text-indigo-400">Developer</span> &{" "}
                <span className="text-purple-400">Creative</span> Problem Solver
              </h3>

              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I am passionate about crafting engaging and visually appealing
                websites. With expertise in front-end technologies such as HTML,
                CSS, and JavaScript, I excel in designing responsive and
                user-centric interfaces.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                My dedication to learning and attention to detail enable me to
                create digital experiences that delight and captivate users. I am
                eager to apply my skills and creativity to exciting projects and
                collaborate with others to transform innovative ideas into
                reality.
              </p>
            </div>

            {/* Experience Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 text-center border border-gray-700/30">
                <div className="text-3xl font-bold text-indigo-400 mb-2">2+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
              <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 text-center border border-gray-700/30">
                <div className="text-3xl font-bold text-purple-400 mb-2">15+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
            </div>
          </div>

          {/* Right Column - Skills (No Bars) */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <h3 className="text-2xl font-semibold mb-8 text-center text-gray-200">
              Technical <span className="text-indigo-400">Skills</span>
            </h3>

            <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 text-center">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="group flex flex-col items-center space-y-2 transform transition duration-300 hover:scale-110"
                >
                  <div className="p-4 bg-gray-700/40 rounded-full shadow-md group-hover:shadow-indigo-500/30 transition">
                    {skill.icon}
                  </div>
                  <span className="text-gray-300 text-sm">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 shadow-lg hover:shadow-indigo-500/25 relative overflow-hidden group"
          >
            <span className="relative z-10">Let's Work Together</span>
            <svg
              className="w-5 h-5 ml-2 relative z-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
            {/* Button animation background */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>
      </div>
    </section>
  );
}