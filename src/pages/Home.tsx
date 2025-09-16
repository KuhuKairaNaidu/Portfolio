import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="bg-gradient-to-b from-pastel-lavender/30 to-pastel-pink/20 py-20 sm:py-24">
        <div className="page-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl font-display font-bold text-gray-800 mb-4">
                Hello, I'm <span className="text-accent-700">Kaira</span>
              </h1>
              <h2 className="text-xl sm:text-2xl text-gray-600 mb-6">
                Researcher 
              </h2>
              <p className="text-gray-700 mb-8">
                I'm passionate about economics and health!

                
                Currently @ the University of Cambridge
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary">
                  Get in Touch
                </Link>
                <Link to="/work" className="btn group flex items-center gap-2 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50">
                  View My Work
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="aspect-square max-w-sm mx-auto relative">
                <img
                  src="https://media.licdn.com/dms/image/v2/D5603AQEZu5BfXjR9CA/profile-displayphoto-shrink_800_800/B56ZaV..ewG4Ac-/0/1746273037334?e=1758758400&v=beta&t=b33ZAKXLva7GUwKc7EIMtajFJtvGEVlYYdZlKP6xbWI"
                  alt="KN"
                  className="w-full h-full object-cover rounded-full shadow-xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;