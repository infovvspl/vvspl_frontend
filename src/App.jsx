import React, { useState, useRef, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"; // Animation engine
import { Volume2, VolumeX } from "lucide-react"; // Sleek Icons

// Pages & Components
import Home from "./pages/Home";
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

  // Auto-play logic on first interaction
  useEffect(() => {
    const enableAudio = () => {
      if (audioRef.current) {
        audioRef.current.volume = 0.3;
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

      {/* 🎵 Background Music Element */}
      <audio ref={audioRef} loop>
        <source src="/bgm.mp3" type="audio/mpeg" />
      </audio>

      {/* 🚀 WOW-FACTOR MUSIC TOGGLE */}
      <div className="fixed bottom-8 left-8 z-[9999]">
        <motion.button
          onClick={toggleMusic}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative flex items-center gap-4 px-6 py-3 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl group overflow-hidden"
        >
          {/* Animated Equalizer Bars */}
          <div className="flex items-end gap-[3px] h-5 w-6">
            {[0.6, 0.4, 0.8, 0.5].map((speed, i) => (
              <motion.span
                key={i}
                animate={isPlaying ? {
                  height: [2, 16, 4, 18, 2],
                } : { height: 2 }}
                transition={{
                  repeat: Infinity,
                  duration: speed,
                  ease: "easeInOut",
                }}
                className={`w-[3px] rounded-full ${isPlaying ? "bg-cyan-400" : "bg-gray-500"}`}
              />
            ))}
          </div>

          {/* Icon with smooth flip transition */}
          <AnimatePresence mode="wait">
            <motion.div
              key={isPlaying ? "playing" : "muted"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="text-white"
            >
              {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
            </motion.div>
          </AnimatePresence>

          {/* <span className="text-white text-xs font-bold tracking-widest uppercase">
            {isPlaying ? "Live" : "Muted"}
          </span> */}

          {/* Pulse Glow Effect (Visible only when playing) */}
          {isPlaying && (
            <motion.div
              animate={{ opacity: [0, 0.5, 0], scale: [1, 1.5, 2] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute inset-0 bg-cyan-500/30 rounded-full -z-10"
            />
          )}
        </motion.button>
      </div>

      {/* LOADER */}
      {!loadingDone && (
        <div className="fixed inset-0 z-[9999]">
          <Loading onComplete={() => setLoadingDone(true)} />
        </div>
      )}

      <div className="flex flex-col">
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