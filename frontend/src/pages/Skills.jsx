import React from 'react';
import { motion } from 'framer-motion';
// React Icons
import { FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiJavascript } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

const Skills = () => {
  const skillData = [
    {
      title: "Frontend Development",
      desc: "Specialist in building dynamic, high-performance SPAs using React 19. Expert in state management with Zustand/Redux and crafting pixel-perfect layouts with Tailwind CSS.",
      icon: <FaReact className="text-[#61DAFB] w-8 h-8" />,
      tags: ["React 19", "Tailwind CSS", "Redux/Zustand"]
    },
   {
  title: "Backend Development",
  desc: "Developing scalable server-side logic and robust RESTful APIs using Node.js and Express. Focused on building secure, efficient architectures with seamless middleware integration.",
  icon: <SiExpress className="text-[#61DAFB] w-8 h-8" />, // Is line ko check karein
  tags: ["Node.js", "Express", "JWT Auth"]
},
    {
      title: "Database Management",
      desc: "Architecting efficient NoSQL data models with MongoDB. Proficient in handling complex data relationships, indexing for performance, and ensuring data integrity using Mongoose ODM.",
      icon: <SiMongodb className="text-[#47A248] w-8 h-8" />,
      tags: ["MongoDB", "Mongoose", "NoSQL"]
    },
    {
      title: "API Development",
      desc: "Designing and documenting clean, secure, and well-structured APIs. Experienced in integrating third-party services and ensuring smooth communication between frontend and backend systems.",
      icon: <TbApi className="text-[#8B5CF6] w-8 h-8" />,
      tags: ["REST API", "Postman", "Axios"]
    },
    {
      title: "Core Programming",
      desc: "Strong foundation in Modern JavaScript. Expert in asynchronous programming, DOM manipulation, and writing clean, maintainable code using the latest ES6+ features for complex logic.",
      icon: <SiJavascript className="text-[#F7DF1E] w-8 h-8" />,
      tags: ["JS ES6+", "Algorithms", "Async/Await"]
    },
    {
      title: "DevOps & Version Control",
      desc: "Proficient in Git/GitHub for version control and collaborative development. Experienced in deploying full-stack applications on platforms like Vercel and Netlify with optimized build processes.",
      icon: <FaGitAlt className="text-[#F05032] w-8 h-8" />,
      tags: ["Git/GitHub", "Vercel", "Netlify"]
    }
  ];

  return (
    <section className="py-20 bg-[#121212] text-white px-[10%]">
      {/* Header */}
      <div className="text-center mb-16">
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-3">
            My <span className="text-[#8B5CF6]">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Technologies I work with to bring ideas to life
          </p>
        </motion.div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillData.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-[#1a1a1a] p-8 rounded-3xl border border-gray-800 hover:border-[#8B5CF6] transition-all group shadow-lg flex flex-col h-full"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-[#121212] p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold leading-tight">
                {skill.title}
              </h3>
            </div>

            <p className="text-gray-400 mb-8 text-sm leading-relaxed flex-grow">
              {skill.desc}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {skill.tags.map((tag, tIndex) => (
                <span 
                  key={tIndex}
                  className="px-4 py-1.5 bg-[#252525] text-gray-300 text-[10px] uppercase tracking-wider font-semibold rounded-full border border-gray-700 group-hover:border-[#8B5CF6]/50 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;