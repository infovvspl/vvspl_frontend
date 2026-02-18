import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
// 1. Import Link from react-router-dom
import { Link } from 'react-router-dom';

const Blogs = ({ innerRef, isPage = false }) => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);

  // 2. Added manual 'link' property to each blog post
  const posts = [
    {
      title: "The Future of Defence Logistics: AI-Powered Supply Chains",
      desc: "How artificial intelligence is revolutionizing military supply chain management, ensuring mission readiness with predictive analytics and autonomous delivery systems.",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800",
      category: "Defence Tech",
      date: "Jan 26, 2026",
      link: "/cs"
    },
    {
      title: "From Battlefield to Boardroom: Leadership Lessons in Innovation",
      desc: "Insights from military veterans on applying strategic discipline and crisis management to drive business innovation and digital transformation.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStmdghgbG8yN1k6Z9zbnzM8xD-EhpfI-LnQQ&s",
      category: "Leadership",
      date: "Jan 20, 2026",
      link: "/cs"
    },
    {
      title: "Cybersecurity in the Digital Age: Protecting Critical Infrastructure",
      desc: "A deep dive into modern cybersecurity threats and the advanced solutions needed to safeguard national digital assets and enterprise data.",
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800",
      category: "Cybersecurity",
      date: "Jan 15, 2026",
      link: "/cs"
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
      className={`${isPage ? 'relative py-20 md:py-32' : 'absolute inset-0 opacity-0'} sm:pt-20 lg:pt-10 pt-0 bg-[#fafafa] text-zinc-900 overflow-hidden min-h-screen md:flex md:items-center`}
    >
      {/* Background System Code Stays the Same */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)`,
            backgroundSize: '100px 100px'
          }}
        />
        <div className="absolute top-[-20%] right-[-10%] w-[65%] h-[65%] bg-indigo-500/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-20%] left-[-15%] w-[75%] h-[75%] bg-cyan-400/5 blur-[180px] rounded-full animate-pulse" />
      </div>

      <div id="blogs-content" className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-0 will-change-transform">

        {/* ================= HEADER ================= */}
        <div ref={headerRef} className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="opacity-0 text-[10px] md:text-sm tracking-[0.5em] md:tracking-[0.8em] uppercase font-bold bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent mb-4">
              // Intel_Reports
            </h2>
            <h3 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-none italic text-zinc-900">
              Thought <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(24, 24, 27, 1)' }}>Journal.</span>
            </h3>
            <div className="mt-6 w-24 h-[5px] bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full" />
          </div>
        </div>

        {/* ================= BLOG GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <article
              key={i}
              className="blog-card group relative bg-white border border-zinc-200 rounded-3xl overflow-hidden hover:border-indigo-500/50 hover:shadow-[0_20px_40px_rgba(79,70,229,0.08)] transition-all duration-500"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-md border border-zinc-200 text-[9px] font-mono uppercase tracking-widest text-indigo-600 font-bold rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-8 space-y-4">
                <div className="flex items-center gap-4 text-zinc-400 font-mono text-[9px] uppercase tracking-widest font-semibold">
                  <span>{post.date}</span>
                </div>

                <h4 className="text-xl md:text-2xl font-black uppercase tracking-tight text-zinc-900 group-hover:text-indigo-600 transition-colors duration-500 leading-tight">
                  {post.title}
                </h4>

                <p className="text-zinc-600 text-sm font-medium leading-relaxed line-clamp-2">
                  {post.desc}
                </p>

                {/* 3. Replaced div with Link for "Read more" */}
                <Link to={post.link} className="pt-4 flex items-center gap-4 group/link w-fit">
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-900 group-hover/link:text-indigo-600 transition-colors">
                    Read more
                  </span>
                  <div className="relative h-px w-8 bg-zinc-200 group-hover/link:w-16 transition-all duration-500 overflow-hidden">
                    <div className="absolute inset-0 bg-indigo-600 translate-x-[-100%] group-hover/link:translate-x-0 transition-transform duration-700" />
                  </div>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* ================= FOOTER DECOR ================= */}
        <div className="mt-20 w-full flex justify-center relative">
          {/* 4. Replaced button with Link for "View All Reports" */}
          <Link
            to="/cs"
            className="w-fit px-10 py-4 border border-zinc-200 hover:border-indigo-500/50 bg-white shadow-sm rounded-full text-[10px] font-bold uppercase tracking-[0.3em] transition-all duration-500 group flex items-center justify-center"
          >
            <span className="text-zinc-900 group-hover:text-indigo-600">View All Reports</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blogs;