// App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import TunnelNav from "./components/Trackbar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Loading from "./components/Loading";
import ComingSoon from "./components/CS";
import AboutPage from "./pages/AboutP";
import ServicesPage from "./pages/ServiceP";
import FutureVenturesPage from "./pages/Ventures";
import ContactPage from "./pages/Contact";
import ServiceDetails from "./pages/details_page/ServiceD";

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
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/ventures" element={<FutureVenturesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/services/:id" element={<ServiceDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
