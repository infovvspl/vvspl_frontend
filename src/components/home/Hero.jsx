import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Vid from "../../assets/vido.mp4"

gsap.registerPlugin(ScrollTrigger);

const Hero = ({ innerRef }) => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. PIN THE MASTER CONTAINER
      const mainTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=120%", 
          pin: true,
          scrub: 1,
        }
      });

      // 2. THE ZOOM EFFECT (Content flies left and out, Video scales slightly)
      mainTl
        .to(contentRef.current, {
          xPercent: -30, // Moves it further left as you scroll
          opacity: 0,
          scale: 1.1,
          filter: "blur(10px)",
          ease: "power2.in"
        }, 0)
        .to(videoRef.current, {
          scale: 1.1,
          ease: "none"
        }, 0);

      // 3. ENTRANCE ANIMATION
      gsap.from(".reveal-text", {
        x: -50,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: "power3.out"
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={(el) => {
        sectionRef.current = el;
        if (innerRef) innerRef.current = el;
      }}
      className="relative h-screen w-full bg-black overflow-hidden flex items-center justify-start"
    >
      {/* --- BACKGROUND VIDEO LAYER --- */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          src={Vid}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-100 grayscale-[0.4] will-change-transform"
        />
        {/* Left-side dark gradient to ensure text pop */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
      </div>

      {/* --- OVERLAPPING CONTENT LAYER (Proper Left Aligned) --- */}
      <div
        ref={contentRef}
        className="relative z-10 w-full max-w-[90%] md:max-w-4xl px-8 md:px-24 will-change-transform"
      >
        <h1 className="reveal-text text-[15vw] md:text-[9vw] font-black leading-[0.8] tracking-tighter uppercase text-white">
          Veteran <br />
          <span className="text-transparent" style={{ WebkitTextStroke: '1.5px white' }}>
            Ventures
          </span>
        </h1>

        <div className="reveal-text mt-8 md:mt-10 space-y-6 md:space-y-8">
          <h2 className="text-2xl md:text-5xl font-light text-zinc-300 leading-tight">
            Vision <span className="text-white font-medium">Meets Velocity.</span>
          </h2>

          <p className="max-w-5xl text-white text-base md:text-lg border-l-2 border-white/20 pl-6">
           Innovation is not just about writing code — it’s about engineering impact. We are a software company built on systems thinking, architectural precision, and disciplined execution. We don’t chase trends or build disposable products. We design, develop, and scale resilient digital ecosystems powered by AI and machine learning, strengthened by robust cybersecurity, and engineered to solve complex problems while creating measurable value.
          </p>

          <div className="flex flex-wrap pt-4 gap-4">
            <Link
              to="/contact"
              className="flex items-center gap-3 px-10 py-5 bg-white text-black hover:bg-blue-600 hover:text-white transition-all duration-300 group"
            >
              <span className="text-xs font-bold uppercase tracking-widest">Get Started</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/services"
              className="flex items-center gap-3 px-10 py-5 border border-white/30 text-white backdrop-blur-md hover:bg-white hover:text-black transition-all duration-300 group"
            >
              <span className="text-xs font-bold uppercase tracking-widest">Our Services</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;