import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SiPython, SiReact, SiNodedotjs, SiPostgresql, SiTensorflow } from 'react-icons/si';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 'coreai',
      title: 'CoreAI',
      description: 'A comprehensive multi-model AI platform providing advanced natural language processing, computer vision, and machine learning capabilities through a unified API interface.',
      technologies: [
        { name: 'Python', icon: SiPython },
        { name: 'NLP', icon: SiTensorflow },
        { name: 'FastAPI', icon: SiPython },
        { name: 'TensorFlow', icon: SiTensorflow },
      ],
      githubUrl: '#',
      liveUrl: '#',
      featured: true,
    },
    {
      id: 'nivaas',
      title: 'Nivaas',
      description: 'A complete hostel management solution serving 100+ active users. Features include room allocation, maintenance requests, mess management, and real-time notifications.',
      technologies: [
        { name: 'React Native', icon: SiReact },
        { name: 'NeonDB', icon: SiPostgresql },
        { name: 'NestJS', icon: SiNodedotjs },
        { name: 'TypeScript', icon: SiNodedotjs },
      ],
      githubUrl: '#',
      liveUrl: '#',
      featured: true,
    },
    {
      id: 'mithaya',
      title: 'Mithaya Darphan',
      description: 'AI-powered fake account detection system that achieved finalist status in Smart India Hackathon 2024. Uses advanced ML algorithms to identify suspicious social media profiles.',
      technologies: [
        { name: 'Machine Learning', icon: SiTensorflow },
        { name: 'NLP', icon: SiPython },
        { name: 'Python', icon: SiPython },
        { name: 'Data Science', icon: SiTensorflow },
      ],
      githubUrl: '#',
      liveUrl: '#',
      featured: true,
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-orbitron bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Innovative solutions that showcase my expertise in AI, mobile development, and full-stack engineering
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 overflow-hidden"
              whileHover={{ 
                scale: 1.02, 
                boxShadow: '0 25px 50px rgba(139, 92, 246, 0.15)',
                borderColor: 'rgba(139, 92, 246, 0.5)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-100 mb-3 font-orbitron group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mb-8">
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 + techIndex * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-2 bg-gray-700/50 px-3 py-2 rounded-full text-sm"
                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(139, 92, 246, 0.2)' }}
                      >
                        <tech.icon className="text-gray-300" />
                        <span className="text-gray-300 font-medium">{tech.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <motion.a
                    href={project.githubUrl}
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-700/50 hover:bg-gray-700/70 text-gray-300 hover:text-white rounded-lg transition-all duration-300"
                    whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub />
                    <span className="font-medium">Code</span>
                  </motion.a>
                  
                  <motion.a
                    href={project.liveUrl}
                    className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white rounded-lg transition-all duration-300"
                    whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(79, 70, 229, 0.3)' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt />
                    <span className="font-medium">Live</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;