import React from 'react';
import { motion } from 'framer-motion';
// React Icons
import { FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiJavascript, SiReact, SiTailwindcss, SiRedux } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import { IoLogoVercel } from 'react-icons/io5';
import { MdCloudUpload } from 'react-icons/md';

const Skills = () => {
  const skillData = [
    {
      title: "Frontend Development",
      desc: "Specialist in building dynamic, high-performance SPAs using React 19. Expert in state management with Zustand/Redux and crafting pixel-perfect layouts with Tailwind CSS.",
      icon: <FaReact className="text-[#61DAFB] w-8 h-8" />,
      tags: ["React 19", "Tailwind CSS", "Redux/Zustand", "Vite"]
    },
    {
      title: "Mobile App Development",
      desc: "Building cross-platform mobile applications for iOS & Android using React Native. Creating smooth, native-like experiences with reusable components and optimized performance.",
      icon: <SiReact className="text-[#61DAFB] w-8 h-8" />,
      tags: ["React Native", "Expo", "iOS/Android", "Cross-Platform"]
    },
    {
      title: "Backend Development",
      desc: "Developing scalable server-side logic and robust RESTful APIs using Node.js and Express. Focused on building secure, efficient architectures with seamless middleware integration.",
      icon: <SiExpress className="text-[#61DAFB] w-8 h-8" />,
      tags: ["Node.js", "Express", "JWT Auth", "REST APIs"]
    },
    {
      title: "Database Management",
      desc: "Architecting efficient NoSQL data models with MongoDB. Proficient in handling complex data relationships, indexing for performance, and ensuring data integrity using Mongoose ODM.",
      icon: <SiMongodb className="text-[#47A248] w-8 h-8" />,
      tags: ["MongoDB", "Mongoose", "NoSQL", "Aggregation"]
    },
    {
      title: "Mobile UI/UX",
      desc: "Creating responsive and intuitive mobile interfaces with React Native components. Implementing smooth animations, gestures, and platform-specific designs for native look and feel.",
      icon: <SiTailwindcss className="text-[#06B6D4] w-8 h-8" />,
      tags: ["React Native Paper", "NativeBase", "Animations", "Gestures"]
    },
    {
      title: "State Management",
      desc: "Expert in managing complex application state across web and mobile platforms using Redux Toolkit, Zustand, and Context API for predictable and maintainable code.",
      icon: <SiRedux className="text-[#764ABC] w-8 h-8" />,
      tags: ["Redux Toolkit", "Zustand", "Context API", "RTK Query"]
    },
    {
      title: "API Development & Integration",
      desc: "Designing, documenting, and consuming RESTful APIs. Experienced in integrating third-party services and ensuring smooth communication between frontend, mobile apps, and backend systems.",
      icon: <TbApi className="text-[#8B5CF6] w-8 h-8" />,
      tags: ["REST API", "Axios", "Postman", "API Security"]
    },
    {
      title: "Core Programming",
      desc: "Strong foundation in Modern JavaScript/TypeScript. Expert in asynchronous programming, DOM manipulation, and writing clean, maintainable code using the latest ES6+ features.",
      icon: <SiJavascript className="text-[#F7DF1E] w-8 h-8" />,
      tags: ["JavaScript ES6+", "TypeScript", "Async/Await", "Algorithms"]
    },
    {
      title: "DevOps & Deployment",
      desc: "Proficient in Git/GitHub for version control and collaborative development. Experienced in deploying web and mobile apps on Vercel, Netlify, and Expo for seamless delivery.",
      icon: <FaGitAlt className="text-[#F05032] w-8 h-8" />,
      tags: ["Git/GitHub", "Vercel", "Netlify", "Expo EAS"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#121212] text-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">

        {/* Header with Gradient */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] mx-auto mb-4 rounded-full"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies & tools I master to build amazing web and mobile experiences
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skillData.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-6 md:p-8 rounded-2xl border border-gray-800 hover:border-[#8B5CF6] transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-[#8B5CF6]/5 flex flex-col h-full"
            >
              {/* Icon and Title */}
              <div className="flex items-center gap-4 mb-5">
                <div className="bg-gradient-to-br from-[#8B5CF6]/10 to-[#A78BFA]/5 p-3 rounded-xl group-hover:scale-110 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#8B5CF6]/20">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold leading-tight group-hover:text-[#8B5CF6] transition-colors">
                  {skill.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-400 mb-6 text-sm leading-relaxed flex-grow">
                {skill.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {skill.tags.map((tag, tIndex) => (
                  <span
                    key={tIndex}
                    className="px-3 py-1.5 bg-[#252525] text-gray-300 text-[11px] uppercase tracking-wider font-semibold rounded-full border border-gray-700 group-hover:border-[#8B5CF6]/40 transition-all duration-200 hover:bg-[#8B5CF6]/10 hover:text-[#8B5CF6]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Tech Stack Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-wrap justify-center gap-3 p-6 bg-gradient-to-r from-[#1a1a1a] to-[#0f0f0f] rounded-2xl border border-gray-800">
            <span className="text-gray-400 font-medium">💼 Worked with:</span>
            <span className="text-[#8B5CF6]">MERN Stack</span>
            <span className="text-gray-600">•</span>
            <span className="text-[#8B5CF6]">React Native</span>
            <span className="text-gray-600">•</span>
            <span className="text-[#8B5CF6]">Expo</span>
            <span className="text-gray-600">•</span>
            <span className="text-[#8B5CF6]">Redux Toolkit</span>
            <span className="text-gray-600">•</span>
            <span className="text-[#8B5CF6]">TypeScript</span>
            <span className="text-gray-600">•</span>
            <span className="text-[#8B5CF6]">Tailwind CSS</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;