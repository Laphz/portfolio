import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiPython, SiTensorflow, SiReact, SiNodedotjs, SiMongodb, SiJavascript,
  SiTypescript, SiTailwindcss, SiGit, SiAndroidstudio, SiFirebase, SiPostgresql
} from 'react-icons/si';
import { FaBrain, FaMobile, FaServer, FaCode } from 'react-icons/fa';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'AI/ML',
      icon: FaBrain,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Python', icon: SiPython },
        { name: 'TensorFlow/PyTorch', icon: SiTensorflow },
        { name: 'NLP', icon: FaBrain },
        { name: 'Scikit-learn', icon: SiPython },
      ],
    },
    {
      title: 'Mobile Dev',
      icon: FaMobile,
      color: 'from-indigo-500 to-purple-500',
      skills: [
        { name: 'React Native', icon: SiReact },
        { name: 'Expo', icon: SiReact },
        { name: 'Firebase', icon: SiFirebase },
        { name: 'Android Studio', icon: SiAndroidstudio },
      ],
    },
    {
      title: 'Backend',
      icon: FaServer,
      color: 'from-green-500 to-teal-500',
      skills: [
        { name: 'NestJS', icon: SiNodedotjs },
        { name: 'FastAPI', icon: SiPython },
        { name: 'NeonDB', icon: SiPostgresql },
        { name: 'Drizzle ORM', icon: SiPostgresql },
      ],
    },
    {
      title: 'Web',
      icon: FaCode,
      color: 'from-blue-500 to-indigo-500',
      skills: [
        { name: 'React.js', icon: SiReact },
        { name: 'Next.js', icon: SiReact },
        { name: 'TypeScript', icon: SiTypescript },
        { name: 'Tailwind CSS', icon: SiTailwindcss },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-orbitron bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building intelligent systems and modern applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
              whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(139, 92, 246, 0.1)' }}
            >
              <div className="text-center mb-6">
                <div className={`inline-flex p-4 rounded-full bg-gradient-to-br ${category.color} mb-4`}>
                  <category.icon className="text-2xl text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-200 font-orbitron">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 p-3 rounded-lg bg-gray-700/30 hover:bg-gray-700/50 transition-all duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <skill.icon className="text-lg text-gray-300" />
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-500/20 to-pink-500/20 backdrop-blur-sm rounded-full px-8 py-4 border border-purple-500/30">
            <FaCode className="text-pink-400" />
            <span className="text-gray-300 font-medium">250+ DSA Problems Solved</span>
            <span className="text-gray-500">•</span>
            <span className="text-gray-300">LeetCode & CodeChef</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;