import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { FaChevronUp } from "react-icons/fa";

gsap.registerPlugin(ScrollToPlugin);

const ScrollBtn = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ringRef = useRef(null);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 500);
    };

    window.addEventListener('scroll', toggleVisibility);

    // Rotating border animation
    gsap.to(ringRef.current, {
      rotate: 360,
      duration: 4,
      ease: "none",
      repeat: -1
    });

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
        className="group relative flex items-center justify-center w-14 h-14 bg-zinc-900 rounded-full overflow-hidden shadow-2xl"
      >
        {/* Rotating Gradient Border */}
        <div
          ref={ringRef}
          className="absolute inset-0 rounded-full border-2 border-transparent 
                     bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500
                     [mask:linear-gradient(#000_0_0)_padding-box,linear-gradient(#000_0_0)]
                     [mask-composite:exclude]"
        />

        {/* Inner Button */}
        <div className="absolute inset-[2px] bg-zinc-900 rounded-full flex items-center justify-center">
          <FaChevronUp 
            className="w-5 h-5 text-white transition-transform duration-500 group-hover:-translate-y-1"
          />
        </div>
      </button>

      <span className="absolute -left-16 top-1/2 -translate-y-1/2 text-[9px] font-mono text-blue-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Top_
      </span>
    </div>
  );
};

export default ScrollBtn;
