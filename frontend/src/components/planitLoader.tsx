import React, { useEffect, useState } from "react";

const PlanitLogoLoader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const animate = () => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 0.3));
    };

    const intervalId = setInterval(animate, 10);
    return () => clearInterval(intervalId);
  }, []);

  // Total path length
  const totalPathLength = 570;

  return (
    <div className="flex items-center justify-center h-64 w-64 bg-transparent">
      <div className="w-48 h-16">
        <svg viewBox="0 0 360 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Background static text */}
          {/* P */}
          <path d="M20 20 L20 80 M20 20 L50 20 C65 20 70 30 70 40 C70 50 65 60 50 60 L20 60" fill="none" stroke="#333" strokeWidth="6" />
          {/* L */}
          <path d="M90 20 L90 80 L130 80" fill="none" stroke="#333" strokeWidth="6" />
          {/* A */}
          <path d="M150 80 L165 20 L180 80 M155 60 L175 60" fill="none" stroke="#333" strokeWidth="6" />
          {/* N */}
          <path d="M210 80 L210 20 L250 80 L250 20" fill="none" stroke="#333" strokeWidth="6" />
          {/* i (small) */}
          <path d="M270 40 L270 80" fill="none" stroke="#333" strokeWidth="6" />
          <circle cx="270" cy="28" r="5" fill="#333" />
          {/* T */}
          <path d="M290 20 L330 20 M310 20 L310 80" fill="none" stroke="#333" strokeWidth="6" />

          {/* Animated paths */}
          {/* P */}
          <path
            d="M20 20 L20 80 M20 20 L50 20 C65 20 70 30 70 40 C70 50 65 60 50 60 L20 60"
            fill="none"
            stroke="#755EA5"
            strokeWidth="6"
            strokeDasharray={totalPathLength}
            strokeDashoffset={totalPathLength - (progress * totalPathLength) / 100}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* L */}
          <path
            d="M90 20 L90 80 L130 80"
            fill="none"
            stroke="#755EA5"
            strokeWidth="6"
            strokeDasharray={totalPathLength}
            strokeDashoffset={Math.max(0, totalPathLength - ((progress - 16) * totalPathLength) / 100)}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* A */}
          <path
            d="M150 80 L165 20 L180 80 M155 60 L175 60"
            fill="none"
            stroke="#755EA5"
            strokeWidth="6"
            strokeDasharray={totalPathLength}
            strokeDashoffset={Math.max(0, totalPathLength - ((progress - 32) * totalPathLength) / 100)}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* N */}
          <path
            d="M210 80 L210 20 L250 80 L250 20"
            fill="none"
            stroke="#755EA5"
            strokeWidth="6"
            strokeDasharray={totalPathLength}
            strokeDashoffset={Math.max(0, totalPathLength - ((progress - 48) * totalPathLength) / 100)}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* i */}
          <path
            d="M270 40 L270 80"
            fill="none"
            stroke="#755EA5"
            strokeWidth="6"
            strokeDasharray={totalPathLength}
            strokeDashoffset={Math.max(0, totalPathLength - ((progress - 64) * totalPathLength) / 100)}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="270" cy="28" r="5" fill="755EA5" />
          {/* T */}
          <path
            d="M290 20 L330 20 M310 20 L310 80"
            fill="none"
            stroke="#755EA5"
            strokeWidth="6"
            strokeDasharray={totalPathLength}
            strokeDashoffset={Math.max(0, totalPathLength - ((progress - 80) * totalPathLength) / 100)}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default PlanitLogoLoader;
