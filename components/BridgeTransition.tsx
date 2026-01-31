
import React from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';

interface BridgeTransitionProps {
  progress: MotionValue<number>;
}

const BridgeTransition: React.FC<BridgeTransitionProps> = ({ progress }) => {
  const start = 0;
  const end = 0.4;

  const opacity = useTransform(progress, [start, start + 0.05, end - 0.1, end], [0, 1, 1, 0]);
  const bridgeScale = useTransform(progress, [start, end], [1.2, 1]);
  const fogOpacity = useTransform(progress, [start, start + 0.2], [0.8, 0.2]);

  return (
    <motion.div
      id="about"
      style={{ opacity }}
      className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center bg-[#FDFCF8]"
    >
      {/* Background Bridge Image */}
      <motion.div
        style={{ scale: bridgeScale }}
        className="absolute inset-0 z-0"
      >
        <img
          src="/hashi-portfolio/bridge_bg.png"
          alt="Traditional Bridge"
          className="w-full h-full object-cover filter brightness-90 grayscale-[0.2]"
        />
        <motion.div
          style={{ opacity: fogOpacity }}
          className="absolute inset-0 bg-gradient-to-b from-[#FDFCF8] via-[#FDFCF8]/20 to-[#FDFCF8] mix-blend-soft-light"
        />
      </motion.div>

      {/* Philosophy Content */}
      <motion.div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center">
        <div className="w-full max-w-2xl px-6 text-center">
          <h2 className="text-white text-5xl md:text-8xl font-['Shippori_Mincho'] italic drop-shadow-2xl mb-4">
            橋
          </h2>
          <p className="text-white/80 uppercase tracking-[0.5em] text-xs mb-6">
            The Bridge — Philosophy
          </p>

          <div className="bg-black/50 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-2xl">
            <blockquote className="text-white/90 font-['Shippori_Mincho'] text-lg md:text-xl leading-relaxed space-y-4">
              <p>
                <span className="text-[#D4AF37] font-bold">"Hashi"</span> (橋) means bridge. My practice exists at the collision point of ancient aesthetic principles and cutting-edge digital logic.
              </p>
              <p className="text-white/70 italic border-l-2 border-[#D4AF37]/50 pl-4 text-base">
                Code is the modern brushstroke. Just as a calligrapher controls the flow of ink through breath, a developer orchestrates the flow of data through logic.
              </p>
              <p className="text-cyan-400/80 text-sm mt-4">
                "A creative fast learner with an eye for design. I thrive in independent deep work."
              </p>
            </blockquote>
          </div>
        </div>
      </motion.div>

      {/* Japanese Vertical Text */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 vertical-rl text-[#2E4057]/40 font-['Shippori_Mincho'] text-xl tracking-tighter">
        自然と技術の調和
      </div>
    </motion.div>
  );
};

export default BridgeTransition;
