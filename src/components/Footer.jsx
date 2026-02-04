import React from 'react';
import { motion } from 'framer-motion';
import { FiGlobe, FiZap, FiMap, FiLayers, FiTwitter, FiLinkedin, FiInstagram, FiArrowRight, FiMail, FiTerminal } from 'react-icons/fi';
import Logo from "../assets/logo2.png"; // Importing the same logo for consistency

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-[#030712] text-white overflow-hidden">
      {/* Signature Grid Pattern (Dark Mode) */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      {/* Top Accent Line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-blue-600 to-transparent relative z-10"></div>

      <div className="container mx-auto px-6 pt-20 pb-10 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
          
          {/* Column 1: Brand Intelligence */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 bg-white rounded-xl p-2">
                <img src={Logo} alt="VVSPL" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="text-2xl font-black tracking-tighter block leading-none">VVSPL</span>
                <span className="text-[10px] font-bold text-blue-500 uppercase tracking-[0.3em]">Conglomerate</span>
              </div>
            </div>
            
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Architecting the digital and industrial future through software precision and sustainable resource management.
            </p>

            <div className="flex gap-3">
              {[FiTwitter, FiLinkedin, FiInstagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all group">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation Protocol */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-500 mb-8">System Links</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Services', 'Why Choose Us', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-white text-sm font-bold transition-all flex items-center gap-2 group">
                    <span className="h-[1px] w-0 bg-blue-600 group-hover:w-4 transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Venture Portfolio */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-500 mb-8">Venture Modules</h4>
            <ul className="space-y-5">
              {[
                { name: 'Trade & Logistics', icon: <FiGlobe />, color: 'group-hover:text-blue-400' },
                { name: 'Power & Energy', icon: <FiZap />, color: 'group-hover:text-yellow-400' },
                { name: 'Land & Development', icon: <FiMap />, color: 'group-hover:text-emerald-400' },
                { name: 'Mining & Minerals', icon: <FiLayers />, color: 'group-hover:text-orange-400' },
              ].map((venture) => (
                <li key={venture.name}>
                  <a href="#" className={`text-slate-400 text-sm font-bold flex items-center gap-3 group transition-colors ${venture.color}`}>
                    <span className="text-slate-700 group-hover:text-inherit transition-colors">{venture.icon}</span>
                    {venture.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter Secure Feed */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-500 mb-8">Newsletter Feed</h4>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Receive encrypted updates on our latest tech deployments.
            </p>
            
            <form className="relative group" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="root@vvspl.com" 
                className="w-full pl-4 pr-12 py-4 bg-slate-900/50 border border-slate-800 rounded-2xl text-xs font-mono text-white placeholder:text-slate-700 focus:outline-none focus:border-blue-600 transition-all"
              />
              <button className="absolute right-2 top-2 bottom-2 px-4 bg-blue-600 text-white rounded-xl hover:bg-blue-500 transition-all">
                <FiArrowRight size={18} />
              </button>
            </form>
            <div className="mt-4 flex items-center gap-2 text-[10px] font-bold text-slate-600 uppercase">
              <FiTerminal size={12} />
              Status: Ready for input
            </div>
          </div>
        </div>

        {/* System Metadata Bar */}
        <div className="pt-8 border-t border-slate-900/50 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="text-slate-600 text-[10px] font-bold uppercase tracking-widest">
              © {year} VVSPL PROTOCOL
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-slate-600 hover:text-blue-500 text-[10px] font-bold uppercase tracking-widest transition-colors">Privacy_Policy</a>
              <a href="#" className="text-slate-600 hover:text-blue-500 text-[10px] font-bold uppercase tracking-widest transition-colors">Terms_of_Service</a>
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-[10px] font-bold text-slate-700 uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            All Systems Operational
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;