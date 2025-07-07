'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { Code, Cpu, Brain, GitBranch, Monitor, Database, Shield, Zap, Heart, Download, ExternalLink } from 'lucide-react';

const skills = [
  { 
    category: 'Frontend Excellence', 
    icon: Monitor, 
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Three.js'],
    color: 'from-brand-cyan to-brand-purple'
  },
  { 
    category: 'Backend Mastery', 
    icon: Database, 
    items: ['Node.js', 'Python', 'Express', 'FastAPI', 'PostgreSQL', 'MongoDB'],
    color: 'from-brand-purple to-electric-blue'
  },
  { 
    category: 'AI & Machine Learning', 
    icon: Brain, 
    items: ['TensorFlow', 'PyTorch', 'OpenAI', 'Hugging Face', 'Scikit-learn', 'LangChain'],
    color: 'from-electric-blue to-brand-cyan'
  },
  { 
    category: 'DevOps & Cloud', 
    icon: Shield, 
    items: ['Docker', 'AWS', 'Vercel', 'GitHub Actions', 'Terraform', 'Kubernetes'],
    color: 'from-brand-cyan to-brand-purple'
  },
];

const stats = [
  { icon: Zap, number: '3+', label: 'Years of Innovation', suffix: '' },
  { icon: Code, number: '50', label: 'Projects Delivered', suffix: '+' },
  { icon: GitBranch, number: '1000', label: 'Commits Made', suffix: '+' },
  { icon: Heart, number: '99', label: 'Client Satisfaction', suffix: '%' },
];

const achievements = [
  { title: 'Performance Optimization', description: 'Reduced app load time by 70%' },
  { title: 'AI Integration', description: 'Implemented ML models in production' },
  { title: 'Team Leadership', description: 'Led 5+ successful project deliveries' },
  { title: 'Open Source', description: 'Contributing to developer community' }
];

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} id="about" className="relative py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-secondary via-dark-primary to-dark-secondary" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-purple/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl" />
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-glass-card border border-electric-blue/20 rounded-full mb-6"
          >
            <Cpu className="w-4 h-4 text-electric-blue" />
            <span className="text-sm font-medium text-gray-300">About Me</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 font-display">
            <span className="block text-white/10 absolute blur-sm">Crafting Digital</span>
            <span className="relative aurora-text">Crafting Digital</span>
          </h2>
          <h3 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 font-display">
            <span className="gradient-text-aurora">Experiences</span>
          </h3>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed"
          >
            Passionate about building innovative solutions that bridge the gap between 
            <span className="text-brand-cyan"> complex technology</span> and 
            <span className="text-electric-blue"> seamless user experiences</span>
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-20 items-start mb-32">
          {/* Left Column - Story & Stats */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-white mb-6 font-display">My Journey</h3>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  I&apos;m a <span className="text-brand-cyan font-semibold">Full Stack Developer</span> and 
                  <span className="text-electric-blue font-semibold"> AI/ML Engineer</span> who thrives on 
                  transforming complex ideas into elegant, scalable solutions. My journey began with curiosity 
                  about how digital experiences could shape the world.
                </p>
                
                <p>
                  Today, I specialize in building <span className="text-brand-purple font-semibold">performance-optimized applications</span>, 
                  implementing cutting-edge AI features, and architecting systems that scale. Every project is an 
                  opportunity to push boundaries and create something exceptional.
                </p>

                <p>
                  When I&apos;m not immersed in code, you&apos;ll find me exploring emerging technologies, contributing to 
                  open source projects, or mentoring the next generation of developers.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mt-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="glass-button group"
                >
                  <Download className="w-4 h-4 mr-2 group-hover:text-brand-cyan transition-colors" />
                  Download Resume
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="glass-button-secondary group"
                >
                  <ExternalLink className="w-4 h-4 mr-2 group-hover:text-electric-blue transition-colors" />
                  View Projects
                </motion.button>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass-card p-6 rounded-xl text-center group hover:border-brand-cyan/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-brand-cyan/20 to-electric-blue/20 flex items-center justify-center group-hover:from-brand-cyan/30 group-hover:to-electric-blue/30 transition-all duration-300">
                    <stat.icon className="w-6 h-6 text-brand-cyan" />
                  </div>
                  <div className="text-3xl font-black text-white mb-2 font-display">
                    {stat.number}<span className="text-brand-cyan">{stat.suffix}</span>
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-8 font-display">Technology Stack</h3>
            
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -2 }}
                className="glass-card p-6 rounded-xl group hover:border-brand-cyan/30 transition-all duration-500"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color}/20 flex items-center justify-center group-hover:${skill.color}/30 transition-all duration-300`}>
                    <skill.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-white font-display">{skill.category}</h4>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, itemIndex) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: (index * 0.1) + (itemIndex * 0.05), duration: 0.4 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-3 py-1.5 bg-dark-primary/50 text-gray-300 text-sm rounded-lg border border-gray-600/50 hover:border-brand-cyan/50 hover:text-white hover:bg-brand-cyan/10 transition-all duration-300 cursor-default"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-12 font-display">Key Achievements</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card p-6 rounded-xl text-center group hover:border-electric-blue/30 transition-all duration-300"
              >
                <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-electric-blue transition-colors duration-300">
                  {achievement.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
