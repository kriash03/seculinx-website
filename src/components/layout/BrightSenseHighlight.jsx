// src/components/layout/BrightSenseHighlight.jsx
import { motion } from 'framer-motion';
import { Zap, Brain, Leaf, ArrowRight, Play } from 'lucide-react';
import { useState, useEffect } from 'react'; 

const BrightSenseHighlight = () => {
  const [isExperienceMode, setIsExperienceMode] = useState(false);
  const [experiencePhase, setExperiencePhase] = useState('blackout');
  const [energySaved, setEnergySaved] = useState(0);
  const [currentRoom, setCurrentRoom] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showExitMessage, setShowExitMessage] = useState(false);
  const [inactivityTimer, setInactivityTimer] = useState(15); 
  const [timerActive, setTimerActive] = useState(false); 
  const [isTransitioningOut, setIsTransitioningOut] = useState(false);

  // Auto-exit timer functions
  const startInactivityTimer = () => {
    setTimerActive(true);
    setInactivityTimer(15);
  };

  const resetInactivityTimer = () => {
    setInactivityTimer(15);
  };

  const handleAutoExit = () => {
    exitExperience();
  };

  const handleMouseMove = (e) => {
    resetInactivityTimer();
    setMousePosition({ x: e.clientX, y: e.clientY });
    
    // Get the house container bounds for precise detection
    const houseContainer = e.currentTarget.querySelector('.house-layout');
    if (!houseContainer) return;
    
    const houseRect = houseContainer.getBoundingClientRect();
    const relativeX = (e.clientX - houseRect.left) / houseRect.width;
    const relativeY = (e.clientY - houseRect.top) / houseRect.height;
    
    // Only detect rooms if mouse is inside the house container
    if (relativeX < 0 || relativeX > 1 || relativeY < 0 || relativeY > 1) {
      setCurrentRoom(null);
      return;
    }
    
    let room = null;
    // More precise room boundaries
    if (relativeX >= 0.1 && relativeX <= 0.45 && relativeY >= 0.1 && relativeY <= 0.45) {
      room = 'living-room';
    } else if (relativeX >= 0.55 && relativeX <= 0.9 && relativeY >= 0.1 && relativeY <= 0.45) {
      room = 'kitchen';
    } else if (relativeX >= 0.1 && relativeX <= 0.45 && relativeY >= 0.55 && relativeY <= 0.9) {
      room = 'bedroom';
    } else if (relativeX >= 0.6 && relativeX <= 0.85 && relativeY >= 0.55 && relativeY <= 0.9) {
      room = 'bathroom';
    }
    
    if (room !== currentRoom) {
      setCurrentRoom(room);
      if (room) {
        // Add energy when entering a new room
        setEnergySaved(prev => prev + Math.random() * 0.05);
      }
    }
  };

  const startExperience = () => {
    setIsExperienceMode(true);
    setExperiencePhase('blackout');
    
    // Sequence timing
    setTimeout(() => setExperiencePhase('detection'), 1500);
    setTimeout(() => setExperiencePhase('illumination'), 3500);
    setTimeout(() => {
      setExperiencePhase('game');
      startInactivityTimer();
    }, 5000);
  };

  const exitExperience = () => {
    setShowExitMessage(true);
    setTimerActive(false);
    
    // After showing exit message, start transition out
    setTimeout(() => {
      setIsTransitioningOut(true);
      
      // Complete the transition and reset everything
      setTimeout(() => {
        setShowExitMessage(false);
        setIsExperienceMode(false);
        setExperiencePhase('blackout');
        setEnergySaved(0);
        setCurrentRoom(null);
        setInactivityTimer(15);
        setIsTransitioningOut(false);
      }, 1500); // 1.5 second transition out
      
    }, 3000); // Show message for 3 seconds first
  };

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

  useEffect(() => {
  let interval;
  
  if (experiencePhase === 'game' && timerActive && !showExitMessage) {
    interval = setInterval(() => {
      setInactivityTimer(prev => {
        if (prev <= 1) {
          handleAutoExit();
          return 15;
        }
        return prev - 1;
      });
    }, 1000);
  }
  
  return () => clearInterval(interval);
}, [experiencePhase, timerActive, showExitMessage]);

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
              <span className="text-sm font-medium text-gray-700">Launching Q1 2026</span>
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
                onClick={startExperience}
              >
                <span>Experience BrightSense</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              {/* <motion.button
                className="border-2 border-emerald-500 text-emerald-600 px-8 py-4 rounded-full font-semibold flex items-center justify-center space-x-2 hover:bg-emerald-50 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </motion.button> */}
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
      {/* Experience Overlay */}
      {isExperienceMode && (
        <motion.div 
          className="fixed inset-0 z-50 bg-black"
          initial={{ opacity: 0 }}
          animate={{ 
          opacity: isTransitioningOut ? 0 : 1 
        }}
        transition={{ 
          duration: isTransitioningOut ? 1.5 : 1.5, 
          ease: "easeInOut" 
        }}
        >
          {/* Detection Phase */}
          {experiencePhase === 'detection' && (
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-green-400 text-xl font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              BrightSense detecting presence...
            </motion.div>
          )}
          
          {/* Illumination Phase */}
          {experiencePhase === 'illumination' && (
            <motion.div
              className="absolute top-1/2 left-1/2 w-0 h-0 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2"
              initial={{ width: 0, height: 0, opacity: 0 }}
              animate={{ width: '200vw', height: '200vh', opacity: 0.8 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          )}
          
          {/* Game Phase */}
          {experiencePhase === 'game' && (
            <motion.div
              className="w-full h-full bg-black cursor-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              onMouseMove={handleMouseMove}
            >
              {/* Exit Message */}
              {showExitMessage && (
                <motion.div
                  className="absolute inset-0 bg-black/90 flex items-center justify-center z-20"
                  initial={{ opacity: 0 }}
                  animate={{ 
                  opacity: isTransitioningOut ? 0 : 1 
                }}
                transition={{ 
                  duration: isTransitioningOut ? 1.5 : 0.5 
                }}
                >
                  <motion.div
                    className="text-center text-white max-w-2xl px-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <motion.h3 
                      className="text-4xl font-bold text-green-400 mb-6"
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      🏡 You left worry-free!
                    </motion.h3>
                    
                    <motion.p 
                      className="text-xl mb-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 }}
                    >
                      BrightSense automatically turned off all lights behind you, saving you{' '}
                      <strong className="text-green-400">{energySaved.toFixed(3)} kWh</strong>.
                    </motion.p>
                    
                    <motion.p 
                      className="text-lg italic text-gray-300"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.2 }}
                    >
                      No more wondering "Did I leave the lights on?"
                    </motion.p>
                  </motion.div>
                </motion.div>
              )}
              {/* Energy Counter */}
              <div className="absolute top-4 left-4 bg-black/80 text-green-400 px-4 py-2 rounded border-2 border-green-400 font-mono z-10">          Energy Saved: {energySaved.toFixed(3)} kWh
              </div>
              {/* Inactivity Timer */}
              <div className="absolute bottom-4 right-4 bg-black/80 text-orange-400 px-4 py-2 rounded border border-orange-400 font-mono z-10">
                Auto-exit in: {inactivityTimer}s
              </div>
              {/* House Layout */}
              <div className="house-layout relative w-4/5 h-4/5 mx-auto mt-10 border-4 border-blue-400 rounded-2xl bg-gray-800">
                {/* Living Room */}
                <div className={`absolute top-[10%] left-[10%] w-[35%] h-[35%] border-2 border-gray-600 rounded flex items-center justify-center text-white font-bold transition-all duration-300 ${
                  currentRoom === 'living-room' ? 'bg-yellow-400/30 border-yellow-400 shadow-lg shadow-yellow-400/50' : ''
                }`}>
                  Living Room 🛋️
                </div>
                
                {/* Kitchen */}
                <div className={`absolute top-[10%] right-[10%] w-[35%] h-[35%] border-2 border-gray-600 rounded flex items-center justify-center text-white font-bold transition-all duration-300 ${
                  currentRoom === 'kitchen' ? 'bg-yellow-400/30 border-yellow-400 shadow-lg shadow-yellow-400/50' : ''
                }`}>
                  Kitchen 🍳
                </div>
                
                {/* Bedroom */}
                <div className={`absolute bottom-[10%] left-[10%] w-[35%] h-[35%] border-2 border-gray-600 rounded flex items-center justify-center text-white font-bold transition-all duration-300 ${
                  currentRoom === 'bedroom' ? 'bg-yellow-400/30 border-yellow-400 shadow-lg shadow-yellow-400/50' : ''
                }`}>
                  Bedroom 🛏️
                </div>
                
                {/* Bathroom */}
                <div className={`absolute bottom-[10%] right-[10%] w-[30%] h-[35%] border-2 border-gray-600 rounded flex items-center justify-center text-white font-bold transition-all duration-300 ${
                  currentRoom === 'bathroom' ? 'bg-yellow-400/30 border-yellow-400 shadow-lg shadow-yellow-400/50' : ''
                }`}>
                  Bathroom 🚿
                </div>
              </div>
              {/* Exit Door - Add this */}
              <motion.button
                onClick={exitExperience}
                className="absolute bottom-[5%] left-[47%] w-[10%] h-[12%] bg-gray-700 border-2 border-blue-400 rounded-lg flex items-center justify-center text-white font-bold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
                whileHover={{ 
                  boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
                  backgroundColor: "#323945ff",
                  borderColor: "#60a5fa"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="text-center">
                  <div className="text-2xl">🚪</div>
                  <div className="text-xs">EXIT</div>
                </div>
              </motion.button>
              
              {/* Person Cursor */}
              <div 
                className="absolute w-6 h-6 pointer-events-none z-10 transition-all duration-100"
                style={{ 
                  left: mousePosition.x - 12, 
                  top: mousePosition.y - 12 
                }}
              >
                🚶‍♂️
              </div>
              
              {/* Instructions */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center">
                <p>Move your cursor through the rooms to see BrightSense in action!</p>
              </div>
            </motion.div>
          )}
        </motion.div>
      )}
    </section>
  );
};

export default BrightSenseHighlight;