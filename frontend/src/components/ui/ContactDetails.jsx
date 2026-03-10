import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { contactInfo } from '../../data/contact_data.js';

const ContactDetails = () => (
  <div className="space-y-10">
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
    >
      <span className="label-gold mb-6 block">{contactInfo.hero.badge}</span>
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[0.88] text-enga-black dark:text-white mb-8">
        {contactInfo.hero.titleTop} <br />
        <span className="text-gradient-gold italic">{contactInfo.hero.titleAccent}</span>
      </h1>
      <p className="text-gray-500 dark:text-gray-400 text-lg font-light max-w-md leading-relaxed">
        {contactInfo.hero.subtitle}
      </p>
    </motion.div>

    {/* Contact Info Grid */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="grid grid-cols-1 gap-5 pt-8 border-t border-enga-gold/12"
    >
      {[
        { icon: Mail, label: 'General Inquiries', value: contactInfo.details.generalInquiries },
        { icon: Clock, label: 'Time Zone', value: contactInfo.details.currentTime },
        { icon: MapPin, label: 'Location', value: 'Monrovia, Liberia · Global Reach' },
      ].map(({ icon: Icon, label, value }) => (
        <div key={label} className="card rounded-xl p-5 flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-enga-gold/8 border border-enga-gold/20 flex items-center justify-center flex-shrink-0">
            <Icon size={16} className="text-enga-gold" />
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">{label}</p>
            <p className="text-enga-black dark:text-white font-medium text-sm mt-0.5">{value}</p>
          </div>
        </div>
      ))}
    </motion.div>

    {/* Quote */}
    <motion.blockquote
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="border-l-4 border-enga-gold/40 pl-6 py-1"
    >
      <p className="text-enga-black dark:text-white/80 italic font-light text-base leading-relaxed">
        "{contactInfo.details.quote}"
      </p>
    </motion.blockquote>
  </div>
);

export default ContactDetails;
