import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const Load = () => {
  const [isLoading, setIsLoading] = useState(true);
  const trainRef = useRef(null);
  const loaderContainer = useRef(null);
  const mainContent = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // 1. Entrance & Engine vibration
    tl.fromTo(trainRef.current, 
      { x: '-120vw', scale: 0.8 }, 
      { x: '0', scale: 1, duration: 1.5, ease: "expo.out" }
    );

    // Continuous vibration "engine hum"
    gsap.to(trainRef.current, {
      y: "+=1.5",
      repeat: -1,
      yoyo: true,
      duration: 0.08
    });

    // 2. Simulate Loading time (3 seconds)
    const timer = setTimeout(() => {
      // 3. Departure Animation
      const exitTl = gsap.timeline({
        onComplete: () => setIsLoading(false)
      });

      exitTl.to(trainRef.current, {
        x: '150vw',
        scale: 1.1,
        skewX: 10,
        filter: 'blur(20px)',
        duration: 0.8,
        ease: "power4.in"
      })
      .to(loaderContainer.current, {
        opacity: 0,
        duration: 0.5
      }, "-=0.3");

    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  // Reveal Main Page
  useEffect(() => {
    if (!isLoading) {
      gsap.fromTo(mainContent.current, 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 1 }
      );
    }
  }, [isLoading]);

  return (
    <div className="bg-black min-h-screen text-white font-sans overflow-hidden">
      {isLoading ? (
        <div ref={loaderContainer} className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505]">
          
          {/* Motion Blur Tracks */}
          <div className="absolute w-full h-[2px] bg-orange-900/30 top-1/2 mt-12 shadow-[0_0_15px_orange]" />
          
          {/* The Train Engine Body */}
          <div ref={trainRef} className="relative flex items-end">
            {/* The Engine Head */}
            <div className="relative w-80 h-28 md:w-[450px] md:h-36 bg-gradient-to-b from-neutral-800 via-neutral-900 to-black 
              rounded-tr-[100px] rounded-br-[20px] rounded-bl-[10px] border-r-4 border-orange-500 shadow-[20px_0_40px_-10px_rgba(234,88,12,0.5)]">
              
              {/* Windshield */}
              <div className="absolute top-4 right-8 w-1/3 h-1/2 bg-cyan-500/10 border-t border-r border-cyan-400/40 rounded-tr-[60px] skew-x-12 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent animate-[pulse_2s_infinite]" />
              </div>

              {/* VVSPL Logo Area */}
              <div className="absolute inset-0 flex items-center justify-center pr-12">
                <h1 className="text-orange-500 text-6xl font-black italic tracking-tighter drop-shadow-[0_0_10px_rgba(249,115,22,0.8)]">
                  VVSPL
                </h1>
              </div>

              {/* Engine Lights */}
              <div className="absolute bottom-6 right-4 flex gap-2">
                <div className="w-4 h-2 bg-orange-600 rounded-full shadow-[0_0_15px_orange]" />
                <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
              </div>
            </div>

            {/* Trailing Part (blurred) */}
            <div className="w-20 h-24 bg-neutral-900/50 blur-sm rounded-l-lg -ml-2" />
          </div>

          {/* Progress Indicator */}
          <div className="mt-20 flex flex-col items-center">
            <span className="text-orange-500/50 text-xs tracking-[0.3em] uppercase mb-2 animate-pulse">Initializing Hyperlink</span>
            <div className="w-48 h-[1px] bg-neutral-800">
              <div className="h-full bg-orange-500 shadow-[0_0_10px_orange] animate-[load_3s_linear_infinite]" />
            </div>
          </div>
        </div>
      ) : (
        <main ref={mainContent} className="flex flex-col items-center justify-center h-screen p-8 text-center">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent mb-4">
            Welcome to VVSPL
          </h2>
          <p className="text-neutral-400 max-w-md">
            Your destination has been reached. Experience the future of high-speed connectivity and seamless design.
          </p>
          <button className="mt-8 px-8 py-3 border border-orange-500/50 hover:bg-orange-500/10 transition-colors rounded-full text-orange-500">
            Enter Dashboard
          </button>
        </main>
      )}

      <style jsx>{`
        @keyframes load {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default Load;