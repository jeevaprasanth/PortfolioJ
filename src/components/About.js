import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaCode, FaUser } from 'react-icons/fa';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const timelineItems = [
    {
      year: '2026 - Present',
      title: 'Trainee Engineer – CPSE Operations',
      company: 'Larsen & Toubro',
      type: 'work',
      description: 'Developing and maintaining internal web applications,Building responsive user interfaces using React and JavaScript,Working with APIs, databases, and modern web technologies.',
      icon: FaCode
    },
    {
       year: '2025 - 2026',
      title: 'Web Development Intern',
      company: 'Algonive',
      type: 'work',
      description: 'Developing and maintaining web applications using MERN stack. Leading a team of 3 developers and implementing best practices for code quality and performance.',
      icon: FaCode
    },
    {
     year: '2022 - 2026',
      title: 'B.Tech in Artifical Intelligence and Data Science',
      company: 'Muthayammal Engineering College',
      type: 'education',
      description: 'Graduated with honors in B.Tech in Artifical Intelligence and Data Science',
      icon: FaGraduationCap
    },
  ];

  const skills = [
    'Problem Solving',
    'Responsive Web Design',
    'Team Collaboration',
    'Code Review',
    'Quick Learner',
    'Client Communication'
  ];

  return (
    <section id="about" className="py-20 relative">
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
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto rounded-full"></div>
          </motion.div>

          {/* About Content */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Personal Introduction */}
            <motion.div variants={itemVariants}>
              <div className="glass rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <FaUser className="text-3xl text-primary-400 mr-4" />
                  <h3 className="text-2xl font-bold text-white">Personal Introduction</h3>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                Hello! I'm Jeevaprasanth S, a passionate Full-Stack Web Developer with a strong interest in building modern, responsive, and user-friendly web applications. 
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                 I specialize in React.js, Node.js, Express.js, MySQL, and MongoDB, creating scalable and high-performance web solutions with clean, maintainable code. I enjoy transforming ideas into functional applications while focusing on performance, user experience, and best development practices.

                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Currently, I work as a Trainee Engineer at Larsen & Toubro (L&T), contributing to enterprise web application development while continuously improving my skills in modern web technologies.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  I am always eager to learn new technologies, build innovative projects, and deliver high-quality solutions that solve real-world problems.
                </p>
              </div>
            </motion.div>

            {/* Key Skills */}
            <motion.div variants={itemVariants}>
              <div className="glass rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Key Skills & Attributes</h3>
                <div className="grid grid-cols-2 gap-4">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="bg-white/5 rounded-lg p-3 text-center"
                    >
                      <span className="text-gray-300 font-medium">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Timeline */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-white text-center mb-12">Education & Experience</h3>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-purple-600"></div>

              {/* Timeline Items */}
              <div className="space-y-12">
                {timelineItems.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    {/* Content Card */}
                    <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="glass rounded-xl p-6"
                      >
                        <div className="flex items-center justify-center mb-2">
                          <item.icon className={`text-2xl text-primary-400 ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'}`} />
                        </div>
                        <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                        <p className="text-primary-400 font-medium mb-1">{item.company}</p>
                        <p className="text-gray-400 text-sm mb-3">{item.year}</p>
                        <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                      </motion.div>
                    </div>

                    {/* Timeline Dot */}
                    <div className="w-2/12 flex justify-center">
                      <motion.div
                        whileHover={{ scale: 1.5 }}
                        className="w-6 h-6 bg-white rounded-full border-4 border-primary-500 z-10"
                      />
                    </div>

                    {/* Empty Space */}
                    <div className="w-5/12"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
