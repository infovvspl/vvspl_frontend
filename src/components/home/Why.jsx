import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiCpu, FiUsers, FiCheckCircle, FiTrendingUp, FiShield, FiTerminal } from 'react-icons/fi';

const WhyChooseUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="relative w-full bg-white overflow-hidden py-24">
      {/* Hero-Match Background Grid */}
      <div className="absolute inset-0 z-0 opacity-60">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>
      
      {/* Blue Ambient Glow (Matches Hero blobs) */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-[120px] -z-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="h-[2px] w-12 bg-blue-600"></span>
            <span className="text-blue-600 text-xs font-bold tracking-[0.3em] uppercase">Metrics of Success</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
            Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Performance.</span><br />
            Designed for Growth.
          </h2>
          <p className="text-xl text-slate-500 leading-relaxed max-w-2xl">
            We don't just deliver projects; we engineer high-frequency digital assets that give you a competitive edge.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-16 items-start"
        >
          
          {/* Left Side: Module-style Stats */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: <FiAward />, label: "Years Exp.", val: "1+", color: "blue" },
              { icon: <FiCpu />, label: "Deployments", val: "20+", color: "purple" },
              { icon: <FiUsers />, label: "Global Clients", val: "5+", color: "blue" },
              { icon: <FiTrendingUp />, label: "Uptime", val: "99.9%", color: "purple" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                variants={itemVariants}
                className="relative bg-white/80 backdrop-blur-md p-8 rounded-[2.5rem] border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] group hover:-translate-y-2 transition-all duration-300 overflow-hidden"
              >
                {/* Decorative Terminal Dot */}
                <div className="absolute top-4 right-6 w-2 h-2 rounded-full bg-slate-200 group-hover:bg-blue-400"></div>
                
                <div className={`w-12 h-12 rounded-xl mb-6 flex items-center justify-center ${
                  stat.color === 'blue' ? 'bg-blue-600 text-white shadow-lg shadow-blue-100' : 'bg-slate-900 text-white shadow-lg shadow-slate-200'
                }`}>
                  {React.cloneElement(stat.icon, { size: 24 })}
                </div>
                <h3 className="text-4xl font-black text-slate-900 mb-1">{stat.val}</h3>
                <p className="text-slate-500 text-sm font-bold uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Right Side: Feature Set (The "Code" View) */}
          <motion.div 
            variants={itemVariants}
            className="bg-slate-900 rounded-[2.5rem] p-10 shadow-2xl relative overflow-hidden"
          >
            {/* Terminal Top Bar */}
            <div className="flex gap-2 mb-10">
              <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              <span className="ml-4 text-[10px] font-mono text-slate-500 uppercase tracking-widest">vvs_strategic_protocol.v2</span>
            </div>

            <div className="space-y-10">
              {[
                { title: "Transparent Architecture", icon: <FiCheckCircle />, desc: "Real-time visibility into every sprint via our proprietary dev-portal." },
                { title: "Security Protocols", icon: <FiShield />, desc: "AES-256 encryption and SOC2 compliant development environments." },
                { title: "Scale-First Logic", icon: <FiTerminal />, desc: "Microservices-ready codebases designed for 10x traffic spikes." }
              ].map((reason, i) => (
                <div key={i} className="flex items-start gap-6 group">
                  <div className="mt-1 w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300">
                    {React.cloneElement(reason.icon, { size: 20 })}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{reason.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{reason.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Subtle Gradient Overlay */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-600/20 rounded-full blur-[100px]"></div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;