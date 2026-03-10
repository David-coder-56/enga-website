import React from "react";
import { motion } from "framer-motion";
import { services } from "../../data/service_data";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.55, delay: index * 0.08 }}
    viewport={{ once: true }}
    className="card group relative h-[420px] overflow-hidden rounded-xl cursor-pointer"
  >
    {/* Gradient hover fill */}
    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-600 pointer-events-none`} />

    <div className="relative z-10 p-8 md:p-10 h-full flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-start mb-10">
        <span className="font-display text-5xl font-black text-enga-gold/10 group-hover:text-enga-gold/25 transition-colors duration-500 select-none">
          {service.id}
        </span>
        <div className="p-3.5 bg-enga-gold/6 border border-enga-gold/20 text-enga-gold rounded-lg group-hover:bg-enga-gold group-hover:text-enga-black transition-all duration-500 group-hover:rotate-[360deg] group-hover:shadow-lg">
          <service.icon size={26} strokeWidth={1.5} />
        </div>
      </div>

      {/* Content */}
      <h3 className="text-2xl md:text-3xl font-display font-bold text-enga-black dark:text-white mb-4 leading-snug">{service.title}</h3>
      <p className="text-gray-500 dark:text-gray-400 font-light leading-relaxed text-sm flex-grow">{service.desc}</p>

      {/* Footer link */}
      <Link
        to="/services"
        className="mt-6 flex items-center gap-3 text-[10px] uppercase tracking-[3px] font-black text-enga-black dark:text-white group/link"
      >
        <span className="relative">
          Learn More
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-enga-gold group-hover/link:w-full transition-all duration-300" />
        </span>
        <div className="w-7 h-7 rounded-full border border-enga-gold/30 flex items-center justify-center group-hover/link:bg-enga-gold group-hover/link:border-enga-gold group-hover/link:text-enga-black transition-all duration-300">
          <ArrowRight size={12} />
        </div>
      </Link>
    </div>

    {/* Bottom accent */}
    <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-enga-gold to-transparent group-hover:w-full transition-all duration-700" />
  </motion.div>
);

const ServicesSection = () => (
  <section id="services" className="py-28 md:py-36 relative overflow-hidden bg-page">
    {/* Faint watermark */}
    <div className="absolute top-8 right-[-4%] opacity-[0.02] dark:opacity-[0.04] pointer-events-none select-none">
      <h2 className="text-[14vw] font-display font-black whitespace-nowrap">EXPERTISE</h2>
    </div>

    <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
      {/* Header */}
      <div className="max-w-3xl mb-16 md:mb-24">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="label-gold mb-6"
        >
          Specialized Solutions
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-display font-bold text-enga-black dark:text-white leading-[0.88]"
        >
          Forging Digital <br />
          <span className="text-gradient-gold italic">Superiority.</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {services.map((s, i) => (
          <ServiceCard key={i} service={s} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
