import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';
import { FaWhatsapp, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            name: "Facebook",
            icon: <Facebook size={18} />,
            href: "https://www.facebook.com/share/1D4x5YWeff/",
            // Using Tailwind arbitrary values for exact brand matching
            hoverClass: "hover:bg-[#1877F2] hover:border-[#1877F2] hover:shadow-[0_0_15px_rgba(24,119,242,0.5)]"
        },
        {
            name: "Instagram",
            icon: <Instagram size={18} />,
            href: "https://www.instagram.com/vvspltech?igsh=cjcyczloZWNuaGZx",
            hoverClass: "hover:bg-[#E4405F] hover:border-[#E4405F] hover:shadow-[0_0_15px_rgba(228,64,95,0.5)]"
        },
        {
            name: "WhatsApp",
            icon: <FaWhatsapp size={18} />,
            href: "https://wa.me/7894689818",
            hoverClass: "hover:bg-[#25D366] hover:border-[#25D366] hover:shadow-[0_0_15px_rgba(37,211,102,0.5)]"
        },
        {
            name: "LinkedIn",
            icon: <FaLinkedinIn size={18} />,
            href: "https://www.linkedin.com/company/112707331/admin/dashboard/", 
            hoverClass: "hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:shadow-[0_0_15px_rgba(10,102,194,0.5)]"
        },
    ];

    return (
        <footer className="relative bg-zinc-950 text-white pt-24 pb-12 overflow-hidden border-t border-white/5">
            {/* ================= BACKGROUND ELEMENTS ================= */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] -mr-48 -mt-48 z-0" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-[100px] -ml-24 -mb-24 z-0" />

            <div className="max-w-[1400px] mx-auto px-8 md:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">

                    {/* Section 1: Brand & Identity */}
                    <div className="lg:col-span-4 space-y-8">
                        <Link to="/" className="inline-block group">
                            <div className="flex flex-col">
                                <span className="text-3xl font-black tracking-tighter uppercase italic leading-none">
                                    Veteran
                                </span>
                                <span
                                    className="text-4xl font-black tracking-tighter uppercase italic leading-none text-transparent"
                                    style={{ WebkitTextStroke: '1px rgba(255,255,255,0.8)' }}
                                >
                                    Ventures.
                                </span>
                            </div>
                        </Link>

                        <p className="text-zinc-400 text-lg font-light leading-relaxed max-w-sm italic">
                            Architecting the future of digital force multiplication through strategic innovation and disciplined technical excellence.
                        </p>

                        <div className="flex gap-4">
                            {socialLinks.map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.name}
                                    className={`w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-all duration-500 hover:-translate-y-1 ${social.hoverClass}`}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Section 2: Navigation Links */}
                    <div className="lg:col-span-5 grid grid-cols-2 gap-8">
                        <div className="space-y-8">
                            <ul className="space-y-4">
                                {[
                                    { name: "Home", path: "/" },
                                    { name: "About", path: "/about" },
                                    { name: "Services", path: "/services" },
                                    { name: "Ventures", path: "/ventures" },
                                    { name: "Leadership", path: "/team" }
                                ].map((link) => (
                                    <li key={link.name}>
                                        <Link to={link.path} className="text-sm text-zinc-400 hover:text-cyan-400 transition-colors flex items-center group w-fit">
                                            {link.name}
                                            <ArrowUpRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-cyan-400" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="space-y-8">
                            <ul className="space-y-4">
                                {[
                                    { name: "AI / ML Ops", path: "/services/01" },
                                    { name: "Cyber Security", path: "/services/03" },
                                    { name: "Cloud Systems", path: "/services/02" },
                                    { name: "Web Apps", path: "/services/04" },
                                    { name: "Mobile Apps", path: "/services/05" }
                                ].map((service) => (
                                    <li key={service.name}>
                                        <Link
                                            to={service.path}
                                            className="text-sm text-zinc-400 hover:text-cyan-400 transition-colors text-left block"
                                        >
                                            {service.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Section 3: Connectivity */}
                    <div className="lg:col-span-3 space-y-8">
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4 text-sm text-zinc-400 group">
                                <a
                                    href="https://www.google.com/maps/search/?api=1&query=Odyssa+Business+Center+Bhubaneswar"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-start gap-4 transition-colors hover:text-zinc-200"
                                >
                                    <MapPin
                                        size={18}
                                        className="text-cyan-500 shrink-0 mt-1 group-hover:animate-pulse"
                                    />
                                    <span className="leading-relaxed">
                                        Block-309/310, ODYSSA Business Center, Rasulgarh, Bhubaneswar, 751010
                                    </span>
                                </a>
                            </li>

                            <li className="flex items-center gap-4 text-sm text-zinc-400 group">
                                <Mail size={18} className="text-cyan-500 shrink-0 group-hover:animate-pulse" />
                                <a href="mailto:info@vvspltech.com" className="hover:text-white transition-colors">info@vvspltech.com</a>
                            </li>
                            
                            <li className="flex items-center gap-4 text-sm text-zinc-400 group">
                                <a
                                    href="tel:+917894689818"
                                    className="flex items-center gap-4 hover:text-white transition-colors"
                                >
                                    <Phone
                                        size={18}
                                        className="text-cyan-500 shrink-0 group-hover:animate-pulse"
                                    />
                                    <span>+91 78946 89818</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* ================= BOTTOM BAR ================= */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-center items-center gap-8">
                    <div className="flex flex-wrap justify-center md:justify-start gap-6 items-center">
                        <span className="text-[12px] font-mono text-zinc-200 uppercase tracking-widest text-center">
                            © {currentYear} Veteran Venture & Services Pvt. Ltd.
                        </span>
                        <div className="hidden md:block h-4 w-px bg-white/10" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;