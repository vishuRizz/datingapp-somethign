import React, { useState } from "react";

export default function FortifyFeaturePage() {
  const [imageUrl, setImageUrl] = useState("");

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="text-center pt-12 pb-8 px-4">
        <p className="text-green-600 text-sm font-medium mb-4">Key Features</p>
        <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
          Everything You Need for
          <br />
          Serious Writing Projects
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          The first real Writing IDE with whole-project AI context, built-in
          citations,
          <br />
          and multi-file workflows designed for academic and professional
          writing.
        </p>
        <div className="w-24 h-1 bg-gray-300 mx-auto mt-6"></div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center relative">
          {/* Left Column - Features */}
          <div className="space-y-8 relative">
            {/* Multi-File Workspace */}
            <div className="bg-gray-50 rounded-2xl p-6 relative">
              <h3 className="text-xl font-bold text-black mb-3">
                Multi-File Writing Workspace
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Open .md, .txt, .docx, .pdf, and .bib files as tabs. Organize
                your entire project with side-by-side editing and a project tree
                view.
              </p>
              {/* Dotted line pointing to phone */}
              <div className="hidden lg:block absolute top-1/2 -right-8 w-8 border-t-2 border-dashed border-gray-400"></div>
            </div>

            {/* Whole-Project AI Context */}
            <div className="bg-gray-50 rounded-2xl p-6 relative">
              <h3 className="text-xl font-bold text-black mb-3">
                Whole-Project AI Context
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                AI has full access to all your chapters, notes, research papers,
                and citations. Write new sections using all your research with
                semantic understanding across 100K+ word projects.
              </p>
              {/* Dotted line pointing to phone */}
              <div className="hidden lg:block absolute top-1/2 -right-8 w-8 border-t-2 border-dashed border-gray-400"></div>
            </div>

            {/* Smart File Referencing */}
            <div className="bg-gray-50 rounded-2xl p-6 relative">
              <h3 className="text-xl font-bold text-black mb-3">
                Smart File Referencing
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Use #chapter2.md, #interview-notes.txt, or #references.pdf in
                your AI chat. The AI understands instantly and references the
                right files.
              </p>
              {/* Dotted line pointing to phone */}
              <div className="hidden lg:block absolute top-1/2 -right-8 w-8 border-t-2 border-dashed border-gray-400"></div>
            </div>
          </div>

          {/* Center Column - Mobile Phone */}
          <div className="flex justify-center relative z-10">
            <div className="relative" style={{ perspective: "1000px" }}>
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
                  transform: "rotateY(-5deg) rotateX(2deg)",
                }}
              >
                {/* Phone Notch */}
                <div
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-8 bg-black rounded-b-3xl z-20"
                  style={{
                    boxShadow: "inset 0 -2px 4px rgba(0, 0, 0, 0.3)",
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
                    boxShadow: "inset 0 0 20px rgba(0, 0, 0, 0.1)",
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
                          <svg
                            className="w-12 h-12 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <p className="text-gray-400 text-sm font-medium mb-3">
                          Image Placeholder
                        </p>
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
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%)",
                  }}
                ></div>
              </div>
            </div>
          </div>

          {/* Right Column - Features */}
          <div className="space-y-8 relative">
            {/* Built-in Citation Engine */}
            <div className="bg-gray-50 rounded-2xl p-6 relative">
              {/* Dotted line pointing to phone */}
              <div className="hidden lg:block absolute top-1/2 -left-8 w-8 border-t-2 border-dashed border-gray-400"></div>
              <h3 className="text-xl font-bold text-black mb-3">
                Built-in Citation Engine
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Native APA/MLA/Chicago formatting, URL to citation conversion,
                PDF citation extraction, auto-bibliography generation, and
                Zotero integration.
              </p>
            </div>

            {/* AI Writing with No Plagiarism */}
            <div className="bg-gray-50 rounded-2xl p-6 relative border-2 border-[#4CAF50]">
              {/* Dotted line pointing to phone */}
              <div className="hidden lg:block absolute top-1/2 -left-8 w-8 border-t-2 border-dashed border-gray-400"></div>
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-xl font-bold text-black">
                  AI Writing with No Plagiarism
                </h3>
                <span className="bg-[#4CAF50] text-white text-xs px-2 py-1 rounded-full font-semibold">
                  NEW
                </span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Generate original, plagiarism-free content with built-in
                real-time plagiarism detection. Every AI-generated section is
                automatically checked to ensure academic integrity and 100%
                originality.
              </p>
            </div>

            {/* Research Tools */}
            <div className="bg-gray-50 rounded-2xl p-6 relative">
              {/* Dotted line pointing to phone */}
              <div className="hidden lg:block absolute top-1/2 -left-8 w-8 border-t-2 border-dashed border-gray-400"></div>
              <h3 className="text-xl font-bold text-black mb-3">
                Research Tools
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Argument mapping, structured outline generation, thesis builder,
                literature review builder, and PDF highlighter with note
                extraction.
              </p>
            </div>

            {/* Academic Templates */}
            <div className="bg-gray-50 rounded-2xl p-6 relative">
              {/* Dotted line pointing to phone */}
              <div className="hidden lg:block absolute top-1/2 -left-8 w-8 border-t-2 border-dashed border-gray-400"></div>
              <h3 className="text-xl font-bold text-black mb-3">
                Academic Templates
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Pre-built templates for research papers, essays, thesis
                chapters, journals, and lab reports with proper formatting and
                structure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
