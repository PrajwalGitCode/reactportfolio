// src/components/About.jsx
import React from "react";
import AnimatedBackground from "./AnimatedBackground";
import "../App.css"
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
      className="py-20 bg-gray-950 text-white relative overflow-hidden">

      <AnimatedBackground particleCount={170} />

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
                I am passionate about building scalable and user-focused web applications. With expertise in frontend and MERN-stack technologies
                such as React, Node.js, Express.js, and MongoDB,
                I excel in designing responsive, intuitive, and visually appealing interfaces.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                My attention to detail and commitment to best practices enable me to create reliable and engaging digital experiences.
                I am eager to apply my skills in challenging projects
                and collaborate with teams to turn innovative ideas into professional-grade solutions.
              </p>
            </div>

            {/* Experience Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 text-center border border-gray-700/30">
                <div className="text-3xl font-bold text-indigo-400 mb-2">7+</div>
                <div className="text-gray-300">Internships Done</div>
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
      </div>
    </section>
  );
}