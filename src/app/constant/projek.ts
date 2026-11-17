type ProjectItems = {
  id: number;
  year: string;
  role: string;
  images: string;
  description: string;
};

type Project = {
  title: string;
  description: string;
  items: ProjectItems[];
};

export const project: Project = {
  title: "Experiences That",
  description:
    "From startups to side projects, e very step has been a chance to learn, build, and level up.",
  items: [
    {
      id: 1,
      year: "2025 - Present",
      role: "Frontend Developer",
      images: "/icons/company-logo/Airbnb.svg",
      description:
        "Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.",
    },
    {
      id: 2,
      year: "2025 - Present",
      role: "Frontend Developer",
      images: "/icons/company-logo/Airtasker.svg",
      description:
        "Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.",
    },
    {
      id: 3,
      year: "2025 - Present",
      role: "Frontend Developer",
      images: "/icons/company-logo/Slack1.svg",
      description:
        "Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.",
    },
  ],
};
