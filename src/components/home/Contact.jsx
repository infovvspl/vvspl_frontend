import React from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Twitter,
  Linkedin,
  Instagram
} from "lucide-react";

const Contact = ({ innerRef, isPage = false }) => {
  return (
    <section
      ref={innerRef}
      className={`${isPage ? 'relative py-24' : 'absolute inset-0 opacity-0'} flex items-center justify-center bg-white text-zinc-900 overflow-hidden p-6 md:p-12`}
    >
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=2074"
          alt="Contact Background"
          className="w-full h-full object-cover origin-center opacity-[0.05]"
        />
        <div className="absolute inset-0 bg-white/90" />
      </div>

      <div className="relative z-10 w-full max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">

          {/* Left: Heading & Info */}
          <div>
            <span className="text-blue-600 font-mono text-xs tracking-[1em] uppercase mb-8 block font-bold">
              Contact Us
            </span>

            <h2 className="text-7xl md:text-8xl font-black uppercase italic tracking-tighter leading-[0.85] text-zinc-900 underline decoration-blue-600/10 decoration-8 underline-offset-[16px]">
              Start your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-zinc-400">
                Journey
              </span>
            </h2>

            <div className="mt-20 space-y-12">

              {/* Email */}
              <div className="group flex items-start gap-4 cursor-pointer">
                <Mail className="w-5 h-5 text-blue-600 mt-1" />
                <div>
                  <p className="text-zinc-400 font-mono text-[10px] uppercase tracking-widest mb-2">
                    Email
                  </p>
                  <h4 className="text-2xl font-bold text-zinc-800 group-hover:text-blue-600 transition-colors">
                    info@vvspltech.com
                  </h4>
                </div>
              </div>

              {/* Phone */}
              <div className="group flex items-start gap-4 cursor-pointer">
                <Phone className="w-5 h-5 text-blue-600 mt-1" />
                <div>
                  <p className="text-zinc-400 font-mono text-[10px] uppercase tracking-widest mb-2">
                    Phone
                  </p>
                  <h4 className="text-2xl font-bold text-zinc-800 group-hover:text-blue-600 transition-colors">
                    +91 7894689818
                  </h4>
                </div>
              </div>

              {/* Address */}
              <div className="group flex items-start gap-4 cursor-pointer">
                <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                <div>
                  <p className="text-zinc-400 font-mono text-[10px] uppercase tracking-widest mb-2">
                    Address
                  </p>
                  <h4 className="text-2xl font-bold text-zinc-800 group-hover:text-blue-600 transition-colors">
                    Block-309/310, ODYSSA Business Center, Rasulgarh, Bhubaneswar, 751010
                  </h4>
                </div>
              </div>

              {/* Social Media */}
              <div className="group">
                <p className="text-zinc-400 font-mono text-[10px] uppercase tracking-widest mb-4">
                  Social Hub
                </p>

                <div className="flex gap-6">
                  <Twitter className="w-6 h-6 text-zinc-800 hover:text-blue-600 transition-colors cursor-pointer" />
                  <Linkedin className="w-6 h-6 text-zinc-800 hover:text-blue-600 transition-colors cursor-pointer" />
                  <Instagram className="w-6 h-6 text-zinc-800 hover:text-blue-600 transition-colors cursor-pointer" />
                </div>
              </div>

            </div>
          </div>

          {/* Right: Glassmorphism Form */}
          <div className="bg-zinc-50/50 border border-zinc-200 p-10 md:p-16 backdrop-blur-2xl rounded-sm shadow-xl shadow-blue-500/5">
            <form className="space-y-10">
              <div className="space-y-4">
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-zinc-200 py-4 outline-none focus:border-blue-600 transition-colors text-xl font-light text-zinc-900 placeholder:text-zinc-400"
                  placeholder="Your Name"
                />
              </div>

              <div className="space-y-4">
                <input
                  type="email"
                  className="w-full bg-transparent border-b border-zinc-200 py-4 outline-none focus:border-blue-600 transition-colors text-xl font-light text-zinc-900 placeholder:text-zinc-400"
                  placeholder="Email Address"
                />
              </div>

              {/* NEW: Services Field */}
              <div className="space-y-4">
                <select
                  className="w-full bg-transparent border-b border-zinc-200 py-4 outline-none focus:border-blue-600 transition-colors text-xl font-light text-zinc-900 appearance-none cursor-pointer"
                  defaultValue=""
                >
                  <option value="" disabled className="text-zinc-400">Select Service</option>
                  <option value="web-dev" className="text-zinc-900 bg-white">AI / ML</option>
                  <option value="web-dev" className="text-zinc-900 bg-white">Web Development</option>
                  <option value="ui-ux" className="text-zinc-900 bg-white">UI/UX Design</option>
                  <option value="mobile-app" className="text-zinc-900 bg-white">Mobile Applications</option>
                  <option value="cloud" className="text-zinc-900 bg-white">Cloud Solutions</option>
                </select>
                {/* Custom arrow icon for the select */}
                <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-zinc-400">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
                </div>
              </div>

              <div className="space-y-4">
                <textarea
                  rows="3"
                  className="w-full bg-transparent border-b border-zinc-200 py-4 outline-none focus:border-blue-600 transition-colors text-xl font-light text-zinc-900 placeholder:text-zinc-400 resize-none"
                  placeholder="Message"
                />
              </div>

              <button className="group relative w-full py-6 bg-blue-600 overflow-hidden transition-all duration-500 hover:bg-zinc-900">
                <span className="relative z-10 text-xs font-black text-white uppercase tracking-[0.5em]">Submit</span>
                <div className="absolute inset-0 bg-black/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;