import React from 'react';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f0f0f] border-t border-gray-800 py-12 px-[10%]">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
        
        {/* Logo or Name */}
        <div className="text-2xl font-bold tracking-tighter">
          SUFYAN<span className="text-[#8B5CF6]">.</span>
        </div>

        {/* Social Links */}
        <div className="flex gap-6">
          {[
            { Icon: Github, link: "https://github.com" },
            { Icon: Linkedin, link: "https://linkedin.com" },
            { Icon: Twitter, link: "https://twitter.com" },
            { Icon: Instagram, link: "https://instagram.com" }
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#8B5CF6] transition-colors duration-300"
            >
              <item.Icon size={22} />
            </a>
          ))}
        </div>

        {/* Horizontal Line (Optional for extra look) */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-800 to-transparent my-2"></div>

        {/* Copyright Text */}
        <p className="text-gray-500 text-sm text-center">
          © {currentYear} <span className="text-white font-medium">Sufyan Developer</span>. 
          All rights reserved. Made with <span className="text-[#8B5CF6]">React</span>
        </p>

      </div>
    </footer>
  );
};

export default Footer;