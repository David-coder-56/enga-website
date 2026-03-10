import React from "react";
import { motion } from "framer-motion";
import HeroSection from "../components/heros/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import ServicesSection from "../components/sections/ServicesSection";
import PortfolioSection from "../components/sections/PortfolioSection";
import TestimonialsComponent from "../components/sections/TestimonialsComponent";
import ClientWall from "../components/ui/ClientWall";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Philosophy from "../components/sections/Philosophy";
import CTASection from "../components/sections/CTASection";
const Home = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
    <HeroSection />

    <Philosophy />

    <ServicesSection />

    <PortfolioSection />

    <TestimonialsComponent showCTA={false} />


    {/* ── Final CTA ── */}
    <CTASection/>
  </motion.div>
);

export default Home;
