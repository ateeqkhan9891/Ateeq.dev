"use client";
import { useState } from "react";
import { Star } from "lucide-react";

interface Props {
  value: number;
  onChange?: (v: number) => void;
  readonly?: boolean;
  size?: number;
}

export default function StarRating({ value, onChange, readonly = false, size = 20 }: Props) {
  const [hover, setHover] = useState(0);
  const active = hover || value;

  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          disabled={readonly}
          onClick={() => onChange?.(n)}
          onMouseEnter={() => !readonly && setHover(n)}
          onMouseLeave={() => !readonly && setHover(0)}
          className={`transition-all duration-150 ${
            readonly ? "cursor-default" : "cursor-pointer hover:scale-110"
          }`}
          aria-label={`${n} star${n > 1 ? "s" : ""}`}
        >
          <Star
            size={size}
            className={
              n <= active
                ? "fill-amber-400 text-amber-400"
                : "text-slate-700 fill-slate-800"
            }
          />
        </button>
      ))}
    </div>
  );
}
