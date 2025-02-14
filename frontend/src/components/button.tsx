import { motion } from "framer-motion";

export const Button = ({ text, onClick }: { text: string; onClick?: () => void }) => {
  return (
    <motion.button
      whileTap={{ scale: 0.9 }} // Click effect
      whileHover={{ scale: 1.05 }} // Hover effect
      className="px-6 py-3 text-white bg-blue-600 rounded-2xl shadow-lg transition-all duration-200 
                hover:bg-blue-700 active:bg-blue-800 focus:outline-none"
      onClick={onClick}
    >
      {text}
    </motion.button>
  );
};
