import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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
                    scrollTrigger: { trigger: el, start: 'top 86%', toggleActions: 'play none none none' },
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
    const heroRef  = useRef(null);
    const titleRef = useRef(null);
    const subRef   = useRef(null);
    const lineRef  = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
            tl.fromTo(
                titleRef.current.querySelectorAll('.word'),
                { y: 90, opacity: 0, skewY: 5 },
                { y: 0, opacity: 1, skewY: 0, duration: 1.2, stagger: 0.11 }
            )
            .fromTo(lineRef.current,
                { scaleX: 0, transformOrigin: 'left center' },
                { scaleX: 1, duration: 0.8, ease: 'power3.inOut' }, '-=0.6'
            )
            .fromTo(subRef.current,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.9 }, '-=0.5'
            );

            gsap.to('.contact-hero-bg', {
                yPercent: 20, ease: 'none',
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: 'top top', end: 'bottom top', scrub: true,
                },
            });
        }, heroRef);
        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={heroRef}
            className="relative py-32 flex flex-col items-center justify-center overflow-hidden bg-black text-white"
        >
            <div className="absolute inset-0 z-0">
                <img
                    className="contact-hero-bg w-full h-full object-cover opacity-20"
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070"
                    alt=""
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black" />
            </div>

            {/* Glows */}
            <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 -right-32 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                <p className="text-[10px] md:text-xs tracking-[0.5em] uppercase font-semibold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-6">
                    Let's Connect
                </p>

                <h1
                    ref={titleRef}
                    className="text-5xl sm:text-7xl md:text-8xl font-black leading-none tracking-tight"
                >
                    {['Get', 'In'].map((w) => (
                        <span key={w} className="word inline-block mr-[0.22em]">{w}</span>
                    ))}
                    <span
                        className="word inline-block text-transparent"
                        style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.4)' }}
                    >
                        Touch.
                    </span>
                </h1>

                <div
                    ref={lineRef}
                    className="my-7 h-[3px] w-32 mx-auto rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500"
                />

                <p
                    ref={subRef}
                    className="text-base md:text-xl text-zinc-400 leading-relaxed max-w-xl mx-auto"
                >
                    Whether it's a project, a partnership, or just a conversation —
                    we'd love to hear from you. We respond within 24 hours.
                </p>
            </div>
        </section>
    );
};

/* ─────────────────────────────────────────
   CONTACT INFO CARDS
───────────────────────────────────────── */
const InfoCards = () => {
    const ref = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ref.current.querySelectorAll('.info-card'),
                { y: 40, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 0.9, ease: 'power4.out', stagger: 0.12,
                    scrollTrigger: { trigger: ref.current, start: 'top 86%', toggleActions: 'play none none none' },
                }
            );
        }, ref);
        return () => ctx.revert();
    }, []);

    const cards = [
        {
            icon: '📍',
            label: 'Our Office',
            lines: ['123 Innovation Tower', 'Tech District, Dubai, UAE'],
            accent: 'from-indigo-500 to-violet-500',
        },
        {
            icon: '✉️',
            label: 'Email Us',
            lines: ['hello@yourcompany.com', 'support@yourcompany.com'],
            accent: 'from-cyan-500 to-blue-500',
        },
        {
            icon: '📞',
            label: 'Call Us',
            lines: ['+971 50 000 0000', 'Mon–Fri, 9am – 6pm GST'],
            accent: 'from-indigo-400 to-cyan-400',
        },
        {
            icon: '🌐',
            label: 'Follow Us',
            lines: ['LinkedIn  ·  Twitter / X', 'Instagram  ·  YouTube'],
            accent: 'from-violet-500 to-indigo-400',
        },
    ];

    return (
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
            {cards.map((c) => (
                <div
                    key={c.label}
                    className="info-card group relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-indigo-500/30 hover:bg-white/8 transition-all duration-500"
                >
                    <div className={`absolute -top-px left-6 w-12 h-[2px] rounded-full bg-gradient-to-r ${c.accent}`} />
                    <span className="text-2xl mb-3 block">{c.icon}</span>
                    <p className={`text-[10px] tracking-[0.4em] uppercase font-semibold bg-gradient-to-r ${c.accent} bg-clip-text text-transparent mb-2`}>
                        {c.label}
                    </p>
                    {c.lines.map((l) => (
                        <p key={l} className="text-sm text-zinc-400 leading-relaxed">{l}</p>
                    ))}
                </div>
            ))}
        </div>
    );
};

/* ─────────────────────────────────────────
   CUSTOM INPUT
───────────────────────────────────────── */
const Field = ({ label, type = 'text', name, value, onChange, placeholder, required }) => (
    <div className="flex flex-col gap-2">
        <label className="text-[10px] tracking-[0.35em] uppercase text-zinc-400 font-semibold">
            {label}{required && <span className="text-indigo-400 ml-1">*</span>}
        </label>
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500/60 focus:bg-white/8 transition-all duration-300"
        />
    </div>
);

const TextArea = ({ label, name, value, onChange, placeholder, required, rows = 5 }) => (
    <div className="flex flex-col gap-2">
        <label className="text-[10px] tracking-[0.35em] uppercase text-zinc-400 font-semibold">
            {label}{required && <span className="text-indigo-400 ml-1">*</span>}
        </label>
        <textarea
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            rows={rows}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500/60 focus:bg-white/8 transition-all duration-300 resize-none"
        />
    </div>
);

/* ─────────────────────────────────────────
   CONTACT FORM
───────────────────────────────────────── */
const ContactForm = () => {
    const formRef  = useRef(null);
    const [status, setStatus] = useState('idle'); // idle | sending | sent | error
    const [form, setForm] = useState({
        name: '', email: '', phone: '', company: '', subject: '', service: '', message: '',
    });

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                formRef.current.querySelectorAll('.form-row'),
                { y: 30, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 0.8, ease: 'power4.out', stagger: 0.1, delay: 0.2,
                    scrollTrigger: { trigger: formRef.current, start: 'top 82%', toggleActions: 'play none none none' },
                }
            );
        }, formRef);
        return () => ctx.revert();
    }, []);

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');

        // Simulate async send
        setTimeout(() => {
            setStatus('sent');
        }, 1800);
    };

    const services = [
        'AI / ML Solutions',
        'Cloud Infrastructure',
        'Cyber Security',
        'Web Applications',
        'Mobile Apps',
        'E-Commerce',
        'Trade & Transport',
        'Land Acquisition',
        'Mining & Minerals',
        'Power & Energy',
        'Organic Farming',
        'Other / General Enquiry',
    ];

    if (status === 'sent') {
        return (
            <div ref={formRef} className="flex flex-col items-center justify-center text-center py-20 gap-6">
                <div className="text-6xl">✅</div>
                <h3 className="text-3xl font-black text-white">Message Sent!</h3>
                <p className="text-zinc-400 max-w-sm leading-relaxed">
                    Thanks for reaching out. We'll get back to you within 24 hours.
                </p>
                <button
                    onClick={() => { setStatus('idle'); setForm({ name: '', email: '', phone: '', company: '', subject: '', service: '', message: '' }); }}
                    className="mt-2 px-6 py-3 rounded-full border border-white/20 text-sm text-zinc-300 hover:bg-white/5 transition-colors duration-300"
                >
                    Send Another Message
                </button>
            </div>
        );
    }

    return (
        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">

            {/* Row 1 — Name + Email */}
            <div className="form-row grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Full Name"     name="name"    value={form.name}    onChange={handleChange} placeholder="Alex Mercer"          required />
                <Field label="Email Address" name="email"   value={form.email}   onChange={handleChange} placeholder="alex@company.com" type="email" required />
            </div>

            {/* Row 2 — Phone + Company */}
            <div className="form-row grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Phone Number"  name="phone"   value={form.phone}   onChange={handleChange} placeholder="+1 000 000 0000"   type="tel" />
                <Field label="Company"       name="company" value={form.company} onChange={handleChange} placeholder="Your Company Ltd." />
            </div>

            {/* Row 3 — Service interest */}
            <div className="form-row flex flex-col gap-2">
                <label className="text-[10px] tracking-[0.35em] uppercase text-zinc-400 font-semibold">
                    I'm interested in<span className="text-indigo-400 ml-1">*</span>
                </label>
                <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white focus:outline-none focus:border-indigo-500/60 focus:bg-white/8 transition-all duration-300 appearance-none cursor-pointer"
                >
                    <option value="" disabled className="bg-zinc-900">Select a service or venture…</option>
                    {services.map((s) => (
                        <option key={s} value={s} className="bg-zinc-900">{s}</option>
                    ))}
                </select>
            </div>

            {/* Row 4 — Subject */}
            <div className="form-row">
                <Field label="Subject" name="subject" value={form.subject} onChange={handleChange} placeholder="How can we help?" required />
            </div>

            {/* Row 5 — Message */}
            <div className="form-row">
                <TextArea
                    label="Your Message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project, timeline, and goals…"
                    required
                    rows={6}
                />
            </div>

            {/* Row 6 — Submit */}
            <div className="form-row flex items-center gap-5 pt-2">
                <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="relative px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-semibold text-sm tracking-wider hover:opacity-90 disabled:opacity-60 transition-all duration-300 shadow-[0_0_40px_-8px_rgba(99,102,241,0.5)] min-w-[160px]"
                >
                    {status === 'sending' ? (
                        <span className="flex items-center justify-center gap-2">
                            <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                            Sending…
                        </span>
                    ) : 'Send Message →'}
                </button>
                <p className="text-xs text-zinc-500 leading-relaxed">
                    We respect your privacy.<br />No spam, ever.
                </p>
            </div>

        </form>
    );
};

/* ─────────────────────────────────────────
   MAP PLACEHOLDER
───────────────────────────────────────── */
const MapBlock = () => (
    <ScrollSection className="relative rounded-3xl overflow-hidden border border-white/10 h-64 md:h-80">
        <img
            src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1400"
            alt="Office location"
            className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
            <span className="text-3xl">📍</span>
            <p className="text-white font-bold text-lg">Dubai, UAE</p>
            <p className="text-zinc-400 text-xs tracking-widest uppercase">Innovation Tower, Tech District</p>
            <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 px-5 py-2 rounded-full border border-white/20 text-xs text-zinc-300 hover:bg-white/10 transition-colors duration-300"
            >
                Open in Maps ↗
            </a>
        </div>
    </ScrollSection>
);

/* ─────────────────────────────────────────
   FAQ ROW
───────────────────────────────────────── */
const faqs = [
    { q: 'How quickly do you respond to enquiries?', a: 'We aim to respond to all enquiries within 24 hours on business days. Urgent matters can be flagged in your message subject.' },
    { q: 'Do you work with international clients?', a: 'Absolutely. We work with clients across 15+ countries and are experienced in managing remote collaboration, time zones, and cross-border engagements.' },
    { q: 'Can I schedule a call before committing to a project?', a: 'Yes — we offer a free 30-minute discovery call to understand your needs and see if were a good fit, with zero obligation.' },
    { q: 'How do engagements typically start?', a: 'After an initial consultation, we prepare a scoped proposal with timelines and deliverables. Projects typically kick off within 1–2 weeks of agreement.' },
];

const FAQItem = ({ q, a, delay }) => {
    const [open, setOpen] = useState(false);
    const bodyRef = useRef(null);

    useEffect(() => {
        if (open) {
            gsap.fromTo(bodyRef.current,
                { height: 0, opacity: 0 },
                { height: 'auto', opacity: 1, duration: 0.4, ease: 'power3.out' }
            );
        } else {
            gsap.to(bodyRef.current,
                { height: 0, opacity: 0, duration: 0.3, ease: 'power3.in' }
            );
        }
    }, [open]);

    return (
        <ScrollSection delay={delay} className="border-b border-white/8">
            <button
                onClick={() => setOpen((p) => !p)}
                className="w-full flex items-center justify-between gap-4 py-5 text-left group"
            >
                <span className="text-sm md:text-base font-semibold text-white group-hover:text-indigo-300 transition-colors duration-300">
                    {q}
                </span>
                <span
                    className="text-indigo-400 text-xl flex-shrink-0 transition-transform duration-300"
                    style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)' }}
                >
                    +
                </span>
            </button>
            <div ref={bodyRef} style={{ height: 0, overflow: 'hidden', opacity: 0 }}>
                <p className="text-sm text-zinc-400 leading-relaxed pb-5">{a}</p>
            </div>
        </ScrollSection>
    );
};

/* ─────────────────────────────────────────
   MAIN CONTACT PAGE
───────────────────────────────────────── */
const ContactPage = () => {
    const formSectionRef = useRef(null);
    const leftRef        = useRef(null);
    const rightRef       = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(leftRef.current,
                { x: -50, opacity: 0 },
                {
                    x: 0, opacity: 1, duration: 1.1, ease: 'power4.out',
                    scrollTrigger: { trigger: formSectionRef.current, start: 'top 80%', toggleActions: 'play none none none' },
                }
            );
            gsap.fromTo(rightRef.current,
                { x: 50, opacity: 0 },
                {
                    x: 0, opacity: 1, duration: 1.1, ease: 'power4.out', delay: 0.15,
                    scrollTrigger: { trigger: formSectionRef.current, start: 'top 80%', toggleActions: 'play none none none' },
                }
            );
        }, formSectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <div className="bg-black text-white font-sans">

            {/* 1 ── HERO */}
            <HeroBanner />

            {/* 2 ── INFO CARDS */}
            <section className="py-16 border-b border-white/5">
                <div className="max-w-[1300px] mx-auto px-6 md:px-12 lg:px-20">
                    <InfoCards />
                </div>
            </section>

            {/* 3 ── FORM + SIDEBAR */}
            <section ref={formSectionRef} className="py-24 md:py-32">
                <div className="max-w-[1300px] mx-auto px-6 md:px-12 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-20 items-start">

                        {/* LEFT — FORM */}
                        <div ref={leftRef}>
                            <p className="text-[10px] md:text-xs tracking-[0.5em] uppercase font-semibold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                                Send a Message
                            </p>
                            <h2 className="text-3xl md:text-5xl font-black leading-[1.1] tracking-tight mb-3">
                                Tell us about{' '}
                                <span
                                    className="text-transparent"
                                    style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)' }}
                                >
                                    your project.
                                </span>
                            </h2>
                            <div className="w-16 h-[3px] rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 mb-10" />
                            <ContactForm />
                        </div>

                        {/* RIGHT — SIDEBAR */}
                        <div ref={rightRef} className="flex flex-col gap-6 lg:pt-[88px]">

                            {/* Why Us */}
                            <div className="relative p-7 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden">
                                <div className="absolute -top-8 -right-8 w-32 h-32 bg-indigo-600/20 rounded-full blur-2xl" />
                                <p className="text-[10px] tracking-[0.4em] uppercase text-indigo-400 mb-4 font-semibold">Why Work With Us</p>
                                <ul className="flex flex-col gap-3">
                                    {[
                                        '✦  Dedicated project manager',
                                        '✦  Transparent pricing',
                                        '✦  Agile, sprint-based delivery',
                                        '✦  Post-launch support included',
                                        '✦  NDA available on request',
                                    ].map((item) => (
                                        <li key={item} className="text-sm text-zinc-400 leading-relaxed">{item}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* Response time */}
                            <div className="p-7 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                                <p className="text-[10px] tracking-[0.4em] uppercase text-cyan-400 mb-3 font-semibold">Response Time</p>
                                <p className="text-4xl font-black bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-1">
                                    &lt; 24h
                                </p>
                                <p className="text-xs text-zinc-500">on all business day enquiries</p>
                            </div>

                            {/* Map */}
                            <MapBlock />

                        </div>
                    </div>
                </div>
            </section>

            {/* 4 ── FAQ */}
            <section className="py-24 border-t border-white/5">
                <div className="max-w-[1300px] mx-auto px-6 md:px-12 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

                        <ScrollSection>
                            <p className="text-[10px] md:text-xs tracking-[0.5em] uppercase font-semibold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                                Common Questions
                            </p>
                            <h2 className="text-3xl md:text-5xl font-black leading-[1.1] tracking-tight">
                                Before you{' '}
                                <span
                                    className="text-transparent"
                                    style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)' }}
                                >
                                    reach out.
                                </span>
                            </h2>
                            <div className="w-16 h-[3px] rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 mt-6" />
                        </ScrollSection>

                        <div className="flex flex-col border-t border-white/8">
                            {faqs.map((faq, i) => (
                                <FAQItem key={faq.q} q={faq.q} a={faq.a} delay={i * 0.08} />
                            ))}
                        </div>

                    </div>
                </div>
            </section>

            {/* 5 ── BOTTOM CTA STRIP */}
            <section className="relative py-24 overflow-hidden border-t border-white/5">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/40 via-black to-black" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-indigo-600/10 rounded-full blur-3xl" />
                <ScrollSection className="relative z-10 text-center px-6 max-w-2xl mx-auto">
                    <p className="text-[10px] md:text-xs tracking-[0.5em] uppercase font-semibold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-5">
                        Prefer a Call?
                    </p>
                    <h2 className="text-3xl md:text-5xl font-black leading-tight tracking-tight mb-4">
                        Book a free{' '}
                        <span
                            className="text-transparent"
                            style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.38)' }}
                        >
                            30-min discovery call.
                        </span>
                    </h2>
                    <p className="text-zinc-400 text-sm md:text-base mb-8">
                        No pitch, no pressure. Just an honest conversation about your goals.
                    </p>
                    <button className="px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-semibold text-sm tracking-wider hover:opacity-90 transition-opacity duration-300 shadow-[0_0_40px_-8px_rgba(99,102,241,0.5)]">
                        Schedule a Call →
                    </button>
                </ScrollSection>
            </section>

        </div>
    );
};

export default ContactPage;