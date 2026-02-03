import React from 'react';
import { motion } from 'framer-motion';
import { FiGlobe, FiSmartphone, FiCpu, FiLayers, FiArrowRight, FiCommand } from 'react-icons/fi';

const ServicesDark = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="relative w-full bg-slate-950 overflow-hidden py-24">
      {/* Abstract Background Mesh */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute top-[40%] left-[40%] w-[300px] h-[300px] bg-indigo-500/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 border border-slate-800 backdrop-blur-sm mb-6">
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
            <span className="text-blue-400 text-xs font-bold tracking-[0.2em] uppercase">Services</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Engineered for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
              High Performance
            </span>
          </h2>
          <p className="text-slate-400 text-lg">
            We deploy cutting-edge architectures that scale, secure, and accelerate your business trajectory.
          </p>
        </motion.div>

        {/* Glass Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          
          {/* Service Card Component Logic */}
          {/* Card 1 */}
          <motion.div 
            variants={itemVariants}
            className="group relative bg-slate-900/40 border border-slate-800/50 backdrop-blur-xl rounded-[2rem] p-8 hover:bg-slate-900/60 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
          >
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-slate-800 text-blue-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.1)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                <FiGlobe size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors">Web Solutions</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Robust web applications built on React and Next.js. From SaaS platforms to high-traffic marketing sites.
              </p>
              <div className="flex items-center text-blue-400 font-bold text-sm gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                Explore <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            variants={itemVariants}
            className="group relative bg-slate-900/40 border border-slate-800/50 backdrop-blur-xl rounded-[2rem] p-8 hover:bg-slate-900/60 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-slate-800 text-purple-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(147,51,234,0.1)] group-hover:shadow-[0_0_30px_rgba(147,51,234,0.5)]">
                <FiSmartphone size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors">Mobile Engineering</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Native and cross-platform mobile experiences using Flutter and React Native for seamless iOS/Android performance.
              </p>
              <div className="flex items-center text-purple-400 font-bold text-sm gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                Explore <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            variants={itemVariants}
            className="group relative bg-slate-900/40 border border-slate-800/50 backdrop-blur-xl rounded-[2rem] p-8 hover:bg-slate-900/60 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-slate-800 text-orange-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(249,115,22,0.1)] group-hover:shadow-[0_0_30px_rgba(249,115,22,0.5)]">
                <FiCommand size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-200 transition-colors">Cloud & DevOps</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Scalable infrastructure on AWS and Azure. CI/CD pipelines and serverless architectures for maximum uptime.
              </p>
              <div className="flex items-center text-orange-400 font-bold text-sm gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                Explore <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div 
            variants={itemVariants}
            className="group relative bg-slate-900/40 border border-slate-800/50 backdrop-blur-xl rounded-[2rem] p-8 hover:bg-slate-900/60 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-slate-800 text-green-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-green-600 group-hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(34,197,94,0.1)] group-hover:shadow-[0_0_30px_rgba(34,197,94,0.5)]">
                <FiLayers size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-green-200 transition-colors">UI/UX Design</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Intuitive, accessible, and beautiful interfaces. We design for engagement and conversion.
              </p>
              <div className="flex items-center text-green-400 font-bold text-sm gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                Explore <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </motion.div>

          {/* Card 5 (Span 2) */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-2 lg:col-span-2 group relative bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-700/50 backdrop-blur-xl rounded-[2rem] p-10 hover:border-slate-600 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
          >
            {/* Decorative Grid inside card */}
            <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-2xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center border border-indigo-500/30">
                    <FiCpu size={24} />
                  </div>
                  <span className="text-indigo-400 font-bold tracking-widest text-xs uppercase">Next Gen Services</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">AI & Data Intelligence</h3>
                <p className="text-slate-400 leading-relaxed">
                  Unlock the potential of your data. We integrate custom Machine Learning models, LLMs (Large Language Models), and predictive analytics to automate workflows and provide deep business insights.
                </p>
              </div>
              
              <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold shadow-[0_0_20px_rgba(79,70,229,0.3)] transition-all whitespace-nowrap">
                Consult Our Experts
              </button>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default ServicesDark;