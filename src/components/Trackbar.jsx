// components/TunnelNav.jsx
import React from 'react';

const TunnelNav = ({ activeIndex }) => {
  const sections = [
    "Start", "About", "Mission", "Services", "Why Us", 
    "Ventures", "Founders", "Blogs", "Contact"
  ];

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-end space-y-6">
      {sections.map((label, i) => (
        <div key={i} className="group flex items-center gap-4 cursor-pointer">
          {/* Label - visible on hover or when active */}
          <span className={`text-[10px] uppercase tracking-[0.2em] transition-all duration-300 ${
            activeIndex === i ? 'text-blue-600 opacity-100 font-bold' : 'text-zinc-500 opacity-0 group-hover:opacity-100'
            }`}>
            {label}
          </span>

          {/* Dot/Indicator */}
          <div className="relative flex items-center justify-center">
            <div className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              activeIndex === i ? 'bg-blue-600 scale-[2.5]' : 'bg-zinc-300 group-hover:bg-zinc-500'
              }`} />

            {/* Active Glow Ring */}
            {activeIndex === i && (
              <div className="absolute w-4 h-4 border border-blue-600/50 rounded-full animate-ping" />
            )}
          </div>
        </div>
      ))}

      {/* Vertical Background Line */}
      <div className="absolute right-[2.5px] top-0 h-full w-px bg-zinc-200 -z-10" />
    </div>
  );
};

export default TunnelNav;