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
    let ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      mm.add({
        isMobile: "(max-width: 768px)",
        isDesktop: "(min-width: 769px)"
      }, (context) => {
        let { isMobile } = context.conditions;

        const mainTl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=120%",
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          }
        });

        mainTl
          .to(contentRef.current, {
            // Subtle movement for mobile to prevent content from vanishing too fast
            xPercent: isMobile ? -5 : -30,
            opacity: 0,
            scale: isMobile ? 1 : 1.1,
            filter: isMobile ? "blur(4px)" : "blur(10px)",
            ease: "power2.in"
          }, 0)
          .to(videoRef.current, {
            scale: 1.1,
            ease: "none"
          }, 0);

        gsap.from(".reveal-text", {
          x: -30,
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
      className="relative min-h-screen w-full bg-black overflow-hidden flex items-center justify-start"
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
        {/* Adjusted Gradient: More opaque on mobile for readability */}
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
      </div>

      {/* --- CONTENT LAYER --- */}
      <div
        ref={contentRef}
        className="relative z-10 min-h-screen flex items-center justify-center md:justify-start w-full px-6 sm:px-12 md:px-24"
      >
        <div className="w-full max-w-5xl text-center md:text-left pt-10 md:pt-0">

          {/* Heading */}
          <h1 className="reveal-text text-[14vw] sm:text-6xl md:text-[8vw] font-black leading-[0.9] tracking-tight uppercase text-white">
            Veteran <br />
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: '1px white' }}
            >
              Ventures
            </span>
          </h1>

          {/* Sub Content */}
          <div className="reveal-text mt-6 md:mt-10 space-y-6 md:space-y-8">

            <h2 className="text-lg sm:text-2xl md:text-4xl font-light text-zinc-300 leading-snug">
              Vision <span className="text-white font-medium">Meets Velocity.</span>
            </h2>

            <p className="max-w-3xl mx-auto md:mx-0 text-zinc-200 text-sm sm:text-base md:text-lg leading-relaxed">
              Innovation is not just about writing code — it’s about engineering impact. We are a software company built on systems thinking, architectural precision, and disciplined execution. We don’t chase trends or build disposable products. We design, develop, and scale resilient digital ecosystems powered by AI and machine learning, strengthened by robust cybersecurity, and engineered to solve complex problems while creating measurable value.
            </p>

            {/* Improved Buttons */}
            <div className="flex flex-col sm:flex-row items-center md:items-start gap-4 pt-4">

              <Link
                to="/contact"
                className="group relative w-full sm:w-auto px-8 py-4 bg-white text-black font-semibold uppercase tracking-wider text-xs rounded-md overflow-hidden transition-all duration-300 hover:bg-blue-600 hover:text-white"
              >
                <span className="flex items-center justify-center gap-2">
                  Get Started
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </Link>

              <Link
                to="/services"
                className="group w-full sm:w-auto px-8 py-4 border border-white/30 text-white font-semibold uppercase tracking-wider text-xs rounded-md backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black hover:border-white"
              >
                <span className="flex items-center justify-center gap-2">
                  Our Services
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </Link>

            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;