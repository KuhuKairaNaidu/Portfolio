import React from 'react';
import { Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 sm:px-6 bg-white border-t border-gray-200">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-600">
               {currentYear} 
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <a 
              href="https://www.linkedin.com/in/kaira-n/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-600 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-6 text-center text-xs text-gray-500 flex items-center justify-center">
          <span>Made with</span>
          <Heart size={14} className="mx-1 text-accent-500" />
          <span>in 2025</span>
          <span> - Art from Landiva Weber</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;