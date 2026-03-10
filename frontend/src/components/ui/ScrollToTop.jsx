import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 400px
      const scrolled = window.scrollY;
      setIsVisible(scrolled > 400);

      // Calculate scroll percentage for the progress ring
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPos = (scrolled / height) * 100;
      setScrollProgress(scrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          className="fixed bottom-10 right-10 z-[90]"
        >
          <button
            onClick={scrollToTop}
            className="relative flex items-center justify-center w-14 h-14 group focus:outline-none"
            aria-label="Scroll to top"
          >
            {/* SVG Progress Ring */}
            <svg className="absolute inset-0 w-full h-full -rotate-90">
              <circle
                cx="28"
                cy="28"
                r="24"
                stroke="currentColor"
                strokeWidth="2"
                fill="transparent"
                className="text-gray-200 dark:text-enga-white/10"
              />
              <motion.circle
                cx="28"
                cy="28"
                r="24"
                stroke="currentColor"
                strokeWidth="2"
                fill="transparent"
                strokeDasharray="150.8" // 2 * PI * r
                strokeDashoffset={150.8 - (150.8 * scrollProgress) / 100}
                className="text-enga-gold"
                transition={{ type: "spring", stiffness: 50, damping: 20 }}
              />
            </svg>

            {/* Inner Button Content */}
            <div className="relative w-10 h-10 bg-enga-black dark:bg-enga-white flex items-center justify-center rounded-full group-hover:bg-enga-gold transition-colors duration-300 shadow-xl shadow-black/20">
              <ArrowUp 
                size={20} 
                className="text-enga-white dark:text-enga-black group-hover:text-enga-white transition-transform group-hover:-translate-y-1" 
              />
            </div>

            {/* Hover Tooltip */}
            <span className="absolute right-full mr-4 px-3 py-1 bg-enga-black text-enga-white text-[10px] uppercase tracking-[2px] font-bold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border-r border-enga-gold">
              Top
            </span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;