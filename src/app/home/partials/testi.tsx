import { testimonials } from "@/app/constant/testimonials";
import Image from "next/image";

export const TestimonialSection = () => {
  return (
    <section className="bg-white">
      <div className="custom-container py-10 lg:py-20">
        <div className="text-center text-neutral-950">
          <h2 className="text-display-sm lg:text-display-xl font-bold">
            {testimonials.title}
          </h2>
          <p className="mt-2 text-text-sm lg:text-text-md font-medium">
            {testimonials.subtitle}
          </p>
        </div>
        {testimonials.listTesti.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className="bg-primary-300 mt-12 rounded-4xl text-white px-10 py-8"
            >
              <div className="flex gap-2 justify-center items-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon
                    key={i}
                    className="size-6 color text-secondary-100"
                    fill="currentColor"
                  />
                ))}
              </div>

              <p className="text-display-xs font-semibold text-center mt-4">
                {item.comment}
              </p>

              <div className="flex flex-col justify-center items-center mt-8">
                <Image
                  src={item.images}
                  alt="Ava-logo"
                  width={16}
                  height={16}
                  className="size-[64px]"
                />
                <p className="mt-2">{item.name}</p>
                <p>{item.position}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
