import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  className,
  align = "center",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-14",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-slate-400 text-base md:text-lg leading-relaxed",
            align === "center" ? "max-w-2xl mx-auto" : "max-w-2xl"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
