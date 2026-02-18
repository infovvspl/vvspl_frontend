import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight
} from "lucide-react";
import { Facebook, Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

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
      className="relative min-h-screen w-full bg-[#030303] text-white py-20 px-6 sm:px-12 md:px-16 overflow-hidden"
    >
      {/* ================= BACKGROUND SYSTEM ================= */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072"
          alt="Tech Network"
          className="w-full h-full object-cover opacity-30 grayscale-[0.3] scale-110"
        />

        {/* Gradient Mesh & Glows */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-60" />
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-indigo-600/15 blur-[140px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-cyan-500/15 blur-[140px] rounded-full" />

        {/* Subtle Scanline/Grid Grid */}
        <div
          className="absolute inset-0 opacity-[0.2]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      <div id="contact-content" className="relative z-10 w-full max-w-7xl mx-auto pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* LEFT: Heading & Info */}
          <div className="space-y-10 md:space-y-16">
            <div ref={headerRef}>
              {/* <span className="opacity-0 text-indigo-400 font-mono text-[10px] md:text-xs tracking-[0.6em] md:tracking-[0.8em] uppercase mb-6 block font-bold">
                // System_Contact
              </span> */}

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase italic tracking-tighter leading-none text-white">
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
                <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 rounded-full border border-white/10 flex items-center justify-center group-hover:border-indigo-500/50 transition-colors">
                  <Mail className="w-4 h-4 md:w-5 md:h-5 text-indigo-400" />
                </div>
                <div className="flex-1">
                  <a href="mailto:info@vvspltech.com" className="block truncate">
                    <h4 className="text-lg md:text-xl lg:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors cursor-pointer overflow-hidden text-ellipsis">
                      info@vvspltech.com
                    </h4>
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="contact-info-item group flex items-center gap-6 cursor-pointer">
                <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 rounded-full border border-white/10 flex items-center justify-center group-hover:border-indigo-500/50 transition-colors">
                  <Phone className="w-4 h-4 md:w-5 md:h-5 text-indigo-400" />
                </div>
                <div className="flex-1">
                  <a
                    href="tel:+917894689818"
                    className="text-lg md:text-xl lg:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors cursor-pointer"
                  >
                    +91 78946 89818
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="contact-info-item group flex items-start gap-6 cursor-pointer">
                <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 rounded-full border border-white/10 flex items-center justify-center group-hover:border-indigo-500/50 transition-colors">
                  <MapPin className="w-4 h-4 md:w-5 md:h-5 text-indigo-400" />
                </div>
                <div className="flex-1">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Block-309/310+ODYSSA+Business+Center+Rasulgarh+Bhubaneswar+751010"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg md:text-xl lg:text-2xl font-bold text-white leading-snug group-hover:text-cyan-400 transition-colors cursor-pointer break-words"
                  >
                    Block-309/310, ODYSSA Business Center, <br className="hidden md:block" />
                    Rasulgarh, Bhubaneswar, 751010
                  </a>
                </div>
              </div>

              {/* Socials */}
              <div className="contact-info-item flex flex-col gap-6">
                <p className="text-zinc-2500 font-mono text-[12px] uppercase tracking-widest italic">
                  Social Links
                </p>

                <div className="flex gap-8">
                  <a
                    href="https://www.facebook.com/share/1D4x5YWeff/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook className="w-5 h-5 text-zinc-400 hover:text-cyan-400 transition-all cursor-pointer transform hover:-translate-y-1" />
                  </a>

                  <a
                    href="https://www.instagram.com/vvspltech?igsh=cjcyczloZWNuaGZx"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="w-5 h-5 text-zinc-400 hover:text-cyan-400 transition-all cursor-pointer transform hover:-translate-y-1" />
                  </a>

                  <a
                    href="https://wa.me/7894689818"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp className="w-5 h-5 text-zinc-300 hover:text-cyan-400 transition-all cursor-pointer transform hover:-translate-y-1" />
                  </a>
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