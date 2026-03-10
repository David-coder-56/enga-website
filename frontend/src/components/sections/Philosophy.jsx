import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { aboutData, values } from '../../data/about_data';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const DNAComponent = lazy(() => import('../ui/DNAComponent'));

export default function Philosophy() {
  return (
    <section className="py-32 bg-surface relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-hex-subtle pointer-events-none" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Text content */}
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="label-tag block mb-6"
            >
              Our Philosophy
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-display font-bold leading-[0.9] mb-8"
            >
              Built Into
              <br />
              <span className="text-gradient-gold italic">Our DNA</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-enga-white/50 text-lg font-light leading-relaxed mb-12"
            >
              We don't build websites. We architect digital ecosystems that evolve with your ambitions and outlast your competition.
            </motion.p>

            {/* Values */}
            <div className="space-y-6">
              {values.map((val, i) => (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i + 0.3 }}
                  className="flex gap-4 group"
                >
                  <div className="mt-1.5 w-4 h-4 border border-enga-gold/30 rotate-45 flex-shrink-0 group-hover:border-enga-gold transition-colors duration-300" />
                  <div>
                    <h4 className="font-mono text-xs font-bold uppercase tracking-[3px] text-enga-gold mb-1">
                      {val.title}
                    </h4>
                    <p className="text-enga-white/40 text-sm font-light leading-relaxed">{val.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-12"
            >
              <Link to="/about" className="btn-outline inline-flex items-center gap-2">
                Our Story
                <ArrowRight size={12} />
              </Link>
            </motion.div>
          </div>

          {/* Right: DNA 3D */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] hidden lg:block"
          >
            {/* Glow behind */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-64 h-64 rounded-full"
                style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%)' }}
              />
            </div>

            <Suspense fallback={null}>
              <DNAComponent className="w-full h-full" />
            </Suspense>
          </motion.div>

          {/* Mobile DNA (simplified) */}
          <div className="lg:hidden h-48 relative">
            <Suspense fallback={null}>
              <DNAComponent className="w-full h-full" />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
}
