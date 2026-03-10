import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import TestimonialsSection from './TestimonialsSection';
import ClientWall from '../ui/ClientWall';
import { ArrowRight } from 'lucide-react';

const TestimonialsComponent = ({ showCTA = true }) => (
  <>
    <TestimonialsSection />
    <ClientWall />
    
    {showCTA && (
      /* Final CTA */
      <section className="py-20 text-center border-t border-enga-gold/10 bg-section-alt">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-lg mx-auto px-6"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-enga-black dark:text-white mb-4">
            Experience the <span className="text-gradient-gold italic">transformation.</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 font-light mb-8">
            Join 40+ brands who've elevated their digital presence with ENGA.
          </p>
          <Link to="/contact" className="btn-primary rounded-sm inline-flex">
            Partner with us today
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </section>
    )}
  </>
);

export default TestimonialsComponent;
