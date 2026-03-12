import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { aboutData, values } from '../../data/about_data.js';
import { ArrowRight, Target, Eye, ShieldCheck } from 'lucide-react';

const DNAComponent = lazy(() => import('../ui/DNAComponent.jsx'));

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
};

export default function AboutHero() {
  return (
    <div className="bg-page">
      {/* Hero */}
      <section className="min-h-[70vh] flex items-end pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-nano-grid opacity-20" />
        <div className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 50% 60% at 70% 40%, rgba(212,175,55,0.07) 0%, transparent 70%)' }}
        />

        <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-10 w-full pt-36">
          <motion.div initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.1 } } }}>
            <motion.span variants={fadeUp} className="label-tag block mb-8">
              {aboutData.hero.badge}
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-6xl md:text-[8vw] font-display font-bold leading-[0.85] max-w-4xl">
              Redefining
              <br />
              <span className="text-gradient-gold italic">Digital</span>
              <br />
              Excellence.
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-8 text-gray-700 dark:text-gray-400 text-lg font-light max-w-xl leading-relaxed">
              {aboutData.hero.subtitle}
            </motion.p>
          </motion.div>
        </div>

        {/* Background DNA on right */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 pointer-events-none opacity-20 hidden md:block">
          <Suspense fallback={null}>
            <DNAComponent />
          </Suspense>
        </div>
      </section>

      

      

      {/* Location / Info */}
      <section className="py-20 border-t border-enga-gold/10 bg-surface">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <div className="dark:text-enga-white/30 text-enga-black/30 text-xs font-mono tracking-[3px] uppercase mb-2 ">{aboutData.teamFooter.location}</div>
            <div className="dark:text-enga-gold/60 text-enga-gold/30 text-xs font-mono tracking-[3px] uppercase">{aboutData.teamFooter.size}</div>
          </div>
          <Link to="/contact" className="btn-primary text-xs">
            Work With Us
            <ArrowRight size={12} />
          </Link>
        </div>
      </section>
    </div>
  );
}
