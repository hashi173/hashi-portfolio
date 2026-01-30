
import React from 'react';
import { motion } from 'framer-motion';

const Loader: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }}
      className="fixed inset-0 z-[200] bg-[#FDFCF8] flex items-center justify-center overflow-hidden"
    >
      <div className="relative flex flex-col items-center">
        {/* Enso Circle Animation */}
        <svg width="200" height="200" viewBox="0 0 100 100" className="rotate-[-90deg]">
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            fill="transparent"
            stroke="#2E4057"
            strokeWidth="0.5"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: 1, 
              opacity: [0, 1, 1],
              strokeWidth: [0.5, 2, 1]
            }}
            transition={{ 
              duration: 2, 
              ease: "easeInOut",
              times: [0, 0.5, 1]
            }}
          />
        </svg>

        {/* Text Fade */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-8 text-center"
        >
          <span className="text-[#2E4057] font-['Shippori_Mincho'] italic text-2xl tracking-widest block mb-2">Hashi</span>
          <span className="text-[30px] uppercase tracking-[0.6em] text-[#2E4057]/40">Gathering Ink...</span>
        </motion.div>
      </div>

      {/* Decorative Brush Splashes */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-1/4 -left-20 text-[20rem] font-serif text-[#2E4057] pointer-events-none opacity-5"
      >
        忍耐
      </motion.div>
    </motion.div>
  );
};

export default Loader;
