import React from 'react';
import { motion } from 'framer-motion';
import { FiCpu, FiShield, FiZap, FiArrowRight, FiCode, FiLayers } from 'react-icons/fi';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="relative w-full bg-white overflow-hidden py-24">
      {/* Background: Sharp Grid Pattern (Exact Hero Match) */}
      {/* <div className="absolute inset-0 z-0 opacity-60">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:35px_35px]"></div>
      </div> */}
      
      {/* Floating Decorative Elements (Hero Vibe) */}
      <motion.div 
        animate={{ y: [0, -20, 0] }} 
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-20 right-[10%] text-blue-200 opacity-50 hidden lg:block"
      >
        <FiCode size={120} />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-left max-w-3xl mb-20"
        >
          <div className="h-1 w-20 bg-blue-600 mb-6"></div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-[1.1]">
            Engineering the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              Future of Scale.
            </span>
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl leading-relaxed">
            VVSPL architects robust digital platforms. We don't just write code; we build the infrastructure that powers your vision.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-32"
        >
          {[
            { icon: <FiZap />, title: "Rapid Deployment", color: "blue", desc: "Optimized stacks designed for immediate market impact and speed." },
            { icon: <FiLayers />, title: "Clean Architecture", color: "purple", desc: "Deeply modular codebases built for long-term maintainability." },
            { icon: <FiCpu />, title: "Infinite Scaling", color: "blue", desc: "Cloud-native solutions that grow seamlessly with your user base." }
          ].map((feature, i) => (
            <motion.div 
              key={i}
              variants={itemVariants}
              className="group bg-white/80 backdrop-blur-sm p-10 rounded-3xl border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-blue-100 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-2xl ${feature.color === 'blue' ? 'bg-blue-600' : 'bg-purple-600'} text-white flex items-center justify-center mb-8 shadow-lg shadow-blue-200`}>
                {React.cloneElement(feature.icon, { size: 28 })}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{feature.title}</h3>
              <p className="text-slate-500 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Split Section */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left: Interactive-looking Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* The "Terminal" shadow effect from your hero image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/20 to-purple-400/20 rounded-[3rem] blur-3xl -z-10"></div>
            
            <div className="relative bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-slate-800">
                <img 
                src="https://img.freepik.com/free-vector/programming-coding-development-isometric-flowchart-with-daily-meeting-coding-advertising-template-dev-ops-different-steps_1284-60024.jpg?w=1480" 
                alt="Architecture" 
                className="w-full h-auto opacity-80"
                />
                {/* Floating Overlay Card (Matches Hero Terminal) */}
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-2xl border border-white/50 hidden md:block">
                    <div className="flex gap-2 mb-2">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <code className="text-[10px] text-blue-600">vvs.deploy(status: "infinite")</code>
                </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-black text-slate-900 mb-8 tracking-tight">
              We build the code that <br /> 
              <span className="text-blue-600">scales with your vision.</span>
            </h3>
            
            <div className="space-y-6 mb-10">
              {[
                { t: "Cutting-edge Stacks", d: "React, Node, and Python architected for speed." },
                { t: "Strategic Growth", d: "We align technical roadmaps with business goals." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                    <FiArrowRight size={14} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{item.t}</h4>
                    <p className="text-slate-500 text-sm">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="group px-10 py-4 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-all flex items-center gap-3 shadow-xl shadow-blue-200">
              Explore Our Ventures
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;