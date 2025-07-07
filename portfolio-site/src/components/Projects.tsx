'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Play, Filter } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'AI-Powered Study Assistant',
    description: 'An intelligent study companion that personalizes learning experiences using machine learning algorithms.',
    category: 'AI/ML',
    tech: ['Python', 'TensorFlow', 'React', 'FastAPI'],
    image: '/api/placeholder/600/400',
    github: '#',
    demo: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'Real-time Collaboration Platform',
    description: 'A modern workspace solution with real-time collaboration features and advanced project management.',
    category: 'Full Stack',
    tech: ['Next.js', 'Socket.io', 'MongoDB', 'Redis'],
    image: '/api/placeholder/600/400',
    github: '#',
    demo: '#',
    featured: true,
  },
  {
    id: 3,
    title: 'Blockchain Voting System',
    description: 'Secure and transparent voting system built on blockchain technology with enhanced privacy features.',
    category: 'Blockchain',
    tech: ['Solidity', 'Web3.js', 'React', 'Ethereum'],
    image: '/api/placeholder/600/400',
    github: '#',
    demo: '#',
    featured: false,
  },
  {
    id: 4,
    title: 'E-commerce Analytics Dashboard',
    description: 'Comprehensive analytics dashboard for e-commerce businesses with predictive insights.',
    category: 'Full Stack',
    tech: ['Vue.js', 'Node.js', 'PostgreSQL', 'Chart.js'],
    image: '/api/placeholder/600/400',
    github: '#',
    demo: '#',
    featured: false,
  },
  {
    id: 5,
    title: 'Neural Network Visualizer',
    description: 'Interactive tool for visualizing and understanding neural network architectures and training processes.',
    category: 'AI/ML',
    tech: ['Python', 'PyTorch', 'D3.js', 'Flask'],
    image: '/api/placeholder/600/400',
    github: '#',
    demo: '#',
    featured: false,
  },
  {
    id: 6,
    title: 'Smart Home IoT System',
    description: 'Complete IoT ecosystem for smart home automation with mobile app and voice control.',
    category: 'IoT',
    tech: ['Arduino', 'React Native', 'MQTT', 'Firebase'],
    image: '/api/placeholder/600/400',
    github: '#',
    demo: '#',
    featured: false,
  },
];

const categories = ['All', 'AI/ML', 'Full Stack', 'Blockchain', 'IoT'];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = projects.filter(project => 
    selectedCategory === 'All' || project.category === selectedCategory
  );

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 4);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-950" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of my recent work spanning AI/ML, full-stack development, and innovative digital solutions.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg'
                  : 'bg-gray-800/50 text-gray-300 hover:text-white hover:bg-gray-700/50 border border-gray-700'
              }`}
            >
              <Filter className="w-4 h-4" />
              <span>{category}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <AnimatePresence mode="wait">
            {displayedProjects.map((project, index) => (
              <motion.div
                key={`${selectedCategory}-${project.id}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group relative bg-gray-800/50 border border-gray-700 rounded-2xl overflow-hidden hover:border-primary-500/50 transition-all duration-500 ${
                  project.featured ? 'md:col-span-2' : ''
                }`}
              >
                {/* Project Image */}
                <div className="relative h-64 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent z-10" />
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 z-20">
                      <span className="px-3 py-1 bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-sm font-semibold rounded-full">
                        Featured
                      </span>
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <motion.a
                        href={project.demo}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-primary-500/50 transition-all duration-300"
                      >
                        <Play className="w-5 h-5 text-white" />
                      </motion.a>
                      <motion.a
                        href={project.github}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-gray-700/50 transition-all duration-300"
                      >
                        <Github className="w-5 h-5 text-white" />
                      </motion.a>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-primary-500/20 text-primary-400 text-sm font-medium rounded-full">
                      {project.category}
                    </span>
                    <div className="flex space-x-2">
                      <a
                        href={project.demo}
                        className="p-2 text-gray-400 hover:text-white transition-colors duration-300"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      <a
                        href={project.github}
                        className="p-2 text-gray-400 hover:text-white transition-colors duration-300"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Show More Button */}
        {filteredProjects.length > 4 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.button
              onClick={() => setShowAll(!showAll)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
            >
              {showAll ? 'Show Less' : `View All Projects (${filteredProjects.length})`}
            </motion.button>
          </motion.div>
        )}

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gray-800/30 border border-gray-700 rounded-2xl p-8">
            <Github className="w-12 h-12 text-primary-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Explore More on GitHub</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Check out my complete collection of projects, contributions, and open-source work.
            </p>
            <motion.a
              href="https://github.com/mananvyas"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-all duration-300 space-x-2"
            >
              <Github className="w-5 h-5" />
              <span>Visit GitHub Profile</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
