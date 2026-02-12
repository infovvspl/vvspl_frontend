import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Github, Twitter, Linkedin, ArrowUpRight, Mail } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-[#050505] text-white pt-24 pb-12 overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px]" />

            <div className="max-w-[1400px] mx-auto px-8 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">

                    {/* Brand & Call to Action */}
                    <div className="lg:col-span-6 space-y-8">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-blue-600 flex items-center justify-center rotate-45">
                                <Zap className="text-white -rotate-45" size={24} />
                            </div>
                            <h2 className="text-3xl font-black uppercase tracking-tighter">
                                VETERAN <span className="text-transparent" style={{ WebkitTextStroke: '1px #fff' }}>VENTURE</span>
                            </h2>
                        </div>

                        <p className="text-zinc-400 text-xl font-light leading-relaxed max-w-md">
                            Ready to accelerate your vision? Let’s build the <span className="text-white font-medium italic">next generation</span> of digital infrastructure together.
                        </p>

                        <a
                            href="mailto:hello@veteranventure.ai"
                            className="inline-flex items-center gap-4 text-sm font-bold uppercase tracking-[0.3em] group text-blue-500 hover:text-white transition-colors"
                        >
                            <Mail size={18} />
                            Start a Conversation
                            <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </a>
                    </div>

                    {/* Quick Links Grid */}
                    <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-12">
                        <div className="space-y-6">
                            <h4 className="text-[10px] font-bold uppercase tracking-[0.5em] text-zinc-500">// Navigation</h4>
                            <ul className="space-y-4">
                                <li><Link to="/" className="text-sm hover:text-blue-500 transition-colors">Venture</Link></li>
                                <li><Link to="/about" className="text-sm hover:text-blue-500 transition-colors">Architecture</Link></li>
                                <li><Link to="/team" className="text-sm hover:text-blue-500 transition-colors">Collective</Link></li>
                            </ul>
                        </div>

                        <div className="space-y-6">
                            <h4 className="text-[10px] font-bold uppercase tracking-[0.5em] text-zinc-500">// Social</h4>
                            <ul className="space-y-4">
                                <li><a href="#" className="flex items-center gap-2 text-sm hover:text-blue-500 transition-colors"><Twitter size={14} /> X / Twitter</a></li>
                                <li><a href="#" className="flex items-center gap-2 text-sm hover:text-blue-500 transition-colors"><Linkedin size={14} /> LinkedIn</a></li>
                                <li><a href="#" className="flex items-center gap-2 text-sm hover:text-blue-500 transition-colors"><Github size={14} /> Github</a></li>
                            </ul>
                        </div>

                        <div className="space-y-6">
                            <h4 className="text-[10px] font-bold uppercase tracking-[0.5em] text-zinc-500">// Location</h4>
                            <p className="text-sm text-zinc-400 leading-relaxed">
                                Remote First / <br />
                                Global Infrastructure <br />
                                Node_01
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-6">
                        <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">© {currentYear} Veteran Venture</span>
                        <div className="h-1 w-1 bg-zinc-800 rounded-full" />
                        <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">All Rights Reserved</span>
                    </div>

                    <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                        <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                        <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
                    </div>

                    {/* "System Status" Indicator */}
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                        <span className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest">Systems Nominal</span>
                    </div>
                </div>
            </div>
        </footer >
    );
};

export default Footer;