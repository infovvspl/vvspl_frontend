import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const ComingSoon = ({ innerRef, isPage = true }) => {
    const containerRef = useRef(null);
    const contentRef = useRef(null);
    const formRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({
                defaults: { ease: "power4.out", duration: 1.4 }
            });

            // Entrance animation for text elements
            tl.fromTo(
                contentRef.current.children,
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, stagger: 0.2, delay: 0.3 }
            );

            // Subtle "breathing" animation for the background glows
            gsap.to(".glow-sphere", {
                scale: 1.2,
                opacity: 0.6,
                duration: 4,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                stagger: 1
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={(el) => {
                containerRef.current = el;
                if (innerRef) innerRef.current = el;
            }}
            className={`relative flex items-center justify-center bg-black text-white overflow-hidden min-h-screen w-full`}
        >
            {/* ================= BACKGROUND ELEMENTS ================= */}
            <div className="absolute inset-0 z-0">
                {/* Dark Mesh Overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-950/20 via-black to-black" />
                
                {/* Animated Glows */}
                <div className="glow-sphere absolute top-1/4 -left-20 w-[400px] h-[400px] bg-indigo-600/20 rounded-full blur-[120px]" />
                <div className="glow-sphere absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-[120px]" />
                
                {/* Subtle Grid Pattern */}
                <div className="absolute inset-0 opacity-10" 
                     style={{ backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`, size: '40px 40px', backgroundSize: '60px 60px' }} 
                />
            </div>

            {/* ================= CONTENT ================= */}
            <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center">
                <div ref={contentRef} className="space-y-8">
                    
                    {/* Badge */}
                    <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
                        <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                            System Initializing
                        </span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none">
                        {/* SOMETHING <br /> */}
                        <span className="text-transparent" style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.7)' }}>
                            Coming
                        </span> Soon ...
                    </h1>

                    {/* Subtext */}
                    <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                        We're currently building the future of digital solutions. 
                        Our new platform is almost ready to redefine your workflow.
                    </p>

                    {/* Waitlist Form */}
                    {/* <div ref={formRef} className="max-w-md mx-auto mt-12">
                        <form className="relative group">
                            <input 
                                type="email" 
                                placeholder="Enter your email address" 
                                className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 outline-none focus:border-indigo-500 transition-all duration-300 backdrop-blur-sm text-sm"
                            />
                            <button className="absolute right-2 top-2 bottom-2 px-6 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-full text-xs font-bold uppercase tracking-wider hover:shadow-[0_0_20px_rgba(79,70,229,0.4)] transition-all">
                                Notify Me
                            </button>
                        </form>
                        <p className="text-[10px] text-zinc-500 mt-4 tracking-widest uppercase">
                            Be the first to know when we launch
                        </p>
                    </div> */}
                </div>
            </div>

            {/* Bottom Decorative Line */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent via-indigo-500 to-transparent opacity-50" />
        </section>
    );
};

export default ComingSoon;