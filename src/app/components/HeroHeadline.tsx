import {
  Folder,
  WandSparkles,
  Brain,
  ShieldCheck,
  Quote,
  BadgeCheck,
  Users,
  Headphones,
  FileText,
} from "lucide-react";

export function HeroHeadline() {
  const getUrl = (label: string) => {
    switch (label) {
      case "Convert Papers to Podcasts":
        return "https://www.intellirite.com/podcast";
      case "PDF Summarizing":
        return "https://www.intellirite.com/pdf-summarise";
      default:
        return "https://workspace.intellirite.com/";
    }
  };

  return (
    <div className="max-w-[1100px] mx-auto text-center">
      <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-bold text-gray-900 leading-[1.1] tracking-tight mb-8">
      Your All-In-One Workspace
        <br />
       For Research and Writing
      </h1>

      <p className="text-lg sm:text-xl text-gray-600 max-w-[800px] mx-auto mb-4 leading-relaxed">
      Context-aware editing, structured workflows, and a 0%-plagiarism AI engine for complex writing projects.
      </p>

      <p className="text-sm font-semibold tracking-wide text-gray-900 mb-4">ALL IN ONE SOLUTION</p>
      <div className="text-sm text-gray-700 mb-8">
        <span>Multi-File Writing Workspace</span>
        <span className="mx-3">•</span>
        <span>Inline AI Text Editor</span>
        <span className="mx-3">•</span>
        <span>Whole-Project AI Context</span>
      </div>

      <div className="mx-auto">
        <div className="hidden sm:block">
          <div className="flex justify-center gap-4 lg:gap-6 mb-6">
            {[
              { label: "Multi-File Writing Workspace", Icon: Folder },
              { label: "Inline AI Text Editor", Icon: WandSparkles },
              { label: "Whole-Project AI Context", Icon: Brain },
              { label: "No-Plagiarism AI Writing", Icon: ShieldCheck },
              { label: "Built-in Citation Engine", Icon: Quote },
            ].map(({ label, Icon }) => (
              <button
                key={label}
                aria-label={label}
                title={label}
                onClick={() => {
                  window.location.href = getUrl(label);
                }}
                className="group relative w-14 h-14 rounded-full bg-white/40 backdrop-blur-md shadow-lg ring-1 ring-white/30 flex items-center justify-center transition-all duration-300 hover:scale-105"
                style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.12)" }}
              >
                <Icon className="w-7 h-7 text-[#7CFF00]" />
                <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-full mb-2 whitespace-nowrap px-3 py-1.5 rounded-full bg-white/90 backdrop-blur text-gray-900 text-xs font-medium shadow-md opacity-0 transition-opacity duration-200 group-hover:opacity-100 z-20">
                  {label}
                </span>
                <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition duration-300" style={{ boxShadow: "0 0 24px 6px rgba(124,255,0,0.35)" }} />
              </button>
            ))}
          </div>
          <div className="flex justify-center gap-4 lg:gap-6 lg:px-10">
            {[
              { label: "Turnitin-Safe Papers", Icon: BadgeCheck },
              { label: "Real-Time Collaboration", Icon: Users },
              { label: "Convert Papers to Podcasts", Icon: Headphones },
              { label: "PDF Summarizing", Icon: FileText },
            ].map(({ label, Icon }) => (
              <button
                key={label}
                aria-label={label}
                title={label}
                onClick={() => {
                  window.location.href = "https://workspace.intellirite.com/";
                }}
                className="group relative w-14 h-14 rounded-full bg-white/40 backdrop-blur-md shadow-lg ring-1 ring-white/30 flex items-center justify-center transition-all duration-300 hover:scale-105"
                style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.12)" }}
              >
                <Icon className="w-7 h-7 text-[#7CFF00]" />
                <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-full mt-2 whitespace-nowrap px-3 py-1.5 rounded-full bg-white/90 backdrop-blur text-gray-900 text-xs font-medium shadow-md opacity-0 transition-opacity duration-200 group-hover:opacity-100 z-20">
                  {label}
                </span>
                <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition duration-300" style={{ boxShadow: "0 0 24px 6px rgba(124,255,0,0.35)" }} />
              </button>
            ))}
          </div>
        </div>

        <div className="sm:hidden overflow-x-auto -mx-6 px-6">
          <div className="flex gap-3">
            {[
              { label: "Multi-File Writing Workspace", Icon: Folder },
              { label: "Inline AI Text Editor", Icon: WandSparkles },
              { label: "Whole-Project AI Context", Icon: Brain },
              { label: "No-Plagiarism AI Writing", Icon: ShieldCheck },
              { label: "Built-in Citation Engine", Icon: Quote },
              { label: "Turnitin-Safe Papers", Icon: BadgeCheck },
              { label: "Real-Time Collaboration", Icon: Users },
              { label: "Convert Papers to Podcasts", Icon: Headphones },
              { label: "PDF Summarizing", Icon: FileText },
            ].map(({ label, Icon }) => (
              <button
                key={label}
                aria-label={label}
                title={label}
                onClick={() => {
                  window.location.href = getUrl(label);
                }}
                className="group relative w-12 h-12 rounded-full bg-white/40 backdrop-blur-md shadow-lg ring-1 ring-white/30 flex items-center justify-center transition-all duration-300 hover:scale-105"
                style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.12)" }}
              >
                <Icon className="w-6 h-6 text-[#7CFF00]" />
                <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition duration-300" style={{ boxShadow: "0 0 24px 6px rgba(124,255,0,0.35)" }} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
