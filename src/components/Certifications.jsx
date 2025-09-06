// src/components/Certifications.jsx
import React from "react";
import { FaExternalLinkAlt, FaDownload, FaCalendarAlt, FaAward } from "react-icons/fa";
import { SiCoursera, SiUdemy, SiFreecodecamp, SiGoogle } from "react-icons/si";
import { motion } from "framer-motion";

export default function Certifications() {
  const certificationsData = [
    {
      id: 1,
      title: "Full Stack Web Development",
      issuer: "Coursera",
      issuerIcon: <SiCoursera className="text-blue-600 text-xl" />,
      date: "2023",
      credentialLink: "https://coursera.org/certificate/example",
      downloadLink: "/certificates/full-stack.pdf",
      skills: ["React", "Node.js", "MongoDB", "Express"]
    },
    {
      id: 2,
      title: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      issuerIcon: <SiAmazonaws className="text-orange-500 text-xl" />,
      date: "2022",
      credentialLink: "https://aws.amazon.com/certification/",
      downloadLink: "/certificates/aws-developer.pdf",
      skills: ["AWS", "Cloud Computing", "Serverless", "DynamoDB"]
    },
    {
      id: 3,
      title: "React Native Mobile Development",
      issuer: "Udemy",
      issuerIcon: <SiUdemy className="text-purple-600 text-xl" />,
      date: "2022",
      credentialLink: "https://udemy.com/certificate/example",
      downloadLink: "/certificates/react-native.pdf",
      skills: ["React Native", "iOS", "Android", "Redux"]
    },
    {
      id: 4,
      title: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      issuerIcon: <SiFreecodecamp className="text-green-600 text-xl" />,
      date: "2021",
      credentialLink: "https://freecodecamp.org/certification/example",
      downloadLink: "/certificates/javascript-algorithms.pdf",
      skills: ["JavaScript", "Algorithms", "Data Structures", "ES6+"]
    },
    {
      id: 5,
      title: "Google Cloud Professional",
      issuer: "Google Cloud",
      issuerIcon: <SiGoogle className="text-blue-500 text-xl" />,
      date: "2021",
      credentialLink: "https://cloud.google.com/certification/",
      downloadLink: "/certificates/google-cloud.pdf",
      skills: ["GCP", "Cloud Storage", "Kubernetes", "BigQuery"]
    },
    {
      id: 6,
      title: "Advanced CSS and Sass",
      issuer: "Udemy",
      issuerIcon: <SiUdemy className="text-purple-600 text-xl" />,
      date: "2020",
      credentialLink: "https://udemy.com/certificate/example",
      downloadLink: "/certificates/advanced-css.pdf",
      skills: ["CSS3", "Sass", "Animations", "Responsive Design"]
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              width: Math.floor(Math.random() * 4) + 2 + 'px',
              height: Math.floor(Math.random() * 4) + 2 + 'px',
              top: Math.floor(Math.random() * 100) + '%',
              left: Math.floor(Math.random() * 100) + '%',
              backgroundColor: i % 3 === 0
                ? 'rgba(59, 130, 246, 0.4)'
                : i % 3 === 1
                  ? 'rgba(139, 92, 246, 0.4)'
                  : 'rgba(16, 185, 129, 0.4)',
              animationDuration: `${Math.floor(Math.random() * 15) + 10}s`,
              animationDelay: `${Math.floor(Math.random() * 5)}s`,
            }}
          ></div>
        ))}

        {/* Gradient blobs */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-10 animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-10 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(to right, #888 1px, transparent 1px), linear-gradient(to bottom, #888 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-1 rounded-full mb-6">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full px-6 py-2 flex items-center">
              <FaAward className="text-white mr-2" />
              <span className="text-white font-mono text-sm">CERTIFICATIONS</span>
            </div>
          </div>
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Professional <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Credentials</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            Validated skills and knowledge through industry-recognized certifications
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-lg">
                    {cert.issuerIcon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700/50 px-2 py-1 rounded-full">
                  <FaCalendarAlt className="mr-1" />
                  {cert.date}
                </div>
              </div>

              {/* Skills */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3 pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
                <a
                  href={cert.credentialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 flex-1 justify-center text-sm"
                >
                  <FaExternalLinkAlt className="mr-2" />
                  Verify
                </a>
                <a
                  href={cert.downloadLink}
                  download
                  className="flex items-center px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300 flex-1 justify-center text-sm"
                >
                  <FaDownload className="mr-2" />
                  PDF
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50">
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              Continuous Learning Journey
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I'm constantly expanding my skills through courses and certifications
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="flex items-center px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm">
                <SiCoursera className="mr-1" /> Coursera
              </span>
              <span className="flex items-center px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm">
                <SiUdemy className="mr-1" /> Udemy
              </span>
              <span className="flex items-center px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm">
                <SiFreecodecamp className="mr-1" /> freeCodeCamp
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Add custom animations to Tailwind */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(5deg);
          }
          100% {
            transform: translateY(0) rotate(0deg);
          }
        }
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.2;
          }
        }
        .animate-float {
          animation: float 12s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 10s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
}

// AWS Icon
const SiAmazonaws = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" width="24" height="24">
    <path
      fill="currentColor"
      d="M12 .3c-6.6 0-12 5.3-12 12 0 5.3 3.4 9.8 8.1 11.4.6.1.8-.2.8-.5v-2c-3.3.7-4-1.5-4-1.5-.6-1.6-1.5-2-1.5-2-1.2-.8.1-.8.1-.8 1.3.1 2 .9 2 .9 1.1 2 2.9 1.4 3.5 1 .1-.8.4-1.4.8-1.7-2.7-.3-5.6-1.4-5.6-6.1 0-1.4.5-2.5 1.3-3.4-.1-.3-.6-1.6.1-3.3 0 0 1-.3 3.4 1.3 1-.3 2-.5 3-.5 1 0 2 .2 3 .5 2.4-1.6 3.4-1.3 3.4-1.3.7 1.7.3 3 .1 3.3.8.9 1.3 2 1.3 3.4 0 4.7-2.9 5.7-5.6 6 .4.3.8 1 .8 2v3c0 .3.2.6.8.5 4.7-1.6 8.1-6.1 8.1-11.4 0-6.7-5.4-12-12-12z"
    />
  </svg>
);