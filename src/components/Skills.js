import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaDatabase, FaPython } from 'react-icons/fa';
import { SiJavascript, SiMongodb, SiExpress, SiTailwindcss, SiRedux, SiTypescript } from 'react-icons/si';
import CustomCursor from './CustomCursor';

const Skills = () => {

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

  const skills = [
{
      name: 'Python',
      icon: FaPython,
      level: 90,
      category: 'backend',
      color: 'from-cyan-400 to-blue-600'
    },

    {
      name: 'React.js',
      icon: FaReact,
      level: 90,
      category: 'frontend',
      color: 'from-cyan-400 to-blue-600'
    },
    {
      name: 'JavaScript',
      icon: SiJavascript,
      level: 85,
      category: 'frontend',
      color: 'from-yellow-400 to-orange-600'
    },
    {
      name: 'HTML/CSS',
      icon: FaHtml5,
      level: 95,
      category: 'frontend',
      color: 'from-orange-400 to-red-600'
    },
    {
      name: 'Tailwind CSS',
      icon: SiTailwindcss,
      level: 88,
      category: 'frontend',
      color: 'from-teal-400 to-cyan-600'
    },
    {
      name: 'Node.js',
      icon: FaNodeJs,
      level: 80,
      category: 'backend',
      color: 'from-green-400 to-green-700'
    },
    {
      name: 'Express.js',
      icon: SiExpress,
      level: 82,
      category: 'backend',
      color: 'from-gray-400 to-gray-700'
    },
    {
      name: 'MongoDB',
      icon: SiMongodb,
      level: 78,
      category: 'database',
      color: 'from-green-500 to-green-800'
    },
    {
      name: 'SQL',
      icon: FaDatabase,
      level: 70,
      category: 'database',
      color: 'from-blue-500 to-indigo-700'
    },
    {
      name: 'Git',
      icon: FaGitAlt,
      level: 85,
      category: 'tools',
      color: 'from-orange-500 to-red-600'
    },
    {
      name: 'GitHub',
      icon: FaGitAlt,
      level: 85,
      category: 'tools',
      color: 'from-gray-500 to-gray-700'
    },
    {
      name: 'CSS3',
      icon: FaCss3Alt,
      level: 90,
      category: 'frontend',
      color: 'from-blue-400 to-blue-600'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'tools', name: 'Tools' },
    { id: 'database', name: 'Database' }
  ];

  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  const SkillCard = ({ skill }) => {
    return (
      <motion.div
        variants={itemVariants}
        className="glass rounded-xl p-6 hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.02 }}
      >
        <div className="flex items-center">
          <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${skill.color} flex items-center justify-center mr-4`}>
            <skill.icon className="text-white text-xl" />
          </div>
          <div className="flex-1">
            <h3 className="text-white font-semibold text-lg">{skill.name}</h3>
            <span className="text-gray-400 text-sm">{skill.category}</span>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <>
      <CustomCursor />
      <section id="skills" className="py-20 relative">
        <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto rounded-full mb-8"></div>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              I've worked with a variety of technologies in the web development world. 
              Here's my expertise level in each technology I've worked with.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 cursor-pointer ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-primary-500 to-purple-600 text-white'
                    : 'glass text-gray-300 hover:text-white'
                }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
          >
            {filteredSkills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </motion.div>

          {/* Additional Info */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">Continuous Learning</h3>
              <p className="text-gray-300 leading-relaxed">
                I'm always eager to learn new technologies and improve my skills. 
                Currently exploring advanced React patterns, and 
                machine learning applications in web development.
              </p>
              <div className="flex justify-center space-x-4 mt-6">
                <span className="px-4 py-2 bg-white/10 rounded-full text-gray-300 text-sm">
                  Fast Learner
                </span>
                <span className="px-4 py-2 bg-white/10 rounded-full text-gray-300 text-sm">
                  Problem Solver
                </span>
                <span className="px-4 py-2 bg-white/10 rounded-full text-gray-300 text-sm">
                  Team Player
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
    </>
  );
};

export default Skills;
