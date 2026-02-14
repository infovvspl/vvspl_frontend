import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';
import Logo from "../assets/logo2.png";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-zinc-950 text-white pt-24 pb-12 overflow-hidden border-t border-white/5">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -mr-48 -mt-48 z-0" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] -ml-24 -mb-24 z-0" />

            <div className="max-w-[1400px] mx-auto px-8 md:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">

                    {/* Section 1: Brand & Identity */}
                    <div className="lg:col-span-4 space-y-8">
                        <Link to="/" className="inline-block group">
                            {/* Replace with your actual image logo path */}
                            <img 
                                src={Logo}
                                alt="Veteran Venture" 
                                className="h-26 w-auto object-containtransition-all"
                            />
                        </Link>
                        
                        <p className="text-zinc-400 text-lg font-light leading-relaxed max-w-sm">
                            Architecting the future of digital infrastructure through strategic venture capital and technical excellence.
                        </p>

                        <div className="flex gap-4">
                            {[
                                { icon: <Twitter size={18} />, href: "#" },
                                { icon: <Linkedin size={18} />, href: "#" },
                                { icon: <Github size={18} />, href: "#" }
                            ].map((social, i) => (
                                <a 
                                    key={i} 
                                    href={social.href} 
                                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Section 2: Navigation Links */}
                    <div className="lg:col-span-5 grid grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-blue-500">Quick links</h4>
                            <ul className="space-y-4">
                                <li><Link to="/about" className="text-sm text-zinc-400 hover:text-white transition-colors flex items-center group">Home <ArrowUpRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-1 transition-all" /></Link></li>
                                <li><Link to="/team" className="text-sm text-zinc-400 hover:text-white transition-colors flex items-center group">About <ArrowUpRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-1 transition-all" /></Link></li>
                                <li><Link to="/portfolio" className="text-sm text-zinc-400 hover:text-white transition-colors flex items-center group">Services <ArrowUpRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-1 transition-all" /></Link></li>
                                <li><Link to="/careers" className="text-sm text-zinc-400 hover:text-white transition-colors flex items-center group">Ventures <ArrowUpRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-1 transition-all" /></Link></li>
                            </ul>
                        </div>
                        <div className="space-y-6">
                            <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-blue-500">Services</h4>
                            <ul className="space-y-4">
                                <li><Link to="/infrastructure" className="text-sm text-zinc-400 hover:text-white transition-colors">AI / ML</Link></li>
                                <li><Link to="/security" className="text-sm text-zinc-400 hover:text-white transition-colors">Cyber Security</Link></li>
                                <li><Link to="/cloud" className="text-sm text-zinc-400 hover:text-white transition-colors">Cloud Systems</Link></li>
                                <li><Link to="/nodes" className="text-sm text-zinc-400 hover:text-white transition-colors">Web Apps</Link></li>
                                <li><Link to="/nodes" className="text-sm text-zinc-400 hover:text-white transition-colors">Mobile Apps</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Section 3: Connectivity */}
                    <div className="lg:col-span-3 space-y-6">
                        <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-blue-500">Connectivity</h4>
                        <ul className="space-y-5">
                            <li className="flex items-start gap-4 text-sm text-zinc-400">
                                <MapPin size={18} className="text-blue-500 shrink-0" />
                                <span className="leading-relaxed">Block-309/310, ODYSSA Business Center, Rasulgarh, Bhubaneswar, 751010</span>
                            </li>
                            <li className="flex items-center gap-4 text-sm text-zinc-400">
                                <Mail size={18} className="text-blue-500 shrink-0" />
                                <a href="mailto:hello@veteranventure.ai" className="hover:text-white transition-colors">info@vvspltech.com</a>
                            </li>
                            <li className="flex items-center gap-4 text-sm text-zinc-400">
                                <Phone size={18} className="text-blue-500 shrink-0" />
                                <span className="hover:text-white cursor-default">+91 7894689818</span>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex flex-wrap justify-center md:justify-start gap-6">
                        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                            © {currentYear} Veteran Venture & Services Pvt. Ltd.
                        </span>
                        <div className="hidden md:block h-4 w-px bg-white/10" />
                        <Link to="/privacy" className="text-[10px] font-mono text-zinc-500 hover:text-blue-500 uppercase tracking-widest transition-colors">Privacy_Protocol</Link>
                        <Link to="/terms" className="text-[10px] font-mono text-zinc-500 hover:text-blue-500 uppercase tracking-widest transition-colors">Terms_of_Service</Link>
                    </div>

                    {/* <div className="flex items-center gap-3 px-4 py-1.5 bg-zinc-900 border border-white/5 rounded-full">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                        <span className="text-[10px] font-mono text-emerald-500 uppercase tracking-[0.2em]">Systems_Nominal</span>
                    </div> */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;