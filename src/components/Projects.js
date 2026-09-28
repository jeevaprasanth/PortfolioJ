import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaFilter } from 'react-icons/fa';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with user authentication, payment integration, and admin dashboard. Built with MERN stack and Redux for state management.',
      image: 'https://cdn.corenexis.com/f/TC2tRS7NiD0.png',
      techStack: ['HTML', 'CSS', 'JavaScript', 'React'],
      category: 'fullstack',
      liveDemo: 'https://blaze-dept-stores.netlify.app/',
      github: 'https://github.com/jeevaprasanth/department-store-Project',
      featured: false
    },
    {
      id: 2,
      title: 'Task Manager',
      description: 'A task management application with real-time updates and team collaboration features.',
      image: 'https://cdn.corenexis.com/f/7easLbVFJYb.png',
      techStack: ['HTML', 'CSS', 'JavaScript', 'React', 'Firebase'],
      category: 'fullstack',
      liveDemo: 'https://task-manager-eight-wine-29.vercel.app/',
      github: 'https://github.com/jeevaprasanth/Task-Manager',
      featured: false
    },
    {
      id: 3,
      title: 'Loan Prediction',
      description: 'A machine learning model that predicts loan approval based on user input. Built with Python and Flask.',
      image: 'https://cdn.corenexis.com/f/uQngfTu9NcW.png',
      techStack: ['Python', 'Flask', 'SQLite', 'HTML', 'CSS', 'JavaScript'],
      category: 'fullstack',
      liveDemo: 'https://github.com/jeevaprasanth/Loanprediction',
      github: 'https://github.com/jeevaprasanth/Loanprediction',
      featured: false
    },
    {
      id: 4,
      title: 'PDF Analyzer',
      description: 'A web application that analyzes PDF documents and extracts relevant information. Built with React and Tailwind CSS.',
      image: 'https://cdn.corenexis.com/f/hUCp2h7DiYE.png',
      techStack: ['React', 'node.js', 'Express.js', 'MySQL'],
      category: 'fullstack',
      liveDemo: 'https://pdf-analyzer-m8yi.vercel.app/',
      github: 'https://github.com/jeevaprasanth/PDFAnalyzer',
      featured: false
    }
  ];

  const filters = [
    { id: 'all', name: 'All Projects' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const ProjectCard = ({ project, index }) => (
    <motion.div
      variants={itemVariants}
      className="glass rounded-xl overflow-hidden group hover:shadow-2xl transition-all duration-300"
      whileHover={{ y: -10 }}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-white text-xs font-bold">
            Featured
          </div>
        )}

        {/* Overlay with quick actions */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div className="flex space-x-3">
            <motion.a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-white text-sm font-medium flex items-center space-x-2 hover:bg-white/30 transition-colors"
            >
              <FaExternalLinkAlt className="w-3 h-3" />
              <span>Live Demo</span>
            </motion.a>
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-white text-sm font-medium flex items-center space-x-2 hover:bg-white/30 transition-colors"
            >
              <FaGithub className="w-3 h-3" />
              <span>Code</span>
            </motion.a>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-300 text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-2 py-1 bg-white/10 rounded-full text-xs text-gray-300 border border-white/20"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <motion.a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 px-4 py-2 bg-gradient-to-r from-primary-500 to-purple-600 rounded-lg text-white text-sm font-medium text-center hover:shadow-lg transition-all duration-300"
          >
            Live Demo
          </motion.a>
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 px-4 py-2 border border-white/30 rounded-lg text-white text-sm font-medium text-center hover:bg-white/10 transition-all duration-300"
          >
            View Code
          </motion.a>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto rounded-full mb-8"></div>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and experience
              in building modern web applications.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 cursor-pointer ${activeFilter === filter.id
                  ? 'bg-gradient-to-r from-primary-500 to-purple-600 text-white'
                  : 'glass text-gray-300 hover:text-white'
                  }`}
              >
                <FaFilter className="w-3 h-3" />
                <span>{filter.name}</span>
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>

          {/* No Projects Message */}
          {filteredProjects.length === 0 && (
            <motion.div
              variants={itemVariants}
              className="text-center py-12"
            >
              <p className="text-gray-400 text-lg">
                No projects found in this category.
              </p>
            </motion.div>
          )}

          {/* View All Projects */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <motion.a
              href="https://github.com/jeevaprasanth?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 px-8 py-3 border-2 border-white/30 rounded-full text-white font-medium hover:bg-white/10 transition-all duration-300"
            >
              <FaGithub className="w-5 h-5" />
              <span>View All Projects on GitHub</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
