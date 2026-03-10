import React from 'react';
import { motion } from 'framer-motion';
import StarBackground from '../ui/StarBackground';

const PortfolioHero = () => (
  <section className="relative pt-36 pb-20 overflow-hidden bg-page">
    <StarBackground count={35} shootingCount={2} reduced />
    <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-end gap-12">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="max-w-3xl">
          <span className="label-gold mb-6 block">The Archives</span>
          <h1 className="text-6xl md:text-8xl xl:text-[10vw] font-display font-bold leading-[0.85] text-enga-black dark:text-white">
            Selected <br />
            <span className="text-gradient-gold italic">Works.</span>
          </h1>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="max-w-xs border-l-2 border-enga-gold/30 pl-8 pb-4">
          <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed font-light">
            A curation of digital excellence — spanning fintech, luxury real estate, e-commerce, and neural SaaS platforms.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default PortfolioHero;
