import React from 'react';
import { motion } from 'framer-motion';
import StarBackground from '../ui/StarBackground';

const ServiceHero = () => (
  <section className="relative pt-36 pb-20 overflow-hidden bg-page">
    <StarBackground count={35} shootingCount={2} reduced />
    <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <span className="label-gold mb-6 block">Core Capabilities</span>
        <h1 className="text-6xl md:text-8xl xl:text-[10vw] font-display font-bold leading-[0.85] text-enga-black dark:text-white mb-10">
          Precision <br />
          <span className="text-gradient-gold italic">Engineering.</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-500 dark:text-gray-400 font-light max-w-2xl leading-relaxed">
          High-frequency digital assets designed to scale, convert, and dominate. From pixel-perfect UI to iron-clad backends.
        </p>
      </motion.div>

      {/* Feature pills */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex flex-wrap gap-3 mt-12"
      >
        {['Web Development', 'Mobile Apps', 'Digital Marketing', 'Brand Identity', 'SEO', 'E-Commerce'].map((s) => (
          <span key={s} className="px-4 py-2 rounded-full border border-enga-gold/20 text-[10px] uppercase tracking-[2px] font-bold text-gray-500 dark:text-gray-400 bg-white dark:bg-enga-dark/50 hover:border-enga-gold hover:text-enga-gold transition-all duration-300 cursor-default">
            {s}
          </span>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ServiceHero;
