type SkillItems = {
  images: string;
  label: string;
  description: string;
};

type Skill = {
  title: string;
  subtitle: string;
  items: SkillItems[];
};

export const skillSection: Skill = {
  title: "Code, Design, and Everything in Between",
  subtitle:
    "These are the technologies that power my workflow and bring ideas to life.",
  items: [
    {
      images: "/icons/html1.svg",
      label: "HTML",
      description: "Crafting semantic, accessible HTML structures.",
    },
    {
      images: "/icons/css1.svg",
      label: "CSS",
      description: "Crafting semantic, accessible HTML structures.",
    },
    {
      images: "/icons/js1.svg",
      label: "JavaScript",
      description: "Crafting semantic, accessible HTML structures.",
    },
    {
      images: "/icons/react1.svg",
      label: "React",
      description: "Crafting semantic, accessible HTML structures.",
    },
  ],
};
