import { examplePorto } from "@/app/constant/example-portofolio";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight ,} from "lucide-react";


export const Portofolio = () => {
  return (
    <section className="py-10 lg:py-20">
      <div className="custom-container">
        <div className=" flex flex-col lg:flex-row lg:justify-between lg:items-center">
          <div className="w-90.25 lg:w-174">
            {" "}
            <h2 className="text-display-xl font-bold">
              {examplePorto.title}{" "}
              <span className="text-primary-300">Code Accuracy</span>
            </h2>
            <p className="text-text-md font-medium">{examplePorto.subtitle}</p>
          </div>

          <Button className="w-full bg-white border border-neutral-300 mt-6 text-neutral-950 text-text-md font-semibold flex justify-between pl-4  h-14 rounded-full items-center lg:w-39 hover:bg-primary-200  active:bg-primary-300">
            See All
            <ArrowRight className="text-white bg-black size-5xl rounded-full p-2" />
          </Button>
        </div>
        <div className="mt-12 flex flex-col lg:flex-row justify-between gap-5">
          {examplePorto.items.map((item) => (
            <div key={item.label} className=" rounded-3xl relative">
              <Image src="/icons/porto/flyer.svg" alt="flyer" width={97} height={29} className="absolute top-6 -left-3"/>
              <div className="w-clamp(22.56rem, 31.54vw, 24.13rem) bg-neutral-200 rounded-3xl p-4">
                <Image
                  src={item.images}
                  alt={item.label}
                  width={300}
                  height={300}
                />
              </div>
              <div className="rounded-3xl px-4 py-3 bg-neutral-200">
                <h3 className="text-md font-bold lg:text-lg">{item.label}</h3>
                <div className="my-4 flex items-center">
                  <div className="h-px flex-1 bg-neutral-300" />
                  <a
                    href="#"
                    aria-label={`Lihat ${examplePorto.title}`}
                    className="grid size-12 shrink-0 place-items-center rounded-full bg-primary-300 text-white"
                  >
                    <ArrowRight className="size-5" strokeWidth={2} />
                  </a>
                </div>
                <p className="text-xs font-medium lg:text-text-md text-neutral-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
