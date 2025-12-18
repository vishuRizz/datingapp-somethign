"use client";

import { HeroNav } from "../components/HeroNav";
import { useState } from "react";
import { Send, Sparkles, Heart, TrendingUp, Lightbulb } from "lucide-react";

export default function FeedbackPage() {
  const [formData, setFormData] = useState({
    overallExperience: "",
    mostValuableFeature: "",
    timeSaved: "",
    wouldRecommend: "",
    biggestWin: "",
    missingFeature: "",
    citationExperience: "",
    aiWritingQuality: "",
    workspaceExperience: "",
    comparisonTools: "",
    testimonial: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your API
    console.log("Feedback submitted:", formData);
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
              <Heart className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Thank You! 🎉
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Your feedback helps us build better tools for writers like you.
            </p>
            <p className="text-gray-500">
              We'll review your input and continue improving Pensyl based on your experience.
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

        <div className="max-w-4xl mx-auto px-6 py-12 lg:py-20">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#4CAF50] rounded-2xl mb-6">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Share Your Pensyl Experience
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Your feedback shapes the future of AI-powered writing. Help us make Pensyl even better!
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Overall Experience */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  How was your overall experience?
                </h2>
              </div>
              <p className="text-gray-600 mb-6">
                On a scale of 1-10, how would you rate Pensyl?
              </p>
              <div className="flex gap-3 flex-wrap">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <label
                    key={num}
                    className={`flex-1 min-w-[60px] cursor-pointer transition-all ${
                      formData.overallExperience === num.toString()
                        ? "scale-110"
                        : "hover:scale-105"
                    }`}
                  >
                    <input
                      type="radio"
                      name="overallExperience"
                      value={num}
                      checked={formData.overallExperience === num.toString()}
                      onChange={handleChange}
                      className="hidden"
                    />
                    <div
                      className={`text-center py-3 px-4 rounded-xl font-semibold transition-all ${
                        formData.overallExperience === num.toString()
                          ? "bg-black text-white shadow-lg"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {num}
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Most Valuable Feature */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  What's been your favorite feature?
                </h2>
              </div>
              <p className="text-gray-600 mb-6">
                Which tool or feature made the biggest difference in your writing workflow?
              </p>
              <select
                name="mostValuableFeature"
                value={formData.mostValuableFeature}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent bg-white text-gray-900"
              >
                <option value="">Select a feature...</option>
                <option value="ai-writing-workspace">AI Writing Workspace (Multi-file editing + Collaboration)</option>
                <option value="ai-writing">No-Plagiarism AI Writing</option>
                <option value="citations">Built-in Citation Engine</option>
                <option value="turnitin-safe">Turnitin-Safe Papers</option>
                <option value="podcast">Convert Papers to Podcasts</option>
                <option value="pdf-summarizer">PDF Summarizer</option>
              </select>
            </div>

            {/* Time Saved */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  How much time did Pensyl save you?
                </h2>
              </div>
              <p className="text-gray-600 mb-6">
                Roughly how many hours per week do you save compared to your old workflow?
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  "Less than 2 hours",
                  "2-5 hours",
                  "5-10 hours",
                  "More than 10 hours",
                ].map((option) => (
                  <label
                    key={option}
                    className={`cursor-pointer transition-all ${
                      formData.timeSaved === option ? "scale-105" : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name="timeSaved"
                      value={option}
                      checked={formData.timeSaved === option}
                      onChange={handleChange}
                      className="hidden"
                    />
                    <div
                      className={`text-center py-3 px-4 rounded-xl font-medium transition-all border-2 ${
                        formData.timeSaved === option
                          ? "bg-black text-white border-black shadow-lg"
                          : "bg-white text-gray-700 border-gray-200 hover:border-gray-400"
                      }`}
                    >
                      {option}
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Would Recommend */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Would you recommend Pensyl to a friend or colleague?
              </h2>
              <p className="text-gray-600 mb-6">
                Honest feedback helps us improve! (We promise we can handle it 😊)
              </p>
              <div className="grid grid-cols-3 gap-4">
                {["Definitely!", "Probably", "Maybe"].map((option) => (
                  <label
                    key={option}
                    className={`cursor-pointer transition-all ${
                      formData.wouldRecommend === option ? "scale-105" : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name="wouldRecommend"
                      value={option}
                      checked={formData.wouldRecommend === option}
                      onChange={handleChange}
                      className="hidden"
                    />
                    <div
                      className={`text-center py-4 px-4 rounded-xl font-semibold transition-all border-2 ${
                        formData.wouldRecommend === option
                          ? "bg-black text-white border-black shadow-lg"
                          : "bg-white text-gray-700 border-gray-200 hover:border-gray-400"
                      }`}
                    >
                      {option}
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Biggest Win */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                What's been your biggest win?
              </h2>
              <p className="text-gray-600 mb-6">
                Tell us about a specific moment when Pensyl really helped you out.
              </p>
              <textarea
                name="biggestWin"
                value={formData.biggestWin}
                onChange={handleChange}
                rows={4}
                placeholder="E.g., 'I finished my literature review in half the time...' or 'The citation engine saved me from hours of formatting...'"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent resize-none bg-white text-gray-900 placeholder-gray-400"
              />
            </div>

            {/* Feature-specific questions */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Quick Feature Check-in
              </h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-3">
                    How smooth was the citation engine?
                  </label>
                  <div className="flex gap-3">
                    {["Needs work", "It's okay", "Pretty good", "Love it!"].map((option) => (
                      <label
                        key={option}
                        className="flex-1 cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="citationExperience"
                          value={option}
                          checked={formData.citationExperience === option}
                          onChange={handleChange}
                          className="hidden"
                        />
                        <div
                          className={`text-center py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                            formData.citationExperience === option
                              ? "bg-black text-white"
                              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                          }`}
                        >
                          {option}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-3">
                    How did the AI writing quality feel?
                  </label>
                  <div className="flex gap-3">
                    {["Not great", "Decent", "Good", "Excellent"].map((option) => (
                      <label
                        key={option}
                        className="flex-1 cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="aiWritingQuality"
                          value={option}
                          checked={formData.aiWritingQuality === option}
                          onChange={handleChange}
                          className="hidden"
                        />
                        <div
                          className={`text-center py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                            formData.aiWritingQuality === option
                              ? "bg-black text-white"
                              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                          }`}
                        >
                          {option}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-3">
                    How did you like the workspace experience?
                  </label>
                  <div className="flex gap-3">
                    {["Confusing", "Fine", "Good", "Perfect"].map((option) => (
                      <label
                        key={option}
                        className="flex-1 cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="workspaceExperience"
                          value={option}
                          checked={formData.workspaceExperience === option}
                          onChange={handleChange}
                          className="hidden"
                        />
                        <div
                          className={`text-center py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                            formData.workspaceExperience === option
                              ? "bg-black text-white"
                              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                          }`}
                        >
                          {option}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Missing Feature */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  What's missing?
                </h2>
              </div>
              <p className="text-gray-600 mb-6">
                What feature or improvement would make Pensyl even more valuable for you?
              </p>
              <textarea
                name="missingFeature"
                value={formData.missingFeature}
                onChange={handleChange}
                rows={4}
                placeholder="Share your ideas... (We actually read every single one!)"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent resize-none bg-white text-gray-900 placeholder-gray-400"
              />
            </div>

            {/* Comparison */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                What tools were you using before Pensyl?
              </h2>
              <p className="text-gray-600 mb-6">
                Help us understand your previous workflow
              </p>
              <textarea
                name="comparisonTools"
                value={formData.comparisonTools}
                onChange={handleChange}
                rows={3}
                placeholder="E.g., 'Google Docs + Zotero + ChatGPT + Grammarly'"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent resize-none bg-white text-gray-900 placeholder-gray-400"
              />
            </div>

            {/* Testimonial */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Want to share your story?
              </h2>
              <p className="text-gray-600 mb-6">
                If you'd be open to us featuring your feedback (anonymously or with credit), we'd love to hear your full story!
              </p>
              <textarea
                name="testimonial"
                value={formData.testimonial}
                onChange={handleChange}
                rows={5}
                placeholder="Tell us about your journey with Pensyl, what you're working on, and how it's helped..."
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent resize-none bg-white text-gray-900 placeholder-gray-400"
              />
            </div>

            {/* Email (optional) */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Email (Optional)
              </h2>
              <p className="text-gray-600 mb-4 text-sm">
                Only if you'd like us to follow up or share updates about features you requested.
              </p>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent bg-white text-gray-900 placeholder-gray-400"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="group inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#4CAF50] transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <span>Send Feedback</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

