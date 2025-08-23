// src/components/layout/ProductEcosystem.jsx
import { motion } from 'framer-motion';
import { Lightbulb, Lock, Activity, Camera, ArrowRight } from 'lucide-react';

const ProductEcosystem = () => {
  const products = [
    {
      name: 'BrightSense',
      status: 'Launching Q1 2026',
      description: 'Our flagship smart lighting system with AI-powered zone detection and adaptive brightness.',
      icon: Lightbulb,
      gradient: 'from-emerald-400 to-cyan-500',
      bgGradient: 'from-emerald-50 to-cyan-50',
      available: true,
      features: ['Zone Detection', 'AI Learning', 'Energy Optimization']
    },
    {
      name: 'Smart Locks',
      status: 'Coming Soon',
      description: 'Advanced biometric locks for next-level home security.',
      icon: Lock,
      gradient: 'from-blue-400 to-purple-500',
      bgGradient: 'from-blue-50 to-purple-50',
      available: false,
      features: ['Biometric Access', 'Remote Control', 'Security Alerts']
    },
    {
      name: 'Home Sensors',
      status: 'Coming Soon', 
      description: 'Environmental and security sensors for complete awareness.',
      icon: Activity,
      gradient: 'from-orange-400 to-red-500',
      bgGradient: 'from-orange-50 to-red-50',
      available: false,
      features: ['Environmental Monitoring', 'Motion Detection', 'Air Quality']
    },
    {
      name: 'Surveillance Systems',
      status: 'Coming Soon',
      description: 'AI-driven, privacy-focused home monitoring.',
      icon: Camera,
      gradient: 'from-purple-400 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50',
      available: false,
      features: ['AI Detection', 'Privacy First', 'Cloud Storage']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="products" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Product Ecosystem
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our connected solutions designed to transform your living experience
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              className="group relative"
              variants={cardVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className={`relative bg-gradient-to-br ${product.bgGradient} rounded-3xl p-6 h-full border border-white shadow-lg hover:shadow-2xl transition-all duration-300`}>
                {/* Status Badge */}
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                  product.available 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {product.status}
                </div>

                {/* Icon */}
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${product.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <product.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {product.name}
                </h3>

                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-500">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${product.gradient} mr-2`}></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                {product.available ? (
                  <motion.button
                    onClick={() => window.location.href = '/brightsense'}
                    className={`w-full bg-gradient-to-r ${product.gradient} text-white py-3 px-6 rounded-xl font-semibold flex items-center justify-center space-x-2 group-hover:shadow-lg transition-shadow duration-300`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                ) : (
                  <div className="w-full border-2 border-gray-200 text-gray-400 py-3 px-6 rounded-xl font-semibold text-center">
                    Coming Soon
                  </div>
                )}

                {/* Hover Effect Border */}
                <div className={`absolute inset-0 bg-gradient-to-r ${product.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}>
                  <div className="absolute inset-[2px] bg-gradient-to-br from-white to-gray-50 rounded-3xl"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-6">
            Ready to transform your home into a smart ecosystem?
          </p>
          {/* <motion.button
            className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-full font-semibold inline-flex items-center space-x-2 shadow-xl"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px -10px rgba(14, 165, 233, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Explore All Products</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button> */}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductEcosystem;