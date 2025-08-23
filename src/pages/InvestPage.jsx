// src/pages/InvestPage.jsx
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, TrendingUp, Users, Globe, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../components/layout/Navigation';
import SEO from '../components/SEO';

const InvestPage = () => {
  const marketStats = [
    { label: 'Smart home market by 2030', value: '200B+', icon: TrendingUp },
    { label: 'Projected CAGR', value: '14%', icon: TrendingUp },
    { label: 'IoT-enabled households by 2030', value: '1,000M', icon: Globe },
    { label: 'Avg. energy savings', value: '30%', icon: Shield }
  ];

  const advantages = [
    'Proprietary designs and mmWave-driven zone-based lighting',
    'Intuitive control interfaces with AI personalization', 
    'Privacy-first architecture and sustainability commitment',
    'Seamless ecosystem integration across devices'
  ];

  const products = [
    {
      name: 'BrightSense',
      status: 'Launching Q1 2026',
      description: 'Intelligent, zone-based lighting that adapts to presence and activity.'
    },
    {
      name: 'Smart Locks', 
      status: 'Coming Soon',
      description: 'Advanced biometric security with seamless entry.'
    },
    {
      name: 'Energy Management',
      status: 'Coming Soon', 
      description: 'Optimize home energy usage without compromise.'
    }
  ];

  const timeline = [
    { period: 'Q1 2026', milestone: 'BrightSense Launch' },
    { period: '2026', milestone: 'Ecosystem Expansion' },
    { period: '2027+', milestone: 'Global Scale' }
  ];

  const partnerships = [
    'Visionary brand and early-mover advantage',
    'Deep product focus and commitment to innovation',
    'Scalable business model with strong unit economics',
    'Experienced leadership and strategic advisory network'
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Investment Opportunities - Join Seculinx's Growth | Seculinx"
        description="Explore investment opportunities with Seculinx. Be part of the future of cybersecurity and smart home automation technology. Contact us for partnership details."
        keywords="Seculinx investment, cybersecurity investment, smart home investment, BrightSense investment, technology startup funding"
        canonicalUrl="https://seculinx.com/invest"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.h1
            className="text-6xl lg:text-8xl font-bold text-gray-900 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Invest in the Future of{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Smart Living
            </span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-600 max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Seculinx is redefining the connected home experience with intelligent, sustainable, and secure solutions.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold inline-flex items-center space-x-2 shadow-xl"
              >
                <span>Start the Conversation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.button
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Investor Deck
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
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
              Our Vision & Why We Exist
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                We envision homes that seamlessly blend innovation, sustainability, customer-centric solutions, and 
                seamless integration into daily life. Our long-term ambition is clear — to lead smart living ecosystems worldwide.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {['Innovation', 'Sustainability', 'Customer-First', 'Seamless Integration'].map((item, index) => (
                  <motion.div
                    key={item}
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-blue-600 font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To create intelligent living spaces that understand, adapt, and enhance human life while 
                maintaining the highest standards of privacy, security, and sustainability.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
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
              Market Opportunity
            </h2>
            <p className="text-lg text-gray-600">
              A rapidly expanding landscape driven by IoT and AI
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-white rounded-3xl p-6 text-center shadow-lg border border-purple-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl inline-block mb-4">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Advantage */}
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
              Our Competitive Advantage
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                {advantages.map((advantage, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">{advantage}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">Seculinx vs Typical Offerings</h3>
              <div className="space-y-4">
                {[
                  { category: 'Zone detection', us: 'Advanced, room-level' },
                  { category: 'Energy optimization', us: 'AI-driven, context aware' },
                  { category: 'Privacy', us: 'Privacy-first, local processing' },
                  { category: 'Integration', us: 'Ecosystem-native' }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-600">{item.category}</span>
                    <span className="font-semibold text-blue-600">{item.us}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products */}
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
              Current & Upcoming Products
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                className="bg-white rounded-3xl p-8 shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                  product.status.includes('Launching') ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'
                }`}>
                  {product.status}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{product.name}</h3>
                <p className="text-gray-600">{product.description}</p>
                {product.status.includes('Launching') && (
                  <motion.button
                    onClick={() => window.location.href = '/brightsense'}
                    className="mt-6 w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-xl font-semibold"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Learn More
                  </motion.button>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Plan */}
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
              Our Growth Plan
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <p><strong>Short-term:</strong> BrightSense launch, early adopter programs, and strategic pilots.</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <p><strong>Mid-term:</strong> Expand product lines and partnerships across key markets.</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                  <p><strong>Long-term:</strong> Sustainable, privacy-first ecosystem leadership globally.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {timeline.map((item, index) => (
                <motion.div
                  key={item.period}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-purple-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <div>
                      <span className="font-semibold text-gray-900">{item.period}</span>
                      <span className="text-gray-600 ml-4">— {item.milestone}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Partner */}
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
              Why Partner with Us
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {partnerships.map((reason, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-4 bg-white rounded-2xl p-6 shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -2 }}
              >
                <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex-shrink-0"></div>
                <p className="text-gray-700">{reason}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Shape the Future?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join us in revolutionizing smart living. Let's discuss partnership opportunities.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold inline-flex items-center space-x-2 shadow-xl"
              >
                <span>Start the Conversation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
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

export default InvestPage;