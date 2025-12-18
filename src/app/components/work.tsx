import React from "react";
import {
  FileText,
  Brain,
  BookOpen,
  Shield,
  Edit3,
  CheckCircle,
  Users,
  Headphones,
  FileSearch,
} from "lucide-react";

export default function HowItWorks() {
  const features = [
    {
      icon: FileText,
      title: "Multi-File Writing Workspace",
      description:
        "Open .md, .txt, .docx, .pdf, and .bib files as tabs. Organize your entire project in one unified workspace.",
    },
    {
      icon: Edit3,
      title: "Inline AI Text Editor",
      description:
        "AI-powered writing assistance directly in your editor. Get suggestions, rewrites, and improvements as you type.",
    },
    {
      icon: Brain,
      title: "Whole-Project AI Context",
      description:
        "AI has full access to all your chapters, notes, and research papers. Maintain context across 100K+ word projects.",
    },
    {
      icon: Shield,
      title: "AI Writing with No Plagiarism",
      description:
        "Generate original, plagiarism-free content with built-in detection. Every section checked automatically for academic integrity.",
    },
    {
      icon: BookOpen,
      title: "Built-in Citation Engine",
      description:
        "Native APA/MLA/Chicago formatting, auto-bibliography generation, and Zotero integration.",
    },
    {
      icon: CheckCircle,
      title: "Papers Pass Turnitin",
      description:
        "Our AI-generated content is designed to pass Turnitin and other plagiarism detection systems with original, cited work.",
    },
    {
      icon: Users,
      title: "Real-Time Collaborative Workspace",
      description:
        "Work together seamlessly with real-time synchronization. Multiple team members can edit simultaneously with live updates.",
    },
    {
      icon: Headphones,
      title: "Convert Papers to Podcasts",
      description:
        "Transform your research papers into audio podcasts. Listen to your work on the go and share with others.",
    },
    {
      icon: FileSearch,
      title: "PDF Summarizing",
      description:
        "Upload PDFs and get instant AI-powered summaries. Extract key points, citations, and insights from research papers.",
    },
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
            How Pensyl Works
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A Writing IDE that merges Google Docs&apos; simplicity, Cursor&apos;s AI
            intelligence, Zotero&apos;s citation power, and Scrivener&apos;s multi-file
            writing into one unified environment.
          </p>
        </div>

        {/* Features List - No Card Style */}
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
