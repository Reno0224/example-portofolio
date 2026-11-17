type TechItems = {
  id: number;
  name: string;
  icons: string;
};

export const skillTech: TechItems[] = [
  { id: 1, name: "JavaScript", icons: "/icons/tech-logo/js.svg" },
  { id: 2, name: "CSS", icons: "/icons/tech-logo/css.svg" },
  { id: 3, name: "HTML", icons: "/icons/tech-logo/html.svg" },
  { id: 4, name: "React", icons: "/icons/tech-logo/react.svg" },
];

type Status = {
  value: number;
  suffix: string;
  label: string;
};

export const stats: Status[] = [
  { value: 2, suffix: "+", label: "Years Experience" },
  { value: 99, suffix: "%", label: "Client Satisfaction" },
  { value: 3, suffix: "", label: "Project Delivered" },
  { value: 50, suffix: "", label: "Clients Worldwide" },
];
