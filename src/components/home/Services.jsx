import React from "react";
import { Link } from "react-router-dom"; // Import Link
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = ({ innerRef, isPage = false }) => {
    // 1. Manually add the desired paths here
    const serviceList = [
        {
            title: "AI / ML",
            desc: "Custom machine learning models, predictive analytics, and intelligent automation systems.",
            img: "https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?q=80&w=996&auto=format&fit=crop",
            link: "/services/01"
        },
        {
            title: "Cloud Infrastructure",
            desc: "Scalable, secure cloud architectures and DevOps solutions built for high availability.",
            img: "https://plus.unsplash.com/premium_photo-1681487942927-e1a2786e6036?q=80&w=1170&auto=format&fit=crop",
            link: "/services/02"
        },
        {
            title: "Cyber Security",
            desc: "Advanced threat detection and zero-trust security frameworks to protect digital assets.",
            img: "https://images.unsplash.com/photo-1614064548237-096f735f344f?q=80&w=1170&auto=format&fit=crop",
            link: "/services/03"
        },
        {
            title: "Web Application",
            desc: "Modern, high-performance web platforms built with scalable architectures and seamless UX.",
            img: "https://img.freepik.com/premium-photo/website-design-software-provide-modish-template-online-retail-business_31965-63159.jpg?w=740",
            link: "/services/04"
        },
        {
            title: "Mobile App",
            desc: "Native and cross-platform mobile solutions engineered for performance and security.",
            img: "https://images.unsplash.com/photo-1558655146-6c222b05fce4?q=80&w=764&auto=format&fit=crop",
            link: "/services/05"
        },
    ];

    return (
        <section
            ref={(el) => {
                if (innerRef) innerRef.current = el;
            }}
            className="relative w-full bg-[#fafafa] py-16 md:py-24 lg:py-32 overflow-hidden"
        >
            {/* ... Background System Code stays the same ... */}

            <div className="relative z-30 max-w-[1400px] mx-auto px-6 sm:px-12 md:px-24">
                {/* Header Section */}
                <div className="mb-12 md:mb-20">
                    <div className="opacity-0 flex items-center gap-4 mb-4">
                        <div className="w-8 lg:w-12 h-[2px] bg-indigo-600" />
                        <span className="text-indigo-600 font-mono text-[10px] tracking-[0.4em] uppercase font-bold">
                            Capabilities
                        </span>
                    </div>
                    <h3 className="text-4xl md:text-6xl lg:text-8xl text-zinc-900 font-black uppercase italic tracking-tighter leading-none mb-6">
                        Our<span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(24, 24, 27, 1)" }}> Expertise</span>
                    </h3>
                    <div className="w-16 sm:w-20 md:w-24 h-[4px] rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500" />
                </div>

                {/* Vertical Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
                    {serviceList.map((s, i) => (
                        <div key={i} className="group relative h-[400px] md:h-[450px] rounded-2xl lg:rounded-3xl overflow-hidden border border-zinc-200 bg-white shadow-sm transition-all duration-500 hover:border-indigo-500/30 reveal-card">

                            {/* Image Layer */}
                            <div className="absolute inset-0 z-0">
                                <img src={s.img} alt={s.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90" />
                            </div>

                            {/* Content Layer */}
                            <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end z-10">
                                <h4 className="text-zinc-200 text-2xl md:text-3xl font-bold uppercase mb-2">
                                    {s.title}
                                </h4>
                                <p className="text-zinc-300 text-sm mb-6 line-clamp-3">
                                    {s.desc}
                                </p>

                                {/* 2. Using the manual link from the array */}
                                <Link
                                    to={s.link}
                                    className="flex items-center justify-center gap-3 text-[10px] font-bold uppercase tracking-widest group/btn w-fit mx-auto"
                                >
                                    <div className="w-10 h-[1px] bg-gradient-to-r from-indigo-600 to-cyan-500 transition-all duration-300 group-hover/btn:w-16" />

                                    <span className="bg-white text-black px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 shadow-md">
                                        More
                                        <svg className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </span>

                                    <div className="w-10 h-[1px] bg-gradient-to-r from-indigo-600 to-cyan-500 transition-all duration-300 group-hover/btn:w-16" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;