import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FaShieldAlt } from 'react-icons/fa';

const LoadingScreen = ({ onComplete }) => {
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const textRef = useRef(null);
  const dotsRef = useRef([]);

  useEffect(() => {
    // Filter out any null refs from the array
    const activeDots = dotsRef.current.filter(dot => dot !== null);

    // 1. Setup initial states
    gsap.set(logoRef.current, { scale: 0, opacity: 0 });
    gsap.set(textRef.current, { opacity: 0, y: 20 });
    // Center the dots initially (x:0, y:0 is now the center because of the CSS classes added below)
    gsap.set(activeDots, { x: 0, y: 0, scale: 0 });

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, { 
          opacity: 0, 
          duration: 1, 
          delay: 1.5,
          onComplete 
        });
      }
    });

    // 2. The Vortex Animation
    const vortexData = { radius: 200, rotation: 0 };

    tl.to(vortexData, {
      radius: 0,
      rotation: 720,
      duration: 2.5,
      ease: "power2.inOut",
      onUpdate: () => {
        activeDots.forEach((dot, i) => {
          const angle = (i * (360 / activeDots.length)) + vortexData.rotation;
          // Standard Polar to Cartesian conversion
          const x = Math.cos(angle * (Math.PI / 180)) * vortexData.radius;
          const y = Math.sin(angle * (Math.PI / 180)) * vortexData.radius;
          gsap.set(dot, { x, y });
        });
      }
    });

    // 3. Scale dots in and out
    tl.to(activeDots, {
      scale: 2,
      opacity: 1,
      duration: 1.2,
      stagger: 0.05,
      ease: "power1.out"
    }, 0);

    // 4. The Merge & Logo Pop
    tl.to(activeDots, {
      opacity: 0,
      scale: 0,
      duration: 0.4,
    }, "-=0.6");

    tl.to(logoRef.current, {
      scale: 1,
      opacity: 1,
      duration: 0.8,
      ease: "back.out(1.7)"
    }, "-=0.4");

    // 5. Text Reveal
    tl.to(textRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.2");

    return () => tl.kill();
  }, [onComplete]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-zinc-950 text-white overflow-hidden"
    >
      <div className="relative flex items-center justify-center h-64 w-64">
        
        {/* Vortex Dots */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            ref={(el) => (dotsRef.current[i] = el)}
            // Added centering classes: top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-white/20 overflow-hidden bg-zinc-800 shadow-xl"
          >
            <img 
              src={`https://picsum.photos/id/${i + 15}/80/80`} 
              alt=""
              className="w-full h-full object-cover grayscale"
            />
          </div>
        ))}

        {/* Central Logo */}
        <div 
          ref={logoRef}
          // Added centering classes: top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-900 flex items-center justify-center shadow-[0_0_50px_rgba(59,130,246,0.4)] border-2 border-white/30"
        >
          <FaShieldAlt className="text-6xl text-white" />
        </div>
      </div>

      {/* Brand Text */}
      <div ref={textRef} className="mt-12 text-center z-10">
        <h1 className="text-4xl font-black tracking-tighter uppercase italic">
          Veteran <span className="text-blue-500">Ventures</span>
        </h1>
        <p className="text-xs tracking-[0.6em] text-zinc-500 uppercase mt-2">
          & Services
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;