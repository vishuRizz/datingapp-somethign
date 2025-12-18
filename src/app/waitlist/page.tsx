"use client";

import { HeroNav } from "../components/HeroNav";
import { useState } from "react";
import { CheckCircle, ArrowRight } from "lucide-react";

export default function WaitlistPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your API
    console.log("Waitlist signup:", email);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-white">
        <div className="absolute inset-0 z-[-10] bg-gradient-to-br from-gray-50 to-gray-100" />
        <div className="relative z-10">
          <HeroNav />
          <div className="max-w-3xl mx-auto px-6 py-20 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[#4CAF50] rounded-full mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              You're on the list! 🎉
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Thanks for joining the Pensyl waitlist. We'll notify you as soon
              as early access is available.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Background with grid pattern similar to hero */}
      <div className="absolute inset-0 z-[-10] bg-gradient-to-br from-gray-50 to-gray-100" />
      <div className="absolute top-0 inset-x-0 h-full z-0 pointer-events-none">
        <div className="absolute inset-0 [background-size:80px_80px] lg:[background-size:100px_100px] [background-position:center_top] [background-image:linear-gradient(to_right,rgba(0,0,0,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.08)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_80%_100%_at_50%_0%,black_0%,black_45%,transparent_75%)] [-webkit-mask-image:radial-gradient(ellipse_80%_100%_at_50%_0%,black_0%,black_45%,transparent_75%)]" />
      </div>

      <div className="relative z-10">
        <HeroNav />

        <div className="max-w-4xl mx-auto px-6 py-20 lg:py-32">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Join the Waitlist
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
              Be among the first to experience the future of AI-powered writing.
            </p>
          </div>

          {/* Form */}
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="relative">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full px-6 py-5 text-lg border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent bg-white text-gray-900 placeholder-gray-400 transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="group relative inline-flex items-center justify-center gap-3 bg-black text-white px-8 py-5 rounded-2xl font-semibold text-lg hover:bg-[#4CAF50] transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 whitespace-nowrap"
                >
                  <span>Join Waitlist</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
