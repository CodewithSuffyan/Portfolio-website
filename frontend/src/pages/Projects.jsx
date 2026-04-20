import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiSmartphone, FiMonitor } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      id: 1,  // ← Netflix clone yahan add hoga
      title: "Netflix Clone",
      category: "Streaming Platform",
      type: "web",
      desc: "A complete Netflix clone with user authentication, movie browsing, video streaming, and personalized recommendations. Built with MERN stack and TMDB API.",
      image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=1000&auto=format&fit=crop",
      tags: ["React", "Node.js", "MongoDB", "Express", "TMDB API", "TailwindCSS"],
      demoLink: "https://mern-netflix-clone-silk.vercel.app/",
      codeLink: "https://github.com/CodewithSuffyan/mern-netflix-clone",
      features: ["User Auth", "Movie Categories", "Video Player", "Search Movies", "Responsive Design"]
    },
    {
      id: 2,
      title: "Social Media App",
      category: "Mobile App",
      type: "mobile",
      desc: "A cross-platform social networking app with real-time messaging, posts, stories, and user profiles. Built with React Native and Supabase.",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1000&auto=format&fit=crop",
      tags: ["React Native", "Supabase", "Expo", "Real-time", "Push Notifications"],
      demoLink: "https://expo.dev/accounts/codewithsufi/projects/super-social-app/builds/ce05e216-4459-466f-a5c6-8fe71c1b493d",
      codeLink: "https://github.com/CodewithSuffyan/super-social-app",
      features: ["Real-time Chat", "Image Posts", "Push Notifications", "User Profiles"]
    },
    {
      id: 3,
      title: "Task Management App",
      category: "Web App",
      type: "web",
      desc: "A productivity application with drag-and-drop functionality, team collaboration, and real-time updates across devices.",
      image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?q=80&w=1000&auto=format&fit=crop",
      tags: ["React", "Firebase", "Tailwind CSS", "WebSockets", "Drag & Drop"],
      demoLink: "https://your-demo-link.com",
      codeLink: "https://github.com/your-username/task-manager",
      features: ["Drag & Drop", "Team Collaboration", "Real-time Sync", "Task Analytics"]
    },
    {
      id: 4,
      title: "Fitness Tracker",
      category: "Mobile App",
      type: "mobile",
      desc: "A comprehensive fitness app for tracking workouts, nutrition, water intake, and health metrics with beautiful charts.",
      image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=1000&auto=format&fit=crop",
      tags: ["React Native", "GraphQL", "MongoDB", "Chart.js", "HealthKit"],
      demoLink: "https://your-demo-link.com",
      codeLink: "https://github.com/your-username/fitness-tracker",
      features: ["Workout Log", "Nutrition Tracker", "Progress Charts", "Health Integration"]
    },
    {
      id: 5,
      title: "AI Image Generator",
      category: "Web App",
      type: "web",
      desc: "An AI-powered image generation app using OpenAI API. Generate unique images from text descriptions with advanced customization.",
      image: "https://images.unsplash.com/photo-1547954575-855750c57bd3?q=80&w=1000&auto=format&fit=crop",
      tags: ["React", "OpenAI API", "Node.js", "Tailwind CSS", "MongoDB"],
      demoLink: "https://your-demo-link.com",
      codeLink: "https://github.com/your-username/ai-image-generator",
      features: ["Text to Image", "Style Customization", "Image Gallery", "Download Option"]
    },
    {
      id: 6,
      title: "Food Delivery App",
      category: "Mobile App",
      type: "mobile",
      desc: "A complete food delivery solution with restaurant discovery, real-time order tracking, and integrated payment system.",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1000&auto=format&fit=crop",
      tags: ["React Native", "Node.js", "MongoDB", "Google Maps", "Razorpay"],
      demoLink: "https://your-demo-link.com",
      codeLink: "https://github.com/your-username/food-delivery",
      features: ["Restaurant Search", "Real-time Tracking", "Order History", "Reviews"]
    },
    {
      id: 7,
      title: "Food Delivery App",
      category: "Mobile App",
      type: "mobile",
      desc: "A complete food delivery solution with restaurant discovery, real-time order tracking, and integrated payment system.",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1000&auto=format&fit=crop",
      tags: ["React Native", "Node.js", "MongoDB", "Google Maps", "Razorpay"],
      demoLink: "https://your-demo-link.com",
      codeLink: "https://github.com/your-username/food-delivery",
      features: ["Restaurant Search", "Real-time Tracking", "Order History", "Reviews"]
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#121212] text-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] mx-auto mb-4 rounded-full"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my best work — web & mobile applications
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="group bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-2xl overflow-hidden shadow-xl border border-gray-800 hover:border-[#8B5CF6] transition-all duration-300 flex flex-col h-full"
            >
              {/* Image Section with Category Badge */}
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent opacity-60"></div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                  {project.type === "mobile" ? (
                    <FiSmartphone className="text-[#8B5CF6] w-3.5 h-3.5" />
                  ) : (
                    <FiMonitor className="text-[#8B5CF6] w-3.5 h-3.5" />
                  )}
                  <span className="text-xs font-medium text-white">{project.category}</span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#8B5CF6] transition-colors">
                  {project.title}
                </h3>

                <div className="flex-grow">
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.desc}
                  </p>

                  {/* Features List */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.features.slice(0, 3).map((feature) => (
                      <span key={feature} className="text-xs text-[#8B5CF6]/70">• {feature}</span>
                    ))}
                  </div>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-[#252525] text-gray-300 text-[10px] font-medium rounded-full border border-gray-700 hover:border-[#8B5CF6]/50 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-2.5 py-1 bg-[#252525] text-gray-300 text-[10px] font-medium rounded-full">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>

                {/* Buttons Row */}
                <div className="flex gap-3 mt-auto">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-[#8B5CF6]/30 transition-all duration-300"
                  >
                    <FiExternalLink className="w-3.5 h-3.5" />
                    Live Demo
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 border border-gray-600 text-white text-sm font-semibold rounded-xl hover:bg-gray-800 hover:border-[#8B5CF6] transition-all duration-300"
                  >
                    <FiGithub className="w-3.5 h-3.5" />
                    Source
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-transparent border-2 border-[#8B5CF6] text-[#8B5CF6] font-semibold rounded-xl hover:bg-[#8B5CF6] hover:text-white transition-all duration-300"
          >
            <FiGithub className="w-4 h-4" />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;