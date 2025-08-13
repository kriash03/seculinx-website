// src/pages/BrightSensePage.jsx
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, Zap, Brain, Leaf, Eye, Wifi, Shield } from 'lucide-react';
import { Suspense } from 'react';
import RoomScene from '../components/3d/RoomScene';
import Navigation from '../components/layout/Navigation';

const BrightSensePage = () => {
  const features = [
    {
      icon: Eye,
      title: 'Zone Detection',
      description: 'Knows exactly where you are in the room',
      detail: 'Advanced mmWave sensing detects motion and activity zones without compromising privacy.'
    },
    {
      icon: Brain,
      title: 'Activity Awareness', 
      description: 'Recognizes if you\'re reading, working, or relaxing',
      detail: 'AI learns your patterns and adjusts lighting based on your current activity.'
    },
    {
      icon: Leaf,
      title: 'Energy Optimization',
      description: 'Only lights where and when needed',
      detail: 'Smart algorithms reduce energy consumption by up to 40% while maximizing comfort.'
    },
    {
      icon: Wifi,
      title: 'Multi-Device Sync',
      description: 'Seamlessly integrates with other Seculinx products',
      detail: 'Works together with your entire smart home ecosystem for unified control.'
    }
  ];

  const useCases = [
    {
      title: 'Home Office',
      description: 'Focus lighting during work hours',
      image: '💼',
      details: 'Bright, cool lighting for productivity with automatic dimming during breaks.'
    },
    {
      title: 'Living Room',
      description: 'Ambient glow for movie nights',
      image: '🛋️',
      details: 'Warm, diffused lighting that creates the perfect atmosphere for relaxation.'
    },
    {
      title: 'Bedroom',
      description: 'Warm light transition for winding down',
      image: '🛏️',
      details: 'Gradual dimming with warmer tones to promote natural sleep cycles.'
    },
    {
      title: 'Kitchen',
      description: 'Task lighting for cooking and dining',
      image: '🍳',
      details: 'Bright, clear lighting for food prep with softer ambiance for dining.'
    }
  ];

  const techSpecs = [
    { label: 'Detection Range', value: '5m radius' },
    { label: 'Response Time', value: '<100ms' },
    { label: 'Energy Efficiency', value: '40% savings' },
    { label: 'Connectivity', value: 'WiFi 6, Zigbee' },
    { label: 'Installation', value: 'Drop-in replacement' },
    { label: 'Warranty', value: '5 years' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-cyan-50 to-blue-50"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-white/40 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">Launching Q4 2025</span>
            </motion.div>

            <motion.h1
              className="text-6xl lg:text-8xl font-bold text-gray-900 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              BrightSense
            </motion.h1>

            <motion.p
              className="text-2xl text-gray-600 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Intelligent Lighting, Perfected.
            </motion.p>

            <motion.p
              className="text-lg text-gray-500 max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Experience the future of home lighting with AI-powered zone detection, 
              adaptive brightness, and energy optimization that learns your lifestyle.
            </motion.p>

            <motion.button
              className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold inline-flex items-center space-x-2 shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Join Waitlist</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </section>

      {/* Interactive 3D Room */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Experience BrightSense in Action
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Click on the lights to see how BrightSense adapts to your presence and creates the perfect ambiance
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-3xl shadow-2xl p-8 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="h-96 w-full">
              <Suspense fallback={
                <div className="flex items-center justify-center h-full">
                  <div className="text-gray-500">Loading 3D Experience...</div>
                </div>
              }>
                <RoomScene />
              </Suspense>
            </div>
          </motion.div>

          <motion.div
            className="text-center text-sm text-gray-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            💡 Click on lights to activate • 🖱️ Drag to rotate • 🔍 Scroll to zoom
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              How BrightSense Works
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { title: 'Detect', description: 'Advanced mmWave sensing detects motion and activity zones without compromising privacy.' },
              { title: 'Adapt', description: 'Lighting adjusts brightness, warmth, and coverage based on your presence and needs.' },
              { title: 'Optimize', description: 'AI learns your preferences to reduce energy use while maximizing comfort.' }
            ].map((step, index) => (
              <motion.div
                key={step.title}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Revolutionary Features
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="p-3 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl inline-block mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-lg text-gray-600 mb-4">{feature.description}</p>
                <p className="text-gray-500">{feature.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Perfect for Every Space
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="text-6xl mb-4">{useCase.image}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{useCase.title}</h3>
                <p className="text-gray-600 mb-4">{useCase.description}</p>
                <p className="text-sm text-gray-500">{useCase.details}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Specs */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                The Tech Behind BrightSense
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Powered by mmWave technology, BrightSense offers unparalleled detection accuracy 
                while maintaining total privacy. Combined with AI-driven lighting algorithms, 
                it delivers a lighting experience that feels natural and human.
              </p>
              
              <div className="space-y-4">
                {techSpecs.map((spec, index) => (
                  <motion.div
                    key={spec.label}
                    className="flex justify-between items-center py-3 border-b border-gray-200"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-gray-600">{spec.label}</span>
                    <span className="font-semibold text-gray-900">{spec.value}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <div className="aspect-square bg-gradient-to-br from-emerald-100 to-cyan-100 rounded-2xl flex items-center justify-center text-8xl">
                  💡
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Waitlist CTA */}
      <section className="py-24 bg-gradient-to-r from-emerald-500 to-cyan-500">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Launching Q4 2025
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Be the first to experience BrightSense. Join our waitlist for early access and exclusive updates.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <motion.button
                className="bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Join Waitlist</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
            
            <p className="text-white/70 text-sm">
              No spam, just updates on launch and early access opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Back to Home */}
      <div className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.a
            href="/"
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
            whileHover={{ x: -5 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default BrightSensePage;