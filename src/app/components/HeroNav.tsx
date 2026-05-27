"use client";

import Link from "next/link";
import { ChevronDown, ArrowRight, Moon, Sun, Heart } from "lucide-react";
import { useState } from "react";

export function HeroNav() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const pref = localStorage.getItem("theme");
      const isDark = pref === "dark";
      document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
      return isDark;
    }
    return false;
  });

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.setAttribute("data-theme", next ? "dark" : "light");
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <nav className="relative z-50 px-6 py-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-9 h-9 bg-gradient-to-br from-[#4CAF50] to-[#C7F36A] rounded-xl flex items-center justify-center">
            <Heart className="w-5 h-5 text-white" fill="white" />
          </div>
          <span className="text-2xl font-bold text-gray-900">CONNECT</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button
              className="flex items-center gap-1 text-gray-700 hover:text-[#4CAF50] font-medium"
            >
              Pitch Deck <ChevronDown className="w-4 h-4" />
            </button>
            {open && (
              <div className="absolute right-0 mt-3 w-48 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50">
                <Link href="#problem" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">The Problem</Link>
                <Link href="#solution" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Our Solution</Link>
                <Link href="#market" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Market</Link>
                <Link href="#pricing" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Business Model</Link>
              </div>
            )}
          </div>

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
        <div className="flex items-center gap-3">
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="flex items-center gap-2 bg-white text-gray-900 px-4 py-2 rounded-full border border-gray-200 hover:bg-gray-100"
        >
          {dark ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
        </button>
        <Link
          href="#contact"
          className="hidden lg:flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full hover:bg-[#4CAF50] active:bg-[#4CAF50] transition-colors font-medium"
        >
          Schedule a Call <ArrowRight className="w-4 h-4" />
        </Link>
        </div>
      </div>
    </nav>
  );
}
