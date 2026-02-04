import React from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiUser, FiArrowRight, FiTerminal } from 'react-icons/fi';

const Blogs = () => {
  const posts = [
    {
      id: 1,
      title: "The Future of AI in Enterprise Software",
      excerpt: "How Large Language Models are revolutionizing how we build custom web apps and manage data systems.",
      date: "Oct 24, 2023",
      author: "Alex Dev",
      category: "Tech Stack",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Sustainable Practices in Modern Mining",
      excerpt: "Exploring green technologies in mineral extraction and their long-term impact on global supply chains.",
      date: "Nov 02, 2023",
      author: "Sarah Green",
      category: "Operations",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Navigating Global Trade in a Digital Era",
      excerpt: "How digital platforms are streamlining import/export logistics and managing cross-border transactions.",
      date: "Nov 15, 2023",
      author: "Mark Trade",
      category: "Strategy",
      image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section className="relative w-full bg-white overflow-hidden py-24">
      {/* Signature Hero Grid Background */}
      <div className="absolute inset-0 z-0 opacity-60">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[2px] w-12 bg-blue-600"></span>
              <span className="text-blue-600 text-xs font-bold tracking-[0.3em] uppercase">Intelligence</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight">
              Insights from <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                The Engineering Desk
              </span>
            </h2>
          </div>
          
          <a href="#" className="hidden md:flex items-center gap-3 px-6 py-3 border border-slate-200 rounded-full font-bold text-slate-900 hover:bg-slate-900 hover:text-white transition-all group">
            All Articles <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Blogs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white rounded-[2.5rem] border border-slate-200 overflow-hidden hover:shadow-[0_20px_50px_rgba(59,130,246,0.1)] transition-all duration-500 flex flex-col"
            >
              {/* Image with Category Badge */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute top-6 left-6 z-20">
                  <span className="bg-slate-900/90 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/20">
                    {post.category}
                  </span>
                </div>
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content Panel */}
              <div className="p-8 flex flex-col flex-grow relative">
                {/* Visual "Terminal" element */}
                <div className="absolute top-0 right-8 transform -translate-y-1/2 w-12 h-12 bg-white rounded-2xl border border-slate-100 flex items-center justify-center text-blue-600 shadow-sm">
                  <FiTerminal size={20} />
                </div>

                <div className="flex items-center gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-tighter mb-6">
                  <span className="flex items-center gap-1.5"><FiCalendar /> {post.date}</span>
                  <span className="w-1 h-1 bg-slate-200 rounded-full"></span>
                  <span className="flex items-center gap-1.5"><FiUser /> {post.author}</span>
                </div>

                <h3 className="text-2xl font-black text-slate-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">
                  {post.excerpt}
                </p>

                <div className="pt-6 border-t border-slate-50">
                  <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:gap-4 transition-all">
                    View Project Files <FiArrowRight className="text-blue-600" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Mobile Call to Action */}
        <div className="mt-12 md:hidden">
          <button className="w-full py-4 bg-slate-900 text-white rounded-full font-bold">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blogs;