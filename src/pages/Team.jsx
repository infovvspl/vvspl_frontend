import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../components/Navbar';
import FoundingMembers from '../components/home/Founders';

gsap.registerPlugin(ScrollTrigger);

const teamMembers = [
    { name: "Alex Mercer", role: "Founder / CEO", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800", size: "large" },
    { name: "Priya Nair", role: "CTO", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800", size: "medium" },
    { name: "Jordan Ellis", role: "Design Director", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800", size: "medium" },
    { name: "Sam Okafor", role: "Engineering Lead", img: "https://images.unsplash.com/photo-1526510747491-58f928ec870f?q=80&w=800", size: "small" },
    { name: "Elena Rossi", role: "Product Strategist", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800", size: "small" },
    { name: "Liam Chen", role: "Fullstack Dev", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800", size: "small" },
];

const TeamPage = () => {
    const mainRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero Animation
            const heroTl = gsap.timeline();
            heroTl.from('.team-title span', { 
                y: 100, 
                opacity: 0, 
                skewY: 5, 
                stagger: 0.2, 
                duration: 1.2, 
                ease: 'power4.out' 
            })
            .from('.team-subtitle', { opacity: 0, y: 20 }, "-=0.8");

            // Card Reveal on Scroll
            gsap.from('.team-card', {
                y: 60,
                opacity: 0,
                scale: 0.95,
                stagger: 0.1,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.team-grid',
                    start: 'top 80%',
                }
            });
        }, mainRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={mainRef} className="bg-white text-zinc-900 font-sans selection:bg-indigo-500 selection:text-white">
            <Navbar />

            {/* ─── 1. HERO SECTION (Matches About Page Vibe) ─── */}
            <section className="bg-black relative py-22 md:py-42 flex flex-col items-center justify-center px-6">
                <div className="hero-content relative z-20 text-center">
                    <h1 className="text-[8vw] leading-none font-black tracking-tighter uppercase italic text-white">
                        The <span className="text-transparent" style={{ WebkitTextStroke: '2px white' }}>Leadership.</span>
                    </h1>
                    <div className="hero-line my-8 h-[3px] w-32 mx-auto rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500" />
                    {/* Small Description */}
                    {/* <p className="mt-6 text-lg md:text-xl text-white/80 font-light tracking-wide">
                         A collective of specialists obsessing over the details so you don't have to. We are engineers, designers, and dreamers.
                    </p> */}
                </div>

                {/* The Floating Video Frame */}
                {/* <div className="hero-video-box absolute inset-0 z-10 w-full h-full overflow-hidden">
                    <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-70">
                        <source src="https://www.pexels.com/download/video/29470982/" type="video/mp4" />
                    </video>

                    <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black" />
                </div> */}

            </section>

            <FoundingMembers  isPage={true} />

            {/* ─── 2. THE TEAM GRID (Bento Style) ─── */}
            {/* <section className="team-grid max-w-[1400px] mx-auto px-6 py-32">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[300px] md:auto-rows-[400px]">
                    {teamMembers.map((member, i) => {
                        const sizeClasses = {
                            large: "md:col-span-2 md:row-span-2",
                            medium: "md:col-span-2 md:row-span-1",
                            small: "md:col-span-1 md:row-span-1"
                        };

                        return (
                            <div key={i} className={`team-card group relative rounded-[2rem] overflow-hidden bg-zinc-100 ${sizeClasses[member.size]}`}>
                                <img 
                                    src={member.img} 
                                    alt={member.name} 
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out"
                                />
                                
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

                                <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <h3 className="text-white text-2xl md:text-3xl font-black mb-1">{member.name}</h3>
                                    <p className="text-indigo-400 text-xs tracking-widest uppercase font-bold">{member.role}</p>
                                    
                                    <div className="mt-4 flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                                        <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors cursor-pointer">
                                            <span className="text-[10px]">Li</span>
                                        </div>
                                        <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors cursor-pointer">
                                            <span className="text-[10px]">Tw</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section> */}

            {/* ─── 3. DEPARTMENTS SECTION (Ticker) ─── */}
            {/* <div className="py-20 border-y border-zinc-100 overflow-hidden">
                <div className="flex gap-20 whitespace-nowrap animate-pulse">
                    {[1, 2, 3].map((n) => (
                        <div key={n} className="flex gap-20 text-4xl md:text-6xl font-black text-zinc-100 uppercase italic">
                            <span>Backend Development</span>
                            <span className="text-indigo-600">/</span>
                            <span>UX Research</span>
                            <span className="text-indigo-600">/</span>
                            <span>Cloud Architecture</span>
                            <span className="text-indigo-600">/</span>
                        </div>
                    ))}
                </div>
            </div> */}

            {/* ─── 4. JOIN THE CREW CTA ─── */}
            {/* <section className="py-32 px-6 text-center">
                <div className="max-w-3xl mx-auto p-12 md:p-24 rounded-[3rem] bg-zinc-900 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/20 rounded-full blur-[80px]" />
                    <h2 className="text-4xl md:text-6xl font-black mb-8 relative z-10">We're always looking for <span className="text-indigo-400">rare</span> talent.</h2>
                    <button className="relative z-10 px-10 py-4 bg-white text-zinc-900 rounded-full font-bold uppercase tracking-tighter hover:bg-indigo-500 hover:text-white transition-all">
                        View Openings
                    </button>
                </div>
            </section> */}
        </div>
    );
};

export default TeamPage;