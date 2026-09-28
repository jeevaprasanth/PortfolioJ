import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaMobileAlt, FaPalette, FaDatabase, FaCloud, FaChartLine, FaShieldAlt, FaRocket } from 'react-icons/fa';

const Services = () => {
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

  const services = [
    {
      icon: FaCode,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies like React, Node.js, and MongoDB. Responsive design and optimal performance guaranteed.',
      features: ['React/HTML,CSS', 'Node.js/Express', 'MongoDB/MySQL', 'GitHub'],
      popular: true
    },
  ];

  const ServiceCard = ({ service, index }) => (
    <motion.div
      variants={itemVariants}
      className={`glass rounded-xl p-6 hover:shadow-xl transition-all duration-300 relative overflow-hidden group ${
        service.popular ? 'ring-2 ring-primary-500/50' : ''
      }`}
      whileHover={{ y: -10 }}
    >
      {/* Popular Badge */}
      {service.popular && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 + index * 0.1 }}
          className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-primary-500 to-purple-600 rounded-full text-white text-xs font-bold z-10"
        >
          Popular
        </motion.div>
      )}

      {/* Service Icon */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2 + index * 0.1 }}
        className="w-16 h-16 bg-gradient-to-r from-primary-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
      >
        <service.icon className="text-white text-2xl" />
      </motion.div>

      {/* Service Content */}
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
          <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
        </div>

        {/* Features */}
        <div className="space-y-2">
          {service.features.map((feature, featureIndex) => (
            <div key={featureIndex} className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
              <span className="text-gray-400 text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="services" className="py-20 relative">
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
              My <span className="gradient-text">Services</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto rounded-full mb-8"></div>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Professional freelance services to help bring your ideas to life. 
              Quality work delivered on time with modern technologies and best practices.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
