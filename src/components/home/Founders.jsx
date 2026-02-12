import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import H1 from "../../assets/img1.jpeg";
import H2 from "../../assets/img2.jpeg";
import H3 from "../../assets/img3.jpeg";

const FoundingMembers = ({ innerRef }) => {
  const scrollContainer = useRef(null);
  
  const members = [
    {
      name: "LT. Col. Anil Tripathi, Sena Medal (Retd.)",
      role: "Chairman cum Founder Director",
      desc: "A decorated Army veteran and Sena Medal awardee, Anil Tripathi is a mission-driven leader with over two decades of operational excellence in the Army Service Corps and an alumni of IIM Bangalore,India Institute of Financial Management Faridabad, Indian Institute of Mass Communication (JNU) New Delhi and Executive MBA in operations from Mumbai. An expert in defence logistics, strategic supply chains, crisis response, and large-scale administration, he successfully built and led a high-performing logistics enterprise in the port and integrated supply chain sector. Today, he is charting a new course — transitioning from physical logistics to digital force multiplication. Through Veteran Ventures Pvt Ltd, he is spearheading next-generation IT solutions designed to address real-world defence and civil challenges. His vision is clear: leverage technology as a strategic enabler to enhance national capability, operational efficiency, and secure digital ecosystems. With disciplined execution and a future-ready mindset, he is positioning the company at the intersection of defence expertise and digital innovation.",
      img: H1
    },
    {
      name: "Ankit Tripathi",
      role: "Additional Director",
      desc: "An MBA and BCom graduate from PDPU Gandhinagar, Ankit brings structured business strategy and growth-oriented leadership to the organization. Having actively managed operations and expansion initiatives, he now drives digital transformation efforts, ensuring scalable systems, strong governance, and technology-led value creation. Ankit Tripathi has Expertised himself in futurestic digital revolution and financial growth.",
      img: H2
    },
    {
      name: "Dattavi Jariwala Tripathi",
      role: "Founder Director",
      desc: "With a BA and MA in Clinical Psychology, Dattavi contributes a human-centric dimension to leadership, organizational design, and stakeholder engagement. Strengthening the technology backbone in support with her life partner who is MTech – Computer Science, BTech – Electronics), whose technical expertise supports the company’s ambition to build secure, intelligent, and impact-driven digital solutions.",
      img: H3
    }
  ];

  return (
    <section
      ref={innerRef}
      className="tunnel-section absolute inset-0 flex items-center bg-[#050505] text-white overflow-hidden opacity-0"
    >
      {/* --- STATIC BACKGROUND ELEMENTS --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#1a1a1a_0%,_transparent_70%)] opacity-50" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      </div>

      <div className="relative z-10 w-full">
        {/* Header - Stays relatively fixed or fades out early */}
        <div className="px-8 md:px-20 mb-12">
          <h2 className="text-blue-500 font-mono text-[10px] tracking-[0.6em] uppercase mb-4 font-bold">// Leadership</h2>
          <h3 className="text-5xl md:text-[6vw] font-black uppercase italic tracking-tighter leading-none">
            The <span className="text-transparent" style={{ WebkitTextStroke: '1px #fff' }}>Collective.</span>
          </h3>
        </div>

        {/* HORIZONTAL CARRIER */}
        <div 
          ref={scrollContainer}
          className="flex flex-nowrap gap-0 w-full px-[10%] md:px-[20%]"
        >
          {members.map((m, i) => (
            <div 
              key={i} 
              className="member-card min-w-full md:min-w-[70vw] lg:min-w-[50vw] pr-12 md:pr-24 flex flex-col md:flex-row items-center gap-8 md:gap-16 group"
            >
              {/* Image Frame */}
              <div className="relative w-full md:w-[40%] aspect-[4/5] overflow-hidden bg-zinc-900 border border-white/10">
                <img
                  src={m.img}
                  alt={m.name}
                  className="w-full h-full object-cover transition-all duration-700  group-hover:scale-105"
                />
                {/* Tech Overlay */}
                {/* <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity" /> */}
                {/* <div className="absolute bottom-4 left-4 text-[10px] font-mono text-white/40 tracking-widest uppercase">
                  ID_00{i + 1} // AUTH_CONFIRMED
                </div> */}
              </div>

              {/* Content */}
              <div className="w-full  space-y-6">
                <div className="space-y-2">
                  <span className="text-blue-500 font-mono text-xs font-black italic tracking-widest">0{i + 1}</span>
                  <h4 className="text-2xl md:text-4xl font-black uppercase tracking-tight leading-tight text-white break-words">
                    {m.name}
                  </h4>

                </div>

                <div className="inline-block px-4 py-1.5 border border-blue-500/30 bg-blue-500/10 text-blue-400 font-mono text-[10px] uppercase tracking-[0.4em]">
                  {m.role}
                </div>

                <p className="text-white text-lg md:text-lg font-light italic leading-relaxed max-w-6xl transition-colors">
                  "{m.desc}"
                </p>

                {/* Aesthetic Bars */}
                <div className="flex gap-1 pt-4 opacity-30">
                  {[...Array(5)].map((_, idx) => (
                    <div key={idx} className={`h-1 w-8 ${idx === i ? 'bg-blue-500' : 'bg-zinc-800'}`} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Side Progress Indicator */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4">
        {members.map((_, i) => (
          <div key={i} className="w-1 h-12 bg-zinc-800 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-blue-600 -translate-y-full transition-transform duration-500" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FoundingMembers;