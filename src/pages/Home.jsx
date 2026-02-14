// Home.jsx
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Services from '../components/home/Services';
import WhyChooseUs from '../components/home/Why';
import FutureVentures from '../components/home/FutureVentures';
import Blogs from '../components/home/Blogs';
import Contact from '../components/home/Contact';
import FoundingMembers from '../components/home/Founders';
import MissionVision from '../components/home/MV';

gsap.registerPlugin(ScrollTrigger);

function Home({ setActiveIndex }) {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const mvRef = useRef(null);
  const servicesRef = useRef(null);
  const whyRef = useRef(null);
  const futureRef = useRef(null);
  const foundersRef = useRef(null);
  const blogsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const sections = [
      heroRef.current,
      aboutRef.current,
      mvRef.current,
      servicesRef.current,
      whyRef.current,
      futureRef.current,
      foundersRef.current,
      blogsRef.current,
      contactRef.current
    ];

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=3500%",
        scrub: 1,
        pin: true,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          if (setActiveIndex && self.animation) {
            const time = self.animation.time();
            const labels = self.animation.labels;
            let idx = 0;
            for (let i = 0; i < sections.length; i++) {
              if (labels[`section-${i}`] <= time + 0.1) {
                idx = i;
              }
            }
            setActiveIndex(idx);
          }
        }
      }
    });

    let currentTime = 0;

    sections.forEach((section, index) => {
      tl.addLabel(`section-${index}`, currentTime);

      if (index === sections.length - 1) return;
      const nextSection = sections[index + 1];

      let scrollDuration = 0;
      let targetContainer = null;
      let progressBar = null;

      // Identify horizontal scroll sections
      if (index === 3) { // Services
        targetContainer = section.querySelector("#services-scroll-container");
        progressBar = section.querySelector("#services-progress-bar");
      } else if (index === 5) { // Future Ventures
        targetContainer = section.querySelector("#future-scroll-container");
        progressBar = section.querySelector("#future-progress-bar");
      } else if (index === 6) { // Founders
        targetContainer = section.querySelector(".flex-nowrap");
      }

      if (targetContainer) {
        const scrollWidth = targetContainer.scrollWidth;
        const clientWidth = window.innerWidth;
        
        if (scrollWidth > clientWidth) {
          scrollDuration = 3; // Allocate time for scrolling
          
          tl.to(targetContainer, {
            x: () => -(targetContainer.scrollWidth - window.innerWidth),
            ease: "none",
            duration: scrollDuration
          }, currentTime);
          
          if (progressBar) {
            tl.to(progressBar, {
              scaleX: 1,
              ease: "none",
              duration: scrollDuration
            }, currentTime);
          }
        }
      }

      // Advance time for scroll
      currentTime += scrollDuration;

      // Transition to next section
      if (index === 1 || index === 5) {
        // Special transition for About -> MV and Future -> Founders (Normal Scroll / Slide Up)
        tl.to(section, {
          yPercent: -100,
          opacity: 1,
          ease: "power1.inOut",
          duration: 1
        }, currentTime);

        tl.fromTo(nextSection,
          { yPercent: 100, opacity: 1, scale: 1 },
          { yPercent: 0, opacity: 1, scale: 1, ease: "power1.inOut", duration: 1 },
          currentTime
        );
      } else {
        // Standard Zoom Transition
        tl.to(section, {
          scale: 5,
          opacity: 0,
          ease: "power1.inOut",
          duration: 1
        }, currentTime);

        tl.fromTo(nextSection,
          { scale: 0.5, opacity: 0 },
          { scale: 1, opacity: 1, ease: "power1.inOut", duration: 1 },
          currentTime
        );
      }

      // Advance time for transition
      currentTime += 1;
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, [setActiveIndex]);

  return (
    <div ref={containerRef} className="relative w-full h-screen bg-white overflow-hidden">
      <Hero innerRef={heroRef} />
      <About innerRef={aboutRef} />
      <MissionVision innerRef={mvRef} />
      <Services innerRef={servicesRef} />
      <WhyChooseUs innerRef={whyRef} />
      <FutureVentures innerRef={futureRef} />
      <FoundingMembers innerRef={foundersRef} />
      <Blogs innerRef={blogsRef} />
      <Contact innerRef={contactRef} />
    </div>
  );
}

export default Home;