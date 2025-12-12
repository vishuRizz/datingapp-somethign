"use client";
export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 p-8 relative overflow-hidden">

      <div className="relative z-10 max-w-5xl mx-auto mb-12">
        <div className="absolute top-2 left-0 w-48 h-20 bg-white rounded-xl shadow-lg border border-gray-100 transform -rotate-2" />

        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-52 h-20 bg-white rounded-xl shadow-lg border border-gray-100 transform rotate-1" />

        <div className="absolute top-0 right-0 w-56 h-20 bg-white rounded-xl shadow-lg border border-gray-100 transform rotate-2" />
      </div>

      <div className="relative max-w-6xl mx-auto mt-6">
        <div className="relative z-10 bg-white rounded-3xl shadow-2xl border border-gray-100 min-h-[520px]" />
      </div>
    </div>
  );
}