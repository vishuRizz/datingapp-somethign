import React, { useState } from 'react';

export default function FortifyFeaturePage() {
  const [imageUrl, setImageUrl] = useState('');

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="text-center pt-12 pb-8 px-4">
        <p className="text-green-600 text-sm font-medium mb-4">Features Explained</p>
        <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
          Interactive Chart Displays<br />Key Metrics and Trends.
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Your Trusted Partner in Data Protection with Cutting-Edge<br />
          Solutions for Comprehensive Data Security.
        </p>
        <div className="w-24 h-1 bg-gray-300 mx-auto mt-6"></div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center relative">
          {/* Left Column - Features */}
          <div className="space-y-8 relative">
            {/* Security Status Indicator */}
            <div className="bg-gray-50 rounded-2xl p-6 relative">
              <h3 className="text-xl font-bold text-black mb-3">Security Status Indicator</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Displays the current security status of your organization with a clear color-coded indicator.
              </p>
              {/* Dotted line pointing to phone */}
              <div className="hidden lg:block absolute top-1/2 -right-8 w-8 border-t-2 border-dashed border-gray-400"></div>
            </div>

            {/* Total Threats Detected */}
            <div className="bg-gray-50 rounded-2xl p-6 relative">
              <h3 className="text-xl font-bold text-black mb-3">Total Threats Detected</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Breaks down the threats by type (e.g., phishing, malware, ransomware) to give a detailed overview of the threat landscape.
              </p>
              {/* Dotted line pointing to phone */}
              <div className="hidden lg:block absolute top-1/2 -right-8 w-8 border-t-2 border-dashed border-gray-400"></div>
            </div>

            {/* Resolved Incidents */}
            <div className="bg-gray-50 rounded-2xl p-6 relative">
              <h3 className="text-xl font-bold text-black mb-3">Resolved Incidents</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Lists the number of active security incidents currently being addressed.
              </p>
              {/* Dotted line pointing to phone */}
              <div className="hidden lg:block absolute top-1/2 -right-8 w-8 border-t-2 border-dashed border-gray-400"></div>
            </div>
          </div>

          {/* Center Column - Mobile Phone */}
          <div className="flex justify-center relative z-10">
            <div className="relative" style={{ perspective: '1000px' }}>
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
                  transform: 'rotateY(-5deg) rotateX(2deg)'
                }}
              >
                {/* Phone Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-8 bg-black rounded-b-3xl z-20"
                  style={{
                    boxShadow: 'inset 0 -2px 4px rgba(0, 0, 0, 0.3)'
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
                
                {/* Phone Screen with inner shadow */}
                <div 
                  className="w-full h-full bg-white rounded-[45px] overflow-hidden relative"
                  style={{
                    boxShadow: 'inset 0 0 20px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  {/* Image Placeholder */}
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                    {imageUrl ? (
                      <img 
                        src={imageUrl} 
                        alt="Dashboard" 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="text-center p-8">
                        <div className="w-24 h-24 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
                          <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <p className="text-gray-400 text-sm font-medium mb-3">Image Placeholder</p>
                        <input
                          type="text"
                          placeholder="Enter image URL"
                          value={imageUrl}
                          onChange={(e) => setImageUrl(e.target.value)}
                          className="w-full px-3 py-2 text-xs border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Reflection effect */}
                <div 
                  className="absolute inset-0 rounded-[55px] pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%)'
                  }}
                ></div>
              </div>
            </div>
          </div>

          {/* Right Column - Features */}
          <div className="space-y-8 relative">
            {/* User Activity Monitoring */}
            <div className="bg-gray-50 rounded-2xl p-6 relative">
              {/* Dotted line pointing to phone */}
              <div className="hidden lg:block absolute top-1/2 -left-8 w-8 border-t-2 border-dashed border-gray-400"></div>
              <h3 className="text-xl font-bold text-black mb-3">User Activity Monitoring</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Highlights the most frequently accessed sensitive files or databases and the users involved, ensuring transparency and control over critical data.
              </p>
            </div>

            {/* Data Activity Trends */}
            <div className="bg-gray-50 rounded-2xl p-6 relative">
              {/* Dotted line pointing to phone */}
              <div className="hidden lg:block absolute top-1/2 -left-8 w-8 border-t-2 border-dashed border-gray-400"></div>
              <h3 className="text-xl font-bold text-black mb-3">Data Activity Trends</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Highlights the most frequently accessed sensitive files or databases and the users.
              </p>
            </div>

            {/* Compliance Status */}
            <div className="bg-gray-50 rounded-2xl p-6 relative">
              {/* Dotted line pointing to phone */}
              <div className="hidden lg:block absolute top-1/2 -left-8 w-8 border-t-2 border-dashed border-gray-400"></div>
              <h3 className="text-xl font-bold text-black mb-3">Compliance Status</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our system continuously monitors your network and data environment for suspicious activities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}