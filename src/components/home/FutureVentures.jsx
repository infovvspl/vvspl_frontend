import React from 'react';
import { motion } from 'framer-motion';
import { FiGlobe, FiZap, FiMap, FiSun, FiLayers, FiArrowRight } from 'react-icons/fi';

const FutureVentures = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="relative w-full bg-slate-900 overflow-hidden py-24">
      {/* Background Texture */}
      <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"></div>
      
      {/* Ambient Light Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-900/20 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-900/20 rounded-full blur-[120px] -z-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-block py-1 px-3 rounded-full border border-slate-700 bg-slate-800 text-blue-400 text-xs font-bold tracking-widest uppercase mb-6">
            Our Future Ventures
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
            Expanding Horizons <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
              Across Industries
            </span>
          </h2>
          <p className="text-slate-400 text-lg">
            Beyond software, we are driving growth in critical sectors through sustainable development, resource management, and strategic trade.
          </p>
        </motion.div>

        {/* Ventures Grid (Bento Style) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          
          {/* Venture 1: Trade (Large Card) */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-2 group relative bg-slate-800/40 border border-slate-700 rounded-[2rem] p-8 overflow-hidden hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/20"
          >
            <div className="absolute right-0 top-0 w-64 h-full bg-gradient-to-l from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between h-full gap-6">
              <div className="max-w-xl">
                <div className="w-14 h-14 rounded-2xl bg-blue-600/20 text-blue-400 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <FiGlobe size={28} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-3">Trade, Import & Export</h3>
                <p className="text-slate-400 leading-relaxed">
                  Facilitating global commerce with streamlined logistics, customs brokerage, and international supply chain management. We connect markets.
                </p>
              </div>
              
              <div className="hidden md:flex gap-2">
                <span className="px-3 py-1 rounded-full border border-slate-600 text-slate-400 text-xs font-bold">Logistics</span>
                <span className="px-3 py-1 rounded-full border border-slate-600 text-slate-400 text-xs font-bold">Global</span>
              </div>
            </div>
          </motion.div>

          {/* Venture 2: Power & Energy */}
          <motion.div 
            variants={itemVariants}
            className="group relative bg-slate-800/40 border border-slate-700 rounded-[2rem] p-8 overflow-hidden hover:border-yellow-500/50 transition-all duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-yellow-500/10 text-yellow-400 flex items-center justify-center mb-6 group-hover:bg-yellow-500 group-hover:text-black transition-colors">
                  <FiZap size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Power & Energy</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Sustainable energy distribution and infrastructure projects.
                </p>
              </div>
              <div className="mt-6 w-8 h-8 rounded-full border border-slate-600 flex items-center justify-center text-slate-400 group-hover:bg-yellow-500 group-hover:text-black group-hover:border-transparent transition-all">
                <FiArrowRight size={16} />
              </div>
            </div>
          </motion.div>

          {/* Venture 3: Organic Agriculture */}
          <motion.div 
            variants={itemVariants}
            className="group relative bg-slate-800/40 border border-slate-700 rounded-[2rem] p-8 overflow-hidden hover:border-emerald-500/50 transition-all duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-6 group-hover:bg-emerald-500 group-hover:text-black transition-colors">
                  <FiSun size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Organic Agriculture</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Promoting sustainable farming practices and organic produce.
                </p>
              </div>
              <div className="mt-6 w-8 h-8 rounded-full border border-slate-600 flex items-center justify-center text-slate-400 group-hover:bg-emerald-500 group-hover:text-black group-hover:border-transparent transition-all">
                <FiArrowRight size={16} />
              </div>
            </div>
          </motion.div>

          {/* Venture 4: Mining & Minerals */}
          <motion.div 
            variants={itemVariants}
            className="group relative bg-slate-800/40 border border-slate-700 rounded-[2rem] p-8 overflow-hidden hover:border-orange-500/50 transition-all duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-black transition-colors">
                  <FiLayers size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Mining & Minerals</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Responsible extraction and processing of mineral resources.
                </p>
              </div>
              <div className="mt-6 w-8 h-8 rounded-full border border-slate-600 flex items-center justify-center text-slate-400 group-hover:bg-orange-500 group-hover:text-black group-hover:border-transparent transition-all">
                <FiArrowRight size={16} />
              </div>
            </div>
          </motion.div>

          {/* Venture 5: Land Acquisition (Spans 2 cols) */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-2 lg:col-span-1 group relative bg-slate-800/40 border border-slate-700 rounded-[2rem] p-8 overflow-hidden hover:border-purple-500/50 transition-all duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-6 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                  <FiMap size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Land Acquisition & Dev</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Strategic land procurement for industrial, commercial, and residential development projects.
                </p>
              </div>
              <div className="mt-6 w-8 h-8 rounded-full border border-slate-600 flex items-center justify-center text-slate-400 group-hover:bg-purple-500 group-hover:text-white group-hover:border-transparent transition-all">
                <FiArrowRight size={16} />
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default FutureVentures;