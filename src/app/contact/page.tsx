'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FiSend, FiTwitter, FiLinkedin, FiGithub, FiMail, FiMapPin, FiPhone,FiGlobe } from 'react-icons/fi';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await controls.start({ 
        scale: [1, 1.1, 1],
        rotate: [0, 5, -5, 0],
        transition: { duration: 1.5, repeat: Infinity, repeatType: 'reverse' }
      });
    };
    sequence();
  }, [controls]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Here you would typically handle form submission
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-transparent text-gray-500 overflow-hidden relative">
      {/* Floating animated elements */}
     

      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 pt-6"
          >
            <span className="text-gray-500">Let's</span> <span className="text-primary">Connect</span>
          </motion.h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Your message is just a cosmic transmission away from reaching me!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Information */}
          <div className="space-y-8">
            <motion.div 
              className="p-6 bg-transparent border border-gray-600 shadow-lg rounded-xl"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                Contact Info
                <FiMail className="text-gray-500" />
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary rounded-full">
                    <FiMail className="text-white" />
                  </div>
                  <span className="text-gray-500">yash.r.tiwary@gmail.com</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary rounded-full">
                    <FiMapPin className="text-white" />
                  </div>
                  <span className="text-gray-500">Bangalore, IND</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary rounded-full">
                    <FiPhone className="text-white" />
                  </div>
                  <span className="text-gray-500"></span>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="p-6 bg-transparent border border-gray-600 shadow-lg rounded-xl"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                Digital Spaces
                <FiGlobe className="text-gray-500" />
              </h2>
              
              <div className="flex flex-wrap gap-4">
                <motion.a 
                  href="https://x.com/tyash26" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 px-4 py-2 text-white bg-primary hover:bg-secondary rounded-lg border border-gray-500 transition-all"
                >
                  <FiTwitter className="text-white" />
                  <span>Twitter</span>
                </motion.a>
                
                <motion.a 
                  href="https://www.linkedin.com/in/yash-tiwary" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 px-4 py-2 text-white bg-primary hover:bg-secondary rounded-lg border border-gray-500 transition-all"
                >
                  <FiLinkedin className="text-white" />
                  <span>LinkedIn</span>
                </motion.a>
                
                <motion.a 
                  href="https://github.com/tiwaryash" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 px-4 py-2 text-white bg-primary hover:bg-secondary rounded-lg border border-gray-500 transition-all"
                >
                  <FiGithub className="text-white" />
                  <span>GitHub</span>
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div 
            className="p-8 bg-transparent border border-gray-600 shadow-xl rounded-xl"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              Send a Message
              <FiSend className="text-gray-500" />
            </h2>
            
            {isSubmitted ? (
              <motion.div 
                className="text-center py-8"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
              >
                <div className="text-6xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold text-gray-300 mb-2">Message Sent!</h3>
                <p className="text-gray-300">Your cosmic transmission has been received. I'll get back to you soon!</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-1">
                  <label htmlFor="name" className="text-sm text-gray-500">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-3 rounded-lg bg-transparent border border-gray-600 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 outline-none transition-all"
                    required 
                  />
                </div>
                
                <div className="space-y-1">
                  <label htmlFor="email" className="text-sm text-gray-500">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 rounded-lg bg-transparent border border-gray-600 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 outline-none transition-all"
                    required 
                  />
                </div>
                
                <div className="space-y-1">
                  <label htmlFor="message" className="text-sm text-gray-500">Your Message</label>
                  <textarea 
                    id="message" 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={5} 
                    className="w-full p-3 rounded-lg bg-transparent border border-gray-600 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 outline-none transition-all"
                    required
                  ></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  className="w-full py-3 px-6 border border-gray-600 bg-primary text-white font-medium rounded-lg flex items-center justify-center gap-2 hover:bg-secondary transition-all"
                >
                  <FiSend />
                  <span>Launch Message</span>
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      {/* Animated background elements */}
     
    </div>
  );
}