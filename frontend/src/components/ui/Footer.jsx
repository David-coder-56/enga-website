import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Twitter, ArrowUpRight, Mail } from 'lucide-react';

const footerLinks = {
  Company: [
    { name: 'About Us', path: '/about' },
    { name: 'Our Team', path: '/about' },
    { name: 'Careers', path: '/contact' },
  ],
  Services: [
    { name: 'Web Development', path: '/services' },
    { name: 'Digital Marketing', path: '/services' },
    { name: 'Brand Identity', path: '/services' },
    { name: 'SEO & Growth', path: '/services' },
    { name: 'Mobile Apps', path: '/services' },
  ],
};

const socials = [
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-white dark:bg-enga-black border-t border-enga-gold/10 pt-20 pb-10 transition-colors duration-500">
      {/* Subtle dots bg */}
      <div className="absolute inset-0 bg-dots-subtle opacity-50 pointer-events-none" />

      {/* Watermark */}
      <div className="absolute -bottom-8 left-0 w-full pointer-events-none select-none overflow-hidden opacity-[0.03] dark:opacity-[0.025]">
        <h2 className="text-[18vw] font-display font-black leading-none whitespace-nowrap text-enga-black dark:text-white">
          ELITE NEXT GEN
        </h2>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-10 relative z-10">

        {/* Top: branding + links */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 mb-16">

          {/* Brand col */}
          <div className="lg:col-span-5">
            <Link to="/" className="text-3xl md:text-4xl font-display font-black tracking-tighter mb-5 block">
              ENGA<span className="text-enga-gold">.</span>
            </Link>
            <p className="text-gray-500 dark:text-gray-400 text-base max-w-sm leading-relaxed mb-8 font-light">
              We define the digital frontier. High-performance experiences for brands that refuse to be ordinary.
            </p>
            {/* Email link */}
            <motion.a
              whileHover={{ y: -3 }}
              href="mailto:elitenextgentagency87@gmail.com"
              className="inline-flex items-center gap-2 text-enga-maroon dark:text-enga-gold font-bold uppercase tracking-[2px] text-xs group hover:text-enga-gold transition-colors"
            >
              <Mail size={13} />
              elitenextgentagency87@gmail.com
              <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.a>

            {/* Social icons */}
            <div className="flex gap-3 mt-8">
              {socials.map(({ icon: Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ y: -3, scale: 1.1 }}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-enga-gold/20 flex items-center justify-center text-gray-400 hover:text-enga-gold hover:border-enga-gold transition-all duration-300"
                >
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links cols */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-10">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-enga-maroon dark:text-enga-gold text-[10px] uppercase tracking-[4px] font-black mb-7">
                  {title}
                </h4>
                <ul className="space-y-3.5">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.path}
                        className="text-gray-500 dark:text-gray-400 hover:text-enga-black dark:hover:text-white transition-colors duration-300 text-sm group inline-flex items-center gap-1.5"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact mini block */}
            <div>
              <h4 className="text-enga-maroon dark:text-enga-gold text-[10px] uppercase tracking-[4px] font-black mb-7">Contact</h4>
              <ul className="space-y-3.5 text-sm text-gray-500 dark:text-gray-400 font-light">
                <li>Monrovia, Liberia</li>
                <li>Global Remote</li>
                <li className="pt-2">
                  <Link to="/contact" className="text-enga-gold hover:text-enga-black dark:hover:text-white font-bold text-[10px] uppercase tracking-[2px] transition-colors">
                    Start a Project →
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Middle CTA */}
        <div className="border-y border-enga-gold/10 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <h3 className="text-xl md:text-2xl font-display font-medium italic text-enga-black dark:text-white">
            Ready to <span className="text-enga-maroon dark:text-enga-gold">elevate</span> your brand?
          </h3>
          <Link
            to="/contact"
            className="btn-primary rounded-sm whitespace-nowrap"
          >
            Start a Conversation
          </Link>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[2px] text-gray-400 dark:text-gray-500 gap-4">
          <div className="flex gap-6">
            <span className="hover:text-enga-black dark:hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-enga-black dark:hover:text-white cursor-pointer transition-colors">Terms of Service</span>
          </div>
          <p>© {year} Elite Next Gen Agency. All rights reserved.</p>
          <p className="flex items-center gap-1">Made with <span className="text-enga-maroon">♥</span> for the Future.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
