import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-700 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold mb-3">Contact</h3>
            <p className="text-gray-200 hover:text-white transition-colors">
              <a href="mailto:dhimasnurhanindya@gmail.com">
                dhimasnurhanindya@gmail.com
              </a>
            </p>
          </div>
          
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold mb-3">Location</h3>
            <p className="text-gray-200">Yogyakarta, Indonesia</p>
          </div>
          
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold mb-3">Connect</h3>
            <div className="flex justify-center sm:justify-start space-x-5">
              <a 
                href="https://github.com/keepurspiritbruv" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-200 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.09.682-.217.682-.48 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.091-.647.349-1.086.635-1.337-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.933.359.309.678.919.678 1.852 0 1.337-.012 2.415-.012 2.743 0 .267.18.577.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"></path>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/dhimasnp/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-200 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t border-blue-600 pt-6 text-center">
          <p className="text-gray-200">&copy; {new Date().getFullYear()} MURGUY. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;