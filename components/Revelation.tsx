
import React from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';

interface RevelationProps {
  progress: MotionValue<number>;
}

const Revelation: React.FC<RevelationProps> = ({ progress }) => {
  // Adjusted for section position AFTER About section
  const start = 0.45;
  const end = 0.65;

  const doorSpread = useTransform(progress, [start, start + 0.08], ['0%', '-100%']);
  const doorSpreadRight = useTransform(progress, [start, start + 0.08], ['0%', '100%']);
  const contentOpacity = useTransform(progress, [start + 0.04, start + 0.12], [0, 1]);
  const contentScale = useTransform(progress, [start + 0.04, start + 0.12], [0.8, 1]);

  return (
    <div className="relative w-full h-full bg-[#0B1015] overflow-hidden">
      {/* Shoji Doors Sliding Open */}
      <motion.div
        style={{ x: doorSpread }}
        className="absolute inset-0 w-1/2 h-full z-50 bg-[#FDFCF8] border-r border-[#D4AF37]/30 flex items-center justify-end pr-4"
      >
        <div className="w-1 bg-[#2E4057]/10 h-full absolute right-0" />
      </motion.div>
      <motion.div
        style={{ x: doorSpreadRight }}
        className="absolute inset-0 left-1/2 w-1/2 h-full z-50 bg-[#FDFCF8] border-l border-[#D4AF37]/30 flex items-center justify-start pl-4"
      >
        <div className="w-1 bg-[#2E4057]/10 h-full absolute left-0" />
      </motion.div>

      {/* Digital Content Revelation */}
      <motion.div
        style={{ opacity: contentOpacity, scale: contentScale }}
        className="relative w-full h-full flex flex-col items-center justify-center p-4"
      >
        {/* Digital Grid Background */}
        <div className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(#00FFFF 1px, transparent 1px), linear-gradient(90deg, #00FFFF 1px, transparent 1px)',
            backgroundSize: '100px 100px'
          }}
        />

        <h2 className="text-6xl md:text-9xl font-['Zen_Kaku_Gothic_New'] font-bold text-white tracking-tighter text-center">
          WHY <br />
          <span className="text-cyan-400">Hashi?</span>
        </h2>

        <p className="mt-6 text-[#00FFFF] text-xs uppercase tracking-[0.8em] font-bold mb-8">
          4 TRUTHS 1 LIE
        </p>



        <ul className="text-justify space-y-2 font-['Zen_Kaku_Gothic_New'] text-white/80 text-sm md:text-base tracking-wider">
          <li className="hover:text-cyan-400 transition-colors cursor-default">1. Highly responsible with a fierce competitive spirit.</li>
          <li className="hover:text-cyan-400 transition-colors cursor-default">2. Always ready to learn with a positive attitude.</li>
          <li className="hover:text-cyan-400 transition-colors cursor-default">3. Guaranteed to deliver visually stunning and creative products.</li>
          <li className="hover:text-cyan-400 transition-colors cursor-default">4. A cheerful and enthusiastic person.</li>
          <li className="hover:text-cyan-400 transition-colors cursor-default">5. My cat's color is orange.</li>
        </ul>

        {/* Binary Floating Elements */}
        <div className="absolute bottom-6 left-6 text-cyan-400/20 font-mono text-[4px] leading-none">
          {Array(20).fill('010111001').map((b, i) => <div key={i}>{b}</div>)}
        </div>
      </motion.div>
    </div>
  );
};

export default Revelation;
