import React from "react";
import { ShieldCheck, Brain, Heart, Users, MapPin, Video, Zap } from "lucide-react";

export default function FortifyFeaturePage() {
  return (
    <div id="solution" className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="text-center pt-12 pb-8 px-4">
        <p className="text-green-600 text-sm font-medium mb-4">Our Solution</p>
        <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
          CONNECT: The Dating App
          <br />
          That Actually Works
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          A dating platform that solves EVERY problem users have — built on bank-grade
          verification,
          <br />
          emotional AI matching, and community-driven engagement.
        </p>
        <div className="w-24 h-1 bg-gray-300 mx-auto mt-6"></div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center relative">
          {/* Left Column - Features */}
          <div className="space-y-8 relative">
            {/* Bank-Grade Verification */}
            <div className="bg-gray-50 rounded-2xl p-6 relative border-2 border-[#4CAF50]">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-xl font-bold text-black">
                  Bank-Grade Verification
                </h3>
                <span className="bg-[#4CAF50] text-white text-xs px-2 py-1 rounded-full font-semibold">
                  CORE
                </span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Aadhaar-based KYC, liveness detection via live selfie video,
                photo ID verification, and cross-social media verification.
                99.9% fake profiles eliminated.
              </p>
              {/* Dotted line pointing to phone */}
              <div className="hidden lg:block absolute top-1/2 -right-8 w-8 border-t-2 border-dashed border-gray-400"></div>
            </div>

            {/* Emotional Intelligence Matching */}
            <div className="bg-gray-50 rounded-2xl p-6 relative">
              <h3 className="text-xl font-bold text-black mb-3">
                Emotional AI Matching
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Matches on attachment styles, EQ scores, values, communication
                style, and humor compatibility. AI analyzes voice tone +
                communication patterns for 3x better quality matches.
              </p>
              {/* Dotted line pointing to phone */}
              <div className="hidden lg:block absolute top-1/2 -right-8 w-8 border-t-2 border-dashed border-gray-400"></div>
            </div>

            {/* Anti-Ghosting System */}
            <div className="bg-gray-50 rounded-2xl p-6 relative">
              <h3 className="text-xl font-bold text-black mb-3">
                Anti-Ghosting System
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Gentle nudges to send closure messages. Reputation score system
                with &quot;Respectful Partner&quot; badges. Ghosting reduced from 68% →
                15%. Users feel respected.
              </p>
              {/* Dotted line pointing to phone */}
              <div className="hidden lg:block absolute top-1/2 -right-8 w-8 border-t-2 border-dashed border-gray-400"></div>
            </div>
          </div>

          {/* Center Column - Mobile Phone */}
          <div className="flex justify-center relative z-10">
            <div className="relative" style={{ perspective: "1000px" }}>
              {/* Phone Frame with 3D effect */}
              <div
                className="w-[340px] h-[690px] bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-[55px] p-3 relative"
                style={{
                  boxShadow: `
                    0 25px 50px -12px rgba(0, 0, 0, 0.5),
                    0 0 0 1px rgba(255, 255, 255, 0.1),
                    inset 0 1px 2px rgba(255, 255, 255, 0.1),
                    inset 0 -2px 4px rgba(0, 0, 0, 0.5)
                  `,
                  transform: "rotateY(-5deg) rotateX(2deg)",
                }}
              >
                {/* Phone Notch */}
                <div
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-8 bg-black rounded-b-3xl z-20"
                  style={{
                    boxShadow: "inset 0 -2px 4px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  {/* Speaker grill */}
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-1.5 bg-gray-800 rounded-full"></div>
                  {/* Camera */}
                  <div className="absolute top-2 right-8 w-2.5 h-2.5 bg-gray-700 rounded-full ring-1 ring-gray-600"></div>
                </div>

                {/* Side button highlights */}
                <div className="absolute right-0 top-32 w-1 h-16 bg-gradient-to-b from-gray-700 to-transparent rounded-l"></div>
                <div className="absolute left-0 top-28 w-1 h-8 bg-gradient-to-b from-gray-700 to-transparent rounded-r"></div>
                <div className="absolute left-0 top-40 w-1 h-12 bg-gradient-to-b from-gray-700 to-transparent rounded-r"></div>

                {/* Phone Screen */}
                <div
                  className="w-full h-full bg-white rounded-[45px] overflow-hidden relative"
                  style={{
                    boxShadow: "inset 0 0 20px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  {/* App Mockup Screen */}
                  <div className="w-full h-full bg-gradient-to-br from-emerald-50 to-lime-50 flex flex-col">
                    {/* Status bar */}
                    <div className="pt-12 px-6 pb-4 flex items-center justify-between">
                      <span className="text-xs font-semibold text-gray-600">9:41</span>
                      <div className="flex items-center gap-1">
                        <div className="w-4 h-2 bg-gray-600 rounded-sm"></div>
                      </div>
                    </div>
                    
                    {/* App Header */}
                    <div className="px-6 pb-4 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Heart className="w-5 h-5 text-[#4CAF50]" fill="#4CAF50" />
                        <span className="text-lg font-bold text-gray-900">CONNECT</span>
                      </div>
                      <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                    </div>
                    
                    {/* Match Card */}
                    <div className="flex-1 px-4 pb-4">
                      <div className="w-full h-full bg-white rounded-3xl shadow-lg overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#4CAF50]/10 to-[#C7F36A]/10"></div>
                        <div className="relative p-6 flex flex-col items-center justify-center h-full">
                          {/* Profile avatar placeholder */}
                          <div className="w-24 h-24 bg-gradient-to-br from-[#4CAF50] to-[#C7F36A] rounded-full mb-4 flex items-center justify-center">
                            <Users className="w-12 h-12 text-white" />
                          </div>
                          <div className="flex items-center gap-1.5 mb-1">
                            <span className="text-lg font-bold text-gray-900">Sarah, 26</span>
                            <ShieldCheck className="w-4 h-4 text-[#4CAF50]" />
                          </div>
                          <span className="text-xs text-gray-500 mb-3">Verified • 2km away</span>
                          
                          {/* Match score */}
                          <div className="bg-[#C7F36A]/30 px-4 py-2 rounded-full mb-3">
                            <span className="text-sm font-semibold text-gray-800">94% Match</span>
                          </div>
                          
                          {/* Tags */}
                          <div className="flex flex-wrap gap-1.5 justify-center mb-4">
                            <span className="px-2.5 py-1 bg-gray-100 rounded-full text-xs text-gray-600">Hiking</span>
                            <span className="px-2.5 py-1 bg-gray-100 rounded-full text-xs text-gray-600">Books</span>
                            <span className="px-2.5 py-1 bg-gray-100 rounded-full text-xs text-gray-600">Travel</span>
                          </div>
                          
                          {/* Compatibility reason */}
                          <div className="w-full bg-gray-50 rounded-xl p-3 mb-4">
                            <p className="text-xs text-gray-500 text-center">
                              <Brain className="w-3 h-3 inline mr-1" />
                              &quot;You both value adventure and share direct communication styles&quot;
                            </p>
                          </div>
                          
                          {/* Action buttons */}
                          <div className="flex items-center gap-4">
                            <button className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-400">✕</button>
                            <button className="w-14 h-14 bg-[#4CAF50] rounded-full flex items-center justify-center shadow-lg">
                              <Heart className="w-7 h-7 text-white" fill="white" />
                            </button>
                            <button className="w-12 h-12 bg-[#C7F36A] rounded-full flex items-center justify-center">
                              <Zap className="w-5 h-5 text-gray-900" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Reflection effect */}
                <div
                  className="absolute inset-0 rounded-[55px] pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%)",
                  }}
                ></div>
              </div>
            </div>
          </div>

          {/* Right Column - Features */}
          <div className="space-y-8 relative">
            {/* Community-First */}
            <div className="bg-gray-50 rounded-2xl p-6 relative">
              {/* Dotted line pointing to phone */}
              <div className="hidden lg:block absolute top-1/2 -left-8 w-8 border-t-2 border-dashed border-gray-400"></div>
              <h3 className="text-xl font-bold text-black mb-3">
                Community-First Model
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Interest-based communities (Fitness, Books, Startups, Travel).
                Users join communities first, interact daily, then match within
                pre-vetted groups. 80% retention vs 30% industry avg.
              </p>
            </div>

            {/* Proximity Serendipity */}
            <div className="bg-gray-50 rounded-2xl p-6 relative">
              {/* Dotted line pointing to phone */}
              <div className="hidden lg:block absolute top-1/2 -left-8 w-8 border-t-2 border-dashed border-gray-400"></div>
              <h3 className="text-xl font-bold text-black mb-3">
                Proximity Serendipity
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Privacy-first location tracking shows matches who crossed your
                path. &quot;You were both at Bandra Starbucks!&quot; Creates serendipity
                narrative — feels like fate, not algorithm.
              </p>
            </div>

            {/* Video-First Design */}
            <div className="bg-gray-50 rounded-2xl p-6 relative">
              {/* Dotted line pointing to phone */}
              <div className="hidden lg:block absolute top-1/2 -left-8 w-8 border-t-2 border-dashed border-gray-400"></div>
              <h3 className="text-xl font-bold text-black mb-3">
                Video-First Design
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                30-60 sec video intro required. Voice message exchange before
                text. In-app video calling before meetup. Deepfake detection
                eliminates 80% of catfishing immediately.
              </p>
            </div>

            {/* Smart Curation */}
            <div className="bg-gray-50 rounded-2xl p-6 relative">
              {/* Dotted line pointing to phone */}
              <div className="hidden lg:block absolute top-1/2 -left-8 w-8 border-t-2 border-dashed border-gray-400"></div>
              <h3 className="text-xl font-bold text-black mb-3">
                Smart Curation (Not Swiping)
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                AI curates 5-7 best matches per day with explanations:
                &quot;You both love hiking + value adventure.&quot; Quality over
                quantity. Less fatigue, higher conversion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
