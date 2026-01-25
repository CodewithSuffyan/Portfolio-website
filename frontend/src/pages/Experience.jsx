import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  // Dynamic Experience Data from your CV
  const experiences = [
    {
      id: 1,
      role: "Full Stack Developer Trainee",
      company: "Nav Tec",
      duration: "August 2025 - Present",
      desc: "Overseeing and maintaining core web services and websites. Implementing best software development practices to write well-designed, efficient code while collaborating with senior developers to launch new features."
    },
    {
      id: 2,
      role: "Junior Web Developer",
      company: "WPWizards Company",
      duration: "Jan 2025 - March 2025",
      desc: "Built and maintained client websites through various online platforms. Responsible for creating, testing applications, and documenting technical processes to ensure business continuity."
    },
    {
      id: 3,
      role: "Full Stack Projects",
      company: "Independent / Portfolio",
      duration: "2024 - 2025",
      desc: "Developed high-impact projects like the Judiciary Bahamas Project (Backend integration) and Research Collab, focusing on seamless user communication and productivity enhancement."
    }
  ];

  return (
    <section className="py-20 bg-[#121212] text-white px-[10%]">
      {/* Header */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold mb-3">
          Work <span className="text-[#8B5CF6]">Experience</span>
        </h2>
        <p className="text-gray-400">Transforming ideas into scalable digital solutions</p>
      </div>

      {/* Timeline Container */}
      <div className="relative max-w-4xl mx-auto">
        
        {/* Vertical Line */}
        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gray-800"></div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex items-center justify-between w-full ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#8B5CF6] rounded-full border-4 border-[#121212] z-10 shadow-[0_0_15px_rgba(139,92,246,0.5)]"></div>

              {/* Card Container */}
              <div className="ml-12 md:ml-0 md:w-[45%]">
                <div className="bg-[#1a1a1a] p-8 rounded-3xl border border-gray-800 hover:border-[#8B5CF6]/50 transition-all group shadow-lg">
                  {/* Date Tag */}
                  <div className="inline-block px-4 py-1 bg-[#8B5CF6]/10 text-[#8B5CF6] text-[10px] font-bold uppercase tracking-widest rounded-full mb-4 border border-[#8B5CF6]/20">
                    {exp.duration}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-1 group-hover:text-[#8B5CF6] transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-gray-300 text-sm font-medium mb-4 italic">
                    @{exp.company}
                  </p>
                  
                  <p className="text-gray-400 text-sm leading-relaxed text-justify">
                    {exp.desc}
                  </p>
                </div>
              </div>

              {/* Spacer for desktop layout */}
              <div className="hidden md:block md:w-[45%]"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;