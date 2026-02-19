import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

gsap.registerPlugin(ScrollTrigger);

const BLOGS = [
    {
        id: 1,
        title: 'The Future of Freight: AI in Global Logistics',
        category: 'Connectivity',
        date: 'Oct 24, 2025',
        readTime: '6 min read',
        excerpt: 'How autonomous corridors and predictive analytics are reshaping the movement of goods across borders.',
        img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800',
        accent: 'from-cyan-500 to-blue-600'
    },
    {
        id: 2,
        title: 'Regenerative Farming: Beyond Organic',
        category: 'Regenerative',
        date: 'Oct 12, 2025',
        readTime: '8 min read',
        excerpt: 'Why the next generation of agriculture is focused on soil sequestration and water restoration.',
        img: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?q=80&w=800',
        accent: 'from-emerald-400 to-green-600'
    },
    {
        id: 3,
        title: 'Critical Minerals and the Energy Transition',
        category: 'Resources',
        date: 'Sept 28, 2025',
        readTime: '10 min read',
        excerpt: 'Exploring the ethical extraction of Lithium and Cobalt required for a decarbonized power grid.',
        img: 'https://images.unsplash.com/photo-1600363503477-a8d1d6d57dfc?q=80&w=1122&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        accent: 'from-orange-500 to-red-600'
    }
];

const BlogsPage = () => {
    const headerRef = useRef(null);
    const gridRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero Animation
            gsap.from(".blog-hero-content > *", {
                y: 40,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power4.out"
            });

            // Card Reveal Animation
            gsap.from(".blog-card", {
                scrollTrigger: {
                    trigger: gridRef.current,
                    start: "top 80%",
                },
                y: 60,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: "power3.out"
            });
        });
        return () => ctx.revert();
    }, []);

    return (
        <div className="bg-zinc-50 min-h-screen font-sans overflow-x-hidden">
            <Navbar />

            {/* ── HERO BANNER ── */}
            <section className="relative pt-40 pb-24 flex items-center justify-center bg-black text-white overflow-hidden px-6">

                {/* Background Layer */}
                <div className="absolute inset-0 z-0">
                    {/* Optional glow / gradient */}
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-5xl w-full text-center">

                    <p className="text-[10px] sm:text-xs tracking-[0.5em] uppercase font-bold text-emerald-400 mb-6">
                        Insights & Intelligence
                    </p>

                    <h1 className="text-4xl sm:text-6xl md:text-8xl font-black leading-tight tracking-tighter mb-8">
                        The Future <br />
                        <span className="text-transparent" style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.4)' }}>
                            Perspective.
                        </span>
                    </h1>
                    <div className="mx-auto h-1 w-20 sm:w-24 bg-gradient-to-r from-emerald-500 to-amber-500 rounded-full" />
                </div>
            </section>


            {/* ── BLOGS GRID ── */}
            <section className="relative py-32">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="px-4 sm:px-6 lg:px-12">
                        <div ref={gridRef} className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2  xl:grid-cols-3">
                            {BLOGS.map((post) => (
                                <div key={post.id} className="group flex flex-col bg-white rounded-3xl border border-zinc-200 overflow-hidden shadow-sm transition-all duration-500 md:hover:shadow-2xl md:hover:-translate-y-2">
                                    {/* Image */}
                                    <div className="relative w-full h-52 sm:h-60 md:h-64 overflow-hidden">
                                        <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-110"/>
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold tracking-widest uppercase bg-white/90 backdrop-blur-md text-zinc-900 shadow-sm">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex flex-col flex-grow p-5 sm:p-6 lg:p-8">
                                        {/* Meta */}
                                        <div className="flex items-center gap-3 text-[10px] sm:text-xs text-zinc-400 mb-3 sm:mb-4 font-bold tracking-wide">
                                            <span>{post.date}</span>
                                            <span className="w-1 h-1 rounded-full bg-zinc-300" />
                                            <span>{post.readTime}</span>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-zinc-900 leading-tight mb-3 sm:mb-4 transition-colors md:group-hover:text-emerald-600">
                                            {post.title}
                                        </h3>

                                        {/* Excerpt */}
                                        <p className="text-zinc-500 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 line-clamp-3 font-medium">
                                            {post.excerpt}
                                        </p>

                                        {/* Footer */}
                                        <div className="flex items-center justify-between mt-auto pt-5 border-t border-zinc-100">
                                            <Link
                                                to={`/blogs/${post.id}`}
                                                className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] flex items-center gap-2 group/btn"
                                            >
                                                Read Article
                                                <span className="transition-transform md:group-hover/btn:translate-x-1">
                                                    →
                                                </span>
                                            </Link>

                                            <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r ${post.accent} opacity-20`} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>


                    {/* Newsletter / CTA */}
                    {/* <div className="mt-24 p-8 md:p-16 rounded-[3rem] bg-zinc-900 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight">Stay ahead of the curve.</h2>
                                <p className="text-zinc-400 font-medium">Weekly insights on the industries defining the next century.</p>
                            </div>
                            <div className="flex w-full md:w-auto gap-2">
                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    className="bg-zinc-800 border-none rounded-full px-6 py-4 text-sm w-full md:w-64 focus:ring-2 focus:ring-emerald-500 transition-all outline-none"
                                />
                                <button className="bg-white text-black px-8 py-4 rounded-full font-bold text-sm hover:bg-emerald-400 transition-colors">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div> */}
                </div>
            </section>
        </div>
    );
};

export default BlogsPage;