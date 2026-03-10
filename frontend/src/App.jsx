import React, { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/ui/Navbar';
import Footer from './components/ui/Footer';
import ScrollToTop from './components/ui/ScrollToTop';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const CategoryArchive = lazy(() => import('./pages/CategoryArchive'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const Contact = lazy(() => import('./pages/Contact'));

const pageVariants = {
  initial: { opacity: 0, y: 16 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -16 }
};
const pageTransition = { type: 'tween', ease: [0.16, 1, 0.3, 1], duration: 0.55 };

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-page">
    <div className="flex flex-col items-center gap-4">
      <div className="w-10 h-10 border-2 border-t-enga-gold border-r-enga-gold/40 border-b-transparent border-l-transparent rounded-full animate-spin" />
      <span className="text-enga-gold text-[10px] font-black uppercase tracking-[4px] animate-pulse">Loading</span>
    </div>
  </div>
);

const PageWrapper = ({ children }) => (
  <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
    {children}
  </motion.div>
);

function App() {
  const location = useLocation();
  return (
    <div className="min-h-screen flex flex-col bg-page text-enga-black dark:text-enga-white transition-colors duration-500">
      <Navbar />
      <main className="flex-grow relative">
        <Suspense fallback={<PageLoader />}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
              <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
              <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
              <Route path="/portfolio" element={<PageWrapper><Portfolio /></PageWrapper>} />
              <Route path="/portfolio/category/:category" element={<PageWrapper><CategoryArchive /></PageWrapper>} />
              <Route path="/portfolio/project/:slug" element={<PageWrapper><ProjectDetail /></PageWrapper>} />
              <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
