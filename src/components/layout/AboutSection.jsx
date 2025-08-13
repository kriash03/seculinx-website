// src/components/layout/AboutSection.jsx
import { motion } from 'framer-motion';
import { Zap, Leaf, Shield } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We push the boundaries of smart technology.',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Leaf,
      title: 'Sustainability', 
      description: 'Energy-efficient designs for a greener tomorrow.',
      gradient: 'from-green-400 to-emerald-500'
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Your home, your data, always protected.',
      gradient: 'from-blue-400 to-purple-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Innovation Meets Comfort.
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Reimagining smart living with technology that adapts to you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Seculinx is reimagining smart living. Our mission is to integrate cutting-edge technology into everyday life, creating a connected ecosystem that adapts to you. From intelligent lighting to advanced home security, we make your home safer, more efficient, and more intuitive.
            </p>
            
            <motion.div
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Vision</h3>
              <p className="text-gray-600">
                A future where technology serves you quietly, intelligently, and beautifully, creating homes that understand and anticipate your needs.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Content - Highlight Cards */}
          <motion.div
            className="grid gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                className="group relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                variants={itemVariants}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                {/* Gradient Border */}
                <div className={`absolute inset-0 bg-gradient-to-r ${highlight.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                  <div className="absolute inset-[2px] bg-white rounded-2xl"></div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${highlight.gradient} mb-4`}>
                    <highlight.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {highlight.title}
                  </h3>
                  
                  <p className="text-gray-600">
                    {highlight.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-3xl p-8 lg:p-12 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <motion.div
                className="text-4xl font-bold mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                50K+
              </motion.div>
              <div className="text-white/80">Homes Connected</div>
            </div>
            <div>
              <motion.div
                className="text-4xl font-bold mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                99.9%
              </motion.div>
              <div className="text-white/80">Uptime</div>
            </div>
            <div>
              <motion.div
                className="text-4xl font-bold mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                30%
              </motion.div>
              <div className="text-white/80">Energy Savings</div>
            </div>
            <div>
              <motion.div
                className="text-4xl font-bold mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                24/7
              </motion.div>
              <div className="text-white/80">Support</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;