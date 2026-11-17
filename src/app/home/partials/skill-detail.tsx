import { comparisonSection } from "@/app/constant/skill-details";
import { Check, X } from "lucide-react";
import Image from "next/image";

export const SkillDetailsSection = () => {
  return (
    <section className="py-10 lg:py-20" id="skill">
      <div className="custom-container">
        <div className="text-center">
          <h2 className="text-display-sm lg:text-display-xl font-bold">
            {comparisonSection.title}
          </h2>
          <p className="mt-2 text-text-md font-medium">
            {comparisonSection.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1  md:grid-cols-2  gap-6 mt-12">
          {comparisonSection.cards.map((card) => {
            const isPositive = card.variant === "positive";

            return (
              <div
                key={card.title}
                className="bg-white odd:bg-secondary-100 even:border border-neutral-300 rounded-2xl p-8 flex flex-col justify-center items-center w-[clamp(22.56rem,48.04vw,36.75rem)] m-auto"
              >
                <h3 className="text-center text-lg font-bold">{card.title}</h3>
                <div
                  className={`${isPositive ? "bg-primary-300" : "bg-neutral-300"} w-20 h-20 lg:w-25 lg:h-25 rounded-full flex justify-center overflow-hidden mt-6`}
                >
                  <Image
                    src={card.avatar}
                    width={60}
                    height={60}
                    alt="Picture-ava"
                  />
                </div>

                <ul className="flex flex-col gap-6 mt-8">
                  {card.points.map((point) => (
                    <li
                      key={point}
                      className="flex justify-center items-center gap-3 text-lg font-semibold"
                    >
                      {isPositive ? (
                        <Check size={24} className="text-black" />
                      ) : (
                        <X size={24} className="text-[#E5352D]" />
                      )}{" "}
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
