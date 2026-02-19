import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../components/Navbar';

gsap.registerPlugin(ScrollTrigger);

const ContactPage = () => {
    const mainRef = useRef(null);
    const [status, setStatus] = useState('idle'); // idle | sending | sent
    const [form, setForm] = useState({
        name: '', email: '', phone: '', company: '', subject: '', service: '', message: '',
    });
    const [openFaq, setOpenFaq] = useState(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            /* ─── 1. HERO ANIMATIONS ─── */
            const heroTl = gsap.timeline({ defaults: { ease: 'power4.out' } });
            heroTl.fromTo('.word',
                { y: 90, opacity: 0, skewY: 5 },
                { y: 0, opacity: 1, skewY: 0, duration: 1.2, stagger: 0.11 }
            )
                .fromTo('.hero-line', { scaleX: 0, transformOrigin: 'left center' }, { scaleX: 1, duration: 0.8, ease: 'power3.inOut' }, '-=0.6')
                .fromTo('.hero-sub', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9 }, '-=0.5');

            // Parallax BG
            gsap.to('.contact-hero-bg', {
                yPercent: 20,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.hero-container',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                },
            });

            /* ─── 2. SCROLL REVEALS ─── */
            gsap.utils.toArray('.reveal-up').forEach((el) => {
                gsap.fromTo(el,
                    { y: 60, opacity: 0 },
                    {
                        y: 0, opacity: 1, duration: 1.1, ease: 'power4.out',
                        scrollTrigger: {
                            trigger: el,
                            start: 'top 86%',
                            toggleActions: 'play none none none',
                        }
                    }
                );
            });

            /* ─── 3. INFO CARDS STAGGER ─── */
            gsap.fromTo('.info-card',
                { y: 40, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 0.9, ease: 'power4.out', stagger: 0.12,
                    scrollTrigger: {
                        trigger: '.info-grid',
                        start: 'top 86%',
                    }
                }
            );

        }, mainRef);
        return () => ctx.revert();
    }, []);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');
        setTimeout(() => setStatus('sent'), 1800);
    };

    const services = [
        'AI / ML Solutions', 'Cloud Infrastructure', 'Cyber Security', 'Web Applications',
        'Mobile Apps', 'E-Commerce', 'Trade & Transport', 'Land Acquisition',
        'Mining & Minerals', 'Power & Energy', 'Organic Farming', 'Other / General Enquiry'
    ];

    const faqs = [
        { q: 'How quickly do you respond to enquiries?', a: 'We aim to respond to all enquiries within 24 hours on business days. Urgent matters can be flagged in your message subject.' },
        { q: 'Do you work with international clients?', a: 'Absolutely. We work with clients across 15+ countries and are experienced in managing remote collaboration, time zones, and cross-border engagements.' },
        { q: 'Can I schedule a call before committing to a project?', a: 'Yes — we offer a free 30-minute discovery call to understand your needs and see if were a good fit, with zero obligation.' },
        { q: 'How do engagements typically start?', a: 'After an initial consultation, we prepare a scoped proposal with timelines and deliverables. Projects typically kick off within 1–2 weeks of agreement.' },
    ];

    return (
        <div ref={mainRef} className="bg-zinc-50 text-zinc-900 font-sans selection:bg-indigo-100">
            <Navbar />

            {/* 1 ── HERO BANNER */}
            <section className="hero-container relative py-32 flex flex-col items-center justify-center overflow-hidden bg-black text-white">
                <div className="absolute inset-0 z-0">
                    <img className="contact-hero-bg w-full h-full object-cover opacity-20" src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070" alt="" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black" />
                </div>

                <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 -right-32 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                    <p className="text-[10px] md:text-xs tracking-[0.5em] uppercase font-semibold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-6">Let's Connect</p>
                    <h1 className="text-5xl sm:text-7xl md:text-8xl font-black leading-none tracking-tight">
                        <span className="word inline-block mr-[0.22em]">Get</span>
                        <span className="word inline-block mr-[0.22em]">In</span>
                        <span className="word inline-block text-transparent" style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.4)' }}>Touch.</span>
                    </h1>
                    <div className="hero-line my-7 h-[3px] w-32 mx-auto rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500" />
                    <p className="hero-sub text-base md:text-xl text-zinc-400 leading-relaxed max-w-xl mx-auto">
                        Whether it's a project, a partnership, or just a conversation — we'd love to hear from you. We respond within 24 hours.
                    </p>
                </div>
            </section>

            {/* 2 ── INFO CARDS */}
            <section className="py-16 border-b border-zinc-200 bg-white">
                <div className="max-w-[1300px] mx-auto px-6 md:px-12 lg:px-20">
                    <div className="info-grid grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
                        {[
                            { icon: '📍', label: 'Our Office', lines: ['Block-309/310, ODYSSA Business Center, Rasulgarh, Bhubaneswar, 751010'], color: 'from-indigo-500 to-violet-500' },
                            { icon: '✉️', label: 'Email Us', lines: ['info@vvspltech.com'], color: 'from-cyan-500 to-blue-500' },
                            { icon: '📞', label: 'Call Us', lines: ['+91 78946 89818', 'Mon–Sat, 9am – 6pm GST'], color: 'from-indigo-400 to-cyan-400' },
                            { icon: '🌐', label: 'Follow Us', lines: ['LinkedIn · Twitter / X', 'Instagram · YouTube'], color: 'from-violet-500 to-indigo-400' }
                        ].map((c, i) => (
                            <div key={i} className="info-card group relative p-6 rounded-2xl border border-zinc-200 bg-white hover:border-indigo-500/30 hover:bg-zinc-50 transition-all duration-500 shadow-sm">
                                <div className={`absolute -top-px left-6 w-12 h-[2px] rounded-full bg-gradient-to-r ${c.color}`} />
                                <span className="text-2xl mb-3 block">{c.icon}</span>
                                <p className={`text-[10px] tracking-[0.4em] uppercase font-bold bg-gradient-to-r ${c.color} bg-clip-text text-transparent mb-2`}>{c.label}</p>
                                {c.lines.map((l, idx) => <p key={idx} className="text-sm text-zinc-600 font-medium leading-relaxed">{l}</p>)}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3 ── FORM + SIDEBAR */}
            <section className="py-24 md:py-32">
                <div className="max-w-[1300px] mx-auto px-6 md:px-12 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-20 items-start">

                        {/* LEFT: FORM */}
                        <div className="reveal-up">
                            <p className="text-[10px] md:text-xs tracking-[0.5em] uppercase font-bold bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent mb-4">Send a Message</p>
                            <h2 className="text-3xl md:text-5xl font-black leading-[1.1] tracking-tight mb-3 text-zinc-900">
                                Tell us about <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(9, 9, 11, 0.4)' }}>your project.</span>
                            </h2>
                            <div className="w-16 h-[3px] rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 mb-10" />

                            {status === 'sent' ? (
                                <div className="flex flex-col items-center justify-center text-center py-20 gap-6">
                                    <div className="text-6xl">✅</div>
                                    <h3 className="text-3xl font-black text-zinc-900">Message Sent!</h3>
                                    <p className="text-zinc-600 max-w-sm leading-relaxed">Thanks for reaching out. We'll get back to you within 24 hours.</p>
                                    <button onClick={() => setStatus('idle')} className="px-6 py-3 rounded-full border border-zinc-200 text-sm hover:bg-zinc-50 transition-all">Send Another Message</button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div className="flex flex-col gap-2">
                                            <label className="text-[10px] tracking-widest uppercase text-zinc-500 font-bold">Full Name*</label>
                                            <input name="name" required onChange={handleChange} className="w-full bg-zinc-100 border border-zinc-200 rounded-xl px-5 py-3.5 text-sm focus:bg-white focus:border-indigo-500/40 outline-none transition-all" placeholder="Mukesh Bose" />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-[10px] tracking-widest uppercase text-zinc-500 font-bold">Email Address*</label>
                                            <input name="email" type="email" required onChange={handleChange} className="w-full bg-zinc-100 border border-zinc-200 rounded-xl px-5 py-3.5 text-sm focus:bg-white focus:border-indigo-500/40 outline-none transition-all" placeholder="name@mail.com" />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div className="flex flex-col gap-2">
                                            <label className="text-[10px] tracking-widest uppercase text-zinc-500 font-bold">Phone Number</label>
                                            <input name="phone" onChange={handleChange} className="w-full bg-zinc-100 border border-zinc-200 rounded-xl px-5 py-3.5 text-sm focus:bg-white outline-none transition-all" placeholder="+91 9876543210" />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-[10px] tracking-widest uppercase text-zinc-500 font-bold">Company</label>
                                            <input name="company" onChange={handleChange} className="w-full bg-zinc-100 border border-zinc-200 rounded-xl px-5 py-3.5 text-sm focus:bg-white outline-none transition-all" placeholder="Your Company Ltd." />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-[10px] tracking-widest uppercase text-zinc-500 font-bold">I'm interested in*</label>
                                        <select name="service" required onChange={handleChange} className="w-full bg-zinc-100 border border-zinc-200 rounded-xl px-5 py-3.5 text-sm outline-none cursor-pointer">
                                            <option value="">Select a service...</option>
                                            {services.map(s => <option key={s} value={s}>{s}</option>)}
                                        </select>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-[10px] tracking-widest uppercase text-zinc-500 font-bold">Subject*</label>
                                        <input name="subject" onChange={handleChange} className="w-full bg-zinc-100 border border-zinc-200 rounded-xl px-5 py-3.5 text-sm focus:bg-white outline-none transition-all" placeholder="How can we help?" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-[10px] tracking-widest uppercase text-zinc-500 font-bold">Your Message*</label>
                                        <textarea name="message" rows="6" required onChange={handleChange} className="w-full bg-zinc-100 border border-zinc-200 rounded-xl px-5 py-3.5 text-sm focus:bg-white outline-none transition-all resize-none" placeholder="Tell us about your project..." />
                                    </div>
                                    <div className="flex items-center gap-5 pt-2">
                                        <button type="submit" disabled={status === 'sending'} className="px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-semibold text-sm shadow-[0_0_40px_-8px_rgba(99,102,241,0.5)] hover:opacity-90 transition-all">
                                            {status === 'sending' ? 'Sending...' : 'Send Message →'}
                                        </button>
                                        <p className="text-xs text-zinc-500">We respect your privacy.<br />No spam, ever.</p>
                                    </div>
                                </form>
                            )}
                        </div>

                        {/* RIGHT: SIDEBAR */}
                        <div className="flex flex-col gap-6 lg:pt-[88px]">
                            <div className="reveal-up p-7 rounded-2xl border border-zinc-200 bg-white shadow-sm relative overflow-hidden">
                                <div className="absolute -top-8 -right-8 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl" />
                                <p className="text-[10px] tracking-[0.4em] uppercase text-indigo-600 mb-4 font-bold">Why Work With Us</p>
                                <ul className="flex flex-col gap-3">
                                    {['✦ Dedicated project manager', '✦ Transparent pricing', '✦ Agile delivery', '✦ Post-launch support', '✦ NDA available'].map(item => (
                                        <li key={item} className="text-sm text-zinc-600 font-medium">{item}</li>
                                    ))}
                                </ul>
                            </div>
                            {/* <div className="reveal-up p-7 rounded-2xl border border-zinc-200 bg-white shadow-sm">
                                <p className="text-[10px] tracking-[0.4em] uppercase text-cyan-600 mb-3 font-bold">Response Time</p>
                                <p className="text-4xl font-black bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent mb-1">&lt; 24h</p>
                                <p className="text-xs text-zinc-500 font-medium">on all business day enquiries</p>
                            </div> */}
                            <div className="reveal-up relative rounded-3xl overflow-hidden border border-zinc-200 h-64 md:h-80">

                                {/* Google Map */}
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.006808899224!2d85.8620116!3d20.2999853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190bd65aa2ad1d%3A0xe69acb08745a4b10!2sOdyssa%20Business%20Centre!5e0!3m2!1sen!2sin!4v1771417428507!5m2!1sen!2sin"
                                    className="absolute inset-0 w-full h-full"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>

                                {/* Dark Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

                                {/* Content */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                                    <span className="text-3xl mb-2">📍</span>
                                    <p className="text-white font-bold text-lg">Odyssa Business Centre</p>
                                    <p className="text-zinc-200 text-xs tracking-widest uppercase mb-4">
                                        Bhubaneswar, India
                                    </p>
                                    <button className="px-5 py-2 rounded-full border border-white/20 text-xs text-white hover:bg-white/10 transition-all backdrop-blur-sm">
                                        Open in Maps ↗
                                    </button>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* 4 ── FAQ */}
            <section className="py-24 border-t border-zinc-200 bg-zinc-50/50">
                <div className="max-w-[1300px] mx-auto px-6 md:px-12 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="reveal-up">
                            <p className="text-[10px] md:text-xs tracking-[0.5em] uppercase font-bold bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent mb-4">Common Questions</p>
                            <h2 className="text-3xl md:text-5xl font-black leading-[1.1] text-zinc-900">Before you <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(9, 9, 11, 0.4)' }}>reach out.</span></h2>
                            <div className="w-16 h-[3px] rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 mt-6" />
                        </div>
                        <div className="flex flex-col border-t border-zinc-200">
                            {faqs.map((faq, i) => (
                                <div key={i} className="reveal-up border-b border-zinc-200">
                                    <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between py-6 text-left group">
                                        <span className="text-sm md:text-base font-bold text-zinc-800 group-hover:text-indigo-600 transition-colors">{faq.q}</span>
                                        <span className={`text-indigo-600 text-xl transition-transform duration-300 ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
                                    </button>
                                    <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                                        <p className="text-sm text-zinc-600 font-medium leading-relaxed">{faq.a}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 5 ── BOTTOM CTA */}
            <section className="reveal-up relative py-24 overflow-hidden bg-zinc-900 text-center text-white">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/40 via-zinc-900 to-zinc-900" />
                <div className="relative z-10 px-6 max-w-2xl mx-auto">
                    <p className="text-[10px] tracking-[0.5em] uppercase font-semibold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-5">Prefer a Call?</p>
                    <h2 className="text-3xl md:text-5xl font-black leading-tight mb-8">
                        Book a free <span className="text-transparent" style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.38)' }}>30-min discovery call.</span>
                    </h2>
                    <a
                        href="tel:+917894689818"
                        className="px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-semibold text-sm shadow-[0_0_40px_-8px_rgba(99,102,241,0.5)] hover:opacity-90 transition-all"
                    >
                        Schedule a Call →
                    </a>

                </div>
            </section>
        </div>
    );
};

export default ContactPage;