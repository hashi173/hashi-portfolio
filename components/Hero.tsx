
import React, { useRef, useState, useEffect } from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';
import WatercolorTrail from './WatercolorTrail';

interface HeroProps {
  progress: MotionValue<number>;
}

const Hero: React.FC<HeroProps> = ({ progress }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const opacity = useTransform(progress, [0, 0.05], [1, 0]);
  const scale = useTransform(progress, [0, 0.1], [1, 1.2]);
  const inkSpread = useTransform(progress, [0, 0.1], [0, 100]);

  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [smoothMousePos, setSmoothMousePos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    let frameId: number;
    const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor;

    const animate = () => {
      setSmoothMousePos(prev => ({
        x: lerp(prev.x, mousePos.x, 0.1),
        y: lerp(prev.y, mousePos.y, 0.1)
      }));
      frameId = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(frameId);
  }, [mousePos]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - left) / width) * 100,
      y: ((e.clientY - top) / height) * 100,
    });
  };

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      style={{ opacity, scale }}
      className="relative w-full h-full bg-[#FDFCF8] flex flex-col items-center justify-center overflow-hidden cursor-none"
    >
      {/* Initial Hero Image Overlay */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 3.5, delay: 2.5, ease: "easeInOut" }}
        className="absolute inset-0 z-50 pointer-events-none bg-[#FDFCF8]"
      >
        <img src="/hashi-portfolio/hero_2.png" alt="Intro" className="w-full h-full object-cover" />
      </motion.div>

      {/* Enhanced Multi-Layered Ink Ripple */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: `
            radial-gradient(circle at ${smoothMousePos.x}% ${smoothMousePos.y}%, rgba(46, 64, 87, 0.12) 0%, transparent 35%),
            radial-gradient(circle at ${smoothMousePos.x - 5}% ${smoothMousePos.y + 5}%, rgba(212, 175, 55, 0.05) 0%, transparent 45%),
            radial-gradient(circle at ${smoothMousePos.x + 5}% ${smoothMousePos.y - 5}%, rgba(0, 255, 255, 0.03) 0%, transparent 40%)
          `,
          filter: 'blur(25px) contrast(1.1)',
          mixBlendMode: 'multiply'
        }}
      />

      {/* Watercolor Trail Effect following cursor */}
      <WatercolorTrail containerRef={containerRef} />

      <div className="absolute inset-0 washi-texture opacity-25 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FDFCF8]/30 to-[#FDFCF8] z-0" />

      {/* Floating Decorative Kanji */}
      <motion.div
        animate={{ y: [0, -20, 0], opacity: [0.03, 0.06, 0.03] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-10 text-9xl font-serif text-[#2E4057] pointer-events-none select-none"
      >
        接続する
      </motion.div>

      {/* Main Calligraphy Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 text-center"
      >
        <motion.div className="relative inline-block">
          {/* breathing and bleeding calligraphy */}
          <motion.div className="relative z-10">
            {/* Watercolor Bloom Behind Text */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0.8, 1.2, 1.1], opacity: [0, 0.4, 0.2] }}
              transition={{ duration: 4, ease: "easeOut", times: [0, 0.6, 1] }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[#006994] rounded-full blur-[60px] -z-10 mix-blend-multiply pointer-events-none"
            />

            <motion.h1
              className="text-9xl md:text-[10.5rem] font-bold text-[#006994] font-['Hina_Mincho'] italic tracking-tighter relative z-10"
              initial={{ opacity: 0, filter: 'blur(15px)', scale: 1.05 }}
              animate={{
                opacity: 1,
                filter: 'blur(0px)',
                scale: 1,
                textShadow: [
                  "0 0 15px rgba(0, 105, 148, 0.1)",
                  "0 0 30px rgba(0, 105, 148, 0.3)",
                  "0 0 15px rgba(0, 105, 148, 0.1)"
                ]
              }}
              transition={{
                duration: 3,
                ease: "easeOut",
                textShadow: { duration: 5, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              Hashi
            </motion.h1>

            {/* Wet Edge Layer */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 1, duration: 2 }}
              className="absolute inset-0 text-9xl md:text-[10.5rem] font-bold text-[#00334e] font-['Hina_Mincho'] italic tracking-tighter mix-blend-overlay pointer-events-none"
            >
              Hashi
            </motion.h1>
          </motion.div>

          {/* Background Highlight Brush with its own subtle breathing */}
          <motion.div
            initial={{ width: 0 }}
            animate={{
              width: "110%",
              opacity: [0.08, 0.12, 0.08]
            }}
            transition={{
              width: { delay: 0.8, duration: 1.5, ease: "circOut" },
              opacity: { duration: 5, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-2 md:h-4 bg-[#D4AF37]/10 -rotate-2 -z-10"
          />

          <motion.span
            className="absolute -right-4 -top-4 text-5xl md:text-7xl text-[#D4AF37] font-serif"
            animate={{
              rotate: [0, 5, 0],
              y: [0, -5, 0],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            橋
          </motion.span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.2em" }}
          animate={{ opacity: 1, letterSpacing: "0.5em" }}
          transition={{ delay: 1.2, duration: 1.5 }}
          className="mt-6 text-lg uppercase text-[#2E4057]/60 font-['Zen_Kaku_Gothic_New'] font-bold"
        >
          Also called Galaxy - "Thiên Hà"
        </motion.p>
      </motion.div>

      {/* Ink Bleed Elements */}
      <div className="absolute bottom-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          style={{ height: inkSpread, opacity: useTransform(progress, [0, 0.2], [0, 0.4]) }}
          className="w-full bg-[#2E4057] blur-[100px] absolute bottom-[-50px]"
        />
      </div>

      {/* Down Arrow indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 flex flex-col items-center opacity-30"
      >
        <span className="text-[17px] uppercase tracking-widest mb-1 font-['Zen_Kaku_Gothic_New']">Scroll</span>
        <div className="w-[1px] h-12 bg-[#2E4057]" />
      </motion.div>
    </motion.div>
  );
};

export default Hero;
