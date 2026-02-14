import React from 'react';
import { Target, Eye, Zap } from 'lucide-react';

const MissionVision = ({ innerRef, isPage = false }) => {
    return (
        <section
            ref={innerRef}
            className={`${isPage ? 'relative py-24' : 'absolute inset-0 opacity-0'} flex items-center bg-zinc-950 text-white overflow-hidden`}
        >
            {/* --- BACKGROUND: DARK DEPTH --- */}
            <div className="absolute inset-0 z-0">
                {/* Subtle grid pattern for technical depth */}
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: `radial-gradient(circle, #3b82f6 1px, transparent 1px)`,
                        backgroundSize: '50px 50px'
                    }}
                />

                {/* Large stylized number/letter in the back for parallax zoom */}
                {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                    <span className="text-[40vw] font-black text-white/[0.02] leading-none select-none">
                        02
                    </span>
                </div> */}

                {/* Dynamic Glows to break the "Flat" black */}
                <div className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px]" />
                <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-zinc-800/20 rounded-full blur-[120px]" />
            </div>

            {/* --- CONTENT CONTAINER --- */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">

                {/* Section Header */}
                <div className="mb-16 md:mb-24 text-center md:text-left">
                    {/* <div className="inline-flex items-center gap-3 px-3 py-1 border border-blue-500/30 bg-blue-500/10 rounded-full mb-6">
                        <Zap size={14} className="text-blue-400" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-400">Strategic Intent</span>
                    </div> */}
                    <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
                        The <span className="text-transparent" style={{ WebkitTextStroke: '1px #fff' }}>Blueprint</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

                    {/* MISSION CARD */}
                    <div className="group relative p-8 lg:p-12 bg-zinc-900/50 border border-white/5 backdrop-blur-sm hover:border-blue-500/50 transition-colors duration-500">
                        <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-100 transition-opacity">
                            <Target size={80} className="text-blue-500" />
                        </div>

                        <div className="relative z-10">
                            <h3 className="text-blue-500 font-mono text-lg mb-6 flex items-center gap-2">
                                <span className="w-8 h-px bg-blue-500" /> 01. OUR MISSION
                            </h3>
                            <p className="text-2xl md:text-3xl font-light leading-tight text-zinc-100">
                                To design and deploy defence-grade, AI-enabled digital architectures that enhance national capability, institutional efficiency, and enterprise competitiveness — delivered with precision engineering and globally competitive cost discipline.
                            </p>
                        </div>

                        {/* Animated corner detail */}
                        <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-blue-500 scale-0 group-hover:scale-100 transition-transform origin-bottom-left duration-500" />
                    </div>

                    {/* VISION CARD */}
                    <div className="group relative p-8 lg:p-12 bg-zinc-900/50 border border-white/5 backdrop-blur-sm hover:border-blue-500/50 transition-colors duration-500">
                        <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-100 transition-opacity">
                            <Eye size={80} className="text-blue-500" />
                        </div>

                        <div className="relative z-10">
                            <h3 className="text-blue-500 font-mono text-lg mb-6 flex items-center gap-2">
                                <span className="w-8 h-px bg-blue-500" /> 02. OUR VISION
                            </h3>
                            <p className="text-2xl md:text-3xl font-light leading-tight text-zinc-100">
                               We envision a digitally sovereign ecosystem where national infrastructure is intelligent, industries operate autonomously, governance is decisively data-driven, and security is structural rather than reactive. Veteran’s Venture exists to architect and accelerate that transition.
                            </p>
                        </div>

                        {/* Animated corner detail */}
                        <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-blue-500 scale-0 group-hover:scale-100 transition-transform origin-bottom-left duration-500" />
                    </div>

                </div>

                {/* Bottom Decorative Line (Matching Hero/About style) */}
                <div className="mt-20 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-blue-500 rounded-full animate-ping" />
                </div>
            </div>
        </section>
    );
};

export default MissionVision;