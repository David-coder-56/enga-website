import React from 'react';
import { motion } from 'framer-motion';
import CountUp from '../ui/CountUp';

const stats = [
  { label: "Projects Delivered", value: 150, suffix: "+" },
  { label: "Global Clients", value: 40, suffix: "+" },
  { label: "Awards Won", value: 12, suffix: "" },
  { label: "Lines of Code", value: 2, suffix: "M+" },
];

const StatsSection = () => (
  <section className="relative py-20 overflow-hidden">
    {/* Rich dark/warm strip */}
    <div className="absolute inset-0 bg-enga-maroon dark:bg-enga-dark" />
    <div className="absolute inset-0 bg-crosshatch opacity-40 pointer-events-none" />
    
    <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="text-center group"
          >
            <div className="text-5xl md:text-7xl font-display font-black text-enga-gold mb-2 tabular-nums">
              {stat.value}{stat.suffix}
            </div>
            <p className="text-[10px] uppercase tracking-[3px] text-white/50 font-bold">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
