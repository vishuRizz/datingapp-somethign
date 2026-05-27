"use client";

import React, { useState } from 'react';
import { Heart, Instagram, Linkedin, Mail, Globe } from 'lucide-react';

const FortifyFooter = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    console.log('Subscribing email:', email);
  };

  return (
    <footer id="contact" className="bg-gray-50 py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-[#4CAF50] to-[#C7F36A] rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" fill="white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">CONNECT</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              The Dating App Built for Real Connections. Stop Swiping. Start Connecting.
            </p>
            <p className="text-gray-500 text-xs leading-relaxed mb-6">
              Built by <strong>elevenX</strong>: 100+ apps, 50M+ users, 10+ years of proven execution. Noida, India.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 flex items-center justify-center text-gray-700 hover:text-[#4CAF50] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center text-gray-700 hover:text-[#4CAF50] transition-colors">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center text-gray-700 hover:text-[#4CAF50] transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:srivastavaavi26@gmail.com" className="w-8 h-8 flex items-center justify-center text-gray-700 hover:text-[#4CAF50] transition-colors">
                <Mail size={20} />
              </a>
              <a href="https://elevenx.in" className="w-8 h-8 flex items-center justify-center text-gray-700 hover:text-[#4CAF50] transition-colors">
                <Globe size={20} />
              </a>
            </div>
          </div>

          {/* Pitch Deck Navigation */}
          <div>
            <h3 className="text-gray-900 font-semibold text-lg mb-6">Pitch Deck</h3>
            <ul className="space-y-4">
              <li><a href="#problem" className="text-gray-600 hover:text-[#4CAF50] transition-colors">The Problem</a></li>
              <li><a href="#solution" className="text-gray-600 hover:text-[#4CAF50] transition-colors">Our Solution</a></li>
              <li><a href="#about" className="text-gray-600 hover:text-[#4CAF50] transition-colors">Competitive Advantage</a></li>
              <li><a href="#market" className="text-gray-600 hover:text-[#4CAF50] transition-colors">Go-To-Market</a></li>
              <li><a href="#pricing" className="text-gray-600 hover:text-[#4CAF50] transition-colors">Business Model</a></li>
              <li><a href="#features" className="text-gray-600 hover:text-[#4CAF50] transition-colors">All Features</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-gray-900 font-semibold text-lg mb-6">Get In Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gray-500" />
                <a href="mailto:srivastavaavi26@gmail.com" className="text-gray-600 hover:text-[#4CAF50] transition-colors">srivastavaavi26@gmail.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-gray-500" />
                <a href="https://elevenx.in" className="text-gray-600 hover:text-[#4CAF50] transition-colors">elevenx.in</a>
              </li>
            </ul>
            <div className="mt-6 bg-gray-100 rounded-2xl p-4">
              <p className="text-sm text-gray-700 font-medium mb-1">Ready to discuss?</p>
              <p className="text-xs text-gray-500 mb-3">Schedule a 1-hour discovery call with our team.</p>
              <button className="w-full bg-[#4CAF50] text-white py-2.5 px-4 rounded-full text-sm font-medium hover:bg-[#45a049] transition-colors">
                Schedule Call →
              </button>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-200 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div>
              <h3 className="text-gray-900 font-semibold text-xl mb-2">Stay Updated on CONNECT</h3>
              <p className="text-gray-600 text-sm">
                Get notified about launch dates, investor updates, and early access opportunities.
              </p>
            </div>
            
            <div className="flex gap-2 min-w-[300px]">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent"
              />
              <button
                onClick={handleSubscribe}
                className="bg-[#C7F36A] hover:bg-lime-400 text-gray-900 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                →
              </button>
            </div>
          </div>
          
          <div className="mt-8 text-center text-gray-600 text-sm">
            © 2026 CONNECT by elevenX • Pitch Deck • Confidential
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FortifyFooter;