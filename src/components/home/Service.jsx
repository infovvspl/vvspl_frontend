import React from 'react';
import { motion } from 'framer-motion';
import { FiGlobe, FiSmartphone, FiCpu, FiLayers, FiArrowRight, FiCommand, FiCode } from 'react-icons/fi';

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
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
    <section className="relative w-full bg-white overflow-hidden py-24">
      {/* Background: Sharp Grid Pattern (Hero Match) */}
      {/* <div className="absolute inset-0 z-0 opacity-60">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div> */}

      {/* Ambient Blue/Purple Glow (Like the Hero's abstract blobs) */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-purple-100/30 rounded-full blur-[120px] -z-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
             <div className="h-[2px] w-12 bg-blue-600"></div>
             <span className="text-blue-600 text-xs font-bold tracking-widest uppercase">Expertise</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
            Solutions That <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Scale Your Vision
            </span>
          </h2>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* Card Component */}
          {[
            { icon: <FiGlobe />, title: "Web Solutions", desc: "Enterprise-grade web apps built with React/Next.js.", color: "blue" },
            { icon: <FiSmartphone />, title: "Mobile Apps", desc: "Seamless iOS and Android experiences using Flutter.", color: "purple" },
            { icon: <FiCommand />, title: "DevOps", desc: "Automated CI/CD pipelines and cloud architecture.", color: "blue" },
            { icon: <FiLayers />, title: "UI/UX Design", desc: "Modern, high-conversion interfaces that look stunning.", color: "purple" }
          ].map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="group relative bg-white border border-slate-200 p-8 rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300"
            >
              {/* Terminal-style circle accents */}
              <div className="absolute top-6 right-8 flex gap-1.5 opacity-30">
                <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                <div className="w-2 h-2 rounded-full bg-slate-300"></div>
              </div>

              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-all duration-300 ${
                service.color === 'blue' ? 'bg-blue-600 shadow-blue-200' : 'bg-purple-600 shadow-purple-200'
              } text-white shadow-lg`}>
                {React.cloneElement(service.icon, { size: 26 })}
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-500 leading-relaxed mb-8">
                {service.desc}
              </p>

              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm group-hover:gap-4 transition-all">
                Learn More <FiArrowRight className="text-blue-600" />
              </div>
            </motion.div>
          ))}

          {/* Featured Large Card (AI & Intelligence) */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-2 group relative bg-slate-900 rounded-[2.5rem] p-10 overflow-hidden shadow-2xl"
          >
            {/* Darker Grid for contrast in the featured card */}
            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:25px_25px]"></div>
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
              <div className="max-w-md">
                <div className="flex items-center gap-3 mb-6">
                  <FiCpu className="text-blue-400" size={32} />
                  <span className="text-blue-400 font-bold uppercase tracking-tighter text-sm">Next-Gen Technology</span>
                </div>
                <h3 className="text-3xl font-black text-white mb-4">AI & Data Intelligence</h3>
                <p className="text-slate-400 leading-relaxed">
                  Integrating custom LLMs and predictive models to automate your complex business workflows.
                </p>
              </div>
              
              <div className="flex-shrink-0">
                <button className="px-8 py-4 bg-white text-slate-950 rounded-full font-bold hover:bg-blue-50 transition-all flex items-center gap-3 shadow-xl">
                  Consult an Expert <FiArrowRight />
                </button>
              </div>
            </div>
            
            {/* Subtle Code Snippet decoration */}
            <div className="absolute -bottom-4 -right-4 opacity-10">
               <FiCode size={200} className="text-white" />
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Services;