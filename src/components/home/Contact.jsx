import React from 'react';

const Contact = ({ innerRef }) => {
  return (
    <section
      ref={innerRef}
      className="tunnel-section absolute inset-0 flex items-center justify-center bg-zinc-950 text-white overflow-hidden opacity-0 p-6 md:p-12"
    >
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=2074"
          alt="Contact Background"
          className="w-full h-full object-cover origin-center opacity-[0.2]"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 w-full max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">

          {/* Left: Heading & Info */}
          <div>
            <span className="text-blue-500 font-mono text-xs tracking-[1em] uppercase mb-8 block font-bold">Signal</span>
            <h2 className="text-7xl md:text-9xl font-black uppercase italic tracking-tighter leading-[0.75] text-white underline decoration-blue-500/20 decoration-8 underline-offset-[16px]">
              Ready to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white/40">Ascend?</span>
            </h2>

            <div className="mt-20 space-y-12">
              <div className="group cursor-pointer">
                <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest mb-2">New Projects</p>
                <h4 className="text-2xl font-bold hover:text-blue-500 transition-colors">hello@veteranventure.com</h4>
              </div>
              <div className="group cursor-pointer">
                <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest mb-2">Social Hub</p>
                <div className="flex gap-8 mt-4">
                  {['TW', 'LN', 'IG'].map(s => (
                    <span key={s} className="text-sm font-black uppercase tracking-wider hover:text-blue-500 transition-colors">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Glassmorphism Form */}
          <div className="bg-white/[0.03] border border-white/10 p-10 md:p-16 backdrop-blur-2xl rounded-sm">
            <form className="space-y-10">
              <div className="space-y-4">
                <label className="text-[10px] uppercase font-mono tracking-[0.4em] text-blue-500">Identity</label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-blue-500 transition-colors text-xl font-light"
                  placeholder="Your Name"
                />
              </div>

              <div className="space-y-4">
                <label className="text-[10px] uppercase font-mono tracking-[0.4em] text-blue-500">Contact Point</label>
                <input
                  type="email"
                  className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-blue-500 transition-colors text-xl font-light"
                  placeholder="Email Address"
                />
              </div>

              <div className="space-y-4">
                <label className="text-[10px] uppercase font-mono tracking-[0.4em] text-blue-500">Mission Parameters</label>
                <textarea
                  rows="3"
                  className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-blue-500 transition-colors text-xl font-light resize-none"
                  placeholder="Brief Objective"
                />
              </div>

              <button className="group relative w-full py-6 bg-blue-600 overflow-hidden transition-all duration-500 hover:bg-blue-500">
                <span className="relative z-10 text-xs font-black uppercase tracking-[0.5em]">Initiate Signal</span>
                <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;