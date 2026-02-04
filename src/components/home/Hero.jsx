import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import HeroImg from "../../assets/hero21.png";
import {
  FiCode, FiLayers, FiZap, FiChevronRight, FiSmartphone,
  FiGlobe, FiShoppingCart, FiCheckCircle, FiCpu,
  FiActivity, FiTerminal, FiArrowRight, FiServer,
  FiCloud, FiDatabase, FiShield, FiTrendingUp, FiPlus, FiCompass, FiExternalLink
} from 'react-icons/fi';
import { FaSearch } from "react-icons/fa";

const Hero = () => {
  const [activeTech, setActiveTech] = useState(0);

  const techStack = [
    { icon: <FiGlobe />, label: "Web Apps", color: "text-blue-600" },
    { icon: <FiSmartphone />, label: "Mobile", color: "text-purple-600" },
    { icon: <FiShoppingCart />, label: "E-Commerce", color: "text-green-600" },
    { icon: <FiCpu />, label: "AI/ML", color: "text-orange-600" },
    { icon: <FiDatabase />, label: "Cloud", color: "text-cyan-600" },
    { icon: <FiShield />, label: "Security", color: "text-red-600" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTech((prev) => (prev + 1) % techStack.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full bg-gradient-to-br from-gray-50 to-white overflow-hidden py-16 md:py-24 lg:py-32">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl" />

        {/* Geometric Grid */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(90deg, transparent 95%, #3b82f6 100%),
              linear-gradient(0deg, transparent 95%, #3b82f6 100%)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl mx-auto lg:mx-0"
          >
            {/* Animated Badge with Floating Effect */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{
                opacity: 1,
                x: 0,
                y: [0, -5, 0]
              }}
              transition={{
                delay: 0.3,
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-gradient-to-r from-blue-50/80 to-indigo-50/80 backdrop-blur-sm border border-blue-100/50 shadow-lg shadow-blue-500/5 mb-8 relative overflow-hidden group"
            >
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 20% 50%, #3b82f6 1px, transparent 1px)`,
                  backgroundSize: '20px 20px'
                }} />
              </div>

              {/* Pulsing Dot */}
              {/* <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  boxShadow: [
                    "0 0 0 0 rgba(59, 130, 246, 0)",
                    "0 0 0 6px rgba(59, 130, 246, 0.2)",
                    "0 0 0 0 rgba(59, 130, 246, 0)"
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative w-3 h-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full"
              /> */}

              {/* Animated Shield Icon */}
              {/* <motion.div
                animate={{ rotateY: [0, 360] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="text-blue-600"
              >
                <FiShield className="w-4 h-4" />
              </motion.div>

              <span className="text-sm font-bold text-blue-800 tracking-wide">
                VVSPL • Veteran Owned
              </span> */}

              {/* Separator with Animation */}
              {/* <motion.div
                animate={{ height: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-0.5 h-3 bg-gradient-to-b from-blue-300 to-blue-400 rounded-full"
              />

              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-1 px-2 py-1 bg-white/50 rounded-lg"
              >
                <span className="text-xs font-semibold text-blue-700">EST.</span>
                <motion.span
                  animate={{
                    textShadow: [
                      "0 0 0px #3b82f6",
                      "0 0 8px #3b82f6",
                      "0 0 0px #3b82f6"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-sm font-bold text-blue-800"
                >
                  2026
                </motion.span>
              </motion.div> */}
            </motion.div>

            {/* Main Heading with Enhanced Effects */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl sm:text-6xl font-bold text-gray-900 leading-tight mb-8"
            >
              {/* First Line */}
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="block"
              >
                <span className="relative">
                  Code That
                  {/* Animated Underline */}
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
                  />
                </span>
              </motion.span>

              {/* Second Line with Gradient Text */}
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="block mt-4"
              >
                <span className="relative">
                  <motion.span
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                    }}
                    transition={{ duration: 5, repeat: Infinity }}
                    style={{
                      background: "linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)",
                      backgroundSize: "300% 300%",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent"
                    }}
                    className="relative z-10 font-bold text-6xl "
                  >
                    Accelerates Growth.
                  </motion.span>

                  {/* Floating Particles */}
                  <div className="absolute -top-4 -right-4 flex gap-1">
                    {[1, 2, 3].map((i) => (
                      <motion.div
                        key={i}
                        animate={{
                          y: [0, -10, 0],
                          opacity: [0.2, 1, 0.2]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2
                        }}
                        className="w-1 h-1 bg-purple-500 rounded-full"
                      />
                    ))}
                  </div>
                </span>
              </motion.span>

              {/* Third Line with Typewriter Effect */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="block mt-6"
              >
                <div className="relative inline-block">
                  <motion.span
                    animate={{
                      textShadow: [
                        "0 0 0px rgba(107, 114, 128, 0)",
                        "0 0 10px rgba(107, 114, 128, 0.3)",
                        "0 0 0px rgba(107, 114, 128, 0)"
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="text-3xl font-light text-gray-600"
                  >
                    That Scale with
                  </motion.span>

                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1 }}
                    className="relative ml-3"
                  >
                    <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Your Vision
                    </span>
                    {/* Blinking Cursor */}
                    <motion.span
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="ml-1 w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 inline-block"
                    />
                  </motion.span>
                </div>
              </motion.div>
            </motion.h1>

            {/* Description with Animated Background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="relative mb-10"
            >
              {/* Animated Border */}
              <motion.div
                animate={{
                  borderColor: ["#dbeafe", "#e0e7ff", "#dbeafe"],
                  // boxShadow: [
                  //   "0 4px 20px -2px rgba(59, 130, 246, 0.05)",
                  //   "0 8px 25px -2px rgba(59, 130, 246, 0.1)",
                  //   "0 4px 20px -2px rgba(59, 130, 246, 0.05)"
                  // ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -inset-4 rounded-2xl pointer-events-none"
              />

              <p className="text-xl text-gray-600 leading-relaxed p-6 bg-gradient-to-br from-white/50 to-blue-50/30 backdrop-blur-sm rounded-xl">
                <span className="font-semibold text-blue-700">VVSPL</span> delivers cutting-edge software solutions combined with strategic future ventures. We architect robust digital platforms that drive exponential growth across multiple industries.

                {/* Floating Tech Icons */}
                {/* <div className="absolute -right-2 -top-2 flex gap-2">
                  {["⚡", "🚀", "🎯"].map((icon, i) => (
                    <motion.span
                      key={i}
                      animate={{
                        rotate: [0, 15, 0],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.5
                      }}
                      className="text-2xl"
                    >
                      {icon}
                    </motion.span>
                  ))}
                </div> */}
              </p>
            </motion.div>

            {/* CTA Buttons with Enhanced Effects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="flex flex-col sm:flex-row gap-6 mb-12"
            >
              {/* Primary Button */}
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl font-bold text-lg overflow-hidden shadow-xl shadow-blue-500/30"
              >
                {/* Animated Background */}
                <motion.div
                  animate={{
                    x: ["-100%", "100%"],
                    opacity: [0, 0.5, 0]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                />

                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300" />

                <span className="relative z-10 flex items-center justify-center gap-3">
                  Start Your Project
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.div>
                </span>
              </motion.button>

              {/* Secondary Button */}
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="relative p-[2px] overflow-hidden rounded-2xl group transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
              >
                {/* The Rotating Background (The "Bling") */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[-200%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_270deg,#3b82f6_360deg)] group-hover:bg-[conic-gradient(from_0deg,transparent_0deg,transparent_180deg,#3b82f6_360deg)]"
                  style={{
                    // Optional: Add a secondary color for more depth
                    background: 'conic-gradient(from 0deg, transparent 60%, #3b82f6 80%, #93c5fd 100%)'
                  }}
                />

                {/* Inner Button Content */}
                <div className="relative z-10 px-10 py-4 bg-white rounded-[14px] flex items-center justify-center gap-3">
                  <span className="font-bold text-lg text-gray-700">
                    Explore Ventures
                  </span>

                  <motion.div
                    animate={{
                      rotate: [0, 15, -15, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <FaSearch className="w-6 h-6 text-blue-500 group-hover:text-blue-600" />
                  </motion.div>
                </div>
              </motion.button>
            </motion.div>

            {/* Tech Stack Indicator - Enhanced */}
            {/* <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="mb-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <FiTrendingUp className="text-green-500 w-6 h-6" />
                </motion.div>
                <span className="text-sm font-bold text-gray-700 tracking-wide">
                  Now Building in Real-time:
                </span>
              </div>

              <motion.div
                key={activeTech}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="relative bg-gradient-to-br from-white/80 to-blue-50/50 backdrop-blur-sm border border-gray-100/50 rounded-2xl p-6 shadow-xl shadow-blue-500/10 overflow-hidden group"
              >
                <div className="absolute inset-0 opacity-5">
                  <motion.div
                    animate={{ x: [0, 100, 0] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `linear-gradient(45deg, #3b82f6 1px, transparent 1px)`,
                      backgroundSize: '40px 40px'
                    }}
                  />
                </div>

                <div className="relative flex items-center gap-4">
                  <motion.div
                    animate={{
                      rotateY: [0, 360],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className={`text-4xl ${techStack[activeTech].color} p-3 rounded-xl bg-white shadow-lg`}
                  >
                    {techStack[activeTech].icon}
                  </motion.div>

                  <div>
                    <motion.h4
                      animate={{
                        textShadow: [
                          "0 0 0px rgba(17, 24, 39, 0)",
                          "0 0 10px rgba(59, 130, 246, 0.3)",
                          "0 0 0px rgba(17, 24, 39, 0)"
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-2xl font-bold text-gray-900"
                    >
                      {techStack[activeTech].label}
                    </motion.h4>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500">Enterprise Solutions</span>
                      <motion.div
                        animate={{
                          backgroundColor: ["#10b981", "#3b82f6", "#10b981"]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-2 h-2 rounded-full"
                      />
                      <span className="text-sm font-medium text-blue-600">Live</span>
                    </div>
                  </div>
                </div>

                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "85%" }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-green-400 to-cyan-400 rounded-b-2xl"
                />
              </motion.div>

              <div className="flex gap-2 mt-4">
                {techStack.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setActiveTech(index)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-3 h-3 rounded-full transition-all ${index === activeTech
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 scale-125"
                      : "bg-gray-300 hover:bg-gray-400"
                      }`}
                  />
                ))}
              </div>
            </motion.div> */}
          </motion.div>

          {/* Right Image Section */}
          <div className="relative perspective-1000 py-20">

            {/* 1. CONCEPTUAL FLOATING TERMINAL (Replaces System Analytics) */}
            <motion.div
              animate={{ y: [0, -15, 0], rotateX: [0, 5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-4 z-30 hidden md:block"
            >
              <div className="bg-white/80 backdrop-blur-2xl border border-white/50 rounded-2xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.1)] max-w-[280px]">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold ml-auto">Terminal v2.0</span>
                </div>
                <div className="font-mono text-xs space-y-2">
                  <p className="text-blue-600">$ <span className="text-slate-900">vvs.init()</span></p>
                  <p className="text-emerald-500 tracking-tighter">› optimized_stack_loaded</p>
                  <p className="text-slate-400">› scale: <span className="text-amber-500">infinite</span></p>
                </div>
              </div>
            </motion.div>

            {/* 2. MAIN IMAGE CONTAINER WITH DEPTH MASK */}
            <div className="relative z-10 group">
              {/* Abstract Background Glow */}
              <div className="absolute -inset-10 bg-gradient-to-tr from-blue-100/40 via-purple-100/40 to-cyan-100/40 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "circOut" }}
                className="relative rounded-[3rem] overflow-hidden "
              >
                {/* Subtle Grid Overlay */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                  style={{ backgroundImage: `radial-gradient(#000 1px, transparent 1px)`, backgroundSize: '30px 30px' }} />

                <img
                  src={HeroImg}
                  alt="VVSPL Solutions"
                  className="w-full h-auto scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out"
                />

                {/* Floating 'Feature' Badge */}
                {/* <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="absolute bottom-8 right-8 bg-black text-white px-5 py-3 rounded-2xl flex items-center gap-3 cursor-pointer shadow-xl"
                >
                  <div className="bg-blue-500 p-1.5 rounded-lg">
                    <FiExternalLink size={16} />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] opacity-60 uppercase font-bold">Latest Work</p>
                    <p className="text-sm font-semibold">Digital Ecosystems</p>
                  </div>
                </motion.div> */}
              </motion.div>
            </div>

            {/* 3. MINIMAL FLOATING NODES (Connecting the idea) */}
            {[
              { icon: <FiCode />, label: "Clean Architecture", pos: "-left-12 top-1/4", delay: 0 },
              { icon: <FiLayers />, label: "Scalable Infrastructure", pos: "-left-8 bottom-1/4", delay: 0.2 },
            ].map((item, i) => (
              <motion.div
                key={i}
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: item.delay }}
                className={`absolute ${item.pos} z-20 hidden lg:flex items-center gap-3 bg-white/40 backdrop-blur-md border border-white/20 p-3 rounded-xl shadow-sm`}
              >
                <div className="text-blue-600">{item.icon}</div>
                <span className="text-xs font-medium text-slate-700">{item.label}</span>
              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;