
import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

const About: React.FC = () => {
  return (
    <div id="philosophy" className="container mx-auto px-8 md:px-16 flex flex-col md:flex-row gap-24 relative overflow-hidden">
      {/* Large Decorative Background Kanji ("Void") */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[20rem] font-bold text-white/[0.01] pointer-events-none select-none font-['Shippori_Mincho'] -translate-x-1/4">
        空
      </div>

      {/* Philosophy */}
      <div className="w-full md:w-1/2 relative z-10">
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-[#D4AF37] text-xs uppercase tracking-[1em] mb-6"
        >
          Philosophy
        </motion.h3>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white text-5xl md:text-8xl font-['Shippori_Mincho'] italic mb-12 leading-tight"
        >
          The <br /><span className="text-[#D4AF37]">Balance</span>
        </motion.h2>

        <div className="space-y-8 text-white/70 font-['Shippori_Mincho'] text-lg md:text-sm leading-relaxed max-w-lg">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            "Hashi" (橋) means bridge. My practice exists at the collision point of ancient aesthetic principles and cutting-edge digital logic.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            I believe that code is the modern brushstroke. Just as a calligrapher controls the flow of ink through breath, a developer orchestrates the flow of data through logic.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-white italic border-l border-[#D4AF37]/50 pl-6 py-2 bg-white/5"
          >
            "Ma" — the negative space — is as vital in a layout as it is in a Zen garden. It is the silence that gives the notes their power.
          </motion.p>
        </div>
      </div>

      {/* Skills / Atmosphere Composite */}
      <div className="w-full md:w-1/2 flex flex-col justify-center relative z-10">
        <div className="space-y-14">
          {SKILLS.map((skill, index) => (
            <div key={skill.name} className="relative group cursor-default">
              <div className="flex justify-between items-end mb-4">
                <span className="text-white/20 text-[12px] font-mono group-hover:text-cyan-400 transition-colors">/ 0{index + 1}</span>
                <span className="text-white text-sm font-bold uppercase tracking-[0.3em] font-['Zen_Kaku_Gothic_New'] group-hover:text-cyan-400 transition-colors">
                  {skill.name}
                </span>
                <span className="text-[#D4AF37] text-[12px] font-mono opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                  {skill.level}%
                </span>
              </div>

              {/* Ink Level Bar */}
              <div className="h-1.5 w-full bg-white/10 relative overflow-hidden rounded-full">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, ease: [0.22, 1, 0.36, 1], delay: index * 0.15 }}
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-400 via-white to-[#D4AF37] rounded-full"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Atmosphere Graphic */}
        <div className="mt-32 aspect-square relative rounded-full border border-white/5 overflow-hidden flex items-center justify-center group self-center w-64 md:w-80">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-[#D4AF37]/10"
          />
          <div className="w-3/4 h-3/4 border border-white/10 rounded-full animate-[spin_25s_linear_infinite]" />
          <div className="w-1/2 h-1/2 border border-cyan-400/20 rounded-full animate-[spin_12s_linear_infinite_reverse]" />
          <div className="w-1/4 h-1/4 border border-[#D4AF37]/30 rounded-full flex items-center justify-center">
            <span className="text-[4px] uppercase tracking-[1em] text-white/30 animate-pulse">Core</span>
          </div>

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-1 bg-white/5 h-full absolute rotate-45" />
            <div className="w-1 bg-white/5 h-full absolute -rotate-45" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
