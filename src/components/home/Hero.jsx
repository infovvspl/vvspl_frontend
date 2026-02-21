import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import VidMp4 from "../../assets/vido.mp4";
import VidWebm from "../../assets/vido.webp";
import Hr from "../../assets/qwe.gif";

gsap.registerPlugin(ScrollTrigger);

const Hero = ({ innerRef }) => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const videoRef = useRef(null);
  const rotatingImgRef = useRef(null);
  const borderBtnRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      mm.add({
        isMobile: "(max-width: 768px)",
        isDesktop: "(min-width: 769px)"
      }, (context) => {
        let { isMobile } = context.conditions;

        // Border Rotation
        if (borderBtnRef.current) {
          gsap.to(borderBtnRef.current, {
            "--border-angle": "360deg",
            duration: 3,
            repeat: -1,
            ease: "none",
          });
        }

        // Floating Animation for the asset
        if (rotatingImgRef.current) {
          gsap.to(rotatingImgRef.current, {
            y: isMobile ? 10 : 20, // Reduced movement for mobile
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
          });
        }

        const mainTl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
            invalidateOnRefresh: true,
          }
        });

        mainTl
          .to(contentRef.current, {
            y: -100,
            opacity: 0,
            scale: isMobile ? 0.98 : 1.05,
            filter: "blur(10px)",
            ease: "power2.in"
          }, 0)
          .to(videoRef.current, {
            scale: 1.1,
            ease: "none"
          }, 0);

        gsap.from(".reveal-text", {
          y: 20,
          opacity: 0,
          duration: 1.2,
          stagger: 0.1,
          ease: "power3.out"
        });
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
      className="relative min-h-screen w-full bg-black overflow-hidden flex items-center py-22 md:py-16"
    >
      {/* --- BACKGROUND VIDEO LAYER --- */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-100 grayscale-[0.4] will-change-transform"
        >
          <source src={VidWebm} type="image/webp" />
          <source src={VidMp4} type="video/mp4" />
        </video>
        {/* Adjusted Gradient for Mobile Stacking */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90 md:bg-gradient-to-r md:from-black/90 md:via-black/40 md:to-transparent" />
      </div>

      {/* --- CONTENT LAYER --- */}
      <div ref={contentRef} className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-12 md:px-24">
        
        {/* The Grid: 1 col on mobile, 2 on LG. Gap increased for stacking. */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* LEFT COLUMN: Text (First on mobile) */}
          <div className="text-center lg:text-left order-1">
            <h1 className="reveal-text text-[14vw] sm:text-6xl md:text-[7vw] font-black leading-[0.9] tracking-tighter uppercase text-white italic">
              Veteran <br />
              <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.88)' }}>
                Ventures
              </span>
            </h1>

            <div className="reveal-text mt-6 space-y-6">
              <h2 className="text-lg sm:text-2xl md:text-3xl font-light text-zinc-300">
                Vision <span className="text-white font-medium">Meets Velocity.</span>
                <div className="w-16 md:w-20 h-[3px] mt-2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto md:mx-0" />
              </h2>
              <p className="max-w-3xl mx-auto lg:mx-0 text-zinc-200 text-sm md:text-base leading-relaxed opacity-80">
                Innovation is not just about writing code — it’s about engineering impact. We are a software company built on systems thinking, architectural precision, and disciplined execution. We don’t chase trends or build disposable products. We design, develop, and scale resilient digital ecosystems powered by AI and machine learning, strengthened by robust cybersecurity, and engineered to solve complex problems while creating measurable value.
              </p>

              <div className="flex flex-col sm:flex-row items-center lg:items-start gap-6 pt-4">
                {/* Contact Button */}
                <Link
                  to="/contact"
                  className="group relative w-full sm:w-auto px-8 py-4 rounded-md font-semibold uppercase tracking-wider text-xs text-white overflow-hidden transition-all duration-300 hover:-translate-y-1"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-cyan-500"></span>
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Get Started <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>

                {/* GSAP Border Button */}
                <Link
                  to="/services"
                  className="group relative w-full sm:w-auto p-[1px] overflow-hidden rounded-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
                >
                  <div 
                    ref={borderBtnRef}
                    className="absolute inset-[-1000%] [background:conic-gradient(from_var(--border-angle),transparent_70%,#818cf8_80%,#22d3ee_100%)]"
                  />
                  <div className="relative z-10 flex items-center justify-center gap-2 px-8 py-4 bg-slate-950/90 backdrop-blur-md rounded-[5px] text-white font-semibold uppercase tracking-wider text-xs transition-colors group-hover:bg-slate-900">
                    Our Services
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Image (Second on mobile) */}
          <div className="flex justify-center items-center perspective-1000 order-2">
            <div ref={rotatingImgRef} className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96">
              <img src={Hr} alt="Tech Asset" className="w-full h-full object-contain" />
              <div className="absolute inset-0 bg-blue-500/20 blur-[80px] rounded-full -z-10" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;