import React, { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";

interface Items {
  id: number;
  name: string;
  designation: string;
  image: string;
}

export const AnimatedTooltip = ({ items }: { items: Items[] }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);
  const rotate = useSpring(useTransform(x, [-100, 100], [-45, 45]), springConfig);
  const translateX = useSpring(useTransform(x, [-100, 100], [-50, 50]), springConfig);

  const handleMouseMove = (event: React.MouseEvent<HTMLImageElement>) => {
    const halfWidth = event.currentTarget.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  return (
    <div className="flex space-x-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="relative group"
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="popLayout">
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { type: "spring", stiffness: 260, damping: 10 },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{ translateX, rotate, whiteSpace: "nowrap" }}
                className="absolute -top-16 -left-1/2 translate-x-1/2 flex flex-col items-center rounded-md bg-black z-50 shadow-xl px-4 py-2"
              >
                <div className="font-bold text-white text-base">{item.name}</div>
                <div className="text-white text-xs">{item.designation}</div>
              </motion.div>
            )}
          </AnimatePresence>

          <img
            src={item.image}
            alt={item.name}
            onMouseMove={handleMouseMove}
            className="object-cover rounded-full h-14 w-14 border-2 border-white group-hover:scale-105 transition duration-500"
          />
        </div>
      ))}
    </div>
  );
};