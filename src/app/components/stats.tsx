"use client";
export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 p-8 relative overflow-hidden">

      <div className="max-w-6xl mx-auto bg-[#f7f7f7] rounded-[48px] p-8 md:p-12">
        {/* Top floating cards */}
        <div className="relative h-32 mb-4">
          {/* Card 1 - Left */}
          <div className="absolute top-2 left-[15%] w-56 h-24 bg-white rounded-xl shadow-lg border-2 border-gray-200 transform -rotate-2" />

          {/* Card 2 - Center Left */}
          <div className="absolute top-0 left-[38%] w-56 h-24 bg-white rounded-xl shadow-lg border-2 border-gray-200 transform rotate-1" />
          
          <div className="absolute top-3 right-[8%] w-48 h-20 bg-white rounded-xl shadow-lg border-2 border-gray-200 transform rotate-2" />
        </div>

        {/* Main content area with border spacing */}
        <div className="relative">
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 min-h-[520px] p-8" />
        </div>
      </div>
    </div>
  );
}