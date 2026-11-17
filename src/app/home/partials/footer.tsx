import { FooterSection } from "@/app/constant/footer-data";
import { Icon } from "@iconify/react";

export const Footer = () => {
  return (
    <section className="bg-black">
      <div className="custom-container flex flex-col bg-black lg:flex-row lg:justify-between lg:items-center py-6">
        <h2 className="text-neutral-50 order-2 lg:order-1 ">
          &copy; {FooterSection.title}
        </h2>

        <div className="w-52 order-2 lg:order-1">
          <div className="flex items-center justify-between">
            {FooterSection.items.map((item) => (
              <a
                key={item.label}
                href={item.href}
                aria-label={item.label}
                className="rounded-full w-10 h-10 overflow-hidden border border-neutral-800 flex items-center justify-center"
              >
                <span>
                  <Icon
                    icon={item.icon}
                    width={15}
                    height={15}
                    className="text-white"
                  />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
