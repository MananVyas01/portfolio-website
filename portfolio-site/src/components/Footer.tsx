'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/mananvyas', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/mananvyas', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/mananvyas', label: 'Twitter' },
    { icon: Mail, href: 'mailto:hello@mananvyas.dev', label: 'Email' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-950 to-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                  Manan Vyas
                </h3>
                <p className="text-sm text-gray-400">Full Stack Developer</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Building innovative digital solutions that bridge technology and user experience. 
              Always excited to collaborate on projects that make a difference.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  whileHover={{ x: 5 }}
                  className="block text-gray-400 hover:text-primary-400 transition-all duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector(link.href);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Let&apos;s Connect</h4>
            <div className="space-y-4">
              <p className="text-gray-400">
                Ready to start a conversation? Reach out and let&apos;s explore how we can work together.
              </p>
              
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="p-2 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-400 hover:text-white hover:border-primary-500/50 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>

              <motion.a
                href="mailto:hello@mananvyas.dev"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 space-x-2 mt-4"
              >
                <Mail className="w-4 h-4" />
                <span>Get in Touch</span>
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2 text-gray-400 text-sm"
            >
              <span>© 2024 Manan Vyas. Built with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>using Next.js & Tailwind CSS</span>
            </motion.div>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-400 hover:text-white hover:border-primary-500/50 transition-all duration-300"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="text-sm">Back to Top</span>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-secondary-500/5 rounded-full blur-3xl" />
      </div>
    </footer>
  );
}
