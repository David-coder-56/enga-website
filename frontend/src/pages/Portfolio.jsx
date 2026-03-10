import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { client, urlFor } from '../client';
import { portfolioData } from '../data/portfolio_data';
import PortfolioHero from '../components/heros/PortfolioHero';
import { ArrowUpRight, Plus } from 'lucide-react';

export default function Portfolio() {
  // start off with the static dataset so the page isn't empty on first render
  const [projects, setProjects] = useState(portfolioData.projects);
  const [activeCategory, setActiveCategory] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch all projects from Sanity and replace static list if available
    const query = `*[_type == "project"]{
      _id,
      title,
      category,
      type,
      client,
      year,
      description,
      technologies,
      metrics,
      url,
      silhouette,
      mainImage,
      "slug": slug.current
    }`;

    client
      .fetch(query)
      .then((data) => {
        if (Array.isArray(data) && data.length) {
          setProjects(data);
        }
      })
      .catch((err) => {
        // silent fallback, keep the local data
        console.warn('Sanity fetch failed, falling back to static portfolio', err);
      })
      .finally(() => setLoading(false));
  }, []);

  const categories = useMemo(() => {
    const cats = projects.map((p) => p.category).filter(Boolean);
    return ['all', ...new Set(cats)];
  }, [projects]);

  const filtered = useMemo(() => {
    if (activeCategory === 'all') return projects;
    return projects.filter(
      (p) => p.category?.toLowerCase() === activeCategory.toLowerCase()
    );
  }, [projects, activeCategory]);

  return (
    <div className="bg-page min-h-screen">
      {/* hero does not (yet) come from Sanity, still using static text */}
      <PortfolioHero />

      {/* Category Filters */}
      <section className="px-6 md:px-10 mb-16">
        <div className="max-w-[1600px] mx-auto flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 text-[9px] font-mono uppercase tracking-[3px] transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-enga-gold text-enga-black'
                  : 'border border-enga-gold/25 text-enga-gold hover:border-enga-gold'
              }`}
              style={{
                clipPath:
                  'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))',
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      {loading && (
        <div className="text-center text-enga-gold/40 font-mono text-xs tracking-[6px] animate-pulse">
          Loading projects...
        </div>
      )}
      <section className="px-6 md:px-10 pb-40">
        <div className="max-w-[1600px] mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {filtered.map((proj, i) => {
                // build slug, support old and new formats
                const slugPath =
                  (typeof proj.slug === 'string' && proj.slug) ||
                  proj.slug?.current ||
                  String(proj.id);

                // pick image from Sanity image (mainImage) first, then legacy field, then a static placeholder
                const placeholder =
                  'https://via.placeholder.com/1200x800.png?text=Website+Preview';

                const imageUrl = proj.mainImage
                  ? urlFor(proj.mainImage).width(1200).url()
                  : proj.image || placeholder;

                // if the editor flagged this project as containing people, render as silhouette
                const sil = proj.silhouette;

                return (
                  <motion.div
                    key={proj.id}
                    className="group"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <Link to={`/portfolio/project/${slugPath}`}>
                      {/* Image */}
                      <div
                        className="relative aspect-[4/3] overflow-hidden bg-enga-dark"
                        style={{
                          clipPath:
                            'polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 0 100%)',
                        }}
                      >
                        <img
                          src={imageUrl}
                          alt={proj.title}
                          className={`w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 ${sil ? 'people-silhouette' : ''}`}
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-enga-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

                        <div
                          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                          style={{
                            background: 'rgba(212,175,55,0.15)',
                            backdropFilter: 'blur(10px)',
                            clipPath:
                              'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))',
                          }}
                        >
                          <ArrowUpRight size={14} className="text-enga-gold" />
                        </div>
                      </div>

                      {/* Info */}
                      <div className="mt-5 flex justify-between items-start">
                        <div>
                          <span className="text-enga-gold text-[9px] font-mono uppercase tracking-[4px]">
                            {proj.category || proj.type}
                          </span>
                          <h3 className="font-display text-2xl font-bold text-enga-black dark:text-enga-white mt-1 group-hover:text-enga-gold transition-colors duration-300">
                            {proj.title}
                          </h3>
                        </div>
                        <span className="text-enga-white/15 font-mono text-sm">
                          0{i + 1}
                        </span>
                      </div>
                    </Link>

                    <div className="mt-4 h-px bg-enga-gold/0 group-hover:bg-enga-gold/20 transition-all duration-500" />
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-36 bg-enga-black relative overflow-hidden border-t border-enga-gold/10">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-[20vw] font-display font-bold text-enga-white/[0.02]">
            ENGA
          </span>
        </div>
        <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-10 text-white">
              Ready to Build the Future?
            </h2>
            <Link
              to="/contact"
              className="inline-flex items-center gap-4 px-14 py-5 bg-enga-gold text-enga-black font-mono font-bold tracking-[4px] text-[9px] uppercase hover:bg-enga-white transition-colors"
              style={{
                clipPath:
                  'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))',
              }}
            >
              Start Project
              <Plus size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
