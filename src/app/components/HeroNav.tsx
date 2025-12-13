"use client";

import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";

export function HeroNav() {
  return (
    <nav className="relative z-10 px-6 py-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          
          <span className="text-2xl font-semibold text-gray-900">Intellirite</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          <button className="flex items-center gap-1 text-gray-700 hover:text-[#4CAF50] font-medium">
            All Pages <ChevronDown className="w-4 h-4" />
          </button>

          <Link href="#features" className="text-gray-700 hover:text-[#4CAF50] font-medium">
            Features
          </Link>

          <Link href="#pricing" className="text-gray-700 hover:text-[#4CAF50] font-medium">
            Pricing
          </Link>

          <Link href="#contact" className="text-gray-700 hover:text-[#4CAF50] font-medium">
            Contact
          </Link>
        </div>

        {/* CTA */}
        <Link
          href="/get-started"
          className="hidden lg:flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full hover:bg-[#4CAF50] active:bg-[#4CAF50] transition-colors font-medium"
        >
          Get Started <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </nav>
  );
}
