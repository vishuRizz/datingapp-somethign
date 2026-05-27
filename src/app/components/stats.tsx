"use client";

import { AlertTriangle, Ghost, Shuffle, TrendingDown, UserX, Frown } from "lucide-react";

export default function DashboardLayout() {
  const problems = [
    {
      icon: AlertTriangle,
      stat: "90%+",
      title: "Fake Profiles & Scams",
      description: "of dating apps have fake profiles. Users spend weeks chatting with fakes. Romance scams cost victims ₹10+ lakhs/year.",
      color: "bg-red-500",
      quote: "\"I don't know who's real anymore. I've been catfished twice in 3 months.\"",
    },
    {
      icon: Ghost,
      stat: "68%",
      title: "Ghosting Epidemic",
      description: "of Indian users have been ghosted. Creates anxiety, rejection trauma, low confidence. No app incentivizes closure or respect.",
      color: "bg-orange-500",
      quote: "\"We texted for a week, had great chemistry, then they just vanished.\"",
    },
    {
      icon: Shuffle,
      stat: "42%",
      title: "Swipe Fatigue",
      description: "of users feel overwhelmed by choices. Paradox of choice leads to decision fatigue and poor quality matches.",
      color: "bg-yellow-500",
      quote: "\"I swipe through 1000 people and still can't find anyone I click with.\"",
    },
    {
      icon: UserX,
      stat: "80/20",
      title: "Gender Imbalance",
      description: "disparity in match rates. Men get almost no matches. Women get harassed constantly. Both genders frustrated.",
      color: "bg-purple-500",
      quote: "\"As a guy, I get maybe 3 matches a month. As a girl, I get 100 creepy messages.\"",
    },
    {
      icon: TrendingDown,
      stat: "60%",
      title: "Monthly Churn Rate",
      description: "of users quit after bad experiences. Apps optimized for engagement, not relationships. Retention is terrible.",
      color: "bg-blue-500",
      quote: "\"All my dates from apps were disappointing. No real connection happening.\"",
    },
    {
      icon: Frown,
      stat: "Low",
      title: "Superficial Culture",
      description: "Apps emphasize looks over personality. Promotes shallow interactions and disposable connections. Users feel dehumanized.",
      color: "bg-pink-500",
      quote: "\"Dating apps make me feel like a product on a shelf, not a person.\"",
    },
  ];

  return (
    <div id="problem" className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 p-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#4CAF50] text-sm font-medium mb-4 tracking-wide uppercase">
            The Problem
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Dating Apps Are Broken:<br />Here&apos;s the Proof
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Users are frustrated, churning fast, and losing trust. The ₹1,400 crore Indian dating market is ripe for disruption.
          </p>
        </div>

        <div className="max-w-6xl mx-auto bg-[#f7f7f7] rounded-[48px] p-8 md:p-12">
          {/* Top stats cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
              <div className="text-4xl font-bold text-gray-900 mb-2">₹800Cr</div>
              <div className="text-gray-600 text-sm">Current India dating app market (2024)</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
              <div className="text-4xl font-bold text-gray-900 mb-2">100M+</div>
              <div className="text-gray-600 text-sm">Active dating app users in India</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
              <div className="text-4xl font-bold text-[#4CAF50] mb-2">10.65%</div>
              <div className="text-gray-600 text-sm">CAGR: 5th fastest-growing globally</div>
            </div>
          </div>

          {/* Problem cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 ${problem.color} rounded-xl flex items-center justify-center`}>
                    <problem.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-2xl font-bold text-gray-900">{problem.stat}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{problem.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{problem.description}</p>
                <p className="text-xs text-gray-400 italic border-t border-gray-100 pt-3">{problem.quote}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <p className="text-gray-700 text-lg font-medium mb-2">The Solution: CONNECT</p>
            <p className="text-gray-600">The dating app built on trust, psychology, and community, solving every problem above.</p>
          </div>
        </div>
      </div>
    </div>
  );
}