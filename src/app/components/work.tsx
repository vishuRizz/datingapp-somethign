import React from "react";
import {
  ShieldCheck,
  Brain,
  Heart,
  Users,
  MapPin,
  Video,
  Zap,
  Shield,
  Star,
} from "lucide-react";

export default function HowItWorks() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Bank-Grade Verification",
      description:
        "Aadhaar-based KYC, liveness detection, photo ID verification, and cross-social media checks. 99.9% fake profiles eliminated.",
    },
    {
      icon: Brain,
      title: "Emotional AI Matching",
      description:
        "Matches on attachment styles, EQ scores, values, communication style, and humor compatibility. 3x better quality than competitors.",
    },
    {
      icon: Heart,
      title: "Anti-Ghosting System",
      description:
        "Gentle nudges for closure messages. Reputation scoring with 'Respectful Partner' badges. Ghosting reduced from 68% → 15%.",
    },
    {
      icon: Users,
      title: "Community-First Model",
      description:
        "Interest-based communities (Fitness, Books, Startups, Travel). Users interact daily before dating. 80% retention vs 30% industry avg.",
    },
    {
      icon: MapPin,
      title: "Proximity Serendipity",
      description:
        "Privacy-first location tracking reveals crossed paths. Feels like fate, not algorithm. Higher conversation quality and date conversion.",
    },
    {
      icon: Video,
      title: "Video-First Profiles",
      description:
        "30-60 sec video intro required. Voice messages before text. In-app video calling. Deepfake detection eliminates 80% of catfishing.",
    },
    {
      icon: Zap,
      title: "Smart Curation",
      description:
        "AI curates 5-7 best matches daily with explanations. Quality over quantity. Less decision fatigue, higher conversion rates.",
    },
    {
      icon: Shield,
      title: "Women's Safety First",
      description:
        "In-app video dating, location sharing with contacts, one-way video preview, strict harassment reporting, and community moderation.",
    },
    {
      icon: Star,
      title: "Ethical & Transparent",
      description:
        "No dark patterns. Clear data usage. No manipulative notifications. Users trust the platform because we respect them.",
    },
  ];

  return (
    <div id="features" className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className="text-[#4CAF50] font-medium mb-3 tracking-wide">
            All Features
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            9 Features That Solve<br />Every Dating Problem
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive platform that combines trust, psychology, community,
            and technology to deliver the dating experience users actually deserve.
          </p>
        </div>

        {/* Features List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-4 py-4">
              <div className="w-10 h-10 bg-[#C7F36A] rounded-lg flex items-center justify-center shrink-0">
                <feature.icon className="w-5 h-5 text-gray-900" />
              </div>
              <div className="flex-1">
                <h3 className="text-base font-bold text-gray-900 mb-1">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
