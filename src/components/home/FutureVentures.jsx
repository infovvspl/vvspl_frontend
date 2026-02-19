import React, { useRef } from "react";
// 1. Import Link
import { Link } from "react-router-dom";

const FutureVentures = ({ innerRef, isPage = false }) => {
    const sectionRef = useRef(null);
    const headerRef = useRef(null);

    // 2. Add manual links to your data array
    const sectors = [
        {
            title: "Trade & Transport",
            desc: "Digitalizing global supply chains with real-time tracking and logistics automation.",
            img: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070",
            path: "/cs"
        },
        {
            title: "Land Acquisition",
            desc: "Smart real estate integration using geographic data models and sustainable development.",
            img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2064",
            path: "/cs"
        },
        {
            title: "Mining & Minerals",
            desc: "Optimizing extraction throughput with specialized AI and precision engineering.",
            img: "https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?q=80&w=2070",
            path: "/cs"
        },
        {
            title: "Power & Energy",
            desc: "Intelligent grid management for the next energy frontier and renewable integration.",
            img: "https://media.istockphoto.com/id/1158175328/photo/solar-panel-and-wind-turbine-farm-clean-energy.jpg?s=612x612&w=0&k=20&c=ur5kwDnZxGKk_8KluOHkIePz6kiDT5N7dszbYQfPiBw=",
            path: "/cs"
        },
        {
            title: "Organic Farming",
            desc: "Autonomous routing and demand forecasting systems for modern agriculture.",
            img: "https://plus.unsplash.com/premium_photo-1664299231810-29d1caf6f753?q=80&w=1170&auto=format&fit=crop",
            path: "/cs"
        },
    ];

    return (
        <section
            ref={(el) => {
                sectionRef.current = el;
                if (innerRef) innerRef.current = el;
            }}
            className="relative w-full bg-[#fafafa] py-16 md:py-24 lg:py-32 overflow-hidden"
        >
            {/* Background System */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div
                    className="absolute inset-0 opacity-[0.3]"
                    style={{
                        backgroundImage: `radial-gradient(rgba(0,0,0,0.1) 1px, transparent 1px)`,
                        backgroundSize: '40px 40px'
                    }}
                />
                <div className="absolute top-[-15%] right-[-10%] w-[65%] h-[65%] bg-blue-500/5 blur-[140px] rounded-full" />
                <div className="absolute bottom-[-20%] left-[-15%] w-[75%] h-[75%] bg-indigo-500/5 blur-[160px] rounded-full animate-pulse" />
            </div>

            <div className="relative z-30 max-w-[1400px] mx-auto px-6 sm:px-12 md:px-24">
                {/* Header Section */}
                <div ref={headerRef} className="mb-12 md:mb-20">
                    <div className="opacity-0 flex items-center gap-4 mb-4">
                        <div className="w-8 lg:w-12 h-[2px] bg-blue-600" />
                        <span className="text-blue-600 font-mono text-[10px] tracking-[0.4em] uppercase font-bold">
                            Pipeline
                        </span>
                    </div>
                    <h3 className="text-4xl md:text-6xl lg:text-8xl text-zinc-900 font-black uppercase italic tracking-tighter leading-none mb-6">
                        Future <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(24, 24, 27, 1)" }}>Expansion</span>
                    </h3>
                    <div className="w-16 sm:w-20 md:w-24 h-[4px] rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500" />
                </div>

                {/* Grid Area */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
                    {sectors.map((s, i) => (
                        <div
                            key={i}
                            className="group relative h-[400px] md:h-[450px] rounded-2xl lg:rounded-3xl overflow-hidden border border-zinc-200 bg-white shadow-sm transition-all duration-500 hover:border-blue-600/30 hover:shadow-[0_20px_40px_rgba(37,99,235,0.1)]"
                        >
                            <div className="absolute inset-0 z-0">
                                <img src={s.img} alt={s.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90" />
                            </div>

                            <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end z-10">
                                <div className="mb-4">
                                    <h4 className="text-zinc-300 text-2xl md:text-3xl font-bold uppercase tracking-tighter leading-tight">
                                        {s.title}
                                    </h4>
                                    <div className="w-0 h-[3px] bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-20 transition-all duration-500 mt-2" />
                                </div>

                                <p className="text-zinc-300 text-sm md:text-base mb-6 line-clamp-3">
                                    {s.desc}
                                </p>

                                {/* 3. Wrap in Link component using the manual path */}
                                <Link
                                    to={s.path}
                                    className="flex items-center justify-center gap-3 text-[10px] font-bold uppercase tracking-widest group/btn w-fit mx-auto"
                                >
                                    <div className="w-10 h-[1px] bg-gradient-to-r from-indigo-600 to-cyan-500 transition-all duration-300 origin-right group-hover/btn:w-16" />

                                    <span className="bg-white text-black px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 shadow-md">
                                        Explore
                                        <svg className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </span>

                                    <div className="w-10 h-[1px] bg-gradient-to-r from-indigo-600 to-cyan-500 transition-all duration-300 origin-left group-hover/btn:w-16" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FutureVentures;