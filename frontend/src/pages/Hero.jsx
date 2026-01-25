import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // 1. useNavigate import kiya

const Hero = () => {
  const navigate = useNavigate(); // 2. Hook initialize kiya

  return (
    <section className="min-h-[90vh] flex flex-col-reverse md:flex-row items-center justify-between px-[10%] py-10 bg-[#121212] text-white">
      
      {/* Left Side: Text Content */}
      <div className="flex-1 space-y-6 mt-10 md:mt-0">
        <h2 className="text-4xl md:text-6xl font-bold leading-tight">
          Hi, I'm <span className="text-[#8B5CF6]">SUFYAN</span>
        </h2>

        <div className="flex">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-200 typewriter w-fit pr-1">
            Full Stack Developer
          </h3>
        </div>

        <p className="text-gray-400 text-lg max-w-lg leading-relaxed">
          I build scalable, high-performance web applications using the MongoDB, Express, React, and Node.js stack. 
          From seamless backend architectures to pixel-perfect frontends, I turn complex ideas into digital reality.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 pt-4">
          <button 
            onClick={() => navigate("/experience")} 
            className="px-8 py-3 bg-[#8B5CF6] text-white rounded-lg font-medium hover:bg-[#7c4ee4] transition-all shadow-lg shadow-[#8b5cf633]"
          >
            View Work
          </button>

          <button 
            onClick={() => navigate("/contact")} 
            className="px-8 py-3 border border-gray-600 text-white rounded-lg font-medium hover:bg-gray-800 transition-all"
          >
            Contact Me
          </button>
        </div>
      </div>

      {/* Right Side: Profile Image with Animation */}
      <div className="flex-1 flex justify-center md:justify-end">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Main Image Container */}
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#8B5CF6] shadow-2xl shadow-[#8b5cf644]">
            <img 
              src="Sufyan1.jpg" 
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Floating Circle Decoration */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 -right-4 w-12 h-12 bg-[#8B5CF6] rounded-full opacity-20"
          ></motion.div>
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;