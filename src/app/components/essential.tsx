import React from 'react';
import { Check, FileText, BookOpen, Brain, ArrowRight } from 'lucide-react';

export default function FortifyFeaturesPage() {
  const projectFiles = [
    { name: 'Chapter 1: Introduction', type: 'Markdown', status: 'Draft', words: '2,450', statusColor: 'bg-yellow-500' },
    { name: 'Literature Review', type: 'Markdown', status: 'Review', words: '5,230', statusColor: 'bg-blue-500' },
    { name: 'Research Notes', type: 'Text', status: 'Complete', words: '1,890', statusColor: 'bg-green-500' },
    { name: 'References.pdf', type: 'PDF', status: 'Annotated', words: 'N/A', statusColor: 'bg-purple-500' },
    { name: 'Bibliography', type: 'BibTeX', status: 'Complete', words: 'N/A', statusColor: 'bg-green-500' },
  ];

  return (
    <div className="min-h-screen bg-white px-6 py-16">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-20">
        <p className="text-green-600 text-sm font-medium mb-4">Essential Features</p>
        <h1 className="text-6xl font-bold mb-6 text-black">
          Discover the Features That<br />Make Intellirite Stand Out
        </h1>
        <p className="text-gray-600 text-lg">
          The first real Writing IDE with whole-project AI context, built-in citations,<br />
          and multi-file workflows designed for academic and professional writing.
        </p>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto space-y-8">
        {/* First Feature Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Project Files Feature */}
          <div className="bg-gray-50 rounded-3xl p-8 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-2xl font-semibold text-black">Project Files</h2>
              <span className="bg-black text-white text-xs px-3 py-1 rounded-full">5 Files</span>
            </div>
            <p className="text-gray-600 text-sm mb-6">All files in your writing project</p>

            {/* Table */}
            <div className="space-y-3">
              {/* Table Header */}
              <div className="grid grid-cols-4 gap-4 text-sm font-medium text-gray-700 pb-2 border-b border-gray-200">
                <div>File Name</div>
                <div>Type</div>
                <div>Status</div>
                <div>Words</div>
              </div>

              {/* Table Rows */}
              {projectFiles.map((item, index) => (
                <div key={index} className="grid grid-cols-4 gap-4 items-center text-sm py-2">
                  <div className="text-gray-800">{item.name}</div>
                  <div className="text-gray-600">{item.type}</div>
                  <div>
                    <span className={`${item.statusColor} text-white px-3 py-1 rounded-full text-xs`}>
                      {item.status}
                    </span>
                  </div>
                  <div className="text-gray-800">{item.words}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Organize Research Feature */}
          <div>
            <h2 className="text-3xl font-semibold mb-6 text-black">Organize and understand your research.</h2>
            <p className="text-gray-600 mb-8">
              AI has full access to all your chapters, notes, research papers, and citations. It can write new sections using all your research and maintain context across your entire project.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {/* PDF Extraction */}
              <div className="bg-gray-50 rounded-3xl p-6">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">PDF Extraction</h3>
                <p className="text-gray-600 text-sm">
                  Extract text, citations, and notes from research PDFs. AI can summarize and reference content automatically.
                </p>
              </div>

              {/* Citation Management */}
              <div className="bg-gray-50 rounded-3xl p-6">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Citation Management</h3>
                <p className="text-gray-600 text-sm">
                  Native APA/MLA/Chicago formatting, auto-bibliography generation, and Zotero integration.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Second Feature Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* AI-Powered Writing Feature */}
          <div>
            <h2 className="text-4xl font-semibold mb-8 text-black">
              Whole-project AI context<br />for intelligent writing.
            </h2>

            <div className="space-y-4 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-black rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-700">
                  AI understands your entire project context - all chapters, notes, research papers, and citations in one unified workspace
                </p>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-black rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-700">
                  Write new sections using all your research. AI can reference multiple files simultaneously with #filename syntax
                </p>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-black rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-700">
                  Maintain semantic understanding across 100K+ word projects. AI never loses sight of your research context
                </p>
              </div>
            </div>

            <button className="group bg-black text-white px-8 py-4 rounded-full flex items-center gap-3 hover:bg-gray-800 transition-colors">
              Learn More
              <div className="relative w-10 h-10 bg-lime-300 rounded-full flex items-center justify-center overflow-hidden">
                <ArrowRight className="w-5 h-5 text-black absolute transition-all duration-300 group-hover:translate-x-6 group-hover:opacity-0" />
                <ArrowRight className="w-5 h-5 text-black absolute opacity-0 -translate-x-1.5 transition-all duration-300 delay-200 group-hover:translate-x-0 group-hover:opacity-100" />
              </div>
            </button>
          </div>

          {/* Writing Metrics Feature */}
          <div className="bg-gray-50 rounded-3xl p-8">
            <div className="space-y-6">
              {/* Project Statistics */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-gray-700 font-medium">Project Statistics</span>
                  <div className="flex gap-2">
                    <span className="bg-lime-300 px-4 py-2 rounded-lg text-sm font-medium">5 files</span>
                    <span className="bg-blue-400 px-4 py-2 rounded-lg text-sm font-medium text-white">9,570 words</span>
                    <span className="bg-purple-500 px-4 py-2 rounded-lg text-sm font-medium text-white">12 citations</span>
                  </div>
                </div>
              </div>

              {/* Writing Progress */}
              <div className="bg-white rounded-2xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-gray-600 text-sm mb-1">Writing Progress</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold">68%</span>
                      <span className="text-green-600 text-sm font-medium">+12% this week</span>
                    </div>
                  </div>
                  <div className="flex gap-4 items-center">
                    <div className="flex items-center gap-2">
                      <Brain className="w-6 h-6 text-purple-500" />
                      <span className="text-xs text-gray-600">AI Assisted</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Citation Compliance */}
              <div className="bg-white rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-2">Citation Compliance</h3>
                <p className="text-gray-600 text-sm mb-4">APA Format Check</p>
                <div className="flex items-center gap-4">
                  <div className="flex-1 bg-gray-200 rounded-full h-3">
                    <div className="bg-green-500 h-3 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                  <span className="text-sm font-medium">92%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}