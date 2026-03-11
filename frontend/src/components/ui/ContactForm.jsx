import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { contactInfo } from '../../data/contact_data.js';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const ContactForm = React.memo(() => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const FORMSPREE_URL = "https://formspree.io/f/xreardkj";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');
    try {
      const formData = new FormData(e.target);
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        setSubmitStatus('success');
        e.target.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(''), 5000);
    }
  };

  const inputClass = "w-full bg-transparent border-b border-gray-200 dark:border-gray-800 py-3 px-1 focus:border-enga-gold dark:focus:border-enga-gold outline-none transition-colors duration-300 text-enga-black dark:text-white text-sm placeholder:text-gray-500 dark:placeholder:text-gray-600";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="card rounded-2xl p-8 md:p-12 relative overflow-hidden">
        {/* Accent glow */}
        <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-enga-gold/5 dark:bg-enga-gold/8 blur-3xl pointer-events-none" />

        <h3 className="text-2xl font-display font-bold text-enga-black dark:text-white mb-8">Send us a message</h3>

        <form action={FORMSPREE_URL} method="POST" onSubmit={handleSubmit} className="space-y-7">
          {/* Row 1: Name + Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            <div>
              <label className="text-[10px] uppercase tracking-widest text-gray-600 dark:text-gray-500 font-bold block mb-2">
                {contactInfo.form.fields.fullName.label}
              </label>
              <input
                name="name"
                type="text"
                required
                placeholder={contactInfo.form.fields.fullName.placeholder}
                className={inputClass}
              />
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-widest text-gray-600 dark:text-gray-500 font-bold block mb-2">
                {contactInfo.form.fields.email.label}
              </label>
              <input
                name="email"
                type="email"
                required
                placeholder={contactInfo.form.fields.email.placeholder}
                className={inputClass}
              />
            </div>
          </div>

          {/* Row 2: Service */}
          <div>
            <label className="text-[10px] uppercase tracking-widest text-gray-600 dark:text-gray-500 font-bold block mb-2">
              {contactInfo.form.fields.service.label}
            </label>
            <select name="service" className={`${inputClass} cursor-pointer`}>
              {contactInfo.form.fields.service.options.map((o, i) => (
                <option key={i} value={o} className="bg-white dark:bg-enga-black">{o}</option>
              ))}
            </select>
          </div>

          {/* Row 3: Message */}
          <div>
            <label className="text-[10px] uppercase tracking-widest text-gray-600 dark:text-gray-500 font-bold block mb-2">
              {contactInfo.form.fields.vision.label}
            </label>
            <textarea
              name="message"
              required
              rows="4"
              placeholder={contactInfo.form.fields.vision.placeholder}
              className={`${inputClass} resize-none`}
            />
          </div>

          {/* Status */}
          {submitStatus && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex items-center gap-3 p-4 rounded-xl text-sm font-medium ${
                submitStatus === 'success'
                  ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800'
                  : 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-800'
              }`}
            >
              {submitStatus === 'success' ? <CheckCircle size={16} /> : <AlertCircle size={16} />}
              {submitStatus === 'success' ? 'Message sent! We\'ll be in touch shortly.' : 'Something went wrong. Please try again.'}
            </motion.div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary w-full rounded-sm justify-center disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
                />
                Sending...
              </>
            ) : (
              <>
                {contactInfo.form.submitButton.text}
                <Send size={13} />
              </>
            )}
          </button>
        </form>
      </div>
    </motion.div>
  );
});

ContactForm.displayName = 'ContactForm';
export default ContactForm;
