import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import {
  Mail,
  Phone,
  MapPin,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight
} from "lucide-react";

const Contact = ({ innerRef, isPage = false }) => {
  const containerRef = useRef(null);
  const headerRef = useRef(null);

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

      tl.fromTo(".contact-info-item",
        { x: -30, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.1 },
        "-=0.8"
      );

      tl.fromTo(".contact-form-box",
        { scale: 0.95, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.5 },
        "-=1"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={(el) => {
        containerRef.current = el;
        if (innerRef) innerRef.current = el;
      }}
      className={`${isPage ? 'relative py-24 md:py-40' : 'absolute inset-0 opacity-0 overflow-hidden'} sm:pt-20 lg:pt-10 pt-0 md:flex md:items-center md:justify-center bg-black text-white`}
    >
      {/* ================= BACKGROUND ARCHITECTURE ================= */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072"
          alt="Tech Network"
          className="w-full h-full object-cover opacity-[0.9] scale-110"
        />
        {/* Dark Overlays */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" /> */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-80" />

        {/* Ambient Glows */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px]" />
      </div>

      <div id="contact-content" className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 pt-24 pb-12 md:py-0 will-change-transform">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* LEFT: Heading & Info */}
          <div className="space-y-10 md:space-y-16">
            <div ref={headerRef}>
              {/* <span className="opacity-0 text-indigo-400 font-mono text-[10px] md:text-xs tracking-[0.6em] md:tracking-[0.8em] uppercase mb-6 block font-bold">
                // System_Contact
              </span> */}

              <h2 className="text-5xl md:text-6xl font-black uppercase italic tracking-tighter leading-[0.85] text-white">
                Start Your <br />
                <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.6)' }}>
                  Journey.
                </span>
              </h2>
              <div className="mt-8 w-24 h-[4px] bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full" />
            </div>

            <div className="space-y-4 md:space-y-8">
              {/* Email */}
              <div className="contact-info-item group flex items-center gap-6 cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-indigo-500/50 transition-colors">
                  <Mail className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  {/* <p className="text-zinc-500 font-mono text-[9px] uppercase tracking-widest mb-2">Primary_Email</p> */}
                  <a href="mailto:info@vvspltech.com">
                    <h4 className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors cursor-pointer">
                      info@vvspltech.com
                    </h4>
                  </a>

                </div>
              </div>

              {/* Phone */}
              <div className="contact-info-item group flex items-center gap-6 cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-indigo-500/50 transition-colors">
                  <Phone className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  {/* <p className="text-zinc-500 font-mono text-[9px] uppercase tracking-widest mb-2">Comms_Line</p> */}
                  <a
                    href="tel:+917894689818"
                    className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors cursor-pointer"
                  >
                    +91 78946 89818
                  </a>

                </div>
              </div>

              {/* Address */}
              <div className="contact-info-item group flex items-center gap-6 cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-indigo-500/50 transition-colors">
                  <MapPin className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  {/* <p className="text-zinc-500 font-mono text-[9px] uppercase tracking-widest mb-2">HQ_Coordinates</p> */}
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Block-309/310+ODYSSA+Business+Center+Rasulgarh+Bhubaneswar+751010"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl md:text-2xl font-bold text-white leading-snug group-hover:text-cyan-400 transition-colors cursor-pointer"
                  >
                    Block-309/310, ODYSSA Business Center, <br />
                    Rasulgarh, Bhubaneswar, 751010
                  </a>

                </div>
              </div>

              {/* Socials */}
              <div className="contact-info-item flex flex-col gap-6">
                <p className="text-zinc-2500 font-mono text-[12px] uppercase tracking-widest italic">Social Links</p>
                <div className="flex gap-8">
                  {[Twitter, Linkedin, Instagram].map((Icon, idx) => (
                    <Icon key={idx} className="w-5 h-5 text-zinc-400 hover:text-cyan-400 transition-all cursor-pointer transform hover:-translate-y-1" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: High-Tech Glass Form */}
          <div className="contact-form-box relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-3xl blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
            <div className="relative bg-zinc-900/40 border border-white/10 p-8 md:p-14 backdrop-blur-3xl rounded-3xl shadow-2xl">
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    {/* <label className="text-[10px] font-mono text-indigo-400 uppercase tracking-widest px-1">Identity</label> */}
                    <input
                      type="text"
                      className="w-full bg-zinc-950/50 border border-white/5 rounded-xl px-6 py-4 outline-none focus:border-indigo-500/50 transition-colors text-white placeholder:text-zinc-400"
                      placeholder="Enter Name"
                    />
                  </div>
                  <div className="space-y-2">
                    {/* <label className="text-[10px] font-mono text-indigo-400 uppercase tracking-widest px-1">Access_Point</label> */}
                    <input
                      type="email"
                      className="w-full bg-zinc-950/50 border border-white/5 rounded-xl px-6 py-4 outline-none focus:border-indigo-500/50 transition-colors text-white placeholder:text-zinc-400"
                      placeholder="Enter Email"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  {/* <label className="text-[10px] font-mono text-indigo-400 uppercase tracking-widest px-1">
                    Subject
                  </label> */}
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Enter Subject"
                      className="w-full bg-zinc-950/50 border border-white/5 rounded-xl px-6 py-4 outline-none focus:border-indigo-500/50 transition-colors text-white placeholder-zinc-400"
                    />
                  </div>
                </div>


                <div className="space-y-2">
                  {/* <label className="text-[10px] font-mono text-indigo-400 uppercase tracking-widest px-1">Data_Packet</label> */}
                  <textarea
                    rows="4"
                    className="w-full bg-zinc-950/50 border border-white/5 rounded-xl px-6 py-4 outline-none focus:border-indigo-500/50 transition-colors text-white placeholder:text-zinc-400 resize-none"
                    placeholder="Describe your objective..."
                  />
                </div>

                <button className="group relative w-full py-5 bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-xl overflow-hidden transition-all duration-500 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-indigo-500/20">
                  <div className="relative z-10 flex items-center justify-center gap-3">
                    <span className="text-[11px] font-black text-white uppercase tracking-[0.6em]">Send Message</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;