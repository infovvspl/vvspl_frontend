import React from 'react';

const About = ({ innerRef }) => {
    return (
        <section
            ref={innerRef}
            className="tunnel-section absolute inset-0 flex items-center bg-white text-zinc-900 overflow-hidden opacity-0"
        >
            {/* --- BACKGROUND LAYER: DEPTH & TEXTURE --- */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070"
                    alt="About Tech Background"
                    className="w-full h-full object-cover origin-center opacity-[0.5] "
                />
                {/* Large Background Watermark - creates 3D depth when zooming */}
                {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none">
          <span className="text-[30vw] font-black text-zinc-50 tracking-tighter leading-none select-none">
            CORE
          </span>
        </div> */}
                {/* Gradient overlays to keep the edges clean */}
                <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
            </div>

            {/* --- CONTENT CONTAINER --- */}
            <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                    {/* LEFT: Structural Labeling */}
                    <div className="lg:col-span-1 hidden lg:block">
                        <div className="flex flex-col items-center gap-8">
                            {/* <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-blue-600 rotate-180 [writing-mode:vertical-lr]">
                01 — Mission
              </span> */}
                            <div className="w-px h-32 bg-gradient-to-b from-blue-600 to-transparent" />
                        </div>
                    </div>

                    {/* RIGHT: High-Contrast Content Block */}
                    <div className="lg:col-span-11 xl:col-span-10">
                        <div className="max-w-4xl space-y-10">

                            {/* Header with Split Styling */}
                            <div className="space-y-4">
                                <h2 className="text-blue-600 text-xs md:text-sm tracking-[0.6em] uppercase font-black">
                                    The Origin
                                </h2>
                                <h3 className="text-5xl md:text-[3vw] font-black leading-[0.9] uppercase tracking-tighter text-zinc-900">
                                    We don't just use technology: <br />
                                    <span className="text-transparent" style={{ WebkitTextStroke: '1.5px #18181b' }}>
                                        We make it work for you
                                    </span>
                                </h3>
                            </div>

                            {/* Main Text with Glass Effect for legibility */}
                            <div className="relative p-8 md:p-12 bg-white/40 backdrop-blur-md border-l-4 border-zinc-900 shadow-2xl shadow-zinc-200/50">
                                <p className="text-xl md:text-2xl text-zinc-700 leading-tight font-light italic">
                                    "Born from the intersection of motion and code, we specialize in
                                    digital experiences that don't just sit on a screen—
                                    <span className="text-zinc-900 font-medium not-italic"> they pull you in.</span>"
                                </p>

                                <p className="mt-8 text-base md:text-lg text-zinc-500 leading-relaxed max-w-2xl font-normal">
                                    Every pixel is a coordinate; every scroll is a journey. We combine
                                    industrial-grade speed with visionary design to transform static
                                    ideas into living, breathing ventures.
                                </p>
                            </div>

                            {/* Data Grid Footer */}
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-6 border-t border-zinc-100">
                                <div className="space-y-1">
                                    <p className="text-[9px] uppercase tracking-widest text-blue-600 font-bold">Foundation</p>
                                    <p className="text-lg md:text-xl font-mono text-zinc-900 tracking-tight">Est. 2024</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[9px] uppercase tracking-widest text-blue-600 font-bold">Approach</p>
                                    <p className="text-lg md:text-xl font-mono text-zinc-900 tracking-tight">Velocity First</p>
                                </div>
                                <div className="space-y-1 hidden md:block">
                                    <p className="text-[9px] uppercase tracking-widest text-blue-600 font-bold">Reach</p>
                                    <p className="text-lg md:text-xl font-mono text-zinc-900 tracking-tight">Global / Remote</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* --- DECORATIVE TECH ELEMENTS (Maintain Hero Style) --- */}
            <div className="absolute top-10 right-10 w-32 h-32 border-[0.5px] border-zinc-200 rounded-full opacity-50" />
            <div className="absolute -bottom-20 -left-20 w-[600px] h-[600px] bg-blue-50/30 rounded-full blur-3xl -z-10" />
        </section>
    );
};

export default About;