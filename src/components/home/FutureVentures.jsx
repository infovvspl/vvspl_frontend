import React, { useRef } from "react";
import { useNavigate } from "react-router-dom"; // Import navigation

const FutureVentures = ({ innerRef }) => {
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const navigate = useNavigate(); // Initialize the hook

  const sectors = [
    {
      title: "Trade & Transport",
      desc: "Digitalizing global supply chains with real-time tracking.",
      img: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070",
    },
    {
      title: "Land Acquisition & Development",
      desc: "Smart real estate integration using geographic data models.",
      img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2064",
    },
    {
      title: "Mining & Minerals",
      desc: "Optimizing extraction throughput with specialized AI.",
      img: "https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?q=80&w=2070",
    },
    {
      title: "Power & Energy",
      desc: "Intelligent grid management for the next energy frontier.",
      img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070",
    },
    {
      title: "Organic Agriculture",
      desc: "Autonomous routing and demand forecasting systems.",
      img: "https://plus.unsplash.com/premium_photo-1664299231810-29d1caf6f753?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const handleNavigation = (title) => {
    // Converts "Trade & Transport" to "trade-transport"
    const slug = title.toLowerCase().replace(/&/g, "and").replace(/\s+/g, "-");
    navigate(`/ventures/${slug}`);
  };

  return (
    <section
      ref={(el) => {
        sectionRef.current = el;
        if (innerRef) innerRef.current = el;
      }}
      className="absolute inset-0 flex items-center justify-start bg-zinc-950 overflow-hidden opacity-0"
    >
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072"
          alt="Future Background"
          className="w-full h-full object-cover origin-center opacity-[0.2]"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Header */}
      <div className="absolute top-16 left-8 md:left-16 z-20">
        <h2 className="text-blue-500 font-mono text-[10px] md:text-xs tracking-[0.6em] uppercase mb-4">
          Pipeline
        </h2>
        <h3 className="text-white text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none">
          Future{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white/40">
            Expansion
          </span>
        </h3>
      </div>

      {/* Horizontal Scroll Wrapper */}
      <div
        ref={scrollContainerRef}
        id="future-scroll-container"
        className="flex h-screen items-center px-[10vw] gap-8 md:gap-16 w-fit"
      >
        {sectors.map((s, i) => (
          <div
            key={i}
            className="relative w-[85vw] md:w-[45vw] lg:w-[32vw] h-[60vh] md:h-[65vh] flex-shrink-0 group overflow-hidden border border-white/10 bg-zinc-900/40 backdrop-blur-xl"
          >
            {/* Image Layer */}
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={s.img}
                alt={s.title}
                className="w-full h-full object-cover transition-all duration-1000 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
            </div>

            {/* Content Layer */}
            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
              <div className="flex flex-col items-center justify-center">
                <h4 className="text-white text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4 leading-none group-hover:text-blue-400 transition-colors">
                  {s.title}
                </h4>
                <p className="text-zinc-400 text-sm md:text-lg font-light mb-8 max-w-xs leading-relaxed">
                  {s.desc}
                </p>
              </div>

              {/* Action Button */}
              <div className="flex justify-center">
                <button
                  onClick={() => handleNavigation(s.title)}
                  className="group relative inline-flex items-center justify-center
               px-8 py-3 mt-4
               text-[11px] font-semibold tracking-[0.2em] uppercase
               text-white
               border border-white/20
               transition-all duration-300
               hover:bg-white hover:text-black"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    More
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h14M13 6l6 6-6 6"
                      />
                    </svg>
                  </span>
                </button>
              </div>

              {/* <div className="w-full h-1 bg-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-600 w-0 group-hover:w-full transition-all duration-700" />
              </div> */}
            </div>
          </div>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-16 left-8 md:left-16 right-8 md:right-16 h-[1px] bg-white/10 overflow-hidden">
        <div
          className="h-full bg-blue-500/50 w-full origin-left scale-x-0"
          id="future-progress-bar"
        />
      </div>
    </section>
  );
};

export default FutureVentures;
