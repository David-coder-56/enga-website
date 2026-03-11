import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { client, urlFor } from '../client';
import { portfolioData } from '../data/portfolio_data';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

export default function ProjectDetail() {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Instant fallback from local data
    const localProject = portfolioData.projects.find(
      (p) => p.slug?.current === slug
    );

    // Fetch from Sanity
    const query = `*[_type == "project" && slug.current == $slug][0]{
      title,
      category,
      description,
      technologies,
      mainImage,
      metrics,
      client,
      year,
      url,
      silhouette,
      featured,
      body,
      gallery
    }`;

    client
      .fetch(query, { slug })
      .then((data) => {
        if (data) {
          setProject(data);
        } else if (localProject) {
          setProject(localProject);
        }
        setLoading(false);
      })
      .catch(() => {
        setProject(localProject || null);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-page">
        <div className="text-enga-gold/40 font-mono text-xs tracking-[6px] animate-pulse">
          Loading Project...
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-page gap-6">
        <div className="text-enga-white/30 font-mono text-xs tracking-[4px]">
          Project not found
        </div>
        <Link to="/portfolio" className="btn-outline text-xs">
          ← Back to Portfolio
        </Link>
      </div>
    );
  }

  const heroUrl = project.mainImage ? urlFor(project.mainImage).width(1800).url() : null;
  const sil = project.silhouette;

  return (
    <div className="bg-page min-h-screen">
      {/* Hero Image */}
      <section className="relative h-[70vh] overflow-hidden">
        {heroUrl ? (
          <motion.img
            src={heroUrl}
            alt={project.title}
            className={`w-full h-full object-cover ${sil ? 'people-silhouette' : ''}`}
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          />
        ) : (
          <div className="w-full h-full bg-enga-dark bg-nano-grid" />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-enga-black via-enga-black/30 to-transparent" />

        {/* Back button */}
        <div className="absolute top-28 left-6 md:left-10 z-20">
          <Link
            to="/portfolio"
            className="flex items-center gap-2 text-enga-white/50 hover:text-enga-gold text-xs font-mono uppercase tracking-[3px] transition-colors"
          >
            <ArrowLeft size={14} /> Portfolio
          </Link>
        </div>

        {/* Project title overlay */}
        <div className="absolute bottom-10 left-6 md:left-10 right-6 md:right-10 z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="text-enga-gold text-[9px] font-mono uppercase tracking-[5px] mb-3 block">
              {project.category}
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-enga-white leading-[0.9]">
              {project.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Project Info */}
      <section className="py-20 relative">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Main description */}
            <div className="lg:col-span-2">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <span className="label-gold block mb-6">Overview</span>
                <p className="text-gray-400 text-lg font-light leading-relaxed mb-10">
                  {project.description || 'A premium digital project crafted by ENGA — Elite Next Gen Agency.'}
                </p>
              </motion.div>

              {/* Metrics */}
              {project.metrics?.length > 0 && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                  <span className="label-gold block mb-6">Results</span>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {project.metrics.map((m, i) => (
                      <div key={i} className="card rounded-xl p-5 text-center border border-enga-gold/10">
                        <div className="font-display text-3xl font-bold text-enga-gold mb-1">{m.value}</div>
                        <div className="text-enga-white/30 text-[9px] font-mono uppercase tracking-[2px]">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              {project.client && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.25 }} className="card rounded-xl p-6 border border-enga-gold/10">
                  <div className="text-enga-gold text-[9px] font-mono uppercase tracking-[3px] mb-2">Client</div>
                  <div className="text-white font-display text-xl">{project.client}</div>
                </motion.div>
              )}

              {project.year && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="card rounded-xl p-6 border border-enga-gold/10">
                  <div className="text-enga-gold text-[9px] font-mono uppercase tracking-[3px] mb-2">Year</div>
                  <div className="text-white font-mono">{project.year}</div>
                </motion.div>
              )}

              {project.technologies?.length > 0 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35 }} className="card rounded-xl p-6 border border-enga-gold/10">
                  <div className="text-enga-gold text-[9px] font-mono uppercase tracking-[3px] mb-4">Technologies</div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 glass-gold text-enga-gold text-[9px] font-mono uppercase tracking-[2px]"
                        style={{
                          clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))',
                          border: '1px solid rgba(212,175,55,0.2)'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}

              {project.url && (
                <motion.a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="btn-outline w-full justify-center text-xs flex"
                >
                  View Live
                  <ArrowUpRight size={12} />
                </motion.a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Body content from Sanity */}
      {project.body?.length > 0 && (
        <section className="pb-24 max-w-[1400px] mx-auto px-6 md:px-10">
          <span className="label-gold block mb-10">Case Study</span>
          {project.body.map((block, i) => (
            <div key={i} className="mb-6">
              {block._type === 'block' ? (
                <p className="text-gray-400 text-lg font-light leading-relaxed">{block.children.map(c => c.text).join('')}</p>
              ) : block._type === 'image' ? (
                <img src={urlFor(block).width(1000).url()} alt={block.alt || 'Project image'} className="w-full rounded-xl" />
              ) : null}
            </div>
          ))}
        </section>
      )}

      {/* Bottom navigation */}
      <section className="py-16 border-t border-enga-gold/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link to="/portfolio" className="btn-outline text-xs">
            <ArrowLeft size={12} /> Back to Portfolio
          </Link>
          <Link to="/contact" className="btn-primary text-xs">
            Start Your Project
            <ArrowUpRight size={12} />
          </Link>
        </div>
      </section>
    </div>
  );
}