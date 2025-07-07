'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Play, Code2, Sparkles, ArrowRight, Star, Eye, GitBranch } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'AI-Powered Study Assistant',
    description: 'Revolutionary learning companion that adapts to individual learning patterns using advanced machine learning algorithms, natural language processing, and personalized content recommendation.',
    category: 'AI/ML',
    tech: ['Python', 'TensorFlow', 'React', 'FastAPI', 'OpenAI', 'PostgreSQL'],
    github: '#',
    demo: '#',
    featured: true,
    stats: { stars: 234, forks: 45, views: 12000 },
    gradient: 'from-brand-cyan via-electric-blue to-brand-purple',
    year: '2024'
  },
  {
    id: 2,
    title: 'Real-time Collaboration Platform',
    description: 'Next-generation workspace solution featuring real-time collaboration, advanced project management, AI-powered insights, and seamless team coordination across global teams.',
    category: 'Full Stack',
    tech: ['Next.js', 'Socket.io', 'MongoDB', 'Redis', 'TypeScript', 'Docker'],
    github: '#',
    demo: '#',
    featured: true,
    stats: { stars: 189, forks: 32, views: 8500 },
    gradient: 'from-electric-blue via-brand-purple to-brand-cyan',
    year: '2024'
  },
  {
    id: 3,
    title: 'Blockchain Voting System',
    description: 'Secure, transparent, and tamper-proof voting system built on blockchain technology with advanced cryptographic privacy features and real-time vote tracking.',
    category: 'Blockchain',
    tech: ['Solidity', 'Web3.js', 'React', 'Ethereum', 'IPFS', 'MetaMask'],
    github: '#',
    demo: '#',
    featured: false,
    stats: { stars: 156, forks: 28, views: 6200 },
    gradient: 'from-brand-purple via-brand-cyan to-electric-blue',
    year: '2023'
  },
  {
    id: 4,
    title: 'E-commerce Analytics Dashboard',
    description: 'Comprehensive analytics platform for e-commerce businesses with predictive insights, real-time monitoring, and AI-driven recommendations for business growth.',
    category: 'Full Stack',
    tech: ['Vue.js', 'Node.js', 'PostgreSQL', 'Chart.js', 'D3.js', 'AWS'],
    github: '#',
    demo: '#',
    featured: false,
    stats: { stars: 203, forks: 67, views: 9800 },
    gradient: 'from-brand-cyan via-electric-blue to-brand-purple',
    year: '2023'
  },
  {
    id: 5,
    title: 'Neural Network Visualizer',
    description: 'Interactive tool for visualizing complex neural network architectures, training processes, and real-time performance metrics with stunning 3D visualizations.',
    category: 'AI/ML',
    tech: ['Python', 'PyTorch', 'D3.js', 'Three.js', 'Flask', 'WebGL'],
    github: '#',
    demo: '#',
    featured: false,
    stats: { stars: 178, forks: 34, views: 7100 },
    gradient: 'from-electric-blue via-brand-purple to-brand-cyan',
    year: '2023'
  },
  {
    id: 6,
    title: 'Smart Home IoT Ecosystem',
    description: 'Complete IoT ecosystem for smart home automation featuring voice control, mobile app, energy optimization, and machine learning-based behavior prediction.',
    category: 'IoT',
    tech: ['Arduino', 'React Native', 'MQTT', 'Firebase', 'Python', 'TensorFlow Lite'],
    github: '#',
    demo: '#',
    featured: false,
    stats: { stars: 145, forks: 23, views: 5400 },
    gradient: 'from-brand-purple via-brand-cyan to-electric-blue',
    year: '2023'
  },
];

const categories = [
  { name: 'All', icon: Code2, count: projects.length },
  { name: 'AI/ML', icon: Sparkles, count: projects.filter(p => p.category === 'AI/ML').length },
  { name: 'Full Stack', icon: GitBranch, count: projects.filter(p => p.category === 'Full Stack').length },
  { name: 'Blockchain', icon: Star, count: projects.filter(p => p.category === 'Blockchain').length },
  { name: 'IoT', icon: Eye, count: projects.filter(p => p.category === 'IoT').length },
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredProjects = projects.filter(project => 
    selectedCategory === 'All' || project.category === selectedCategory
  );

  const featuredProjects = filteredProjects.filter(p => p.featured);
  const otherProjects = filteredProjects.filter(p => !p.featured);

  return (
    <section ref={containerRef} id="projects" className="relative py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-primary via-dark-secondary to-dark-primary" />
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-brand-cyan/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-electric-blue/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-purple/5 rounded-full blur-3xl" />
        <div className="noise-overlay" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-glass-card border border-brand-cyan/20 rounded-full mb-6"
          >
            <Code2 className="w-4 h-4 text-brand-cyan" />
            <span className="text-sm font-medium text-gray-300">Featured Work</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 font-display">
            <span className="block text-white/10 absolute blur-sm">Selected Projects</span>
            <span className="relative aurora-text">Selected Projects</span>
          </h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed"
          >
            A curated collection of innovative solutions spanning 
            <span className="text-brand-cyan"> AI/ML</span>, 
            <span className="text-electric-blue"> full-stack development</span>, and 
            <span className="text-brand-purple"> emerging technologies</span>
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`group relative px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                selectedCategory === category.name
                  ? 'glass-card-active text-white'
                  : 'glass-card text-gray-300 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-2">
                <category.icon className="w-4 h-4" />
                <span>{category.name}</span>
                <span className="text-xs bg-dark-primary/50 px-2 py-0.5 rounded-full">
                  {category.count}
                </span>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="mb-20">
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-white mb-8 font-display flex items-center gap-2"
            >
              <Star className="w-6 h-6 text-brand-cyan" />
              Featured Projects
            </motion.h3>
            
            <div className="grid gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                  className="glass-card rounded-2xl overflow-hidden group hover:scale-[1.02] transition-all duration-500"
                >
                  <div className="grid lg:grid-cols-2 gap-0">
                    {/* Project Visual */}
                    <div className="relative h-80 lg:h-96 overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}/20`} />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-primary/80 via-transparent to-transparent" />
                      
                      {/* Floating Elements */}
                      <motion.div
                        animate={{ 
                          y: hoveredProject === project.id ? -10 : 0,
                          scale: hoveredProject === project.id ? 1.1 : 1 
                        }}
                        transition={{ duration: 0.5 }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-xl bg-glass-card flex items-center justify-center"
                      >
                        <Code2 className="w-16 h-16 text-brand-cyan" />
                      </motion.div>

                      {/* Year Badge */}
                      <div className="absolute top-6 left-6">
                        <span className="px-3 py-1 bg-glass-card text-brand-cyan text-sm font-medium rounded-full">
                          {project.year}
                        </span>
                      </div>

                      {/* Stats */}
                      <div className="absolute bottom-6 left-6 flex gap-4">
                        <div className="flex items-center gap-1 text-gray-300 text-sm">
                          <Star className="w-4 h-4" />
                          {project.stats.stars}
                        </div>
                        <div className="flex items-center gap-1 text-gray-300 text-sm">
                          <GitBranch className="w-4 h-4" />
                          {project.stats.forks}
                        </div>
                        <div className="flex items-center gap-1 text-gray-300 text-sm">
                          <Eye className="w-4 h-4" />
                          {project.stats.views.toLocaleString()}
                        </div>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="p-8 flex flex-col justify-center">
                      <div className="mb-4">
                        <span className={`inline-block px-3 py-1 bg-gradient-to-r ${project.gradient}/20 text-brand-cyan text-sm font-medium rounded-full mb-4`}>
                          {project.category}
                        </span>
                        
                        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 font-display group-hover:text-brand-cyan transition-colors duration-300">
                          {project.title}
                        </h3>
                        
                        <p className="text-gray-300 leading-relaxed mb-6">
                          {project.description}
                        </p>
                      </div>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-dark-primary/50 text-gray-300 text-sm rounded-lg border border-gray-600/50 hover:border-brand-cyan/50 hover:text-white transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-4">
                        <motion.a
                          href={project.demo}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="glass-button group"
                        >
                          <Play className="w-4 h-4 mr-2 group-hover:text-brand-cyan transition-colors" />
                          Live Demo
                        </motion.a>
                        <motion.a
                          href={project.github}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="glass-button-secondary group"
                        >
                          <Github className="w-4 h-4 mr-2 group-hover:text-electric-blue transition-colors" />
                          View Code
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Other Projects Grid */}
        {otherProjects.length > 0 && (
          <div className="mb-20">
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-white mb-8 font-display"
            >
              More Projects
            </motion.h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="wait">
                {otherProjects.map((project, index) => (
                  <motion.div
                    key={`${selectedCategory}-${project.id}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="glass-card rounded-xl overflow-hidden group"
                  >
                    {/* Project Preview */}
                    <div className="relative h-48 overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}/20`} />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-primary/80 to-transparent" />
                      
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-lg bg-glass-card flex items-center justify-center"
                      >
                        <Code2 className="w-8 h-8 text-brand-cyan" />
                      </motion.div>

                      {/* Quick Actions */}
                      <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <motion.a
                          href={project.demo}
                          whileHover={{ scale: 1.1 }}
                          className="w-8 h-8 bg-glass-card rounded-lg flex items-center justify-center"
                        >
                          <ExternalLink className="w-4 h-4 text-brand-cyan" />
                        </motion.a>
                        <motion.a
                          href={project.github}
                          whileHover={{ scale: 1.1 }}
                          className="w-8 h-8 bg-glass-card rounded-lg flex items-center justify-center"
                        >
                          <Github className="w-4 h-4 text-white" />
                        </motion.a>
                      </div>

                      {/* Stats */}
                      <div className="absolute bottom-4 left-4 flex gap-3 text-xs text-gray-300">
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3" />
                          {project.stats.stars}
                        </div>
                        <div className="flex items-center gap-1">
                          <GitBranch className="w-3 h-3" />
                          {project.stats.forks}
                        </div>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className={`px-2 py-1 bg-gradient-to-r ${project.gradient}/20 text-brand-cyan text-xs font-medium rounded-full`}>
                          {project.category}
                        </span>
                        <span className="text-xs text-gray-400">{project.year}</span>
                      </div>

                      <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-brand-cyan transition-colors duration-300">
                        {project.title}
                      </h4>
                      
                      <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.tech.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-dark-primary/50 text-gray-400 text-xs rounded border border-gray-600/30"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="px-2 py-1 text-gray-500 text-xs">
                            +{project.tech.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass-card rounded-2xl p-8 lg:p-12">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="w-16 h-16 bg-gradient-to-br from-brand-cyan to-electric-blue rounded-2xl flex items-center justify-center mx-auto mb-6"
              >
                <Github className="w-8 h-8 text-white" />
              </motion.div>
              
              <h3 className="text-3xl font-bold text-white mb-4 font-display">
                Explore the Complete Collection
              </h3>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Discover more projects, contributions, and open-source work on my GitHub profile. 
                From experimental prototypes to production applications.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="https://github.com/mananvyas"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="glass-button group"
                >
                  <Github className="w-5 h-5 mr-2 group-hover:text-brand-cyan transition-colors" />
                  Visit GitHub Profile
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </motion.a>
                
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="glass-button-secondary group"
                >
                  <Sparkles className="w-5 h-5 mr-2 group-hover:text-electric-blue transition-colors" />
                  Start a Project
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
