'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2, Brain, Gamepad2, Shield, Zap, Database } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'DevScope',
    description: 'All-in-one productivity tracker for developers with GitHub/VSCode integration, real-time analytics, and AI-powered insights.',
    longDescription: 'A comprehensive developer productivity platform that integrates with your existing workflow to provide meaningful insights and boost productivity.',
    tech: ['Next.js', 'Supabase', 'LLM', 'Tailwind CSS', 'TypeScript'],
    icon: Code2,
    color: 'from-neon-blue to-neon-green',
    status: 'Featured',
    links: {
      github: 'https://github.com/MananVyas01/devscope',
      demo: '#'
    },
    features: ['GitHub Integration', 'VSCode Extension', 'AI Analytics', 'Real-time Tracking']
  },
  {
    id: 2,
    title: 'StudyPal-AI',
    description: 'AI study companion using LLMs and RAG for intelligent summarization, Q&A, and personalized learning experiences.',
    longDescription: 'An intelligent study companion that leverages cutting-edge AI to help students learn more effectively through personalized content.',
    tech: ['Python', 'LangChain', 'Streamlit', 'OpenAI', 'RAG'],
    icon: Brain,
    color: 'from-neon-purple to-neon-pink',
    status: 'Active',
    links: {
      github: 'https://github.com/MananVyas01/studypal-ai',
      demo: '#'
    },
    features: ['Document Summarization', 'Interactive Q&A', 'Progress Tracking', 'Multi-format Support']
  },
  {
    id: 3,
    title: 'LocalVibeCoder',
    description: 'Privacy-first local development environment with AI-powered code suggestions that runs entirely on your machine.',
    longDescription: 'A local-first development tool that provides AI assistance without compromising your code privacy.',
    tech: ['Rust', 'Tauri', 'Local LLM', 'SQLite'],
    icon: Shield,
    color: 'from-neon-green to-neon-blue',
    status: 'Beta',
    links: {
      github: '#',
      demo: '#'
    },
    features: ['100% Local Processing', 'Privacy-First', 'Offline AI', 'Cross-Platform']
  },
  {
    id: 4,
    title: 'Neuron Runner',
    description: 'Endless runner game where you dodge AI concepts like Overfitting and Noise while collecting Data Points.',
    longDescription: 'An educational game that makes learning AI/ML concepts fun and interactive through engaging gameplay.',
    tech: ['Python', 'Pygame', 'AI Concepts', 'Game Design'],
    icon: Gamepad2,
    color: 'from-neon-pink to-neon-purple',
    status: 'Complete',
    links: {
      github: 'https://github.com/MananVyas01/neuron-runner',
      demo: '#'
    },
    features: ['Educational Gameplay', 'AI Concept Learning', 'Progressive Difficulty', 'Score System']
  },
  {
    id: 5,
    title: 'LocalBudgetAI',
    description: 'Local-first AI budgeting tool that analyzes spending patterns and provides insights without cloud dependency.',
    longDescription: 'A privacy-focused personal finance tool that uses AI to help you understand and improve your spending habits.',
    tech: ['Python', 'FastAPI', 'Local AI', 'React'],
    icon: Database,
    color: 'from-neon-blue to-neon-purple',
    status: 'Development',
    links: {
      github: '#',
      demo: '#'
    },
    features: ['Local Processing', 'Spending Analysis', 'Budget Predictions', 'Privacy-First']
  },
  {
    id: 6,
    title: 'Hack The System',
    description: 'Cybersecurity-themed puzzle game that teaches ethical hacking concepts through interactive challenges.',
    longDescription: 'An educational cybersecurity game designed to teach ethical hacking and security concepts in an engaging way.',
    tech: ['JavaScript', 'Web Security', 'CTF Concepts', 'Educational Design'],
    icon: Shield,
    color: 'from-neon-green to-neon-pink',
    status: 'Concept',
    links: {
      github: '#',
      demo: '#'
    },
    features: ['Security Education', 'CTF Challenges', 'Interactive Learning', 'Progressive Difficulty']
  }
];

const filters = ['All', 'AI/ML', 'Security', 'Games', 'Tools'];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-dark-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-neon-green to-neon-blue bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Building meaningful solutions that solve real problems. From AI-powered tools to educational games.
          </p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                className="px-4 py-2 bg-gray-800/50 text-gray-300 rounded-full border border-gray-700 hover:border-neon-blue hover:text-neon-blue transition-all duration-300"
              >
                {filter}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 overflow-hidden"
            >
              {/* Project Header */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${project.color} flex items-center justify-center`}>
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs px-2 py-1 bg-neon-blue/20 text-neon-blue rounded-full border border-neon-blue/30">
                    {project.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-blue transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div className="space-y-1 mb-6">
                  {project.features.slice(0, 3).map((feature) => (
                    <div key={feature} className="flex items-center text-xs text-gray-400">
                      <Zap className="w-3 h-3 text-neon-green mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Links */}
                <div className="flex space-x-3">
                  <motion.a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center py-2 px-4 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white rounded-lg transition-all duration-300 text-sm"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </motion.a>
                  <motion.a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center py-2 px-4 bg-gradient-to-r from-neon-blue to-neon-green text-dark-primary font-semibold rounded-lg transition-all duration-300 text-sm hover:shadow-lg hover:shadow-neon-blue/25"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </motion.a>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/5 to-neon-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-gray-300 mb-6">
            Interested in collaborating or want to see more of my work?
          </p>
          <motion.a
            href="https://github.com/MananVyas01"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-6 py-3 border border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-dark-primary rounded-lg transition-all duration-300"
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
