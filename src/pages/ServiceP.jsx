import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { SERVICES } from '../data/servicesData';

gsap.registerPlugin(ScrollTrigger);

/* ─────────────────────────────────────────
    SERVICES DATA
───────────────────────────────────────── */
// const SERVICES = [
//     {
//         id: '01',
//         title: 'AI / ML Solutions',
//         short: 'Artificial Intelligence',
//         icon: '🤖',
//         accent: 'from-indigo-500 to-violet-500',
//         glow: 'bg-indigo-600/20',
//         border: 'hover:border-indigo-500/40',
//         tag: 'Intelligence',
//         description:
//             'We design and deploy production-ready AI and machine learning systems — from predictive analytics and computer vision to Human Centric AI Collaborative Intelligence and generative AI integrations - transform raw data into actionable insights and sustainable competitive advantage for businesses.',
//         features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'GenAI Integration', 'Model Fine-tuning', 'MLOps & Monitoring'],
//         img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=1200',
//     },
//     {
//         id: '02',
//         title: 'Cloud Infrastructure',
//         short: 'Cloud & DevOps',
//         icon: '☁️',
//         accent: 'from-cyan-500 to-blue-500',
//         glow: 'bg-cyan-500/20',
//         border: 'hover:border-cyan-500/40',
//         tag: 'Scalability',
//         description:
//             'Architect resilient, auto-scaling cloud environments across AWS, GCP, and Azure. We handle everything from multi-cloud strategy and cost optimisation to CI/CD pipelines and zero-downtime deployments.',
//         features: ['Multi-Cloud Architecture', 'Kubernetes & Docker', 'CI/CD Pipelines', 'Cost Optimisation', 'Disaster Recovery', 'Infrastructure as Code'],
//         img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1200',
//     },
//     {
//         id: '03',
//         title: 'Cyber Security',
//         short: 'Security & Compliance',
//         icon: '🔐',
//         accent: 'from-rose-500 to-orange-500',
//         glow: 'bg-rose-500/15',
//         border: 'hover:border-rose-500/40',
//         tag: 'Protection',
//         description:
//             'End-to-end security posture management — penetration testing, threat modelling, SOC setup, and compliance readiness (ISO 27001, GDPR, SOC 2). We harden your systems before attackers find the cracks.',
//         features: ['Penetration Testing', 'Threat Modelling', 'SOC Implementation', 'GDPR & ISO 27001', 'Zero-Trust Architecture', 'Incident Response'],
//         img: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1200',
//     },
//     {
//         id: '04',
//         title: 'Web Applications',
//         short: 'Web Development',
//         icon: '🌐',
//         accent: 'from-emerald-500 to-teal-500',
//         glow: 'bg-emerald-500/15',
//         border: 'hover:border-emerald-500/40',
//         tag: 'Experience',
//         description:
//             'Full-stack web applications built for speed, scale, and conversion. From React and Next.js frontends to robust Node, Python, or Go backends — we ship products that feel as good as they perform.',
//         features: ['React / Next.js', 'Node & Python APIs', 'Performance Optimisation', 'PWA & Offline-first', 'CMS Integration', 'A/B Testing & Analytics'],
//         img: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1200',
//     },
//     {
//         id: '05',
//         title: 'Mobile Apps',
//         short: 'iOS & Android',
//         icon: '📱',
//         accent: 'from-amber-500 to-yellow-400',
//         glow: 'bg-amber-500/15',
//         border: 'hover:border-amber-500/40',
//         tag: 'Mobile-first',
//         description:
//             'Native and cross-platform mobile experiences that users love to open. React Native and Flutter for cross-platform reach; Swift and Kotlin for maximum native performance — shipped with rigorous QA.',
//         features: ['React Native & Flutter', 'Swift & Kotlin Native', 'Offline Sync', 'Push Notifications', 'App Store Optimisation', 'Performance Profiling'],
//         img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200',
//     },
//     {
//         id: '06',
//         title: 'E-Commerce',
//         short: 'Commerce Platforms',
//         icon: '🛒',
//         accent: 'from-pink-500 to-fuchsia-500',
//         glow: 'bg-pink-500/15',
//         border: 'hover:border-pink-500/40',
//         tag: 'Revenue',
//         description:
//             'High-converting commerce experiences built on Shopify, custom headless stacks, or bespoke platforms. From catalogue management and payment integrations to personalisation engines and inventory automation.',
//         features: ['Headless Commerce', 'Shopify & Custom', 'Payment Gateways', 'Personalisation Engine', 'Inventory Automation', 'Conversion Optimisation'],
//         img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200',
//     },
// ];


/* ─────────────────────────────────────────
    SCROLL FADE-UP WRAPPER
───────────────────────────────────────── */
const ScrollSection = ({ children, className = '', delay = 0 }) => {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        const ctx = gsap.context(() => {
            gsap.fromTo(el,
                { y: 60, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 1.1, ease: 'power4.out', delay,
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 85%',
                        toggleActions: 'play none none none',
                    },
                }
            );
        });
        return () => ctx.revert();
    }, [delay]);

    return <div ref={ref} className={className}>{children}</div>;
};

/* ─────────────────────────────────────────
    HERO BANNER
───────────────────────────────────────── */
const HeroBanner = () => {
    const heroRef = useRef(null);
    const titleRef = useRef(null);
    const subRef = useRef(null);
    const lineRef = useRef(null);
    const scrollRef = useRef(null);
    const tagsRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

            tl.fromTo(
                titleRef.current.querySelectorAll('.word'),
                { y: 90, opacity: 0, skewY: 5 },
                { y: 0, opacity: 1, skewY: 0, duration: 1.2, stagger: 0.1 }
            )
                .fromTo(lineRef.current,
                    { scaleX: 0, transformOrigin: 'left center' },
                    { scaleX: 1, duration: 0.8, ease: 'power3.inOut' }, '-=0.6'
                )
                .fromTo(subRef.current,
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.9 }, '-=0.5'
                )
                .fromTo(tagsRef.current.children,
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.6, stagger: 0.08 }, '-=0.4'
                )
                .fromTo(scrollRef.current,
                    { opacity: 0, y: -10 },
                    { opacity: 1, y: 0, duration: 0.5 }, '-=0.2'
                );

            gsap.to(scrollRef.current, {
                y: 10, duration: 1.4, ease: 'sine.inOut',
                repeat: -1, yoyo: true, delay: 2.5,
            });

            gsap.to('.svc-hero-bg', {
                yPercent: 20, ease: 'none',
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                },
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    const tags = SERVICES.map((s) => s.short);

    return (
        <section
            ref={heroRef}
            className="relative py-32 flex flex-col items-center justify-center overflow-hidden bg-black text-white"
        >
            <div className="absolute inset-0 z-0">
                <img
                    className="svc-hero-bg w-full h-full object-cover opacity-25"
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070"
                    alt=""
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black" />
            </div>

            <div className="absolute top-1/3 -left-40 w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
                <p className="text-[10px] md:text-xs tracking-[0.5em] uppercase font-semibold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-6">
                    What We Do
                </p>

                <h1
                    ref={titleRef}
                    className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-black leading-none tracking-tight mb-0"
                >
                    <span className="word inline-block mr-[0.25em]">Our</span>
                    <span
                        className="word inline-block text-transparent"
                        style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.4)' }}
                    >
                        Services.
                    </span>
                </h1>

                <div
                    ref={lineRef}
                    className="my-7 h-[3px] w-32 mx-auto rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500"
                />

                <p
                    ref={subRef}
                    className="text-base md:text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto mb-10"
                >
                    From intelligent automation to bulletproof infrastructure — we engineer
                    end-to-end digital solutions built to scale with your ambitions.
                </p>

                <div ref={tagsRef} className="flex flex-wrap justify-center gap-3">
                    {tags.map((t) => (
                        <span
                            key={t}
                            className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-300 tracking-wider uppercase backdrop-blur-sm"
                        >
                            {t}
                        </span>
                    ))}
                </div>
            </div>

            <div
                ref={scrollRef}
                className="absolute bottom-10 z-10 flex flex-col items-center gap-2 opacity-50"
            >
                <span className="text-[10px] tracking-[0.3em] uppercase text-zinc-400">Scroll</span>
                <div className="w-[1px] h-10 bg-gradient-to-b from-indigo-400 to-transparent" />
            </div>
        </section>
    );
};

/* ─────────────────────────────────────────
    SERVICE CARD (alternating layout)
───────────────────────────────────────── */
const ServiceCard = ({ service, index }) => {
    const ref = useRef(null);
    const imgRef = useRef(null);
    const textRef = useRef(null);
    const isEven = index % 2 === 0;

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(textRef.current,
                { x: isEven ? -50 : 50, opacity: 0 },
                {
                    x: 0, opacity: 1, duration: 1.1, ease: 'power4.out',
                    scrollTrigger: {
                        trigger: ref.current,
                        start: 'top 80%',
                        toggleActions: 'play none none none',
                    },
                }
            );
            gsap.fromTo(imgRef.current,
                { x: isEven ? 50 : -50, opacity: 0, scale: 0.95 },
                {
                    x: 0, opacity: 1, scale: 1, duration: 1.1, ease: 'power4.out', delay: 0.15,
                    scrollTrigger: {
                        trigger: ref.current,
                        start: 'top 80%',
                        toggleActions: 'play none none none',
                    },
                }
            );
        }, ref);
        return () => ctx.revert();
    }, [isEven]);

    return (
        <div ref={ref} className="relative py-20 md:py-28">
            <div className="absolute inset-x-0 top-0 h-[1px] bg-zinc-200" />

            <div className="max-w-[1300px] mx-auto px-6 md:px-12 lg:px-20">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${isEven ? '' : 'lg:grid-flow-col-dense'}`}>

                    {/* TEXT */}
                    <div
                        ref={textRef}
                        className={`flex flex-col ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <span className={`text-5xl font-black bg-gradient-to-r ${service.accent} bg-clip-text text-transparent opacity-20 leading-none`}>
                                {service.id}
                            </span>
                            <span className={`px-3 py-1 rounded-full text-[10px] tracking-[0.3em] uppercase font-bold bg-gradient-to-r ${service.accent} bg-clip-text text-transparent border border-zinc-200`}>
                                {service.tag}
                            </span>
                        </div>

                        <div className="flex items-center gap-3 mb-3">
                            <span className="text-3xl">{service.icon}</span>
                            <p className={`text-[10px] tracking-[0.5em] uppercase font-bold bg-gradient-to-r ${service.accent} bg-clip-text text-transparent`}>
                                {service.short}
                            </p>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-black leading-[1.1] tracking-tight mb-5 text-zinc-900">
                            {service.title}
                        </h2>

                        <div className={`w-16 h-[3px] rounded-full bg-gradient-to-r ${service.accent} mb-6`} />

                        <p className="text-zinc-600 font-medium text-sm md:text-base leading-relaxed mb-8">
                            {service.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-8">
                            {service.features.map((f) => (
                                <span
                                    key={f.name}
                                    className="px-3 py-1.5 rounded-full border border-zinc-200 bg-white text-xs text-zinc-600 font-medium shadow-sm"
                                >
                                    {f.name}
                                </span>
                            ))}
                        </div>

                        <Link
                            to={`/services/${service.id}`}
                            className={`self-start px-7 py-3.5 rounded-full bg-gradient-to-r ${service.accent} text-white font-semibold text-sm tracking-wider hover:opacity-85 transition-all duration-300 shadow-lg hover:scale-105`}
                        >
                            Learn More — Explore {service.short}
                        </Link>
                    </div>

                    {/* IMAGE */}
                    <div
                        ref={imgRef}
                        className={`relative ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
                    >
                        <div className={`absolute -inset-4 ${service.glow} rounded-3xl blur-3xl opacity-40`} />

                        <div className="relative rounded-3xl overflow-hidden border border-zinc-200 shadow-xl">
                            <img
                                src={service.img}
                                alt={service.title}
                                className="w-full h-[320px] md:h-[420px] object-cover"
                            />
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-10`} />
                        </div>

                        <div className={`absolute -bottom-5 ${isEven ? '-right-4' : '-left-4'} hidden md:flex items-center gap-3 bg-white/90 backdrop-blur-md border border-zinc-200 rounded-2xl px-5 py-3 shadow-lg`}>
                            <span className="text-2xl">{service.icon}</span>
                            <div>
                                <p className={`text-[10px] tracking-widest uppercase bg-gradient-to-r ${service.accent} bg-clip-text text-transparent font-bold`}>
                                    {service.tag}
                                </p>
                                <p className="text-zinc-900 text-sm font-black">{service.short}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

/* ─────────────────────────────────────────
    MINI SERVICE GRID
───────────────────────────────────────── */
const ServiceGrid = () => {
    const ref = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ref.current.querySelectorAll('.mini-card'),
                { y: 40, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 0.9, ease: 'power4.out', stagger: 0.1,
                    scrollTrigger: {
                        trigger: ref.current,
                        start: 'top 85%',
                        toggleActions: 'play none none none',
                    },
                }
            );
        }, ref);
        return () => ctx.revert();
    }, []);

    return (
        <section className="py-24 border-y border-zinc-200">
            <div className="max-w-[1300px] mx-auto px-6 md:px-12 lg:px-20">
                <ScrollSection className="text-center mb-14">
                    <p className="text-[10px] md:text-xs tracking-[0.5em] uppercase font-bold bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent mb-4">
                        At a Glance
                    </p>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900">
                        Everything Under One Roof
                    </h2>
                </ScrollSection>

                <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {SERVICES.map((s) => (
                        <div
                            key={s.id}
                            className={`mini-card group flex flex-col items-center text-center gap-3 p-6 rounded-2xl border border-zinc-200 bg-white shadow-sm ${s.border} hover:bg-zinc-50 transition-all duration-500 cursor-default hover:shadow-md`}
                        >
                            <span className="text-3xl">{s.icon}</span>
                            <span className={`text-xs font-bold bg-gradient-to-r ${s.accent} bg-clip-text text-transparent tracking-wide`}>
                                {s.short}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

/* ─────────────────────────────────────────
    CTA SECTION
───────────────────────────────────────── */
const CTASection = () => (
    <section className="relative py-28 md:py-40 overflow-hidden bg-zinc-900">
        <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/60 via-zinc-900 to-zinc-900" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-600/10 rounded-full blur-3xl" />
        </div>
        <ScrollSection className="relative z-10 text-center px-6 max-w-3xl mx-auto">
            <p className="text-[10px] md:text-xs tracking-[0.5em] uppercase font-semibold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-6">
                Let's Work Together
            </p>
            <h2 className="text-4xl md:text-6xl font-black leading-tight tracking-tight mb-4 text-white">
                Not sure where{' '}
                <span
                    className="text-transparent"
                    style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.4)' }}
                >
                    to start?
                </span>
            </h2>
            <p className="text-zinc-400 text-base md:text-lg mb-10 max-w-xl mx-auto">
                Tell us about your challenge and we'll map the right technology to the right outcome — no jargon, no fluff.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">

                <Link
                    to="/contact"
                    className="px-8 py-4 text-center rounded-full 
               bg-gradient-to-r from-indigo-600 to-cyan-600 
               text-white font-semibold text-sm tracking-wider 
               hover:opacity-90 transition-opacity duration-300 
               shadow-[0_0_40px_-8px_rgba(99,102,241,0.6)]"
                >
                    Book a Free Consultation
                </Link>

                <Link
                    to="/blogs"
                    className="px-8 py-4 text-center rounded-full 
               border border-white/20 text-white 
               font-semibold text-sm tracking-wider 
               hover:bg-white/5 transition-colors duration-300"
                >
                    View Case Studies
                </Link>

            </div>

        </ScrollSection>
    </section>
);

/* ─────────────────────────────────────────
    MAIN SERVICES PAGE
───────────────────────────────────────── */
const ServicesPage = () => {
    return (
        <div className="bg-zinc-50 text-zinc-900 font-sans selection:bg-indigo-100">
            <Navbar />
            <HeroBanner />
            {/* <ServiceGrid /> */}
            {SERVICES.map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} />
            ))}
            <CTASection />
        </div>
    );
};

export default ServicesPage;