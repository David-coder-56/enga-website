import React, { useState, useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import DarkModeToggle from './DarkModeToggle';

const Navbar = React.memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Close on route change
  useEffect(() => { setIsOpen(false); }, [location.pathname]);

  const navLinks = useMemo(() => [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ], []);

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
      scrolled
        ? 'py-3 card-glass border-b border-enga-gold/10'
        : 'py-6 bg-transparent'
    }`}>
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="relative z-[120]">
          <motion.div
            className="text-xl md:text-2xl font-display font-black tracking-tighter"
            whileHover={{ scale: 1.03 }}
          >
            <span className="text-enga-black dark:text-white">ENGA</span>
            <span className="text-enga-gold">.</span>
          </motion.div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link key={link.name} to={link.path} className="relative group py-1.5">
                  <span className={`text-[10px] uppercase tracking-[3px] font-bold transition-colors duration-300 ${
                    isActive ? 'text-enga-gold' : 'text-gray-500 dark:text-gray-400 group-hover:text-enga-black dark:group-hover:text-white'
                  }`}>
                    {link.name}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="navUnderline"
                      className="absolute -bottom-0.5 left-0 w-full h-[1.5px] bg-enga-gold"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-5 ml-2 border-l border-gray-200 dark:border-white/10 pl-8">
            <DarkModeToggle />
            <Link
              to="/contact"
              className="btn-primary text-[9px] rounded-sm"
            >
              Inquiry
            </Link>
          </div>
        </div>

        {/* Mobile actions */}
        <div className="lg:hidden flex items-center gap-4 relative z-[120]">
          <DarkModeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            className="text-enga-black dark:text-white p-1"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile fullscreen overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'circle(0% at 100% 0%)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at 100% 0%)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 100% 0%)' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 h-screen bg-white dark:bg-enga-black z-[110] flex flex-col px-8 pt-28 pb-10 overflow-y-auto"
          >
            {/* Watermark */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none overflow-hidden">
              <h2 className="text-[28vw] font-display font-black leading-none">MENU</h2>
            </div>

            <nav className="flex flex-col space-y-2 relative z-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    to={link.path}
                    className={`flex items-center justify-between py-3 border-b border-gray-100 dark:border-white/5 text-4xl font-display font-bold transition-colors duration-300 ${
                      location.pathname === link.path ? 'text-enga-gold' : 'text-enga-black dark:text-white'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="text-enga-gold opacity-30" size={24} />
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Bottom contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-auto pt-8 border-t border-gray-100 dark:border-white/10 flex-shrink-0"
            >
              <p className="text-enga-gold text-[10px] uppercase tracking-[4px] font-bold mb-3">Get in Touch</p>
              <a href="mailto:elitenextgentagency87@gmail.com" className="text-xl font-display font-bold text-enga-black dark:text-white">
                elitenextgentagency87@gmail.com
              </a>
              <div className="flex gap-6 mt-5 text-[10px] uppercase tracking-[2px] text-gray-600 dark:text-gray-400">
                <span>Instagram</span>
                <span>LinkedIn</span>
                <span>Twitter</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
});

Navbar.displayName = 'Navbar';
export default Navbar;
