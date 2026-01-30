
import React from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';

interface BridgeTransitionProps {
  progress: MotionValue<number>;
}

const BridgeTransition: React.FC<BridgeTransitionProps> = ({ progress }) => {
  // Scrollytelling Mapping
  const start = 0;
  const end = 0.4;

  const opacity = useTransform(progress, [start, start + 0.05, end - 0.1, end], [0, 1, 1, 0]);
  const bridgeScale = useTransform(progress, [start, end], [1.2, 1]);
  const fogOpacity = useTransform(progress, [start, start + 0.2], [0.8, 0.2]);
  const textParallax = useTransform(progress, [start, end], [0, -200]);

  return (
    <motion.div
      id="about"
      style={{ opacity }}
      className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center bg-[#FDFCF8]"
    >
      {/* Background Bridge Image (Traditional) */}
      <motion.div
        style={{ scale: bridgeScale }}
        className="absolute inset-0 z-0"
      >
        <img
          src="/hashi-portfolio/bridge_bg.png"
          alt="Traditional Bridge"
          className="w-full h-full object-cover filter brightness-90 grayscale-[0.2]"
        />
        {/* Soft volumetric fog overlay */}
        <motion.div
          style={{ opacity: fogOpacity }}
          className="absolute inset-0 bg-gradient-to-b from-[#FDFCF8] via-[#FDFCF8]/20 to-[#FDFCF8] mix-blend-soft-light"
        />
      </motion.div>

      {/* Floating Calligraphy Elements */}
      <motion.div
        style={{ y: textParallax }}
        className="relative z-10 pointer-events-none w-full px-4 flex flex-col items-center justify-center h-full"
      >
        <h2 className="text-white text-5xl md:text-8xl font-['Shippori_Mincho'] italic drop-shadow-2xl">
          About Hashi
        </h2>
        <p className="text-center mt-2 text-white/80 uppercase tracking-widest text-xs mb-4">
          An art lover "accidentally" became a developer
        </p>

        <div className="max-w-xl w-full mx-auto text-center space-y-1.5 font-['Zen_Kaku_Gothic_New'] text-white/90 text-xs leading-relaxed bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/10 shadow-2xl">
          <p className="text-sm">
            Honors IT Student at Posts and Telecommunications Institute of Technology (PTIT - Hà Nội).
            <br />
            Aspiring Full Stack Developer with a dream to craft my own immersive games.
          </p>

          <div className="flex flex-wrap justify-center gap-1.5 text-[12px] uppercase tracking-wider text-cyan-400 my-2">
            <span className="bg-cyan-400/10 px-1.5 py-1 rounded-full border border-cyan-400/20">IELTS 7.0</span>
            <span className="bg-cyan-400/10 px-1.5 py-1 rounded-full border border-cyan-400/20">Japanese (Conversational)</span>
            <span className="bg-cyan-400/10 px-1.5 py-1 rounded-full border border-cyan-400/20">Based in Hanoi, Vietnam</span>
          </div>

          <div className="p-2 bg-white/5 border border-white/10 rounded-lg">
            <p className="mb-1 font-bold text-white tracking-widest uppercase text-[5px]">Tech Stack</p>
            <p className="text-white/80 leading-loose text-xs">
              <span className="mx-1">Java</span>·<span className="mx-1">C/C++</span>·<span className="mx-1">Python</span>·<span className="mx-1">C#</span>·<span className="mx-1">TypeScript</span>·<span className="mx-1">React</span>·<span className="mx-1">Tailwind</span>·<span className="mx-1">CSS</span>
              <br />
              <span className="mx-1">MySQL</span>·<span className="mx-1">PostgreSQL</span>·<span className="mx-1">SQLServer</span>·<span className="mx-1">MongoDB</span>·<span className="mx-1">NoSQL</span>
            </p>
          </div>

          <p className="italic font-serif text-white/80 pt-2 border-t border-white/10 text-sm">
            "A creative fast learner with an eye for design. I thrive in independent deep work."
          </p>
        </div>
      </motion.div>

      {/* Japanese Vertical Text annotations */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 vertical-rl text-[#2E4057]/40 font-['Shippori_Mincho'] text-xl tracking-tighter">
        自然と技術の調和
      </div>
    </motion.div>
  );
};

export default BridgeTransition;
