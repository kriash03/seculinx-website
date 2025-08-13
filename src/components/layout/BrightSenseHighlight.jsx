// src/components/layout/BrightSenseHighlight.jsx
import { motion } from 'framer-motion';
import { Zap, Brain, Leaf, ArrowRight, Play } from 'lucide-react';

const BrightSenseHighlight = () => {
  const features = [
    {
      icon: Zap,
      title: 'Zone Detection',
      description: 'Advanced mmWave sensing detects your exact location'
    },
    {
      icon: Brain,
      title: 'AI Learning',
      description: 'Learns your preferences and adapts automatically'
    },
    {
      icon: Leaf,
      title: 'Energy Smart',
      description: 'Optimizes energy usage without compromising comfort'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-emerald-50 via-cyan-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-white/40 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">Launching Q4 2025</span>
            </motion.div>

            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              BrightSense —{' '}
              <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">
                Lighting That Thinks
              </span>{' '}
              For You.
            </h2>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              With cutting-edge mmWave sensing, BrightSense understands your presence, activity, and preferences to create the perfect lighting experience.
            </p>

            {/* Features */}
            <div className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 p-2 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.button
                className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center space-x-2 shadow-xl"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px -10px rgba(16, 185, 129, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Experience BrightSense</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <motion.button
                className="border-2 border-emerald-500 text-emerald-600 px-8 py-4 rounded-full font-semibold flex items-center justify-center space-x-2 hover:bg-emerald-50 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - Product Visualization */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Main Card */}
            <div className="relative bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/40">
              {/* Room Visualization */}
              <div className="aspect-square bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl mb-6 relative overflow-hidden">
                {/* Room elements */}
                <div className="absolute inset-4 border border-gray-600 rounded-lg opacity-30"></div>
                
                {/* Smart lights indicators */}
                <motion.div
                  className="absolute top-6 left-6 w-4 h-4 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="absolute top-6 right-6 w-4 h-4 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                />
                <motion.div
                  className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />

                {/* Light beam effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-radial from-emerald-400/20 via-transparent to-transparent"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                {/* Person detection zone */}
                <motion.div
                  className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-12 h-16 border-2 border-cyan-400 rounded-lg"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>

              {/* Status Info */}
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-lg font-bold text-emerald-600">Active</div>
                  <div className="text-sm text-gray-600">Zone Detection</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-cyan-600">Learning</div>
                  <div className="text-sm text-gray-600">Your Patterns</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-blue-600">30%</div>
                  <div className="text-sm text-gray-600">Energy Saved</div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full opacity-20"
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity }
              }}
            />
            
            <motion.div
              className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-20"
              animate={{ 
                rotate: -360,
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity }
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrightSenseHighlight;