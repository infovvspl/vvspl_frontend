import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
// import Bg from "../../assets/bg.mp4"; 

const VideoSection = ({ innerRef }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        // GSAP Entrance Animation for the text
        let ctx = gsap.context(() => {
            gsap.fromTo(".video-content > *",
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, stagger: 0.15, duration: 1, ease: "power4.out" }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={(el) => {
                containerRef.current = el;
                if (innerRef) innerRef.current = el;
            }}
            className="relative w-full py-20 md:py-32 bg-black text-white min-h-screen flex flex-col justify-center"
        >
            <div className="max-w-[1300px] mx-auto px-6 md:px-12 lg:px-20">
                
                <div className="video-content mb-12 md:mb-20 space-y-4 text-center">
                    <h2 className="text-[10px] md:text-sm tracking-[0.6em] uppercase font-semibold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                        Experience the Tech
                    </h2>
                    <h3 className="text-4xl md:text-6xl font-black leading-tight">
                        Precision in every {" "}
                        <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.6)' }}>
                            Digital Frame.
                        </span>
                    </h3>
                </div>

                <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-white/10 bg-zinc-900 shadow-[0_0_50px_-12px_rgba(79,70,229,0.3)]">
                    <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/E90bWOkbMKE?si=tcNPr0CwbewZfW8N&autoplay=1&mute=1&rel=0"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default VideoSection;