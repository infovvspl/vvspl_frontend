import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const DefenseAI = ({ innerRef, isPage = true }) => {
    const contentRef = useRef(null);
    const imageRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({
                defaults: { ease: "power4.out", duration: 1.2 }
            });

            tl.fromTo(
                contentRef.current.children,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, stagger: 0.15, delay: 0.2 }
            );

            if (imageRef.current) {
                tl.fromTo(
                    imageRef.current,
                    { x: -40, opacity: 0, scale: 0.95 }, // Changed x to -40 to slide in from left
                    { x: 0, opacity: 1, scale: 1 },
                    "-=0.8"
                );
            }
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={(el) => {
                containerRef.current = el;
                if (innerRef) innerRef.current = el;
            }}
            className={`${isPage ? 'relative py-20 md:py-32' : 'absolute inset-0 opacity-0'} flex items-center bg-[#05070a] text-white overflow-hidden min-h-screen`}
        >
            {/* ================= BACKGROUND ================= */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1708589413299-c75179e697ac?q=80&w=1076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Defense Technology"
                    className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-tl from-black via-[#05070a]/50 to-emerald-950/50" />
                
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px]" />
            </div>

            {/* ================= CONTENT ================= */}
            <div className="relative z-10 w-full max-w-[1300px] mx-auto px-6 md:px-12 lg:px-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                    {/* LEFT – TACTICAL IMAGE (Now first in grid for desktop) */}
                    <div ref={imageRef} className="hidden lg:block relative order-1 lg:order-1">
                        <div className="relative rounded-2xl overflow-hidden border border-emerald-500/20 shadow-[0_0_50px_-12px_rgba(16,185,129,0.3)]">
                            <img
                                src="https://images.unsplash.com/photo-1640675321535-4b3ea7fd8ec4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="AI Surveillance"
                                className="w-full h-[550px] object-cover grayscale-[0.5] contrast-[1.2]"
                            />
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.1)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none" />
                        </div>
                        {/* Corner Accents */}
                        <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-emerald-500" />
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-emerald-500" />
                    </div>

                    {/* RIGHT – CONTENT (Now second in grid for desktop) */}
                    <div 
                        ref={contentRef} 
                        className="space-y-6 md:space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-2"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-emerald-500 animate-pulse rounded-full" />
                            <h2 className="text-[10px] md:text-sm tracking-[0.5em] uppercase font-bold text-emerald-400">
                                Defense & National Security
                            </h2>
                        </div>

                        {/* <h3 className="text-4xl md:text-6xl font-black leading-[1.1] tracking-tight">
                            Intelligence at the
                            <br />
                            <span
                                className="text-transparent"
                                style={{ WebkitTextStroke: '1px rgba(16, 185, 129, 0.89)' }}
                            >
                                Tactical Edge
                            </span>
                        </h3> */}
                        <h3 className="text-4xl md:text-6xl font-black leading-[1.1] tracking-tight">
                            Next-Gen Defense
                            <br />
                            <span
                                className="text-transparent"
                                style={{ WebkitTextStroke: '1px rgba(16, 185, 129, 0.89)' }}
                            >
                                Powered by AI
                            </span>
                        </h3>

                        <div className="w-20 md:w-24 h-[3px] rounded-full bg-gradient-to-r from-emerald-500 to-indigo-500" />

                        <p className="text-xl md:text-2xl text-zinc-300 leading-snug font-light italic max-w-lg lg:max-w-none">
                            "In the modern theater of operations, data is the most 
                            <span className="text-white font-medium not-italic">
                                {" "}lethal asset.
                            </span>"
                        </p>

                        <p className="text-md md:text-lg text-zinc-400 leading-relaxed max-w-xl">
                            VVSPL Tech engineers advanced AI frameworks designed for sovereign defense. From autonomous situational awareness to predictive threat neutralizing, we bridge the gap between raw field data and decisive action. Our systems are built for air-gapped security and mission-critical reliability.
                        </p>

                        {/* <button className="px-8 py-4 border border-emerald-500/50 hover:bg-emerald-500/10 transition-all duration-300 uppercase text-xs tracking-widest font-bold">
                            View Capabilities
                        </button> */}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default DefenseAI;