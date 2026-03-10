import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '../components/ui/ContactForm';
import ContactDetails from '../components/ui/ContactDetails';
import StarBackground from '../components/ui/StarBackground';

const Contact = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen bg-page relative overflow-hidden">
    <StarBackground count={50} shootingCount={2} />

    {/* Decorative blobs */}
    <div className="absolute top-0 right-0 w-[40vw] h-[40vw] rounded-full pointer-events-none opacity-30"
      style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 70%)', transform: 'translate(20%, -30%)' }}
    />
    <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] rounded-full pointer-events-none opacity-20"
      style={{ background: 'radial-gradient(circle, rgba(128,0,0,0.08) 0%, transparent 70%)', transform: 'translate(-20%, 20%)' }}
    />

    <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 pt-36 pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
        <ContactDetails />
        <ContactForm />
      </div>
    </div>
  </motion.div>
);

export default Contact;
