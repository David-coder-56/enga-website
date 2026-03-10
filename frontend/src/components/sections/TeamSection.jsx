import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, ExternalLink } from 'lucide-react';
import { aboutData } from '../../data/about_data.js';

// Placeholder team data since aboutData.team is empty
const PLACEHOLDER_TEAM = [
  {
    name: "James Enga",
    role: "Founder & CEO",
    specialty: "Strategy & Vision",
    bio: "Serial entrepreneur with 10+ years building digital products at scale.",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
  },
  {
    name: "Amara Kofi",
    role: "Lead Designer",
    specialty: "Brand & UI/UX Design",
    bio: "Award-winning designer focused on premium digital experiences.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  },
  {
    name: "David Park",
    role: "Head of Engineering",
    specialty: "Full-Stack & Architecture",
    bio: "Former big-tech engineer building performant, scalable systems.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    name: "Sarah Mensah",
    role: "Growth Director",
    specialty: "SEO & Digital Marketing",
    bio: "Data-driven marketer who has scaled brands from 0 to 7 figures.",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
  },
];

const TeamMemberCard = ({ member, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="card rounded-2xl overflow-hidden group hover-lift"
  >
    {/* Image area */}
    <div className="relative h-64 overflow-hidden bg-gray-100 dark:bg-enga-dark">
      <img
        src={member.img}
        alt={member.name}
        loading="lazy"
        className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
      />
      <div className="overlay-dark opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
      
      {/* Social icons overlay */}
      <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
        <a href="#" className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-enga-gold hover:text-enga-black transition-all">
          <Linkedin size={13} />
        </a>
        <a href="#" className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-enga-gold hover:text-enga-black transition-all">
          <Twitter size={13} />
        </a>
      </div>
    </div>

    {/* Content */}
    <div className="p-6">
      <div className="flex items-start justify-between mb-2">
        <div>
          <h3 className="text-xl font-display font-bold text-enga-black dark:text-white">{member.name}</h3>
          <p className="text-enga-gold text-[10px] uppercase tracking-[3px] font-black mt-0.5">{member.role}</p>
        </div>
      </div>
      <p className="text-gray-500 dark:text-gray-400 text-sm font-light leading-relaxed mt-3">{member.bio}</p>
      <div className="mt-4 pt-4 border-t border-enga-gold/10 flex items-center gap-2">
        <span className="text-[9px] uppercase tracking-[2px] text-gray-400 font-bold">Specialty:</span>
        <span className="text-[10px] font-bold text-enga-black dark:text-white">{member.specialty}</span>
      </div>
    </div>
  </motion.div>
);

const TeamSection = () => {
  const { team, teamFooter } = aboutData;
  // Use real team data if available, else use placeholder
  const displayTeam = team && team.length > 0 ? team : PLACEHOLDER_TEAM;

  return (
    <section className="py-28 md:py-36 bg-section-alt overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="label-gold mb-6"
          >
            The Minds
          </motion.div>
          <div className="flex flex-col md:flex-row items-end justify-between gap-8">
            <h2 className="text-5xl md:text-7xl font-display font-bold text-enga-black dark:text-white leading-[0.88]">
              The <span className="text-gradient-gold italic">Architects.</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 font-light text-sm max-w-xs leading-relaxed md:text-right">
              A boutique team of specialists who combine creative vision with technical precision.
            </p>
          </div>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayTeam.map((member, i) => (
            <TeamMemberCard key={i} member={member} index={i} />
          ))}
        </div>

        {/* Footer info */}
        <div className="mt-12 pt-10 border-t border-enga-gold/10 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[3px] text-gray-400 gap-4">
          <p>{teamFooter.location}</p>
          <p>{teamFooter.size}</p>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
