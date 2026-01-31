
import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS, EDUCATION } from '../constants';
import { GraduationCap, Code2, Sparkles, MapPin, Languages, Gamepad2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div id="philosophy" className="container mx-auto px-4 md:px-8 py-16 relative overflow-hidden">
      {/* Large Decorative Background Kanji */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[20rem] font-bold text-white/[0.01] pointer-events-none select-none font-['Shippori_Mincho'] -translate-x-1/4">
        橋
      </div>

      {/* Unified Section Header with Profile */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12 relative z-10"
      >
        {/* Profile Image */}
        <div className="flex justify-center mb-6">
          <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full p-1 bg-gradient-to-br from-cyan-400 via-[#D4AF37] to-[#2E4057] shadow-xl shadow-cyan-400/20">
            <div className="w-full h-full rounded-full overflow-hidden bg-[#0B1015]">
              <img
                src="/hashi-portfolio/profile.jpg"
                alt="Hashi"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-[-4px] rounded-full border border-dashed border-white/20 pointer-events-none animate-[spin_20s_linear_infinite]" />
          </div>
        </div>

        <h3 className="text-[#D4AF37] text-xs uppercase tracking-[0.8em] mb-3">
          About Hashi
        </h3>
        <h2 className="text-white text-4xl md:text-6xl font-['Shippori_Mincho'] italic leading-tight mb-3">
          An Art Lover <span className="text-cyan-400">&</span> Builder of <span className="text-[#D4AF37]">Bridges</span>
        </h2>
        <p className="text-white/60 font-['Zen_Kaku_Gothic_New'] text-sm max-w-2xl mx-auto">
          Honors IT Student at <span className="text-cyan-400">PTIT - Hà Nội</span>. Aspiring Full Stack Developer with a dream to craft my own immersive games.
        </p>

        {/* Quick Info Tags */}
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          {[
            { icon: MapPin, text: 'Hanoi, Vietnam' },
            { icon: Gamepad2, text: 'Game Dev Dreamer' }
          ].map((item, index) => (
            <span key={index} className="inline-flex items-center gap-1.5 bg-cyan-400/10 text-cyan-400 px-3 py-1.5 rounded-full border border-cyan-400/20 text-xs uppercase tracking-wider">
              <item.icon className="w-3 h-3" />
              {item.text}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Main CV Layout - 2 Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 relative z-10">

        {/* Left Column - Education & Tech Stack */}
        <div className="space-y-8">

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500/20 to-cyan-400/10 flex items-center justify-center border border-cyan-400/30">
                <GraduationCap className="w-4 h-4 text-cyan-400" />
              </div>
              <h3 className="text-white text-lg font-bold uppercase tracking-widest font-['Zen_Kaku_Gothic_New']">
                Education
              </h3>
            </div>

            <div className="relative pl-5 border-l-2 border-white/10 space-y-5">
              {EDUCATION.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative group"
                >
                  <div className="absolute -left-[1.4rem] top-1 w-3 h-3 rounded-full bg-[#0B1015] border-2 border-cyan-400 group-hover:bg-cyan-400 transition-all" />
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-cyan-400/30 transition-all">
                    <span className="text-cyan-400 text-xs font-mono">{edu.period}</span>
                    <h4 className="text-white font-bold text-base mt-1">{edu.school}</h4>
                    <p className="text-[#D4AF37] text-sm">{edu.major}</p>
                    <p className="text-white/50 text-xs mt-1">{edu.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/10 flex items-center justify-center border border-[#D4AF37]/30">
                <Code2 className="w-4 h-4 text-[#D4AF37]" />
              </div>
              <h3 className="text-white text-lg font-bold uppercase tracking-widest font-['Zen_Kaku_Gothic_New']">
                Tech Stack
              </h3>
            </div>

            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 space-y-4">
              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest mb-2">Languages</p>
                <div className="flex flex-wrap gap-2">
                  {['Java', 'C/C++', 'Python', 'C#', 'TypeScript'].map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded-lg bg-cyan-400/10 text-cyan-400 text-xs border border-cyan-400/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest mb-2">Frontend</p>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Tailwind CSS', 'CSS/SCSS'].map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded-lg bg-[#D4AF37]/10 text-[#D4AF37] text-xs border border-[#D4AF37]/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest mb-2">Database</p>
                <div className="flex flex-wrap gap-2">
                  {['MySQL', 'PostgreSQL', 'SQL Server', 'MongoDB'].map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded-lg bg-white/5 text-white/70 text-xs border border-white/10">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest mb-2">Spoken Languages</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { name: 'Vietnamese', level: 'Native' },
                    { name: 'English', level: 'IELTS 7.0' },
                    { name: 'Japanese', level: 'Conversational' }
                  ].map((lang) => (
                    <span key={lang.name} className="px-2.5 py-1 rounded-lg bg-gradient-to-r from-cyan-400/10 to-[#D4AF37]/10 text-white/90 text-xs border border-cyan-400/20">
                      {lang.name} <span className="text-cyan-400">({lang.level})</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Right Column - Skills & Highlights */}
        <div className="space-y-8">

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500/20 to-[#D4AF37]/10 flex items-center justify-center border border-cyan-400/30">
                <Sparkles className="w-4 h-4 text-cyan-400" />
              </div>
              <h3 className="text-white text-lg font-bold uppercase tracking-widest font-['Zen_Kaku_Gothic_New']">
                Skills
              </h3>
            </div>

            <div className="space-y-4">
              {SKILLS.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-cyan-400/30 transition-all group"
                >
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-white/30 text-xs font-mono">0{index + 1}</span>
                      <span className="text-white font-bold uppercase tracking-widest text-sm group-hover:text-cyan-400 transition-colors">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-[#D4AF37] text-sm font-mono font-bold">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/10 relative overflow-hidden rounded-full">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-400 to-[#D4AF37] rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>



          {/* Highlights Grid */}
          <div className="grid grid-cols-4 gap-3">
            {[
              { label: 'Creative', value: '∞', color: 'cyan' },
              { label: 'Projects', value: '5', color: 'gold' },
              { label: 'Languages', value: '3', color: 'cyan' },
              { label: 'Passion', value: '100%', color: 'gold' }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-3 rounded-xl bg-white/[0.02] border text-center transition-all ${item.color === 'cyan'
                  ? 'border-cyan-400/20 hover:border-cyan-400/40'
                  : 'border-[#D4AF37]/20 hover:border-[#D4AF37]/40'
                  }`}
              >
                <div className={`text-2xl font-bold font-mono ${item.color === 'cyan' ? 'text-cyan-400' : 'text-[#D4AF37]'}`}>
                  {item.value}
                </div>
                <div className="text-white/40 text-[10px] uppercase tracking-wider">{item.label}</div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
