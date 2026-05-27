import {
  ShieldCheck,
  Brain,
  Heart,
  Users,
  MapPin,
  Video,
} from "lucide-react";

export function HeroHeadline() {
  return (
    <div className="max-w-[1100px] mx-auto text-center">
      <div className="inline-flex items-center gap-2 bg-[#C7F36A]/20 border border-[#C7F36A]/40 text-gray-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
        <span className="w-2 h-2 bg-[#4CAF50] rounded-full animate-pulse" />
       Pitch Deck
      </div>
      
      <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-bold text-gray-900 leading-[1.1] tracking-tight mb-8">
        Stop Swiping.
        <br />
        Start Connecting.
      </h1>

      <p className="text-lg sm:text-xl text-gray-600 max-w-[800px] mx-auto mb-4 leading-relaxed">
        An AI-powered dating platform that matches on emotion, not just looks.
        Eliminates fakes. Prevents ghosting. Actually works.
      </p>
      
      <p className="text-sm text-gray-500 max-w-[600px] mx-auto mb-10">
        68% of users ghosted • 42% overwhelmed by choices • 60% churn within 30 days • <span className="text-[#4CAF50] font-semibold">We fix all of this.</span>
      </p>

      <div className="mx-auto">
        <div className="hidden sm:block">
          <div className="flex justify-center gap-4 lg:gap-6 flex-wrap">
            {[
              { label: "Bank-Grade Verification", Icon: ShieldCheck },
              { label: "Emotional AI Matching", Icon: Brain },
              { label: "Anti-Ghosting System", Icon: Heart },
              { label: "Community First", Icon: Users },
              { label: "Proximity Serendipity", Icon: MapPin },
              { label: "Video-First Design", Icon: Video },
            ].map(({ label, Icon }) => (
              <button
                key={label}
                aria-label={label}
                className="group flex flex-col items-center gap-2 transition-all duration-300 hover:scale-105"
              >
                <div
                  className="w-14 h-14 rounded-full bg-black flex items-center justify-center transition-all duration-300 group-hover:bg-[#4CAF50]"
                  style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.12)" }}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <span className="text-xs text-gray-700 font-medium text-center max-w-[100px] leading-tight">
                  {label}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="sm:hidden overflow-x-auto -mx-6 px-6 pb-4">
          <div className="flex gap-4">
            {[
              { label: "Bank-Grade Verification", Icon: ShieldCheck },
              { label: "Emotional AI Matching", Icon: Brain },
              { label: "Anti-Ghosting System", Icon: Heart },
              { label: "Community First", Icon: Users },
              { label: "Proximity Serendipity", Icon: MapPin },
              { label: "Video-First Design", Icon: Video },
            ].map(({ label, Icon }) => (
              <button
                key={label}
                aria-label={label}
                className="group flex flex-col items-center gap-2 transition-all duration-300 hover:scale-105 shrink-0"
              >
                <div
                  className="w-12 h-12 rounded-full bg-black flex items-center justify-center transition-all duration-300 group-hover:bg-[#4CAF50]"
                  style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.12)" }}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs text-gray-700 font-medium text-center max-w-[80px] leading-tight">
                  {label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
