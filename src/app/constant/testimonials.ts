import { LucideIcon, Star } from "lucide-react";

type TestiItems = {
  id: number;
  icon: LucideIcon;
  comment: string;
  images: string;
  name: string;
  position: string;
};

type Testimoni = {
  title: string;
  subtitle: string;
  listTesti: TestiItems[];
};

export const testimonials: Testimoni = {
  title: "What They Say About Working With Me",
  subtitle:
    "Real words from clients, teammates, and mentors I’ve collaborated with on various projects.",
  listTesti: [
    {
      id: 1,
      icon: Star,
      comment:
        "“Working with Reno Renaldo was a smooth experience from start to finish. He translated our design into clean, responsive code and even suggested improvements we hadn’t thought of. Highly recommended!”",
      images: "/icons/sarah2.svg",
      name: "Sarah Tan",
      position: "Product Manager at Finovate",
    },
  ],
};
