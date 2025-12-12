import React from 'react';
import { Shield, Network, Clock } from 'lucide-react';

export default function HowItWorks() {
  const features = [
    {
      icon: Shield,
      title: "Advanced Detection",
      description: "Our system continuously monitors your network and data environments for any suspicious activities."
    },
    {
      icon: Network,
      title: "Robust Data Encryption",
      description: "We ensure that all sensitive data is encrypted and at rest, using industry-standard encryption protocols."
    },
    {
      icon: Clock,
      title: "Automated Response",
      description: "In the event of a security incident, our automated response system takes immediate action."
    }
  ];

  return (
    <div className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className="text-[#4CAF50] font-medium mb-3 tracking-wide">
            How it Works
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How Fortify Security Solution Works
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your Trusted Partner in Data Protection with Cutting-Edge Solutions for
            Comprehensive Data Security.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex justify-center mb-4">
            <div className="w-14 h-14 bg-[#C7F36A] rounded-full flex items-center justify-center">
              <feature.icon className="w-7 h-7 text-white" />
            </div>
          </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-10 text-center">
          <button className="group inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-xl font-medium hover:bg-[#4CAF50] transition-colors duration-300 text-lg">
            <span className="transition-transform group-hover:translate-x-1">↗</span>
            Get This Template
          </button>
        </div>
      </div>
    </div>
  );
}