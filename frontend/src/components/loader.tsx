import React, { useState, useEffect } from 'react';

export const Loader = () => {
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [progress, setProgress] = useState(0);
  
  // Brand color
  const brandColor = "#FFFFFF";
  
  // Define the events with their emojis
  const events = [
    { name: "Party", emoji: "🎉" },
    { name: "Wedding", emoji: "💍" },
    { name: "Birthday", emoji: "🎂" },
    { name: "Holiday", emoji: "🎊" },
    { name: "Graduation", emoji: "🎤" }
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
        className="w-20 h-20 rounded-full flex border border-none items-center justify-center relative overflow-hidden transition-all duration-300"
        style={{ 
          backgroundColor: `${brandColor}15`,
          // borderColor: brandColor,
          borderWidth: '2px'
        }}
      >
        <div 
          className="text-5xl transition-all duration-300 transform"
          style={{ 
            opacity: isTransitioning ? 0 : 1,
            transform: isTransitioning ? 'scale(0.5)' : 'scale(1)',
          }}
        >
          {currentEvent.emoji}
        </div>
      </div>
    </div>
  );
};
