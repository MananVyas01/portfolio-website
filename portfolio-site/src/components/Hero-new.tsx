'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Mail, ArrowDown, Zap } from 'lucide-react';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={ref}
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Aurora */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-aurora animate-aurora opacity-20 blur-3xl"></div>
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Grid Pattern */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 grid-pattern opacity-30"
      />

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            <div className={`w-2 h-2 ${i % 3 === 0 ? 'bg-brand-500' : i % 3 === 1 ? 'bg-electric-500' : 'bg-white'} rounded-full opacity-40 blur-sm`} />
          </motion.div>
        ))}

        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`shape-${i}`}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              left: `${Math.random() * 120 - 10}%`,
              top: `${Math.random() * 120 - 10}%`,
            }}
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: Math.random() * 15 + 15,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            // eslint-disable-next-line react/jsx-no-duplicate-props
            className="bg-gradient-to-br from-brand-500/10 to-electric-500/10 blur-2xl"
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div 
        style={{ y }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <div className="space-y-8">
          
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center space-x-3 px-6 py-3 glass rounded-full border border-white/20"
          >
            <div className="relative">
              <div className="w-3 h-3 bg-gradient-to-r from-brand-500 to-electric-500 rounded-full"></div>
              <div className="absolute inset-0 w-3 h-3 bg-gradient-to-r from-brand-500 to-electric-500 rounded-full animate-ping"></div>
            </div>
            <span className="text-white/90 font-medium text-sm">Available for opportunities</span>
          </motion.div>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="space-y-4"
          >
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-black tracking-tight">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="block text-white/90 mb-2"
              >
                Hi, I&apos;m
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="block bg-gradient-to-r from-brand-400 via-electric-400 to-brand-600 bg-clip-text text-transparent"
              >
                Manan Vyas
              </motion.span>
            </h1>
          </motion.div>

          {/* Animated Role */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold h-20 flex items-center justify-center"
          >
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                3000,
                'AI/ML Engineer',
                3000,
                'Digital Innovator',
                3000,
                'Problem Solver',
                3000,
                'Code Architect',
                3000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="gradient-text-electric text-shadow-glow"
            />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed font-light"
          >
            Crafting the future of digital experiences through{' '}
            <span className="text-white font-medium">cutting-edge technology</span>{' '}
            and{' '}
            <span className="text-white font-medium">innovative design</span>.
            <br className="hidden md:block" />
            Specializing in AI-powered solutions that transform ideas into reality.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-8"
          >
            <motion.button
              onClick={scrollToNextSection}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-brand-600 to-electric-600 text-white font-semibold rounded-2xl overflow-hidden hover-glow transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-brand-500 to-electric-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center space-x-2">
                <Zap className="w-5 h-5" />
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-300" />
              </div>
            </motion.button>
            
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 glass border border-white/20 text-white font-semibold rounded-2xl hover:border-brand-500/50 transition-all duration-300"
            >
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span>Let&apos;s Connect</span>
              </div>
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="flex items-center justify-center space-x-6 pt-12"
          >
            {[
              { 
                icon: Github, 
                href: 'https://github.com/mananvyas', 
                label: 'GitHub',
                color: 'hover:text-white'
              },
              { 
                icon: Linkedin, 
                href: 'https://linkedin.com/in/mananvyas', 
                label: 'LinkedIn',
                color: 'hover:text-brand-400'
              },
              { 
                icon: Mail, 
                href: 'mailto:hello@mananvyas.dev', 
                label: 'Email',
                color: 'hover:text-electric-400'
              },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.7 + index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5, scale: 1.1 }}
                className={`p-4 glass border border-white/10 rounded-2xl text-white/70 ${social.color} transition-all duration-300 group`}
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center space-y-2 text-white/50"
        >
          <span className="text-sm font-medium tracking-wide">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-white/50 rounded-full mx-auto"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Background Noise */}
      <div className="absolute inset-0 noise-texture opacity-30"></div>
    </section>
  );
}
