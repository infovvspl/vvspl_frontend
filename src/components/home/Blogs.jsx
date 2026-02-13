import React from 'react';

const Blogs = ({ innerRef, isPage = false }) => {
  const posts = [
    {
      title: "The Future of Defence Logistics: AI-Powered Supply Chains",
      desc: "How artificial intelligence is revolutionizing military supply chain management, ensuring mission readiness with predictive analytics and autonomous delivery systems.",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070",
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
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070",
      category: "Cybersecurity",
      date: "Oct 15, 2025"
    }
  ];


  return (
    <section
      ref={innerRef}
      className={`${isPage ? 'relative py-24' : 'absolute inset-0 opacity-0'} flex flex-col items-center justify-center bg-zinc-950 text-white overflow-hidden p-4 md:p-8`}
    >
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070"
          alt="Journal Background"
          className="w-full h-full object-cover origin-center opacity-[0.2]"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 w-full max-w-7xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-xl">
            <p className="text-blue-500 font-mono text-xs tracking-[0.5em] uppercase mb-4">Latest Insights</p>
            <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none text-white">
              Thought <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white/40">Journal.</span>
            </h2>
          </div>
          <button className="text-xs font-bold uppercase tracking-[0.4em] border border-white/10 px-8 py-4 px-10 hover:bg-white/5 transition-colors rounded-sm backdrop-blur-md">
            View All Posts
          </button>
        </div>

        {/* 3 Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <div key={i} className="group relative bg-zinc-900/40 border border-white/10 p-5 backdrop-blur-lg hover:border-blue-500/50 transition-all duration-500">
              <div className="aspect-[3/2] overflow-hidden mb-6 border border-white/5">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-full object-cover  group-hover:scale-110 transition-all duration-1000"
                />
              </div>

              <div className="flex items-center gap-4 mb-4">
                <span className="text-blue-500 font-mono text-[10px] uppercase tracking-widest">{post.category}</span>
                <div className="h-px flex-grow bg-white/5" />
                <span className="text-zinc-500 font-mono text-[10px]">{post.date}</span>
              </div>

              <h4 className="text-xl md:text-2xl font-bold uppercase tracking-tighter text-white leading-tight mb-4 group-hover:text-blue-400 transition-colors">
                {post.title}
              </h4>

              <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] overflow-hidden group/link">
                <span className="group-hover/link:translate-x-0 -translate-x-full opacity-0 group-hover/link:opacity-100 transition-all duration-500">Read Article</span>
                <div className="w-8 h-[1px] bg-blue-600 transition-all duration-500 group-hover/link:w-16" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;