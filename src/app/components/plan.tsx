import { useState } from "react";

export default function PricingPage() {
  const [isMonthly, setIsMonthly] = useState(false);

  const plans = {
    basic: {
      name: "Free Plan",
      description:
        "Perfect for students and individual writers getting started with AI-powered writing.",
      monthly: 0,
      yearly: 0,
      features: [
        "Basic writing editor",
        "10 AI queries per day",
        "1 project workspace",
        "Basic citation support",
        "Community support",
      ],
    },
    premium: {
      name: "Research Paper Pricing",
      description:
        "Designed for researchers and students. Choose monthly access or pay per paper.",
      monthly: 12,
      perPaper: 4,
      recommended: true,
      features: [
        "Unlimited AI queries",
        "Unlimited projects",
        "Whole-project AI context",
        "Advanced citation engine (APA/MLA/Chicago)",
        "PDF extraction & summarization",
        "Plagiarism detection",
        "Real-time collaboration",
        "Priority support",
      ],
    },
  };

  return (
    <div id="pricing" className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#4CAF50] text-sm font-medium mb-4 tracking-wide uppercase">
            Pricing & Plan
          </p>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Choose a suitable plan
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Start free and upgrade when you need advanced AI features, unlimited
            projects, and institutional tools.
          </p>
        </div>

        {/* Toggle Switch */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <span
            className={`text-lg font-medium transition-colors ${
              !isMonthly ? "text-gray-900" : "text-gray-500"
            }`}
          >
            Per Paper
          </span>
          <button
            onClick={() => setIsMonthly(!isMonthly)}
            className="relative w-16 h-8 bg-gray-300 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#4CAF50] focus:ring-offset-2"
            aria-label="Toggle pricing plan"
          >
            <span
              className={`absolute top-1 left-1 w-6 h-6 bg-[#4CAF50] rounded-full transition-transform duration-300 ease-in-out ${
                isMonthly ? "translate-x-8" : "translate-x-0"
              }`}
            />
          </button>
          <span
            className={`text-lg font-medium transition-colors ${
              isMonthly ? "text-gray-900" : "text-gray-500"
            }`}
          >
            Monthly
          </span>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Basic Plan */}
          <div className="bg-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {plans.basic.name}
            </h2>
            <p className="text-gray-600 mb-8 min-h-[60px]">
              {plans.basic.description}
            </p>

            <div className="mb-8">
              <span className="text-6xl font-bold text-gray-900">
                ${plans.basic.monthly}
              </span>
            </div>

            <ul className="space-y-4 mb-8">
              {plans.basic.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-[#4CAF50] flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <button className="w-full bg-gray-900 text-white py-4 px-6 rounded-full font-medium hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center gap-2 group">
              Get Started Free
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>

          {/* Premium Plan */}
          <div className="bg-[#1d1d1d] text-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 relative">
            <span className="absolute top-6 right-6 bg-[#C7F36A] text-gray-900 px-4 py-1 rounded-full text-sm font-semibold">
              Recommended
            </span>

            <h2 className="text-3xl font-bold mb-4">{plans.premium.name}</h2>
            <p className="text-gray-300 mb-8 min-h-[60px]">
              {plans.premium.description}
            </p>

            <div className="mb-8">
              <span className="text-6xl font-bold">
                ${isMonthly ? plans.premium.monthly : plans.premium.perPaper}
              </span>
              <span className="text-gray-400 ml-2">
                {isMonthly ? "per month" : "per research paper"}
              </span>
            </div>

            <ul className="space-y-4 mb-8">
              {plans.premium.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-[#4CAF50] flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-200">{feature}</span>
                </li>
              ))}
            </ul>

            <button className="w-full bg-white text-gray-900 py-4 px-6 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2 group">
              Upgrade to Pro
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}