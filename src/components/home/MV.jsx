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

            // Animate Header
            tl.fromTo(
                headerRef.current.children,
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, stagger: 0.2 },
                0.2
            );

            // Animate Cards
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
            className={`${isPage ? 'relative py-20 md:py-32' : 'absolute inset-0 opacity-0'} flex items-center bg-black text-white overflow-hidden`}
        >
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 opacity-[0.03] invert"
                    style={{ backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`, backgroundSize: '40px 40px' }}
                />

                <div className="absolute top-[-10%] right-[-10%] w-[400px] md:w-[700px] h-[400px] md:h-[700px] bg-indigo-600/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[400px] md:w-[700px] h-[400px] md:h-[700px] bg-cyan-500/10 rounded-full blur-[120px]" />
            </div>

            {/* ================= CONTENT ================= */}
            <div className="relative z-10 w-full max-w-[1300px] mx-auto px-5 mt-20 sm:px-6 md:px-12 lg:px-20">

                {/* Header Section */}
                <div ref={headerRef} className="mb-4 sm:mb-6 md:mb-24 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
                    <h3 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-[1.05] tracking-tight">
                        The{" "}
                        <span
                            className="text-transparent"
                            style={{ WebkitTextStroke: "1px rgba(255,255,255,0.79)" }}
                        >
                            Blueprint
                        </span>
                    </h3>

                    <div className="w-16 sm:w-20 md:w-24 h-[3px] rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500" />
                </div>

                {/* Cards Grid */}
                <div
                    ref={cardsRef}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12"
                >

                    {/* ================= MISSION CARD ================= */}
                    <div className="mission-card group relative p-6 sm:p-8 lg:p-10 bg-zinc-900/20 border border-white/5 backdrop-blur-md rounded-3xl transition-all duration-500 hover:border-indigo-500/30">

                        <div className="absolute top-6 sm:top-8 right-6 sm:right-8 opacity-5 group-hover:opacity-20 group-hover:scale-110 transition-all duration-700">
                            <Target className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-white" />
                        </div>

                        <div className="relative z-10 space-y-5 sm:space-y-6">
                            <div className="flex items-center gap-4">
                                <h4 className="text-base sm:text-lg md:text-xl font-bold tracking-widest uppercase text-zinc-100">
                                    Our Mission
                                </h4>
                            </div>

                            <p className="text-base sm:text-lg md:text-2xl font-light leading-relaxed md:leading-snug text-zinc-300 group-hover:text-white transition-colors duration-500">
                                To design and deploy{" "}
                                <span className="text-indigo-400">defence-grade</span>, AI-enabled
                                digital architectures that enhance national capability and enterprise
                                competitiveness — delivered with precision engineering and globally
                                competitive cost discipline.
                            </p>
                        </div>

                        <div className="absolute bottom-6 left-6 w-8 h-8 border-b border-l border-indigo-500/0 group-hover:border-indigo-500/100 transition-all duration-500" />
                    </div>

                    {/* ================= VISION CARD ================= */}
                    <div className="mission-card group relative p-6 sm:p-8 lg:p-10 bg-zinc-900/20 border border-white/5 backdrop-blur-md rounded-3xl transition-all duration-500 hover:border-cyan-500/30">

                        <div className="absolute top-6 sm:top-8 right-6 sm:right-8 opacity-5 group-hover:opacity-20 group-hover:scale-110 transition-all duration-700">
                            <Eye className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-white" />
                        </div>

                        <div className="relative z-10 space-y-5 sm:space-y-6">
                            <div className="flex items-center gap-4">
                                <h4 className="text-base sm:text-lg md:text-xl font-bold tracking-widest uppercase text-zinc-100">
                                    Our Vision
                                </h4>
                            </div>

                            <p className="text-base sm:text-lg md:text-2xl font-light leading-relaxed md:leading-snug text-zinc-300 group-hover:text-white transition-colors duration-500">
                                We envision a{" "}
                                <span className="text-cyan-400">digitally sovereign</span> ecosystem
                                where national infrastructure is intelligent, industries operate
                                autonomously, governance is decisively data-driven, and security is
                                structural rather than reactive. Veteran’s Venture exists to
                                architect and accelerate that transition.
                            </p>
                        </div>

                        <div className="absolute bottom-6 left-6 w-8 h-8 border-b border-l border-cyan-500/0 group-hover:border-cyan-500/100 transition-all duration-500" />
                    </div>

                </div>

                {/* Bottom Decorative Element */}
                <div className="mt-14 sm:mt-20 flex justify-center lg:justify-start">
                    <div className="w-full max-w-xs h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent lg:from-zinc-800 lg:to-transparent relative">
                        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1.5 h-1.5 bg-indigo-500 rounded-full blur-[2px] animate-pulse" />
                    </div>
                </div>

            </div>

        </section>
    );
};

export default MissionVision;