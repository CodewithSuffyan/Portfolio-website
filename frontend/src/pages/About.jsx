import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Palette, Smartphone, Code2, Award, Rocket, Users, Zap } from 'lucide-react';

const About = () => {
  // Dynamic Cards Data
  const features = [
    {
      id: 1,
      title: "Innovative",
      desc: "Creating unique solutions to complex problems with cutting-edge technologies.",
      icon: <Lightbulb className="text-[#8B5CF6] w-6 h-6" />,
    },
    {
      id: 2,
      title: "Design Oriented",
      desc: "Beautiful design and user experience at the heart of everything I create.",
      icon: <Palette className="text-[#8B5CF6] w-6 h-6" />,
    },
    {
      id: 3,
      title: "Mobile First",
      desc: "Cross-platform apps with React Native that work seamlessly on iOS & Android.",
      icon: <Smartphone className="text-[#8B5CF6] w-6 h-6" />,
    },
    {
      id: 4,
      title: "Full Stack Mastery",
      desc: "End-to-end expertise from database design to responsive frontends & mobile apps.",
      icon: <Code2 className="text-[#8B5CF6] w-6 h-6" />,
    }
  ];

  // Stats Data
  const stats = [
    { id: 1, value: "20+", label: "Projects Completed", icon: <Rocket className="w-5 h-5" /> },
    { id: 2, value: "15+", label: "Happy Clients", icon: <Users className="w-5 h-5" /> },
    { id: 3, value: "3+", label: "Years Experience", icon: <Award className="w-5 h-5" /> },
    { id: 4, value: "24/7", label: "Support", icon: <Zap className="w-5 h-5" /> },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#121212] text-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">

        {/* Heading Section with Gradient */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] mx-auto mb-4 rounded-full"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get to know more about my background, passion, and what drives me to create amazing digital experiences
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

          {/* Left Side: Image with Glow Effect */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500"></div>

              {/* Image Container */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-gray-800 bg-[#1a1a1a]">
                <img
                  src="Sufyan1.jpg"
                  alt="About Me"
                  className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-105"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60"></div>
              </div>

              {/* Experience Badge */}
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] rounded-2xl p-4 shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold">3+</div>
                  <div className="text-xs text-white/80">Years of Excellence</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1 space-y-8"
          >
            {/* Bio Section */}
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                My <span className="text-[#8B5CF6]">Journey</span>
              </h3>
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  I am a results-driven <span className="text-[#8B5CF6] font-semibold">Full Stack Developer</span> with a deep passion for building scalable, high-performance web and mobile applications. With expertise in the <span className="text-[#8B5CF6] font-semibold">MERN Stack</span> including React Native for cross-platform mobile development, I bridge the gap between robust backend architectures, pixel-perfect web interfaces, and seamless iOS/Android mobile experiences.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  I specialize in crafting <span className="text-[#8B5CF6] font-semibold">RESTful APIs</span>, managing complex NoSQL databases, and writing clean, maintainable code that prioritizes performance and user experience across all devices. My goal is to transform complex business problems into elegant digital solutions for both web and mobile platforms.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  I believe in <span className="text-[#8B5CF6] font-semibold">continuous learning</span> and pushing the boundaries of what's possible on the web and mobile — creating digital experiences that work seamlessly everywhere.
                </p>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4">
              {stats.map((stat) => (
                <motion.div
                  key={stat.id}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-2xl p-4 text-center border border-gray-800 hover:border-[#8B5CF6] transition-all duration-300"
                >
                  <div className="flex justify-center mb-2 text-[#8B5CF6]">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Features Cards Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {features.map((card) => (
                <motion.div
                  key={card.id}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group p-5 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-2xl border border-gray-800 hover:border-[#8B5CF6] transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-[#8B5CF6]/10 rounded-xl p-2.5 group-hover:bg-[#8B5CF6]/20 transition-all duration-300">
                      {card.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold mb-1 group-hover:text-[#8B5CF6] transition-colors">
                        {card.title}
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;