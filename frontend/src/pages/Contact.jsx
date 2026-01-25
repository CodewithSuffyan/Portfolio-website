import React from 'react';
import { MapPin, Mail, Phone, Github, Linkedin, Globe } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 bg-[#121212] text-white px-[10%]">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-3">
          Get In <span className="text-[#8B5CF6]">Touch</span>
        </h2>
        <p className="text-gray-400">Let's collaborate on your next MERN stack project!</p>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 mb-16">
        {/* Left Side: Contact Form */}
        <div className="flex-1">
          <form className="space-y-6 bg-[#1a1a1a] p-8 rounded-3xl border border-gray-800">
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">Your Name</label>
              <input 
                type="text" 
                className="w-full bg-[#121212] border border-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:border-[#8B5CF6] transition-colors text-white"
                placeholder="M. Sufyan"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">Email Address</label>
              <input 
                type="email" 
                className="w-full bg-[#121212] border border-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:border-[#8B5CF6] transition-colors text-white"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">Your Message</label>
              <textarea 
                rows="4"
                className="w-full bg-[#121212] border border-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:border-[#8B5CF6] transition-colors text-white resize-none"
                placeholder="How can I help you with your project?"
              ></textarea>
            </div>
            <button className="w-full bg-[#8B5CF6] hover:bg-[#7c4ee4] text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-[#8b5cf633]">
              Send Message
            </button>
          </form>
        </div>

        {/* Right Side: Real CV Contact Info */}
        <div className="flex-1 space-y-8">
          <div className="space-y-6">
            <div className="flex items-center gap-5 group">
              <div className="bg-[#1f1f1f] p-4 rounded-2xl border border-gray-800 group-hover:border-[#8B5CF6] transition-all">
                <MapPin className="text-[#8B5CF6] w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold">Location</h4>
                <p className="text-gray-400">Main Gulberg, Lahore, Pakistan</p>
              </div>
            </div>

            <div className="flex items-center gap-5 group">
              <div className="bg-[#1f1f1f] p-4 rounded-2xl border border-gray-800 group-hover:border-[#8B5CF6] transition-all">
                <Mail className="text-[#8B5CF6] w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold">Email</h4>
                <p className="text-gray-400">codewithsufi05@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-5 group">
              <div className="bg-[#1f1f1f] p-4 rounded-2xl border border-gray-800 group-hover:border-[#8B5CF6] transition-all">
                <Phone className="text-[#8B5CF6] w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold">Phone</h4>
                <p className="text-gray-400">03285866299</p>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="pt-6 border-t border-gray-800">
            <h4 className="text-lg font-bold mb-4 uppercase tracking-widest text-xs text-gray-500">Connect With Me</h4>
            <div className="flex gap-4">
              <a href="https://github.com/CodewithSuffyan" target="_blank" rel="noreferrer" className="bg-[#1f1f1f] p-3 rounded-full border border-gray-800 hover:border-[#8B5CF6] hover:text-[#8B5CF6] transition-all">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/muhammad-sufyan-web/" target="_blank" rel="noreferrer" className="bg-[#1f1f1f] p-3 rounded-full border border-gray-800 hover:border-[#8B5CF6] hover:text-[#8B5CF6] transition-all">
                <Linkedin size={20} />
              </a>
              <a href="#" className="bg-[#1f1f1f] p-3 rounded-full border border-gray-800 hover:border-[#8B5CF6] hover:text-[#8B5CF6] transition-all">
                <Globe size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Google Maps Iframe (Gulberg Lahore) */}
      <div className="w-full h-[400px] rounded-3xl overflow-hidden border border-gray-800 grayscale hover:grayscale-0 transition-all duration-500">
        <iframe 
          title="Lahore Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13606.332344719236!2d74.34360695!3d31.50365735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919045a28235431%3A0x43ff5999705f47d!2sGulberg%2C%20Lahore%2C%20Punjab!5e0!3m2!1sen!2spk!4v1700000000000!5m2!1sen!2spk" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;