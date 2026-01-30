
import React from 'react';
import { motion } from 'framer-motion';
import { LOGO_SVG } from '../constants';

const Header: React.FC = () => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 w-full h-24 flex items-center justify-between px-8 md:px-16 z-[100] mix-blend-difference text-white"
    >
      <div className="flex items-center space-x-2">
        <a href="#" className="flex items-center hover:scale-105 transition-transform duration-500">
          {LOGO_SVG}
        </a>
      </div>

      <nav className="flex space-x-12">
        {['About', 'Portfolio', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-xs uppercase tracking-[0.3em] font-['Zen_Kaku_Gothic_New'] hover:text-[#D4AF37] transition-colors duration-300 relative group"
          >
            {item}
            <span className="absolute -bottom-1 left-1/2 w-0 h-[1px] bg-current transition-all duration-500 group-hover:w-full group-hover:left-0" />
          </a>
        ))}
      </nav>
    </motion.header>
  );
};

export default Header;
