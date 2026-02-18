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
            end: "+=120%",
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          }
        });

        mainTl
          .to(contentRef.current, {
            xPercent: isMobile ? 0 : -30, // Removed horizontal shift on mobile for better centering
            opacity: 0,
            scale: isMobile ? 0.95 : 1.1,
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
            <h1 className="reveal-text text-[14vw] sm:text-6xl md:text-[7vw] font-black leading-[0.9] tracking-tight uppercase text-white">
              Veteran <br />
              <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>
                Ventures
              </span>
            </h1>

            <div className="reveal-text mt-6 space-y-6">
              <h2 className="text-lg sm:text-2xl md:text-3xl font-light text-zinc-300">
                Vision <span className="text-white font-medium">Meets Velocity.</span>
              </h2>
              <p className="max-w-xl mx-auto lg:mx-0 text-zinc-200 text-sm md:text-base leading-relaxed opacity-80">
                Innovation is not just about writing code — it’s about engineering impact. We are a software company built on systems thinking, architectural precision, and disciplined execution. We don’t chase trends or build disposable products. We design, develop, and scale resilient digital ecosystems powered by AI and machine learning, strengthened by robust cybersecurity, and engineered to solve complex problems while creating measurable value.
              </p>

              <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 pt-4">
                <Link to="/contact" className="group relative w-full sm:w-auto px-8 py-4 bg-white text-black font-semibold uppercase tracking-wider text-xs rounded-md transition-all hover:bg-blue-600 hover:text-white">
                  <span className="flex items-center justify-center gap-2">Get Started <ArrowRight size={16} /></span>
                </Link>
                <Link to="/services" className="group w-full sm:w-auto px-8 py-4 border border-white/30 text-white font-semibold uppercase tracking-wider text-xs rounded-md backdrop-blur-md hover:bg-white hover:text-black">
                  <span className="flex items-center justify-center gap-2">Our Services <ArrowRight size={16} /></span>
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