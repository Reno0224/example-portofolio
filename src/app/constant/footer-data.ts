type SocialMediaItems = {
  label: string;
  href: string;
  icon: string;
};

type SocialMedia = {
  title: string;
  items: SocialMediaItems[];
};

export const FooterSection: SocialMedia = {
  title: "Reno Renaldo. All rights reserved",
  items: [
    { label: "Facebook", href: "#", icon: "cib:facebook-f" },
    {
      label: "Instagram",
      href: "https://www.instagram.com/renorenaldo_?xtok=MTVjdHpwMGk0bzhlMw%3D%3D&utm_source=qr",
      icon: "cib:instagram",
    },
    { label: "Linkedin", href: "#", icon: "cib:linkedin-in" },
    { label: "Tiktok", href: "#", icon: "cib:tiktok" },
  ],
};
