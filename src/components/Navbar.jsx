import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiArrowRight } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // 1. Handle Scroll Effect for Header Background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. LOCK BODY SCROLL when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 z-50 group">
              <div className="h-10 w-10 bg-slate-900 rounded-xl flex items-center justify-center text-white font-black text-xl group-hover:bg-blue-600 transition-colors">
                V
              </div>
              <span className="text-2xl font-black text-slate-900 tracking-tight">
                VVSPL
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-bold transition-colors duration-200 relative ${
                    location.pathname === link.path ? 'text-blue-600' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"></span>
                  )}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Link
                to="/contact"
                className="px-6 py-2.5 bg-slate-900 text-white rounded-full text-sm font-bold hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-200 transition-all flex items-center gap-2 group"
              >
                Let's Talk
                <FiArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden z-50 p-2 rounded-lg transition-colors duration-300 ${
                isOpen ? 'bg-slate-100 text-slate-900' : 'bg-transparent text-slate-900'
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>

          </div>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      {/* Z-index 40 ensures it sits below the header (z-50) so the header stays visible on top, 
          or you can set z-50 and it covers the header completely. 
          Here we set z-40 to create a "drawer" effect that doesn't cover the header logo. */}
      <div
        className={`fixed inset-0 bg-white/95 backdrop-blur-xl z-40 md:hidden transform transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-8 overflow-hidden ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-[100%] opacity-0'
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            onClick={() => setIsOpen(false)}
            className={`text-3xl font-bold transition-colors ${
              location.pathname === link.path ? 'text-blue-600' : 'text-slate-800'
            }`}
          >
            {link.name}
          </Link>
        ))}
        
        <Link
          to="/contact"
          onClick={() => setIsOpen(false)}
          className="w-3/4 py-4 bg-slate-900 text-white rounded-2xl text-center font-bold shadow-lg shadow-slate-200/50 hover:bg-blue-600 transition-colors"
        >
          Start Project
        </Link>
      </div>
    </>
  );
};

export default Navbar;