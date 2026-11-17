type PortoItems = {
  label: string;
  description: string;
  images: string;
};

type List = {
  title: string;
  subtitle: string;
  items: PortoItems[];
};

export const examplePorto: List = {
  title: "Design to",
  subtitle:
    "We translated design mockups into pixel-perfect, responsive components, ensuring a smooth user experience across all devices.",
  items: [
    {
      label: "Portfolio 1",
      description: "Web Development",
      images: "/icons/porto/porto-1.png",
    },
    {
      label: "Portfolio 2",
      description: "Web Development",
      images: "/icons/porto/porto-2.png",
    },
    {
      label: "Portfolio 3",
      description: "Web Development",
      images: "/icons/porto/porto-3.png",
    },
  ],
};
