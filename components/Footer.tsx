
import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Github, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="relative w-full bg-[#FDFCF8] pt-48 pb-24 px-8 md:px-16 overflow-hidden">
      {/* Sunset Background Texture */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/10 via-transparent to-transparent opacity-50" />
      <div className="absolute inset-0 washi-texture opacity-30" />

      <div className="container mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-[#2E4057] text-6xl md:text-9xl font-['Shippori_Mincho'] italic mb-12">
            Let's build the <br /> bridge together.
          </h2>

          <a
            href="mailto:phamthithienha17032005@gmail.com"
            className="inline-block text-[#2E4057] text-3xl md:text-3xl font-['Shippori_Mincho'] border-b-2 border-[#2E4057]/10 hover:border-[#D4AF37] transition-all duration-500 mb-12"
          >
            phamthithienha17032005@gmail.com
          </a>

          {/* Hanko Social Icons */}
          <div className="flex justify-center space-x-8">
            {[
              { Icon: Facebook, url: 'https://www.facebook.com/thien.ha.200976/?locale=vi_VN' },
              { Icon: Github, url: 'https://github.com/hashi173' },
              { Icon: Linkedin, url: 'https://www.linkedin.com/in/thiên-hà-phạm-2b18b7286' }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 flex items-center justify-center border-2 border-red-700 text-red-700 font-bold font-serif text-sm relative group"
                style={{ clipPath: 'polygon(5% 0%, 95% 0%, 100% 5%, 100% 95%, 95% 100%, 5% 100%, 0% 95%, 0% 5%)' }}
              >
                <div className="absolute inset-0 bg-red-700 opacity-0 group-hover:opacity-10 transition-opacity" />
                <social.Icon size={45} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <div className="flex flex-col justify-center items-center border-t border-[#2E4057]/10 pt-16">
          <div className="text-[20px] uppercase tracking-[0.5em] text-[#2E4057]/60 text-center">
            &copy; Since 2026 created by Hashi / Built for the future
          </div>
        </div>
      </div>

      {/* Decorative Signature */}
      <div className="absolute bottom-12 right-12 text-[15rem] font-['Shippori_Mincho'] text-[#2E4057]/5 select-none pointer-events-none -z-10">
        橋
      </div>
    </footer>
  );
};

export default Footer;
