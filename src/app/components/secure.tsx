import React from 'react';

export default function SecurityFeatures() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-teal-600 text-sm font-medium mb-4">Key Features</p>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            In-Depth Explanation of Our<br />Web Security Features
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Your Trusted Partner in Data Protection with Cutting-Edge Solutions for
            Comprehensive Data Security.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Feature 1 - Risk Evaluation */}
          <div className="bg-gray-100 rounded-3xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Continuously evaluates potential<br />security threats and impact
            </h2>
            <p className="text-gray-600 mb-8">
              This includes suggesting security patches, policy updates, and other preventive
              measures to reduce the likelihood and impact of threats.
            </p>

            {/* Risk Chart */}
            <div className="bg-white rounded-2xl p-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Impact of Risk</h3>
                  <p className="text-sm text-gray-500">Viewing last 24 hours report</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="bg-gray-900 text-white text-xs px-3 py-1 rounded-full">4 New</span>
                  <select className="text-sm border border-gray-300 rounded-lg px-3 py-1">
                    <option>24 Hours</option>
                  </select>
                </div>
              </div>

              {/* Bubble Chart Simulation */}
              <div className="relative h-64">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 600 250" className="w-full h-full">
                    {/* Grid lines */}
                    <line x1="50" y1="200" x2="550" y2="200" stroke="#e5e7eb" strokeWidth="1" />
                    <line x1="50" y1="150" x2="550" y2="150" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                    <line x1="50" y1="100" x2="550" y2="100" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                    <line x1="50" y1="50" x2="550" y2="50" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                    
                    {/* Y-axis labels */}
                    <text x="30" y="205" className="text-xs fill-gray-400">Moderate</text>
                    <text x="30" y="155" className="text-xs fill-gray-400">High</text>
                    <text x="30" y="55" className="text-xs fill-gray-400">Very High</text>
                    
                    {/* X-axis label */}
                    <text x="300" y="230" className="text-xs fill-gray-400" textAnchor="middle">Likelihood</text>
                    
                    {/* Bubbles */}
                    <circle cx="150" cy="120" r="25" fill="#fca5a5" opacity="0.6" />
                    <text x="150" y="125" className="text-xs fill-gray-700" textAnchor="middle">Weak</text>
                    <text x="150" y="138" className="text-xs fill-gray-700" textAnchor="middle">Passwords</text>
                    
                    <circle cx="200" cy="80" r="20" fill="#fca5a5" opacity="0.6" />
                    <text x="200" y="85" className="text-xs fill-gray-700" textAnchor="middle">Data</text>
                    <text x="200" y="98" className="text-xs fill-gray-700" textAnchor="middle">Leakage</text>
                    
                    <circle cx="280" cy="90" r="22" fill="#fca5a5" opacity="0.6" />
                    <text x="280" y="95" className="text-xs fill-gray-700" textAnchor="middle">Phishing</text>
                    
                    <circle cx="350" cy="110" r="45" fill="#fca5a5" opacity="0.6" />
                    <circle cx="350" cy="110" r="30" fill="#fca5a5" opacity="0.4" />
                    <text x="350" y="115" className="text-xs fill-gray-700" textAnchor="middle">Malware</text>
                    
                    <circle cx="420" cy="100" r="22" fill="#fca5a5" opacity="0.6" />
                    <text x="420" y="105" className="text-xs fill-gray-700" textAnchor="middle">Insider</text>
                    <text x="420" y="118" className="text-xs fill-gray-700" textAnchor="middle">Threats</text>
                    
                    <circle cx="450" cy="140" r="25" fill="#fca5a5" opacity="0.6" />
                    <text x="450" y="145" className="text-xs fill-gray-700" textAnchor="middle">DDoS</text>
                    
                    <circle cx="300" cy="160" r="28" fill="#fca5a5" opacity="0.6" />
                    <text x="300" y="165" className="text-xs fill-gray-700" textAnchor="middle">Malware</text>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2 - Security Status */}
          <div className="bg-gray-100 rounded-3xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Presents a view of your organization<br />security posture
            </h2>
            <p className="text-gray-600 mb-8">
              Allows you to set thresholds for security parameters and receive real-time alerts
              when these thresholds are breached ensuring you stay informed f critical events.
            </p>

            {/* Security Status Chart */}
            <div className="bg-white rounded-2xl p-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Security Status</h3>
                  <p className="text-sm text-gray-500">Viewing last 24 hours report</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="bg-gray-900 text-white text-xs px-3 py-1 rounded-full">4 New</span>
                  <select className="text-sm border border-gray-300 rounded-lg px-3 py-1">
                    <option>24 Hours</option>
                  </select>
                </div>
              </div>

              {/* Horizontal Bar Chart */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-400 w-24">Operational</span>
                  <div className="flex-1 bg-gray-100 rounded-full h-8">
                    <div className="bg-lime-300 h-8 rounded-full" style={{width: '65%'}}></div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-400 w-24">Structural</span>
                  <div className="flex-1 bg-gray-100 rounded-full h-8">
                    <div className="bg-lime-300 h-8 rounded-full" style={{width: '80%'}}></div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-400 w-24">Reputational</span>
                  <div className="flex-1 bg-gray-100 rounded-full h-8">
                    <div className="bg-lime-300 h-8 rounded-full" style={{width: '60%'}}></div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-400 w-24">Accidental</span>
                  <div className="flex-1 bg-gray-100 rounded-full h-8">
                    <div className="bg-lime-300 h-8 rounded-full" style={{width: '70%'}}></div>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="flex justify-between mt-6 text-xs text-gray-400">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
              </div>

              {/* Legend */}
              <div className="flex gap-6 mt-4 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-lime-300 rounded-full"></div>
                  <span className="text-gray-600">Security Events</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                  <span className="text-gray-600">Login Attempts</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 3 - Data Activity */}
        <div className="bg-gray-100 rounded-3xl p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Monitors and logs all the<br />data access events
              </h2>
              <p className="text-gray-600 mb-8">
                Monitors and logs all data access events, including who accessed what data, when,
                and from where. This provides a clear audit trail for compliance and security
                investigations.
              </p>
              <button className="bg-gray-900 text-white px-8 py-4 rounded-full flex items-center gap-3 hover:bg-gray-800 transition-colors">
                Learn More
                <span className="bg-lime-300 text-gray-900 rounded-full w-8 h-8 flex items-center justify-center">
                  →
                </span>
              </button>
            </div>

            {/* Data Activity Chart */}
            <div className="bg-white rounded-2xl p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Data Activity</h3>
                  <p className="text-sm text-gray-500">Viewing last 24 hours report</p>
                </div>
                <span className="bg-gray-900 text-white text-xs px-3 py-1 rounded-full">4 New</span>
              </div>

              {/* Bar Chart */}
              <div className="mb-6">
                <div className="flex items-end justify-between h-48 gap-4">
                  <div className="flex-1 flex flex-col items-center justify-end">
                    <div className="bg-green-600 w-full rounded-t-lg" style={{height: '75%'}}></div>
                    <span className="text-xs text-gray-400 mt-2">Jan</span>
                  </div>
                  <div className="flex-1 flex flex-col items-center justify-end">
                    <div className="bg-green-600 w-full rounded-t-lg" style={{height: '68%'}}></div>
                    <span className="text-xs text-gray-400 mt-2">Feb</span>
                  </div>
                  <div className="flex-1 flex flex-col items-center justify-end">
                    <div className="bg-green-600 w-full rounded-t-lg" style={{height: '90%'}}></div>
                    <span className="text-xs text-gray-400 mt-2">Mar</span>
                  </div>
                  <div className="flex-1 flex flex-col items-center justify-end">
                    <div className="bg-green-600 w-full rounded-t-lg" style={{height: '78%'}}></div>
                    <span className="text-xs text-gray-400 mt-2">Apr</span>
                  </div>
                  <div className="flex-1 flex flex-col items-center justify-end">
                    <div className="bg-green-600 w-full rounded-t-lg" style={{height: '95%'}}></div>
                    <span className="text-xs text-gray-400 mt-2">May</span>
                  </div>
                  <div className="flex-1 flex flex-col items-center justify-end">
                    <div className="bg-green-600 w-full rounded-t-lg" style={{height: '82%'}}></div>
                    <span className="text-xs text-gray-400 mt-2">Jun</span>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="space-y-4">
                <div>
                  <div className="text-4xl font-bold text-gray-900 mb-1">2342</div>
                  <div className="text-sm text-gray-600">Number of threats Detected</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-gray-900 mb-1">7546</div>
                  <div className="text-sm text-gray-600">Number of threats Eliminated</div>
                </div>
              </div>

              {/* Legend */}
              <div className="flex gap-6 mt-6 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-600">Migrated Risk</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                  <span className="text-gray-600">Operational Risk</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}