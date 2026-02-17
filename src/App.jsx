// App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import TunnelNav from "./components/Trackbar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import About from "./pages/About";
// import Team from "./pages/Team";
// import Ventures from "./pages/Ventures";
// import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import Loading from "./components/Loading";
import ComingSoon from "./components/CS";

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [loadingDone, setLoadingDone] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      {/* SHOW LOADER FIRST */}
      {!loadingDone && (
        <div className="fixed inset-0 z-[9999]">
          <Loading onComplete={() => setLoadingDone(true)} />
        </div>
      )}
      <div className="flex flex-col">
        {/* <TunnelNav activeIndex={activeIndex} /> */}
        <Navbar />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home setActiveIndex={setActiveIndex} />} />
            <Route path="/about" element={<ComingSoon />} />
            <Route path="/team" element={<ComingSoon />} />
            <Route path="/ventures" element={<ComingSoon />} />
            <Route path="/contact" element={<ComingSoon />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
