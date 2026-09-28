import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaCheck, FaExclamationTriangle } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate email sending (demo mode)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
      
    } catch (error) {
      setErrors({ submit: 'Failed to send message. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'jeevaprasanth32@gmail.com'
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+91 8903245730'
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Rasipuram, Namakkal District, Tamil Nadu, India'
    }
  ];

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="glass rounded-2xl p-12">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", damping: 15, delay: 0.2 }}
                className="w-20 h-20 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <FaCheck className="text-white text-3xl" />
              </motion.div>
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-3xl font-bold text-white mb-4"
              >
                Message Sent Successfully!
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-gray-300 text-lg mb-6"
              >
                Thank you for reaching out. I'll get back to you as soon as possible.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex justify-center space-x-4"
              >
                <div className="px-4 py-2 bg-green-500/20 rounded-full text-green-400 text-sm border border-green-500/30">
                  Delivered
                </div>
                <div className="px-4 py-2 bg-yellow-500/20 rounded-full text-yellow-400 text-sm border border-yellow-500/30">
                  Demo Mode
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 relative">
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
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto rounded-full mb-8"></div>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Have a project in mind or an exciting opportunity? Feel free to reach out via email, phone, or LinkedIn. I'd be happy to connect with you.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-12"
          >
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              {contactInfo.map((info, index) => {
                const handleClick = () => {
                  switch (info.label) {
                    case 'Email':
                      window.location.href = `mailto:${info.value}?subject=Portfolio Contact&body=Hi Jeevaprasanth, I found your portfolio and would like to discuss...`;
                      break;
                    case 'Phone':
                      window.location.href = `tel:${info.value}`;
                      break;
                    case 'Location':
                      const encodedLocation = encodeURIComponent(info.value);
                      window.open(`https://maps.google.com/?q=${encodedLocation}`, '_blank');
                      break;
                    default:
                      break;
                  }
                };

                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-center space-x-4 cursor-pointer group"
                    onClick={handleClick}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-12 h-12 bg-gradient-to-r from-primary-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:shadow-lg transition-all duration-300"
                    >
                      <info.icon className="text-white text-xl" />
                    </motion.div>
                    <div className="flex-1">
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      <p className="text-white font-medium group-hover:text-primary-400 transition-colors duration-300">
                        {info.label === 'Email' ? (
                          <span className="underline">{info.value}</span>
                        ) : (
                          info.value
                        )}
                      </p>
                    </div>
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      className="text-gray-400 group-hover:text-primary-400 transition-colors duration-300"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </motion.div>
                  </motion.div>
                );
              })}

              <motion.div
                variants={itemVariants}
                className="pt-8 border-t border-white/20"
              >
                <p className="text-gray-300 mb-4">
                 Feel free to contact me through email, phone, or LinkedIn.
    I'm always open to discussing new opportunities,
    freelance projects, and collaborations.
                </p>
                
              </motion.div>
            </motion.div>

            
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
