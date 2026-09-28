import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import TypingAnimation from './TypingAnimation';
import { FaGithub, FaLinkedin, FaTwitter, FaDownload, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

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

  const socialLinks = [
    {
      icon: FaGithub,
      href: 'https://github.com/jeevaprasanth',
      label: 'GitHub',
      color: 'hover:text-gray-400'
    },
    {
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/jeevaprasanth-s-847924263/',
      label: 'LinkedIn',
      color: 'hover:text-blue-400'
    },
    {
      icon: FaTwitter,
      href: 'https://x.com/Jeevaprasa86661',
      label: 'Twitter',
      color: 'hover:text-cyan-400'
    }
  ];

  const roles = [
    'MERN Stack Developer',
    'React Developer',
    'UI Developer',
    'Web Developer'
  ];


  return (
    <>
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 to-purple-900/20 pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            className="text-center"
          >
            {/* Profile Image */}
            <motion.div
              variants={itemVariants}
              className="mb-8 inline-block"
            >
              <div className="relative">
                <div className="w-48 h-48 md:w-64 md:h-64 mx-auto relative">
                  {/* Glowing border animation */}
                  <motion.div
                    animate={{
                      boxShadow: [
                        '0 0 20px rgba(102, 126, 234, 0.5)',
                        '0 0 40px rgba(102, 126, 234, 0.8)',
                        '0 0 60px rgba(118, 75, 162, 0.6)',
                        '0 0 20px rgba(102, 126, 234, 0.5)'
                      ]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 rounded-full"
                  />

                  {/* Profile image placeholder */}
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/20 glass">
                    <img
                      src="https://cdn.corenexis.com/f/HrYN1FG96kh.png"
                      alt="Jeevaprasanth S"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Name and Title */}
            <motion.div variants={itemVariants} className="mb-6">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Jeevaprasanth S
              </h1>
              <div className="text-xl md:text-2xl text-gray-300 h-8">
                <TypingAnimation
                  strings={roles}
                  typeSpeed={50}
                  backSpeed={30}
                  className="gradient-text font-semibold"
                />
              </div>
            </motion.div>

            {/* Introduction */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              I build fast, responsive and modern web applications using React, JavaScript, Node.js and MySQL. I enjoy creating user-friendly interfaces and scalable web solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            >
              <motion.a
                href="/jeevaResume.pdf"
                download="jeevaResume.pdf"
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary px-8 py-3 bg-gradient-to-r from-primary-500 to-purple-600 text-white rounded-full font-semibold flex items-center justify-center space-x-2 hover:shadow-lg transition-all duration-300"
              >
                <FaDownload />
                <span>Download Resume</span>
              </motion.a>


              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="btn-primary px-8 py-3 border-2 border-white/30 text-white rounded-full font-medium flex items-center justify-center space-x-2 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                >
                  <FaEnvelope />
                  <span>Hire Me</span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center space-x-6"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`text-gray-400 text-2xl transition-colors duration-300 ${social.color}`}
                >
                  <social.icon />
                </motion.a>
              ))}
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              variants={itemVariants}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-gray-400"
              >
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="cursor-pointer"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                x: [0, Math.random() * 100 - 50, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      </section>

    </>
  );
};

export default Home;
