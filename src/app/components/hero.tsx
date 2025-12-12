"use client";

import { HeroNav } from "./HeroNav";
import { HeroHeadline } from "./HeroHeadline";
import { HeroCTA } from "./HeroCTA";

export default function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* White background behind everything */}
      <div className="absolute inset-0 z-[-10] bg-linear-to-br from-gray-50 to-gray-100" />

      {/* Grid layer: large spacing, subtle lines, center-visible with edge fade */}
      <div className="absolute top-0 inset-x-0 h-1/2 z-0 pointer-events-none">
        <div
          className="absolute inset-0 [background-size:120px_120px] lg:[background-size:140px_140px] [background-position:0_0] [background-image:linear-gradient(to_right,rgba(0,0,0,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.08)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_at_50%_62%,black_65%,transparent_100%),linear-gradient(to_right,transparent_0%,black_20%,black_80%,transparent_100%),linear-gradient(to_bottom,black_0%,black_56%,transparent_68%)] [-webkit-mask-image:radial-gradient(ellipse_at_50%_62%,black_65%,transparent_100%),linear-gradient(to_right,transparent_0%,black_20%,black_80%,transparent_100%),linear-gradient(to_bottom,black_0%,black_56%,transparent_68%)]"
        />
      </div>

      {/* Soft white radial glow behind headline area */}
      <div className="absolute top-0 inset-x-0 h-1/2 z-[5] pointer-events-none [background:radial-gradient(ellipse_at_center,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0.11)_35%,rgba(255,255,255,0)_70%)]" />

      {/* Content */}
      <div className="relative z-10">
        <HeroNav />

        <div className="px-6 pt-20 pb-20 lg:pt-32 lg:pb-28">
          <HeroHeadline />
          <HeroCTA />
        </div>
      </div>
    </div>
  );
}
