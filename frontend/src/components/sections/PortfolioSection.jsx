import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../../data/portfolio_data';

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.08 }}
    className={`group relative overflow-hidden rounded-xl bg-gray-100 dark:bg-enga-dark cursor-pointer ${project.size}`}
  >
    {/* Image */}
    <img
      src={project.image}
      alt={project.title}
      loading="lazy"
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
    />

    {/* Overlay */}
    <div className="overlay-dark" />

    {/* Tech tag top-left */}
    <div className="absolute top-5 left-5 z-10">
      <span className="px-3 py-1 text-[9px] uppercase tracking-[2px] font-black bg-black/40 backdrop-blur-md text-white border border-white/15 rounded-full">
        {project.category}
      </span>
    </div>

    {/* Arrow top-right */}
    <div className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-400">
      <ArrowUpRight size={16} />
    </div>

    {/* Bottom info */}
    <div className="absolute bottom-6 left-6 right-6 z-10">
      <p className="text-[9px] uppercase tracking-[3px] text-enga-gold font-black mb-1">{project.type}</p>
      <h3 className="text-xl md:text-2xl font-display font-bold text-white leading-tight">{project.title}</h3>
    </div>

    {/* Bottom hover bar */}
    <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-enga-gold group-hover:w-full transition-all duration-700" />
  </motion.div>
);

const PortfolioSection = () => {
  const { projects } = portfolioData;

  return (
    <section className="py-28 md:py-36 relative overflow-hidden bg-page">
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-14 gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="label-gold mb-6"
            >
              Selected Works
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-display font-bold text-enga-black dark:text-white leading-[0.88]">
              Latest <br />
              <span className="text-gradient-gold italic">Release.</span>
            </h2>
          </div>
          <Link
            to="/portfolio"
            className="btn-outline rounded-sm whitespace-nowrap self-start md:self-end"
          >
            View All Work
            <ArrowUpRight size={14} />
          </Link>
        </div>

        {/* Bento-style grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 auto-rows-[280px]">
          {projects.map((proj, i) => (
            <ProjectCard key={proj.id} project={proj} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
