import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Instagram, Heart, Code2 } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      Icon: Github,
      link: "https://github.com/CodewithSuffyan",
      label: "GitHub",
      color: "hover:text-[#8B5CF6]"
    },
    {
      Icon: Linkedin,
      link: "https://www.linkedin.com/in/muhammad-sufyan-web/",
      label: "LinkedIn",
      color: "hover:text-[#0077b5]"
    },
    {
      Icon: Twitter,
      link: "https://twitter.com/",
      label: "Twitter",
      color: "hover:text-[#1DA1F2]"
    },
    {
      Icon: Instagram,
      link: "https://instagram.com/",
      label: "Instagram",
      color: "hover:text-[#E4405F]"
    }
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="bg-gradient-to-b from-[#0a0a0a] to-[#0f0f0f] border-t border-gray-800 py-12 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto max-w-7xl">

        <div className="flex flex-col items-center gap-8">

          {/* Logo or Name with Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="text-3xl md:text-4xl font-bold tracking-tighter">
              SUFYAN<span className="text-[#8B5CF6]">.</span>
            </div>
            <p className="text-gray-500 text-sm mt-2">Full Stack & Mobile App Developer</p>
          </motion.div>

          {/* Quick Links */}
          <div className="hidden md:flex flex-wrap justify-center gap-6">
            {quickLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-400 hover:text-[#8B5CF6] text-sm transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex gap-4 md:gap-6">
            {socialLinks.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                className={`group relative text-gray-400 ${item.color} transition-all duration-300`}
                aria-label={item.label}
              >
                <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-2.5 rounded-full border border-gray-800 group-hover:border-[#8B5CF6] transition-all duration-300">
                  <item.Icon size={20} />
                </div>
                {/* Tooltip */}
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs bg-gray-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {item.label}
                </span>
              </motion.a>
            ))}
          </div>

          {/* Horizontal Line with Gradient */}
          <div className="w-full max-w-md h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

          {/* Copyright Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-sm text-center"
          >
            © {currentYear} <span className="text-white font-medium">Muhammad Sufyan</span>.
            All rights reserved. Made with{" "}
            <Heart className="inline w-3.5 h-3.5 text-red-500 animate-pulse" />{" "}
            using <span className="text-[#8B5CF6] font-medium">React & React Native</span>
          </motion.p>

          {/* Built with Badge */}
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <Code2 className="w-3 h-3" />
            <span>Built with MERN Stack + React Native</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;