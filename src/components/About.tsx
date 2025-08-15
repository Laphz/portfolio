import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaGraduationCap, FaCode, FaUsers } from 'react-icons/fa';

const About: React.FC = () => {
  const facts = [
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Bhopal, India',
      color: 'text-pink-400',
    },
    {
      icon: FaGraduationCap,
      label: 'Education',
      value: 'B.Tech CSE — TIT(E)',
      color: 'text-purple-400',
    },
    {
      icon: FaCode,
      label: 'Specialization',
      value: 'AI/ML, Full-stack, Mobile',
      color: 'text-indigo-400',
    },
    {
      icon: FaUsers,
      label: 'Leadership',
      value: 'Runs TDC coding club',
      color: 'text-green-400',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-orbitron bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-pulse"></div>
              <div className="absolute inset-2 rounded-full bg-gray-900 flex items-center justify-center">
                <div className="w-72 h-72 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-6xl font-bold text-gray-400">
                  AM
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate AI Engineer and Mobile App Developer with a deep love for creating intelligent systems that solve real-world problems. My journey spans from machine learning algorithms to intuitive mobile applications.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me solving algorithmic challenges, leading coding workshops at TDC, or exploring the latest advancements in AI and mobile technology.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {facts.map((fact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
                  whileHover={{ scale: 1.02, boxShadow: '0 10px 30px rgba(139, 92, 246, 0.1)' }}
                >
                  <div className="flex items-start space-x-4">
                    <fact.icon className={`text-2xl ${fact.color} mt-1`} />
                    <div>
                      <h3 className="font-semibold text-gray-200 mb-1">{fact.label}</h3>
                      <p className="text-gray-400 text-sm">{fact.value}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;