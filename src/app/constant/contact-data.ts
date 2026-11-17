type Images = {
  id: number;
  images: string;
};

type ContactData = {
  title: string;
  subtitle: string;
  images: Images[];
};

export const contactMe: ContactData = {
  title: "Let’s Work Together",
  subtitle:
    "Have a project in mind or just want to say hi? Drop me a message — I’d love to hear from you.",
  images: [
    { id: 1, images: "/icons/porto/porto-1.png" },
    { id: 2, images: "/icons/porto/porto-2.png" },
    { id: 3, images: "/icons/porto/porto-3.png" },
  ],
};
