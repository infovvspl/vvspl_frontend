import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Services = ({ innerRef }) => {
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const headerRef = useRef(null);

  const serviceList = [
    {
      title: "AI / ML",
      desc: "Predictive analytics and neural network integration for modern intelligence.",
      img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070"
    },
    {
      title: "Cloud Infrastructure",
      desc: "High-performance distributed systems for enterprise intelligence.",
      img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072"
    },
    {
      title: "Neural Networks",
      desc: "Deep learning architectures built for complex cognitive tasks.",
      img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?q=80&w=2070"
    },
    {
      title: "Web Engineering",
      desc: "Modern React & Node architectures for data-intensive applications.",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072"
    },
    {
      title: "Edge Computing",
      desc: "Decentralized processing for real-time AI decision making.",
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070"
    }
  ];

  useEffect(() => {
    // We will handle the scroll animation in the parent Home.jsx for better coordination
  }, []);

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
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070"
          alt="Services Background"
          className="w-full h-full object-cover origin-center opacity-[0.2]"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/50 via-transparent to-zinc-950" />
      </div>

      {/* Background Section Header */}
      <div ref={headerRef} className="absolute top-16 left-8 md:left-16 z-20">
        <h2 className="text-blue-500 font-mono text-[10px] md:text-xs tracking-[0.6em] uppercase mb-4">
          Capabilities
        </h2>
        <h3 className="text-white text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white/40">Expertise</span>
        </h3>
      </div>

      {/* Horizontal Scroll Wrapper */}
      <div
        ref={scrollContainerRef}
        id="services-scroll-container"
        className="flex h-screen items-center px-[10vw] gap-8 md:gap-16 w-fit"
      >
        {serviceList.map((s, i) => (
          <div
            key={i}
            className="relative w-[85vw] md:w-[45vw] lg:w-[32vw] h-[60vh] md:h-[65vh] flex-shrink-0 group overflow-hidden border border-white/10 bg-zinc-900/40 backdrop-blur-xl transition-colors duration-500 hover:border-blue-500/50"
          >
            {/* Image Layer */}
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={s.img}
                alt={s.title}
                className="w-full h-full object-cover transition-all duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
            </div>

            {/* Content Layer */}
            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
              {/* <span className="text-blue-400 font-mono text-sm mb-4 block">
                0{i + 1} //
              </span> */}
              <h4 className="text-white text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4 leading-none">
                {s.title}
              </h4>
              <p className="text-zinc-400 text-sm md:text-lg font-light mb-8 max-w-xs leading-relaxed">
                {s.desc}
              </p>

              <button className="w-fit flex items-center gap-4 text-white text-[10px] font-black uppercase tracking-[0.4em] group/btn">
                <span className="group-hover/btn:text-blue-400 transition-colors">Explore</span>
                <div className="w-12 h-[1px] bg-blue-500 group-hover/btn:w-24 transition-all duration-500" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Progress Bar (Visual velocity) */}
      <div className="absolute bottom-16 left-8 md:left-16 right-8 md:right-16 h-[1px] bg-white/10 overflow-hidden">
        <div className="h-full bg-blue-500/50 w-full origin-left scale-x-0" id="services-progress-bar" />
      </div>
    </section>
  );
};

export default Services;