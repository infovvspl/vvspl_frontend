import React, { useRef } from 'react';
import H1 from "../../assets/img1.jpeg";
import H2 from "../../assets/img2.jpeg";
import H3 from "../../assets/img3.jpeg";
import H4 from "../../assets/img4.png";

const FoundingMembers = ({ innerRef, isPage = false }) => {
  const scrollContainer = useRef(null);
  const members = [
    {
      name: "LT. Col. Anil Tripathi, Sena Medal (Retd.)",
      role: "Chairman cum Founder Director",
      desc: "A decorated Army veteran and Sena Medal awardee, Anil Tripathi is a mission-driven leader with over two decades of operational excellence in the Army Service Corps and an alumni of IIM Bangalore, India Institute of Financial Management Faridabad, National Institute of Mass Communication (JNU) New Delhi and Executive MBA in operations from Mumbai. An expert in defence logistics, strategic supply chains, crisis response, and large-scale administration, he successfully built and led a high-performing logistics enterprise in the port and integrated supply chain sector. Today, he is charting a new course — transitioning from physical logistics to digital force multiplication. Through Veteran Ventures Pvt Ltd, he is spearheading next-generation IT solutions designed to address real-world defence and civil challenges. His vision is clear: leverage technology as a strategic enabler to enhance national capability, operational efficiency, and secure digital ecosystems. With disciplined execution and a future-ready mindset, he is positioning the company at the intersection of defence expertise and digital innovation.",
      img: H1
    },
    {
      name: "Ankit Tripathi",
      role: "Additional Director",
      desc: "An MBA and BCom graduate from PDPU Gandhinagar, Ankit brings structured business strategy and growth-oriented leadership to the organization. Having actively managed operations and expansion initiatives, he now drives digital transformation efforts, ensuring scalable systems, strong governance, and technology-led value creation. Ankit Tripathi has expertised himself in futurestic digital revolution and financial growth. He is deeply immersed in AI and ML innovation, leveraging emerging technologies to optimize decision-making, enhance operational intelligence, and unlock next-generation business opportunities.",
      img: H2
    },
    {
      name: "Dattavi Jariwala Tripathi",
      role: "Founder Director",
      desc: "With a BA and MA in Clinical Psychology, Dattavi contributes a human-centric dimension to leadership, organizational design, and stakeholder engagement. Strengthening the technology backbone in support with her life partner who is MTech – Computer Science, BTech – Electronics), whose technical expertise supports the company’s ambition to build secure, intelligent, and impact-driven digital solutions. Dattavi herself is involved in Network Security domain to extend her expertise to clients and giants of digital world",
      img: H3
    },
    {
      name: "Priyanka Tripathi Kriech",
      role: "Executive Director",
      desc: "Based in Horgan, Zurich, Switzerland, and educated at London School of Economics and Political Science (LSE), she combines global financial acumen with a refined understanding of international economic and political dynamics. With over four years of entrepreneurial leadership, she leverages specialized knowledge of off-market digital assets to deliver exclusive investment opportunities to a discerning clientele. Drawing on a strong foundation in Salesforce B2B commerce and experience across asset management and sales, she provides tailored, trust-driven solutions. She has multilingual cultural insight, enabling seamless navigation of complex international markets.",
      img: H4
    },
    // {
    //   name: "Priyanka Tripathi Kriech",
    //   role: "Executive Director",
    //   desc: "Based in Horgan, Zurich, Switzerland, and educated at London School of Economics and Political Science (LSE), she combines global financial acumen with a refined understanding of international economic and political dynamics. With over four years of entrepreneurial leadership, she brings specialized expertise in off-market in digital world, delivering exclusive investment opportunities to a discerning clientele. Drawing on a strong foundation in Salesforce B2B commerce and experience across asset management and sales, she provides tailored, trust-driven solutions. She has multilingual cultural insight, enabling seamless navigation of complex international markets.",
    //   img: H4
    // }
  ];

  return (
    <section
      ref={innerRef}
      className={`${isPage ? 'relative py-24' : 'absolute inset-0 opacity-0'} bg-[#030303] text-white overflow-hidden pt-14 md:pt-32 pb-14 md:pb-30`}
    >
      {/* ================= BACKGROUND SYSTEM ================= */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* 1. Precise Dot Grid */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `radial-gradient(#ffffff15 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />

        {/* 2. Large Dynamic Mesh Glows */}
        <div className="absolute top-[-15%] right-[-10%] w-[60%] h-[60%] bg-blue-600/10 blur-[140px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-20%] left-[-15%] w-[70%] h-[70%] bg-indigo-900/10 blur-[160px] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-purple-500/5 blur-[200px] rounded-full" />
      </div>

      <div id="founders-content-wrapper" className="relative z-10 w-full max-w-7xl mx-auto">
        {/* --- HEADER (HERO VIBE) --- */}
        {/* <div className="px-8 md:px-20 mb-20">
          <div className="flex items-center gap-4 mb-4 opacity-0">
            <div className="w-12 h-[1px] bg-blue-500" />
            <h2 className="text-blue-500 font-mono text-[10px] tracking-[0.6em] uppercase font-bold">
              // The_Leadership_Unit
            </h2>
          </div>
          <h3 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter leading-none">
            The <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.8)' }}>Leadership.</span>
          </h3>
          <div className="mt-6 w-24 h-[4px] bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full" />
        </div> */}

        {/* --- MEMBERS LIST --- */}
        <div
          ref={scrollContainer}
          className="flex flex-col gap-12 md:gap-24 w-full px-8 md:px-20 pb-14"
        >
          {members.map((m, i) => (
            <div
              key={i}
              className="member-card w-full flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-24 group"
            >
              {/* Image Frame - Smaller and Precise */}
              <div className="relative shrink-0 w-48 h-48 md:w-28 md:h-28 lg:w-80 lg:h-[450px] overflow-hidden rounded-2xl border border-white/5 bg-zinc-900 group-hover:border-blue-500/30 transition-all duration-500 shadow-2xl">
                <img
                  src={m.img}
                  alt={m.name}
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                />
                {/* Image Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />

                {/* Corner Decorative Brackets (Hero style) */}
                <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-white/20 group-hover:border-blue-500 transition-colors" />
                <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-white/20 group-hover:border-blue-500 transition-colors" />
              </div>

              {/* Content */}
              <div className="flex-1 space-y-8 py-4">
                <div className="space-y-4 text-center md:text-left items-center md:items-start flex flex-col">
                  <h4 className="text-xl md:text-4xl font-black uppercase tracking-tighter leading-none text-white transition-all group-hover:tracking-tight">
                    {m.name}
                  </h4>

                  <div className="inline-flex items-center justify-center md:justify-start gap-4 px-5 py-2 border border-blue-400 bg-blue-500/5 backdrop-blur-sm rounded-sm">
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse shadow-[0_0_8px_#3b82f6]" />
                    <span className="text-zinc-300 font-mono text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold">
                      {m.role}
                    </span>
                  </div>
                </div>


                <div className="relative">
                  {/* Subtle vertical accent line */}
                  <div className="absolute -left-6 top-0 bottom-0 w-[1px] bg-gradient-to-b from-blue-500/50 to-transparent hidden md:block" />
                  <p className="text-zinc-300 text-lg md:text-xl lg:text-2xl font-light italic leading-relaxed max-w-5xl transition-colors group-hover:text-zinc-200">
                    "{m.desc}"
                  </p>
                </div>

                {/* Aesthetic HUD Bars (Hero-inspired) */}
                <div className="flex items-center gap-6 pt-8">
                  <div className="flex gap-1.5">
                    {[...Array(4)].map((_, idx) => (
                      <div
                        key={idx}
                        className={`h-[2px] transition-all duration-700 ${idx === i ? 'w-16 bg-blue-500' : 'w-6 bg-zinc-800'}`}
                      />
                    ))}
                  </div>
                  {/* <span className="text-[9px] font-mono text-zinc-600 tracking-widest uppercase">
                    Status: Active_Duty
                  </span> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundingMembers;