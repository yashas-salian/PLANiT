import { useState, useEffect } from 'react';

export default function SuccessTickAnimation() {
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    // Start the animation immediately
    const animationTimer = setTimeout(() => {
      setIsAnimating(true);
    }, 300);
    
    return () => clearTimeout(animationTimer);
  }, []);
  
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className="relative">
        {/* Google Pay colors circle */}
        <div className="w-24 h-24 rounded-full flex items-center justify-center bg-[#755EA5]">
          <AnimatedCheckMark isAnimating={isAnimating} />
        </div>
        
        {/* Colored decoration dots for Google Pay style */}
        <div className="absolute top-0 right-0 w-6 h-6 rounded-full bg-purple-300 transform translate-x-1/4 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-6 h-6 rounded-full bg-purple-400 transform -translate-x-1/4 translate-y-1/4" />
        <div className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-purple-500 transform translate-x-1/4 translate-y-1/4" />
      </div>
      
      <div className="mt-6 text-center">
        <h2 className="text-xl font-bold text-[#755EA5]">
          Event registered successfully !!
        </h2>
        <p className="mt-2 text-gray-600">
          Thank you for your booking 
        </p>
      </div>
    </div>
  );
}

function AnimatedCheckMark({ isAnimating }) {
  return (
    <svg 
      className="w-12 h-12" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="white" 
      strokeWidth="3" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <polyline 
        points="20 6 9 17 4 12" 
        strokeDasharray="30"
        className="transition-all duration-1000 ease-out"
        style={{
          strokeDashoffset: isAnimating ? "0" : "30"
        }}
      />
    </svg>
  );
}