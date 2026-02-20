// Home.jsx
import React, { useLayoutEffect, useRef } from 'react';
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
import ScrollBtn from '../components/Scrollbtn';
import Navbar from "../components/Navbar";
import Team from '../components/home/TeamSec';

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
  const teamRef = useRef(null);
  const blogsRef = useRef(null);
  const contactRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const sections = [
        { ref: heroRef, index: 0 },
        { ref: aboutRef, index: 1 },
        { ref: mvRef, index: 2 },
        { ref: servicesRef, index: 3 },
        { ref: whyRef, index: 4 },
        { ref: futureRef, index: 5 },
        { ref: teamRef, index: 6 },
        // { ref: blogsRef, index: 7 },
        { ref: contactRef, index: 7 }
        // { ref: foundersRef, index: 6 },
        // { ref: teamRef, index: 7 },
        // { ref: blogsRef, index: 8 },
        // { ref: contactRef, index: 9 }
      ];

      // 1. Navigation Sync (Update setActiveIndex on scroll)
      sections.forEach((item) => {
        if (!item.ref.current) return;
        ScrollTrigger.create({
          trigger: item.ref.current,
          start: "top 40%",
          end: "bottom 40%",
          onToggle: (self) => {
            if (self.isActive) setActiveIndex(item.index);
          }
        });
      });

      // 2. Stacking Reveal Effect
      // We pin sections once their BOTTOM reaches the viewport bottom.
      // This ensures the entire content is visible before being covered.
      sections.slice(0, -1).forEach((item, i) => {
        if (!item.ref.current) return;

        // Ensure sections have correct layering
        gsap.set(item.ref.current, { zIndex: i + 1 });

        ScrollTrigger.create({
          trigger: item.ref.current,
          start: "bottom bottom",
          pin: true,
          pinSpacing: false, // This allows the next section to slide over
          invalidateOnRefresh: true,
        });
      });

      // Ensure the last section is on top of everything
      if (sections[sections.length - 1].ref.current) {
        gsap.set(sections[sections.length - 1].ref.current, { zIndex: sections.length });
      }


    }, containerRef);

    return () => ctx.revert();
  }, [setActiveIndex]);

  return (
    <div ref={containerRef} className="relative w-full bg-white">
      <Navbar />
      <Hero innerRef={heroRef} />
      <About innerRef={aboutRef} isPage={true} />
      <MissionVision innerRef={mvRef} isPage={true} />
      <Services innerRef={servicesRef} isPage={true} />
      <WhyChooseUs innerRef={whyRef} isPage={true} />
      <FutureVentures innerRef={futureRef} isPage={true} />
      {/* <FoundingMembers innerRef={foundersRef} isPage={true} /> */}
      <Team innerRef={teamRef} isPage={true} />
      {/* <Blogs innerRef={blogsRef} isPage={true} /> */}
      <Contact innerRef={contactRef} isPage={true} />
      <ScrollBtn />
    </div>
  );
}

export default Home;