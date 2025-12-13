"use client";

import { useState, useRef } from "react";
import {
  Upload,
  FileText,
  Sparkles,
  Loader2,
  Download,
  Copy,
  Check,
} from "lucide-react";

export default function PDFSummarizePage() {
  const [file, setFile] = useState<File | null>(null);
  const [summary, setSummary] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");
  const [copied, setCopied] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.type !== "application/pdf") {
        setError("Please select a PDF file");
        return;
      }
      if (selectedFile.size > 10 * 1024 * 1024) {
        setError("File size must be less than 10MB");
        return;
      }
      setFile(selectedFile);
      setError("");
      setSummary("");
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.type === "application/pdf") {
      if (droppedFile.size > 10 * 1024 * 1024) {
        setError("File size must be less than 10MB");
        return;
      }
      setFile(droppedFile);
      setError("");
      setSummary("");
    } else {
      setError("Please drop a PDF file");
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      setError("Please select a PDF file");
      return;
    }

    setLoading(true);
    setError("");
    setSummary("");

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/pdf-summarize", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to summarize PDF");
      }

      setSummary(data.summary);
    } catch (err: any) {
      setError(err.message || "An error occurred while summarizing the PDF");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async () => {
    if (summary) {
      await navigator.clipboard.writeText(summary);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDownload = () => {
    if (summary) {
      const blob = new Blob([summary], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = file
        ? `${file.name.replace(".pdf", "")}_summary.txt`
        : "summary.txt";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  const formatSummary = (text: string) => {
    // Split by lines to process markdown
    const lines = text.split("\n");
    const elements: React.ReactElement[] = [];
    let currentList: string[] = [];
    let currentParagraph: string[] = [];
    let key = 0;

    const flushParagraph = () => {
      if (currentParagraph.length > 0) {
        const paraText = currentParagraph.join(" ").trim();
        if (paraText) {
          elements.push(
            <p key={key++} className="text-gray-700 leading-relaxed mb-4">
              {formatInlineMarkdown(paraText)}
            </p>
          );
        }
        currentParagraph = [];
      }
    };

    const flushList = () => {
      if (currentList.length > 0) {
        elements.push(
          <ul key={key++} className="list-disc list-inside space-y-2 mb-6 ml-6">
            {currentList.map((item, idx) => (
              <li key={idx} className="text-gray-700 leading-relaxed">
                {formatInlineMarkdown(item.trim())}
              </li>
            ))}
          </ul>
        );
        currentList = [];
      }
    };

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();

      // Skip empty lines
      if (!line) {
        flushParagraph();
        continue;
      }

      // Check for markdown heading (## Heading)
      if (line.startsWith("## ")) {
        flushParagraph();
        flushList();
        const headingText = line.replace(/^##+\s*/, "");
        elements.push(
          <h2
            key={key++}
            className="text-3xl font-bold text-black mt-8 mb-4 first:mt-0 border-b-2 border-gray-200 pb-2"
          >
            {headingText}
          </h2>
        );
        continue;
      }

      // Check for markdown heading (# Heading)
      if (line.startsWith("# ") && !line.startsWith("##")) {
        flushParagraph();
        flushList();
        const headingText = line.replace(/^#+\s*/, "");
        elements.push(
          <h1
            key={key++}
            className="text-4xl font-bold text-black mt-8 mb-4 first:mt-0 border-b-2 border-gray-300 pb-3"
          >
            {headingText}
          </h1>
        );
        continue;
      }

      // Check for bullet points
      if (line.match(/^[-*•]\s+/)) {
        flushParagraph();
        const item = line.replace(/^[-*•]\s+/, "").trim();
        if (item) {
          currentList.push(item);
        }
        continue;
      }

      // Check for numbered lists
      if (line.match(/^\d+\.\s+/)) {
        flushParagraph();
        flushList();
        const item = line.replace(/^\d+\.\s+/, "").trim();
        if (item) {
          elements.push(
            <ol
              key={key++}
              className="list-decimal list-inside space-y-2 mb-6 ml-6"
            >
              <li className="text-gray-700 leading-relaxed">
                {formatInlineMarkdown(item)}
              </li>
            </ol>
          );
        }
        continue;
      }

      // Regular text
      currentParagraph.push(line);
    }

    flushParagraph();
    flushList();

    return elements;
  };

  const formatInlineMarkdown = (text: string) => {
    // Handle bold **text**
    const parts: (string | React.ReactElement)[] = [];
    const boldRegex = /\*\*(.+?)\*\*/g;
    let lastIndex = 0;
    let match;
    let key = 0;

    while ((match = boldRegex.exec(text)) !== null) {
      // Add text before the match
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }
      // Add bold text
      parts.push(
        <strong key={key++} className="font-semibold text-black">
          {match[1]}
        </strong>
      );
      lastIndex = match.index + match[0].length;
    }

    // Add remaining text
    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return parts.length > 0 ? <>{parts}</> : text;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Background with grid pattern similar to hero */}
      <div className="absolute inset-0 z-[-10] bg-gradient-to-br from-gray-50 to-gray-100" />
      <div className="absolute top-0 inset-x-0 h-full z-0 pointer-events-none">
        <div className="absolute inset-0 [background-size:80px_80px] lg:[background-size:100px_100px] [background-position:center_top] [background-image:linear-gradient(to_right,rgba(0,0,0,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.08)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_80%_100%_at_50%_0%,black_0%,black_45%,transparent_75%)] [-webkit-mask-image:radial-gradient(ellipse_80%_100%_at_50%_0%,black_0%,black_45%,transparent_75%)]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-12 lg:py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#4CAF50] rounded-2xl mb-6">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-4">
            PDF Summarizer
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Upload your PDF document and get an AI-powered comprehensive summary
            in seconds
          </p>
          <div className="w-24 h-1 bg-gray-300 mx-auto mt-6"></div>
        </div>

        {/* Upload Form */}
        {!summary && (
          <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 mb-8 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* File Drop Zone */}
              <div
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                className="border-2 border-dashed border-gray-300 rounded-2xl p-12 text-center hover:border-[#4CAF50] transition-colors cursor-pointer"
                onClick={() => fileInputRef.current?.click()}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="application/pdf"
                  onChange={handleFileChange}
                  className="hidden"
                />
                {file ? (
                  <div className="space-y-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-[#4CAF50] rounded-full">
                      <FileText className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-black mb-1">
                        {file.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {(file.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setFile(null);
                        if (fileInputRef.current) {
                          fileInputRef.current.value = "";
                        }
                      }}
                      className="text-sm text-gray-500 hover:text-gray-700"
                    >
                      Remove file
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full">
                      <Upload className="w-8 h-8 text-gray-400" />
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-black mb-1">
                        Drop your PDF here or click to browse
                      </p>
                      <p className="text-sm text-gray-500">
                        PDF files up to 10MB
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Error Message */}
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <p className="text-red-600 text-sm">{error}</p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!file || loading}
                className="w-full flex items-center justify-center gap-3 bg-black text-white px-6 py-4 rounded-full transition-all font-medium text-base hover:bg-[#4CAF50] disabled:bg-gray-300 disabled:cursor-not-allowed disabled:hover:bg-gray-300"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Summarizing...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" />
                    Generate Summary
                  </>
                )}
              </button>
            </form>
          </div>
        )}

        {/* Summary Display */}
        {summary && (
          <div className="space-y-6">
            {/* Action Buttons */}
            <div className="flex items-center justify-between bg-gray-50 rounded-2xl p-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <FileText className="w-4 h-4" />
                <span>{file?.name}</span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-2 px-4 py-2 bg-white text-gray-700 rounded-full border border-gray-200 hover:bg-gray-100 transition-colors text-sm font-medium"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copy
                    </>
                  )}
                </button>
                <button
                  onClick={handleDownload}
                  className="flex items-center gap-2 px-4 py-2 bg-white text-gray-700 rounded-full border border-gray-200 hover:bg-gray-100 transition-colors text-sm font-medium"
                >
                  <Download className="w-4 h-4" />
                  Download
                </button>
                <button
                  onClick={() => {
                    setSummary("");
                    setFile(null);
                    if (fileInputRef.current) {
                      fileInputRef.current.value = "";
                    }
                  }}
                  className="px-4 py-2 bg-[#4CAF50] text-white rounded-full hover:bg-[#45a049] transition-colors text-sm font-medium"
                >
                  New Summary
                </button>
              </div>
            </div>

            {/* Summary Content */}
            <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 shadow-sm">
              <div className="max-w-none">
                <div className="text-gray-800 leading-relaxed space-y-4">
                  {formatSummary(summary)}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
