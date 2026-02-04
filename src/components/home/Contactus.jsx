import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiMail, FiPhone, FiTwitter, FiLinkedin, FiArrowRight, FiTerminal, FiDatabase, FiUsers } from 'react-icons/fi';

const ContactV2 = () => {
  const [formState, setFormState] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => {
      setFormState('success');
    }, 2000);
  };

  return (
    <section className="relative w-full overflow-hidden py-24 bg-white">
      {/* Signature Hero Grid Background */}
      <div className="absolute inset-0 z-0 opacity-60">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>
      
      {/* Ambient Lighting (Matches Hero Blobs) */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-100/30 rounded-full blur-[120px] -z-10"></div>

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
            <span className="text-blue-600 text-xs font-bold tracking-[0.3em] uppercase">Initialize Connection</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            Let’s build the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              next big thing.
            </span>
          </h2>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          
          {/* Left Side: Dark Info Module */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900 text-white rounded-[2.5rem] p-10 md:p-14 shadow-2xl relative overflow-hidden flex flex-col justify-between"
          >
            {/* Terminal Top Bar decoration */}
            <div className="flex gap-2 mb-12">
              <div className="w-2 h-2 rounded-full bg-slate-700"></div>
              <div className="w-2 h-2 rounded-full bg-slate-700"></div>
              <div className="w-2 h-2 rounded-full bg-slate-700"></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6">Contact Channels</h3>
              <p className="text-slate-400 mb-12 max-w-sm leading-relaxed">
                Our engineering and trade teams operate across multiple timezones. Drop a line for an immediate protocol response.
              </p>

              <div className="space-y-6">
                {[
                  { icon: <FiMail />, label: "Protocol", val: "hello@vvspl.com", color: "text-blue-400" },
                  { icon: <FiPhone />, label: "Hotline", val: "+1 (555) 123-4567", color: "text-purple-400" },
                  { icon: <FiMapPin />, label: "Base", val: "123 Tech Park, NY", color: "text-slate-400" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-5 group cursor-pointer">
                    <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center group-hover:bg-blue-600 transition-all duration-300">
                      {React.cloneElement(item.icon, { size: 20 })}
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{item.label}</p>
                      <p className="text-lg font-bold group-hover:text-blue-400 transition-colors">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-16 flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all">
                <FiTwitter />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all">
                <FiLinkedin />
              </a>
            </div>

            {/* Subtle Gradient Glow */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px]"></div>
          </motion.div>

          {/* Right Side: Glassmorphic Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-10 md:p-14 border border-slate-200 shadow-xl"
          >
            {formState === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <div className="w-20 h-20 rounded-full bg-blue-600 text-white flex items-center justify-center mb-6 shadow-xl shadow-blue-200">
                  <FiSend size={32} />
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-2">Transmission Sent.</h3>
                <p className="text-slate-500">Our team will initialize contact within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Identity</label>
                    <input type="text" required placeholder="Name" className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 transition-all outline-none text-slate-900 font-bold" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Secure Email</label>
                    <input type="email" required placeholder="email@domain.com" className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 transition-all outline-none text-slate-900 font-bold" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Briefing</label>
                  <textarea rows="4" required placeholder="Tell us about your project..." className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 transition-all outline-none text-slate-900 font-bold resize-none"></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={formState === 'submitting'}
                  className="w-full py-5 bg-slate-900 text-white rounded-2xl font-black text-sm uppercase tracking-[0.2em] hover:bg-blue-600 hover:shadow-2xl hover:shadow-blue-500/40 transition-all disabled:opacity-70 flex items-center justify-center gap-3"
                >
                  {formState === 'submitting' ? 'Processing...' : (
                    <>Establish Connection <FiArrowRight /></>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Brand Philosophy Footer */}
        <div className="mt-24 pt-12 border-t border-slate-100 grid md:grid-cols-3 gap-8">
            <div className="flex items-center gap-3 text-slate-400">
                <FiUsers className="text-blue-600" />
                <span className="text-[10px] font-bold uppercase tracking-widest">People First</span>
            </div>
            <div className="flex items-center gap-3 text-slate-400">
                <FiDatabase className="text-blue-600" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Process Driven</span>
            </div>
            <div className="flex items-center gap-3 text-slate-400">
                <FiTerminal className="text-blue-600" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Technology Focused</span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ContactV2;

//people process and technology