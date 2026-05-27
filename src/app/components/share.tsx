import React from 'react';
import { ArrowRight, Phone, Mail, Globe, Building } from 'lucide-react';

const HeroCard = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-8">
      <div className="relative w-full max-w-5xl mx-auto">
        {/* Main Hero Card */}
        <div className="relative bg-[#1d1d1d] rounded-[40px] px-12 py-20 overflow-hidden shadow-2xl">
          {/* Background glow elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div
              className="absolute"
              style={{
                bottom: '0%',
                right: '5%',
                width: '280px',
                height: '600px',
                transform: 'rotate(-30deg)',
                background: 'rgba(76, 175, 80, 0.15)',
                filter: 'blur(70px)',
              }}
            />
            <div
              className="absolute"
              style={{
                bottom: '5%',
                right: '18%',
                width: '200px',
                height: '550px',
                transform: 'rotate(-30deg)',
                background: 'rgba(199, 243, 106, 0.12)',
                filter: 'blur(60px)',
              }}
            />
            <div
              className="absolute"
              style={{
                bottom: '40%',
                right: '0%',
                width: '220px',
                height: '250px',
                transform: 'rotate(-30deg)',
                background: 'rgba(76, 175, 80, 0.1)',
                filter: 'blur(55px)',
              }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
            {/* Investment Badge */}
            <div className="inline-flex items-center gap-2 bg-[#C7F36A]/20 border border-[#C7F36A]/30 text-[#C7F36A] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-[#C7F36A] rounded-full animate-pulse" />
              Investment: not decided yet• 1-Month Build • 1 month bug fixes
            </div>
            
            {/* Main Heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              Let&apos;s Build the Dating App
              <br />
              India Deserves
            </h1>

            {/* Subtext */}
            <p className="text-gray-300 text-sm md:text-base max-w-xl mb-8 leading-relaxed">
              ₹1,400 crore market by 2030. 100M+ potential users. First-mover advantage for a trust-first platform.
              Built by elevenX: 100+ apps, 10+ years, proven execution.
            </p>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Mail className="w-4 h-4" />
                <span>srivastavaavi26@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Globe className="w-4 h-4" />
                <span>elevenx.in</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Building className="w-4 h-4" />
                <span>elevenX, Noida</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group relative inline-flex items-center gap-3 px-7 py-3.5 bg-gradient-to-r from-[#4CAF50] to-[#45a049] hover:from-[#45a049] hover:to-[#3d8b40] rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                <Phone className="w-4 h-4 text-white" />
                <span className="text-white text-base font-medium">Schedule Discovery Call</span>
              </button>
              
              <button className="group relative inline-flex items-center gap-3 px-7 py-3.5 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                <span className="text-white text-base font-medium">Download Pitch Deck</span>
                <div className="relative flex items-center justify-center w-9 h-9 bg-[#C7F36A] rounded-full overflow-hidden">
                  <ArrowRight className="w-4 h-4 text-gray-900 absolute transition-all duration-300 group-hover:translate-x-5 group-hover:opacity-0" strokeWidth={2.5} />
                  <ArrowRight className="w-4 h-4 text-gray-900 absolute opacity-0 -translate-x-1.5 transition-all duration-300 delay-200 group-hover:translate-x-0 group-hover:opacity-100" strokeWidth={2.5} />
                </div>
              </button>
            </div>
            
            {/* Limited Time Offer */}
            <div className="mt-8 bg-white/5 rounded-2xl p-5 border border-white/10 max-w-lg">
              <p className="text-[#C7F36A] text-sm font-semibold mb-2">⚡ Limited-Time Offer</p>
              <p className="text-gray-400 text-xs leading-relaxed">
                Commit in the next 2 weeks: 5% discount, 3 months support (vs 2), free premium customization, and quarterly strategy calls for Year 1. Total additional value: ₹5-10 lakhs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;