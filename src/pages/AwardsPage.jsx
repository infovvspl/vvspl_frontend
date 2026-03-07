import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';
import Aw from "../assets/aw1.jpeg";
import Aw2 from "../assets/aw2.jpeg";

gsap.registerPlugin(ScrollTrigger);

const AwardsPage = () => {
    const mainRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            /* ─── 1. HERO ANIMATIONS (Matching About Page) ─── */
            const heroTl = gsap.timeline({ defaults: { ease: 'power4.out' } });
            heroTl.fromTo('.hero-word',
                { y: 80, opacity: 0, skewY: 4 },
                { y: 0, opacity: 1, skewY: 0, duration: 1.1, stagger: 0.12 }
            )
            .fromTo('.hero-subtitle', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9 }, '-=0.6')
            .fromTo('.hero-line', { scaleX: 0, transformOrigin: 'left center' }, { scaleX: 1, duration: 0.8 }, '-=0.5');

            /* ─── 2. IMAGE REVEAL LOGIC ─── */
            gsap.utils.toArray('.award-img-wrapper').forEach((el) => {
                gsap.fromTo(el,
                    { y: 100, opacity: 0, clipPath: 'inset(100% 0% 0% 0%)' },
                    {
                        y: 0, opacity: 1, clipPath: 'inset(0% 0% 0% 0%)',
                        duration: 1.4, ease: 'power4.out',
                        scrollTrigger: {
                            trigger: el,
                            start: 'top 90%',
                        }
                    }
                );
            });

            /* ─── 3. GLOBAL REVEALS ─── */
            gsap.utils.toArray('.reveal-up').forEach((el) => {
                gsap.fromTo(el, { y: 40, opacity: 0 }, {
                    y: 0, opacity: 1, duration: 1,
                    scrollTrigger: { trigger: el, start: 'top 85%' }
                });
            });

        }, mainRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={mainRef} className="bg-black text-white font-sans">
            <Navbar />

            {/* 1 ── HERO SECTION (Identical Style to About) */}
            <section className="hero-section relative py-32 flex flex-col items-center justify-center overflow-hidden bg-black">
                <div className="absolute inset-0 z-0">
                    <img className="w-full h-full object-cover opacity-20 grayscale" src="https://images.unsplash.com/photo-1453904300235-0f2f60b15b5d?q=80&w=2070" alt="" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/90 to-black" />
                </div>
                
                {/* Brand Gradients */}
                <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
                    <p className="text-[10px] md:text-xs tracking-[0.5em] uppercase font-semibold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-6">
                        Distinction & Excellence
                    </p>
                    <h1 className="text-5xl sm:text-7xl md:text-8xl font-black leading-none tracking-tight">
                        <span className="hero-word inline-block mr-[0.2em]">Awards</span>
                        <span className="hero-word inline-block mr-[0.2em]"> &</span>
                        <br />
                        <span className="hero-word inline-block text-transparent" style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.45)' }}>Recognition.</span>
                    </h1>
                    <div className="hero-line my-8 h-[3px] w-32 mx-auto rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500" />
                    <p className="hero-subtitle text-base md:text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto font-light">
                        Validation of our commitment to engineering integrity and transformative digital solutions.
                    </p>
                </div>
            </section>

            {/* 2 ── MAIN AWARDS GRID (Image Focused) */}
            <section className="relative py-24 bg-black">
                <div className="max-w-[1300px] mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
                        
                        {/* Award Item 1 */}
                        <div className="award-img-wrapper group">
                            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-2xl">
                                <img 
                                    src={Aw}
                                    alt="Award Certificate" 
                                    className="w-full h-full object-contain opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                                {/* <div className="absolute bottom-8 left-8">
                                    <span className="text-indigo-400 text-xs font-bold tracking-widest uppercase">Innovation Award</span>
                                    <h3 className="text-2xl font-bold mt-2">Tech Leadership 2025</h3>
                                </div> */}
                            </div>
                        </div>

                        {/* Award Item 2 */}
                        <div className="award-img-wrapper group mt-0 md:mt-24">
                            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-2xl">
                                <img 
                                    src={Aw2}
                                    alt="Trophy" 
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                                {/* <div className="absolute bottom-8 left-8">
                                    <span className="text-cyan-400 text-xs font-bold tracking-widest uppercase">Security Excellence</span>
                                    <h3 className="text-2xl font-bold mt-2">Certified Scalability</h3>
                                </div> */}
                            </div>
                        </div>

                        {/* Award Item 3 */}
                        {/* <div className="award-img-wrapper group">
                            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-2xl">
                                <img 
                                    src="https://images.unsplash.com/photo-1491333078588-55b6733c7de6?q=80&w=2070" 
                                    alt="Certification" 
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                                <div className="absolute bottom-8 left-8">
                                    <span className="text-indigo-400 text-xs font-bold tracking-widest uppercase">ISO Standards</span>
                                    <h3 className="text-2xl font-bold mt-2">Quality Management</h3>
                                </div>
                            </div>
                        </div> */}

                        {/* Award Item 4 */}
                        {/* <div className="award-img-wrapper group mt-0 md:mt-24">
                            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-2xl">
                                <img 
                                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070" 
                                    alt="Industry Recognition" 
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                                <div className="absolute bottom-8 left-8">
                                    <span className="text-cyan-400 text-xs font-bold tracking-widest uppercase">Strategic Partner</span>
                                    <h3 className="text-2xl font-bold mt-2">Digital Pioneer 2024</h3>
                                </div>
                            </div>
                        </div> */}

                    </div>
                </div>
            </section>

            {/* 3 ── TRUST BADGES (Minimalistic) */}
            {/* <section className="py-20 border-y border-white/5 bg-zinc-900/30">
                <div className="max-w-[1300px] mx-auto px-6">
                    <div className="reveal-up flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-30 grayscale contrast-125">
                        <span className="text-xl font-bold tracking-widest">ISO 27001</span>
                        <span className="text-xl font-bold tracking-widest">GDPR</span>
                        <span className="text-xl font-bold tracking-widest">PCI-DSS</span>
                        <span className="text-xl font-bold tracking-widest">SOC TYPE II</span>
                    </div>
                </div>
            </section> */}

            {/* 4 ── CTA (Matching About Page) */}
            <section className="reveal-up relative py-28 md:py-40 overflow-hidden bg-zinc-900">
                <div className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-950/60 via-zinc-900 to-zinc-900" />
                <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
                    <p className="text-[10px] tracking-[0.5em] uppercase font-semibold text-indigo-400 mb-6">Partner with the best</p>
                    <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                        Experience <span className="text-transparent" style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.4)' }}>Award-Winning</span> Service.
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact" className="px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-600 font-semibold text-sm shadow-lg hover:opacity-90 transition-all text-center">
                            Start Your Project
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AwardsPage;