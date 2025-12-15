"use client";

import { HeroNav } from "./HeroNav";
import { HeroHeadline } from "./HeroHeadline";
import { HeroCTA } from "./HeroCTA";

export default function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* White background behind everything */}
      <div className="absolute inset-0 z-[-10] bg-linear-to-br from-gray-50 to-gray-100" />

      {/* Grid layer: large spacing, subtle lines, center-visible with soft edge fade */}
      <div className="absolute top-0 inset-x-0 h-[65%] z-0 pointer-events-none">
        <div
          className="absolute inset-0 [background-size:80px_80px] lg:[background-size:100px_100px] [background-position:center_top] [background-image:linear-gradient(to_right,rgba(0,0,0,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.08)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_80%_100%_at_50%_0%,black_0%,black_45%,transparent_75%)] [-webkit-mask-image:radial-gradient(ellipse_80%_100%_at_50%_0%,black_0%,black_45%,transparent_75%)]"
        />
      </div>

      {/* Soft white radial glow behind headline area */}
      <div className="absolute top-0 inset-x-0 h-[60%] z-[5] pointer-events-none [background:radial-gradient(ellipse_70%_80%_at_50%_20%,rgba(255,255,255,0.6)_0%,rgba(255,255,255,0.2)_40%,rgba(255,255,255,0)_70%)]" />
      {/* Content */}
      <div className="relative z-10">
        <HeroNav />

        <div className="px-6 pt-20 pb-20 lg:pt-32 lg:pb-28">
          <HeroHeadline />
          <div className="mt-10 lg:mt-16">
            <HeroCTA />
          </div>
        </div>
      </div>


    </div>
  );
}
