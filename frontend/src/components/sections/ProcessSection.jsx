import React from 'react';
import { motion } from 'framer-motion';
import { steps } from '../../data/service_data';
import { ArrowRight } from 'lucide-react';

const ProcessSection = () => (
  <section className="py-28 md:py-36 bg-section-alt relative overflow-hidden">
    <div className="absolute inset-0 bg-crosshatch opacity-70 pointer-events-none" />

    <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="label-gold mb-6"
          >
            How We Work
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-enga-black dark:text-white leading-[0.9]">
            The Execution <span className="text-gradient-gold italic">Flow</span>
          </h2>
        </div>
        <p className="text-gray-500 dark:text-gray-400 font-light text-sm max-w-sm leading-relaxed md:text-right">
          A battle-tested 4-stage process refined across 150+ projects to ensure predictable, high-quality outcomes every time.
        </p>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="card rounded-xl p-8 group hover:border-enga-gold/40 relative overflow-hidden"
          >
            {/* Connector arrow — visible on desktop between steps */}
            {i < steps.length - 1 && (
              <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20">
                <ArrowRight size={16} className="text-enga-gold/40" />
              </div>
            )}

            {/* Number */}
            <span className="font-display text-6xl font-black text-enga-gold/12 group-hover:text-enga-gold/25 absolute top-4 right-5 transition-colors duration-400 select-none">
              {step.id}
            </span>

            {/* Step indicator dot */}
            <div className="w-3 h-3 rounded-full bg-enga-gold mb-6" />

            <h4 className="text-lg font-display font-bold mb-3 text-enga-black dark:text-white relative z-10">{step.name}</h4>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed font-light">{step.desc}</p>

            {/* Bottom accent */}
            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-enga-gold group-hover:w-full transition-all duration-600" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
