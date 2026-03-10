import React, { Suspense, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Hero3D from './Hero3D';
import StarBackground from '../ui/StarBackground';
import { ArrowRight, Zap, Users, Award } from 'lucide-react';

// Floating metric badge
const MetricBadge = ({ value, label, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    className="card-glass rounded-xl px-5 py-3 flex items-center gap-3"
  >
    <span className="text-2xl font-display font-black text-gradient-gold">{value}</span>
    <span className="text-[10px] uppercase tracking-[2px] text-gray-500 dark:text-gray-400 font-bold leading-tight max-w-[72px]">{label}</span>
  </motion.div>
);

const HeroSection = React.memo(() => {
  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden bg-page">
      {/* Star field — subtle in light, vibrant in dark */}
      <StarBackground count={70} shootingCount={3} />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.025] dark:opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Main content — 2-column layout */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12 pt-28 pb-16 lg:pt-0 lg:pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-center min-h-screen">

          {/* ── LEFT COLUMN: TEXT ── */}
          <div className="flex flex-col justify-center lg:pr-16">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 mb-8 self-start"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-enga-gold animate-ping opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-enga-gold" />
              </span>
              <span className="text-[10px] uppercase tracking-[4px] font-black text-gray-500 dark:text-gray-400">
                Next Gen Digital Agency
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-8xl xl:text-9xl font-display font-bold leading-[0.88] mb-8 text-enga-black dark:text-white"
            >
              Empower
              <br />
              <span className="text-gradient-gold italic">Brands.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-gray-500 dark:text-gray-400 text-lg md:text-xl max-w-lg mb-10 font-light leading-relaxed"
            >
              Elite code, modern design, and data-driven strategy — engineered
              to dominate the digital landscape in 2026 and beyond.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap gap-4 mb-14"
            >
              <Link to="/services" className="btn-primary rounded-sm">
                Explore Services
                <ArrowRight size={14} />
              </Link>
              <Link to="/contact" className="btn-outline rounded-sm">
                Start a Project
              </Link>
            </motion.div>

            {/* Metric badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-wrap gap-3"
            >
              <MetricBadge value="150+" label="Projects Delivered" delay={1.0} />
              <MetricBadge value="40+" label="Global Clients" delay={1.1} />
              <MetricBadge value="98%" label="Client Retention" delay={1.2} />
            </motion.div>
          </div>

          {/* ── RIGHT COLUMN: 3D VISUAL ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[500px] lg:h-screen flex items-center justify-center"
          >
            {/* 3D Canvas */}
            <div className="relative w-full h-[400px] lg:h-[600px] max-w-lg mx-auto">
              <Suspense fallback={
                <div className="w-full h-full rounded-2xl bg-gradient-to-br from-enga-gold/10 to-transparent flex items-center justify-center">
                  <div className="w-10 h-10 border-2 border-t-enga-gold border-transparent rounded-full animate-spin" />
                </div>
              }>
                <Hero3D />
              </Suspense>

              {/* Floating card: "Currently Available" */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.7 }}
                className="absolute -bottom-4 left-0 card rounded-2xl px-6 py-4 z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-enga-gold/10 flex items-center justify-center">
                    <Zap size={14} className="text-enga-gold" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[3px] text-gray-400 font-bold">Accepting Clients</p>
                    <p className="text-sm font-bold text-enga-black dark:text-white">Q3 2026 Slots Open</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating card: "Trusted by" */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.7 }}
                className="absolute -top-4 right-0 card rounded-2xl px-6 py-4 z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {['A','B','C','D'].map((l, i) => (
                      <div key={i} className="w-7 h-7 rounded-full bg-enga-gold/20 border-2 border-white dark:border-enga-black flex items-center justify-center text-[9px] font-bold text-enga-gold">
                        {l}
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="flex gap-[2px] mb-0.5">
                      {[1,2,3,4,5].map(s => <span key={s} className="text-enga-gold text-[8px]">★</span>)}
                    </div>
                    <p className="text-[10px] font-bold text-enga-black dark:text-white">5.0 Rated Agency</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 hidden lg:flex"
      >
        <div className="w-[1px] h-14 bg-gradient-to-b from-enga-gold to-transparent" />
        <span className="text-[9px] uppercase tracking-[4px] text-enga-gold font-bold">Scroll</span>
      </motion.div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';
export default HeroSection;
