import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { service } from "@/app/constant/service-process";

export const ServicesProcessSection = () => {
  return (
    <section className="bg-neutral-100 py-10 lg:py-20" id="faq">
      <div className="custom-container">
        <div className="text-center text-neutral-950">
          <h2 className="text-display-sm font-bold lg:text-display-xl">
            {service.title}
          </h2>
          <p className="mt-2 text-text-sm font-regular lg:text-text-md lg:font-medium">
            {service.subtitle}
          </p>
        </div>

        <div className="mt-12 text-neutral-950">
          <Accordion type="single" collapsible defaultValue="1">
            {service.items.map((item, index) => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger>
                  <span className="w-12 shrink-0 text-text-md font-bold lg:w-20">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 pr-4 text-text-md font-bold lg:text-text-lg">
                    {item.title}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pl-12 pr-12 text-neutral-600 lg:pl-20 lg:pr-16">
                  {item.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
