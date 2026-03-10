import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

const DarkModeToggle = React.memo(() => {
  const [isDark, setIsDark] = useState(() => {
    // Check system preference and localStorage
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('darkMode');
      if (saved !== null) return saved === 'true';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true;
  });

  useEffect(() => {
    // Update DOM and localStorage
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.style.setProperty('--gold-glow', 'rgba(244, 228, 193, 0.4)');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.setProperty('--gold-glow', 'rgba(212, 175, 55, 0.3)');
    }
    localStorage.setItem('darkMode', isDark.toString());
  }, [isDark]);

  return (
    <motion.button 
      onClick={() => setIsDark(!isDark)}
      className="group relative p-2 md:p-3 rounded-full border-2 border-enga-gold/30 dark:border-enga-gold-dark/30 bg-white/80 dark:bg-enga-black/80 backdrop-blur-md transition-all duration-300 hover:border-enga-gold dark:hover:border-enga-gold-dark hover:shadow-lg hover:shadow-enga-gold/20 dark:hover:shadow-enga-gold-dark/30 overflow-hidden"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Gold glow background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-gold opacity-0 dark:opacity-20 blur-md rounded-full"
        animate={{ 
          opacity: isDark ? [0.2, 0.4, 0.2] : [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      
      {/* Icon with enhanced styling */}
      <motion.div
        initial={false}
        animate={{ 
          rotate: isDark ? 180 : 0,
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          rotate: { duration: 0.6, ease: "easeInOut" },
          scale: { duration: 2, repeat: Infinity }
        }}
        className="relative z-10"
      >
        {isDark ? (
          <Sun 
            size={18} 
            className="text-enga-gold-dark drop-shadow-gold transition-colors duration-300" 
            strokeWidth={1.5}
          />
        ) : (
          <Moon 
            size={18} 
            className="text-enga-gold drop-shadow-gold transition-colors duration-300" 
            strokeWidth={1.5}
          />
        )}
      </motion.div>

      {/* Floating particles around the toggle */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-full">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-enga-gold dark:bg-enga-gold-dark rounded-full opacity-0"
            style={{
              left: `${25 + i * 20}%`,
              top: `${25 + i * 15}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.6, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 2 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Subtle pulse ring */}
      <motion.div 
        className="absolute inset-0 rounded-full border border-enga-gold/30 dark:border-enga-gold-dark/30"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.1, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.button>
  );
});

DarkModeToggle.displayName = 'DarkModeToggle';

export default DarkModeToggle;