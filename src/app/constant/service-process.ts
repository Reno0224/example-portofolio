type ServiceProcessItems = {
  title: string;
  description: string;
  id: string;
};

type ServiceProcessData = {
  title: string;
  subtitle: string;
  items: ServiceProcessItems[];
};

export const service: ServiceProcessData = {
  title: "Let’s Clear Things Up",
  subtitle:
    "I’ve answered a few questions that usually come up when working with a frontend developer like me.",
  items: [
    {
      id: "1",
      title: "What technologies do you work with?",
      description:
        " I mainly work with HTML, CSS, JavaScript, and frameworks like React, Next.js, and Vue. I also have experience using Tailwind CSS, TypeScript, and working with APIs.",
    },
    {
      id: "2",
      title: "Do you work on freelance or remote projects?",
      description:
        " I mainly work with HTML, CSS, JavaScript, and frameworks like React, Next.js, and Vue. I also have experience using Tailwind CSS, TypeScript, and working with APIs.",
    },
    {
      id: "3",
      title: "Can you convert Figma or Sketch designs into code?",
      description:
        " I mainly work with HTML, CSS, JavaScript, and frameworks like React, Next.js, and Vue. I also have experience using Tailwind CSS, TypeScript, and working with APIs.",
    },
    {
      id: "4",
      title: "Do you collaborate with backend developers or teams??",
      description:
        " I mainly work with HTML, CSS, JavaScript, and frameworks like React, Next.js, and Vue. I also have experience using Tailwind CSS, TypeScript, and working with APIs.",
    },
    {
      id: "5",
      title: "Are you available for full-time roles?",
      description:
        " I mainly work with HTML, CSS, JavaScript, and frameworks like React, Next.js, and Vue. I also have experience using Tailwind CSS, TypeScript, and working with APIs.",
    },
  ],
};
