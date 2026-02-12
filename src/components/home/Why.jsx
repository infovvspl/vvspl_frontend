import React from 'react';

const WhyChooseUs = ({ innerRef }) => {
  const points = [
    { title: "Hyper-Speed", desc: "Optimized with Vite for near-instant load times and rapid deployment cycles." },
    { title: "Fluid Motion", desc: "GSAP driven animations for buttery smooth UX that keeps users engaged." },
    { title: "Scaleable", desc: "Built with modular React components designed for long-term growth and agility." }
  ];

  return (
    <section
      ref={innerRef}
      className="tunnel-section absolute inset-0 flex items-center justify-center bg-[#050505] text-white overflow-hidden opacity-0"
    >
      {/* --- BACKGROUND LAYER: DARK GRID --- */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426"
          alt="Technical Grid"
          className="w-full h-full object-cover origin-center opacity-[0.05] grayscale"
        />
        {/* Radar/Scanline Effect */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl px-8 md:px-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

          {/* LEFT: Massive Bold Typography */}
          <div className="lg:w-1/2">
            <span className="text-blue-500 font-mono text-[10px] tracking-[1em] uppercase mb-6 block font-bold">
              // Differentiators
            </span>
            <h2 className="text-6xl md:text-[7.5rem] font-black uppercase italic tracking-tighter leading-[0.8] mb-8">
              Impact <br />
              <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>Beyond</span> <br />
              Code.
            </h2>
            
            <div className="max-w-sm space-y-6">
              <div className="h-[1px] w-full bg-gradient-to-r from-blue-600 to-transparent" />
              <p className="text-zinc-400 text-sm font-light leading-relaxed italic border-l border-blue-500/50 pl-4">
                "We don't build software to maintain the status quo. We build it to disrupt it through unmatched velocity."
              </p>
            </div>
          </div>

          {/* RIGHT: High-Contrast Grid */}
          <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-800/50 border border-zinc-800 backdrop-blur-xl shadow-2xl">
            {points.map((point, index) => (
              <div key={index} className="p-8 md:p-10 bg-[#050505] group hover:bg-zinc-900 transition-colors duration-300">
                <div className="flex flex-col h-full justify-between space-y-12">
                  <div className="flex justify-between items-start">
                    <span className="text-4xl font-black text-zinc-800 group-hover:text-blue-500/20 transition-colors">
                      0{index + 1}
                    </span>
                    <div className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center group-hover:border-blue-500 transition-colors">
                      <div className="w-1 h-1 bg-blue-500 rounded-full" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold uppercase tracking-tight text-white mb-3">
                      {point.title}
                    </h3>
                    <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors">
                      {point.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Velocity Display Box */}
            <div className="p-8 md:p-10 bg-blue-600 flex flex-col justify-center items-center text-center">
              <p className="text-[10px] uppercase tracking-widest text-blue-100 font-bold mb-2">Current Velocity</p>
              <p className="text-5xl font-black text-white italic tracking-tighter">99.9%</p>
              <div className="mt-4 w-12 h-1 bg-white/30 rounded-full overflow-hidden">
                <div className="w-full h-full bg-white animate-pulse" />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Aesthetic Peripheral Glow */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
};

export default WhyChooseUs;