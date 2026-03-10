import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "ENGA didn't just build a website; they architected a digital legacy for our brand. Their mastery of 3D design and performance is simply unparalleled in the current market.",
    author: "Alexander Sterling",
    role: "CEO, Apex Global",
    company: "Apex",
    rating: 5,
    metric: "3× Revenue Growth",
  },
  {
    id: 2,
    content: "The transition to a high-ticket aesthetic was seamless. We saw a 40% increase in conversion within the first month of launching the new platform they built.",
    author: "Elena Rossi",
    role: "Creative Director, Lumina",
    company: "Lumina",
    rating: 5,
    metric: "+40% Conversion",
  },
  {
    id: 3,
    content: "Working with ENGA is like glimpsing into the future of the web. They are the only agency that truly understands the 'Elite' standard and consistently delivers beyond it.",
    author: "Marcus Chen",
    role: "Founder, Zenith AI",
    company: "Zenith",
    rating: 5,
    metric: "200% User Growth",
  }
];

const CLIENTS = ['APEX', 'LUMINA', 'ZENITH', 'VOGUE', 'NEOBANK', 'GLOW'];

const TestimonialsSection = () => {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((p) => (p + 1) % testimonials.length);
  const prev = () => setIndex((p) => (p - 1 + testimonials.length) % testimonials.length);
  const t = testimonials[index];

  return (
    <section className="py-28 md:py-36 bg-section-alt relative overflow-hidden">
      {/* Big quote mark decoration */}
      <div className="absolute top-16 left-8 opacity-[0.04] dark:opacity-[0.06] pointer-events-none">
        <Quote size={240} className="text-enga-gold" />
      </div>
      
      <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 md:mb-20 gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="label-gold mb-6"
            >
              Testimonials
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-display font-bold text-enga-black dark:text-white leading-[0.88]">
              Trusted by <span className="text-gradient-gold italic">Visionaries.</span>
            </h2>
          </div>
          {/* Navigation */}
          <div className="flex gap-3">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-12 h-12 rounded-full border border-enga-gold/25 flex items-center justify-center text-enga-black dark:text-white hover:bg-enga-gold hover:text-enga-black hover:border-enga-gold transition-all duration-300"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-12 h-12 rounded-full border border-enga-gold/25 flex items-center justify-center text-enga-black dark:text-white hover:bg-enga-gold hover:text-enga-black hover:border-enga-gold transition-all duration-300"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Testimonial card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: 'circOut' }}
            className="card rounded-2xl p-10 md:p-16 relative overflow-hidden"
          >
            {/* Subtle gradient behind card */}
            <div className="absolute inset-0 bg-gradient-to-br from-enga-gold/4 to-transparent pointer-events-none rounded-2xl" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-center">
              <div>
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={14} className="fill-enga-gold text-enga-gold" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-xl md:text-3xl font-display font-medium leading-relaxed text-enga-black dark:text-gray-100 mb-8">
                  "{t.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-px bg-enga-gold" />
                  <div>
                    <p className="font-bold text-enga-black dark:text-white text-sm">{t.author}</p>
                    <p className="text-enga-gold text-[10px] uppercase tracking-[3px] font-bold mt-0.5">{t.role}</p>
                  </div>
                </div>
              </div>

              {/* Metric highlight */}
              <div className="lg:text-right">
                <div className="inline-flex flex-col items-center lg:items-end p-6 rounded-xl bg-enga-gold/8 border border-enga-gold/20">
                  <span className="text-4xl font-display font-black text-gradient-gold">{t.metric.split(' ')[0]}</span>
                  <span className="text-[10px] uppercase tracking-[3px] text-gray-400 font-bold mt-1">{t.metric.split(' ').slice(1).join(' ')}</span>
                </div>
              </div>
            </div>

            {/* Dot indicators */}
            <div className="flex gap-2 mt-8 relative z-10">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-[3px] transition-all duration-400 rounded-full ${i === index ? 'w-8 bg-enga-gold' : 'w-3 bg-enga-gold/25'}`}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Client logo bar */}
        <div className="mt-16 pt-10 border-t border-enga-gold/10">
          <p className="text-center text-[9px] uppercase tracking-[5px] text-gray-400 font-bold mb-8">Trusted by leading brands</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-30 hover:opacity-80 transition-opacity duration-700">
            {CLIENTS.map((c) => (
              <span key={c} className="text-xl md:text-2xl font-display font-black tracking-tighter text-enga-black dark:text-white">
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
