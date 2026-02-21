import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom'; // Added this
import H1 from "../../assets/img1.jpeg";
import H2 from "../../assets/img2.jpeg";
import H3 from "../../assets/img3.jpeg";
import H4 from "../../assets/img4.png";

gsap.registerPlugin(ScrollTrigger);

const Team = ({ innerRef, isPage = true }) => {
    const containerRef = useRef(null);
    const contentRef = useRef(null);
    const gridRef = useRef(null);
    const buttonRef = useRef(null); // Ref for button animation

    const founders = [
        { name: "LT. Col. Anil Tripathi, Sena Medal (Retd.)", role: "Chairman cum Founder Director", img: H1 },
        { name: "Ankit Tripathi", role: "Additional Director", img: H2 },
        { name: "Dattavi Jariwala Tripathi", role: "Founder Director", img: H3 },
        { name: "Priyanka Tripathi Kriech", role: "Executive Director", img: H4 },
    ];

    useEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                },
                defaults: { ease: "power4.out", duration: 1.2 }
            });

            tl.fromTo(
                contentRef.current.children,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, stagger: 0.15 }
            )
                .fromTo(
                    ".team-card",
                    { y: 40, opacity: 0 },
                    { y: 0, opacity: 1, stagger: 0.1, duration: 1 },
                    "-=0.8"
                )
                .fromTo(
                    buttonRef.current,
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1, duration: 1 },
                    "-=0.6"
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
            className={`${isPage ? 'relative py-20 md:py-32' : 'absolute inset-0 opacity-0'} flex flex-col items-center bg-black text-white overflow-hidden min-h-screen`}
        >
            {/* ================= BACKGROUND ================= */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-indigo-950/70" />
                <div className="absolute -top-20 -left-20 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-indigo-600/15 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -right-20 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-cyan-500/15 rounded-full blur-3xl" />
            </div>

            {/* ================= CONTENT ================= */}
            <div className="relative z-10 w-full max-w-[1300px] mx-auto px-6 md:px-12 lg:px-20">

                {/* Header */}
                <div ref={contentRef} className="flex flex-col items-center text-center mb-16 space-y-6">
                    <h2 className="text-[10px] md:text-sm tracking-[0.4em] md:tracking-[0.6em] uppercase font-semibold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                        Meet the Founders
                    </h2>

                    <h3 className="text-4xl sm:text-4xl md:text-7xl font-black leading-[1.1] tracking-tight">
                        The {""}
                        <span
                            className="text-transparent"
                            style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.88)' }}
                        >
                            Leadership.
                        </span>
                    </h3>

                    <div className="w-20 md:w-24 h-[3px] md:h-[4px] rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500" />
                </div>

                {/* Team Grid */}
                <div
                    ref={gridRef}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
                >
                    {founders.map((founder, i) => (
                        <div key={i} className="group">

                            {/* Image */}
                            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-zinc-900">
                                <img
                                    src={founder.img}
                                    alt={founder.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>

                            {/* Content Below Image */}
                            <div className="mt-5 text-center px-2">
                                <h4 className="text-xl font-bold text-white uppercase tracking-tight leading-tight break-words">
                                    {founder.name}
                                </h4>

                                <p className="mt-2 text-xs tracking-widest text-indigo-400 uppercase">
                                    {founder.role}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>

                {/* ================= BUTTON ================= */}
                <div ref={buttonRef} className="flex justify-center">
                    <Link
                        to="/team"
                        className="group relative px-8 py-4 bg-transparent overflow-hidden rounded-full border border-cyan-600 transition-all duration-300"
                    >
                        <span className="relative z-10 text-sm font-bold uppercase tracking-widest text-white transition-colors duration-300">
                            More about them
                        </span>
                        {/* Animated background slide */}
                        <div className="absolute inset-0 z-0 bg-gradient-to-r from-indigo-600 to-cyan-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default Team;