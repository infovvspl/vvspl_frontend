import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const About = ({ innerRef, isPage = false }) => {
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

            // Only animate image if it's visible (desktop)
            if (imageRef.current) {
                tl.fromTo(
                    imageRef.current,
                    { y: 60, opacity: 0, scale: 0.92 },
                    { y: 0, opacity: 1, scale: 1 },
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
            // Use min-h-screen for mobile to prevent content clipping
            className={`${isPage ? 'relative py-20 md:py-32' : 'absolute inset-0 opacity-0'} flex items-center bg-black text-white overflow-hidden min-h-screen`}
        >
            {/* ================= BACKGROUND ================= */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070"
                    alt="About Tech Background"
                    className="w-full h-full object-cover opacity-40 md:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-indigo-950/70" />
                
                {/* Responsive ambient glows */}
                <div className="absolute -top-20 -left-20 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-indigo-600/15 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -right-20 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-cyan-500/15 rounded-full blur-3xl" />
            </div>

            {/* ================= CONTENT ================= */}
            <div className="relative z-10 w-full max-w-[1300px] mx-auto px-6 md:px-12 lg:px-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                    {/* LEFT – CONTENT (Centered on mobile, Left-aligned on Desktop) */}
                    <div 
                        ref={contentRef} 
                        className="space-y-6 md:space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left"
                    >
                        <h2 className="text-[10px] md:text-sm tracking-[0.4em] md:tracking-[0.6em] uppercase font-semibold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                            About Us
                        </h2>

                        <h3 className="text-4xl sm:text-4xl md:text-6xl font-black leading-[1.1] tracking-tight">
                            We don't just use technology:
                            <br />
                            <span
                                className="text-transparent"
                                style={{ WebkitTextStroke: '1px rgba(255,255,255,0.5)' }}
                            >
                                We make it work for you
                            </span>
                        </h3>

                        <div className="w-20 md:w-24 h-[3px] md:h-[4px] rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500" />

                        <p className="text-xl md:text-2xl text-zinc-300 leading-snug font-light italic max-w-lg lg:max-w-none">
                            "Innovation means nothing without impact —
                            <span className="text-white font-medium not-italic">
                                {" "}we deliver both.
                            </span>"
                        </p>

                        <p className="text-md md:text-lg text-zinc-300 leading-relaxed max-w-xl">
                            We believe innovation should be practical, scalable, and purposeful. From AI-driven systems and intelligent automation to secure, resilient digital infrastructures, we engineer solutions that simplify complexity. Our approach is the simple way to solve complete digital problems.
                        </p>
                    </div>

                    {/* RIGHT – IMAGE CARD (Hidden on Mobile, Visible on LG+) */}
                    <div ref={imageRef} className="hidden lg:block relative">
                        <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.7)]">
                            <img
                                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070"
                                alt="Team Working"
                                className="w-full h-[520px] object-cover"
                            />
                        </div>
                        <div className="absolute inset-0 rounded-3xl pointer-events-none bg-gradient-to-tr from-indigo-500/10 to-cyan-500/10" />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;