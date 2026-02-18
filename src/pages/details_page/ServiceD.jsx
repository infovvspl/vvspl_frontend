import React, { useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../../components/Navbar';

// Assuming SERVICES data is imported or in the same file
// import { SERVICES } from './ServicesPage'; 
const SERVICES = [
    {
        id: '01',
        title: 'AI / ML Solutions',
        short: 'Artificial Intelligence',
        icon: '🤖',
        accent: 'from-indigo-500 to-violet-500',
        glow: 'bg-indigo-600/20',
        border: 'hover:border-indigo-500/40',
        tag: 'Intelligence',
        description:
            'We design and deploy production-ready AI and machine learning systems — from predictive analytics and NLP pipelines to computer vision and generative AI integrations that transform raw data into competitive advantage.',
        features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'GenAI Integration', 'Model Fine-tuning', 'MLOps & Monitoring'],
        img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=1200',
    },
    {
        id: '02',
        title: 'Cloud Infrastructure',
        short: 'Cloud & DevOps',
        icon: '☁️',
        accent: 'from-cyan-500 to-blue-500',
        glow: 'bg-cyan-500/20',
        border: 'hover:border-cyan-500/40',
        tag: 'Scalability',
        description:
            'Architect resilient, auto-scaling cloud environments across AWS, GCP, and Azure. We handle everything from multi-cloud strategy and cost optimisation to CI/CD pipelines and zero-downtime deployments.',
        features: ['Multi-Cloud Architecture', 'Kubernetes & Docker', 'CI/CD Pipelines', 'Cost Optimisation', 'Disaster Recovery', 'Infrastructure as Code'],
        img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1200',
    },
    {
        id: '03',
        title: 'Cyber Security',
        short: 'Security & Compliance',
        icon: '🔐',
        accent: 'from-rose-500 to-orange-500',
        glow: 'bg-rose-500/15',
        border: 'hover:border-rose-500/40',
        tag: 'Protection',
        description:
            'End-to-end security posture management — penetration testing, threat modelling, SOC setup, and compliance readiness (ISO 27001, GDPR, SOC 2). We harden your systems before attackers find the cracks.',
        features: ['Penetration Testing', 'Threat Modelling', 'SOC Implementation', 'GDPR & ISO 27001', 'Zero-Trust Architecture', 'Incident Response'],
        img: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1200',
    },
    {
        id: '04',
        title: 'Web Applications',
        short: 'Web Development',
        icon: '🌐',
        accent: 'from-emerald-500 to-teal-500',
        glow: 'bg-emerald-500/15',
        border: 'hover:border-emerald-500/40',
        tag: 'Experience',
        description:
            'Full-stack web applications built for speed, scale, and conversion. From React and Next.js frontends to robust Node, Python, or Go backends — we ship products that feel as good as they perform.',
        features: ['React / Next.js', 'Node & Python APIs', 'Performance Optimisation', 'PWA & Offline-first', 'CMS Integration', 'A/B Testing & Analytics'],
        img: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1200',
    },
    {
        id: '05',
        title: 'Mobile Apps',
        short: 'iOS & Android',
        icon: '📱',
        accent: 'from-amber-500 to-yellow-400',
        glow: 'bg-amber-500/15',
        border: 'hover:border-amber-500/40',
        tag: 'Mobile-first',
        description:
            'Native and cross-platform mobile experiences that users love to open. React Native and Flutter for cross-platform reach; Swift and Kotlin for maximum native performance — shipped with rigorous QA.',
        features: ['React Native & Flutter', 'Swift & Kotlin Native', 'Offline Sync', 'Push Notifications', 'App Store Optimisation', 'Performance Profiling'],
        img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200',
    },
    {
        id: '06',
        title: 'E-Commerce',
        short: 'Commerce Platforms',
        icon: '🛒',
        accent: 'from-pink-500 to-fuchsia-500',
        glow: 'bg-pink-500/15',
        border: 'hover:border-pink-500/40',
        tag: 'Revenue',
        description:
            'High-converting commerce experiences built on Shopify, custom headless stacks, or bespoke platforms. From catalogue management and payment integrations to personalisation engines and inventory automation.',
        features: ['Headless Commerce', 'Shopify & Custom', 'Payment Gateways', 'Personalisation Engine', 'Inventory Automation', 'Conversion Optimisation'],
        img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200',
    },
];

gsap.registerPlugin(ScrollTrigger);

const ServiceDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const service = SERVICES.find(s => s.id === id);

    const containerRef = useRef(null);
    const heroContentRef = useRef(null);
    const detailsRef = useRef(null);

    // Redirect if service not found
    useEffect(() => {
        if (!service) navigate('/services');
    }, [service, navigate]);

    useEffect(() => {
        if (!service) return;

        let ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1.4 } });

            // Hero Animation
            tl.fromTo(".hero-bg", { scale: 1.2, opacity: 0 }, { scale: 1, opacity: 0.4, duration: 2 })
                .fromTo(".back-btn", { x: -20, opacity: 0 }, { x: 0, opacity: 1 }, "-=1.5")
                .fromTo(".hero-text > *", { y: 60, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.2 }, "-=1.2")
                .fromTo(".feature-tag", { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, stagger: 0.1 }, "-=1");

            // Scroll Reveal for body content
            gsap.from(".detail-card", {
                y: 100,
                opacity: 0,
                stagger: 0.3,
                scrollTrigger: {
                    trigger: ".details-grid",
                    start: "top 80%",
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, [service]);

    if (!service) return null;

    return (
        <div ref={containerRef} className="bg-black text-white font-sans overflow-hidden">
            <Navbar />

            {/* ================= HERO SECTION ================= */}
            <section className="relative h-[70vh] md:h-[85vh] flex items-center justify-center px-6 overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={service.img}
                        className="hero-bg w-full h-full object-cover"
                        alt={service.title}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black`} />
                    <div className={`absolute inset-0 bg-gradient-to-r ${service.accent} opacity-20`} />
                </div>

                <div className="relative z-10 w-full max-w-7xl mx-auto pt-20">
                    <Link to="/services" className="back-btn group inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-12">
                        <span className="text-xl group-hover:-translate-x-1 transition-transform">←</span>
                        <span className="text-xs tracking-widest uppercase font-semibold">Back to Services</span>
                    </Link>

                    <div className="hero-text max-w-4xl">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="text-4xl md:text-6xl">{service.icon}</span>
                            <div className={`h-[2px] w-20 bg-gradient-to-r ${service.accent}`} />
                        </div>
                        <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none mb-8">
                            {service.title.split(' ')[0]} <br />
                            <span className="text-transparent" style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.4)' }}>
                                {service.title.split(' ').slice(1).join(' ')}
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-zinc-300 font-light max-w-2xl leading-relaxed">
                            {service.description}
                        </p>
                    </div>
                </div>
            </section>

            {/* ================= DETAILS GRID ================= */}
            <section className="relative z-10 py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="details-grid grid grid-cols-1 lg:grid-cols-3 gap-8">

                        {/* Capabilities Column */}
                        <div className="detail-card lg:col-span-2 space-y-12">
                            <div>
                                <h3 className="text-xs tracking-[0.4em] uppercase font-bold text-zinc-500 mb-8">Core Capabilities</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {service.features.map((feature, i) => (
                                        <div key={i} className="group p-8 rounded-3xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all duration-500">
                                            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${service.accent} flex items-center justify-center mb-6 opacity-80 group-hover:opacity-100 transition-opacity`}>
                                                <span className="text-white text-lg font-bold">{i + 1}</span>
                                            </div>
                                            <h4 className="text-xl font-bold mb-3">{feature}</h4>
                                            <p className="text-zinc-400 text-sm leading-relaxed">
                                                Advanced implementation strategies tailored for {feature.toLowerCase()} within your existing technical ecosystem.
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar / CTA Column */}
                        <div className="detail-card space-y-8">
                            <div className="p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900 to-black sticky top-32">
                                <h3 className="text-2xl font-bold mb-4">Start your Project</h3>
                                <p className="text-zinc-400 text-sm mb-8 leading-relaxed">
                                    Ready to deploy {service.short}? Our engineers are standing by to help you architect the perfect solution.
                                </p>
                                <button className={`w-full py-4 rounded-full bg-gradient-to-r ${service.accent} text-white font-bold tracking-wider hover:scale-[1.02] transition-transform shadow-xl mb-4`}>
                                    Get Started
                                </button>
                                <button className="w-full py-4 rounded-full border border-white/10 text-white font-bold tracking-wider hover:bg-white/5 transition-colors">
                                    Download Stack PDF
                                </button>

                                <div className="mt-12 pt-8 border-t border-white/5">
                                    <p className="text-[10px] tracking-widest uppercase text-zinc-500 mb-4">Technologies we use</p>
                                    <div className="flex flex-wrap gap-2">
                                        {['Docker', 'AWS', 'Terraform', 'Python', 'React'].map(tech => (
                                            <span key={tech} className="px-3 py-1 rounded-md bg-white/5 text-[10px] text-zinc-300 border border-white/5">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetails;