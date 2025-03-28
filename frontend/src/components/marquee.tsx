import React, { useState, useEffect, useRef } from 'react';

interface MarqueeProps {
  text: string;
  speed?: number;
  pauseOnHover?: boolean;
  direction?: 'left' | 'right';
  className?: string;
  fullWidth?: boolean;
}

export const MarqueeONE: React.FC<MarqueeProps> = ({
  text,
  speed = 100,
  pauseOnHover = true,
  direction = 'left',
  className = '',
  fullWidth = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const [contentWidth, setContentWidth] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const contentRef = useRef<HTMLDivElement>(null);
  
  // Detect container and content width for animation calculation
  useEffect(() => {
    if (containerRef.current && contentRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
      setContentWidth(contentRef.current.offsetWidth);
    }
    
    const handleResize = () => {
      if (containerRef.current && contentRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
        setContentWidth(contentRef.current.offsetWidth);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [text]);
  
  // For full-width marquee, we start outside the container and animate to the end
  const startPosition = fullWidth ? containerWidth : 0;
  const endPosition = fullWidth ? -contentWidth : -contentWidth / 2;
  
  // Calculate animation duration based on total distance and speed
  const animationDistance = startPosition - endPosition;
  const animationDuration = animationDistance / speed;

  // Create animation style - using all non-shorthand properties
  const animationStyle = containerWidth && contentWidth ? {
    animationName: 'marquee',
    animationDuration: `${animationDuration}s`,
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',
    animationPlayState: isPaused ? 'paused' : 'running',
    animationDirection: direction === 'left' ? 'normal' : 'reverse',
    transform: `translateX(${fullWidth ? startPosition : 0}px)`
  } : {
    transform: `translateX(${fullWidth ? startPosition : 0}px)`
  };
  
  return (
    <div 
      ref={containerRef}
      className={`overflow-hidden whitespace-nowrap ${className}`}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      <div 
        className="inline-block"
        style={animationStyle}
      >
        <div ref={contentRef} className="inline-block px-4 border border-purple-900">
          {text}
        </div>
        {!fullWidth && (
          // Only duplicate content for seamless loop in standard mode
          <div className="inline-block px-4 border border-purple-900">
            {text}
          </div>
        )}
      </div>
      
      {/* Replace the styled-jsx tag with regular style tag */}
      <style>
        {`
          @keyframes marquee {
            0% {
              transform: translateX(${fullWidth ? startPosition : 0}px);
            }
            100% {
              transform: translateX(${endPosition}px);
            }
          }
        `}
      </style>
    </div>
  );
};