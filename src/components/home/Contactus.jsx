import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiMail, FiPhone, FiTwitter, FiLinkedin, FiArrowRight, FiSend } from 'react-icons/fi';

const ContactV2 = () => {
  const [formState, setFormState] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => {
      setFormState('success');
    }, 2000);
  };

  return (
    // Removed min-h-screen and flex items-center
    <section className="relative w-full overflow-hidden py-20 md:py-32">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>
      
      {/* Background Blobs for soft texture */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-300/30 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-300/20 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Top Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white border border-slate-100 shadow-sm text-blue-600 text-xs font-bold tracking-widest uppercase mb-4">
            Connect With Us
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-4">
            Ready to start <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              your next project?
            </span>
          </h2>
        </motion.div>

        {/* Grid Layout for Floating Cards */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          
          {/* Left Card: Contact Info (Dark Theme for Contrast) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-900 text-white rounded-[3rem] p-10 md:p-16 shadow-2xl shadow-slate-900/20 relative overflow-hidden group"
          >
            {/* Decorative Element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px] translate-x-1/2 -translate-y-1/2"></div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-8">Get in touch</h3>
              <p className="text-slate-400 mb-12 text-lg">
                Whether you have a question about our software, need help with trade logistics, or want to discuss future ventures, our team is ready to assist.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-4 group/item cursor-pointer">
                  <div className="w-14 h-14 rounded-2xl bg-slate-800 text-blue-400 flex items-center justify-center group-hover/item:bg-blue-500 group-hover/item:text-white transition-colors duration-300">
                    <FiMail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Email Us</p>
                    <p className="text-xl font-bold">hello@vvspl.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group/item cursor-pointer">
                  <div className="w-14 h-14 rounded-2xl bg-slate-800 text-purple-400 flex items-center justify-center group-hover/item:bg-purple-500 group-hover/item:text-white transition-colors duration-300">
                    <FiPhone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Call Us</p>
                    <p className="text-xl font-bold">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group/item cursor-pointer">
                  <div className="w-14 h-14 rounded-2xl bg-slate-800 text-orange-400 flex items-center justify-center group-hover/item:bg-orange-500 group-hover/item:text-white transition-colors duration-300">
                    <FiMapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Office</p>
                    <p className="text-xl font-bold">123 Tech Park, NY</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-12 pt-8 border-t border-slate-800 flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:bg-white hover:text-slate-900 transition-all">
                  <FiTwitter />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:bg-white hover:text-slate-900 transition-all">
                  <FiLinkedin />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Card: Form (Light Theme) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-[3rem] p-10 md:p-16 shadow-2xl shadow-slate-200/50 border border-white"
          >
            {formState === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center"
              >
                <div className="w-24 h-24 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-6">
                  <motion.div
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Check Icon SVG */}
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </motion.div>
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-3">We've got it!</h3>
                <p className="text-slate-500 text-lg">Thanks for reaching out. We will connect with you shortly.</p>
                <button 
                  onClick={() => setFormState('idle')}
                  className="mt-8 px-6 py-3 bg-slate-100 text-slate-900 rounded-full font-bold hover:bg-slate-200 transition-colors"
                >
                  Send another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-0 py-4 bg-transparent border-b-2 border-slate-100 focus:border-blue-600 focus:outline-none text-slate-900 text-lg placeholder:text-slate-300 transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    required
                    className="w-full px-0 py-4 bg-transparent border-b-2 border-slate-100 focus:border-blue-600 focus:outline-none text-slate-900 text-lg placeholder:text-slate-300 transition-colors"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Subject</label>
                  <select 
                    className="w-full px-0 py-4 bg-transparent border-b-2 border-slate-100 focus:border-blue-600 focus:outline-none text-slate-900 text-lg transition-colors appearance-none cursor-pointer"
                  >
                    <option>General Inquiry</option>
                    <option>Software Development</option>
                    <option>International Trade</option>
                    <option>Future Ventures</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                  <textarea 
                    rows="3"
                    required
                    className="w-full px-0 py-4 bg-transparent border-b-2 border-slate-100 focus:border-blue-600 focus:outline-none text-slate-900 text-lg placeholder:text-slate-300 resize-none transition-colors"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={formState === 'submitting'}
                  className="w-full py-5 bg-slate-900 text-white rounded-full font-bold text-lg hover:bg-blue-600 hover:shadow-xl hover:shadow-blue-500/30 transition-all flex items-center justify-center gap-2 mt-4 group disabled:opacity-70"
                >
                  {formState === 'submitting' ? 'Sending...' : (
                    <>Send Message <FiArrowRight className="group-hover:translate-x-1 transition-transform" /></>
                  )}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactV2;