import { project } from "@/app/constant/projek";
import Image from "next/image";

export const ProjectSection = () => {
  return (
    <section className="bg-black" id="projects">
      <div className="custom-container py-10 lg:py-20">
        <div className="flex flex-wrap justify-between text-neutral-25">
          <div className="w-full max-w-91.5">
            <h2 className="text-sm lg:text-display-xl font-bold">
              {project.title}{" "}
              <span className="text-secondary-100">Shaped Me</span>!
            </h2>
          </div>
          <div className="w-full max-w-92 text-text-sm md:text-text-lg font-semibold">
            <p>{project.description}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 mt-12 gap-y-8 ">
          {project.items.map((item) => (
            <div key={item.id} className="flex flex-wrap justify-between">
              <div className="w-full max-w-44.5">
                <p className="text-text-sm font-medium text-neutral-400">
                  {item.year}
                </p>
                <h3 className="text-text-md lg:text-text-xl font-bold text-neutral-25">
                  {item.role}
                </h3>
              </div>
              <div className="border border-neutral-800 w-30.5 h-19 lg:max-w-48 rounded-2xl p-2">
                <div className="border border-neutral-800 rounded-2xl flex items-center p-3.75">
                  <Image
                    src={item.images}
                    alt="Company-logo"
                    width={128}
                    height={48}
                  />
                </div>
              </div>
              <div className="w-full lg:w-128.5 text-text-sm lg:text-text-md font-regular text-neutral-400">
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
