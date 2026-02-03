import React from 'react';
import { motion } from 'framer-motion';
import HeroImg from "../../assets/hero31.png";
import { FiCode, FiLayers, FiZap, FiChevronRight, FiSmartphone, FiGlobe, FiShoppingCart, FiCheckCircle, FiCpu, FiActivity, FiTerminal } from 'react-icons/fi';

const Hero = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden py-12 md:py-24 lg:py-32">
      {/* Background: Modern Software Engineering Aesthetic */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        {/* Ambient Light */}
        <div className="absolute top-1/4 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-50/50 rounded-full blur-[80px] md:blur-[120px] -z-10"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left: Strategic Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="h-[1px] w-12 bg-blue-600"></span>
              <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-blue-600 uppercase">
                Software Excellence
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-slate-900 leading-[1.1] lg:leading-[0.95] mb-6 md:mb-8">
              Code That <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-600">
                Accelerates
              </span> Growth.
            </h1>

            <p className="text-base md:text-lg text-slate-500 mb-8 md:mb-10 max-w-xl leading-relaxed">
              VVSPL transforms complex business logic into high-performance digital ecosystems. We specialize in
              <span className="text-slate-900 font-medium"> Custom Web Apps</span>,
              <span className="text-slate-900 font-medium"> Mobile App Development</span>, and
              <span className="text-slate-900 font-medium"> Enterprise E-commerce Solutions</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-5">
              <button className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:shadow-2xl hover:shadow-blue-200 transition-all flex items-center justify-center gap-2 group">
                Launch Your Project
                <FiChevronRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-2xl font-bold hover:border-blue-600 transition-all flex items-center justify-center">
                View Case Studies
              </button>
            </div>

            {/* Software Stack Icons */}
            <div className="mt-12 md:mt-16 pt-8 border-t border-slate-100 flex flex-wrap items-center gap-6 md:gap-8 opacity-60 grayscale hover:grayscale-0 transition-all">
              <div className="flex flex-col items-center gap-1">
                <FiGlobe className="text-xl md:text-2xl" />
                <span className="text-[10px] font-bold uppercase">Web Apps</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <FiSmartphone className="text-xl md:text-2xl" />
                <span className="text-[10px] font-bold uppercase">Mobile</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <FiShoppingCart className="text-xl md:text-2xl" />
                <span className="text-[10px] font-bold uppercase">E-Commerce</span>
              </div>
              <div className="hidden sm:flex flex-col items-center gap-1 border-l pl-6 md:pl-8 border-slate-200">
                <FiZap className="text-xl md:text-2xl text-blue-600" />
                <span className="text-[10px] font-bold uppercase">AI/ML</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Creative "Tech Ecosystem" Design */}
          <div className="relative h-full min-h-[500px] flex items-center justify-center perspective-1000">

            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute bottom-0 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>

            {/* Increased max-w-lg to max-w-xl for better width presence */}
            <div className="relative w-full max-w-xl transform transition-transform duration-500 hover:scale-[1.02]">

              {/* Floating Card 1: Deployment Status (Top Left) */}
              <motion.div
                initial={{ opacity: 0, x: -20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute -top-4 -left-4 md:-top-8 md:-left-12 z-20 bg-white/80 backdrop-blur-md border border-white/40 p-4 rounded-2xl shadow-xl shadow-blue-900/10 flex items-center gap-3 max-w-[200px]"
              >
                <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <FiCheckCircle size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase">Deployment</p>
                  <p className="text-sm font-black text-slate-900 flex items-center gap-1">
                    Success <span className="w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
                  </p>
                </div>
              </motion.div>

              {/* Floating Card 2: System Load (Bottom Right) */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: -20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-8 z-20 bg-slate-900/90 backdrop-blur-md border border-slate-700 p-4 rounded-2xl shadow-2xl flex flex-col gap-2 w-40"
              >
                <div className="flex justify-between items-center text-white">
                  <span className="text-xs font-bold uppercase text-slate-400">Server Load</span>
                  <FiActivity className="text-blue-400" size={14} />
                </div>
                <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-400 to-indigo-500 h-full w-[65%]"></div>
                </div>
                <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                  <span>12ms</span>
                  <span>99.9%</span>
                </div>
              </motion.div>

              {/* Floating Card 3: Code Snippet (Right Side) */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 -right-8 md:-right-16 z-20 bg-white/90 backdrop-blur-lg border border-slate-100 p-3 rounded-xl shadow-lg hidden md:block"
              >
                <div className="flex gap-1.5 mb-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                </div>
                <div className="font-mono text-[9px] text-slate-600 space-y-1">
                  <p><span className="text-purple-600">import</span> <span className="text-blue-600">{`{ VVSPL }`}</span> <span className="text-purple-600">from</span> 'future';</p>
                  <p><span className="text-purple-600">const</span> <span className="text-yellow-600">performance</span> = <span className="text-green-600">'blazing'</span>;</p>
                </div>
              </motion.div>

              {/* Main Image Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
                animate={{ opacity: 1, scale: 1, rotate: -3 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative rounded-[2.5rem] overflow-hidden rotate-3 hover:rotate-0 transition-all duration-700 ease-out"
              >
                <img
                  src={HeroImg}
                  className="w-full h-auto object-contain aspect-[4/5]"
                />

                {/* Decorative Tech Lines Overlay */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10 opacity-20"
                  style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                  }}>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;