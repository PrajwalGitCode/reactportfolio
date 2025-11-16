// src/components/Projects.jsx
import React, { useState } from "react";
import "../App.css"
import AnimatedBackground from "./AnimatedBackground";
import inteImg from "../images/inte.png";
import alumni from "../images/alumni.png";
import appleclone from "../images/appleclone.png";
import earbot from "../images/earbot.png";
import elearn from "../images/elearn.png";
import feature from "../images/feature.png";
import feature22 from "../images/feature22.png";
import food from "../images/food.png";
import mach from "../images/mach.png";
import main1 from "../images/main.png";
import microbank from "../images/microbank.png";
import microfullstore from "../images/microfullstore.png";
import portfolio from "../images/portfolio.png";
import resume from "../images/resume.png";
import sheet from "../images/sheet.png";
import techweb from "../images/techweb.png";
import tender from "../images/tender.png";
import tutor from "../images/tutor.png";
import jobportal from "../images/jobportal.png";
import neurox from "../images/neurox.png";
import currency from "../images/currency.png";
import stock from "../images/stock.png";
import socialmedia from "../images/socialmedia.png";
import taskkeep from "../images/taskkeep.png";  

export const companiesData = {

    GNCIPL: {
        name: "Global Next Consulting India",
        logo: "",
        projects: [
            {
                id: 23,
                title: "Global Connect",
                description:
                    "Developed a full-stack MERN social and professional networking platform where users can create accounts, send friend requests, post updates, like/reply on feeds, and chat with connections, functioning similarly to a job portal.",
                image: jobportal,
                liveLink: "https://net-global-connect.netlify.app/",
                githubLink: " https://github.com/TejasriM07/NetGlobalConnect.git",
                techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS", "JWT Authentication", "Socket.IO", "Axios"],
                achievements: [
                    "Implemented secure authentication and user profile management using JWT and bcrypt",
                    "Built social feed with posts, likes, replies, and real-time updates",
                    "Developed friend request and connection management system",
                    "Integrated real-time chat functionality using Socket.IO",
                    "Designed responsive and professional UI using React and Tailwind CSS"],
            },

            {
                id: 22,
                title: "Task Manager App",
                description:
                    "Built a full-stack MERN application for managing tasks, enabling users to create, update, and delete tasks, track progress, and organize work with a secure login system and responsive dashboard.",
                image: taskkeep,
                liveLink: "https://silver-hummingbird-c09f37.netlify.app/",
                githubLink: "https://github.com/PrajwalGitCode/TaskKeeper",
                techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS", "JWT Authentication", "Axios"],
                achievements: [
                    "Implemented secure user authentication and profile management using JWT and bcrypt",
                    "Developed CRUD functionality for tasks with real-time updates",
                    "Designed a clean and responsive dashboard UI using React and Tailwind CSS",
                    "Added task prioritization, deadlines, and status tracking features",
                    "Optimized backend performance for smooth task management and retrieval"],
            },

            {
                id: 21,
                title: "Currency Exchange Manager",
                description:
                    "Developed a secure MERN-based currency conversion platform that allows users to convert between multiple currencies in real time, manage exchange history, and view live rates with a sleek dashboard interface.",
                image: currency,
                liveLink: "https://unique-tiramisu-currencyconverter.netlify.app/",
                githubLink: "https://github.com/PrajwalGitCode/currencyconvert",
                techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS", "JWT Authentication", "Axios", "ExchangeRate API"],
                achievements: [
                    "Integrated real-time exchange rate data using third-party currency APIs",
                    "Implemented secure authentication and user profile management with JWT and bcrypt",
                    "Built an intuitive dashboard for instant currency conversion and transaction history tracking",
                    "Optimized API calls for faster load times and accurate rate calculations",
                    "Designed responsive and accessible UI using React and Tailwind CSS"],
            },

            {
                id: 20,
                title: "StockMarket",
                description:
                    "Built a full-stack MERN application simulating real-time stock trading, enabling users to buy, sell, and track stocks while visualizing portfolio performance through interactive charts.",
                image: stock,
                liveLink: "https://github.com/PrajwalGitCode/stockmarket",
                githubLink: "https://github.com/PrajwalGitCode/stockmarket",
                techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT Authentication", "Tailwind CSS"],
                achievements: [
                    "Implemented real-time stock price updates and portfolio tracking",
                    "Developed secure user authentication and transaction management using JWT and bcrypt",
                    "Created responsive trading dashboards and portfolio analytics",
                    "Optimized API performance and ensured accurate trade simulation logic",
                    "Designed modern, user-friendly interface with React and Tailwind CSS"]
            },

            {
                id: 19,
                title: "Nebulaverse",
                description:
                    "Developed a full-stack social media platform using the MERN stack, allowing users to create posts, like, comment, and interact in real time through a responsive and modern interface.",
                image: socialmedia,
                liveLink: "https://reliable-empanada-b77023.netlify.app/feed",
                githubLink: "https://github.com/PrajwalGitCode/Nebulaverse",
                techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS", "JWT Authentication"],
                achievements: [
                    "Implemented secure authentication and authorization using JWT and bcrypt",
                    "Created post, like, and comment systems with dynamic real-time updates",
                    "Designed an intuitive, mobile-first UI with React and Tailwind CSS",
                    "Integrated RESTful APIs with MongoDB for efficient content and user management",
                    "Built scalable backend architecture ready for chat and notification expansion"]
            },
            {
                id: 18,
                title: "Product Launch",
                description: "A web-based product-launch landing page built with HTML, CSS and JavaScript. The project features a fully responsive layout, interactive UI elements, and smooth single-page navigation tailored for marketing new products online.",
                image: neurox,
                liveLink: "https://luminous-gaufre-5aaf5d.netlify.app/",
                githubLink: "https://github.com/PrajwalGitCode/ProductLaunch",
                techStack: ["HTML", "CSS", "JavaScript"],
                achievements: [
                    "Developed a mobile-first responsive landing page using CSS media queries and flexbox/grid for layout adaptation",
                    "Implemented interactive visitor engagement components (e.g., smooth scroll navigation, dynamic content revealed on scroll)",
                    "Optimized performance by minimizing external dependencies and implementing efficient, semantic code structure"]
            },
        ]
    },

    Navikshaa: {
        name: "Navikshaa Technologies LLP",
        logo: "",
        projects: [
            {
                id: 17,
                title: "Chat app",
                description: "Built a full-stack e-commerce solution serving 10K+ users with React, Node.js, and MongoDB. Implemented payment processing, inventory management, and admin dashboard.",
                image: "/api/placeholder/400/250",
                liveLink: "https://techcorp-ecommerce.com",
                githubLink: "https://github.com/techcorp/ecommerce",
                techStack: ["React", "Node.js", "MongoDB", "Express", "Stripe", "AWS"],
                duration: "Jan 2023 - Present",
                achievements: ["Increased conversion rate by 35%", "Reduced load time by 40%", "Implemented CI/CD pipeline"],
            },
            {
                id: 16,
                title: "E-Commerce Platform",
                description: "Built a full-stack e-commerce solution serving 10K+ users with React, Node.js, and MongoDB. Implemented payment processing, inventory management, and admin dashboard.",
                image: "/api/placeholder/400/250",
                liveLink: "https://techcorp-ecommerce.com",
                githubLink: "https://github.com/techcorp/ecommerce",
                techStack: ["React", "Node.js", "MongoDB", "Express", "Stripe", "AWS"],
                duration: "Jan 2023 - Present",
                achievements: ["Increased conversion rate by 35%", "Reduced load time by 40%", "Implemented CI/CD pipeline"],
            },
            {
                id: 15,
                title: "Travel Booking System",
                description: "Developed an analytics dashboard for internal team management with real-time metrics and reporting features.",
                image: "/api/placeholder/400/250",
                liveLink: "https://techcorp-dashboard.com",
                githubLink: "https://github.com/techcorp/dashboard",
                techStack: ["React", "Firebase", "Chart.js", "Tailwind CSS"],
                achievements: ["Improved team productivity by 25%", "Automated reporting system"],
            },
            {
                id: 14,
                title: "TODO List App",
                description: "Created a comprehensive customer portal with account management, billing, and support features.",
                image: "/api/placeholder/400/250",
                liveLink: "https://techcorp-portal.com",
                githubLink: "https://github.com/techcorp/portal",
                techStack: ["React", "Node.js", "MySQL", "Stripe", "JWT"],
                duration: "Mar 2022 - Jul 2022",
                achievements: ["Reduced support tickets by 45%", "Improved customer satisfaction by 30%"],
            }
        ]
    },


    Microdegree: {
        name: "Microdegree",
        logo: "",
        projects: [
            {
                id: 13,
                title: "Banking App",
                description: "A web app for account creation, deposits, withdrawals, and transaction tracking with user authentication and account management.",
                image: microbank,
                liveLink: "https://techcorp-mobile.com",
                githubLink: "https://github.com/techcorp/mobile",
                techStack: ["Python", "Django", "HTML", "CSS", "JavaScript", "Bootstrap", "PythonAnywhere"],
                achievements: ["Implemented secure user authentication and account management",
                    "Designed responsive UI with Bootstrap for cross-device support",
                    "Built transaction tracking system for deposits and withdrawals"],

            },
            {
                id: 12,
                title: "E-Commerce Website",
                description: "A responsive e-commerce site with product uploads, user authentication, and smooth cross-device browsing.",
                image: microfullstore,
                liveLink: "https://techcorp-api.com",
                githubLink: "https://github.com/techcorp/api",
                techStack: ["Python", "Django", "HTML", "CSS", "JavaScript", "Bootstrap", "PythonAnywhere"],
                achievements: ["Developed product upload and management features",
                    "Implemented secure authentication and user sessions",
                    "Designed adaptive, responsive UI for seamless shopping experience"],
            },
            {
                id: 11,
                title: "Watch App Store",
                description: "A responsive watch e-commerce store showcasing products with a clean Bootstrap-based design.",
                image: microfullstore,
                liveLink: "https://techcorp-api.com",
                githubLink: "https://github.com/techcorp/api",
                techStack: [["HTML", "CSS", "Bootstrap"]],
                achievements: ["Created a modern responsive layout for product listings",
                    "Designed sleek UI components using Bootstrap",
                    "Improved frontend styling skills with focus on usability"],
            }
        ]
    },


    DebugTech: {
        name: "Debug Deployment Technologies",
        logo: "",
        projects: [
            {
                id: 10,
                title: "Portfolio",
                description: "A fully responsive portfolio website using HTML, CSS, Bootstrap and JS showcasing my skills and projects.",
                image: portfolio,
                liveLink: "https://startuptasks.com",
                githubLink: "https://github.com/startupinc/tasks",
                techStack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
                achievements: ["Designed a fully responsive personal portfolio to showcase skills and projects.",
                    "Implemented clean layouts and smooth navigation.",
                    "Improved ability to present professional work in a structured way."],
            },
            {
                id: 9,
                title: "Apple Website Clone",
                description: "Developed a fully responsive clone of the Apple website with modern design and interactivity.",
                image: appleclone,
                liveLink: "https://startupcrm.com",
                githubLink: "https://github.com/startupinc/crm",
                techStack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
                achievements: ["Recreated a pixel-perfect responsive clone of Apple’s website.",
                    "Practiced advanced Bootstrap grid system and responsive breakpoints.",
                    "Strengthened skills in UI/UX consistency and design accuracy."],
            }
        ]
    },
    Suven: {
        name: "Suven Consultants & Technology Pvt. Ltd.",
        logo: "📊",
        projects: [
            {
                id: 8,
                title: "Tutor Point Clone",
                description: "Developed a responsive multi-page clone of TutorialsPoint with courses, ebooks, and coding examples using Bootstrap.",
                image: tutor,
                liveLink: "https://mellow-horse-62439c.netlify.app/",
                githubLink: "https://github.com/datalabs/analytics",
                techStack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
                achievements: ["Built course and ebook pages with cards, lists, and forms",
                    "Added footer navigation and search module in the header",
                    "Improved skills in structuring large content websites"],
            },
            {
                id: 7,
                title: "E-Learn Website",
                description: "Built a single-page responsive e-learning website with sections for courses, search, and footer layout.",
                image: elearn,
                liveLink: "https://dainty-valkyrie-b9c970.netlify.app/",
                githubLink: "https://github.com/datalabs/analytics",
                techStack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
                achievements: ["Designed sections using Bootstrap grid and card layouts",
                    "Practiced clean one-page responsive design",
                    "Enhanced skills in layout division and semantic structuring"],
            },
            {
                id: 6,
                title: "EarBot Lifecycle Website",
                description: "Created a responsive support portal for music system products with image animations, carousel, and gallery.",
                image: earbot,
                liveLink: "https://loquacious-naiad-1b928b.netlify.app/",
                githubLink: "https://github.com/datalabs/analytics",
                techStack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
                achievements: ["Used Bootstrap components like Navbar, Jumbotron, and Grid System",
                    "Added responsive image galleries and animated sections",
                    "Strengthened interactive page design abilities"],
            },
            {
                id: 5,
                title: "Opexx Tender Portal",
                description: "Developed a responsive clone of Oppex.com for browsing tenders, with search and pricing sections.",
                image: tender,
                liveLink: "https://glittery-croissant-c99a87.netlify.app/",
                githubLink: "https://github.com/datalabs/analytics",
                techStack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
                achievements: ["Implemented navbar tabs for live tenders and winners",
                    "Added toggle functionality for showing/hiding form content",
                    "Designed pricing section with card hover effects"],
            },
            {
                id: 4,
                title: "E-Food Website",
                description: "Built a responsive restaurant and food discovery website similar to Zomato/UberEats.",
                image: "https://statuesque-starlight-961076.netlify.app/",
                liveLink: tutor,
                githubLink: "https://github.com/datalabs/analytics",
                techStack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
                achievements: ["Added location-based dropdown for food search",
                    "Used Bootstrap carousel for homepage image animations",
                    "Designed category-wise food listing with responsive cards"],
            },
            {
                id: 3,
                title: "Alumni Management Portal",
                description: "Created a responsive alumni portal with blogs, portfolios, events, and contact integration.",
                image: alumni,
                liveLink: "https://helpful-kitten-6b80d4.netlify.app/",
                githubLink: "https://github.com/datalabs/analytics",
                techStack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
                achievements: ["Embedded social media and Google Maps API",
                    "Implemented blog/news layout with ads and tags",
                    "Designed responsive grid sections for forum, feedback, and register"],
            }
        ]
    },
    InternStudio: {
        name: "InternshipStudio",
        logo: "🌍",
        projects: [
            {
                id: 2,
                title: "E Commerce Website",
                description: "Developed a responsive e-commerce website using HTML, CSS, and JS, featuring product listings, and a seamless experience across all devices.",
                image: inteImg,
                liveLink: "https://stellar-conkies-6ff379.netlify.app/",
                githubLink: "https://github.com/PrajwalGitCode/ecommerce-website/tree/main/techwebsite",
                techStack: ["JavaScript", "HTML", "CSS"],
                achievements: ["Completed my first internship project in web development",
                    "Built a responsive layout without frameworks, using only HTML, CSS, and JS",
                    "Improved problem-solving skills and understanding of real-world project workflow"],
            },
            {
                id: 1,
                title: "CSS Cheat Sheet",
                description: "Created a responsive CSS cheat sheet with all the essential features, styling techniques for quick reference.",
                image: sheet,
                liveLink: "https://euphonious-sprinkles-54f92a.netlify.app/",
                githubLink: "https://github.com/PrajwalGitCode/csscheatsheet",
                techStack: ["HTML", "CSS"],
                achievements: ["Built a comprehensive CSS reference guide as a self-learning project",
                    "Practiced responsive design techniques without using frameworks",
                    "Enhanced understanding of core CSS concepts and real-world use cases"],
            }
        ]
    }
};
