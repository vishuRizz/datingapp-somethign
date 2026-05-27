import React from 'react';
import { Check, TrendingUp, Calendar, Rocket, ArrowRight } from 'lucide-react';

export default function FortifyFeaturesPage() {
  const milestones = [
    { phase: 'Stealth Beta', duration: 'Month 1', users: '10K', city: 'Bangalore', status: 'Draft', statusColor: 'bg-yellow-500' },
    { phase: 'City Expansion', duration: 'Months 2-3', users: '50K', city: '5 Metros', status: 'Planned', statusColor: 'bg-blue-500' },
    { phase: 'Scaling', duration: 'Months 4-8', users: '500K', city: '15 Cities', status: 'Growth', statusColor: 'bg-green-500' },
    { phase: 'National Dominance', duration: 'Year 2', users: '1.5M+', city: 'All India', status: 'Target', statusColor: 'bg-purple-500' },
    { phase: 'International', duration: 'Year 3+', users: '3M+', city: 'Southeast Asia', status: 'Vision', statusColor: 'bg-pink-500' },
  ];

  return (
    <div id="market" className="min-h-screen bg-white px-6 py-16">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-20">
        <p className="text-green-600 text-sm font-medium mb-4">Go-To-Market Strategy</p>
        <h1 className="text-6xl font-bold mb-6 text-black">
          From Launch to<br />National Dominance
        </h1>
        <p className="text-gray-600 text-lg">
          A phased approach: stealth beta → city expansion → national scaling → international growth.<br />
          Organic-first acquisition with community-driven viral loops.
        </p>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto space-y-8">
        {/* First Feature Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Timeline Table */}
          <div className="bg-gray-50 rounded-3xl p-8 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-2xl font-semibold text-black">Launch Roadmap</h2>
              <span className="bg-black text-white text-xs px-3 py-1 rounded-full">5 Phases</span>
            </div>
            <p className="text-gray-600 text-sm mb-6">Growth milestones from launch to Year 3</p>

            {/* Table */}
            <div className="space-y-3">
              {/* Table Header */}
              <div className="grid grid-cols-4 gap-4 text-sm font-medium text-gray-700 pb-2 border-b border-gray-200">
                <div>Phase</div>
                <div>Timeline</div>
                <div>Users</div>
                <div>Status</div>
              </div>

              {/* Table Rows */}
              {milestones.map((item, index) => (
                <div key={index} className="grid grid-cols-4 gap-4 items-center text-sm py-2">
                  <div className="text-gray-800 font-medium">{item.phase}</div>
                  <div className="text-gray-600">{item.duration}</div>
                  <div className="text-gray-800 font-semibold">{item.users}</div>
                  <div>
                    <span className={`${item.statusColor} text-white px-3 py-1 rounded-full text-xs`}>
                      {item.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Marketing Strategy */}
          <div>
            <h2 className="text-3xl font-semibold mb-6 text-black">Multi-channel growth engine.</h2>
            <p className="text-gray-600 mb-8">
              Organic-heavy acquisition with community-driven viral loops. Influencer partnerships with relationship coaches, Instagram/Reels campaigns, and a powerful referral program delivering 20:1 ROI.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {/* Channel 1 */}
              <div className="bg-gray-50 rounded-3xl p-6">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Influencer Marketing</h3>
                <p className="text-gray-600 text-sm">
                  Relationship coaches, dating experts, and lifestyle influencers. 20% budget, 12:1 expected ROI.
                </p>
              </div>

              {/* Channel 2 */}
              <div className="bg-gray-50 rounded-3xl p-6">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Community Events</h3>
                <p className="text-gray-600 text-sm">
                  Speed dating, social meetups, networking dinners. 50+ events/month across cities. Revenue + acquisition.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Second Feature Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Unit Economics */}
          <div>
            <h2 className="text-4xl font-semibold mb-8 text-black">
              Unit economics that<br />make VCs excited.
            </h2>

            <div className="space-y-4 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-black rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-700">
                  <strong>CAC: ₹100-150</strong> — Organic + referral heavy, minimal paid acquisition. Community-driven viral loops reduce cost per user.
                </p>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-black rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-700">
                  <strong>LTV: ₹8,000-12,000</strong> — 12-18 month retention with ₹400-600 avg/user/month across subscriptions, events, and à la carte features.
                </p>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-black rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-700">
                  <strong>LTV:CAC = 60:1</strong> — Industry best (healthy is 3:1+, we&apos;re 20x better). Payback period: 2-3 months.
                </p>
              </div>
            </div>

            <button className="group bg-black text-white px-8 py-4 rounded-full flex items-center gap-3 hover:bg-gray-800 transition-colors">
              View Full Financials
              <div className="relative w-10 h-10 bg-lime-300 rounded-full flex items-center justify-center overflow-hidden">
                <ArrowRight className="w-5 h-5 text-black absolute transition-all duration-300 group-hover:translate-x-6 group-hover:opacity-0" />
                <ArrowRight className="w-5 h-5 text-black absolute opacity-0 -translate-x-1.5 transition-all duration-300 delay-200 group-hover:translate-x-0 group-hover:opacity-100" />
              </div>
            </button>
          </div>

          {/* Financial Metrics */}
          <div className="bg-gray-50 rounded-3xl p-8">
            <div className="space-y-6">
              {/* Key Metrics */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-gray-700 font-medium">Key Metrics</span>
                  <div className="flex gap-2">
                    <span className="bg-blue-400 px-4 py-2 rounded-lg text-sm font-medium text-white">10 Mo. BE</span>
                    <span className="bg-purple-500 px-4 py-2 rounded-lg text-sm font-medium text-white">50% Margin</span>
                  </div>
                </div>
              </div>

              {/* Premium Conversion */}
              <div className="bg-white rounded-2xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-gray-600 text-sm mb-1">Premium Conversion Rate</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold">20%</span>
                      <span className="text-green-600 text-sm font-medium">Target by Year 3</span>
                    </div>
                  </div>
                  <div className="flex gap-4 items-center">
                    <div className="flex items-center gap-2">
                      <Rocket className="w-6 h-6 text-purple-500" />
                      <span className="text-xs text-gray-600">Growth</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Valuation */}
              <div className="bg-white rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-2">Valuation Trajectory</h3>
                <p className="text-gray-600 text-sm mb-4">Projected exit potential</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-500 w-16">Year 1</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-3">
                      <div className="bg-[#4CAF50] h-3 rounded-full" style={{ width: '5%' }}></div>
                    </div>
                    <span className="text-sm font-medium w-20 text-right">$1-2M</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-500 w-16">Year 2</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-3">
                      <div className="bg-[#4CAF50] h-3 rounded-full" style={{ width: '25%' }}></div>
                    </div>
                    <span className="text-sm font-medium w-20 text-right">$20-50M</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-500 w-16">Year 3</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-3">
                      <div className="bg-[#4CAF50] h-3 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                    <span className="text-sm font-medium w-20 text-right">$100-200M</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-500 w-16">Year 5</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-3">
                      <div className="bg-[#4CAF50] h-3 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                    <span className="text-sm font-medium w-20 text-right">$500M-1B</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}