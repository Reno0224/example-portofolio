type ComparrisonCard = {
  title: string;
  avatar: string;
  variant: "positive" | "negative";
  points: string[];
};

type Comparrison = {
  title: string;
  subtitle: string;
  cards: ComparrisonCard[];
};

export const comparisonSection: Comparrison = {
  title: "More Than Just Code",
  subtitle:
    "We care about design, performance, and user experience all in one.",
  cards: [
    {
      title: "With Me",
      avatar: "/icons/hero-icons/ava.png",
      variant: "positive",
      points: [
        "React Expert",
        "Precise Website Implementation",
        "TypeScript Proficiency",
        "Clean, Maintainable Code",
        "Responsive Website Development",
        "Performance Optimization",
        "UI Design Proficiency (Figma)",
      ],
    },
    {
      title: "Another Talent",
      avatar: "/icons/defaultprofile.svg",
      variant: "negative",
      points: [
        "Basic React Knowledge",
        "Inconsistent Design Translation",
        "Little to No TypeScript Knowledge",
        "Unstructured Code",
        "Inconsistent Responsiveness",
        "Slow and Heavy Websites",
        "No Design Skills",
      ],
    },
  ],
};
