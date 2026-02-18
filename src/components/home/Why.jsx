import React from "react";

const WhyChooseUs = ({ innerRef, isPage = false }) => {
  const points = [
    {
      title: "Scalable Architecture",
      desc: "We build systems designed for hyper-growth, ensuring your infrastructure remains resilient as your user base doubles overnight.",
      tag: "Infrastructure",
    },
    {
      title: "Intelligence First",
      desc: "Beyond automation, we embed cognitive AI layers into every workflow, turning passive data into proactive business decisions.",
      tag: "AI & Data",
    },
  ];

  return (
    <section
      ref={innerRef}
      className={`${isPage ? "relative min-h-screen flex items-center py-16 md:py-24" : "absolute inset-0 opacity-0"} flex items-center justify-center bg-[#030303] text-white overflow-hidden`}
    >
      {/* ================= BACKGROUND SYSTEM ================= */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* 1. Subtle Engineering Grid */}
        <div
          className="absolute inset-0 opacity-[0.1]"
          style={{
            backgroundImage: `linear-gradient(#ffffff0a 1px, transparent 1px), linear-gradient(90deg, #ffffff0a 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />

        {/* 2. Large Dynamic Mesh Glows */}
        <div className="absolute top-[-10%] right-[20%] w-[50%] h-[50%] bg-blue-600/10 blur-[130px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[10%] w-[60%] h-[60%] bg-indigo-600/10 blur-[150px] rounded-full animate-pulse" />
      </div>

      <div className="relative z-10 w-full max-w-7xl px-5 sm:px-10 md:px-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* LEFT: Heading Section */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            {/* FLUID TYPOGRAPHY: 
                - text-6xl for mobile
                - lg:text-[clamp(5rem,10vw,8rem)] for desktop 
            */}
            <h2
              className="text-3xl sm:text-6xl lg:text-[min(8vw,8rem)] 
               font-black uppercase italic tracking-tighter 
               leading-[1] mb-8 
               whitespace-nowrap sm:whitespace-normal"
            >
              Impact{" "}
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1px rgba(255, 255, 255, 0.8)" }}
              >
                Beyond
              </span>{" "}
              Code.
            </h2>

            <div className="max-w-md space-y-6">
              <div className="h-[2px] w-16 bg-blue-600" />
              <p className="text-zinc-300 text-base md:text-lg font-light leading-relaxed border-l-2 border-blue-500/30 pl-4 md:pl-6">
                "We don’t just ship features. We engineer competitive advantages
                through disciplined speed and architectural excellence."
              </p>
            </div>
          </div>

          {/* RIGHT: 2-Card Grid */}
          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 md:gap-6">

            {points.map((point, index) => (
              <div
                key={index}
                className="group relative p-4 md:p-6 bg-zinc-900/20 border border-blue-800 backdrop-blur-md rounded-xl md:rounded-2xl transition-all duration-500 hover:border-blue-500"
              >
                <div className="flex flex-col h-full justify-between space-y-4">
                  {/* <div className="flex justify-between items-center">
                    <span className="text-[10px] md:text-xs font-mono tracking-[0.2em] text-blue-500 uppercase font-bold">
                      // {point.tag}
                    </span>
                    <span className="text-xl md:text-2xl font-black text-zinc-800 group-hover:text-zinc-500 transition-colors">
                      0{index + 1}
                    </span>
                  </div> */}

                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-tight">
                      {point.title}
                    </h3>
                    <p className="text-zinc-300 text-sm md:text-base leading-relaxed group-hover:text-zinc-300 transition-colors">
                      {point.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Blur */}
      <div className="absolute -bottom-24 -right-24 w-64 h-64 md:w-96 md:h-96 bg-blue-600/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />
    </section>
  );
};

export default WhyChooseUs;
