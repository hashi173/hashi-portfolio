
import React, { useEffect, useRef, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import BridgeTransition from './components/BridgeTransition';
import Revelation from './components/Revelation';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Loader from './components/Loader';
import MusicPlayer from './components/MusicPlayer';


const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Artificial loading time to show the Enso animation
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    let lenis: Lenis | null = null;

    // We wrap Lenis in a try-catch but do NOT trigger a global error state.
    // Lenis is a progressive enhancement; if it fails, native scroll works fine.
    try {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        infinite: false,
      });

      function raf(time: number) {
        lenis?.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    } catch (e) {
      console.warn("Lenis smoothing disabled due to initialization error:", e);
    }

    return () => {
      lenis?.destroy();
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div ref={scrollRef} className="relative w-full min-h-[500vh] selection:bg-cyan-500/30 overflow-x-hidden">
      <AnimatePresence mode="wait">
        {isLoading && <Loader key="loader" />}
      </AnimatePresence>

      <CustomCursor />
      <MusicPlayer />

      {/* Texture Overlay */}
      <div className="fixed inset-0 washi-texture opacity-30 z-50 pointer-events-none" />

      <Header />

      <main className="w-full">
        {/* Scrollytelling Sections */}
        <section className="h-screen w-full sticky top-0 overflow-hidden">
          <Hero progress={smoothProgress} />
        </section>

        <section className="h-[100vh] w-full relative z-10 bg-transparent">
          <BridgeTransition progress={smoothProgress} />
        </section>

        <section className="relative z-30 bg-[#0B1015] py-16">
          <About />
        </section>

        <section className="h-screen w-full sticky top-0 overflow-hidden z-20">
          <Revelation progress={smoothProgress} />
        </section>

        <section className="relative z-30 bg-[#0B1015] pt-16 overflow-hidden">
          {/* Decorative Kanji background for Code section */}
          <div className="absolute top-0 right-0 text-[15rem] font-bold text-white/[0.02] pointer-events-none select-none font-['Shippori_Mincho'] translate-x-1/2 -translate-y-1/4">
            創
          </div>
          <Portfolio />
        </section>

        <section className="relative z-30">
          <Footer />
        </section>
      </main>



      {/* Magnetic CTA */}
      <motion.button
        whileHover={{ scale: 1.1, backgroundColor: "#D4AF37", borderColor: "#D4AF37", color: "#FDFCF8" }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-4 right-4 z-[100] px-3 py-1.5 rounded-full border border-current text-xs uppercase tracking-widest mix-blend-difference text-white transition-all shadow-xl"
        onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
      >
        Inquire
      </motion.button>
    </div>
  );
};

export default App;
