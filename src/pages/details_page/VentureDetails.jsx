import React, { useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import Navbar from '../../components/Navbar';

// Reuse your VENTURES data here or import it from a shared file
const VENTURES = [
    {
        id: '01',
        title: 'Trade & Transport',
        short: 'Global Logistics',
        icon: '🚢',
        accent: 'from-cyan-500 to-blue-600',
        glow: 'bg-cyan-500/15',
        border: 'hover:border-cyan-500/40',
        tag: 'Connectivity',
        description:
            'Building intelligent trade corridors and next-generation logistics networks that move goods faster, smarter, and more transparently. From freight tech platforms to cross-border trade infrastructure, were engineering the arteries of tomorrows global economy.',
        features: ['Freight Tech Platforms', 'Cross-border Trade', 'Supply Chain Visibility', 'Port & Warehouse Ops', 'Fleet Management', 'Trade Finance Integration'],
        img: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200',
    },
    {
        id: '02',
        title: 'Land Acquisition',
        short: 'Real Estate & Land',
        icon: '🏔️',
        accent: 'from-stone-400 to-amber-600',
        glow: 'bg-amber-600/15',
        border: 'hover:border-amber-500/40',
        tag: 'Foundation',
        description:
            'Strategic land acquisition and development across high-growth corridors. We identify, evaluate, and secure land assets for industrial, agricultural, and infrastructure purposes — backed by geospatial intelligence and rigorous due diligence.',
        features: ['Geospatial Analysis', 'Due Diligence & Valuation', 'Regulatory Clearances', 'Industrial Zones', 'Agricultural Land', 'Infrastructure Corridors'],
        img: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1200',
    },
    {
        id: '03',
        title: 'Mining & Minerals',
        short: 'Resource Extraction',
        icon: '⛏️',
        accent: 'from-orange-500 to-red-600',
        glow: 'bg-orange-500/15',
        border: 'hover:border-orange-500/40',
        tag: 'Resources',
        description:
            'Responsible exploration and extraction of critical minerals powering the modern world — from rare earths and lithium to industrial aggregates. We integrate digital surveying, ESG compliance frameworks, and community-first operating models.',
        features: ['Mineral Exploration', 'ESG-Compliant Ops', 'Critical Minerals', 'Digital Surveying', 'Processing & Refining', 'Community Engagement'],
        img: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1200',
    },
    {
        id: '04',
        title: 'Power & Energy',
        short: 'Clean Energy',
        icon: '⚡',
        accent: 'from-yellow-400 to-orange-500',
        glow: 'bg-yellow-500/15',
        border: 'hover:border-yellow-400/40',
        tag: 'Sustainability',
        description:
            'Developing scalable energy infrastructure for a decarbonised future — solar farms, wind projects, battery storage systems, and smart grid solutions. We partner with governments and enterprises to accelerate the energy transition at scale.',
        features: ['Solar & Wind Projects', 'Battery Storage Systems', 'Smart Grid Solutions', 'Energy Trading', 'Carbon Credits', 'EPC Partnerships'],
        img: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1200',
    },
    {
        id: '05',
        title: 'Organic Farming',
        short: 'Agri & Food Tech',
        icon: '🌿',
        accent: 'from-emerald-400 to-green-600',
        glow: 'bg-emerald-500/15',
        border: 'hover:border-emerald-500/40',
        tag: 'Regenerative',
        description:
            'Cultivating the future of food through regenerative organic agriculture — from large-scale certified organic farms to precision agri-tech platforms that optimise yield, water use, and soil health. We grow what the planet needs, the way it deserves.',
        features: ['Certified Organic Farms', 'Precision Agriculture', 'Soil Health Monitoring', 'Water Optimisation', 'Farm-to-Market Supply', 'Agri-Tech Integration'],
        img: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1200',
    },
];

const VentureDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const venture = VENTURES.find(v => v.id === id);

    const containerRef = useRef(null);
    const heroContentRef = useRef(null);

    // Redirect if venture not found
    useEffect(() => {
        if (!venture) navigate('/future-ventures');
    }, [venture, navigate]);

    useEffect(() => {
        if (!venture) return;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

            tl.fromTo('.hero-img',
                { scale: 1.2, opacity: 0 },
                { scale: 1, opacity: 0.4, duration: 2 }
            )
                .fromTo('.animate-up',
                    { y: 60, opacity: 0 },
                    { y: 0, opacity: 1, duration: 1.2, stagger: 0.1 },
                    "-=1.5"
                );
        }, containerRef);

        return () => ctx.revert();
    }, [venture]);

    if (!venture) return null;

    return (
        <div ref={containerRef} className="bg-white text-zinc-900 min-h-screen font-sans overflow-x-hidden">
            <Navbar />

            {/* ── HERO SECTION ── */}
            <section className="relative h-[70vh] md:h-[85vh] flex items-center justify-center bg-black overflow-hidden">
                <img
                    src={venture.img}
                    className="hero-img absolute inset-0 w-full h-full object-cover"
                    alt={venture.title}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-white" />

                <div className="relative z-10 text-center px-6 max-w-5xl">
                    <span className="animate-up inline-block px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white text-[10px] tracking-[0.3em] uppercase font-bold mb-6">
                        {venture.tag}
                    </span>
                    <h1 className="animate-up text-5xl md:text-8xl font-black text-white leading-tight tracking-tighter mb-4">
                        {venture.title}
                    </h1>
                    <p className="animate-up text-zinc-300 text-lg md:text-xl max-w-2xl mx-auto font-medium">
                        {venture.short}
                    </p>
                </div>
            </section>

            {/* ── CONTENT BODY ── */}
            <section className="relative -mt-20 z-20 pb-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                        {/* Left: Deep Dive */}
                        <div className="lg:col-span-8 bg-white p-8 md:p-16 rounded-[2rem] shadow-xl border border-zinc-100">
                            <h3 className={`text-sm font-bold tracking-[0.3em] uppercase bg-gradient-to-r ${venture.accent} bg-clip-text text-transparent mb-8`}>
                                Project Overview
                            </h3>
                            <p className="text-xl md:text-2xl text-zinc-800 leading-relaxed mb-10 font-medium">
                                {venture.description}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                                <div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100">
                                    <h4 className="font-black text-zinc-900 mb-4 uppercase tracking-wider text-xs">Strategic Impact</h4>
                                    <p className="text-zinc-600 text-sm leading-relaxed">
                                        Our approach to {venture.title.toLowerCase()} focuses on sustainable growth and long-term asset value, leveraging proprietary technology to outperform traditional market benchmarks.
                                    </p>
                                </div>
                                <div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100">
                                    <h4 className="font-black text-zinc-900 mb-4 uppercase tracking-wider text-xs">Market Alignment</h4>
                                    <p className="text-zinc-600 text-sm leading-relaxed">
                                        Aligned with global {venture.tag} standards, we ensure that every phase of development adheres to strict ESG compliance and regulatory frameworks.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right: Features Sidebar */}
                        <div className="lg:col-span-4 space-y-6">
                            <div className={`p-8 rounded-[2rem] bg-gradient-to-br ${venture.accent} text-white shadow-lg`}>
                                <h3 className="text-xs font-bold tracking-widest uppercase mb-6 opacity-80">Core Capabilities</h3>
                                <ul className="space-y-4">
                                    {venture.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3 font-bold text-sm">
                                            <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="p-8 rounded-[2rem] bg-zinc-900 text-white shadow-lg">
                                <h3 className="text-xs font-bold tracking-widest uppercase mb-4 text-emerald-400">Venture Status</h3>
                                <p className="text-2xl font-black mb-6">Phase 1: Pre-Launch</p>
                                <button className="w-full py-4 rounded-xl bg-white text-black font-bold text-sm hover:bg-zinc-200 transition-colors">
                                    Request Full Pitch Deck
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default VentureDetails;