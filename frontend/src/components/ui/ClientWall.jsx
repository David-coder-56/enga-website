import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { testimonialData } from '../../data/testimonial_data.js';

const ClientWall = () => {
  const { miniReviews } = testimonialData;
  return (
    <section className="py-20 md:py-28 bg-page">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <p className="label-gold mx-auto justify-center mb-4">Client Voices</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-enga-black dark:text-white">
            A Wall of <span className="text-gradient-gold italic">Love.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {miniReviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="card rounded-xl p-7 group hover-lift"
            >
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map(s => <Star key={s} size={11} className="fill-enga-gold text-enga-gold" />)}
              </div>
              <p className="text-gray-700 dark:text-gray-400 italic text-sm mb-5 font-light leading-relaxed">"{review.text}"</p>
              <div>
                <p className="text-enga-black dark:text-white font-bold text-xs uppercase tracking-widest">{review.name}</p>
                <p className="text-enga-gold text-[10px] font-bold mt-0.5">{review.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientWall;
