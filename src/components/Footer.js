import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope, FaHeart } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
    },
    {
      icon: FaInstagram,
      href: 'https://www.instagram.com/jeeva_735?igsh=N3M0dnRjeGI3eXpk',
      label: 'Instagram',
      color: 'hover:text-pink-400'
    },
    {
      icon: FaEnvelope,
      href: 'mailto:jeevaprasanth32@gmail.com',
      label: 'Email',
      color: 'hover:text-primary-400'
    }
  ];

  const quickLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Services', to: 'services' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' }
  ];

  return (
    <footer className="relative border-t border-white/10">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/50 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="py-12"
        >
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">JS</span>
                </div>
                <span className="text-xl font-bold gradient-text">Jeevaprasanth</span>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Passionate Web developer creating innovative web solutions 
                with modern technologies. Let's build something amazing together.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`text-gray-400 text-xl transition-colors duration-300 ${social.color}`}
                  >
                    <social.icon />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.to}
                      spy={true}
                      smooth={true}
                      offset={-80}
                      duration={500}
                      className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold text-white mb-4">Let's Connect</h3>
              <div className="space-y-3">
                <div>
                  <a
                    href="mailto:jeevaprasanth32@gmail.com"
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-300"
                  >
                    jeevaprasanth32@gmail.com
                  </a>
                </div>
                <div>
                  <a
                    href="tel:+91 8903245730"
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-300"
                  >
                    +918903245730
                  </a>
                </div>
                <div className="text-gray-300">
                  Rasipuram, Namakkal
                </div>
              </div>
        
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div
            variants={itemVariants}
            className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          >
            <div className="text-gray-400 text-sm flex items-center space-x-2">
              <span>© {currentYear} Jeevaprasanth S. All rights reserved.</span>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <FaHeart className="text-red-500" />
              </motion.div>
              <span>using React.js</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
