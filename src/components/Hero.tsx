import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaBrain, FaMobile } from 'react-icons/fa';
import CustomParticles from './CustomParticles';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <CustomParticles />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.h1 
            className="text-5xl sm:text-6xl lg:text-7xl font-bold font-orbitron bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Aman Mishra
          </motion.h1>
          
          <motion.p 
            className="text-xl sm:text-2xl text-gray-300 font-medium"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            AI Engineer & Mobile App Developer
          </motion.p>
          
          <motion.p 
            className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Building intelligent systems and mobile-first solutions that transform ideas into reality.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-400"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="flex items-center gap-2">
              <FaBrain className="text-purple-400" />
              <span>SIH 2024 Finalist</span>
            </div>
            <div className="flex items-center gap-2">
              <FaMobile className="text-pink-400" />
              <span>100+ Nivaas Users</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCode className="text-indigo-400" />
              <span>250+ DSA Problems Solved</span>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-indigo-500/25 transition-all duration-300"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(79, 70, 229, 0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border-2 border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-white font-semibold rounded-lg transition-all duration-300"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(244, 114, 182, 0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;