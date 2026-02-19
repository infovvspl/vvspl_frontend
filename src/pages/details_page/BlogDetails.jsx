import React, { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../../components/Navbar';

gsap.registerPlugin(ScrollTrigger);

const BlogDetails = () => {
    const { id } = useParams();
    const articleRef = useRef(null);
    const progressRef = useRef(null);

    // In a real app, fetch blog by ID. Using dummy data for now.
    const post = {
        title: 'The Future of Freight: AI in Global Logistics',
        category: 'Connectivity',
        date: 'October 24, 2025',
        author: 'Marcus Chen',
        readTime: '6 min read',
        img: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200',
        accent: 'from-cyan-500 to-blue-600'
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Reading Progress Bar
            gsap.to(progressRef.current, {
                scaleX: 1,
                ease: 'none',
                scrollTrigger: {
                    trigger: articleRef.current,
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: 0.3,
                }
            });

            // Hero Entrance
            const tl = gsap.timeline();
            tl.from('.post-header > *', {
                y: 30,
                opacity: 0,
                stagger: 0.1,
                duration: 1,
                ease: 'power4.out'
            });
        }, articleRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={articleRef} className="bg-white min-h-screen font-sans">
            <Navbar />

            {/* Reading Progress Bar */}
            <div 
                ref={progressRef}
                className="fixed top-0 left-0 h-1.5 bg-emerald-500 z-[100] w-full origin-left scale-x-0"
            />

            {/* ── HERO BANNER ── */}
            <header className="relative w-full h-[60vh] md:h-[75vh] flex items-end pb-16 bg-zinc-900 overflow-hidden">
                <img 
                    src={post.img} 
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                    alt=""
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/40" />
                
                <div className="relative z-10 max-w-4xl mx-auto px-6 post-header w-full">
                    <Link to="/blogs" className="text-xs font-bold tracking-[0.3em] uppercase text-emerald-400 mb-6 flex items-center gap-2 hover:translate-x-[-4px] transition-transform">
                        ← Back to Perspective
                    </Link>
                    <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-white border border-zinc-200 mb-6 shadow-sm`}>
                        {post.category}
                    </span>
                    <h1 className="text-4xl md:text-7xl font-black text-zinc-900 leading-[1.1] tracking-tight mb-6">
                        {post.title}
                    </h1>
                    <div className="flex items-center gap-6 text-sm text-zinc-500 font-medium">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-zinc-200 overflow-hidden border border-zinc-300" />
                            <span>{post.author}</span>
                        </div>
                        <span className="w-1 h-1 rounded-full bg-zinc-300" />
                        <span>{post.date}</span>
                    </div>
                </div>
            </header>

            {/* ── ARTICLE CONTENT ── */}
            <main className="max-w-4xl mx-auto px-6 py-20">
                <div className="prose prose-zinc prose-lg lg:prose-xl max-w-none prose-headings:font-black prose-headings:tracking-tight prose-p:text-zinc-600 prose-p:leading-relaxed prose-strong:text-zinc-900 prose-blockquote:border-emerald-500 prose-blockquote:bg-zinc-50 prose-blockquote:p-8 prose-blockquote:rounded-2xl prose-blockquote:not-italic prose-blockquote:font-bold">
                    
                    <p className="text-xl md:text-2xl text-zinc-800 font-medium leading-relaxed mb-12">
                        The intersection of physical infrastructure and digital intelligence is no longer a futuristic concept—it is the baseline for global competitiveness. As we engineer the arteries of tomorrow's economy, artificial intelligence is shifting from an analytical tool to an operational core.
                    </p>

                    <h2>The Shift Toward Autonomous Corridors</h2>
                    <p>
                        Current logistics networks are often fragmented, relying on manual hand-offs and legacy tracking systems. Future Ventures is piloting "Intelligent Corridors" where freight technology platforms synchronize sea-to-land transport in real-time.
                    </p>

                    <blockquote>
                        "True supply chain visibility isn't just knowing where a container is; it's predicting where it will be delayed before the weather even changes."
                    </blockquote>

                    <h3>Digital Surveying & ESG</h3>
                    <p>
                        By integrating digital surveying and geospatial intelligence, we aren't just moving goods; we're optimizing carbon footprints. Every route is calculated not just for speed, but for maximum fuel efficiency and minimum community impact.
                    </p>

                    <div className="my-16 rounded-[2rem] overflow-hidden border border-zinc-200 shadow-2xl">
                        <img 
                            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200" 
                            alt="Logistics Technology"
                            className="w-full h-auto"
                        />
                    </div>

                    <h2>Predictive Trade Finance</h2>
                    <p>
                        We are building trade finance directly into the logistics stack. By verifying goods via smart sensors at the port, capital can be unlocked for SMEs faster than ever before, reducing the friction of cross-border commerce.
                    </p>
                </div>

                {/* ── FOOTER / TAGS ── */}
                <footer className="mt-20 pt-10 border-t border-zinc-200">
                    <div className="flex flex-wrap gap-3">
                        {['AI', 'Logistics', 'Supply Chain', 'Future Tech'].map(tag => (
                            <span key={tag} className="px-4 py-2 rounded-xl bg-zinc-100 text-zinc-600 text-xs font-bold uppercase tracking-widest">
                                #{tag}
                            </span>
                        ))}
                    </div>

                    {/* Next Article Card */}
                    <div className="mt-20 p-8 md:p-12 rounded-[2.5rem] bg-zinc-900 text-white flex flex-col md:flex-row items-center justify-between gap-8 group">
                        <div className="max-w-md">
                            <p className="text-emerald-400 text-[10px] font-bold tracking-[0.3em] uppercase mb-4">Up Next</p>
                            <h3 className="text-2xl font-black mb-2 group-hover:text-emerald-400 transition-colors">Regenerative Farming: Beyond Organic</h3>
                            <p className="text-zinc-400 text-sm">Discover how we are restoring soil health at scale.</p>
                        </div>
                        <button className="px-8 py-4 rounded-full bg-white text-black font-black text-sm hover:bg-emerald-400 transition-colors whitespace-nowrap">
                            Read Next Article →
                        </button>
                    </div>
                </footer>
            </main>
        </div>
    );
};

export default BlogDetails;