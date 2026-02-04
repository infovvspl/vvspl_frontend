import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiArrowRight, FiTerminal } from 'react-icons/fi';
import Logo from "../assets/logo2.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* HEADER - Transparent to Glassmorphic */}
      <header
        className={`fixed w-full top-0 z-[100] transition-all duration-500 ${
          scrolled 
            ? 'bg-white/80 backdrop-blur-xl border-b border-slate-200 py-3' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">

            {/* Logo Section */}
            <Link to="/" className="flex items-center gap-3 z-50 group">
              <div className="h-12 w-12 rounded-xl bg-white shadow-sm flex items-center justify-center p-1 border border-slate-100 group-hover:border-blue-500 transition-colors">
                <img
                  src={Logo}
                  alt="VVSPL Logo"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-slate-900 tracking-tighter leading-none">
                  VVSPL
                </span>
                <span className="text-[8px] font-bold text-blue-600 uppercase tracking-[0.2em] mt-1">
                  Technology Hub
                </span>
              </div>
            </Link>

            {/* Desktop Navigation - Documentation Style */}
            <nav className="hidden md:flex items-center bg-slate-100/50 backdrop-blur-sm p-1 rounded-full border border-slate-200/50">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-6 py-2 text-[11px] font-black uppercase tracking-widest transition-all rounded-full ${
                    location.pathname === link.path 
                      ? 'bg-white text-blue-600 shadow-sm' 
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Link
                to="/contact"
                className="px-6 py-3 bg-slate-900 text-white rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-blue-600 hover:shadow-xl hover:shadow-blue-500/20 transition-all flex items-center gap-3 group"
              >
                Let's Talk
                <FiArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden z-50 w-10 h-10 flex items-center justify-center bg-slate-900 text-white rounded-xl"
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>

          </div>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY - Sync with Landing Page Design */}
      <div
        className={`fixed inset-0 z-[90] bg-white md:hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Signature Grid Pattern */}
        <div className="absolute inset-0 opacity-40 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:30px_30px]"></div>
        
        {/* Background Blobs */}
        <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-blue-100 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-64 h-64 bg-purple-100 rounded-full blur-[80px]"></div>

        <div className="relative h-full flex flex-col items-center justify-center px-6 gap-6">
          <FiTerminal className="text-blue-600 mb-4" size={40} />
          
          {navLinks.map((link, idx) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-4xl font-black tracking-tighter transition-all ${
                location.pathname === link.path ? 'text-blue-600' : 'text-slate-900'
              }`}
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              {link.name}.
            </Link>
          ))}

          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-8 w-full max-w-[280px] py-5 bg-slate-900 text-white rounded-2xl text-center font-black uppercase tracking-widest shadow-xl shadow-blue-500/10"
          >
            Start Project
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;