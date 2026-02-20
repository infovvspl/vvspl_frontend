import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Target, Eye } from 'lucide-react';

const MissionVision = ({ innerRef, isPage = false }) => {
    const containerRef = useRef(null);
    const headerRef = useRef(null);
    const cardsRef = useRef(null);

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
            className={`${isPage ? 'relative py-20 md:py-26' : 'absolute inset-0 opacity-0'} flex items-center bg-[#fafafa] text-zinc-900 overflow-hidden min-h-screen`}
        >
            {/* ================= BACKGROUND SYSTEM ================= */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* 1. Tech Logic Grid (Light Mode) */}
                <div
                    className="absolute inset-0 opacity-[0.4]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)`,
                        backgroundSize: '100px 100px'
                    }}
                />
                <div
                    className="absolute inset-0 opacity-[0.2]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0,0,0,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px)`,
                        backgroundSize: '20px 20px'
                    }}
                />

                {/* 2. Soft Ambient Glows */}
                <div className="absolute top-[-20%] left-[20%] w-[60%] h-[60%] bg-indigo-500/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-20%] right-[10%] w-[70%] h-[70%] bg-cyan-500/5 blur-[150px] rounded-full animate-pulse" />
            </div>

            {/* ================= CONTENT ================= */}
            <div className="relative z-10 w-full max-w-[1300px] mx-auto px-5 sm:px-6 md:px-12 lg:px-20">

                {/* Header Section */}
                <div ref={headerRef} className="mb-4 sm:mb-6 md:mb-24 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
                    <h3 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-[1.05] tracking-tight text-zinc-900">
                        The{" "}
                        <span
                            className="text-transparent"
                            style={{ WebkitTextStroke: "1px rgba(24, 24, 27, 1)" }}
                        >
                            Blueprint
                        </span>
                    </h3>

                    <div className="w-16 sm:w-20 md:w-24 h-[4px] rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500" />
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
                    <div className="w-full max-w-xs h-[1px] bg-gradient-to-r from-transparent via-zinc-300 to-transparent lg:from-zinc-300 lg:to-transparent relative">
                        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-2 h-2 bg-indigo-600 rounded-full blur-[1px] animate-pulse" />
                    </div>
                </div>

            </div>

        </section>
    );
};

export default MissionVision;