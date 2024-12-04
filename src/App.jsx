import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  BookOpen, 
  ClipboardList, 
  FileText, 
  CalendarCheck, 
  ArrowRight, 
  Cpu, 
  Zap,
  Rocket,
  Brain 
} from 'lucide-react';

const App = () => {
  const [activeFeature, setActiveFeature] = useState(null);
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const background = useTransform(
    scrollYProgress,
    [0, 1],
    ['hsl(240, 5%, 7%)', 'hsl(260, 10%, 10%)']
  );

  const features = [
    {
      title: "AI Assignment Solver",
      description: "Instant, step-by-step solutions to complex academic challenges.",
      icon: BookOpen,
      color: "bg-blue-600",
      gradient: "from-blue-500 to-indigo-600",
      details: "Our AI breaks down complex problems, providing comprehensive solutions with detailed explanations.",
      impact: "Solve any academic problem in minutes"
    },
    {
      title: "AI Quiz Generator",
      description: "Personalized quizzes tailored to your learning style.",
      icon: ClipboardList,
      color: "bg-green-600",
      gradient: "from-green-500 to-teal-600",
      details: "Dynamically generate quizzes that adapt to your knowledge level and learning gaps.",
      impact: "Targeted learning with precision"
    },
    {
      title: "Material Summarizer",
      description: "Transform complex content into concise, digestible insights.",
      icon: FileText,
      color: "bg-purple-600",
      gradient: "from-purple-500 to-pink-600",
      details: "Advanced natural language processing converts lengthy materials into clear, actionable summaries.",
      impact: "Understand complex topics instantly"
    },
    {
      title: "AI Study Planner",
      description: "Intelligent scheduling optimized for maximum learning efficiency.",
      icon: CalendarCheck,
      color: "bg-red-600",
      gradient: "from-red-500 to-orange-600",
      details: "Create dynamic study plans that adapt to your progress, learning speed, and academic goals.",
      impact: "Maximize your learning potential"
    }
  ];

  return (
    <motion.div 
      ref={scrollRef}
      style={{ backgroundColor: background }}
      className="min-h-screen text-white overflow-hidden relative"
    >
      {/* Particle Background */}
      <div className="absolute inset-0 z-0">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              opacity: Math.random()
            }}
            animate={{ 
              x: [
                Math.random() * window.innerWidth, 
                Math.random() * window.innerWidth, 
                Math.random() * window.innerWidth
              ],
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight
              ],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <Rocket className="mr-4 text-blue-500 animate-pulse" size={48} />
            <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
              Prepy
            </h1>
          </div>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Unleash Your Academic Potential with AI-Powered Learning Intelligence
          </p>
          <div className="flex justify-center space-x-4">
            <motion.button 
            onClick={() => alert('Coming soon')}  
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full flex items-center text-lg shadow-2xl"
            >
              Start Your Learning Journey <ArrowRight className="ml-2" />
            </motion.button>
            <motion.button 
              onClick={() => alert('Coming soon')}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 15px rgba(156, 163, 175, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-gray-600 text-gray-300 hover:bg-gray-800 font-bold py-4 px-8 rounded-full text-lg"
            >
              Discover More
            </motion.button>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.2 
              }}
              onHoverStart={() => setActiveFeature(index)}
              onHoverEnd={() => setActiveFeature(null)}
              className={`
                bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 
                transform transition duration-300 
                hover:scale-105 hover:shadow-2xl cursor-pointer
                relative overflow-hidden border border-white/10
                bg-gradient-to-br ${feature.gradient}
              `}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
              
              <feature.icon className="w-12 h-12 mb-4 opacity-80 mx-auto" />
              <h3 className="text-xl font-semibold mb-3 text-center">{feature.title}</h3>
              <p className="text-gray-300 text-center">{feature.description}</p>
              
              <AnimatePresence>
                {activeFeature === index && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="absolute inset-0 bg-black bg-opacity-90 p-6 flex flex-col justify-center text-center"
                  >
                    <p className="text-white mb-4">{feature.details}</p>
                    <div className="flex items-center justify-center text-green-400">
                      <Zap className="mr-2" />
                      <span>{feature.impact}</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* AI Intelligence Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mt-16 bg-gray-900/50 backdrop-blur-lg rounded-2xl p-12 border border-white/10"
        >
          <div className="flex justify-center mb-6">
            <Brain size={64} className="text-blue-500 animate-spin-slow" />
          </div>
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
            Intelligent Learning Redefined
          </h2>
          <p className="max-w-4xl mx-auto text-xl text-gray-300 leading-relaxed">
            Prepy harnesses cutting-edge artificial intelligence to create a personalized, adaptive learning ecosystem. 
            Our advanced algorithms analyze your unique learning pattern, optimize study strategies, 
            and provide intelligent insights that transform academic performance.
          </p>
        </motion.div>
      </div>

      {/* Futuristic Footer */}
      <footer className="relative z-10 bg-black/30 backdrop-blur-lg border-t border-white/10 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2024 Prepy. Intelligence Meets Education.</p>
        </div>
      </footer>
    </motion.div>
  );
};

export default App;