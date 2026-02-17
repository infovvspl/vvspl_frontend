import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// Register the plugin
gsap.registerPlugin(ScrollToPlugin);

const AutoScrollButton = () => {
  const [showSpeeds, setShowSpeeds] = useState(false);
  
  // Speed options in seconds (duration for the scroll)
  // Higher number = Slower scroll
  const speeds = [
    { label: 'Fast', value: 2 },
    { label: 'Medium', value: 5 },
    { label: 'Slow', value: 10 },
  ];

  const handleScroll = (duration) => {
    setShowSpeeds(false);
    
    gsap.to(window, {
      duration: duration,
      scrollTo: { y: "max" }, // Scrolls to the bottom of the page
      ease: "power1.inOut"
    });
  };

  return (
    <div className="fixed bottom-10 right-10 flex flex-col items-end gap-2">
      {/* Speed Selection Menu */}
      {showSpeeds && (
        <div className="flex flex-col gap-2 mb-2 animate-in fade-in slide-in-from-bottom-4">
          {speeds.map((s) => (
            <button
              key={s.label}
              onClick={() => handleScroll(s.value)}
              className="px-4 py-2 bg-white border border-slate-200 shadow-lg rounded-lg hover:bg-slate-50 text-slate-700 font-medium transition-colors"
            >
              {s.label}
            </button>
          ))}
        </div>
      )}

      {/* Main Trigger Button */}
      <button
        onClick={() => setShowSpeeds(!showSpeeds)}
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full shadow-2xl transition-all active:scale-95"
      >
        {showSpeeds ? 'Cancel' : 'Auto Scroll'}
      </button>
    </div>
  );
};

export default AutoScrollButton;