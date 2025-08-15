import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaRocket, FaMedal, FaCode } from 'react-icons/fa';

const Timeline: React.FC = () => {
  const events = [
    {
      year: '2024',
      title: 'SIH Finalist',
      description: 'Achieved finalist status in Smart India Hackathon with Mithaya Darphan project',
      icon: FaTrophy,
      color: 'from-yellow-400 to-orange-500',
    },
    {
      year: '2023-2025',
      title: 'Nivaas Launch & Growth',
      description: 'Successfully launched and scaled hostel management app to 100+ active users',
      icon: FaRocket,
      color: 'from-green-400 to-teal-500',
    },
    {
      year: '2024-2025',
      title: 'CoreAI Release',
      description: 'Developed and released comprehensive multi-model AI platform',
      icon: FaMedal,
      color: 'from-purple-400 to-pink-500',
    },
    {
      year: '2022-2025',
      title: '250+ DSA Problems',
      description: 'Consistently solved algorithmic challenges across multiple platforms',
      icon: FaCode,
      color: 'from-indigo-400 to-blue-500',
    },
  ];

  return (
    <section id="timeline" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-orbitron bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Timeline & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Key milestones and accomplishments in my journey as a developer
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 opacity-30"></div>

          <div className="space-y-12">
            {events.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center ${
                  index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'
                } relative`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${event.color} flex items-center justify-center shadow-lg`}>
                    <event.icon className="text-white text-lg" />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-400 to-pink-400 animate-ping opacity-20"></div>
                </div>

                {/* Content card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <motion.div
                    className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
                    whileHover={{ 
                      scale: 1.02, 
                      boxShadow: '0 20px 40px rgba(139, 92, 246, 0.1)',
                      borderColor: 'rgba(139, 92, 246, 0.5)'
                    }}
                  >
                    <div className="mb-3">
                      <span className={`text-2xl font-bold bg-gradient-to-r ${event.color} bg-clip-text text-transparent font-orbitron`}>
                        {event.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-200 mb-2">{event.title}</h3>
                    <p className="text-gray-400">{event.description}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;