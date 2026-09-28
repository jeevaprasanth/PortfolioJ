import React from 'react';
import { motion } from 'framer-motion';

const Preloader = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    exit: { y: -20, opacity: 0 }
  };

  const loaderVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    },
    exit: {
      scale: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="preloader"
    >
      <div className="flex flex-col items-center justify-center">
        {/* Logo */}
        <motion.div
          variants={loaderVariants}
          className="mb-8"
        >
          <div className="w-24 h-24 mx-auto relative">
            {/* Glowing border */}
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
            
            {/* Logo content */}
            <div className="w-full h-full rounded-full bg-gradient-to-r from-primary-500 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-3xl">JS</span>
            </div>
          </div>
        </motion.div>

        {/* Loading text */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-2">Jeevaprasanth S</h2>
          <p className="text-gray-300">Loading amazing content...</p>
        </motion.div>

        {/* Loading dots */}
        <motion.div
          variants={itemVariants}
          className="flex space-x-3"
        >
          {[...Array(3)].map((_, index) => (
            <motion.div
              key={index}
              animate={{
                y: [0, -10, 0],
                opacity: [0.3, 1, 0.3]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: index * 0.2,
                ease: "easeInOut"
              }}
              className="w-3 h-3 bg-gradient-to-r from-primary-500 to-purple-600 rounded-full"
            />
          ))}
        </motion.div>

        {/* Progress bar */}
        <motion.div
          variants={itemVariants}
          className="w-64 mt-8"
        >
          <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
            <motion.div
              animate={{
                x: ['-100%', '100%']
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
              className="h-full w-full bg-gradient-to-r from-primary-500 to-purple-600"
            />
          </div>
        </motion.div>

        {/* Loading percentage */}
        <motion.div
          variants={itemVariants}
          className="mt-4"
        >
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-primary-400 font-medium"
          >
            Initializing Portfolio
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Preloader;
