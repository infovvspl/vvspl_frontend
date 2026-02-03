import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiCpu, FiUsers, FiCheckCircle, FiTrendingUp, FiShield } from 'react-icons/fi';

const WhyChooseUs = () => {
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
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
    <section className="relative w-full bg-slate-50 overflow-hidden py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-orange-100/50 rounded-full blur-[100px] -z-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-slate-200 text-slate-600 text-xs font-bold tracking-wider uppercase mb-4">
            Our Advantages
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
            Why Businesses Trust <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              VVSPL
            </span>
          </h2>
          <p className="text-lg text-slate-600">
            We go beyond simple code delivery. We act as strategic partners committed to your long-term digital growth.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          
          {/* Left Side: Stats (Big Numbers) */}
          <div className="grid grid-cols-2 gap-8">
            {/* Stat 1 */}
            <motion.div 
              variants={itemVariants}
              className="bg-white p-8 rounded-[2rem] shadow-lg border border-slate-100 text-center group hover:shadow-blue-200/50 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <FiAward size={32} />
              </div>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-2">1+</h3>
              <p className="text-slate-500 font-medium">Years Experience</p>
            </motion.div>

            {/* Stat 2 */}
            <motion.div 
              variants={itemVariants}
              className="bg-white p-8 rounded-[2rem] shadow-lg border border-slate-100 text-center group hover:shadow-orange-200/50 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <FiCpu size={32} />
              </div>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-2">20+</h3>
              <p className="text-slate-500 font-medium">Projects Done</p>
            </motion.div>

            {/* Stat 3 */}
            <motion.div 
              variants={itemVariants}
              className="bg-white p-8 rounded-[2rem] shadow-lg border border-slate-100 text-center group hover:shadow-purple-200/50 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <FiUsers size={32} />
              </div>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-2">5+</h3>
              <p className="text-slate-500 font-medium">Happy Clients</p>
            </motion.div>

            {/* Stat 4 */}
            <motion.div 
              variants={itemVariants}
              className="bg-white p-8 rounded-[2rem] shadow-lg border border-slate-100 text-center group hover:shadow-green-200/50 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <FiTrendingUp size={32} />
              </div>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-2">100%</h3>
              <p className="text-slate-500 font-medium">Success Rate</p>
            </motion.div>
          </div>

          {/* Right Side: Reasons List */}
          <motion.div 
            variants={itemVariants}
            className="relative"
          >
            {/* Decorative Quote Mark */}
            <div className="absolute -top-4 -left-4 text-9xl font-black text-slate-100 opacity-50 z-0 leading-none">
              “
            </div>

            <div className="relative z-10 space-y-6">
              <h3 className="text-3xl font-bold text-slate-900 mb-8">Our Commitment to Excellence</h3>

              {/* Reason 1 */}
              <div className="flex items-start gap-4 group cursor-default">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <FiCheckCircle size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-1">Transparent Process</h4>
                  <p className="text-slate-600 leading-relaxed">
                    No hidden costs or black boxes. You get full visibility into the development lifecycle via agile sprints.
                  </p>
                </div>
              </div>

              {/* Reason 2 */}
              <div className="flex items-start gap-4 group cursor-default">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <FiShield size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-1">Security First</h4>
                  <p className="text-slate-600 leading-relaxed">
                    We build applications with enterprise-grade security standards from day one, protecting your data and users.
                  </p>
                </div>
              </div>

              {/* Reason 3 */}
              <div className="flex items-start gap-4 group cursor-default">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center group-hover:bg-pink-600 group-hover:text-white transition-colors">
                  <FiCpu size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-1">Scalable Architecture</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Our code grows with you. We design systems that handle increased traffic and feature expansion effortlessly.
                  </p>
                </div>
              </div>

              {/* Reason 4 */}
              <div className="flex items-start gap-4 group cursor-default">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-colors">
                  <FiTrendingUp size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-1">ROI Focused</h4>
                  <p className="text-slate-600 leading-relaxed">
                    We don't just build features; we analyze how they impact your bottom line and optimize for conversion.
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;