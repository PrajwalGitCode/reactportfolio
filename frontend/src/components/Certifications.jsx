// src/components/Certifications.jsx
import React, { useState } from "react";
import "../App.css"
import AnimatedBackground from "./AnimatedBackground";
import { FaExternalLinkAlt, FaDownload, FaCalendarAlt, FaAward, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { SiCoursera, SiUdemy, SiFreecodecamp, SiGoogle } from "react-icons/si";
import { motion } from "framer-motion";

export default function Certifications() {
  const [expandedCert, setExpandedCert] = useState(null);

  const toggleCert = (id) => {
    setExpandedCert(expandedCert === id ? null : id);
  };

  const certificationsData = [
    {
      id: 1,
      title: "Foundations: Data, Data, Everywhere",
      issuer: "Coursera",
      issuerIcon: <SiCoursera className="text-blue-600 text-xl" />,
      date: "2023",
      credentialLink: "https://coursera.org/share/5ba817df0eb9b0b4316e59345e8fd43a",
      downloadLink: "https://coursera.org/share/5ba817df0eb9b0b4316e59345e8fd43a",
      skills: ["Spreadsheet Software",
        "Google Sheets",
        "Data Collection",
        "Data Processing",
        "Data Analysis",
        "Data Ethics",
        "Business Analytics",
        "Data-Driven Decision-Making",
        "SQL",
        "Analytics",
        "Tableau Software",
        "Analytical Skills",]
    },
    {
      id: 2,
      title: "Introduction to Cybersecurity Tools & Cyberattacks",
      issuer: "Coursera",
      issuerIcon: <SiCoursera className="text-blue-600 text-xl" />,
      date: "2020",
      credentialLink: "https://coursera.org/share/1e321552900b1b6fd6eaa1f8712a91a3",
      downloadLink: "https://coursera.org/share/1e321552900b1b6fd6eaa1f8712a91a3",
      skills: ["Cybersecurity",
        "Network Security",
        "Malware Protection",
        "Cyber Attacks",
        "Threat Management",
        "Threat Detection",
        "Incident Response",
        "Computer Security Incident Management",
        "Identity and Access Management",
        "Multi-Factor Authentication",
        "Authentications",
        "Security Awareness"]
    },
    {
      id: 5,
      title: "AWS Fundamentals: Addressing Security Risk",
      issuer: "Coursera",
      issuerIcon: <SiFreecodecamp className="text-green-600 text-xl" />,
      date: "2020",
      credentialLink: "https://coursera.org/share/4f6517e7a23409fc2dac431359518e16",
      downloadLink: "https://coursera.org/share/4f6517e7a23409fc2dac431359518e16",
      skills: ["Public Cloud",
        "Cloud Applications",
        "Amazon Web Services (AWS)",
        "AWS Identity and Access Management (IAM)",
        "Cloud Security",
        "Network Security",
        "Data Security",
        "Identity and Access Management",
        "Application Security",
        "Encryption",
        "Information Privacy",
        "Continuous Monitoring",]
    },
    {
      id: 6,
      title: "Getting Started with AWS Machine Learning",
      issuer: "Coursera",
      issuerIcon: <SiGoogle className="text-blue-500 text-xl" />,
      date: "2021",
      credentialLink: "https://coursera.org/share/9ba37587d7dd63882d79944688a18de3",
      downloadLink: "https://coursera.org/share/9ba37587d7dd63882d79944688a18de3",
      skills: ["Artificial Intelligence and Machine Learning (AI/ML)",
        "Machine Learning",
        "Deep Learning",
        "Supervised Learning",
        "Natural Language Processing (NLP)",
        "Computer Vision",
        "Image Analysis",
        "MLOps (Machine Learning Operations)",
        "Data Collection",
        "Amazon Web Services (AWS)",
        "AWS SageMaker",]
    },
    {
      id: 7,
      title: "Programming for Everybody (Getting Started with Python)",
      issuer: "Coursera",
      issuerIcon: <SiUdemy className="text-purple-600 text-xl" />,
      date: "2020",
      credentialLink: "https://coursera.org/share/d5d57309df73bb5bb5b3ce8d702670c6",
      downloadLink: "https://coursera.org/share/d5d57309df73bb5bb5b3ce8d702670c6",
      skills: ["Computational Thinking",
        "Development Environment",
        "Software Installation",
        "Computer Programming",
        "Programming Principles",
        "Python Programming",]
    },
    {
      id: 8,
      title: "Natural Language Processing",
      issuer: "Coursera",
      issuerIcon: <SiGoogle className="text-blue-500 text-xl" />,
      date: "2021",
      credentialLink: "https://coursera.org/share/4c071e6007b53bb262937fd465d5ddd5",
      downloadLink: "https://coursera.org/share/4c071e6007b53bb262937fd465d5ddd5",
      skills: ["Deep Learning",
        "Probability & Statistics",
        "Unstructured Data",
        "Supervised Learning",
        "TensorFlow",
        "Keras (Neural Network Library)",
        "Data Processing",
        "Feature Engineering",
        "PyTorch (Machine Learning Library)",
        "Machine Learning Algorithms",
        "Dimensionality Reduction",
        "Artificial Neural Networks",]
    },
    {
      id: 9,
      title: "CyberOps Associate",
      issuer: "Cisco",
      issuerIcon: <SiGoogle className="text-blue-500 text-xl" />,
      date: "2024",
      credentialLink: "https://www.credly.com/badges/3377bc51-b293-43c5-8772-4ad7faefdbd9/public_url",
      downloadLink: "https://www.credly.com/badges/3377bc51-b293-43c5-8772-4ad7faefdbd9/public_url",
      skills: ["Attack Methods",
        "Computer Forensics",
        "Cryptography",
        "Cybersecurity",
        "Data And Event Analysis",
        "Endpoint Threat Analysis",
        "Host-based Analysis",
        "Incident Response",
        "Malware Analysis",
        "Network Attacks",
        "Network Intrusion Analysis SecOps",
        "Security Concepts",
        "Security Monitoring",
        "Security Policy",
        "Security Procedures",
        "SOC Metrics",
        "Threat Detection",]
    },
    {
      id: 10,
      title: "Introduction to Cybersecurity",
      issuer: "Cisco",
      issuerIcon: <SiGoogle className="text-blue-500 text-xl" />,
      date: "2024",
      credentialLink: "https://www.credly.com/badges/2082c33e-e50e-4279-ae55-0f4b116d4458/public_url",
      downloadLink: "https://www.credly.com/badges/2082c33e-e50e-4279-ae55-0f4b116d4458/public_url",
      skills: ["Cyber Best Practices",
        "Cybersecurity",
        "Network Vulnerabilities",
        "Privacy And Data Confidentiality",
        "Threat Detection",]
    },
    {
      id: 11,
      title: "RPA Developer Foundation",
      issuer: "Uipath",
      issuerIcon: <SiGoogle className="text-blue-500 text-xl" />,
      date: "2024",
      credentialLink: "https://www.credly.com/badges/2082c33e-e50e-4279-ae55-0f4b116d4458/public_url",
      downloadLink: "https://www.credly.com/badges/2082c33e-e50e-4279-ae55-0f4b116d4458/public_url",
      skills: ["Robotic Process Automation (RPA) Fundamentals",
        "UiPath Studio Basics",
        "Workflow Design & Automation",
        "Selectors and UI Automation",
        "Data Manipulation & Excel Automation",
        "Debugging & Error Handling",
        "Orchestrator Basics"]
    },

    {
      id: 12,
      title: "Ai for India",
      issuer: "Guvi",
      issuerIcon: <SiGoogle className="text-blue-500 text-xl" />,
      date: "2024",
      credentialLink: "https://www.guvi.in/verify-certificate?id=32q9h951073aYr1f6y",
      downloadLink: "https://www.guvi.in/verify-certificate?id=32q9h951073aYr1f6y",
      skills: ["Python Programming",
        "Object-Oriented Programming (OOP)",
        "Data Structures & Algorithms",
        "File Handling",
        "Exception Handling",
        "Libraries & Modules",
        "APIs and JSON Handling",
        "Unit Testing",
        "Virtual Environments (venv/pip)"]
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-950 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Animated Background Elements */}
      <AnimatedBackground particleCount={170} />

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

        {/* Certifications List */}
        <div className="space-y-4">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg overflow-hidden hover:shadow-xl hover:scale-[1.01] transition-all duration-300"
            >

              {/* Dropdown Header - Always Visible */}
              <button
                onClick={() => toggleCert(cert.id)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-lg">
                    {cert.issuerIcon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {cert.title}
                    </h3>
                    <div className="flex items-center space-x-4 mt-1">
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {cert.issuer}
                      </p>
                      <span className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                        <FaCalendarAlt className="mr-1" />
                        {cert.date}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
                    {cert.skills.length} skills
                  </span>
                  {expandedCert === cert.id ? (
                    <FaChevronUp className="text-gray-400 transition-transform duration-200" />
                  ) : (
                    <FaChevronDown className="text-gray-400 transition-transform duration-200" />
                  )}
                </div>
              </button>

              {/* Dropdown Content - Only shown when expanded */}
              {expandedCert === cert.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-4"
                >
                  <div className="border-t border-gray-200/50 dark:border-gray-700/50 pt-4">
                    {/* Skills */}
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-900 dark:text-white mb-2 text-sm">
                        Skills Covered:
                      </h4>
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
                    <div className="flex space-x-3">
                      <a
                        href={cert.credentialLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 flex-1 justify-center text-sm"
                      >
                        <FaExternalLinkAlt className="mr-2" />
                        Verify Certificate
                      </a>
                      <a
                        href={cert.downloadLink}
                        download
                        className="flex items-center px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300 flex-1 justify-center text-sm"
                      >
                        <FaDownload className="mr-2" />
                        Download PDF
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}
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
        </motion.div>
      </div>
    </section>
  );
}