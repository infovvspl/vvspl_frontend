import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// Register the plugin
gsap.registerPlugin(ScrollToPlugin);

const ScrollBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    gsap.to(window, {
      duration: 1.5,
      scrollTo: 0,
      ease: "power4.inOut"
    });
  };

  return (
    <div 
      className={`fixed bottom-10 right-10 z-[9999] transition-all duration-500 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
    >
      <button
        onClick={scrollToTop}
        className="group relative flex items-center justify-center w-14 h-14 bg-zinc-900 border border-white/10 rounded-full overflow-hidden hover:border-blue-500/50 transition-colors shadow-2xl"
      >
        {/* Hover Glow Effect */}
        <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors duration-500" />
        
        {/* The Arrow Icon */}
        <svg 
          className="w-6 h-6 text-white transition-transform duration-500 group-hover:-translate-y-1"
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>

        {/* HUD Ring Decoration */}
        <div className="absolute inset-1 border border-blue-500/0 rounded-full group-hover:border-blue-500/20 group-hover:scale-110 transition-all duration-700" />
      </button>

      {/* Side Label (Matches your Mono font style) */}
      <span className="absolute -left-16 top-1/2 -translate-y-1/2 text-[9px] font-mono text-blue-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Top_
      </span>
    </div>
  );
};

export default ScrollBtn;