import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
    const mainRef = useRef(null);

    // State for the animated counter in the Stats section
    const [counts, setCounts] = useState({
        projects: 0,
        clients: 0,
        countries: 0,
        years: 0
    });

    useEffect(() => {
        const ctx = gsap.context(() => {

            /* ─── 1. HERO ANIMATIONS ─── */
            const heroTl = gsap.timeline({ defaults: { ease: 'power4.out' } });
            heroTl.fromTo('.hero-word',
                { y: 80, opacity: 0, skewY: 4 },
                { y: 0, opacity: 1, skewY: 0, duration: 1.1, stagger: 0.12 }
            )
                .fromTo('.hero-subtitle', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9 }, '-=0.6')
                .fromTo('.hero-line', { scaleX: 0, transformOrigin: 'left center' }, { scaleX: 1, duration: 0.8, ease: 'power3.inOut' }, '-=0.5')
                .fromTo('.hero-scroll', { y: -10, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, '-=0.2');

            // Floating Scroll Loop
            gsap.to('.hero-scroll', {
                y: 10, duration: 1.4, ease: 'sine.inOut', repeat: -1, yoyo: true, delay: 2
            });

            // Parallax Background
            gsap.to('.hero-bg-img', {
                yPercent: 25,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.hero-section',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                },
            });

            /* ─── 2. REVEAL ANIMATIONS (Global) ─── */
            gsap.utils.toArray('.reveal-up').forEach((el) => {
                gsap.fromTo(el,
                    { y: 50, opacity: 0 },
                    {
                        y: 0, opacity: 1, duration: 1.1, ease: 'power4.out',
                        scrollTrigger: {
                            trigger: el,
                            start: 'top 88%',
                            toggleActions: 'play none none none',
                        }
                    }
                );
            });

            /* ─── 3. STATS COUNTER LOGIC ─── */
            const statsConfig = [
                { key: 'projects', target: 20 },
                { key: 'clients', target: 10 },
                { key: 'countries', target: 5 },
                { key: 'years', target: 1 }
            ];

            statsConfig.forEach(stat => {
                const proxy = { val: 0 };
                gsap.to(proxy, {
                    val: stat.target,
                    duration: 2.5,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: '.stats-grid',
                        start: 'top 85%',
                    },
                    onUpdate: () => {
                        setCounts(prev => ({ ...prev, [stat.key]: Math.round(proxy.val) }));
                    }
                });
            });

            /* ─── 4. STAGGERED REVEALS (Cards) ─── */
            gsap.fromTo('.stagger-card',
                { y: 40, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power4.out',
                    scrollTrigger: {
                        trigger: '.stagger-container',
                        start: 'top 85%',
                    }
                }
            );

        }, mainRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={mainRef} className="bg-zinc-50 text-zinc-900 font-sans">
            <Navbar />

            {/* 1 ── HERO SECTION */}
            <section className="hero-section relative py-32 flex flex-col items-center justify-center overflow-hidden bg-black text-white">
                <div className="absolute inset-0 z-0">
                    <img className="hero-bg-img w-full h-full object-cover opacity-30" src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070" alt="" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black" />
                </div>
                <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
                    <p className="text-[10px] md:text-xs tracking-[0.5em] uppercase font-semibold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-6">
                        Our Story & Mission
                    </p>
                    <h1 className="text-5xl sm:text-7xl md:text-8xl font-black leading-none tracking-tight">
                        <span className="hero-word inline-block mr-[0.2em]">We</span>
                        <span className="hero-word inline-block mr-[0.2em]">Build</span>
                        <span className="hero-word inline-block mr-[0.2em]">What</span>
                        <br />
                        <span className="hero-word inline-block text-transparent" style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.45)' }}>Matters.</span>
                    </h1>
                    <div className="hero-line my-8 h-[3px] w-32 mx-auto rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500" />
                    <p className="hero-subtitle text-base md:text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto">
                        A team of engineers, designers, and strategists who believe technology should create real-world impact — not just headlines.
                    </p>
                </div>

                <div className="hero-scroll absolute bottom-10 z-10 flex flex-col items-center gap-2 opacity-60">
                    <span className="text-[10px] tracking-[0.3em] uppercase text-zinc-400">Scroll</span>
                    <div className="w-[1px] h-10 bg-gradient-to-b from-indigo-400 to-transparent" />
                </div>
            </section>

            {/* 2 ── WHO WE ARE */}
            <section className="relative py-24 md:py-36 overflow-hidden bg-white">
                <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
                <div className="relative z-10 max-w-[1300px] mx-auto px-6 md:px-12 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-center">
                        <div className="reveal-up">
                            <p className="text-[10px] md:text-xs tracking-[0.5em] uppercase font-semibold bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent mb-5">Who We Are</p>
                            <h2 className="text-4xl md:text-5xl font-black leading-[1.1] mb-6 tracking-tight text-zinc-900">
                                Crafting digital <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(9, 9, 11, 0.4)' }}>futures</span> that last.
                            </h2>
                            <div className="w-20 h-[3px] rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 mb-6" />
                            <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-4">
                                Founded on the conviction that great technology should be invisible — seamlessly woven into people's lives — we've spent years perfecting the art of purposeful engineering.
                            </p>
                            <p className="text-zinc-500 text-sm md:text-base leading-relaxed">
                                From early-stage startups to enterprise transformations, we pair deep technical expertise with genuine curiosity.
                            </p>
                        </div>
                        <div className="reveal-up relative hidden lg:block">
                            <div className="rounded-3xl overflow-hidden border border-zinc-200 shadow-2xl">
                                <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070" alt="Team" className="w-full h-[500px] object-cover" />
                            </div>
                            <div className="absolute -bottom-6 -left-6 bg-indigo-600 rounded-2xl px-5 py-4 shadow-xl">
                                <p className="text-xs text-indigo-100 uppercase mb-1">Est.</p>
                                <p className="text-3xl font-black text-white">2026</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3 ── STATS */}
            <section className="py-20 border-y border-zinc-200 bg-zinc-50/50">
                <div className="max-w-[1300px] mx-auto px-6">
                    <div className="stats-grid grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {[
                            { val: counts.projects, label: 'Projects Delivered' },
                            { val: counts.clients, label: 'Happy Clients' },
                            { val: counts.countries, label: 'Countries Reached' },
                            { val: counts.years, label: 'Years of Excellence' }
                        ].map((stat, i) => (
                            <div key={i} className="flex flex-col items-center justify-center gap-2 p-8 rounded-2xl border border-zinc-200 bg-white shadow-sm">
                                <span className="text-5xl md:text-6xl font-black bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">{stat.val}+</span>
                                <span className="text-sm text-zinc-500 tracking-widest uppercase font-medium text-center">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4 ── MISSION & VISION */}
            <section className="relative py-24 md:py-36 overflow-hidden bg-white">
                <div className="max-w-[1300px] mx-auto px-6">
                    <div className="reveal-up text-center mb-16">
                        <p className="text-[10px] tracking-[0.5em] uppercase font-semibold text-indigo-600 mb-4">Our Direction</p>
                        <h2 className="text-4xl md:text-5xl font-black text-zinc-900">Mission & Vision</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="reveal-up h-full p-8 md:p-10 rounded-3xl border border-zinc-100 bg-zinc-50/50 relative overflow-hidden shadow-sm">
                            <p className="text-[10px] tracking-[0.4em] uppercase text-indigo-600 mb-4 font-bold">Mission</p>
                            <h3 className="text-2xl md:text-3xl font-black mb-4">To simplify complexity.</h3>
                            <p className="text-zinc-600 leading-relaxed">We exist to make powerful technology accessible — stripping away the noise to deliver intelligent, scalable systems.</p>
                        </div>
                        <div className="reveal-up h-full p-8 md:p-10 rounded-3xl border border-zinc-100 bg-zinc-50/50 relative overflow-hidden shadow-sm">
                            <p className="text-[10px] tracking-[0.4em] uppercase text-cyan-600 mb-4 font-bold">Vision</p>
                            <h3 className="text-2xl md:text-3xl font-black mb-4">A world shaped by design.</h3>
                            <p className="text-zinc-600 leading-relaxed">We envision a future where digital infrastructure is as natural as breathing — unlocking full human potential.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5 ── VALUES */}
            <section className="py-24 md:py-32 bg-zinc-50/50">
                <div className="max-w-[1300px] mx-auto px-6">
                    <div className="reveal-up mb-14 text-center">
                        <p className="text-[10px] tracking-[0.5em] uppercase font-semibold text-indigo-600 mb-4">What Drives Us</p>
                        <h2 className="text-4xl md:text-5xl font-black">Our Core Values</h2>
                    </div>
                    <div className="stagger-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: "⚡", title: "Speed Without Compromise", desc: "We move fast but never at the cost of quality. Iteration and excellence coexist." },
                            { icon: "🧠", title: "Intelligence First", desc: "Every decision is data-informed, every system is designed to learn." },
                            { icon: "🔐", title: "Security by Design", desc: "Privacy and resilience are built in from day one — not bolted on." },
                            { icon: "🤝", title: "Partnership Over Transactions", desc: "We succeed only when our clients succeed. Long-term define us." },
                            { icon: "🌍", title: "Global Perspective", desc: "With clients on multiple continents, we bring a broad lens to challenges." },
                            { icon: "🔁", title: "Continuous Evolution", desc: "We never stop improving — our tools and teams are always growing." }
                        ].map((val, i) => (
                            <div key={i} className="stagger-card group p-8 rounded-2xl border border-zinc-200 bg-white hover:border-indigo-500/40 hover:bg-zinc-50 transition-all duration-500 shadow-sm">
                                <div className="text-3xl mb-4">{val.icon}</div>
                                <h4 className="text-lg font-bold text-zinc-900 mb-2">{val.title}</h4>
                                <p className="text-sm text-zinc-600 leading-relaxed">{val.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6 ── TEAM */}
            {/* <section className="py-24 md:py-32 bg-white">
                <div className="max-w-[1300px] mx-auto px-6">
                    <div className="reveal-up mb-16 text-center">
                        <p className="text-[10px] tracking-[0.5em] uppercase font-semibold text-indigo-600 mb-4">The Humans Behind It</p>
                        <h2 className="text-4xl md:text-5xl font-black mb-4">Meet the Team</h2>
                        <p className="text-zinc-600 max-w-xl mx-auto text-sm">Diverse backgrounds, shared obsession with building things that work.</p>
                    </div>
                    <div className="stagger-container grid grid-cols-2 md:grid-cols-4 gap-10">
                        {[
                            { name: "Alex Mercer", role: "CEO & Founder", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400" },
                            { name: "Priya Nair", role: "CTO", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400" },
                            { name: "Jordan Ellis", role: "Head of Design", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400" },
                            { name: "Sam Okafor", role: "Lead Engineer", img: "https://images.unsplash.com/photo-1526510747491-58f928ec870f?q=80&w=400" }
                        ].map((member, i) => (
                            <div key={i} className="stagger-card flex flex-col items-center text-center group">
                                <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-2 border-zinc-200 mb-4 shadow-lg group-hover:border-indigo-500 transition-colors">
                                    <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                </div>
                                <h4 className="text-base font-bold text-zinc-900">{member.name}</h4>
                                <p className="text-xs text-zinc-500 tracking-widest uppercase mt-1">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* 7 ── CTA */}
            <section className="reveal-up relative py-28 md:py-40 overflow-hidden bg-zinc-900 text-white">
                <div className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-950/60 via-zinc-900 to-zinc-900" />
                <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
                    <p className="text-[10px] tracking-[0.5em] uppercase font-semibold text-indigo-400 mb-6">Ready to Build Together?</p>
                    <h2 className="text-4xl md:text-6xl font-black mb-8">
                        Let's turn your vision <span className="text-transparent" style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.4)' }}>into reality.</span>
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">

                        <Link to="/contact"
                            className="px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-600 font-semibold text-sm text-white shadow-[0_0_40px_-8px_rgba(99,102,241,0.6)] hover:opacity-90 transition-all duration-300 text-center"
                        >
                            Start a Project
                        </Link>

                        <Link to="/work" className="px-8 py-4 rounded-full border border-white/20 font-semibold text-sm text-white hover:bg-white/5 transition-colors duration-300 text-center"
                        >
                            Explore Our Work
                        </Link>

                    </div>

                </div>
            </section>
        </div>
    );
};

export default AboutPage;