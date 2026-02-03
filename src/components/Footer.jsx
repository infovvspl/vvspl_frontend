import React from 'react';
import { FiGlobe, FiZap, FiMap, FiLayers, FiTwitter, FiLinkedin, FiInstagram, FiArrowRight, FiMail } from 'react-icons/fi';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-slate-950 text-white border-t border-slate-900 overflow-hidden">
      {/* Top Gradient Line for separation from content */}
      <div className="h-[1px] w-full bg-gradient-to-r from-blue-600/0 via-blue-600 to-blue-600/0"></div>

      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Column 1: Brand & About */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-10 w-10 bg-white rounded-xl flex items-center justify-center text-slate-900 font-black text-xl">
                V
              </div>
              <span className="text-2xl font-bold tracking-tight">VVSPL</span>
            </div>
            
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              A dynamic conglomerate driving innovation in Software Development and sustainable growth across diverse industrial sectors.
            </p>

            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all">
                <FiTwitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all">
                <FiLinkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all">
                <FiInstagram size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Company</h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Why Choose Us', path: '/why-us' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.path}
                    className="text-slate-400 hover:text-white text-sm font-medium transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 overflow-hidden group-hover:w-4 transition-all">
                      <FiArrowRight size={12} />
                    </span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Future Ventures */}
          <div>
            <h4 className="text-lg font-bold mb-6">Ventures</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-slate-400 hover:text-blue-400 text-sm font-medium transition-colors flex items-center gap-3 group">
                  <div className="p-1.5 rounded bg-slate-900 group-hover:bg-blue-600/20 transition-colors">
                    <FiGlobe size={14} className="text-blue-400" />
                  </div>
                  Trade & Import/Export
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-yellow-400 text-sm font-medium transition-colors flex items-center gap-3 group">
                  <div className="p-1.5 rounded bg-slate-900 group-hover:bg-yellow-600/20 transition-colors">
                    <FiZap size={14} className="text-yellow-400" />
                  </div>
                  Power & Energy
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-emerald-400 text-sm font-medium transition-colors flex items-center gap-3 group">
                  <div className="p-1.5 rounded bg-slate-900 group-hover:bg-emerald-600/20 transition-colors">
                    <FiMap size={14} className="text-emerald-400" />
                  </div>
                  Land & Development
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-orange-400 text-sm font-medium transition-colors flex items-center gap-3 group">
                  <div className="p-1.5 rounded bg-slate-900 group-hover:bg-orange-600/20 transition-colors">
                    <FiLayers size={14} className="text-orange-400" />
                  </div>
                  Mining & Minerals
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6">Stay Updated</h4>
            <p className="text-slate-400 text-sm mb-6">
              Subscribe to our newsletter for the latest tech trends and industry updates.
            </p>
            
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <FiMail size={18} className="text-slate-500 group-focus-within:text-blue-500 transition-colors" />
                </div>
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full pl-10 pr-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-600 transition-all"
                />
              </div>
              <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl text-sm hover:shadow-lg hover:shadow-blue-900/50 transition-all flex items-center justify-center gap-2 group">
                Subscribe
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-900 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs font-medium">
            © {year} VVSPL. All rights reserved. Built with Code & Precision.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-500 hover:text-slate-300 text-xs font-medium transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-slate-300 text-xs font-medium transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;