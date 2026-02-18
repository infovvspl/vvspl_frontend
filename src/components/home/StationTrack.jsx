import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const stations = [
    { id: 0, name: "Hero", label: "Origin" },
    { id: 1, name: "About", label: "Central" },
    { id: 2, name: "Services", label: "Logistics" },
    { id: 3, name: "Why Us", label: "Signal" },
    { id: 4, name: "Ventures", label: "Hyperloop" },
    { id: 5, name: "Blogs", label: "Intel" },
    { id: 6, name: "Contact", label: "Terminal" },
];

const StationTrack = ({ activeIndex = 0, onStationClick }) => {
    const markerRef = useRef(null);
    const labelRef = useRef(null);

    const currentStation = stations[activeIndex] || stations[0];

    useEffect(() => {
        const totalStations = stations.length;
        const spacing = 100 / (totalStations - 1);
        const targetY = activeIndex * spacing;

        gsap.to(markerRef.current, {
            top: `${targetY}%`,
            duration: 0.8,
            ease: "power2.inOut"
        });

        gsap.fromTo(labelRef.current, 
            { opacity: 0, x: 20 }, 
            { opacity: 1, x: 0, duration: 0.4 }
        );
    }, [activeIndex]);

    return (
        /* CHANGE HERE: 
           'hidden' hides it by default (mobile).
           'md:flex' makes it visible on screens wider than 768px.
        */
        <div className="hidden md:flex fixed top-0 right-0 h-full w-24 z-[100] py-20 px-6 pointer-events-none justify-center">
            <div className="relative h-full w-1 flex justify-center items-center">
                
                {/* 1. The Rail Track Background */}
                <div className="absolute h-full w-[2px] bg-white/10" />

                {/* 2. The Progress Glow */}
                <div 
                    className="absolute top-0 w-[2px] bg-blue-500 shadow-[0_0_15px_#3b82f6] transition-all duration-700 ease-in-out"
                    style={{ height: `${(activeIndex / (stations.length - 1)) * 100}%` }}
                />

                {/* 3. Static Station Points */}
                <div className="absolute h-full flex flex-col justify-between items-center pointer-events-auto">
                    {stations.map((station) => (
                        <div 
                            key={station.id}
                            onClick={() => onStationClick?.(station.id)}
                            className="group relative flex items-center cursor-pointer"
                        >
                            <div className={`w-3 h-3 rounded-full border-2 transition-all duration-500 ${
                                activeIndex >= station.id 
                                ? 'bg-blue-500 border-blue-500 shadow-[0_0_10px_#3b82f6]' 
                                : 'bg-neutral-800 border-neutral-600'
                            }`} />
                        </div>
                    ))}
                </div>

                {/* 4. The Moving Train Marker */}
                <div 
                    ref={markerRef} 
                    className="absolute h-4 w-4 -mt-2 pointer-events-none flex items-center justify-center"
                    style={{ top: '0%' }}
                >
                    <div className="w-full h-full bg-white rounded-full shadow-[0_0_20px_#fff] animate-pulse" />
                    <div 
                        ref={labelRef}
                        className="absolute right-8 whitespace-nowrap text-blue-400 font-mono text-[10px] font-bold tracking-[0.2em] bg-black/50 px-2 py-1 rounded border border-blue-500/20 backdrop-blur-sm"
                    >
                        {currentStation.label}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StationTrack;