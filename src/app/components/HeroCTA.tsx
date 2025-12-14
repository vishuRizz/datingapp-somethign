"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HeroCTA() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 bg-linear-to-br from-gray-50 to-gray-100 py-4">

      {/* Primary CTA */}
      <Link href="/get-started" className="group btn btn-primary">
        Get Started

        {/* Circle Wrapper */}
        <div className="relative w-10 h-10 bg-[#C7F36A] rounded-full flex items-center justify-center overflow-hidden">

          {/* Arrow — slides forward, fades, returns */}
          <ArrowRight
            className="
              w-5 h-5 text-black absolute transition-all duration-300
              group-hover:translate-x-6 group-hover:opacity-0
            "
          />

          {/* Arrow returning from behind */}
          <ArrowRight
            className="
              w-5 h-5 text-black absolute opacity-0 translate-x-[-6] 
              transition-all duration-300 delay-200
              group-hover:translate-x-0 group-hover:opacity-100
            "
          />
        </div>
      </Link>

      <Link href="/learn-more" className="group btn btn-secondary">
        Learn more
        <div className="relative w-9 h-9 bg-white rounded-full flex items-center justify-center overflow-hidden">
          <ArrowRight
            className="w-5 h-5 text-black absolute transition-all duration-300 group-hover:translate-x-6 group-hover:opacity-0"
          />
          <ArrowRight
            className="w-5 h-5 text-black absolute opacity-0 translate-x-[-6] transition-all duration-300 delay-200 group-hover:translate-x-0 group-hover:opacity-100"
          />
        </div>
      </Link>
    </div>
  );
}
