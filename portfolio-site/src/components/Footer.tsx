'use client';

import { motion } from 'framer-motion';
import { Code2, Heart, Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/MananVyas01', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/mananvyas0110', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://x.com/Manan_Vyas01', label: 'Twitter' },
  { icon: Mail, href: 'mailto:mananvyas.work@gmail.com', label: 'Email' }
];

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' }
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-secondary border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center space-x-3 mb-4"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-neon-blue to-neon-green rounded-lg flex items-center justify-center">
                <Code2 className="w-6 h-6 text-dark-primary" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-neon-blue to-neon-green bg-clip-text text-transparent">
                Manan Vyas
              </span>
            </motion.div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Building AI-powered, privacy-first solutions that solve real problems. 
              Always open to interesting conversations and meaningful collaborations.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 text-gray-400 hover:text-neon-blue transition-all duration-300 hover:bg-gray-800 rounded-lg"
                  title={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-neon-blue transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Current Status */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Current Status</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-neon-green rounded-full mr-3 animate-pulse"></div>
                <span className="text-gray-300 text-sm">Available for opportunities</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-neon-blue rounded-full mr-3"></div>
                <span className="text-gray-300 text-sm">Open to collaborations</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-neon-purple rounded-full mr-3"></div>
                <span className="text-gray-300 text-sm">Building cool projects</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm flex items-center"
          >
            Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> by Manan Vyas
            <span className="mx-2">•</span>
            © {new Date().getFullYear()} All rights reserved
          </motion.p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 md:mt-0 p-2 bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-neon-blue rounded-lg transition-all duration-300"
            title="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 cyber-grid opacity-5 pointer-events-none" />
    </footer>
  );
}
