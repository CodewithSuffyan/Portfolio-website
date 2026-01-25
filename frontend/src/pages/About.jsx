import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Palette } from 'lucide-react';

const About = () => {
  // Dynamic Cards Data
  const features = [
    {
      id: 1,
      title: "Innovative",
      desc: "I love creating unique solutions to complex problems with cutting-edge technologies.",
      icon: <Lightbulb className="text-[#8B5CF6] w-8 h-8" />,
    },
    {
      id: 2,
      title: "Design Oriented",
      desc: "Beautiful design and user experience are at the heart of everything I create.",
      icon: <Palette className="text-[#8B5CF6] w-8 h-8" />,
    }
  ];

  return (
    <section className="py-20 bg-[#121212] text-white px-[10%]">
      {/* Heading Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-2">
          About <span className="text-[#8B5CF6]">Me</span>
        </h2>
        <p className="text-gray-400">Get to know more about my background and passion</p>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Left Side: Image */}
        <div className="flex-1">
          <div className="rounded-3xl overflow-hidden border-2 border-gray-800 shadow-xl">
            <img
              src="Sufyan1.jpg"
              alt="About Me"
              className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="flex-1 space-y-8">
          <div>
            <h3 className="text-3xl font-bold mb-4">My Journey</h3>
            <p className="text-gray-400 leading-relaxed">
              I am a results-driven Full Stack Developer with a deep passion for building scalable and responsive web applications. With expertise in the MERN Stack, I bridge the gap between robust backend architectures and seamless, pixel-perfect user interfaces. I specialize in crafting RESTful APIs, managing complex NoSQL databases, and writing clean, maintainable code that prioritizes performance and user experience. My goal is to transform complex business problems into elegant digital solutions.
            </p>
            <p className="text-gray-400 mt-4 leading-relaxed">
              I believe in continuous learning and pushing the boundaries of what's
              possible on the web.
            </p>
          </div>

          {/* Dynamic Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((card) => (
              <motion.div
                key={card.id}
                whileHover={{ y: -10 }}
                className="p-6 bg-[#1a1a1a] rounded-2xl border border-gray-800 hover:border-[#8B5CF6] transition-all"
              >
                <div className="mb-4 bg-[#121212] w-fit p-3 rounded-xl">
                  {card.icon}
                </div>
                <h4 className="text-xl font-bold mb-2">{card.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;