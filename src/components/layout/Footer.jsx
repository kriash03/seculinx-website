// src/components/layout/Footer.jsx
import { motion } from 'framer-motion';
import { ArrowRight, Mail, MapPin, Phone, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    'Company': [
      { name: 'About Us', href: '#about' },
      // { name: 'Our Mission', href: '#mission' },
      // { name: 'Careers', href: '#careers' },
      // { name: 'Press', href: '#press' }
    ],
    'Products': [
      { name: 'BrightSense', href: '/brightsense' },
      // { name: 'Smart Locks', href: '#locks' },
      // { name: 'Home Sensors', href: '#sensors' },
      // { name: 'Surveillance', href: '#surveillance' }
    ],
    'Investors': [
      { name: 'Investment Overview', href: '/invest' },
    //   { name: 'Growth Plan', href: '/invest#growth' },
    //   { name: 'Market Opportunity', href: '/invest#market' },
    //   { name: 'Contact Investors', href: '/contact' }
     ],
    'Support': [
    //   { name: 'Documentation', href: '#docs' },
    //   { name: 'Help Center', href: '#help' },
      { name: 'Contact Us', href: '/contact' },
    //   { name: 'Privacy Policy', href: '#privacy' }
     ]
  };

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Newsletter Section */}
      {/* <motion.div
        className="border-b border-gray-700"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Stay Connected to the Future of Smart Living
            </h3>
            <p className="text-gray-300 mb-8">
              Get the latest updates on BrightSense launch, new product announcements, and smart home insights.
            </p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <motion.button
                className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center space-x-2 shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Subscribe</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.div> */}

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text">
                Seculinx
              </h2>
              <p className="text-gray-300 mt-4 leading-relaxed">
                Reimagining smart living through intelligent, sustainable, and secure home automation solutions.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-primary-400" />
                <span>info@seculinx.com</span>
              </div>
              {/* Uncomment if phone number is needed */}
              {/* <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-primary-400" />
                <span>+91 6376-405526</span>
              </div> */}
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-primary-400" />
                <span> India </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="p-3 bg-white/10 rounded-full text-gray-300 hover:text-white hover:bg-primary-500 transition-all duration-200"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4 text-white">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        className="border-t border-gray-700"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2025 Seculinx. All rights reserved.
            </div>
            {/* <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#privacy" className="text-gray-400 hover:text-primary-400 text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-400 hover:text-primary-400 text-sm transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#cookies" className="text-gray-400 hover:text-primary-400 text-sm transition-colors duration-200">
                Cookie Policy
              </a>
            </div> */}
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;