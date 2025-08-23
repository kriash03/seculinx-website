// src/components/layout/HeroSection.jsx
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const ParticleHouseAnimation = () => {
  const [isFormed, setIsFormed] = useState(false);

return (
  <div 
    className="relative w-48 h-40"
    onMouseEnter={() => setIsFormed(true)}
    onMouseLeave={() => setIsFormed(false)}
  >
      {/* Particle System */}
      <div className={`relative w-full h-full transition-all duration-[2500ms] ease-out ${isFormed ? 'formed' : ''}`}>
        {/* Particles */}
        <div className={`absolute w-2.5 h-2.5 rounded-full transition-all duration-[2500ms] ease-out ${
          isFormed ? 'top-[45px] left-[50px]' : 'top-[25px] left-[20px]'
        }`} 
        style={{
          background: 'radial-gradient(circle, #60a5fa, #3b82f6)',
          boxShadow: isFormed ? '0 0 20px rgba(59, 130, 246, 0.8)' : '0 0 15px rgba(59, 130, 246, 0.6)',
          animation: !isFormed ? 'preciseFloat1 3.5s infinite ease-in-out' : 'none'
        }} />
        
        <div className={`absolute w-2.5 h-2.5 rounded-full transition-all duration-[2500ms] ease-out ${
          isFormed ? 'top-[25px] left-[100px]' : 'top-[90px] left-[15px]'
        }`}
        style={{
          background: 'radial-gradient(circle, #34d399, #10b981)',
          boxShadow: isFormed ? '0 0 20px rgba(16, 185, 129, 0.8)' : '0 0 15px rgba(16, 185, 129, 0.6)',
          animation: !isFormed ? 'preciseFloat2 4s infinite ease-in-out' : 'none'
        }} />
        
        <div className={`absolute w-2.5 h-2.5 rounded-full transition-all duration-[2500ms] ease-out ${
          isFormed ? 'top-[45px] left-[150px]' : 'top-[45px] left-[170px]'
        }`}
        style={{
          background: 'radial-gradient(circle, #a78bfa, #8b5cf6)',
          boxShadow: isFormed ? '0 0 20px rgba(139, 92, 246, 0.8)' : '0 0 15px rgba(139, 92, 246, 0.6)',
          animation: !isFormed ? 'preciseFloat3 3.2s infinite ease-in-out' : 'none'
        }} />
        
        <div className={`absolute w-2.5 h-2.5 rounded-full transition-all duration-[2500ms] ease-out ${
          isFormed ? 'top-[85px] left-[50px]' : 'top-[130px] left-[175px]'
        }`}
        style={{
          background: 'radial-gradient(circle, #fbbf24, #f59e0b)',
          boxShadow: isFormed ? '0 0 20px rgba(245, 158, 11, 0.8)' : '0 0 15px rgba(245, 158, 11, 0.6)',
          animation: !isFormed ? 'preciseFloat4 3.8s infinite ease-in-out' : 'none'
        }} />
        
        <div className={`absolute w-2.5 h-2.5 rounded-full transition-all duration-[2500ms] ease-out ${
          isFormed ? 'top-[85px] left-[150px]' : 'top-[70px] left-[95px]'
        }`}
        style={{
          background: 'radial-gradient(circle, #f87171, #ef4444)',
          boxShadow: isFormed ? '0 0 20px rgba(239, 68, 68, 0.8)' : '0 0 15px rgba(239, 68, 68, 0.6)',
          animation: !isFormed ? 'preciseFloat5 3.6s infinite ease-in-out' : 'none'
        }} />
        
        <div className={`absolute w-2.5 h-2.5 rounded-full transition-all duration-[2500ms] ease-out ${
          isFormed ? 'top-[125px] left-[50px]' : 'top-[150px] left-[50px]'
        }`}
        style={{
          background: 'radial-gradient(circle, #38bdf8, #06b6d4)',
          boxShadow: isFormed ? '0 0 20px rgba(6, 182, 212, 0.8)' : '0 0 15px rgba(6, 182, 212, 0.6)',
          animation: !isFormed ? 'preciseFloat6 4.1s infinite ease-in-out' : 'none'
        }} />
        
        <div className={`absolute w-2.5 h-2.5 rounded-full transition-all duration-[2500ms] ease-out ${
          isFormed ? 'top-[125px] left-[150px]' : 'top-[110px] left-[130px]'
        }`}
        style={{
          background: 'radial-gradient(circle, #a3e635, #84cc16)',
          boxShadow: isFormed ? '0 0 20px rgba(132, 204, 22, 0.8)' : '0 0 15px rgba(132, 204, 22, 0.6)',
          animation: !isFormed ? 'preciseFloat7 3.7s infinite ease-in-out' : 'none'
        }} />

        {/* Neural Connections */}
        <div className={`absolute h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-sm transition-all duration-[1500ms] ease-in-out ${
          isFormed ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          top: '35px',
          left: '52px',
          width: '47px',
          transform: 'rotate(-20deg)',
          animation: isFormed ? 'preciseDataFlow 2.5s infinite ease-in-out' : 'none'
        }} />
        
        <div className={`absolute h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-sm transition-all duration-[1500ms] ease-in-out ${
          isFormed ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          top: '35px',
          left: '105px',
          width: '46px',
          transform: 'rotate(20deg)',
          animation: isFormed ? 'preciseDataFlow 2.5s infinite ease-in-out 0.3s' : 'none'
        }} />
        
        <div className={`absolute h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent rounded-sm transition-all duration-[1500ms] ease-in-out ${
          isFormed ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          top: '69px',
          left: '39px',
          width: '31px',
          transform: 'rotate(90deg)',
          animation: isFormed ? 'preciseDataFlow 2.5s infinite ease-in-out 0.6s' : 'none'
        }} />
        
        <div className={`absolute h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent rounded-sm transition-all duration-[1500ms] ease-in-out ${
          isFormed ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          top: '69px',
          left: '140px',
          width: '31px',
          transform: 'rotate(90deg)',
          animation: isFormed ? 'preciseDataFlow 2.5s infinite ease-in-out 0.9s' : 'none'
        }} />
        
        <div className={`absolute h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent rounded-sm transition-all duration-[1500ms] ease-in-out ${
          isFormed ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          top: '110px',
          left: '39px',
          width: '31px',
          transform: 'rotate(90deg)',
          animation: isFormed ? 'preciseDataFlow 2.5s infinite ease-in-out 1.2s' : 'none'
        }} />
        
        <div className={`absolute h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent rounded-sm transition-all duration-[1500ms] ease-in-out ${
          isFormed ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          top: '110px',
          left: '140px',
          width: '31px',
          transform: 'rotate(90deg)',
          animation: isFormed ? 'preciseDataFlow 2.5s infinite ease-in-out 1.5s' : 'none'
        }} />
        
        <div className={`absolute h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-sm transition-all duration-[1500ms] ease-in-out ${
          isFormed ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          top: '130px',
          left: '55px',
          width: '100px',
          transform: 'rotate(0deg)',
          animation: isFormed ? 'preciseDataFlow 2.5s infinite ease-in-out 1.8s' : 'none'
        }} />
      </div>
    </div>
  );
};

const HeroSection = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Navigation handlers
  const handleProductsClick = () => {
    if (location.pathname !== '/') {
      // If not on homepage, navigate to homepage first, then scroll
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector('#products');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // If on homepage, just scroll
      const element = document.querySelector('#products');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleBrightSenseClick = () => {
    navigate('/brightsense');
  };
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
                onClick={handleProductsClick}
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
                onClick={handleBrightSenseClick}
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
                <ParticleHouseAnimation />

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