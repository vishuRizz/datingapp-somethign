import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroCard = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-8">
      <div className="relative w-full max-w-5xl mx-auto">
        {/* Main Hero Card */}
        <div className="relative bg-[#1d1d1d] rounded-[40px] px-12 py-20 overflow-hidden shadow-2xl">
          {/* Pen Shape Background - More visible diagonal stripes */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Main pen body - large diagonal stripe */}
            <div
              className="absolute"
              style={{
                bottom: '0%',
                right: '5%',
                width: '280px',
                height: '600px',
                transform: 'rotate(-30deg)',
                background: 'rgba(255, 255, 255, 0.15)',
                filter: 'blur(70px)',
              }}
            />
            {/* Secondary pen element - parallel stripe */}
            <div
              className="absolute"
              style={{
                bottom: '5%',
                right: '18%',
                width: '200px',
                height: '550px',
                transform: 'rotate(-30deg)',
                background: 'rgba(255, 255, 255, 0.12)',
                filter: 'blur(60px)',
              }}
            />
            {/* Pen tip area - smaller element */}
            <div
              className="absolute"
              style={{
                bottom: '40%',
                right: '0%',
                width: '220px',
                height: '250px',
                transform: 'rotate(-30deg)',
                background: 'rgba(255, 255, 255, 0.1)',
                filter: 'blur(55px)',
              }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
            {/* Main Heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              Secure Your Data with
              <br />
              Fortify Protection Solution
            </h1>

            {/* Subtext */}
            <p className="text-gray-300 text-sm md:text-base max-w-xl mb-6 leading-relaxed">
              Allows you to set thresholds for security parameters and receive real-time
              alerts when these thresholds are breached.
            </p>

            {/* CTA Button */}
            <button className="group relative inline-flex items-center gap-3 px-7 py-3.5 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              <span className="text-white text-base font-medium">Learn More</span>
              <div className="flex items-center justify-center w-9 h-9 bg-[#C7F36A] rounded-full transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight className="w-4 h-4 text-gray-900" strokeWidth={2.5} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;