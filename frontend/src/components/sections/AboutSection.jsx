import React from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Target, Eye, ShieldCheck, Zap, ArrowUpRight } from "lucide-react";
import { aboutData } from '../../data/about_data.js';

const AboutCard = ({ title, desc, icon: Icon, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);
  const spotX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const spotY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <Link to="/about" className="block perspective-1000">
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: index * 0.12 }}
        className="card rounded-2xl p-8 md:p-10 h-[380px] group overflow-hidden relative cursor-pointer"
      >
        {/* Cursor-following spotlight */}
        <motion.div
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at ${spotX} ${spotY}, rgba(212,175,55,0.12) 0%, transparent 75%)`,
          }}
        />

        <div style={{ transform: "translateZ(40px)", transformStyle: "preserve-3d" }} className="relative z-10 flex flex-col h-full">
          {/* Icon + arrow */}
          <div className="flex justify-between items-start mb-8">
            <div className="p-3 rounded-xl bg-enga-gold/8 border border-enga-gold/20">
              <Icon size={28} className="text-enga-gold" strokeWidth={1.5} />
            </div>
            <ArrowUpRight size={18} className="text-enga-gold opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
          </div>

          <h3 className="text-2xl font-display font-bold text-enga-black dark:text-white mb-4 leading-snug">{title}</h3>
          <p className="text-gray-500 dark:text-gray-400 leading-relaxed font-light text-sm flex-grow">{desc}</p>

          <div className="mt-auto pt-6 flex items-center gap-3">
            <span className="text-[9px] font-black uppercase tracking-widest text-enga-gold">Discover More</span>
            <div className="h-px flex-grow bg-gradient-to-r from-enga-gold/30 to-transparent" />
            <span className="text-enga-gold/15 font-display text-3xl font-black italic select-none">0{index + 1}</span>
          </div>
        </div>

        {/* Bottom accent bar */}
        <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-enga-gold to-transparent group-hover:w-full transition-all duration-700" />
      </motion.div>
    </Link>
  );
};

const AboutSection = () => {
  const { hero, cards } = aboutData;
  return (
    <section id="about" className="py-28 md:py-36 relative overflow-hidden bg-section-alt">
      {/* Dots pattern */}
      <div className="absolute inset-0 bg-dots-subtle opacity-60 pointer-events-none" />
      
      {/* Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.025] dark:opacity-[0.05]">
        <h2 className="text-[22vw] font-display font-black leading-none">PRESTIGE</h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 md:mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="label-gold mb-6"
            >
              {hero.badge}
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-display font-bold leading-[0.88] text-enga-black dark:text-white"
            >
              Redefining <br />
              <span className="text-gradient-gold italic">Excellence.</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="md:max-w-xs border-l-2 border-enga-gold/30 pl-8"
          >
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-loose font-light">
              {hero.subtitle}
            </p>
          </motion.div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card, i) => (
            <AboutCard key={i} {...card} index={i} />
          ))}
        </div>

        {/* Bottom CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col md:flex-row items-center justify-between gap-8 pt-16 border-t border-enga-gold/10"
        >
          <p className="text-gray-500 dark:text-gray-400 text-sm font-light max-w-lg leading-relaxed">
            Founded in 2021, ENGA operates at the intersection of craft and technology — building digital experiences that move markets.
          </p>
          <Link to="/about" className="btn-outline rounded-sm whitespace-nowrap">
            Our Full Story
            <ArrowUpRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
