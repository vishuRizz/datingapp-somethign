import React, { useState } from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const FortifyFooter = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    console.log('Subscribing email:', email);
    // Add your subscription logic here
  };

  return (
    <footer id="contact" className="bg-gray-50 py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-lime-300 rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-2xl font-bold text-gray-900">Pensyl</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-8">
              The AI-Powered Writing IDE for Students, Researchers, and Serious Writers. Write with Intelligence.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 flex items-center justify-center text-gray-700 hover:text-gray-900 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center text-gray-700 hover:text-gray-900 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center text-gray-700 hover:text-gray-900 transition-colors">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center text-gray-700 hover:text-gray-900 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Menu Section */}
          <div>
            <h3 className="text-gray-900 font-semibold text-lg mb-6">Menu</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Blogs</a></li>
            </ul>
          </div>

          {/* Info Section */}
          <div>
            <h3 className="text-gray-900 font-semibold text-lg mb-6">Info</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Privacy policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Support</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-200 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div>
              <h3 className="text-gray-900 font-semibold text-xl mb-2">Subscribe to Our Newsletter!</h3>
              <p className="text-gray-600 text-sm">
                Stay informed with our latest writing tips, AI features, and academic workflow insights.
              </p>
            </div>
            
            <div className="flex gap-2 min-w-[300px]">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-300 focus:border-transparent"
              />
              <button
                onClick={handleSubscribe}
                className="bg-lime-300 hover:bg-lime-400 text-gray-900 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                →
              </button>
            </div>
          </div>
          
          <div className="mt-8 text-center text-gray-600 text-sm">
            Copyright © 2025 Pensyl
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FortifyFooter;