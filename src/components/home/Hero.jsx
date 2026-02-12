import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef = useRef(null);
  const leftContentRef = useRef(null);
  const rightImageRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. PIN THE MASTER CONTAINER
      const mainTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=150%", // Increased scroll distance for smoother zoom
          pin: true,
          scrub: 1, // Smooth scrub
          anticipatePin: 1,
        }
      });

      // 2. THE ZOOM (TUNNEL) EFFECT
      mainTl
        // Zoom & Fade the Left Content (The "Fly-by" effect)
        .to(leftContentRef.current, {
          scale: 1.8,
          xPercent: -20,
          opacity: 0,
          filter: "blur(10px)",
          ease: "power2.in"
        }, 0)
        // Zoom the Right Image (The "Immersive" effect)
        .to(rightImageRef.current, {
          scale: 2.5,
          opacity: 0,
          filter: "blur(5px)",
          ease: "power2.in"
        }, 0);

      // 3. ENTRANCE ANIMATION (On Page Load)
      const introTl = gsap.timeline();
      introTl.from(".reveal-text", {
        y: 80,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: "power4.out"
      })
      .fromTo(lineRef.current, 
        { scaleX: 0 }, 
        { scaleX: 1, duration: 1, ease: "expo.inOut" }, 
        "-=0.8"
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative h-screen w-full flex flex-col md:flex-row bg-white overflow-hidden"
    >
      {/* --- LEFT SIDE: THE CONTENT --- */}
      <div 
        ref={leftContentRef}
        className="relative z-20 w-full md:w-1/2 h-full flex flex-col justify-center px-8 md:px-20 bg-white will-change-transform"
      >
        {/* <div className="space-y-2 mb-8">
          <p className="reveal-text text-blue-600 font-bold tracking-[0.3em] text-[10px] uppercase">
            Established 2024
          </p>
          <div ref={lineRef} className="h-1 w-20 bg-blue-600 origin-left" />
        </div> */}

        <h1 className="reveal-text text-[15vw] md:text-[8vw] font-black leading-[0.9] tracking-tighter uppercase text-zinc-900">
          Veteran <br />
          <span className="text-transparent" style={{ WebkitTextStroke: '2px #18181b' }}>Venture</span>
        </h1>

        <div className="reveal-text mt-12 space-y-8">
          <h2 className="text-2xl md:text-4xl font-light text-zinc-600 leading-tight">
            Where Vision <span className="text-zinc-900 font-medium">Meets Velocity.</span>
          </h2>
          
          <p className="max-w-md text-zinc-500 text-lg border-l-2 border-zinc-100 pl-6">
            Experience driven by purpose. We transform seasoned insight into 
            impactful ventures at <span className="text-zinc-900 font-semibold">unmatched velocity.</span>
          </p>

          <div className="flex pt-4">
            <button className="flex items-center gap-4 px-8 py-5 bg-zinc-900 text-white hover:bg-blue-600 transition-all duration-300 group">
              <span className="text-xs font-bold uppercase tracking-widest">Get Started</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* --- RIGHT SIDE: THE VISUAL --- */}
      <div className="relative w-full md:w-1/2 h-1/2 md:h-full overflow-hidden bg-zinc-100">
        <img
          ref={rightImageRef}
          src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070"
          alt="AI Professional"
          className="w-full h-full object-cover grayscale-[0.2] will-change-transform"
        />
        {/* Soft edge mask to blend the image into the white left side */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent hidden md:block" />
        
        {/* Center Vignette for Tunnel Depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,_transparent_30%,_rgba(255,255,255,0.8)_100%)] opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Static Scroll Indicator */}
      {/* <div className="absolute bottom-10 left-8 md:left-20 hidden md:block z-30">
        <div className="flex flex-col items-center gap-3">
          <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-zinc-400 rotate-180 [writing-mode:vertical-lr]">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-blue-600 to-transparent" />
        </div>
      </div> */}
    </section>
  );
};

export default Hero;