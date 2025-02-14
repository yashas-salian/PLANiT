import { motion } from "framer-motion";

export const Button = ({ text, onClick }: { text: string; onClick?: () => void }) => {
  return (
    <motion.button
      whileTap={{ scale: 0.9 }} // Click effect
      whileHover={{ scale: 1.05 }} // Hover effect
      className="mt-2 pt-3 pb-10 pr-4 pl-4 h-px text-white bg-[#755EA5] rounded-4xl shadow-lg transition-all duration-200 
                hover:bg-[#5D4884] active:bg-[#463766] focus:outline-none"
      onClick={onClick}
    >
      {text}
    </motion.button>
  );
};
