import {motion } from "framer-motion"

export const DashboardButton=({text, onClick} :{text:string ;onClick?: () => void} )=>{
    return <motion.div
    whileTap={{ scale: 0.9 }}
    whileHover={{ scale: 1.05 }}
    className="w-3/5 p-4 bg-[#755EA5] rounded-full text-white text-center font-xl transition-all duration-200 
                hover:bg-[#5D4884] active:bg-[#463766] focus:outline-none"
                onClick={onClick}
                >
                {text}
            </motion.div>
}