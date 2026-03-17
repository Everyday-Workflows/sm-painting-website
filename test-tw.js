const { extendTailwindMerge } = require("tailwind-merge");
const customTwMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "text-color": [
        "text-brand-primary",
        "text-brand-secondary",
      ],
      "bg-color": [
        "bg-brand-primary",
        "bg-brand-secondary",
      ],
    },
  },
});
console.log(customTwMerge("hover:text-white hover:text-brand-primary"));
