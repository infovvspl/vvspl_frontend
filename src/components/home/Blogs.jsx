import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Blogs = ({ innerRef, isPage = false }) => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);

  const posts = [
    {
      title: "The Future of Defence Logistics: AI-Powered Supply Chains",
      desc: "How artificial intelligence is revolutionizing military supply chain management, ensuring mission readiness with predictive analytics and autonomous delivery systems.",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800",
      category: "Defence Tech",
      date: "Oct 26, 2025"
    },
    {
      title: "From Battlefield to Boardroom: Leadership Lessons in Innovation",
      desc: "Insights from military veterans on applying strategic discipline and crisis management to drive business innovation and digital transformation.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStmdghgbG8yN1k6Z9zbnzM8xD-EhpfI-LnQQ&s",
      category: "Leadership",
      date: "Oct 20, 2025"
    },
    {
      title: "Cybersecurity in the Digital Age: Protecting Critical Infrastructure",
      desc: "A deep dive into modern cybersecurity threats and the advanced solutions needed to safeguard national digital assets and enterprise data.",
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800",
      category: "Cybersecurity",
      date: "Oct 15, 2025"
    }
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power4.out", duration: 1.2 }
      });

      tl.fromTo(headerRef.current.children,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.2 },
        0.2
      );

      tl.fromTo(".blog-card",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.15 },
        "-=0.8"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={(el) => {
        sectionRef.current = el;
        if (innerRef) innerRef.current = el;
      }}
      className={`${isPage ? 'relative py-20 md:py-32' : 'absolute inset-0 opacity-0'} sm:pt-20 lg:pt-10 pt-0 bg-black text-white overflow-hidden min-h-screen md:flex md:items-center`}
    >
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`, backgroundSize: '50px 50px' }} />
        <div className="absolute -top-24 -right-24 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-indigo-600/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-24 -left-24 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-cyan-500/10 rounded-full blur-[120px]" />
      </div>

      <div id="blogs-content" className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-0 will-change-transform">
        
        {/* ================= HEADER ================= */}
        <div ref={headerRef} className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="opacity-0 text-[10px] md:text-sm tracking-[0.5em] md:tracking-[0.8em] uppercase font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              // Intel_Reports
            </h2>
            <h3 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-none italic">
              Thought <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.6)' }}>Journal.</span>
            </h3>
          <div className="mt-6 w-24 h-[4px] bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full" />
          </div>
          
        </div>

        {/* ================= BLOG GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <article 
              key={i} 
              className="blog-card group relative bg-zinc-900/20 border border-white/10 rounded-3xl overflow-hidden hover:border-indigo-500/70 transition-colors duration-500"
            >
              {/* Image Section */}
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 "
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                
                {/* Category Tag */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-black/80 border border-white/10 text-[9px] font-mono uppercase tracking-widest text-cyan-400 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 space-y-4">
                <div className="flex items-center gap-4 text-zinc-500 font-mono text-[9px] uppercase tracking-widest">
                  <span>{post.date}</span>
                  {/* <div className="h-px flex-grow bg-white/10" />
                  <span>Read_Time: 5m</span> */}
                </div>

                <h4 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white group-hover:text-indigo-400 transition-colors duration-500 leading-tight">
                  {post.title}
                </h4>

                <p className="text-zinc-400 text-sm font-light leading-relaxed line-clamp-2 group-hover:text-zinc-200 transition-colors">
                  {post.desc}
                </p>

                {/* Interactive Link */}
                <div className="pt-4 flex items-center gap-4 group/link">
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white group-hover/link:text-cyan-400 transition-colors">
                    Read more
                  </span>
                  <div className="relative h-px w-8 bg-indigo-500 group-hover/link:w-16 transition-all duration-500 overflow-hidden">
                     <div className="absolute inset-0 bg-cyan-400 translate-x-[-100%] group-hover/link:translate-x-0 transition-transform duration-700" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ================= FOOTER DECOR ================= */}
        <div className="mt-20 w-full flex justify-center relative">
          <button className="w-fit px-8 py-4 border border-white/10 hover:border-indigo-500/50 bg-zinc-900/80 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] transition-colors duration-500 group">
            <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text group-hover:text-cyan-400">View All Posts</span>
          </button>
        </div>
        {/* <div className="mt-20 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-indigo-500 rounded-full blur-[2px]" />
        </div> */}
      </div>
    </section>
  );
};

export default Blogs;