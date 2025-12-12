import React from 'react';
import { Check, Shield, Calendar, ArrowRight } from 'lucide-react';

export default function FortifyFeaturesPage() {
  const userActivityData = [
    { name: 'Acme Co.', type: 'Structural', risk: 'Moderate', score: '56.4', riskColor: 'bg-green-500' },
    { name: 'Abstergo Ltd.', type: 'Migrated', risk: 'High', score: '1254.23', riskColor: 'bg-red-500' },
    { name: 'Biffco Ltd.', type: 'Residual', risk: 'High', score: '565.23', riskColor: 'bg-red-500' },
    { name: 'Barone LLC.', type: 'Structural', risk: 'Moderate', score: '587.4', riskColor: 'bg-green-500' },
    { name: 'Abstergo Ltd.', type: 'Migrated', risk: 'High', score: '1254.23', riskColor: 'bg-red-500' },
  ];

  return (
    <div className="min-h-screen bg-white px-6 py-16">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-20">
        <p className="text-green-600 text-sm font-medium mb-4">Essential Feature</p>
        <h1 className="text-6xl font-bold mb-6 text-black">
          Discover the Features That<br />Makes Fortify Stand Out.
        </h1>
        <p className="text-gray-600 text-lg">
          Your Trusted Partner in Data Protection with Cutting-Edge Solutions for<br />
          Comprehensive Data Security.
        </p>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto space-y-8">
        {/* First Feature Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* User Activity Feature */}
          <div className="bg-gray-50 rounded-3xl p-8 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-2xl font-semibold text-black">User Activity in the System</h2>
              <span className="bg-black text-white text-xs px-3 py-1 rounded-full">4 New</span>
            </div>
            <p className="text-gray-600 text-sm mb-6">Viewing last 24 hours report</p>

            {/* Table */}
            <div className="space-y-3">
              {/* Table Header */}
              <div className="grid grid-cols-4 gap-4 text-sm font-medium text-gray-700 pb-2 border-b border-gray-200">
                <div>Name</div>
                <div>Type</div>
                <div>Risk Level</div>
                <div>Avg. Score</div>
              </div>

              {/* Table Rows */}
              {userActivityData.map((item, index) => (
                <div key={index} className="grid grid-cols-4 gap-4 items-center text-sm py-2">
                  <div className="text-gray-800">{item.name}</div>
                  <div className="text-gray-600">{item.type}</div>
                  <div>
                    <span className={`${item.riskColor} text-white px-3 py-1 rounded-full text-xs`}>
                      {item.risk}
                    </span>
                  </div>
                  <div className="text-gray-800">{item.score}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Organize Data Feature */}
          <div>
            <h2 className="text-3xl font-semibold mb-6 text-black">Organize and understand data.</h2>
            <p className="text-gray-600 mb-8">
              Allows you to set thresholds for security parameters and receive real-time alerts when these thresholds are breached ensuring you stay informed f critical events.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {/* Detailed User Logs */}
              <div className="bg-gray-50 rounded-3xl p-6">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Detailed User Logs</h3>
                <p className="text-gray-600 text-sm">
                  Our platform regularly logs all user activities including logins.
                </p>
              </div>

              {/* Anomal */}
              <div className="bg-gray-50 rounded-3xl p-6">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Anomal</h3>
                <p className="text-gray-600 text-sm">
                  This includ and acces
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Second Feature Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Security Summary Feature */}
          <div>
            <h2 className="text-4xl font-semibold mb-8 text-black">
              Delivers an all-encompassing<br />security summary.
            </h2>

            <div className="space-y-4 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-black rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-700">
                  Our platform ensures that all sensitive data is encrypted both during transmission and while stored
                </p>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-black rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-700">
                  Implement role-based access controls (RBAC) and multi-factor authentication (MFA).
                </p>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-black rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-700">
                  Regularly audit user access to sensitive information and systems to ensure compliance with security policies
                </p>
              </div>
            </div>

            <button className="bg-black text-white px-8 py-4 rounded-full flex items-center gap-3 hover:bg-gray-800 transition-colors">
              Get Started
              <div className="w-10 h-10 bg-lime-300 rounded-full flex items-center justify-center">
                <ArrowRight className="w-5 h-5 text-black" />
              </div>
            </button>
          </div>

          {/* Security Metrics Feature */}
          <div className="bg-gray-50 rounded-3xl p-8">
            <div className="space-y-6">
              {/* Detected Threats */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-gray-700 font-medium">2. Number of Detected Threats</span>
                  <div className="flex gap-2">
                    <span className="bg-lime-300 px-4 py-2 rounded-lg text-sm font-medium">34 risks</span>
                    <span className="bg-orange-400 px-4 py-2 rounded-lg text-sm font-medium">23 risks</span>
                    <span className="bg-orange-600 px-4 py-2 rounded-lg text-sm font-medium text-white">9 risks</span>
                  </div>
                </div>
              </div>

              {/* Incident Response Time */}
              <div className="bg-white rounded-2xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-gray-600 text-sm mb-1">Incident Response Time</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold">125.46</span>
                      <span className="text-green-600 text-sm font-medium">15.23%</span>
                    </div>
                  </div>
                  <div className="flex gap-4 items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-pink-300 rounded-full"></div>
                      <span className="text-xs text-gray-600">Malware</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-pink-300 rounded-full"></div>
                      <span className="text-xs text-gray-600">Malware</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Compliance Check */}
              <div className="bg-white rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-2">Compliance check in progress</h3>
                <p className="text-gray-600 text-sm mb-4">Viewing 24h report</p>
                <div className="flex items-center gap-4">
                  <div className="flex-1 bg-gray-200 rounded-full h-3">
                    <div className="bg-green-500 h-3 rounded-full" style={{ width: '54%' }}></div>
                  </div>
                  <span className="text-sm font-medium">54%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}