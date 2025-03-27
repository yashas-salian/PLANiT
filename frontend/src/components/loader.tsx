import React, { useState, useEffect } from 'react';

export const Loader = () => {
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [progress, setProgress] = useState(0);
  
  // Brand color
  const brandColor = "#755EA5";
  
  // Define the events with their emojis
  const events = [
    { name: "Party", emoji: "🎉" },
    { name: "Wedding", emoji: "💍" },
    { name: "Birthday", emoji: "🎂" },
    { name: "Holiday", emoji: "🎄" },
    { name: "Graduation", emoji: "🎓" }
  ];

  // Cycle through events
  useEffect(() => {
    const eventInterval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentEventIndex((prevIndex) => (prevIndex + 1) % events.length);
        setIsTransitioning(false);
      }, 300);
    }, 1000);

    return () => clearInterval(eventInterval);
  }, [events.length]);

  // Progress animation
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          return 0;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(progressInterval);
  }, []);

  const currentEvent = events[currentEventIndex];
  const progressPercent = (progress % 100) / 100;

  return (
    <div className="flex flex-col items-center justify-center p-4">
      {/* Main loader container */}
      <div 
        className="w-20 h-20 rounded-full flex items-center justify-center shadow-md relative overflow-hidden transition-all duration-300"
        style={{ 
          backgroundColor: `${brandColor}15`,
          borderColor: brandColor,
          borderWidth: '2px'
        }}
      >
        {/* Circular progress indicator */}
        {/* <svg className="absolute w-full h-full" viewBox="0 0 100 100">
          <circle 
            cx="50" 
            cy="50" 
            r="48" 
            fill="none" 
            strokeWidth="4"
            stroke={`${brandColor}30`}
          />
          <circle 
            cx="50" 
            cy="50" 
            r="48" 
            fill="none" 
            strokeWidth="4"
            stroke={brandColor}
            strokeLinecap="round"
            strokeDasharray="301.6"
            strokeDashoffset={301.6 - (301.6 * progressPercent)}
            transform="rotate(-90 50 50)"
          />
        </svg> */}
        
        {/* Emoji that scales in and out */}
        <div 
          className="text-3xl transition-all duration-300 transform"
          style={{ 
            opacity: isTransitioning ? 0 : 1,
            transform: isTransitioning ? 'scale(0.5)' : 'scale(1)',
          }}
        >
          {currentEvent.emoji}
        </div>
      </div>
      
      {/* Event name */}
      {/* <div 
        className="mt-3 font-medium text-xl transition-all duration-300"
        style={{ 
          color: brandColor,
          opacity: isTransitioning ? 0 : 1,
          transform: isTransitioning ? 'translateY(5px)' : 'translateY(0)'
        }}
      >
        PLANiT {currentEvent.name}
      </div> */}
      
      {/* Small indicator dots for events */}
      {/* <div className="flex mt-2 space-x-1">
        {events.map((event, index) => (
          <div 
            key={index}
            className="w-2 h-2 rounded-full transition-all duration-300"
            style={{ 
              backgroundColor: currentEventIndex === index ? brandColor : `${brandColor}40`,
              transform: currentEventIndex === index ? 'scale(1.2)' : 'scale(1)'
            }}
          />
        ))}
      </div> */}
    </div>
  );
};
