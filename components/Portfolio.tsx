
import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';

const Portfolio: React.FC = () => {
  return (
    <div id="portfolio" className="container mx-auto px-8 md:px-16">
      <div className="mb-24">
        <h3 className="text-cyan-400 text-xs uppercase tracking-[1em] mb-4">Case Studies</h3>
        <h2 className="text-white text-5xl md:text-7xl font-['Zen_Kaku_Gothic_New'] font-bold">Selected Work</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className={`relative group ${index % 2 !== 0 ? 'md:translate-y-24' : ''}`}
          >
            {/* Project Card */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-[#0B1015] border border-white/5 backdrop-blur-sm transition-all duration-700 group-hover:border-cyan-400/50">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-700 ease-out"
              />

              {/* Glass Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1015] via-transparent to-transparent opacity-60" />

              {/* Vertical Title (Japanese) */}
              <div className="absolute right-6 top-6 vertical-rl text-black text-sm font-['Shippori_Mincho'] opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                {project.japaneseTitle}
              </div>

              {/* Card Content */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-widest text-cyan-400/70 bg-cyan-400/5 px-2 py-1 border border-cyan-400/20">
                      {tag}
                    </span>
                  ))}
                </div>
                <h4 className="text-white text-3xl font-bold font-['Zen_Kaku_Gothic_New'] mb-2">{project.title}</h4>
                <p className="text-white/50 text-xs line-clamp-2 max-w-xs">{project.description}</p>

                <motion.a
                  href={project.link || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 10 }}
                  className="mt-6 flex items-center text-[10px] uppercase tracking-widest text-white border-b border-white/20 pb-1 hover:border-cyan-400 transition-colors inline-block"
                >
                  View Case Study <span className="ml-2">→</span>
                </motion.a>
              </div>
            </div>

            {/* Glow Effect */}
            <div className="absolute -inset-2 bg-cyan-400/0 group-hover:bg-cyan-400/5 blur-3xl transition-colors duration-700 -z-10" />
          </motion.div>
        ))}
      </div>

      <div className="mt-48 flex justify-center">
        <motion.a
          href="https://github.com/hashi173?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          className="group relative px-12 py-6 border border-white/10 hover:border-cyan-400/50 transition-colors inline-block"
        >
          <span className="text-white uppercase tracking-[0.5em] text-xs z-10 relative">And many more...</span>
          <div className="absolute bottom-0 left-0 h-[1px] bg-cyan-400 w-0 group-hover:w-full transition-all duration-500" />
        </motion.a>
      </div>
    </div>
  );
};

export default Portfolio;
