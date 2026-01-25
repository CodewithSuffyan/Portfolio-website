import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["Home", "About", "Skills", "Projects", "Experience", "Contact"];

  // Variants for staggered animation
  const menuVariants = {
    initial: { scaleY: 0, opacity: 0 },
    animate: { 
      scaleY: 1, 
      opacity: 1,
      transition: { duration: 0.5, ease: [0.12, 0, 0.39, 0], when: "beforeChildren", staggerChildren: 0.1 }
    },
    exit: { 
      scaleY: 0, 
      opacity: 0, 
      transition: { duration: 0.5, ease: [0.12, 0, 0.39, 1] } 
    }
  };

  const linkVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <nav className="relative flex items-center justify-between px-[8%] py-5 bg-[#121212] text-white z-50">
      {/* Logo */}
      <div className="flex flex-col leading-tight z-50">
        <h1 className="text-2xl font-bold tracking-wide">
          Sufyan<span className="text-[#8B5CF6]">Developer</span>
        </h1>
        <div className="h-2.5 w-2.5 bg-[#8B5CF6] rounded-full mt-1"></div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <NavLink
            key={item}
            to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            className={({ isActive }) =>
              `relative pb-1 text-sm font-medium transition-colors hover:text-[#8B5CF6] group ${isActive ? "text-[#8B5CF6]" : "text-gray-300"}`
            }
          >
            {({ isActive }) => (
              <>
                {item}
                <div className={`absolute bottom-0 left-0 h-[2px] bg-[#8B5CF6] transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}></div>
              </>
            )}
          </NavLink>
        ))}
      </div>

      {/* Mobile Toggle Button */}
      <button className="md:hidden z-50 cursor-pointer text-white" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      {/* Animated Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{ originY: 0 }} // Upar se niche khulega
            className="fixed top-0 left-0 w-full h-screen bg-[#1a1a1a] flex flex-col items-center justify-center gap-8 md:hidden z-40"
          >
            {navItems.map((item) => (
              <motion.div key={item} variants={linkVariants}>
                <NavLink
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `text-3xl font-bold transition-colors ${isActive ? "text-[#8B5CF6]" : "text-gray-300"}`
                  }
                >
                  {item}
                </NavLink>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;