import Image from "next/image";
import { contactMe } from "@/app/constant/contact-data";

export const ContactSection = () => {
  return (
    <section className="py-10 lg:py-30" id="contact">
      <div className="custom-container flex gap-12">
        <div className="max-w-140">
          <h2 className="text-display-xl font-bold">{contactMe.title}</h2>
          <p className="text-text-md font-medium">{contactMe.subtitle}</p>
          <div className="flex gap-5 mt-10 max-w-116">
            {contactMe.images.map((img) => (
              <div key={img.id}>
                <Image
                  src={img.images}
                  alt="Portofolio"
                  width={142}
                  height={142}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="w-153 drop-shadow-2xl shadow-amber-600 relative overflow-visible">
          <div className="absolute -translate-x-1/2 left-1/2 -top-39 w-48">
            <Image
              src="/icons/form-ava.svg"
              width={192}
              height={170}
              alt="ava-logo"
              className="object-cover"
            />
          </div>

          <form action="" className="flex flex-col gap-5 p-8 rounded-4xl">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="" className="text-neutral-950 text-sm font-bold">
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                placeholder="Enter your Name"
                className="border border-neutral-300 rounded-xl p-4 placeholder:text-neutral-600 placeholder:text-text-md placeholder:font-medium"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="" className="text-neutral-950 text-sm font-bold">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                placeholder="Enter your Email"
                className="border border-neutral-300 rounded-xl p-4 placeholder:text-neutral-600 placeholder:text-text-md placeholder:font-medium"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="" className="text-neutral-950 text-sm font-bold">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={5}
                placeholder="Enter your message"
                className="border border-neutral-300 rounded-xl p-4"
              ></textarea>
            </div>
            <button className="bg-primary-300 text-white h-12 rounded-full text-text-sm font-bold ">
              {" "}
              Let`s Talk
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
