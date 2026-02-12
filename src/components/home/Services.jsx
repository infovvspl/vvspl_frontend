import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // 1. Import useNavigate
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Services = ({ innerRef }) => {
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const headerRef = useRef(null);
  const navigate = useNavigate(); // 2. Initialize the hook

  const serviceList = [
  {
    title: "AI / ML",
    desc: "Custom machine learning models, predictive analytics, and intelligent automation systems designed to transform data into actionable insights.",
    img: "https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?q=80&w=996&auto=format&fit=crop"
  },
  {
    title: "Cloud Infrastructure",
    desc: "Scalable, secure cloud architectures and DevOps solutions built for high availability, performance, and enterprise-grade reliability.",
    img: "https://plus.unsplash.com/premium_photo-1681487942927-e1a2786e6036?q=80&w=1170&auto=format&fit=crop"
  },
  {
    title: "Cyber Security",
    desc: "Advanced threat detection, vulnerability management, and zero-trust security frameworks to protect digital assets and infrastructure.",
    img: "https://images.unsplash.com/photo-1614064548237-096f735f344f?q=80&w=1170&auto=format&fit=crop"
  },
  {
    title: "Web Application",
    desc: "Modern, high-performance web platforms built with scalable architectures, seamless UX, and optimized backend systems.",
    img: "https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=1605&auto=format&fit=crop"
  },
  {
    title: "Mobile Application",
    desc: "Native and cross-platform mobile solutions engineered for performance, security, and intuitive user experiences.",
    img: "https://images.unsplash.com/photo-1558655146-6c222b05fce4?q=80&w=764&auto=format&fit=crop"
  },
  {
    title: "E-Commerce",
    desc: "End-to-end e-commerce platforms with secure payment integration, scalable product management, and conversion-focused design.",
    img: "https://images.unsplash.com/photo-1688561808434-886a6dd97b8c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Blockchain Solutions",
    desc: "Decentralized ledger technologies ensuring transparency, immutability, and secure transactions for enterprise applications.",
    img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2070"
  }
];


  // 3. Navigation handler
  const handleExplore = (title) => {
    // Converts "AI / ML" to "ai-ml"
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9 ]/g, '') // Remove special characters like /
      .replace(/\s+/g, '-');      // Replace spaces with dashes
    
    navigate(`/services/${slug}`);
  };

  useEffect(() => {
    // Handling is done in parent Home.jsx as per your note
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
          className="w-full h-full object-cover origin-center opacity-[0.6]"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/50 via-transparent to-zinc-950" />
      </div>

      {/* Background Section Header */}
      <div ref={headerRef} className="absolute top-16 left-8 md:left-16 z-20">
        <h2 className="text-blue-500 font-mono text-[10px] md:text-xs tracking-[0.6em] uppercase mb-4">
          Services
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
                className="w-full h-full object-cover transition-all duration-1000 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
            </div>

            {/* Content Layer */}
            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
              <h4 className="text-white text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4 leading-none">
                {s.title}
              </h4>
              <p className="text-zinc-400 text-sm md:text-lg font-light mb-8 max-w-xs leading-relaxed">
                {s.desc}
              </p>

              {/* 4. Attached the Click Handler */}
              <button 
                onClick={() => handleExplore(s.title)}
                className="w-fit flex items-center gap-4 text-white text-[10px] font-black uppercase tracking-[0.4em] group/btn"
              >
                <span className="group-hover/btn:text-blue-400 transition-colors">Explore</span>
                <div className="w-12 h-[1px] bg-blue-500 group-hover/btn:w-24 transition-all duration-500" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-16 left-8 md:left-16 right-8 md:right-16 h-[1px] bg-white/10 overflow-hidden">
        <div className="h-full bg-blue-500/50 w-full origin-left scale-x-0" id="services-progress-bar" />
      </div>
    </section>
  );
};

export default Services;