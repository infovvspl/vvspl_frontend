// App.jsx
import React, { useState, useRef, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import TunnelNav from "./components/Trackbar";
// import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Loading from "./components/Loading";
import AboutPage from "./pages/AboutP";
import ServicesPage from "./pages/ServiceP";
import FutureVenturesPage from "./pages/Ventures";
import ContactPage from "./pages/ContactP";
import ServiceDetails from "./pages/details_page/ServiceD";
import ComingSoon from "./components/CS";
import VentureDetails from "./pages/details_page/VentureDetails";
import BlogsPage from "./pages/BlogsPage";
import BlogDetails from "./pages/details_page/BlogDetails";
import GalleryPage from "./pages/Gallery";
import TeamPage from "./pages/Team";

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [loadingDone, setLoadingDone] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Try autoplay after first user interaction
  useEffect(() => {
    const enableAudio = () => {
      if (audioRef.current) {
        audioRef.current.volume = 0.3; // soft background volume
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => { });
      }
      window.removeEventListener("click", enableAudio);
    };

    window.addEventListener("click", enableAudio);
    return () => window.removeEventListener("click", enableAudio);
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <Router>
      <ScrollToTop />

      {/* 🎵 Background Music */}
      <audio ref={audioRef} loop>
        <source src="/bgm.mp3" type="audio/mpeg" />
      </audio>

      {/* Music Toggle Button */}
      <button
        onClick={toggleMusic}
        className="fixed bottom-5 left-5 z-[9999] bg-black text-white px-4 py-2 rounded-full shadow-lg"
      >
        {isPlaying ? "Pause Music" : "Play Music"}
      </button>
      {/* SHOW LOADER FIRST */}
      {!loadingDone && (
        <div className="fixed inset-0 z-[9999]">
          <Loading onComplete={() => setLoadingDone(true)} />
        </div>
      )}
      <div className="flex flex-col">
        {/* <TunnelNav activeIndex={activeIndex} /> */}
        {/* <Navbar /> */}

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home setActiveIndex={setActiveIndex} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/ventures" element={<FutureVenturesPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/services/:id" element={<ServiceDetails />} />
            <Route path="/ventures/:id" element={<VentureDetails />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
            <Route path="/cs" element={<ComingSoon />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
