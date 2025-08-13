import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navigationItems = [
    { name: 'About', href: '#about', external: true },
    { name: 'Products', href: '#products', external: true },
    { name: 'BrightSense', href: '/brightsense', external: false },
    { name: 'Invest', href: '/invest', external: false },
    { name: 'Contact', href: '/contact', external: false },
  ];

  const handleAnchorClick = (href) => {
    if (location.pathname !== '/') {
      // If not on homepage, navigate to homepage first, then scroll
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // If on homepage, just scroll
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link to="/" className="text-2xl font-bold text-gray-900">
              Seculinx
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigationItems.map((item) => (
                item.external ? (
                  <motion.button
                    key={item.name}
                    onClick={() => handleAnchorClick(item.href)}
                    className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.name}
                  </motion.button>
                ) : (
                  <motion.div
                    key={item.name}
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      to={item.href}
                      className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                )
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <motion.div
            className="hidden md:block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Link
              to="/contact"
              className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg inline-block"
            >
              Start Conversation
            </Link>
          </motion.div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div 
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
              {navigationItems.map((item) => (
                item.external ? (
                  <button
                    key={item.name}
                    onClick={() => {
                      handleAnchorClick(item.href);
                      setIsMenuOpen(false);
                    }}
                    className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium w-full text-left"
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;