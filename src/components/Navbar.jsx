import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Logo from "../assets/logo2.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLightBg, setIsLightBg] = useState(false);
    const location = useLocation();

    // Prevent background scrolling when menu is open
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    }, [isOpen]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const handleLinkClick = (path) => {
        setIsOpen(false);
        if (location.pathname === path) {
            scrollToTop();
        }
    };

    // Detect scroll position (adjust 600 based on your hero height)
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 600) {
                setIsLightBg(true);
            } else {
                setIsLightBg(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Ventures', path: '/ventures' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-[200] h-24 bg-transparent">
            <div className="max-w-[1440px] mx-auto h-full px-8 md:px-12 flex items-center justify-between">

                {/* LOGO */}
                <Link
                    to="/"
                    onClick={() => handleLinkClick("/")}
                    className="relative z-[210] flex items-center"
                >
                    <img
                        src={Logo}
                        alt="Veteran Venture"
                        className="h-10 md:h-20 w-auto object-contain"
                    />
                </Link>

                {/* UPDATED HAMBURGER */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`relative z-[210] flex items-center gap-4 group
                        px-4 py-2 rounded-full
                        transition-all duration-500
                        ${isLightBg
                            ? "bg-black text-white border border-black hover:bg-black/80"
                            : "bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 text-white"
                        }`}
                    aria-label="Toggle Menu"
                >
                    <span className="text-[10px] font-semibold uppercase tracking-[0.25em]">
                        {isOpen ? "Close" : "Menu"}
                    </span>

                    <div className="flex flex-col gap-2 items-end">
                        <div
                            className={`h-[1px] w-7 transition-all duration-500 ${isOpen ? "rotate-45 translate-y-[4px]" : ""
                                } ${isLightBg ? "bg-white" : "bg-white/80"}`}
                        />
                        <div
                            className={`h-[1px] transition-all duration-500 ${isOpen ? "w-7 -rotate-45 -translate-y-[4px]" : "w-4"
                                } ${isLightBg ? "bg-white" : "bg-white/80"}`}
                        />
                    </div>
                </button>

            </div>

            {/* FULL SCREEN OVERLAY */}
            <div className={`
                fixed inset-0 bg-zinc-900 z-[205] flex flex-col items-center justify-center
                transition-all duration-700 ease-[cubic-bezier(0.8,0,0.2,1)]
                ${isOpen ? 'clip-path-open opacity-100' : 'clip-path-closed opacity-0 pointer-events-none'}
            `}>
                <div className="flex flex-col items-center gap-6">
                    {navLinks.map((link, index) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            onClick={() => handleLinkClick(link.path)}
                            className="group"
                        >
                            <span
                                className={`
                                    block text-5xl md:text-8xl font-black uppercase tracking-tighter
                                    text-white transition-all duration-700 transform
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

            <style>{`
                .clip-path-open { clip-path: inset(0 0 0 0); }
                .clip-path-closed { clip-path: inset(0 0 100% 0); }
            `}</style>
        </nav>
    );
};

export default Navbar;
