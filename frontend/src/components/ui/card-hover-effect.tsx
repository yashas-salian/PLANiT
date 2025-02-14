import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Item {
  title: string;
  description: string;
}

interface HoverEffectProps {
  items: Item[];
  className?: string;
}

const HoverEffect = ({ items, className = "" }: HoverEffectProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 ${className}`}>
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group block p-2 h-full w-full cursor-pointer"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-purple-400 rounded-xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </div>
      ))}
    </div>
  );
};

const Card = ({ className = "", children }: { className?: string; children: React.ReactNode }) => {
  return (
    <div className={`rounded-2xl h-full w-full p-2 overflow-hidden bg-[#755EA5] border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20 ${className}`}>
      <div className="relative z-50 p-4">{children}</div>
    </div>
  );
};

const CardTitle = ({ className = "", children }: { className?: string; children: React.ReactNode }) => {
  return <h4 className={`text-white font-serif font-bold text-2xl tracking-wide mt-4 ${className}`}>{children}</h4>;
};

const CardDescription = ({ className = "", children }: { className?: string; children: React.ReactNode }) => {
  return <p className={`mt-8 text-white text-[18px] font-serif tracking-wide leading-relaxed text-sm ${className}`}>{children}</p>;
};

export default HoverEffect;
