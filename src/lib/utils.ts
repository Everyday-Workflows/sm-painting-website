import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const customTwMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "text-color": [
        "text-brand-primary",
        "text-brand-secondary",
        "text-brand-tertiary",
        "text-brand-accent-1",
        "text-brand-accent-2",
      ],
      "bg-color": [
        "bg-brand-primary",
        "bg-brand-secondary",
        "bg-brand-tertiary",
        "bg-brand-accent-1",
        "bg-brand-accent-2",
      ],
      "border-color": [
        "border-brand-primary",
        "border-brand-secondary",
        "border-brand-tertiary",
        "border-brand-accent-1",
        "border-brand-accent-2",
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return customTwMerge(clsx(inputs));
}
