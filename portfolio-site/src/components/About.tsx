'use client';

import { motion } from 'framer-motion';
import { Code2, Brain, Shield, Zap, Coffee, Rocket } from 'lucide-react';

const skills = {
  frontend: {
    title: 'Frontend Development',
    icon: Code2,
    color: 'text-neon-blue',
    technologies: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Vue.js']
  },
  backend: {
    title: 'Backend Development',
    icon: Zap,
    color: 'text-neon-green',
    technologies: ['Python', 'Django', 'Flask', 'Node.js', 'PostgreSQL', 'MongoDB']
  },
  aiml: {
    title: 'AI/ML Engineering',
    icon: Brain,
    color: 'text-neon-purple',
    technologies: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'OpenCV', 'LangChain', 'Ollama']
  },
  security: {
    title: 'Cybersecurity',
    icon: Shield,
    color: 'text-neon-pink',
    technologies: ['Bug Bounty', 'Ethical Hacking', 'CTF Challenges', 'Penetration Testing']
  }
};

const funFacts = [
  { icon: Coffee, text: "Can debug code faster than making coffee" },
  { icon: Rocket, text: "Built first robot at age 16" },
  { icon: Brain, text: "Deployed 50+ cloud applications" },
  { icon: Shield, text: "Ethical hacker in free time" }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-dark-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-neon-blue to-neon-green bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A passionate developer who believes in building AI-powered, privacy-first solutions that actually solve real problems.
          </p>
        </motion.div>

        {/* Personal Introduction */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-12 mb-20"
        >
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white mb-4">
              Hi, I&apos;m Manan! 👋
            </h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                I&apos;m a <span className="text-neon-blue font-semibold">Full Stack Developer</span> and{' '}
                <span className="text-neon-green font-semibold">AI Enthusiast</span> from Gujarat, India. 
                Currently pursuing my studies while building meaningful projects that make a difference.
              </p>
              <p>
                My journey in tech started with curiosity about how things work, and it evolved into a passion for 
                creating tools that developers and students actually want to use. From building{' '}
                <span className="text-neon-purple font-semibold">DevScope</span> for developer productivity to{' '}
                <span className="text-neon-blue font-semibold">StudyPal-AI</span> for enhanced learning experiences.
              </p>
              <p>
                When I&apos;m not coding, you&apos;ll find me exploring CTF challenges, contributing to open source, 
                or experimenting with the latest AI models. I believe in the power of{' '}
                <span className="text-neon-green font-semibold">local-first</span> and{' '}
                <span className="text-neon-pink font-semibold">privacy-first</span> solutions.
              </p>
            </div>
          </div>

          {/* Code Block */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gray-900 rounded-lg p-6 border border-gray-700 font-mono text-sm"
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-gray-400 ml-4">developer_profile.js</span>
            </div>
            <div className="text-gray-300">
              <div className="text-blue-400">const</div>{' '}
              <div className="text-yellow-300">mananVyas</div>{' '}
              <div className="text-white">= {'{'};</div>
              <div className="ml-4 space-y-1">
                <div><span className="text-red-400">name:</span> <span className="text-green-400">&quot;Manan Vyas&quot;</span>,</div>
                <div><span className="text-red-400">role:</span> <span className="text-green-400">&quot;Full Stack Developer&quot;</span>,</div>
                <div><span className="text-red-400">location:</span> <span className="text-green-400">&quot;Gujarat, India 🇮🇳&quot;</span>,</div>
                <div><span className="text-red-400">passion:</span> <span className="text-green-400">&quot;Building AI-powered tools&quot;</span>,</div>
                <div><span className="text-red-400">philosophy:</span> <span className="text-green-400">&quot;Code with purpose! 💫&quot;</span>,</div>
                <div><span className="text-red-400">currentFocus:</span> <span className="text-purple-400">[</span></div>
                <div className="ml-4">
                  <div><span className="text-green-400">&quot;Local-first AI&quot;</span>,</div>
                  <div><span className="text-green-400">&quot;Prompt Engineering&quot;</span>,</div>
                  <div><span className="text-green-400">&quot;CTF Challenges&quot;</span></div>
                </div>
                <div><span className="text-purple-400">]</span></div>
              </div>
              <div className="text-white">{'};'}</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-white">
            Tech Arsenal
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([key, skill], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center mb-4 ${skill.color}`}>
                  <skill.icon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-3">{skill.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded-full border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Fun Facts */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-white">
            Fun Facts About Me
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {funFacts.map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-lg border border-gray-700 hover:border-neon-blue/50 transition-all duration-300"
              >
                <fact.icon className="w-8 h-8 text-neon-blue mx-auto mb-4" />
                <p className="text-gray-300 text-sm leading-relaxed">{fact.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
