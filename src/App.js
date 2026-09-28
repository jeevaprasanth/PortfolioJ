import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import Particles from './components/Particles';
import ScrollToTop from './components/ScrollToTop';
import { useTheme } from './contexts/ThemeContext';

const App = () => {
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
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

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className={`min-h-screen ${theme}`}>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <CustomCursor />
          <Particles />
          <Navbar />
          <ScrollToTop />
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <motion.section variants={sectionVariants}>
              <Home />
            </motion.section>
            
            <motion.section variants={sectionVariants}>
              <About />
            </motion.section>
            
            <motion.section variants={sectionVariants}>
              <Skills />
            </motion.section>
            
            <motion.section variants={sectionVariants}>
              <Services />
            </motion.section>
            
            <motion.section variants={sectionVariants}>
              <Projects />
            </motion.section>
            
            <motion.section variants={sectionVariants}>
              <Contact />
            </motion.section>
            
            <motion.section variants={sectionVariants}>
              <Footer />
            </motion.section>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default App;
