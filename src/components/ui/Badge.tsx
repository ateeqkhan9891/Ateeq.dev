import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "cyan" | "blue" | "purple" | "green" | "orange";
  className?: string;
}

const variants = {
  default: "bg-white/[0.06] text-slate-400 border-white/[0.08]",
  cyan: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  blue: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  purple: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  green: "bg-green-500/10 text-green-400 border-green-500/20",
  orange: "bg-orange-500/10 text-orange-400 border-orange-500/20",
};

export default function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium border",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
