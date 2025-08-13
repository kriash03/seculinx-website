// src/components/layout/HeroSection.jsx
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 animate-gradient"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary-500/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Smarter Living,{' '}
                <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                  Connected
                </span>{' '}
                by Design.
              </h1>
            </motion.div>

            <motion.p
              className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              At Seculinx, we create intelligent, sustainable, and secure living experiences through seamless automation.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.button
                className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center space-x-2 shadow-xl"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px -10px rgba(14, 165, 233, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <span>Explore Our Solutions</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <motion.button
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold flex items-center justify-center space-x-2 hover:border-primary-500 hover:text-primary-500 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <span>Discover BrightSense</span>
                <Play className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>

          {/* Right Content - Smart Home Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 backdrop-blur-lg border border-white/20">
              {/* Smart Home Mockup */}
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center relative overflow-hidden">
                {/* Room illustration placeholder */}
                <div className="text-6xl text-gray-400">🏠</div>
                
                {/* Floating smart indicators */}
                <motion.div
                  className="absolute top-4 left-4 w-3 h-3 bg-green-400 rounded-full"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                />
                <motion.div
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-purple-400 rounded-full"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
              </div>

              {/* Stats overlay */}
              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-500">24/7</div>
                  <div className="text-sm text-gray-600">Monitoring</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary-500">30%</div>
                  <div className="text-sm text-gray-600">Energy Saved</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-500">AI</div>
                  <div className="text-sm text-gray-600">Powered</div>
                </div>
              </div>
            </div>

            {/* Floating decorative elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full opacity-20"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;