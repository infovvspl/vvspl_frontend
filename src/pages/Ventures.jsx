import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { VENTURES } from '../data/venturesData';

gsap.registerPlugin(ScrollTrigger);

/* ─────────────────────────────────────────
   VENTURES DATA
───────────────────────────────────────── */
// const VENTURES = [
//     {
//         id: '01',
//         title: 'Trade & Transport',
//         short: 'Global Logistics',
//         icon: '🚢',
//         accent: 'from-cyan-500 to-blue-600',
//         glow: 'bg-cyan-500/15',
//         border: 'hover:border-cyan-500/40',
//         tag: 'Connectivity',
//         description:
//             'Building intelligent trade corridors and next-generation logistics networks that move goods faster, smarter, and more transparently. From freight tech platforms to cross-border trade infrastructure, were engineering the arteries of tomorrows global economy.',
//         features: ['Freight Tech Platforms', 'Cross-border Trade', 'Supply Chain Visibility', 'Port & Warehouse Ops', 'Fleet Management', 'Trade Finance Integration'],
//         img: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200',
//     },
//     {
//         id: '02',
//         title: 'Land Acquisition',
//         short: 'Real Estate & Land',
//         icon: '🏔️',
//         accent: 'from-stone-400 to-amber-600',
//         glow: 'bg-amber-600/15',
//         border: 'hover:border-amber-500/40',
//         tag: 'Foundation',
//         description:
//             'Strategic land acquisition and development across high-growth corridors. We identify, evaluate, and secure land assets for industrial, agricultural, and infrastructure purposes — backed by geospatial intelligence and rigorous due diligence.',
//         features: ['Geospatial Analysis', 'Due Diligence & Valuation', 'Regulatory Clearances', 'Industrial Zones', 'Agricultural Land', 'Infrastructure Corridors'],
//         img: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1200',
//     },
//     {
//         id: '03',
//         title: 'Mining & Minerals',
//         short: 'Resource Extraction',
//         icon: '⛏️',
//         accent: 'from-orange-500 to-red-600',
//         glow: 'bg-orange-500/15',
//         border: 'hover:border-orange-500/40',
//         tag: 'Resources',
//         description:
//             'Responsible exploration and extraction of critical minerals powering the modern world — from rare earths and lithium to industrial aggregates. We integrate digital surveying, ESG compliance frameworks, and community-first operating models.',
//         features: ['Mineral Exploration', 'ESG-Compliant Ops', 'Critical Minerals', 'Digital Surveying', 'Processing & Refining', 'Community Engagement'],
//         img: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1200',
//     },
//     {
//         id: '04',
//         title: 'Power & Energy',
//         short: 'Clean Energy',
//         icon: '⚡',
//         accent: 'from-yellow-400 to-orange-500',
//         glow: 'bg-yellow-500/15',
//         border: 'hover:border-yellow-400/40',
//         tag: 'Sustainability',
//         description:
//             'Developing scalable energy infrastructure for a decarbonised future — solar farms, wind projects, battery storage systems, and smart grid solutions. We partner with governments and enterprises to accelerate the energy transition at scale.',
//         features: ['Solar & Wind Projects', 'Battery Storage Systems', 'Smart Grid Solutions', 'Energy Trading', 'Carbon Credits', 'EPC Partnerships'],
//         img: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1200',
//     },
//     {
//         id: '05',
//         title: 'Organic Farming',
//         short: 'Agri & Food Tech',
//         icon: '🌿',
//         accent: 'from-emerald-400 to-green-600',
//         glow: 'bg-emerald-500/15',
//         border: 'hover:border-emerald-500/40',
//         tag: 'Regenerative',
//         description:
//             'Cultivating the future of food through regenerative organic agriculture — from large-scale certified organic farms to precision agri-tech platforms that optimise yield, water use, and soil health. We grow what the planet needs, the way it deserves.',
//         features: ['Certified Organic Farms', 'Precision Agriculture', 'Soil Health Monitoring', 'Water Optimisation', 'Farm-to-Market Supply', 'Agri-Tech Integration'],
//         img: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1200',
//     },
// ];

/* ─────────────────────────────────────────
   SCROLL FADE-UP WRAPPER
───────────────────────────────────────── */
const ScrollSection = ({ children, className = '', delay = 0 }) => {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        const ctx = gsap.context(() => {
            gsap.fromTo(el,
                { y: 60, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 1.1, ease: 'power4.out', delay,
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 85%',
                        toggleActions: 'play none none none',
                    },
                }
            );
        });
        return () => ctx.revert();
    }, [delay]);

    return <div ref={ref} className={className}>{children}</div>;
};

/* ─────────────────────────────────────────
   HERO BANNER
───────────────────────────────────────── */
const HeroBanner = () => {
    const heroRef = useRef(null);
    const titleRef = useRef(null);
    const subRef = useRef(null);
    const lineRef = useRef(null);
    const scrollRef = useRef(null);
    const tagsRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

            tl.fromTo(
                titleRef.current.querySelectorAll('.word'),
                { y: 90, opacity: 0, skewY: 5 },
                { y: 0, opacity: 1, skewY: 0, duration: 1.2, stagger: 0.11 }
            )
                .fromTo(lineRef.current,
                    { scaleX: 0, transformOrigin: 'left center' },
                    { scaleX: 1, duration: 0.8, ease: 'power3.inOut' }, '-=0.6'
                )
                .fromTo(subRef.current,
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.9 }, '-=0.5'
                )
                .fromTo(tagsRef.current.children,
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.6, stagger: 0.09 }, '-=0.4'
                )
                .fromTo(scrollRef.current,
                    { opacity: 0, y: -10 },
                    { opacity: 1, y: 0, duration: 0.5 }, '-=0.2'
                );

            gsap.to(scrollRef.current, {
                y: 10, duration: 1.4, ease: 'sine.inOut',
                repeat: -1, yoyo: true, delay: 2.5,
            });

            gsap.to('.fv-hero-bg', {
                yPercent: 20, ease: 'none',
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
            {/* BG */}
            <div className="absolute inset-0 z-0">
                <img
                    className="fv-hero-bg w-full h-full object-cover opacity-20"
                    src="https://images.unsplash.com/photo-1508193638397-1c4234db14d8?q=80&w=2070"
                    alt=""
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black" />
            </div>

            {/* Glows */}
            <div className="absolute top-1/3 -left-40 w-[600px] h-[600px] bg-emerald-700/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
                <p className="text-[10px] md:text-xs tracking-[0.5em] uppercase font-semibold bg-gradient-to-r from-emerald-400 to-amber-400 bg-clip-text text-transparent mb-6">
                    Beyond the Digital
                </p>

                <h1
                    ref={titleRef}
                    className="text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] font-black leading-none tracking-tight"
                >
                    {['Future'].map((w) => (
                        <span key={w} className="word inline-block mr-[0.22em]">{w}</span>
                    ))}
                    <span
                        className="word inline-block text-transparent"
                        style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.38)' }}
                    >
                        Ventures.
                    </span>
                </h1>

                <div
                    ref={lineRef}
                    className="my-7 h-[3px] w-32 mx-auto rounded-full bg-gradient-to-r from-emerald-500 to-amber-500"
                />

                <p
                    ref={subRef}
                    className="text-base md:text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto mb-10"
                >
                    Where technology meets the tangible. Our future ventures extend into
                    the physical world — building the industries that will define the next century.
                </p>

                {/* Venture tags */}
                <div ref={tagsRef} className="flex flex-wrap justify-center gap-3">
                    {VENTURES.map((v) => (
                        <span
                            key={v.id}
                            className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-300 tracking-wider uppercase backdrop-blur-sm"
                        >
                            {v.short}
                        </span>
                    ))}
                </div>
            </div>

            {/* Scroll indicator */}
            <div
                ref={scrollRef}
                className="absolute bottom-10 z-10 flex flex-col items-center gap-2 opacity-50"
            >
                <span className="text-[10px] tracking-[0.3em] uppercase text-zinc-400">Scroll</span>
                <div className="w-[1px] h-10 bg-gradient-to-b from-emerald-400 to-transparent" />
            </div>
        </section>
    );
};

/* ─────────────────────────────────────────
   VISION STRIP
───────────────────────────────────────── */
const VisionStrip = () => {
    const ref = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ref.current.querySelectorAll('.vstrip-item'),
                { y: 30, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 0.9, ease: 'power4.out', stagger: 0.12,
                    scrollTrigger: {
                        trigger: ref.current,
                        start: 'top 88%',
                        toggleActions: 'play none none none',
                    },
                }
            );
        }, ref);
        return () => ctx.revert();
    }, []);

    const items = [
        { label: 'Long-horizon', sub: 'thinking' },
        { label: 'Real-world', sub: 'assets' },
        { label: 'ESG-first', sub: 'operating model' },
        { label: 'Global', sub: 'reach' },
    ];

    return (
        <section className="py-20 border-y border-zinc-200">
            <div ref={ref} className="max-w-[1300px] mx-auto px-6 md:px-12 lg:px-20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {items.map((item) => (
                        <div key={item.label} className="vstrip-item flex flex-col items-center text-center gap-1 p-8 rounded-2xl border border-zinc-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                            <span className="text-2xl md:text-3xl font-black bg-gradient-to-r from-emerald-600 to-amber-600 bg-clip-text text-transparent">
                                {item.label}
                            </span>
                            <span className="text-xs text-zinc-500 tracking-widest uppercase font-bold">{item.sub}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

/* ─────────────────────────────────────────
   VENTURE CARD (alternating layout)
───────────────────────────────────────── */
const VentureCard = ({ venture, index }) => {
    const ref = useRef(null);
    const imgRef = useRef(null);
    const textRef = useRef(null);
    const isEven = index % 2 === 0;

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(textRef.current,
                { x: isEven ? -50 : 50, opacity: 0 },
                {
                    x: 0, opacity: 1, duration: 1.1, ease: 'power4.out',
                    scrollTrigger: {
                        trigger: ref.current,
                        start: 'top 80%',
                        toggleActions: 'play none none none',
                    },
                }
            );
            gsap.fromTo(imgRef.current,
                { x: isEven ? 50 : -50, opacity: 0, scale: 0.95 },
                {
                    x: 0, opacity: 1, scale: 1, duration: 1.1, ease: 'power4.out', delay: 0.15,
                    scrollTrigger: {
                        trigger: ref.current,
                        start: 'top 80%',
                        toggleActions: 'play none none none',
                    },
                }
            );
        }, ref);
        return () => ctx.revert();
    }, [isEven]);

    return (
        <div ref={ref} className="relative py-16 md:py-20">
            <div className="absolute inset-x-0 top-0 h-[1px] bg-zinc-200" />

            <div className="max-w-[1300px] mx-auto px-6 md:px-12 lg:px-20">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center`}>

                    {/* TEXT */}
                    <div
                        ref={textRef}
                        className={`flex flex-col ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                    >
                        {/* Number + tag */}
                        <div className="flex items-center gap-4 mb-6">
                            <span className={`text-5xl font-black bg-gradient-to-r ${venture.accent} bg-clip-text text-transparent opacity-20 leading-none`}>
                                {venture.id}
                            </span>
                            <span className={`px-3 py-1 rounded-full text-[10px] tracking-[0.3em] uppercase font-bold bg-gradient-to-r ${venture.accent} bg-clip-text text-transparent border border-zinc-200`}>
                                {venture.tag}
                            </span>
                        </div>

                        <div className="flex items-center gap-3 mb-3">
                            <span className="text-3xl">{venture.icon}</span>
                            <p className={`text-[10px] tracking-[0.5em] uppercase font-bold bg-gradient-to-r ${venture.accent} bg-clip-text text-transparent`}>
                                {venture.short}
                            </p>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-black leading-[1.1] tracking-tight mb-5 text-zinc-900">
                            {venture.title}
                        </h2>

                        <div className={`w-16 h-[3px] rounded-full bg-gradient-to-r ${venture.accent} mb-6`} />

                        <p className="text-zinc-600 font-medium text-sm md:text-base leading-relaxed mb-8">
                            {venture.description}
                        </p>

                        {/* Feature pills */}
                        <div className="flex flex-wrap gap-2 mb-8">
                            {venture.features.map((f) => (
                                <span
                                    key={f.name}
                                    className="px-3 py-1.5 rounded-full border border-zinc-200 bg-white text-xs text-zinc-600 font-medium shadow-sm"
                                >
                                    {f.name}
                                </span>
                            ))}
                        </div>

                        {/* "Coming Soon" badge */}
                        <div className="self-start flex items-center gap-3">
                            <Link to={`/ventures/${venture.id}`}>
                                <button className={`px-7 py-3.5 rounded-full bg-gradient-to-r ${venture.accent} text-white font-semibold text-sm tracking-wider hover:opacity-85 transition-opacity duration-300 shadow-lg`}>
                                    Express Interest →
                                </button>
                            </Link>
                            {/* <span className="px-4 py-3.5 rounded-full border border-zinc-200 text-xs text-zinc-500 tracking-widest uppercase font-bold">
                                Coming Soon
                            </span> */}
                        </div>
                    </div>

                    {/* IMAGE */}
                    <div
                        ref={imgRef}
                        className={`relative ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
                    >
                        <div className={`absolute -inset-4 ${venture.glow} rounded-3xl blur-3xl opacity-40`} />

                        <div className="relative rounded-3xl overflow-hidden border border-zinc-200 shadow-xl">
                            <img
                                src={venture.img}
                                alt={venture.title}
                                className="w-full h-[320px] md:h-[420px] object-cover"
                            />
                            <div className={`absolute inset-0 bg-gradient-to-br ${venture.accent} opacity-10`} />
                        </div>

                        {/* Floating badge */}
                        <div className={`absolute -bottom-5 ${isEven ? '-right-4' : '-left-4'} hidden md:flex items-center gap-3 bg-white/90 backdrop-blur-md border border-zinc-200 rounded-2xl px-5 py-3 shadow-lg`}>
                            <span className="text-2xl">{venture.icon}</span>
                            <div>
                                <p className={`text-[10px] tracking-widest uppercase bg-gradient-to-r ${venture.accent} bg-clip-text text-transparent font-bold`}>
                                    {venture.tag}
                                </p>
                                <p className="text-zinc-900 text-sm font-black">{venture.short}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

/* ─────────────────────────────────────────
   OVERVIEW GRID
───────────────────────────────────────── */
const OverviewGrid = () => {
    const ref = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ref.current.querySelectorAll('.ov-card'),
                { y: 40, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 0.9, ease: 'power4.out', stagger: 0.1,
                    scrollTrigger: {
                        trigger: ref.current,
                        start: 'top 85%',
                        toggleActions: 'play none none none',
                    },
                }
            );
        }, ref);
        return () => ctx.revert();
    }, []);

    return (
        <section className="py-24 border-y border-zinc-200">
            <div className="max-w-[1300px] mx-auto px-6 md:px-12 lg:px-20">
                <ScrollSection className="text-center mb-14">
                    <p className="text-[10px] md:text-xs tracking-[0.5em] uppercase font-bold bg-gradient-to-r from-emerald-600 to-amber-600 bg-clip-text text-transparent mb-4">
                        Our Ventures
                    </p>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900">
                        Building the Physical World
                    </h2>
                </ScrollSection>

                <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {VENTURES.map((v) => (
                        <div
                            key={v.id}
                            className={`ov-card group flex flex-col items-center text-center gap-3 p-6 rounded-2xl border border-zinc-200 bg-white shadow-sm ${v.border} hover:bg-zinc-50 transition-all duration-500 cursor-default hover:shadow-md`}
                        >
                            <span className="text-3xl">{v.icon}</span>
                            <span className={`text-xs font-bold bg-gradient-to-r ${v.accent} bg-clip-text text-transparent tracking-wide leading-snug`}>
                                {v.short}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

/* ─────────────────────────────────────────
   CTA
───────────────────────────────────────── */
const CTASection = () => (
    <section className="relative py-20 md:py-24 overflow-hidden bg-zinc-900">
        <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/40 via-zinc-900 to-zinc-900" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-600/8 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-amber-500/8 rounded-full blur-2xl" />
        </div>
        <ScrollSection className="relative z-10 text-center px-6 max-w-3xl mx-auto">
            <p className="text-[10px] md:text-xs tracking-[0.5em] uppercase font-semibold bg-gradient-to-r from-emerald-400 to-amber-400 bg-clip-text text-transparent mb-6">
                Invest in What's Next
            </p>
            <h2 className="text-4xl md:text-6xl font-black leading-tight tracking-tight mb-4 text-white">
                Partner with us to{' '}
                <span
                    className="text-transparent"
                    style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.38)' }}
                >
                    shape industries.
                </span>
            </h2>
            <p className="text-zinc-400 text-base md:text-lg mb-10 max-w-xl mx-auto">
                We're actively seeking visionary partners, investors, and operators who want to co-build
                the industries of tomorrow — from the ground up.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">

                <Link
                    to="/contact"
                    className="w-full sm:w-auto px-8 py-4 text-center rounded-full 
               bg-gradient-to-r from-emerald-600 to-amber-500 
               text-white font-semibold text-sm tracking-wider 
               hover:opacity-90 transition-opacity duration-300 
               shadow-[0_0_40px_-8px_rgba(16,185,129,0.5)]"
                >
                    Contact us now
                </Link>

                <Link
                    to="/services"
                    className="w-full sm:w-auto px-8 py-4 text-center rounded-full 
               border border-white/20 text-white 
               font-semibold text-sm tracking-wider 
               hover:bg-white/5 transition-colors duration-300"
                >
                    Explore services
                </Link>

            </div>

        </ScrollSection>
    </section>
);

/* ─────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────── */
const FutureVenturesPage = () => {
    return (
        <div className="bg-zinc-50 text-zinc-900 font-sans">
            <Navbar />

            {/* 1 ── HERO */}
            <HeroBanner />

            {/* 2 ── PHILOSOPHY STRIP */}
            {/* <VisionStrip /> */}

            {/* 3 ── OVERVIEW GRID */}
            {/* <OverviewGrid /> */}

            {/* 4 ── INDIVIDUAL VENTURE SECTIONS */}
            {VENTURES.map((venture, index) => (
                <VentureCard key={venture.id} venture={venture} index={index} />
            ))}

            {/* 5 ── CTA */}
            <CTASection />

        </div>
    );
};

export default FutureVenturesPage;