import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      desc: "A full-featured online store with shopping cart, user authentication, and payment processing.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      demoLink: "https://frontend-two-zeta-70.vercel.app/", 
      codeLink: "https://github.com/your-username/your-repo"
    },
    {
      id: 2,
      title: "Task Management App",
      desc: "A productivity application with drag-and-drop functionality and real-time updates.",
      image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?q=80&w=1000&auto=format&fit=crop",
      tags: ["Vue.js", "Firebase", "Tailwind CSS", "WebSockets"],
      demoLink: "https://your-demo-link.com",
      codeLink: "https://github.com/your-username/your-repo"
    },
    {
      id: 3,
      title: "Fitness Tracker",
      desc: "A mobile app for tracking workouts, nutrition, and health metrics.",
      image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=1000&auto=format&fit=crop",
      tags: ["React Native", "GraphQL", "MySQL", "Chart.js"],
      demoLink: "https://your-demo-link.com",
      codeLink: "https://github.com/your-username/your-repo"
    }
  ];

  return (
    <section className="py-20 bg-[#121212] text-white px-[10%]">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-3">
          My <span className="text-[#8B5CF6]">Projects</span>
        </h2>
        <p className="text-gray-400">A selection of my recent work</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-[#1f1f1f] rounded-3xl overflow-hidden shadow-xl border border-gray-800 group flex flex-col h-full"
          >
            {/* Image Section */}
            <div className="h-52 w-full overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-2 group-hover:text-[#8B5CF6] transition-colors">
                {project.title}
              </h3>
              
              <div className="flex-grow">
                <p className="text-gray-400 text-sm mb-5 leading-relaxed">
                  {project.desc}
                </p>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-[#2d2d2d] text-gray-300 text-[10px] font-medium rounded-full border border-gray-700">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons Row */}
              <div className="flex gap-3 mt-auto">
                {/* target="_blank" use kiya hai new tab ke liye */}
                <a 
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2.5 bg-[#8B5CF6] text-white text-sm font-semibold rounded-xl hover:bg-[#7c4ee4] transition-all shadow-lg shadow-[#8b5cf633]"
                >
                  View Demo
                </a>
                <a 
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2.5 border border-gray-600 text-white text-sm font-semibold rounded-xl hover:bg-gray-800 transition-all"
                >
                  Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;