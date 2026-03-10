import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AboutHero from '../components/heros/AboutHero';
import AboutSection from '../components/sections/AboutSection';
import StatsSection from '../components/sections/StatsSection';
import TeamSection from '../components/sections/TeamSection';
import Philosophy from '../components/sections/Philosophy';
import { ArrowRight } from 'lucide-react';

const About = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <AboutHero />
    <StatsSection />
    <AboutSection />
    <Philosophy />
    <TeamSection />

    {/* CTA Footer for About */}
    <section className="py-20 text-center border-t border-enga-gold/10 bg-page">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto px-6"
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold text-enga-black dark:text-white mb-4">
          Want to join the <span className="text-gradient-gold italic">elite?</span>
        </h2>
        <p className="text-gray-500 dark:text-gray-400 font-light mb-8">
          We're always looking for exceptional talent to join our boutique team.
        </p>
        <Link to="/contact" className="btn-primary rounded-sm inline-flex">
          View Careers
          <ArrowRight size={14} />
        </Link>
      </motion.div>
    </section>
  </motion.div>
);

export default About;
