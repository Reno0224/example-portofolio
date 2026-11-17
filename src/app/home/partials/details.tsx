import { details } from "@/app/constant/details-data";
import Image from "next/image";

export const Details = () => {
  return (
    <section className="bg-neutral-100 py-10 lg:py-20">
      <div className="custom-container">
        <div className="grid grid-cols-1 lg:grid-cols-3  lg:gap-x-20 divide-x divide-neutral-300">
          {details.map((d) => (
            <div key={d.label}>
              <Image
                src={d.images}
                alt="Logo"
                width={47}
                height={47}
                className="rounded-full border border-neutral-300 p-4"
              />
              <h3 className="text-lg lg:text-display-xs font-bold text-neutral-950">
                {d.label}
              </h3>
              <p className="text-sm lg:text-md font-regular text-neutral-950">
                {d.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
