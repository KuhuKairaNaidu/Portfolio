import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, BookOpen, Code, Coffee, Music, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Now = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="py-12 sm:py-16"
    >
      <div className="page-container">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-display font-bold mb-4">
            What I'm Doing Now
          </h1>
          <p className="text-gray-600 flex items-center justify-center gap-2">
            <Calendar size={18} />
            <span>Last updated: {currentDate}</span>
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div 
            className="bg-white rounded-lg shadow-md p-8 mb-8"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h2 className="text-2xl font-display font-semibold mb-6 text-gray-800">
              Professional Life
            </h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="mt-1 p-2 bg-pastel-mint/40 rounded-full h-fit">
                  <Code className="h-5 w-5 text-primary-700" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Current Project</h3>
                  <p className="text-gray-700">
                    Working on several international studies about menopause and autoimmune diseases. Looking at treatment, experiences, clinician training, and patient perspectives. Deputy lead for other projects on health inequities. Co-applicant for several grants, and designing newer studies! 
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="mt-1 p-2 bg-pastel-lavender/40 rounded-full h-fit">
                  <BookOpen className="h-5 w-5 text-accent-700" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Learning</h3>
                  <p className="text-gray-700">
                    Right now, I am learning how to diagnose policy bottlenecks in very challenging environments through a live project + learning new methodologies like propensity score matching. 
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-white rounded-lg shadow-md p-8 mb-8"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h2 className="text-2xl font-display font-semibold mb-6 text-gray-800">
              Personal Life
            </h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="mt-1 p-2 bg-pastel-yellow/40 rounded-full h-fit">
                  <Coffee className="h-5 w-5 text-primary-700" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Important Fact</h3>
                  <p className="text-gray-700">
                   I'm blessed with some of the best friends ever. They're extremely smart, kind, funny and humble.
                    They do influential work in energy, climate policy, theoretical physics, quant econ, CS and healthcare. If you'd like to get in touch with some exceptional minds in these fields, please let me know!
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="mt-1 p-2 bg-pastel-pink/40 rounded-full h-fit">
                  <Music className="h-5 w-5 text-accent-700" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Side Quests</h3>
                  <p className="text-gray-700">
                     I never understood why people enjoy running, so I am trying to get in their shoes and train for my first sub-30 5k to understand their perspective. Also: designing websites, experimenting with digital art, and reading books in the genre of 'magical realism'.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-center mt-12"
          >
            <Link to="/contact" className="inline-flex items-center gap-2 text-accent-700 hover:text-accent-800 font-medium">
              Want to chat about any of this?
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Now;