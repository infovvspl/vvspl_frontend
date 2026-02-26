import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Target, Eye } from 'lucide-react';

const MissionVision = ({ innerRef, isPage = false }) => {
    const containerRef = useRef(null);
    const headerRef = useRef(null);
    const cardsRef = useRef(null);

    const bgImage = "https://images.unsplash.com/photo-1644088379091-d574269d422f?q=80&w=1693&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    useEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({
                defaults: { ease: "power4.out", duration: 1.2 }
            });

            tl.fromTo(
                headerRef.current.children,
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, stagger: 0.2 },
                0.2
            );

            tl.fromTo(
                ".mission-card",
                { y: 60, opacity: 0 },
                { y: 0, opacity: 1, stagger: 0.3 },
                "-=0.8"
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={(el) => {
                containerRef.current = el;
                if (innerRef) innerRef.current = el;
            }}
            className={`${isPage ? 'relative py-20 md:py-26' : 'absolute inset-0 opacity-0'} flex items-center bg-zinc-950 text-white overflow-hidden min-h-screen`}
        >
            {/* ================= BACKGROUND SYSTEM (DARK OVERLAP) ================= */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* 1. Base Image Layer */}
                <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[20000ms] scale-110 group-hover:scale-100"
                    style={{ backgroundImage: `url(${bgImage})` }}
                />
                
                {/* 2. DARK OVERLAY - Creating that deep "Command Center" look */}
                <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/70 via-zinc-950/30 to-zinc-950/85" />

                {/* 3. High-Tech Grid (Light lines on dark bg) */}
                <div
                    className="absolute inset-0 opacity-[0.1]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
                        backgroundSize: '80px 80px'
                    }}
                />

                {/* 4. Vivid Glows for Contrast */}
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-500/20 blur-[120px] rounded-full opacity-50" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-cyan-500/20 blur-[150px] rounded-full animate-pulse opacity-50" />
            </div>

            {/* ================= CONTENT ================= */}
            <div className="relative z-10 w-full max-w-[1300px] mx-auto px-5 sm:px-6 md:px-12 lg:px-20">

                {/* Header Section */}
                <div ref={headerRef} className="mb-4 sm:mb-6 md:mb-24 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
                    <h3 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-[1.05] tracking-tight text-white">
                        The{" "}
                        <span
                            className="text-transparent"
                            style={{ WebkitTextStroke: "1px rgb(255, 255, 255)" }}
                        >
                            Blueprint
                        </span>
                    </h3>

                    <div className="w-16 sm:w-20 md:w-24 h-[4px] rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 shadow-[0_0_15px_rgba(99,102,241,0.5)]" />
                </div>

                {/* Cards Grid */}
                <div
                    ref={cardsRef}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12"
                >

                    {/* ================= MISSION CARD ================= */}
                    <div className="mission-card group relative p-6 sm:p-8 lg:p-10 bg-white border border-zinc-200 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-500 rounded-3xl">

                        <div className="absolute top-6 sm:top-8 right-6 sm:right-8 opacity-10 group-hover:opacity-30 group-hover:scale-110 transition-all duration-700">
                            <Target className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-indigo-600" />
                        </div>

                        <div className="relative z-10 space-y-5 sm:space-y-6">
                            <div className="flex items-center gap-4">
                                <h4 className="text-base sm:text-lg md:text-xl font-bold tracking-widest uppercase text-indigo-600">
                                    Our Mission
                                </h4>
                            </div>

                            <p className="text-base sm:text-lg md:text-2xl font-normal leading-relaxed md:leading-snug text-zinc-600 group-hover:text-zinc-900 transition-colors duration-500">
                                To design and deploy{" "}
                                <span className="text-indigo-600 font-semibold">defence-grade</span>, AI-enabled
                                digital architectures that enhance national capability and enterprise
                                competitiveness — delivered with precision engineering and globally
                                competitive cost discipline.
                            </p>
                        </div>

                        <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-indigo-600/0 group-hover:border-indigo-600 transition-all duration-500" />
                    </div>

                    {/* ================= VISION CARD ================= */}
                    <div className="mission-card group relative p-6 sm:p-8 lg:p-10 bg-white border border-zinc-200 shadow-sm hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-500 rounded-3xl">

                        <div className="absolute top-6 sm:top-8 right-6 sm:right-8 opacity-10 group-hover:opacity-30 group-hover:scale-110 transition-all duration-700">
                            <Eye className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-cyan-600" />
                        </div>

                        <div className="relative z-10 space-y-5 sm:space-y-6">
                            <div className="flex items-center gap-4">
                                <h4 className="text-base sm:text-lg md:text-xl font-bold tracking-widest uppercase text-cyan-600">
                                    Our Vision
                                </h4>
                            </div>

                            <p className="text-base sm:text-lg md:text-2xl font-normal leading-relaxed md:leading-snug text-zinc-600 group-hover:text-zinc-900 transition-colors duration-500">
                                We envision a{" "}
                                <span className="text-cyan-600 font-semibold">digitally sovereign</span> ecosystem
                                where national infrastructure is intelligent, industries operate
                                autonomously, governance is decisively data-driven, and security is
                                structural rather than reactive.
                            </p>
                        </div>

                        <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-cyan-600/0 group-hover:border-cyan-600 transition-all duration-500" />
                    </div>

                </div>
                
                {/* Bottom Decorative Element */}
                <div className="mt-14 sm:mt-20 flex justify-center lg:justify-start">
                    <div className="w-full max-w-xs h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent lg:from-white/20 lg:to-transparent relative">
                        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-2 h-2 bg-cyan-400 rounded-full blur-[2px] animate-pulse" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionVision;