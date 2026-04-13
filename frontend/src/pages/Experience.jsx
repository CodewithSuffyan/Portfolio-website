import React from 'react';
import { motion } from 'framer-motion';
import { FaMobile, FaGlobe, FaLaptopCode } from 'react-icons/fa';

const Experience = () => {
  // Dynamic Experience Data from your CV
  const experiences = [
    {
      id: 1,
      role: "Mobile Application Developer",
      company: "Wimosoft",
      duration: "January 2026 - Present",
      desc: "Developing cross-platform mobile applications using React Native for iOS and Android. Collaborating with design and backend teams to deliver seamless user experiences. Implementing real-time features, push notifications, and optimizing app performance for production-grade applications.",
      type: "mobile",
      technologies: ["React Native", "Expo", "Redux Toolkit", "REST APIs"]
    },
    {
      id: 2,
      role: "Full Stack Developer Trainee",
      company: "Nav Tec",
      duration: "August 2025 - December 2025",
      desc: "Overseeing and maintaining core web services and websites. Implementing best software development practices to write well-designed, efficient code while collaborating with senior developers to launch new features.",
      type: "web",
      technologies: ["MERN Stack", "REST APIs", "Git", "Agile"]
    },
    {
      id: 3,
      role: "Junior Web Developer",
      company: "WPWizards Company",
      duration: "January 2025 - March 2025",
      desc: "Built and maintained client websites through various online platforms. Responsible for creating, testing applications, and documenting technical processes to ensure business continuity.",
      type: "web",
      technologies: ["WordPress", "PHP", "HTML/CSS", "JavaScript"]
    },
    {
      id: 4,
      role: "Full Stack Projects",
      company: "Independent / Portfolio",
      duration: "2024 - 2025",
      desc: "Developed high-impact projects like the Judiciary Bahamas Project (Backend integration) and Research Collab, focusing on seamless user communication and productivity enhancement. Built multiple cross-platform mobile apps with React Native.",
      type: "projects",
      technologies: ["React Native", "Node.js", "MongoDB", "Express"]
    }
  ];

  // Helper function to get icon based on type
  const getTypeIcon = (type) => {
    switch (type) {
      case 'mobile':
        return <FaMobile className="text-[#8B5CF6] w-4 h-4" />;
      case 'web':
        return <FaLaptopCode className="text-[#8B5CF6] w-4 h-4" />;
      default:
        return <FaGlobe className="text-[#8B5CF6] w-4 h-4" />;
    }
  };

  // Helper function to get role badge color
  const getRoleBadge = (type) => {
    switch (type) {
      case 'mobile':
        return "bg-[#8B5CF6]/20 text-[#8B5CF6] border-[#8B5CF6]/30";
      case 'web':
        return "bg-[#06B6D4]/20 text-[#06B6D4] border-[#06B6D4]/30";
      default:
        return "bg-[#F59E0B]/20 text-[#F59E0B] border-[#F59E0B]/30";
    }
  };

  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#121212] text-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Work <span className="bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] mx-auto mb-4 rounded-full"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Transforming ideas into scalable digital solutions — Web & Mobile
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">

          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[#8B5CF6] to-transparent"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center justify-between w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
              >
                {/* Timeline Dot with Pulse Effect */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#8B5CF6] rounded-full border-4 border-[#121212] z-10 shadow-[0_0_15px_rgba(139,92,246,0.5)] animate-pulse"></div>

                {/* Card Container */}
                <div className="ml-12 md:ml-0 md:w-[45%]">
                  <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-6 md:p-8 rounded-2xl border border-gray-800 hover:border-[#8B5CF6]/50 transition-all duration-300 group shadow-xl hover:shadow-2xl hover:shadow-[#8B5CF6]/5">

                    {/* Role Type Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`inline-flex items-center gap-2 px-3 py-1 ${getRoleBadge(exp.type)} text-xs font-bold uppercase tracking-widest rounded-full border`}>
                        {getTypeIcon(exp.type)}
                        <span>{exp.type === 'mobile' ? 'Mobile Dev' : exp.type === 'web' ? 'Web Dev' : 'Projects'}</span>
                      </div>

                      {/* Date Tag */}
                      <div className="inline-block px-3 py-1 bg-gray-800/50 text-gray-400 text-[10px] font-bold uppercase tracking-widest rounded-full">
                        {exp.duration}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-1 group-hover:text-[#8B5CF6] transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-gray-300 text-sm font-medium mb-3">
                      @{exp.company}
                    </p>

                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {exp.desc}
                    </p>

                    {/* Technologies Tags */}
                    {exp.technologies && (
                      <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-gray-800">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-[#252525] text-gray-300 text-[10px] font-medium rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Spacer for desktop layout */}
                <div className="hidden md:block md:w-[45%]"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Current Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#8B5CF6]/10 to-[#A78BFA]/10 rounded-full border border-[#8B5CF6]/30">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-300">Currently working at</span>
            <span className="text-[#8B5CF6] font-semibold">Wimosoft</span>
            <span className="text-gray-400">as Mobile App Developer</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;