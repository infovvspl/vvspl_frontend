import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from "../assets/logo2.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Prevent background scrolling when menu is open
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    }, [isOpen]);

    const navLinks = [
        { name: 'Venture', path: '/' },
        { name: 'Architecture', path: '/about' },
        { name: 'Collective', path: '/team' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-[200] h-24 bg-transparent">
            <div className="max-w-[1440px] mx-auto h-full px-8 md:px-12 flex items-center justify-between">

                {/* LOGO - White text usually looks better on transparent overlays */}
                <Link
                    to="/"
                    onClick={() => setIsOpen(false)}
                    className="relative z-[210] flex items-center"
                >
                    <img
                        src={Logo}
                        alt="Veteran Venture"
                        className="h-10 md:h-20 w-auto object-contain"
                    />
                </Link>


                {/* CUSTOM HAMBURGER */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="relative z-[210] flex items-center gap-4 group p-2"
                    aria-label="Toggle Menu"
                >
                    <span className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-500 ${isOpen ? 'text-white/50' : 'text-zinc-500'}`}>
                        {isOpen ? 'Close' : 'Menu'}
                    </span>
                    <div className="flex flex-col gap-2 items-end">
                        <div className={`h-[1px] transition-all duration-500 ${isOpen ? 'w-8 rotate-45 translate-y-[4.5px] bg-white' : 'w-8 bg-zinc-900'}`} />
                        <div className={`h-[1px] transition-all duration-500 ${isOpen ? 'w-8 -rotate-45 -translate-y-[4.5px] bg-white' : 'w-5 bg-zinc-900'}`} />
                    </div>
                </button>
            </div>

            {/* FULL SCREEN OVERLAY */}
            <div className={`
        fixed inset-0 bg-zinc-900 z-[205] flex flex-col items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.8,0,0.2,1)]
        ${isOpen ? 'clip-path-open opacity-100' : 'clip-path-closed opacity-0 pointer-events-none'}
      `}>
                {/* Navigation Links */}
                <div className="flex flex-col items-center gap-6">
                    {navLinks.map((link, index) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className="group"
                        >
                            <span className={`
                block text-5xl md:text-8xl font-black uppercase tracking-tighter text-white transition-all duration-700 transform
                ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}
              `}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                {link.name}
                            </span>
                        </NavLink>
                    ))}
                </div>
            </div>

            {/* CSS for the Clip Path Animation (Add this to your index.css or a style tag) */}
            <style>{`
        .clip-path-open { clip-path: inset(0 0 0 0); }
        .clip-path-closed { clip-path: inset(0 0 100% 0); }
      `}</style>
        </nav>
    );
};

export default Navbar;