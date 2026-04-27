import type { LucideIcon } from "lucide-react";
import {
  Car,
  Clapperboard,
  Cpu,
  FileSearch,
  Flag,
  LayoutDashboard,
  LineChart,
  Palmtree,
  Radio,
  Scan,
  Spade,
  Sparkles,
  Users,
} from "lucide-react";
import type { Project } from "./types";

export type ProjectBrand = {
  Icon: LucideIcon;
  from: string;
  to: string;
  ring: string;
};

/**
 * Picks a visual "logo" treatment from title, description, and stack keywords.
 * Rules are ordered from more specific to more general.
 */
export function getProjectBrand(project: Project): ProjectBrand {
  const t = `${project.title} ${project.description} ${project.techStack.join(" ")}`.toLowerCase();

  if (/ott|hls|shaka|ffmpeg|streamvault|adaptive|drm|manifest|aes-128/.test(t)) {
    return {
      Icon: Clapperboard,
      from: "from-violet-500",
      to: "to-fuchsia-600",
      ring: "ring-fuchsia-500/30",
    };
  }
  if (/docsage|doc\s*sage|document processing|insight agent|rag|pdf|idp|ollama|faiss|ocr|extract/.test(t)) {
    return {
      Icon: FileSearch,
      from: "from-emerald-500",
      to: "to-teal-600",
      ring: "ring-emerald-400/30",
    };
  }
  if (/whimsy|mood|social|firebase|android|kotlin|dall|follow graph/.test(t)) {
    return {
      Icon: Users,
      from: "from-rose-500",
      to: "to-orange-500",
      ring: "ring-rose-400/30",
    };
  }
  if (/retire|financial|ready inc|planning|consulting|retireready/.test(t)) {
    return {
      Icon: LineChart,
      from: "from-amber-500",
      to: "to-amber-700",
      ring: "ring-amber-400/25",
    };
  }
  if (/seven senses|senses|retreat website/.test(t)) {
    return {
      Icon: Palmtree,
      from: "from-sky-500",
      to: "to-cyan-600",
      ring: "ring-sky-400/30",
    };
  }
  if (/lossless|virtual try|mediapipe|try-on|kalman|tps|affine|warp|centauri|opencv/.test(t)) {
    return {
      Icon: Scan,
      from: "from-pink-500",
      to: "to-violet-600",
      ring: "ring-pink-400/30",
    };
  }
  if (/bcm|automotive|cpputest|abcms|\bcan\b|embedded c11|sil/.test(t)) {
    return {
      Icon: Cpu,
      from: "from-slate-500",
      to: "to-zinc-700",
      ring: "ring-slate-400/25",
    };
  }
  if (/poker|holdem|deal-r|event-sourc|hold'em|deterministic replay/.test(t)) {
    return {
      Icon: Spade,
      from: "from-indigo-600",
      to: "to-purple-700",
      ring: "ring-indigo-400/30",
    };
  }
  if (/\bbeyond the apex\b/.test(t)) {
    return {
      Icon: LayoutDashboard,
      from: "from-sky-500",
      to: "to-indigo-600",
      ring: "ring-sky-400/30",
    };
  }
  if (/formula 1|grand prix|fastf1|\bf1\b|recharts|analytics dashboard|dashboard/.test(t)) {
    return {
      Icon: /streamlit|recharts|dashboard|shap|predictor|plot|pandas|numpy|lightgbm/.test(t) ? LayoutDashboard : Flag,
      from: "from-sky-500",
      to: "to-indigo-600",
      ring: "ring-sky-400/30",
    };
  }
  if (/podium|tyre|driver|constructor|fastf1|lightgbm|shap|predictor/.test(t)) {
    return {
      Icon: Car,
      from: "from-red-500",
      to: "to-neutral-800",
      ring: "ring-red-500/20",
    };
  }
  if (/next\.?js|vercel|marketing|framer|tailwind|app router|portfolio/.test(t)) {
    return {
      Icon: Radio,
      from: "from-neutral-600",
      to: "to-neutral-900",
      ring: "ring-white/10",
    };
  }

  return {
    Icon: Sparkles,
    from: "from-slate-500",
    to: "to-slate-800",
    ring: "ring-slate-400/20",
  };
}

export function projectInitials(project: Project): string {
  const m = project.title.match(/[A-Za-z0-9]/g);
  if (!m || m.length === 0) return "?";
  if (m.length === 1) return m[0]!.toUpperCase();
  return (m[0] + m[1]).toUpperCase();
}
