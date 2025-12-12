"use client";
export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 p-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#4CAF50] text-sm font-medium mb-4 tracking-wide uppercase">
            The Problem
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Academic & Professional Writers Are Drowning in Tool Fragmentation
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Students and researchers juggle 5-7 disconnected tools to complete a single writing project
          </p>
        </div>

        <div className="max-w-6xl mx-auto bg-[#f7f7f7] rounded-[48px] p-8 md:p-12">
          {/* Top floating cards */}
          <div className="relative h-32 mb-4">
            {/* Card 1 - Google Docs */}
            <div className="absolute top-2 left-[15%] w-56 h-24 bg-white rounded-xl shadow-lg border-2 border-gray-200 transform -rotate-2 flex items-center justify-center">
              <span className="text-sm font-semibold text-gray-700">Google Docs</span>
            </div>

            {/* Card 2 - Zotero */}
            <div className="absolute top-0 left-[38%] w-56 h-24 bg-white rounded-xl shadow-lg border-2 border-gray-200 transform rotate-1 flex items-center justify-center">
              <span className="text-sm font-semibold text-gray-700">Zotero</span>
            </div>
            
            {/* Card 3 - ChatGPT */}
            <div className="absolute top-3 right-[8%] w-48 h-20 bg-white rounded-xl shadow-lg border-2 border-gray-200 transform rotate-2 flex items-center justify-center">
              <span className="text-sm font-semibold text-gray-700">ChatGPT</span>
            </div>
          </div>

          {/* Main content area */}
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 min-h-[520px] p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-gray-50 rounded-2xl">
                  <div className="text-4xl font-bold text-gray-900 mb-2">2-3 hrs</div>
                  <div className="text-gray-600 text-sm">Lost per week navigating between tools</div>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-2xl">
                  <div className="text-4xl font-bold text-gray-900 mb-2">5-7</div>
                  <div className="text-gray-600 text-sm">Different tools needed per project</div>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-2xl">
                  <div className="text-4xl font-bold text-gray-900 mb-2">15-20 hrs</div>
                  <div className="text-gray-600 text-sm">Spent on tool coordination per dissertation</div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <p className="text-gray-700 text-lg font-medium mb-4">The Solution: One Unified Writing IDE</p>
                <p className="text-gray-600">Intellirite combines all your writing tools into one AI-powered workspace</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}