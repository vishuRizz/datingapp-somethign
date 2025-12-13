"use client";

import { useState, useRef } from "react";
import {
  Upload,
  FileText,
  Headphones,
  Loader2,
  Play,
  Pause,
  Download,
  Type,
  Music,
} from "lucide-react";

export default function PodcastPage() {
  const [file, setFile] = useState<File | null>(null);
  const [textInput, setTextInput] = useState<string>("");
  const [audioUrl, setAudioUrl] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      const validTypes = [
        "application/pdf",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "application/msword",
      ];
      if (!validTypes.includes(selectedFile.type)) {
        setError("Please select a PDF or DOCX file");
        return;
      }
      if (selectedFile.size > 10 * 1024 * 1024) {
        setError("File size must be less than 10MB");
        return;
      }
      setFile(selectedFile);
      setTextInput(""); // Clear text input when file is selected
      setError("");
      setAudioUrl("");
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      const validTypes = [
        "application/pdf",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "application/msword",
      ];
      if (validTypes.includes(droppedFile.type)) {
        if (droppedFile.size > 10 * 1024 * 1024) {
          setError("File size must be less than 10MB");
          return;
        }
        setFile(droppedFile);
        setTextInput("");
        setError("");
        setAudioUrl("");
      } else {
        setError("Please drop a PDF or DOCX file");
      }
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextInput(e.target.value);
    if (e.target.value) {
      setFile(null); // Clear file when text is entered
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!file && !textInput.trim()) {
      setError("Please either paste text or upload a file");
      return;
    }

    setLoading(true);
    setError("");
    setAudioUrl("");
    setIsPlaying(false);

    const formData = new FormData();
    if (file) {
      formData.append("file", file);
    }
    if (textInput.trim()) {
      formData.append("text", textInput.trim());
    }

    try {
      const response = await fetch("/api/podcast-generate", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to generate podcast");
      }

      // Create a blob URL from the base64 audio
      if (data.audioData) {
        const audioBlob = base64ToBlob(data.audioData, "audio/mpeg");
        const url = URL.createObjectURL(audioBlob);
        setAudioUrl(url);
      }
    } catch (err: any) {
      setError(err.message || "An error occurred while generating the podcast");
    } finally {
      setLoading(false);
    }
  };

  const base64ToBlob = (base64: string, mimeType: string): Blob => {
    const byteCharacters = atob(base64);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    return new Blob([byteArray], { type: mimeType });
  };

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleDownload = () => {
    if (audioUrl) {
      const a = document.createElement("a");
      a.href = audioUrl;
      a.download = file
        ? `${file.name.replace(/\.[^/.]+$/, "")}_podcast.mp3`
        : "podcast.mp3";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
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
            <Headphones className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-4">
            Convert to Podcast
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Transform your research papers, documents, or text into engaging
            podcast conversations
          </p>
          <div className="w-24 h-1 bg-gray-300 mx-auto mt-6"></div>
        </div>

        {/* Input Form */}
        {!audioUrl && (
          <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 mb-8 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Text Input Option */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  <Type className="inline w-4 h-4 mr-2" />
                  Or paste your text here
                </label>
                <textarea
                  value={textInput}
                  onChange={handleTextChange}
                  placeholder="Paste your text content here... (e.g., research paper, article, document content)"
                  className="w-full h-48 px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#4CAF50] resize-none text-gray-800 placeholder-gray-400"
                  disabled={loading || !!file}
                />
                {file && (
                  <p className="text-xs text-gray-500 mt-2">
                    Clear the file to use text input
                  </p>
                )}
              </div>

              {/* Divider */}
              <div className="flex items-center gap-4">
                <div className="flex-1 h-px bg-gray-200"></div>
                <span className="text-sm text-gray-500 font-medium">OR</span>
                <div className="flex-1 h-px bg-gray-200"></div>
              </div>

              {/* File Upload Option */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  <Upload className="inline w-4 h-4 mr-2" />
                  Upload PDF or DOCX file
                </label>
                <div
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  className="border-2 border-dashed border-gray-300 rounded-2xl p-12 text-center hover:border-[#4CAF50] transition-colors cursor-pointer"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.docx,.doc"
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
                          Drop your PDF or DOCX here or click to browse
                        </p>
                        <p className="text-sm text-gray-500">
                          PDF and DOCX files up to 10MB
                        </p>
                      </div>
                    </div>
                  )}
                </div>
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
                disabled={(!file && !textInput.trim()) || loading}
                className="w-full flex items-center justify-center gap-3 bg-black text-white px-6 py-4 rounded-full transition-all font-medium text-base hover:bg-[#4CAF50] disabled:bg-gray-300 disabled:cursor-not-allowed disabled:hover:bg-gray-300"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Generating Podcast...
                  </>
                ) : (
                  <>
                    <Music className="w-5 h-5" />
                    Generate Podcast
                  </>
                )}
              </button>
            </form>
          </div>
        )}

        {/* Audio Player */}
        {audioUrl && (
          <div className="space-y-6">
            {/* Success Message */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-4">
              <p className="text-green-700 text-sm font-medium">
                ✓ Podcast generated successfully! Listen to it below.
              </p>
            </div>

            {/* Audio Player Card */}
            <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 shadow-sm">
              <div className="flex flex-col items-center space-y-6">
                <div className="w-24 h-24 bg-[#4CAF50] rounded-full flex items-center justify-center">
                  <Headphones className="w-12 h-12 text-white" />
                </div>

                <div className="text-center">
                  <h3 className="text-2xl font-bold text-black mb-2">
                    Your Podcast is Ready!
                  </h3>
                  <p className="text-gray-600">
                    {file ? file.name : "Text Podcast"}
                  </p>
                </div>

                {/* Audio Controls */}
                <div className="w-full max-w-md space-y-4">
                  <audio
                    ref={audioRef}
                    src={audioUrl}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    onEnded={() => setIsPlaying(false)}
                    className="w-full"
                    controls
                  />

                  {/* Custom Controls */}
                  <div className="flex items-center justify-center gap-4">
                    <button
                      onClick={handlePlayPause}
                      className="flex items-center justify-center w-16 h-16 bg-[#4CAF50] text-white rounded-full hover:bg-[#45a049] transition-colors"
                    >
                      {isPlaying ? (
                        <Pause className="w-6 h-6" />
                      ) : (
                        <Play className="w-6 h-6 ml-1" />
                      )}
                    </button>

                    <button
                      onClick={handleDownload}
                      className="flex items-center gap-2 px-6 py-3 bg-white text-gray-700 rounded-full border-2 border-gray-200 hover:bg-gray-50 transition-colors font-medium"
                    >
                      <Download className="w-4 h-4" />
                      Download
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* New Podcast Button */}
            <button
              onClick={() => {
                setAudioUrl("");
                setFile(null);
                setTextInput("");
                setIsPlaying(false);
                if (fileInputRef.current) {
                  fileInputRef.current.value = "";
                }
                if (audioRef.current) {
                  audioRef.current.pause();
                  audioRef.current.currentTime = 0;
                }
              }}
              className="w-full px-6 py-3 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors font-medium"
            >
              Create New Podcast
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
