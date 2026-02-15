import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = ({ innerRef, isPage = false }) => {
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const headerRef = useRef(null);
  const navigate = useNavigate();

  const serviceList = [
    {
      title: "AI / ML",
      desc: "Custom machine learning models, predictive analytics, and intelligent automation systems.",
      img: "https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?q=80&w=996&auto=format&fit=crop",
    },
    {
      title: "Cloud Infrastructure",
      desc: "Scalable, secure cloud architectures and DevOps solutions built for high availability.",
      img: "https://plus.unsplash.com/premium_photo-1681487942927-e1a2786e6036?q=80&w=1170&auto=format&fit=crop",
    },
    {
      title: "Cyber Security",
      desc: "Advanced threat detection and zero-trust security frameworks to protect digital assets.",
      img: "https://images.unsplash.com/photo-1614064548237-096f735f344f?q=80&w=1170&auto=format&fit=crop",
    },
    {
      title: "Web Application",
      desc: "Modern, high-performance web platforms built with scalable architectures and seamless UX.",
      img: "https://img.freepik.com/premium-photo/website-design-software-provide-modish-template-online-retail-business_31965-63159.jpg?w=740",
    },
    {
      title: "Mobile App",
      desc: "Native and cross-platform mobile solutions engineered for performance and security.",
      img: "https://images.unsplash.com/photo-1558655146-6c222b05fce4?q=80&w=764&auto=format&fit=crop",
    },
  ];

  const handleExplore = (title) => {
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9 ]/g, "")
      .replace(/\s+/g, "-");
    navigate(`/services/${slug}`);
  };

  return (
    <section
      ref={(el) => {
        sectionRef.current = el;
        if (innerRef) innerRef.current = el;
      }}
      className={`${isPage ? "relative py-0" : "absolute inset-0 opacity-0"} h-screen w-full bg-zinc-950 overflow-hidden flex flex-col justify-center`}
    >
      {/* Enhanced Background with Multiple Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-15%] right-[-15%] w-[50%] h-[50%] bg-purple-600/5 blur-[150px] rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-cyan-500/5 blur-[180px] rounded-full" />

      {/* Header Section - Improved Typography */}
      <div
        ref={headerRef}
        className="relative z-30 px-8 md:px-16 lg:px-20 xl:px-24 mb-8 md:mb-10 lg:mb-12"
      >
        <div className="flex items-center gap-4 mb-3">
          <div className="opacity-0 w-8 lg:w-12 h-[1px] bg-blue-500" />
          <span className="opacity-0 text-blue-500 font-mono text-[9px] lg:text-[10px] tracking-[0.4em] uppercase">
            Capabilities
          </span>
        </div>
        <h3 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-white font-black uppercase italic tracking-tighter leading-[0.85]">
          Our{" "}
          <span
            className="text-transparent"
            style={{ WebkitTextStroke: "1px rgba(255, 255, 255, 0.72)" }}
          >
            Expertise
          </span>
          <div className="w-16 sm:w-20 md:w-24 h-[3px] mt-2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500" />
        </h3>
      </div>

      {/* Main Horizontal Scroll Area - Fixed Card Sizes */}
      <div
        ref={scrollContainerRef}
        id="services-scroll-container"
        className={`${isPage ? "flex overflow-x-auto no-scrollbar" : "flex w-fit items-center px-8 md:px-16 lg:px-20 xl:px-24 gap-6 md:gap-8 lg:gap-10 xl:gap-12"}`}
      >
        {serviceList.map((s, i) => (
          <div
            key={i}
            className="relative w-[85vw] md:w-[360px] lg:w-[380px] xl:w-[400px] 2xl:w-[420px] h-[55vh] md:h-[420px] lg:h-[440px] 
              xl:h-[460px] flex-shrink-0 group"
          >
            {/* Glass Card Container with Enhanced Effects */}
            <div className="absolute inset-0 bg-zinc-900/40 backdrop-blur-md border border-white/5 rounded-2xl lg:rounded-3xl overflow-hidden transition-all duration-500 group-hover:border-blue-500/30 group-hover:bg-zinc-900/60 group-hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]">
              {/* Image with Overlay */}
              <div className="absolute inset-0 z-0">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-zinc-950/20" />

                {/* Animated Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 via-purple-600/0 to-cyan-600/0 group-hover:from-blue-600/10 group-hover:via-purple-600/5 group-hover:to-cyan-600/10 transition-all duration-700" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-6 lg:p-8 xl:p-10 flex flex-col justify-end z-10">
                {/* Title Section */}
                <div className="mb-4 lg:mb-6 overflow-hidden">
                  {/* <span className="text-blue-500 font-mono text-[10px] lg:text-xs block translate-y-full group-hover:translate-y-0 transition-transform duration-500 mb-2">
                    0{i + 1} // Service
                   </span> */}
                  <h4 className="text-white text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold uppercase tracking-tighter leading-tight">
                    {s.title}
                  </h4>

                  {/* Animated Underline */}
                  <div className="w-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-20 transition-all duration-500 mt-2" />
                </div>

                {/* Description */}
                <p className="text-zinc-300 text-xs md:text-sm lg:text-base font-light mb-6 lg:mb-8 line-clamp-2 lg:line-clamp-3 group-hover:text-white/90 transition-colors leading-relaxed">
                  {s.desc}
                </p>

                {/* CTA Button with Enhanced Design */}
                <button
                  onClick={() => handleExplore(s.title)}
                  className="flex items-center gap-3 text-[9px] lg:text-[10px] font-bold text-white uppercase tracking-widest group/btn w-fit"
                >
                  <span className="bg-white text-black px-5 lg:px-6 py-2.5 lg:py-3 rounded-full group-hover/btn:bg-blue-600 group-hover/btn:text-white transition-all duration-300 flex items-center gap-2">
                    More
                    <svg
                      className="w-3 h-3 lg:w-3.5 lg:h-3.5 transform group-hover/btn:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                  <div className="w-8 lg:w-10 h-[1px] bg-blue-500 group-hover/btn:w-16 transition-all duration-300" />
                </button>
              </div>

              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-white/0 group-hover:border-blue-500/20 rounded-tl-2xl lg:rounded-tl-3xl transition-all duration-500" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-white/0 group-hover:border-blue-500/20 rounded-br-2xl lg:rounded-br-3xl transition-all duration-500" />
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced Progress Bar */}
      <div className="absolute bottom-8 lg:bottom-10 left-8 md:left-16 lg:left-20 xl:left-24 right-8 md:right-16 lg:right-20 xl:right-24">
        <div className="flex justify-between items-end mb-3">
          {/* <div className="flex items-center gap-4">
            <span className="text-[9px] lg:text-[10px] text-white/20 font-mono uppercase tracking-[0.2em]">
              Scale / Growth
            </span>
            <div className="hidden lg:flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50 animate-pulse" />
              <span className="text-[8px] text-white/30 font-mono">
                Live Portfolio
              </span>
            </div>
          </div> */}
          <span className="text-[9px] lg:text-[10px] text-blue-500 font-mono">
            Latest Technology
          </span>
        </div>
        <div className="h-[2px] bg-white/5 w-full overflow-hidden rounded-full">
          <div
            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 w-full origin-left scale-x-0"
            id="services-progress-bar"
          />
        </div>
      </div>

      {/* Scroll Indicator (for non-page mode) */}
      {/* {!isPage && (
        <div className="absolute bottom-32 lg:bottom-36 right-8 md:right-16 lg:right-20 xl:right-24 flex flex-col items-center gap-2 opacity-50">
          <span className="text-[8px] text-white font-mono uppercase tracking-widest rotate-90 origin-center">
            Scroll
          </span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-white/50 to-white/0" />
        </div>
      )} */}
    </section>
  );
};

export default Services;
