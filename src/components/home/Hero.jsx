import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Vid from "../../assets/vido.mp4";
import Aud from "../../assets/bgm.mp3";
import Hr from "../../assets/hero-r.png";
import VidMp4 from "../../assets/vido.mp4"
import VidWebm from "../../assets/vido.webp"

gsap.registerPlugin(ScrollTrigger);

const Hero = ({ innerRef }) => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const videoRef = useRef(null);
  const rotatingImgRef = useRef(null);

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
            end: "bottom top",
            scrub: 1,
            invalidateOnRefresh: true,
          }
        });

        mainTl
          .to(contentRef.current, {
            y: -100,
            opacity: 0,
            scale: isMobile ? 0.95 : 1.05,
            filter: "blur(10px)",
            ease: "power2.in"
          }, 0)
          .to(videoRef.current, {
            scale: 1.1,
            ease: "none"
          }, 0);

        // Only run rotation if the image exists/is visible (Desktop)
        if (rotatingImgRef.current) {
          gsap.to(rotatingImgRef.current, {
            rotationY: 360,
            duration: 8,
            repeat: -1,
            ease: "none"
          });
        }

        gsap.from(".reveal-text", {
          y: 20, // Changed x to y for a cleaner "rise up" entrance on mobile
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
      className="relative min-h-screen w-full bg-black overflow-hidden flex items-center"
    >
      {/* --- BACKGROUND VIDEO LAYER --- */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          poster="/vido.webp"
          className="w-full h-full object-cover opacity-100 grayscale-[0.4] will-change-transform"
        >
          <source src={VidWebm} type="image/webp" />
          <source src={VidMp4} type="video/mp4" />
        </video>

        <audio src={Aud} autoPlay loop className="hidden" />
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-black/90 via-black/40 to-transparent" />
      </div>

      {/* --- CONTENT LAYER --- */}
      <div
        ref={contentRef}
        className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-12 md:px-24 py-12 md:py-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT COLUMN: Text Content (Full width on mobile) */}
          <div className="text-center lg:text-left">
            <h1 className="reveal-text text-[14vw] sm:text-6xl md:text-[7vw] font-black leading-[0.9] tracking-tighter uppercase text-white italic">
              Veteran <br />
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.7)' }}
              >
                Ventures
              </span>
            </h1>

            <div className="reveal-text mt-6 space-y-6">
              <h2 className="text-lg sm:text-2xl md:text-3xl font-light text-zinc-300">
                Vision <span className="text-white font-medium">Meets Velocity.</span>
                <div className="w-16 md:w-20 h-[3px] rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500" />
              </h2>
              <p className="max-w-xl mx-auto lg:mx-0 text-zinc-200 text-sm md:text-base leading-relaxed opacity-80">
                Innovation is not just about writing code — it’s about engineering impact. We are a software company built on systems thinking, architectural precision, and disciplined execution. We don’t chase trends or build disposable products. We design, develop, and scale resilient digital ecosystems powered by AI and machine learning, strengthened by robust cybersecurity, and engineered to solve complex problems while creating measurable value.
              </p>

              <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 pt-4">

                {/* Primary Gradient Button */}
                <Link
                  to="/contact"
                  className="group relative w-full sm:w-auto px-8 py-4 rounded-md font-semibold uppercase tracking-wider text-xs text-white overflow-hidden transition-all duration-300 hover:-translate-y-1"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-md"></span>

                  {/* Glow Effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-cyan-500 blur-xl opacity-0 group-hover:opacity-60 transition duration-500"></span>

                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Get Started
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </Link>

                {/* Secondary Glass Button */}
                <Link
                  to="/services"
                  className="group relative w-full sm:w-auto px-8 py-4 rounded-md font-semibold uppercase tracking-wider text-xs text-white border border-indigo-400/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/70 hover:shadow-lg hover:shadow-cyan-500/20"
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

          {/* RIGHT COLUMN: Hidden on Mobile (hidden), Visible on LG (flex) */}
          <div className="hidden lg:flex justify-center items-center perspective-1000">
            <div
              ref={rotatingImgRef}
              className="relative w-64 h-64 md:w-96 md:h-96"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <img
                src={Hr}
                alt="Tech Asset"
                className="w-full h-full object-contain filter drop-shadow-[0_0_30px_#88DCD4]"
              />
              <div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full -z-10" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;