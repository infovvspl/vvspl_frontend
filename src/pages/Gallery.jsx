import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../components/Navbar';
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const GalleryPage = () => {
    const mainRef = useRef(null);

    const galleryItems = [
        { id: 1, size: 'large', title: 'Cyber Fluid', cat: 'UI/UX', img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964' },
        { id: 2, size: 'small', title: 'Neon Pulse', cat: 'Motion', img: 'https://images.unsplash.com/photo-1633167606207-d840b5070fc2?q=80&w=1964' },
        { id: 3, size: 'medium', title: 'Archi-Tech', cat: 'Design', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070' },
        { id: 4, size: 'medium', title: 'Vapor Wave', cat: 'Software', img: 'https://images.unsplash.com/photo-1614850523296-e8c041de4398?q=80&w=2070' },
        { id: 5, size: 'large', title: 'Future Core', cat: 'Dev', img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070' },
        { id: 6, size: 'small', title: 'Glass Morph', cat: 'Mobile', img: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974' },
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            // 1. Smooth Entry for Hero
            const tl = gsap.timeline();
            tl.from('.hero-content h1', { y: 150, skewY: 10, opacity: 0, duration: 1.5, ease: 'power4.out' })
                .from('.hero-video-box', { clipPath: 'inset(100% 0% 0% 0%)', duration: 1.5, ease: 'power4.inOut' }, "-=1")
                .from('.floating-label', { opacity: 0, x: -50, stagger: 0.2 }, "-=0.5");

            // 2. Infinite Horizontal Text Scroll (The "OP" UI touch)
            gsap.to('.ticker-inner', {
                xPercent: -50,
                repeat: -1,
                duration: 20,
                ease: 'none'
            });

            // 3. Staggered Gallery Reveal
            gsap.from('.bento-item', {
                scale: 0.8,
                opacity: 0,
                y: 50,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: '.gallery-section',
                    start: 'top 70%',
                }
            });
        }, mainRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={mainRef} className="bg-white min-h-screen text-white overflow-x-hidden font-sans">
            <Navbar />

            {/* ─── HERO SECTION: THE "STAGE" ─── */}
            <section className="relative py-22 md:py-42 flex flex-col items-center justify-center px-6">
                <div className="hero-content relative z-20 text-center">
                    <h1 className="text-[8vw] leading-none font-black tracking-tighter uppercase italic">
                        Visual <span className="text-transparent" style={{ WebkitTextStroke: '2px white' }}>Dope.</span>
                    </h1>
                    <div className="hero-line my-8 h-[3px] w-32 mx-auto rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500" />
                    {/* Small Description */}
                    <p className="mt-6 text-lg md:text-xl text-white/80 font-light tracking-wide">
                        We craft bold visuals and immersive digital experiences that turn
                        attention into impact.
                    </p>
                </div>

                {/* The Floating Video Frame */}
                <div className="hero-video-box absolute inset-0 z-10 w-full h-full overflow-hidden">
                    <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-70">
                        <source src="https://www.pexels.com/download/video/29470982/" type="video/mp4" />
                    </video>

                    <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black" />
                </div>

            </section>

            {/* ─── THE TICKER (Modern UI Trick) ─── */}
            {/* <div className="py-10 border-y border-white/10 bg-white/5 overflow-hidden whitespace-nowrap">
                <div className="ticker-inner flex items-center gap-10 text-4xl font-black uppercase tracking-widest opacity-30">
                    {[...Array(10)].map((_, i) => (
                        <span key={i} className="flex items-center gap-10">
                            Engineering Excellence <span className="text-indigo-500 text-6xl">•</span> Creative Vision
                        </span>
                    ))}
                </div>
            </div> */}

            {/* ─── THE BENTO GALLERY ─── */}
            <section className="gallery-section py-32 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-6 h-full md:h-[1200px]">

                    {galleryItems.map((item, idx) => {
                        // Custom Bento Spacing logic
                        const gridClass = {
                            large: 'md:col-span-2 md:row-span-2',
                            medium: 'md:col-span-2 md:row-span-1',
                            small: 'md:col-span-1 md:row-span-1'
                        }[item.size];

                        return (
                            <div
                                key={item.id}
                                className={`bento-item group relative rounded-[2.5rem] overflow-hidden bg-zinc-900 border border-white/5 ${gridClass}`}
                            >
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-full object-cover opacity-70 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-expo"
                                />

                                {/* UI Overlay */}
                                <div className="absolute inset-0 p-8 flex flex-col justify-between pointer-events-none">
                                    <div className="flex justify-between items-start">
                                        <span className="px-4 py-1 rounded-full bg-white/10 backdrop-blur-md text-[10px] uppercase tracking-widest border border-white/10">
                                            {item.cat}
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="text-3xl font-black mb-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 transition-all duration-500">
                                            {item.title}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* ─── CTA ─── */}
            <section className="reveal-up relative py-28 md:py-40 overflow-hidden bg-zinc-900 text-white">
                <div className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-950/60 via-zinc-900 to-zinc-900" />
                <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
                    <p className="text-[10px] tracking-[0.5em] uppercase font-semibold text-indigo-400 mb-6">Ready to Build Together?</p>
                    <h2 className="text-4xl md:text-6xl font-black mb-8">
                        Let's turn your vision <span className="text-transparent" style={{ WebkitTextStroke: '1.5px rgba(255, 255, 255, 0.86)' }}>into reality.</span>
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">

                        <Link to="/contact"
                            className="px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-600 font-semibold text-sm text-white shadow-[0_0_40px_-8px_rgba(99,102,241,0.6)] hover:opacity-90 transition-all duration-300 text-center"
                        >
                            Start a Project
                        </Link>

                        <Link to="/services" className="px-8 py-4 rounded-full border border-white/20 font-semibold text-sm text-white hover:bg-white/5 transition-colors duration-300 text-center"
                        >
                            Explore Services
                        </Link>

                    </div>

                </div>
            </section>
        </div>
    );
};

export default GalleryPage;