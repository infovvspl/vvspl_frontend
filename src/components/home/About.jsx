import React from 'react';
import { motion } from 'framer-motion';
import { FiCpu, FiShield, FiZap, FiCheckCircle, FiArrowRight } from 'react-icons/fi';

const About = () => {
  // Animation configuration for staggered children
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="relative w-full bg-slate-50 overflow-hidden py-24">
      {/* Background: Subtle Dot Grid Pattern (Consistent with Hero) */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>
      
      {/* Ambient Glow for Depth */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-orange-100/50 rounded-full blur-[100px] -z-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-orange-50 text-orange-600 text-xs font-bold tracking-wider uppercase mb-4 border border-orange-100">
            About us
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
            Building Digital Products with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
              Precision & Passion
            </span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            VVSPL isn't just a software agency; we are your technical partners. We bridge the gap between complex business requirements and elegant, scalable digital solutions.
          </p>
        </motion.div>

        {/* Features Grid: Our Core Values */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8 mb-24"
        >
          {/* Card 1 */}
          <motion.div 
            variants={itemVariants}
            className="group bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:-translate-y-2"
          >
            <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
              <FiZap size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Agile Development</h3>
            <p className="text-slate-500 leading-relaxed text-sm">
              We adapt quickly to change. Our iterative process ensures your product evolves rapidly with your market needs.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            variants={itemVariants}
            className="group bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:-translate-y-2"
          >
            <div className="w-16 h-16 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
              <FiCpu size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Future-Ready Tech</h3>
            <p className="text-slate-500 leading-relaxed text-sm">
              We build on modern stacks (React, Node, Python) ensuring your software is scalable, secure, and performant.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            variants={itemVariants}
            className="group bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:-translate-y-2"
          >
            <div className="w-16 h-16 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center mb-6 group-hover:bg-pink-600 group-hover:text-white transition-colors duration-300">
              <FiShield size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Enterprise Security</h3>
            <p className="text-slate-500 leading-relaxed text-sm">
              Data protection is paramount. We implement industry-standard security protocols to keep your digital assets safe.
            </p>
          </motion.div>
        </motion.div>

        {/* Split Section: Our Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Image / Visual */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Abstract Shape behind image */}
            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-slate-200 rounded-[2.5rem] -z-10"></div>
            
            <img 
              src="https://img.freepik.com/free-vector/programming-coding-development-isometric-flowchart-with-daily-meeting-coding-advertising-template-dev-ops-different-steps_1284-60024.jpg?t=st=1770102719~exp=1770106319~hmac=658d211005a80b55ccc74b51c09651d2185afca778775d2e7050e63d0bd36db1&w=1480" 
              alt="Team working together" 
              className="w-full h-auto rounded-[2.5rem] shadow-2xl object-cover"
            />
            
            {/* Floating Stat Card */}
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl max-w-[200px] border border-slate-100 hidden md:block">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-green-100 rounded-lg text-green-600">
                  <FiCheckCircle size={20} />
                </div>
                <span className="font-bold text-slate-900">Success Rate</span>
              </div>
              <p className="text-3xl font-black text-slate-900">98%</p>
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
              Our Mission is to <br /> Simplify Complexity.
            </h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              At VVSPL, we believe that great software should feel invisible—it should work so seamlessly that the user only notices the results, not the technology behind them. 
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Founded with a vision to democratize enterprise-grade technology, we have helped startups and Fortune 500 companies alike launch products that define their categories.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "End-to-end product lifecycle management",
                "Dedicated support & maintenance teams",
                "Transparent development processes"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-slate-700 font-medium">
                  <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-sm">
                    <FiArrowRight size={14} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <button className="px-8 py-3.5 bg-slate-900 text-white rounded-2xl font-bold hover:shadow-lg hover:shadow-blue-200 transition-all flex items-center gap-2">
              Meet The Team
              <FiArrowRight size={18} />
            </button>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;