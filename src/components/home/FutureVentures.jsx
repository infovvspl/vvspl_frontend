import React from 'react';
import { motion } from 'framer-motion';
import { FiGlobe, FiZap, FiMap, FiSun, FiLayers, FiArrowRight } from 'react-icons/fi';

const FutureVentures = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const ventures = [
    { icon: <FiZap />, title: "Power & Energy", desc: "Sustainable infrastructure and renewable distribution networks.", sector: "energy" },
    { icon: <FiSun />, title: "Organic Agriculture", desc: "Sustainable farming practices and high-yield organic produce.", sector: "agri" },
    { icon: <FiLayers />, title: "Mining & Minerals", desc: "Responsible extraction and processing of critical mineral resources.", sector: "industrial" },
    { icon: <FiMap />, title: "Land Development", desc: "Strategic procurement for large-scale industrial projects.", sector: "real_estate" },
  ];

  return (
    <section className="relative w-full bg-white overflow-hidden py-24">
      {/* Exact Hero Pattern Background */}
      <div className="absolute inset-0 z-0 opacity-60">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>
      
      {/* Ambient Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[120px] -z-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="h-[2px] w-12 bg-blue-600"></span>
            <span className="text-blue-600 text-xs font-bold tracking-[0.3em] uppercase">Diverse Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
            Expanding into <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              New Frontiers.
            </span>
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl leading-relaxed">
            VVSPL is bridging technology with physical industry. We apply engineering precision to global trade, energy, and resources.
          </p>
        </motion.div>

        {/* Ventures Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          
          {/* Featured: Trade (Large Card) */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-2 group relative bg-slate-900 rounded-[2.5rem] p-10 overflow-hidden shadow-2xl"
          >
             <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:25px_25px]"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-start justify-between h-full gap-8">
              <div className="max-w-lg">
                <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-8 shadow-lg shadow-blue-500/20">
                  <FiGlobe size={28} />
                </div>
                <h3 className="text-3xl font-black text-white mb-4">Trade, Import & Export</h3>
                <p className="text-slate-400 leading-relaxed text-lg">
                  Facilitating global commerce with streamlined logistics and international supply chain management. We connect global markets with technical efficiency.
                </p>
              </div>
              
              <div className="flex flex-col items-end justify-between h-full">
                <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 text-blue-400 font-mono text-xs">
                  sector: "global_logistics"
                </div>
                <button className="mt-8 px-6 py-3 bg-white text-slate-900 rounded-full font-bold hover:bg-blue-50 transition-all flex items-center gap-2">
                  View Operations <FiArrowRight />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Sub Ventures */}
          {ventures.map((v, i) => (
            <motion.div 
              key={i}
              variants={itemVariants}
              className="group bg-white border border-slate-200 rounded-[2rem] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-6 right-8 text-[10px] font-mono text-slate-300 group-hover:text-blue-400 transition-colors">
                //{v.sector}
              </div>

              <div className="w-12 h-12 rounded-xl bg-slate-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                {React.cloneElement(v.icon, { size: 24 })}
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                {v.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                {v.desc}
              </p>

              <div className="flex items-center gap-2 text-xs font-black text-slate-400 group-hover:text-blue-600 transition-all uppercase tracking-widest">
                Learn More <FiArrowRight />
              </div>
            </motion.div>
          ))}

        </motion.div>
      </div>
    </section>
  );
};

export default FutureVentures;