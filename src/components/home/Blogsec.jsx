import React from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiUser, FiArrowRight, FiTag } from 'react-icons/fi';

const Blogs = () => {
  // Mock Data for Blogs
  const posts = [
    {
      id: 1,
      title: "The Future of AI in Enterprise Software",
      excerpt: "How Large Language Models are revolutionizing how we build custom web apps and manage data.",
      date: "Oct 24, 2023",
      author: "Alex Dev",
      category: "Technology",
      categoryColor: "bg-blue-100 text-blue-600",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Sustainable Practices in Modern Mining",
      excerpt: "Exploring green technologies in mineral extraction and their long-term impact on the environment.",
      date: "Nov 02, 2023",
      author: "Sarah Green",
      category: "Industry",
      categoryColor: "bg-emerald-100 text-emerald-600",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Navigating Global Trade in a Digital Era",
      excerpt: "How digital platforms are streamlining import/export logistics and supply chain management.",
      date: "Nov 15, 2023",
      author: "Mark Trade",
      category: "Business",
      categoryColor: "bg-orange-100 text-orange-600",
      image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=800&auto=format&fit=crop"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="relative w-full bg-slate-50 overflow-hidden py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
        >
          <div className="max-w-2xl">
            <span className="inline-block py-1 px-3 rounded-full bg-slate-200 text-slate-600 text-xs font-bold tracking-widest uppercase mb-4">
              Insights & News
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Latest from <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-600">
                Our Desk
              </span>
            </h2>
          </div>
          
          <a href="#" className="hidden md:flex items-center gap-2 text-blue-600 font-bold hover:gap-4 transition-all">
            View All Articles <FiArrowRight />
          </a>
        </motion.div>

        {/* Blogs Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {posts.map((post) => (
            <motion.article
              key={post.id}
              variants={itemVariants}
              className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-[16/10]">
                <div className={`absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${post.categoryColor} backdrop-blur-md`}>
                  {post.category}
                </div>
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay on Image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-slate-400 font-medium mb-4">
                  <span className="flex items-center gap-1.5">
                    <FiCalendar size={14} /> {post.date}
                  </span>
                  <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                  <span className="flex items-center gap-1.5">
                    <FiUser size={14} /> {post.author}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                  {post.title}
                </h3>
                
                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
                  {post.excerpt}
                </p>

                <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:translate-x-2 transition-transform duration-300">
                  Read Article 
                  <FiArrowRight className="text-blue-600" size={18} />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Mobile View All Button */}
        <div className="mt-12 text-center md:hidden">
          <a href="#" className="inline-block px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-blue-600 transition-all shadow-lg shadow-slate-200/50">
            View All Articles
          </a>
        </div>

      </div>
    </section>
  );
};

export default Blogs;