import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-40 bg-page relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-nano-grid opacity-20 pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(212,175,55,0.06) 0%, transparent 70%)' }}
      />

      {/* Giant background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span className="text-[18vw] font-display font-bold text-enga-white/[0.02] dark:text-enga-black/[0.02] select-none whitespace-nowrap">
          ENGA
        </span>
      </div>

      {/* Corner decorators */}
      <div className="absolute top-10 left-10 w-16 h-16 border-t border-l border-enga-gold/10 dark:border-enga-gold/5" />
      <div className="absolute bottom-10 right-10 w-16 h-16 border-b border-r border-enga-gold/10 dark:border-enga-gold/5" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="label-tag justify-center mb-8 block">Ready to Begin</span>

          <h2 className="text-5xl md:text-7xl font-display font-bold text-enga-black dark:text-enga-white leading-[0.9] mb-8">
            Let's Build
            <br />
            <span className="text-gradient-gold italic">Future Together</span>
          </h2>

          <p className="text-enga-black/40 dark:text-enga-white/40 text-lg font-light mb-12 max-w-xl mx-auto">
            We're selective about who we work with. If you're serious about elevating your digital presence, let's talk.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-primary text-xs">
              Start Your Project
              <ArrowRight size={14} />
            </Link>
            <Link to="/portfolio" className="btn-outline text-xs">
              View Our Work
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
