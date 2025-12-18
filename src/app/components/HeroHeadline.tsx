import {
  Folder,
  ShieldCheck,
  Quote,
  BadgeCheck,
  Headphones,
  FileText,
} from "lucide-react";

export function HeroHeadline() {
  const getUrl = (label: string) => {
    switch (label) {
      case "Convert Papers to Podcasts":
        return "https://www.pensyl.com/podcast";
      case "PDF Summarizing":
        return "https://www.pensyl.com/pdf-summarise";
      default:
        return "https://workspace.pensyl.com/";
    }
  };

  return (
    <div className="max-w-[1100px] mx-auto text-center">
      <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-bold text-gray-900 leading-[1.1] tracking-tight mb-8">
        Your All-In-One Workspace
        <br />
        For Research and Writing
      </h1>

      <p className="text-lg sm:text-xl text-gray-600 max-w-[800px] mx-auto mb-8 leading-relaxed">
        Context-aware editing, structured workflows, and a 0%-plagiarism AI
        engine for complex writing projects.
      </p>

      <div className="mx-auto">
        <div className="hidden sm:block">
          <div className="flex justify-center gap-4 lg:gap-6 flex-wrap">
            {[
              { label: "AI Writing Workspace", Icon: Folder },
              { label: "No-Plagiarism AI Writing", Icon: ShieldCheck },
              { label: "Built-in Citation Engine", Icon: Quote },
              { label: "Turnitin-Safe Papers", Icon: BadgeCheck },
              { label: "Convert Papers to Podcasts", Icon: Headphones },
              { label: "PDF Summarizing", Icon: FileText },
            ].map(({ label, Icon }) => (
              <button
                key={label}
                aria-label={label}
                onClick={() => {
                  window.location.href = getUrl(label);
                }}
                className="group flex flex-col items-center gap-2 transition-all duration-300 hover:scale-105"
              >
                <div
                  className="w-14 h-14 rounded-full bg-black flex items-center justify-center transition-all duration-300 group-hover:bg-gray-800"
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
              { label: "AI Writing Workspace", Icon: Folder },
              { label: "No-Plagiarism AI Writing", Icon: ShieldCheck },
              { label: "Built-in Citation Engine", Icon: Quote },
              { label: "Turnitin-Safe Papers", Icon: BadgeCheck },
              { label: "Convert Papers to Podcasts", Icon: Headphones },
              { label: "PDF Summarizing", Icon: FileText },
            ].map(({ label, Icon }) => (
              <button
                key={label}
                aria-label={label}
                onClick={() => {
                  window.location.href = getUrl(label);
                }}
                className="group flex flex-col items-center gap-2 transition-all duration-300 hover:scale-105 shrink-0"
              >
                <div
                  className="w-12 h-12 rounded-full bg-black flex items-center justify-center transition-all duration-300 group-hover:bg-gray-800"
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
