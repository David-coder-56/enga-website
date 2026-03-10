import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { client, urlFor } from '../client';
import { ArrowLeft, ArrowUpRight, LayoutGrid } from 'lucide-react';
import { optimizedAnimationProps, useOptimizedMemo } from '../utils/performance';

const CategoryArchive = () => {
  const { category } = useParams();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const query = `*[_type == "project" && category == $category] | order(_createdAt desc)`;
    client.fetch(query, { category }).then((data) => {
      setProjects(data);
      setLoading(false);
    });
  }, [category]);

  // Performance optimized title formatter
  const displayTitle = useOptimizedMemo(() => 
    category.replace(/-/g, ' '), 
  [category]);

  if (loading) return (
    <div className="h-screen bg-enga-black flex items-center justify-center">
      <div className="w-20 h-[1px] bg-enga-gold animate-pulse" />
    </div>
  );

  return (
    <div className="bg-white dark:bg-enga-black min-h-screen selection:bg-enga-gold selection:text-white">
      {/* 1. FLOATING NAVIGATION */}
      <nav className="fixed top-10 left-10 z-50">
        <Link to="/portfolio" className="group flex items-center gap-4 bg-white/5 backdrop-blur-md border border-white/10 p-2 pr-6 rounded-full overflow-hidden transition-all hover:border-enga-gold">
          <div className="w-10 h-10 rounded-full bg-enga-gold flex items-center justify-center text-enga-black group-hover:rotate-[-45deg] transition-transform">
            <ArrowLeft size={20} />
          </div>
          <span className="text-[10px] uppercase tracking-[3px] font-bold text-white">Back to Archives</span>
        </Link>
      </nav>

      {/* 2. MASSIVE HERO HEADER */}
      <header className="pt-48 pb-20 px-10 relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="text-enga-gold text-xs font-black uppercase tracking-[10px] mb-4 block">Specialism // 01</span>
          <h1 className="text-[12vw] font-display font-bold leading-[0.8] dark:text-white uppercase tracking-tighter">
            {displayTitle} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-enga-gold via-white to-enga-gold/50 italic">Collection.</span>
          </h1>
        </motion.div>
        
        {/* Subtle decorative grid background */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_80%_20%,rgba(212,175,55,0.08),transparent)] pointer-events-none" />
      </header>

      {/* 3. THE EDITORIAL GRID */}
      <section className="px-10 pb-40">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-24 gap-x-12">
          <AnimatePresence>
            {projects.map((proj, index) => (
              <motion.div
                key={proj._id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className={`${index % 3 === 1 ? 'md:mt-32' : ''} group relative`} // Creates an asymmetric staggered look
              >
                <Link to={`/portfolio/project/${proj.slug.current}`}>
                  {/* Image Card */}
                  <div className="relative aspect-[3/4] overflow-hidden bg-enga-dark group-hover:shadow-[0_30px_60px_-15px_rgba(212,175,55,0.3)] transition-all duration-700">
                    <img 
                      src={urlFor(proj.mainImage).width(1000).url()} 
                      className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 opacity-80 group-hover:opacity-100" 
                      alt={proj.title}
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-enga-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                       <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <ArrowUpRight className="text-white" size={32} />
                       </div>
                    </div>
                  </div>

                  {/* Info Section */}
                  <div className="mt-8 flex justify-between items-start">
                    <div>
                      <h4 className="text-2xl font-display font-bold text-white tracking-wide uppercase">{proj.title}</h4>
                      <p className="text-enga-gold text-[10px] font-black tracking-[4px] mt-2 uppercase">Core System / {displayTitle}</p>
                    </div>
                    <span className="text-white/10 font-display text-4xl font-bold">0{index + 1}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* 4. EMPTY STATE */}
        {projects.length === 0 && (
          <div className="py-40 text-center border border-white/5 bg-white/2 backdrop-blur-sm">
            <h3 className="text-white/20 text-4xl uppercase font-display italic">Archives are currently classified</h3>
          </div>
        )}
      </section>
    </div>
  );
};

export default CategoryArchive;