import React, { useRef } from 'react';

const FutureVentures = ({ innerRef }) => {
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);

  const sectors = [
    { title: "Trade Import Export", desc: "Digitalizing global supply chains with real-time tracking.", img: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070", icon: "🚢" },
    { title: "Land Acquisition", desc: "Smart real estate integration using geographic data models.", img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2064", icon: "🏗️" },
    { title: "Mining & Minerals", desc: "Optimizing extraction throughput with specialized AI.", img: "https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?q=80&w=2070", icon: "💎" },
    { title: "Power & Energy", desc: "Intelligent grid management for the next energy frontier.", img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070", icon: "⚡" },
    { title: "AI in Logistics", desc: "Autonomous routing and demand forecasting systems.", img: "https://images.unsplash.com/photo-1606220588913-b38f7c26605e?q=80&w=2070", icon: "🚚" },
    { title: "Smart City Life", desc: "Urban infrastructure powered by neural network insights.", img: "https://images.unsplash.com/photo-1605810230436-d25d263a1e7c?q=80&w=2070", icon: "🏙️" }
  ];

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
          Future <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white/40">Expansion</span>
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
                className="w-full h-full object-cover transition-all duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
            </div>

            {/* Content Layer */}
            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full border border-blue-500/30 flex items-center justify-center text-xl bg-blue-500/10 backdrop-blur-md">
                  {s.icon}
                </div>
                <div className="h-px flex-grow bg-white/10" />
              </div>

              <h4 className="text-white text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4 leading-none group-hover:text-blue-400 transition-colors">
                {s.title}
              </h4>
              <p className="text-zinc-400 text-sm md:text-lg font-light mb-8 max-w-xs leading-relaxed">
                {s.desc}
              </p>

              <div className="w-full h-1 bg-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-600 w-0 group-hover:w-full transition-all duration-700" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-16 left-8 md:left-16 right-8 md:right-16 h-[1px] bg-white/10 overflow-hidden">
        <div className="h-full bg-blue-500/50 w-full origin-left scale-x-0" id="future-progress-bar" />
      </div>

    </section>
  );
};

export default FutureVentures;