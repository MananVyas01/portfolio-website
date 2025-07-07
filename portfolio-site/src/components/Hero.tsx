'use client';

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Mail, ArrowDown, Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-950 to-black">
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 grid-pattern opacity-30" />
        
        {/* Floating orbs */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-primary-500/20 to-secondary-500/20 blur-xl"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}

        {/* Sparkle effects */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <Sparkles className="w-4 h-4 text-primary-400" />
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          
          {/* Welcome badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border border-primary-500/20 rounded-full px-4 py-2"
          >
            <div className="w-2 h-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full animate-pulse" />
            <span className="text-gray-300 text-sm font-medium">Available for opportunities</span>
          </motion.div>

          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-4">
              <span className="block text-white">Hi, I&apos;m</span>
              <span className="block bg-gradient-to-r from-primary-400 via-secondary-400 to-tertiary-400 bg-clip-text text-transparent animate-glow">
                Manan Vyas
              </span>
            </h1>
          </motion.div>

          {/* Animated subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-2xl md:text-4xl font-semibold text-gray-300 h-20 flex items-center justify-center"
          >
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                2000,
                'AI/ML Engineer',
                2000,
                'Problem Solver',
                2000,
                'Digital Innovator',
                2000,
                'Code Craftsman',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent"
            />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            I craft digital experiences that blend cutting-edge technology with user-centric design. 
            Specializing in AI-powered solutions, full-stack development, and building products that make a difference.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-8"
          >
            <motion.button
              onClick={scrollToNextSection}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-xl shadow-2xl hover:shadow-primary-500/25 transition-all duration-300 flex items-center space-x-2"
            >
              <span>Explore My Work</span>
              <ArrowDown className="w-4 h-4" />
            </motion.button>
            
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-gray-600 text-gray-300 hover:text-white hover:border-primary-500 font-semibold rounded-xl transition-all duration-300 flex items-center space-x-2"
            >
              <Mail className="w-4 h-4" />
              <span>Get In Touch</span>
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex items-center justify-center space-x-6 pt-12"
          >
            {[
              { icon: Github, href: 'https://github.com/mananvyas', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com/in/mananvyas', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:hello@mananvyas.dev', label: 'Email' },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 + index * 0.1 }}
                whileHover={{ y: -3, scale: 1.1 }}
                className="p-3 bg-gray-800/50 hover:bg-gradient-to-r hover:from-primary-500/20 hover:to-secondary-500/20 border border-gray-700 hover:border-primary-500/50 rounded-xl transition-all duration-300 group"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-300" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center space-y-2 text-gray-400"
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
