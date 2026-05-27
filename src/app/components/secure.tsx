import React from 'react';

export default function SecurityFeatures() {
  return (
    <div id="about" className="min-h-screen bg-white secure-black">
      {/* Hero Section */}
      <div className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-teal-600 text-sm font-medium mb-4">Why CONNECT Wins</p>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            The Competitive<br />Advantage Matrix
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Unlike Tinder (superficial swiping), Bumble (still swiping), or TrulyMadly (limited reach), CONNECT solves every core problem at the product level.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Competitor Comparison Chart */}
          <div className="bg-gray-100 rounded-3xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How We Stack Up<br />Against Competitors
            </h2>
            <p className="text-gray-600 mb-8">
              CONNECT outperforms every major competitor across all key dimensions: verification quality, match accuracy, retention, and user satisfaction.
            </p>

            {/* Comparison Chart */}
            <div className="bg-white rounded-2xl p-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Feature Comparison</h3>
                  <p className="text-sm text-gray-500">CONNECT vs major competitors</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="bg-[#4CAF50] text-white text-xs px-3 py-1 rounded-full">CONNECT</span>
                </div>
              </div>

              {/* Bubble Chart - Competitor positioning */}
              <div className="relative h-64">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 600 250" className="w-full h-full">
                    {/* Grid lines */}
                    <line x1="50" y1="200" x2="550" y2="200" stroke="#e5e7eb" strokeWidth="1" />
                    <line x1="50" y1="150" x2="550" y2="150" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                    <line x1="50" y1="100" x2="550" y2="100" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                    <line x1="50" y1="50" x2="550" y2="50" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                    
                    {/* Y-axis labels */}
                    <text x="20" y="205" className="text-xs fill-gray-400">Low</text>
                    <text x="20" y="155" className="text-xs fill-gray-400">Med</text>
                    <text x="20" y="105" className="text-xs fill-gray-400">High</text>
                    <text x="20" y="55" className="text-xs fill-gray-400">Best</text>
                    
                    {/* X-axis labels */}
                    <text x="300" y="235" className="text-xs fill-gray-400" textAnchor="middle">Retention Rate →</text>
                    
                    {/* Competitor Bubbles */}
                    <circle cx="150" cy="160" r="30" fill="#fca5a5" opacity="0.5" />
                    <text x="150" y="157" className="text-xs fill-gray-700" textAnchor="middle">Tinder</text>
                    <text x="150" y="170" className="text-xs fill-gray-500" textAnchor="middle">30%</text>
                    
                    <circle cx="250" cy="135" r="25" fill="#fde68a" opacity="0.5" />
                    <text x="250" y="132" className="text-xs fill-gray-700" textAnchor="middle">Bumble</text>
                    <text x="250" y="145" className="text-xs fill-gray-500" textAnchor="middle">40%</text>
                    
                    <circle cx="200" cy="175" r="22" fill="#fca5a5" opacity="0.5" />
                    <text x="200" y="178" className="text-xs fill-gray-700" textAnchor="middle">QuackQuack</text>
                    
                    <circle cx="340" cy="120" r="25" fill="#bfdbfe" opacity="0.5" />
                    <text x="340" y="117" className="text-xs fill-gray-700" textAnchor="middle">TrulyMadly</text>
                    <text x="340" y="130" className="text-xs fill-gray-500" textAnchor="middle">50%</text>
                    
                    {/* CONNECT - highlighted */}
                    <circle cx="480" cy="60" r="40" fill="#4CAF50" opacity="0.2" />
                    <circle cx="480" cy="60" r="28" fill="#4CAF50" opacity="0.4" />
                    <text x="480" y="57" className="text-sm fill-gray-900 font-bold" textAnchor="middle">CONNECT</text>
                    <text x="480" y="72" className="text-xs fill-gray-700" textAnchor="middle">80%</text>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Match Quality Comparison */}
          <div className="bg-gray-100 rounded-3xl p-8 border-2 border-[#4CAF50]">
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-3xl font-bold text-gray-900">
                Match Quality<br />Score Analysis
              </h2>
              <span className="bg-[#4CAF50] text-white text-xs px-3 py-1 rounded-full font-semibold">KEY DATA</span>
            </div>
            <p className="text-gray-600 mb-8">
              Our emotional AI matching delivers 3x better quality matches compared to traditional swipe-based algorithms. Here&apos;s how each platform scores across key metrics.
            </p>

            {/* Horizontal Bar Chart */}
            <div className="bg-white rounded-2xl p-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Platform Scores</h3>
                  <p className="text-sm text-gray-500">Match quality index (out of 100)</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-400 w-24">CONNECT</span>
                  <div className="flex-1 bg-gray-100 rounded-full h-8">
                    <div className="bg-[#4CAF50] h-8 rounded-full flex items-center justify-end pr-3" style={{width: '92%'}}>
                      <span className="text-xs text-white font-semibold">92</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-400 w-24">TrulyMadly</span>
                  <div className="flex-1 bg-gray-100 rounded-full h-8">
                    <div className="bg-blue-300 h-8 rounded-full flex items-center justify-end pr-3" style={{width: '55%'}}>
                      <span className="text-xs text-gray-700 font-semibold">55</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-400 w-24">Bumble</span>
                  <div className="flex-1 bg-gray-100 rounded-full h-8">
                    <div className="bg-yellow-300 h-8 rounded-full flex items-center justify-end pr-3" style={{width: '45%'}}>
                      <span className="text-xs text-gray-700 font-semibold">45</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-400 w-24">Tinder</span>
                  <div className="flex-1 bg-gray-100 rounded-full h-8">
                    <div className="bg-red-300 h-8 rounded-full flex items-center justify-end pr-3" style={{width: '30%'}}>
                      <span className="text-xs text-gray-700 font-semibold">30</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Advantages */}
              <div className="flex justify-between mt-6 text-xs text-gray-400">
                <span>Verification</span>
                <span>Match Quality</span>
                <span>Retention</span>
                <span>Anti-Ghosting</span>
              </div>

              {/* Legend */}
              <div className="flex gap-6 mt-4 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#4CAF50] rounded-full"></div>
                  <span className="text-gray-600">CONNECT (Target)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                  <span className="text-gray-600">Competitors</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Market Opportunity */}
        <div className="bg-gray-100 rounded-3xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            ₹1,400 Crore Market<br />by 2030
          </h2>
          <p className="text-gray-600 mb-8">
            India is the 5th fastest-growing dating app market globally. With 75M+ millennial and Gen Z potential users, rising smartphone penetration at 95%, and a unique hybrid of traditional arranged marriage + modern dating culture, the timing is perfect for a trust-first platform.
          </p>
        </div>

        {/* Revenue Projections */}
        <div className="bg-gray-100 rounded-3xl p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Revenue Growth<br />Projections
              </h2>
              <p className="text-gray-600 mb-8">
                Multiple revenue streams: premium subscriptions (70%), à la carte features (10%), community events (10%), and sponsorships (10%). LTV:CAC ratio of 60:1 (industry best). Break-even by Month 10-12.
              </p>
              <button className="bg-gray-900 text-white px-8 py-4 rounded-full flex items-center gap-3 hover:bg-gray-800 transition-colors">
                View Financial Details
                <span className="bg-lime-300 text-gray-900 rounded-full w-8 h-8 flex items-center justify-center">
                  →
                </span>
              </button>
            </div>

            {/* Revenue Chart */}
            <div className="bg-white rounded-2xl p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Annual Revenue</h3>
                  <p className="text-sm text-gray-500">Projected growth (₹ Lakhs)</p>
                </div>
                <span className="bg-gray-900 text-white text-xs px-3 py-1 rounded-full">₹36Cr Y3</span>
              </div>

              {/* Bar Chart */}
              <div className="mb-6">
                <div className="flex items-end justify-between h-48 gap-4">
                  <div className="flex-1 flex flex-col items-center justify-end">
                    <div className="bg-[#4CAF50] w-full rounded-t-lg" style={{height: '8%'}}></div>
                    <span className="text-xs text-gray-400 mt-2">M3</span>
                  </div>
                  <div className="flex-1 flex flex-col items-center justify-end">
                    <div className="bg-[#4CAF50] w-full rounded-t-lg" style={{height: '18%'}}></div>
                    <span className="text-xs text-gray-400 mt-2">M6</span>
                  </div>
                  <div className="flex-1 flex flex-col items-center justify-end">
                    <div className="bg-[#4CAF50] w-full rounded-t-lg" style={{height: '35%'}}></div>
                    <span className="text-xs text-gray-400 mt-2">Y1</span>
                  </div>
                  <div className="flex-1 flex flex-col items-center justify-end">
                    <div className="bg-[#4CAF50] w-full rounded-t-lg" style={{height: '65%'}}></div>
                    <span className="text-xs text-gray-400 mt-2">Y2</span>
                  </div>
                  <div className="flex-1 flex flex-col items-center justify-end">
                    <div className="bg-[#4CAF50] w-full rounded-t-lg" style={{height: '95%'}}></div>
                    <span className="text-xs text-gray-400 mt-2">Y3</span>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="space-y-4">
                <div>
                  <div className="text-4xl font-bold text-gray-900 mb-1">₹36Cr</div>
                  <div className="text-sm text-gray-600">Year 3 Annual Revenue Target</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-gray-900 mb-1">50%</div>
                  <div className="text-sm text-gray-600">Net Margin by Year 3</div>
                </div>
              </div>

              {/* Legend */}
              <div className="flex gap-6 mt-6 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#4CAF50] rounded-full"></div>
                  <span className="text-gray-600">Revenue</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                  <span className="text-gray-600">Projected</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}