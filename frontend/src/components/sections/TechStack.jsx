import React from 'react';
import { motion } from 'framer-motion';
import { technologies } from '../../data/service_data';

const TechStack = () => (
  <section className="py-20 border-y border-enga-gold/10 overflow-hidden relative bg-page">
    <div className="absolute inset-0 bg-dots-subtle opacity-60 pointer-events-none" />
    <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-[10px] uppercase tracking-[5px] text-gray-600 dark:text-gray-500 font-black mb-12"
      >
        Powered by Elite Technology
      </motion.p>
      <div className="flex flex-wrap justify-center gap-6 md:gap-10 lg:gap-14">
        {technologies.map((tech, i) => (
          <motion.span
            key={tech}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 0.4, y: 0 }}
            whileHover={{ opacity: 1, y: -3, color: '#D4AF37' }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04 }}
            className="text-lg md:text-2xl font-display font-black text-enga-black dark:text-white cursor-default transition-colors duration-300"
          >
            {tech.toUpperCase()}
          </motion.span>
        ))}
      </div>
    </div>
  </section>
);

export default TechStack;
