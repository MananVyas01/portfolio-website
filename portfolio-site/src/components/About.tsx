'use client';

import { motion } from 'framer-motion';
import { Code, Database, Brain, Shield, Zap, Heart } from 'lucide-react';

const skills = [
  { category: 'Frontend', icon: Code, items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
  { category: 'Backend', icon: Database, items: ['Node.js', 'Python', 'Express', 'FastAPI', 'PostgreSQL'] },
  { category: 'AI/ML', icon: Brain, items: ['TensorFlow', 'PyTorch', 'OpenAI', 'Hugging Face', 'Scikit-learn'] },
  { category: 'DevOps', icon: Shield, items: ['Docker', 'AWS', 'Vercel', 'GitHub Actions', 'Terraform'] },
];

const highlights = [
  { icon: Zap, number: '3+', label: 'Years Experience' },
  { icon: Code, number: '50+', label: 'Projects Built' },
  { icon: Heart, number: '100%', label: 'Passion Driven' },
];

export default function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 to-gray-900" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate about creating innovative solutions that bridge the gap between complex technology and seamless user experiences.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left side - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="prose prose-lg prose-gray max-w-none">
              <p className="text-gray-300 leading-relaxed">
                I&apos;m a <span className="text-primary-400 font-semibold">Full Stack Developer</span> and 
                <span className="text-secondary-400 font-semibold"> AI/ML Engineer</span> with a passion for building 
                products that solve real-world problems. My journey in tech started with curiosity about how things work, 
                and has evolved into a career focused on creating impactful digital experiences.
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                I specialize in developing scalable web applications, implementing AI-powered features, and optimizing 
                systems for performance. When I&apos;m not coding, you&apos;ll find me exploring new technologies, 
                contributing to open source, or mentoring aspiring developers.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{item.number}</div>
                  <div className="text-sm text-gray-400">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-8">Technologies I Love</h3>
            
            <div className="grid gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-primary-500/50 transition-all duration-300"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-lg flex items-center justify-center">
                      <skill.icon className="w-5 h-5 text-primary-400" />
                    </div>
                    <h4 className="text-lg font-semibold text-white">{skill.category}</h4>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, itemIndex) => (
                      <motion.span
                        key={item}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: (index * 0.1) + (itemIndex * 0.05), duration: 0.4 }}
                        viewport={{ once: true }}
                        className="px-3 py-1.5 bg-gray-700/50 text-gray-300 text-sm rounded-lg border border-gray-600 hover:border-primary-500/50 hover:text-white transition-all duration-300"
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border border-primary-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Let&apos;s Build Something Amazing Together</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              I&apos;m always excited to collaborate on innovative projects and explore new opportunities.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
            >
              Start a Conversation
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
