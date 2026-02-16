import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const FutureVentures = ({ innerRef, isPage = false }) => {
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const headerRef = useRef(null);
  const navigate = useNavigate();

  const sectors = [
    {
      title: "Trade & Transport",
      desc: "Digitalizing global supply chains with real-time tracking and logistics automation.",
      img: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070",
    },
    {
      title: "Land Acquisition",
      desc: "Smart real estate integration using geographic data models and sustainable development.",
      img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2064",
    },
    {
      title: "Mining & Minerals",
      desc: "Optimizing extraction throughput with specialized AI and precision engineering.",
      img: "https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?q=80&w=2070",
    },
    {
      title: "Power & Energy",
      desc: "Intelligent grid management for the next energy frontier and renewable integration.",
      img: "https://media.istockphoto.com/id/1158175328/photo/solar-panel-and-wind-turbine-farm-clean-energy.jpg?s=612x612&w=0&k=20&c=ur5kwDnZxGKk_8KluOHkIePz6kiDT5N7dszbYQfPiBw=",
    },
    {
      title: "Organic Farming",
      desc: "Autonomous routing and demand forecasting systems for modern agriculture.",
      img: "https://plus.unsplash.com/premium_photo-1664299231810-29d1caf6f753?q=80&w=1170&auto=format&fit=crop",
    },
  ];

  const handleNavigation = (title) => {
    const slug = title.toLowerCase().replace(/&/g, "and").replace(/\s+/g, "-");
    navigate(`/ventures/${slug}`);
  };

  return (
    <section
      ref={(el) => {
        sectionRef.current = el;
        if (innerRef) innerRef.current = el;
      }}
      className={`${isPage ? "relative py-0" : "absolute inset-0 opacity-0"} h-screen w-full bg-zinc-950 overflow-hidden flex flex-col justify-center`}
    >
      {/* 1. THE GLOW SYSTEM */}
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-15%] left-[-15%] w-[50%] h-[50%] bg-indigo-600/5 blur-[150px] rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-purple-500/5 blur-[180px] rounded-full" />

      {/* 2. HEADER SECTION (Matches Services typography) */}
      <div
        ref={headerRef}
        className="relative z-30 px-8 md:px-16 lg:px-20 xl:px-24 mb-8 md:mb-10 lg:mb-12"
      >
        <div className="flex items-center gap-4 mb-3 opacity-0">
          <div className="w-8 lg:w-12 h-[1px] bg-blue-500" />
          <span className="text-blue-500 font-mono text-[9px] lg:text-[10px] tracking-[0.4em] uppercase">
            Pipeline
          </span>
        </div>
        <h3 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-white font-black uppercase italic tracking-tighter leading-[0.85]">
          Future{" "}
          <span
            className="text-transparent"
            style={{ WebkitTextStroke: "1px rgba(255, 255, 255, 0.72)" }}
          >
            Expansion
          </span>
          <div className="w-16 sm:w-20 md:w-24 h-[3px] mt-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500" />
        </h3>
      </div>

      {/* 3. SCROLL AREA (Matches card sizes & spacing) */}
      <div
        ref={scrollContainerRef}
        id="future-scroll-container"
        className={`${isPage ? "flex overflow-x-auto no-scrollbar" : "flex w-fit items-center px-8 md:px-16 lg:px-20 xl:px-24 gap-6 md:gap-8 lg:gap-10 xl:gap-12"}`}
      >
        {sectors.map((s, i) => (
          <div
            key={i}
            className="relative w-[85vw] md:w-[360px] lg:w-[380px] xl:w-[400px] 2xl:w-[420px] h-[55vh] md:h-[420px] lg:h-[440px] xl:h-[460px] flex-shrink-0 group"
          >
            {/* Glass Card Container */}
            <div className="absolute inset-0 bg-zinc-900/40 backdrop-blur-md border border-white/5 rounded-2xl lg:rounded-3xl overflow-hidden transition-all duration-500 group-hover:border-blue-500/30 group-hover:bg-zinc-900/60 group-hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]">
              
              {/* Image Layer with Zoom */}
              <div className="absolute inset-0 z-0">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-zinc-950/20" />
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/0 via-transparent to-blue-600/0 group-hover:from-indigo-600/10 group-hover:to-blue-600/10 transition-all duration-700" />
              </div>

              {/* Content Layer */}
              <div className="absolute inset-0 p-6 lg:p-8 xl:p-10 flex flex-col justify-end z-10">
                <div className="mb-4 lg:mb-6 overflow-hidden">
                  <h4 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-tighter leading-tight">
                    {s.title}
                  </h4>
                  {/* Animated Underline */}
                  <div className="w-0 h-[2px] bg-gradient-to-r from-blue-500 to-indigo-500 group-hover:w-20 transition-all duration-500 mt-2" />
                </div>

                <p className="text-zinc-300 text-xs md:text-sm lg:text-base font-light mb-6 lg:mb-8 line-clamp-3 group-hover:text-white/90 transition-colors leading-relaxed">
                  {s.desc}
                </p>

                {/* CTA BUTTON (Matches Services "More" button) */}
                <button
                  onClick={() => handleNavigation(s.title)}
                  className="flex items-center gap-3 text-[9px] lg:text-[10px] font-bold text-white uppercase tracking-widest group/btn w-fit"
                >
                  <span className="bg-white text-black px-5 lg:px-6 py-2.5 lg:py-3 rounded-full group-hover/btn:bg-blue-600 group-hover/btn:text-white transition-all duration-300 flex items-center gap-2">
                    Explore
                    <svg
                      className="w-3 h-3 lg:w-3.5 lg:h-3.5 transform group-hover/btn:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
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

      {/* 4. PROGRESS BAR */}
      <div className="absolute bottom-8 lg:bottom-10 left-8 md:left-16 lg:left-20 xl:left-24 right-8 md:right-16 lg:right-20 xl:right-24">
        <div className="flex justify-between items-end mb-3">
          <span className="text-[9px] lg:text-[10px] text-blue-500 font-mono">
            Sector Integration Phase
          </span>
        </div>
        <div className="h-[2px] bg-white/5 w-full overflow-hidden rounded-full">
          <div
            className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500 w-full origin-left scale-x-0"
            id="future-progress-bar"
          />
        </div>
      </div>
    </section>
  );
};

export default FutureVentures;