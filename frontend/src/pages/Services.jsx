import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ServiceHero from "../components/heros/ServiceHero";
import ServicesSection from "../components/sections/ServicesSection";
import ProcessSection from "../components/sections/ProcessSection";
import TechStack from "../components/sections/TechStack";
import { ArrowRight } from "lucide-react";

const Services = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <ServiceHero />
    <ServicesSection />
    <ProcessSection />
    <TechStack />

    {/* Services CTA */}
    <section className="py-28 md:py-36 px-6 md:px-8 text-center bg-enga-gold relative overflow-hidden">
      <div className="absolute inset-0 bg-crosshatch opacity-20 pointer-events-none" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-3xl mx-auto"
      >
        <h2 className="text-4xl md:text-6xl font-display font-bold text-enga-black mb-6 leading-[0.9]">
          Ready for a digital <br /> transformation?
        </h2>
        <p className="text-enga-black/60 text-lg mb-10 font-light">
          Let's discuss how we can elevate your digital presence to the next level.
        </p>
        <Link to="/contact" className="inline-flex items-center gap-3 px-12 py-5 bg-enga-black text-white font-black uppercase tracking-[3px] text-[10px] hover:bg-white hover:text-enga-black transition-all duration-400 rounded-sm">
          Book a Consultation
          <ArrowRight size={14} />
        </Link>
      </motion.div>
    </section>
  </motion.div>
);

export default Services;
