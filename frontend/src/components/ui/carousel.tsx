import { useState, useRef, useEffect, useId } from "react";
import { IconArrowNarrowRight } from "@tabler/icons-react";

interface SlideData {
  title: string;
  // button?: string;
  src: string;
}

interface SlideProps {
  slide: SlideData;
  index: number;
  current: number;
  total: number;
  handleSlideClick: (index: number) => void;
}

const Slide = ({ slide, index, current, total, handleSlideClick }: SlideProps) => {
  const slideRef = useRef<HTMLLIElement>(null);
  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;
      const x = xRef.current;
      const y = yRef.current;
      slideRef.current.style.setProperty("--x", `${x}px`);
      slideRef.current.style.setProperty("--y", `${y}px`);
      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);
    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
        frameRef.current = 0;
      }
    };
  }, []);

  const handleMouseMove = (event: React.MouseEvent) => {
    const el = slideRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    xRef.current = event.clientX - (r.left + r.width / 2);
    yRef.current = event.clientY - (r.top + r.height / 2);
  };

  // Calculate the position and z-index for each slide
  const getSlideStyle = () => {
    const diff = (index - current + total) % total;
    const normalizedDiff = diff > total / 2 ? diff - total : diff;
    
    // Scale only non-focused slides
    const scale = index === current ? 1 : 0.6;
    
    return {
      transform: `
        translateX(${normalizedDiff * 85}%) 
        translateZ(${normalizedDiff === 0 ? 0 : -200}px)
        rotateY(${normalizedDiff * -15}deg)
        scale(${scale})
      `,
      zIndex: total - Math.abs(normalizedDiff),
      opacity: Math.abs(normalizedDiff) > 2 ? 0 : 1,
      transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
    };
  };

  return (
    <li
      ref={slideRef}
      className="absolute top-0 left-0 w-[70vmin] h-[70vmin] transition-all duration-500"
      style={getSlideStyle()}
      onClick={() => handleSlideClick(index)}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        xRef.current = 0;
        yRef.current = 0;
      }}
    >
      <div className="relative w-full h-full rounded-lg overflow-hidden shadow-xl">
        <div
          className="absolute w-full h-full bg-gray-900 transition-transform duration-150"
          style={{
            transform: index === current ? "translate3d(calc(var(--x)/30px), calc(var(--y)/30px), 0)" : "none",
          }}
        >
          <img
            className="w-full h-full object-cover opacity-80 transition-opacity duration-600"
            src={slide.src}
            alt={slide.title}
            loading="eager"
          />
          {index === current && <div className="absolute inset-0 bg-black/30 transition-all duration-500 " />}
        </div>

        <article className={`relative p-6 transition-all duration-500 ${
          index === current ? "opacity-100 transform-none" : "opacity-0 translate-y-4"
        }`}>
          <h2 className="text-2xl font-semibold text-white">{slide.title}</h2>
          {/* <button className="mt-4 px-6 py-2 text-sm bg-white text-black rounded-lg shadow-md hover:shadow-lg transition duration-200">
            {slide.button}
          </button> */}
        </article>
      </div>
    </li>
  );
};

const CarouselControl = ({ type, title, handleClick }: { type: string; title: string; handleClick: () => void }) => {
  return (
    <button
      className={`w-10 h-10 flex items-center justify-center bg-white/90 rounded-full transition duration-200 hover:bg-white ${
        type === "previous" ? "rotate-180" : ""
      }`}
      title={title}
      onClick={handleClick}
    >
      <IconArrowNarrowRight className="text-gray-700" />
    </button>
  );
};

const Carousel = ({ slides }: { slides: SlideData[] }) => {
  const [current, setCurrent] = useState(0);
  const id = useId();

  return (
    <div className="relative w-[70vmin] h-[70vmin] mx-auto perspective-[1200px]" aria-labelledby={`carousel-heading-${id}`}>
      <ul className="relative w-full h-full transform-style-preserve-3d">
        {slides.map((slide, index) => (
          <Slide 
            key={index} 
            slide={slide} 
            index={index} 
            current={current} 
            total={slides.length}
            handleSlideClick={setCurrent} 
          />
        ))}
      </ul>

      <div className="absolute flex justify-center gap-4 w-full top-[calc(100%+1rem)]">
        <CarouselControl 
          type="previous" 
          title="Previous Slide" 
          handleClick={() => setCurrent((current - 1 + slides.length) % slides.length)} 
        />
        <CarouselControl 
          type="next" 
          title="Next Slide" 
          handleClick={() => setCurrent((current + 1) % slides.length)} 
        />
      </div>
    </div>
  );
};

export default Carousel;