import { skillSection } from "@/app/constant/skill-data";
import Image from "next/image";

export const SkillSections = () => {
  return (
    <section className="bg-neutral-100 py-10 lg:py-20">
      <div className="custom-container bg-neutral-100 m-auto">
        <div className="text-center">
          <h1 className="font-bold text-display-sm lg:text-display-xl">
            {skillSection.title}
          </h1>
          <p className="font-medium text-sm lg:text-text-md mt-2">
            {skillSection.subtitle}
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 w-[clamp(22.56rem,75.16vw,57.5rem)] m-auto">
          {skillSection.items.map((item) => (
            <div
              key={item.label}
              className="border border-neutral-300 w-[172.5px] lg:w-53.75 rounded-full flex flex-col gap-3 items-center justify-center px-4 py-10 text-center bg-white odd:bg-secondary-100"
            >
              <Image
                src={item.images}
                alt={item.label}
                width={60}
                height={60}
                className=""
              />
              <h3 className="text-md font-semibold">{item.label}</h3>
              <p className="font-regular text-sm lg:text-md">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
