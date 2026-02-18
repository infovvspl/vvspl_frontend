import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* ─────────────────────────────────────────
   HERO BANNER
───────────────────────────────────────── */
const HeroBanner = () => {
    const heroRef     = useRef(null);
    const titleRef    = useRef(null);
    const subtitleRef = useRef(null);
    const lineRef     = useRef(null);
    const scrollRef   = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

            tl.fromTo(
                titleRef.current.querySelectorAll('.word'),
                { y: 80, opacity: 0, skewY: 4 },
                { y: 0, opacity: 1, skewY: 0, duration: 1.1, stagger: 0.12 }
            )
            .fromTo(subtitleRef.current,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.9 }, '-=0.6'
            )
            .fromTo(lineRef.current,
                { scaleX: 0, transformOrigin: 'left center' },
                { scaleX: 1, duration: 0.8, ease: 'power3.inOut' }, '-=0.5'
            )
            .fromTo(scrollRef.current,
                { y: -10, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6 }, '-=0.2'
            );

            // Floating scroll indicator loop
            gsap.to(scrollRef.current, {
                y: 10, duration: 1.4, ease: 'sine.inOut',
                repeat: -1, yoyo: true, delay: 2,
            });

            // Parallax bg
            gsap.to('.hero-bg-img', {
                yPercent: 25, ease: 'none',
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                },
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={heroRef}
            className="relative py-32 flex flex-col items-center justify-center overflow-hidden bg-black text-white"
        >
            <div className="absolute inset-0 z-0">
                <img
                    className="hero-bg-img w-full h-full object-cover opacity-30"
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070"
                    alt=""
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black" />
            </div>

            <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
                <p className="text-[10px] md:text-xs tracking-[0.5em] uppercase font-semibold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-6">
                    Our Story &amp; Mission
                </p>

                <h1
                    ref={titleRef}
                    className="text-5xl sm:text-7xl md:text-8xl font-black leading-none tracking-tight"
                >
                    {['We', 'Build', 'What'].map((w) => (
                        <span key={w} className="word inline-block mr-[0.2em]">{w}</span>
                    ))}
                    <br />
                    <span
                        className="word inline-block text-transparent"
                        style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.45)' }}
                    >
                        Matters.
                    </span>
                </h1>

                <div
                    ref={lineRef}
                    className="my-8 h-[3px] w-32 mx-auto rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500"
                />

                <p
                    ref={subtitleRef}
                    className="text-base md:text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto"
                >
                    A team of engineers, designers, and strategists who believe technology
                    should create real-world impact — not just headlines.
                </p>
            </div>

            <div
                ref={scrollRef}
                className="absolute bottom-10 z-10 flex flex-col items-center gap-2 opacity-60"
            >
                <span className="text-[10px] tracking-[0.3em] uppercase text-zinc-400">Scroll</span>
                <div className="w-[1px] h-10 bg-gradient-to-b from-indigo-400 to-transparent" />
            </div>
        </section>
    );
};

/* ─────────────────────────────────────────
   SCROLL FADE-UP WRAPPER
───────────────────────────────────────── */
const ScrollSection = ({ children, className = '' }) => {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        const ctx = gsap.context(() => {
            gsap.fromTo(el,
                { y: 60, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 1.1, ease: 'power4.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 85%',
                        toggleActions: 'play none none none',
                    },
                }
            );
        });
        return () => ctx.revert();
    }, []);

    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    );
};

/* ─────────────────────────────────────────
   STAT CARD — uses React state for counter
───────────────────────────────────────── */
const StatCard = ({ value, label, delay = 0 }) => {
    const ref    = useRef(null);
    const target = parseInt(value, 10);
    const [count, setCount] = useState(0);

    useEffect(() => {
        const el = ref.current;

        // Card fade-up
        gsap.fromTo(el,
            { y: 40, opacity: 0 },
            {
                y: 0, opacity: 1, duration: 1, ease: 'power4.out', delay,
                scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
            }
        );

        // Counter via plain object — no textContent manipulation
        const proxy = { val: 0 };
        const tween = gsap.to(proxy, {
            val: target,
            duration: 2,
            ease: 'power2.out',
            delay,
            scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
            onUpdate() { setCount(Math.round(proxy.val)); },
        });

        return () => { tween.kill(); };
    }, [target, delay]);

    return (
        <div
            ref={ref}
            className="flex flex-col items-center justify-center gap-2 p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
        >
            <span className="text-5xl md:text-6xl font-black bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                {count}+
            </span>
            <span className="text-sm text-zinc-400 tracking-widest uppercase">{label}</span>
        </div>
    );
};

/* ─────────────────────────────────────────
   VALUE CARD
───────────────────────────────────────── */
const ValueCard = ({ icon, title, description, delay = 0 }) => {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        const ctx = gsap.context(() => {
            gsap.fromTo(el,
                { y: 50, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 1, ease: 'power4.out', delay,
                    scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
                }
            );
        });
        return () => ctx.revert();
    }, [delay]);

    return (
        <div
            ref={ref}
            className="group p-6 md:p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-indigo-500/40 hover:bg-indigo-500/5 transition-colors duration-500 cursor-default"
        >
            <div className="text-3xl mb-4">{icon}</div>
            <h4 className="text-lg font-bold text-white mb-2">{title}</h4>
            <p className="text-sm text-zinc-400 leading-relaxed">{description}</p>
        </div>
    );
};

/* ─────────────────────────────────────────
   TEAM CARD
───────────────────────────────────────── */
const TeamCard = ({ name, role, img, delay = 0 }) => {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        const ctx = gsap.context(() => {
            gsap.fromTo(el,
                { y: 60, opacity: 0, scale: 0.95 },
                {
                    y: 0, opacity: 1, scale: 1, duration: 1, ease: 'power4.out', delay,
                    scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
                }
            );
        });
        return () => ctx.revert();
    }, [delay]);

    return (
        <div ref={ref} className="group flex flex-col items-center text-center">
            <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-indigo-500/50 transition-colors duration-500 mb-4 shadow-[0_0_40px_-10px_rgba(99,102,241,0.4)]">
                <img
                    src={img} alt={name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 to-transparent" />
            </div>
            <h4 className="text-base font-bold text-white">{name}</h4>
            <p className="text-xs text-zinc-400 tracking-widest uppercase mt-1">{role}</p>
        </div>
    );
};

/* ─────────────────────────────────────────
   MAIN ABOUT PAGE
───────────────────────────────────────── */
const AboutPage = () => {
    return (
        <div className="bg-black text-white font-sans">

            {/* 1 ── HERO */}
            <HeroBanner />

            {/* 2 ── WHO WE ARE */}
            <section className="relative py-24 md:py-36 overflow-hidden">
                <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-indigo-700/10 rounded-full blur-3xl pointer-events-none" />
                <div className="relative z-10 max-w-[1300px] mx-auto px-6 md:px-12 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-center">

                        <ScrollSection>
                            <p className="text-[10px] md:text-xs tracking-[0.5em] uppercase font-semibold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-5">
                                Who We Are
                            </p>
                            <h2 className="text-4xl md:text-5xl font-black leading-[1.1] mb-6 tracking-tight">
                                Crafting digital{' '}
                                <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.45)' }}>
                                    futures
                                </span>{' '}
                                that last.
                            </h2>
                            <div className="w-20 h-[3px] rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 mb-6" />
                            <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-4">
                                Founded on the conviction that great technology should be invisible —
                                seamlessly woven into people's lives — we've spent years perfecting
                                the art of purposeful engineering.
                            </p>
                            <p className="text-zinc-500 text-sm md:text-base leading-relaxed">
                                From early-stage startups to enterprise transformations, we pair
                                deep technical expertise with genuine curiosity about the problems
                                our clients face. The result? Solutions that scale, that adapt,
                                and that actually get used.
                            </p>
                        </ScrollSection>

                        <ScrollSection className="relative hidden lg:block">
                            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)]">
                                <img
                                    src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070"
                                    alt="Team collaborating"
                                    className="w-full h-[500px] object-cover"
                                />
                            </div>
                            <div className="absolute inset-0 rounded-3xl pointer-events-none bg-gradient-to-tr from-indigo-500/10 to-cyan-500/10" />
                            <div className="absolute -bottom-6 -left-6 bg-indigo-600/90 backdrop-blur-sm rounded-2xl px-5 py-4 border border-indigo-400/30 shadow-xl">
                                <p className="text-xs text-indigo-200 tracking-widest uppercase mb-1">Est.</p>
                                <p className="text-3xl font-black text-white">2018</p>
                            </div>
                        </ScrollSection>

                    </div>
                </div>
            </section>

            {/* 3 ── STATS */}
            <section className="py-20 border-y border-white/5">
                <div className="max-w-[1300px] mx-auto px-6 md:px-12 lg:px-20">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        <StatCard value="120" label="Projects Delivered"  delay={0}   />
                        <StatCard value="40"  label="Happy Clients"       delay={0.1} />
                        <StatCard value="15"  label="Countries Reached"   delay={0.2} />
                        <StatCard value="7"   label="Years of Excellence" delay={0.3} />
                    </div>
                </div>
            </section>

            {/* 4 ── MISSION & VISION */}
            <section className="relative py-24 md:py-36 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070"
                        alt=""
                        className="w-full h-full object-cover opacity-10"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
                </div>
                <div className="relative z-10 max-w-[1300px] mx-auto px-6 md:px-12 lg:px-20">
                    <ScrollSection className="text-center mb-16">
                        <p className="text-[10px] md:text-xs tracking-[0.5em] uppercase font-semibold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                            Our Direction
                        </p>
                        <h2 className="text-4xl md:text-5xl font-black leading-tight tracking-tight">
                            Mission &amp; Vision
                        </h2>
                    </ScrollSection>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        <ScrollSection>
                            <div className="h-full p-8 md:p-10 rounded-3xl border border-white/10 bg-indigo-950/30 backdrop-blur-sm relative overflow-hidden">
                                <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-600/20 rounded-full blur-2xl" />
                                <p className="text-[10px] tracking-[0.4em] uppercase text-indigo-400 mb-4">Mission</p>
                                <h3 className="text-2xl md:text-3xl font-black mb-4">To simplify complexity.</h3>
                                <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                                    We exist to make powerful technology accessible — stripping away
                                    the noise to deliver intelligent, scalable systems that let
                                    businesses focus on what actually matters to them.
                                </p>
                            </div>
                        </ScrollSection>

                        <ScrollSection>
                            <div className="h-full p-8 md:p-10 rounded-3xl border border-white/10 bg-cyan-950/20 backdrop-blur-sm relative overflow-hidden">
                                <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/15 rounded-full blur-2xl" />
                                <p className="text-[10px] tracking-[0.4em] uppercase text-cyan-400 mb-4">Vision</p>
                                <h3 className="text-2xl md:text-3xl font-black mb-4">A world shaped by intelligent design.</h3>
                                <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                                    We envision a future where digital infrastructure is as natural
                                    as breathing — where every person and organisation has the tools
                                    to unlock their full potential.
                                </p>
                            </div>
                        </ScrollSection>

                    </div>
                </div>
            </section>

            {/* 5 ── VALUES */}
            <section className="py-24 md:py-32">
                <div className="max-w-[1300px] mx-auto px-6 md:px-12 lg:px-20">
                    <ScrollSection className="mb-14 text-center">
                        <p className="text-[10px] md:text-xs tracking-[0.5em] uppercase font-semibold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                            What Drives Us
                        </p>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight">Our Core Values</h2>
                    </ScrollSection>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <ValueCard delay={0}   icon="⚡" title="Speed Without Compromise"    description="We move fast but never at the cost of quality. Iteration and excellence coexist in everything we ship." />
                        <ValueCard delay={0.1} icon="🧠" title="Intelligence First"           description="Every decision is data-informed, every system is designed to learn, every outcome is deliberately engineered." />
                        <ValueCard delay={0.2} icon="🔐" title="Security by Design"           description="Privacy and resilience are built in from day one — not bolted on at the end." />
                        <ValueCard delay={0.3} icon="🤝" title="Partnership Over Transactions" description="We succeed only when our clients succeed. Long-term relationships define our best work." />
                        <ValueCard delay={0.4} icon="🌍" title="Global Perspective"            description="With clients on multiple continents, we bring a broad lens to every local challenge." />
                        <ValueCard delay={0.5} icon="🔁" title="Continuous Evolution"          description="We never stop improving — our tools, our thinking, and our teams are always growing." />
                    </div>
                </div>
            </section>

            {/* 6 ── TEAM */}
            <section className="py-24 md:py-32 bg-white/[0.02]">
                <div className="max-w-[1300px] mx-auto px-6 md:px-12 lg:px-20">
                    <ScrollSection className="mb-16 text-center">
                        <p className="text-[10px] md:text-xs tracking-[0.5em] uppercase font-semibold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                            The Humans Behind It
                        </p>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Meet the Team</h2>
                        <p className="text-zinc-400 max-w-xl mx-auto text-sm md:text-base">
                            Diverse backgrounds, shared obsession with building things that work beautifully.
                        </p>
                    </ScrollSection>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-14">
                        <TeamCard delay={0}   name="Alex Mercer"  role="CEO & Founder"  img="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400" />
                        <TeamCard delay={0.1} name="Priya Nair"   role="CTO"            img="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400" />
                        <TeamCard delay={0.2} name="Jordan Ellis" role="Head of Design" img="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400" />
                        <TeamCard delay={0.3} name="Sam Okafor"   role="Lead Engineer"  img="https://images.unsplash.com/photo-1526510747491-58f928ec870f?q=80&w=400" />
                    </div>
                </div>
            </section>

            {/* 7 ── CTA */}
            <section className="relative py-28 md:py-40 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/60 via-black to-black" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-600/10 rounded-full blur-3xl" />
                </div>
                <ScrollSection className="relative z-10 text-center px-6 max-w-3xl mx-auto">
                    <p className="text-[10px] md:text-xs tracking-[0.5em] uppercase font-semibold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-6">
                        Ready to Build Together?
                    </p>
                    <h2 className="text-4xl md:text-6xl font-black leading-tight tracking-tight mb-8">
                        Let's turn your vision{' '}
                        <span className="text-transparent" style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.4)' }}>
                            into reality.
                        </span>
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-semibold text-sm tracking-wider hover:opacity-90 transition-opacity duration-300 shadow-[0_0_40px_-8px_rgba(99,102,241,0.6)]">
                            Start a Project
                        </button>
                        <button className="px-8 py-4 rounded-full border border-white/20 text-white font-semibold text-sm tracking-wider hover:bg-white/5 transition-colors duration-300">
                            Explore Our Work
                        </button>
                    </div>
                </ScrollSection>
            </section>

        </div>
    );
};

export default AboutPage;