import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Github, Linkedin, Globe, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitted: false,
    loading: false,
    success: false,
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ ...status, loading: true });

    // Simulate form submission (Replace with your actual backend)
    setTimeout(() => {
      console.log('Form Data:', formData);
      setStatus({
        submitted: true,
        loading: false,
        success: true,
        message: 'Thank you! I\'ll get back to you soon. 🚀'
      });

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setStatus({ submitted: false, loading: false, success: false, message: '' });
      }, 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <MapPin className="text-[#8B5CF6] w-6 h-6" />,
      title: "Location",
      info: "Main Gulberg, Lahore, Pakistan",
      link: null
    },
    {
      icon: <Mail className="text-[#8B5CF6] w-6 h-6" />,
      title: "Email",
      info: "codewithsufi05@gmail.com",
      link: "mailto:codewithsufi05@gmail.com"
    },
    {
      icon: <Phone className="text-[#8B5CF6] w-6 h-6" />,
      title: "Phone",
      info: "+92 328 5866299",
      link: "tel:+923285866299"
    }
  ];

  const socialLinks = [
    { icon: <Github size={20} />, url: "https://github.com/CodewithSuffyan", label: "GitHub" },
    { icon: <Linkedin size={20} />, url: "https://www.linkedin.com/in/muhammad-sufyan-web/", label: "LinkedIn" },
    { icon: <Globe size={20} />, url: "#", label: "Portfolio" }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#121212] text-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Get In <span className="bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] mx-auto mb-4 rounded-full"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Let's collaborate on your next web or mobile project!
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-16">

          {/* Left Side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <form onSubmit={handleSubmit} className="space-y-6 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-6 md:p-8 rounded-2xl border border-gray-800 shadow-xl">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">
                  Your Name <span className="text-[#8B5CF6]">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#121212] border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] transition-all text-white"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">
                  Email Address <span className="text-[#8B5CF6]">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#121212] border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] transition-all text-white"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">
                  Your Message <span className="text-[#8B5CF6]">*</span>
                </label>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#121212] border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] transition-all text-white resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status.loading}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] hover:shadow-lg hover:shadow-[#8B5CF6]/30 text-white font-bold py-3 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status.loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>

              {/* Status Message */}
              {status.submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-center gap-2 p-3 rounded-xl ${status.success
                      ? 'bg-green-500/10 text-green-500 border border-green-500/20'
                      : 'bg-red-500/10 text-red-500 border border-red-500/20'
                    }`}
                >
                  {status.success ? <CheckCircle className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
                  <span className="text-sm">{status.message}</span>
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Right Side: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1 space-y-8"
          >
            {/* Contact Information Cards */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-5 group"
                >
                  <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-4 rounded-2xl border border-gray-800 group-hover:border-[#8B5CF6] transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">{item.title}</h4>
                    {item.link ? (
                      <a href={item.link} className="text-gray-400 hover:text-[#8B5CF6] transition-colors">
                        {item.info}
                      </a>
                    ) : (
                      <p className="text-gray-400">{item.info}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Media Links */}
            <div className="pt-6 border-t border-gray-800">
              <h4 className="text-lg font-bold mb-4 uppercase tracking-widest text-xs text-gray-500">
                Connect With Me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5 }}
                    className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-3 rounded-full border border-gray-800 hover:border-[#8B5CF6] hover:text-[#8B5CF6] transition-all duration-300"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Badge */}
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-5 rounded-2xl border border-gray-800">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <div>
                  <p className="text-sm font-medium">Available for Work</p>
                  <p className="text-xs text-gray-500">Open for freelance & full-time opportunities</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Google Maps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full h-[350px] md:h-[400px] rounded-2xl overflow-hidden border border-gray-800 grayscale hover:grayscale-0 transition-all duration-700 shadow-xl"
        >
          <iframe
            title="Lahore Map - Gulberg Area"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13606.332344719236!2d74.34360695!3d31.50365735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919045a28235431%3A0x43ff5999705f47d!2sGulberg%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="hover:scale-105 transition-transform duration-700"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;