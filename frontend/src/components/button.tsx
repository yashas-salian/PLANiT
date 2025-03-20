import { motion } from "framer-motion";

export const Button = ({ text, onClick }: { text: string; onClick?: () => void }) => {
  return (
    <motion.button
      whileTap={{ scale: 0.9 }} // Click effect
      whileHover={{ scale: 1.05 }} // Hover effect
      className="  pt-3 pb-10 w-40 pr-2 pl-2 h-px  text-white bg-[#A18FCC] rounded-4xl shadow-lg  transition-all duration-200 
                hover:bg-[#5D4884] active:bg-[#463766] focus:outline-none"
      onClick={onClick}
    >
      {text}
    </motion.button>
  );
};
