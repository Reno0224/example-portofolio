"use client";

import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { animate, motion, useInView } from "framer-motion";
import { ArrowRight, Mouse } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { skillTech } from "@/app/constant/hero-data";

const stats = [
  { value: 2, suffix: "+", label: "Years Experience" },
  { value: 99, suffix: "%", label: "Client Satisfaction" },
  { value: 3, suffix: "", label: "Project Delivered" },
  { value: 50, suffix: "", label: "Clients Worldwide" },
];

function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

const rise = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: "easeOut" as const },
});

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen overflow-x-clip bg-cover bg-center"
      style={{ backgroundImage: "url('/icons/hero-icons/bg-images.png')" }}
    >
      <div className="custom-container flex flex-col pt-22 lg:flex-row lg:gap-0 lg:pt-26.75">
        {/* ===== KIRI ===== */}
        <div className="flex min-w-0 flex-col gap-10 lg:flex-[273] lg:justify-between lg:pb-48">
          <motion.div {...rise(0.5)} className="hidden lg:block">
            <ul className="flex w-28 flex-col gap-5.5 rounded-full border border-primary-300 p-5.5">
              {skillTech.map((tech) => (
                <li
                  key={tech.id}
                  className="border-2 border-primary-300 rounded-full"
                >
                  <Image
                    src={tech.icons}
                    width={50}
                    height={50}
                    alt={tech.name}
                  />
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            {...rise(0.4)}
            className="relative z-20 flex w-full flex-col gap-3.5 lg:w-112 "
          >
            <Icon
              icon="codicon:mic-filled"
              className="size-12 rounded-full border border-primary-300 p-2 text-white lg:size-15 lg:p-2.5"
            />
            <p className="text-text-md font-bold text-white md:text-xl">
              Hi, I&apos;m Reno Renaldo
            </p>
            <p className="text-sm font-medium text-white md:text-text-lg">
              a frontend developer passionate about creating seamless digital
              experiences that are fast, responsive, and user-friendly.
            </p>
          </motion.div>
        </div>

        {/* ===== TENGAH ===== */}

        <motion.div
          {...rise(0.5)}
          className="relative isolate min-w-0 order-2 lg:order-1 lg:flex-[654] lg:pt-30"
        >
          <div className="relative flex flex-col items-center">
            <div className="flex items-center gap-2 rounded-full border border-primary-300 bg-primary-400 px-4 py-1">
              <span className="h-2 w-2 rounded-full bg-[#E26190] lg:h-4 lg:w-4" />
              <span className="text-xs font-semibold text-white lg:text-text-md">
                Available for Hire
              </span>
            </div>

            <div className="relative mt-2">
              <p className="absolute -left-4 -top-22 z-10 -rotate-12 font-bonheur-royale text-[4rem] text-white lg:-left-20 lg:text-[7rem]">
                Junior
              </p>

              <h1 className="text-center font-anton uppercase leading-[0.95] text-secondary-100">
                <span className="block text-[6.4rem] lg:text-[11.5rem]">
                  frontend
                </span>
                <span className="relative block text-[5.8rem] lg:text-[10.5rem]">
                  developer
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 z-20 text-transparent [-webkit-text-stroke:1px_#f3b64c]"
                  >
                    developer
                  </span>
                </span>
              </h1>
            </div>
          </div>

          <div
            className="relative z-10 -mt-44 lg:-mt-83"
            style={{ height: "clamp(28.25rem, 60.05vw, 45.94rem)" }}
          >
            <Image
              src="/icons/hero-icons/ava.png"
              alt="Reno Renaldo"
              fill
              priority
              className="object-contain object-bottom"
            />
            <span className="absolute bottom-10 left-1/2 flex -translate-x-1/2 items-center gap-2 text-text-md font-semibold text-white">
              Scroll Down <Mouse className="size-6" strokeWidth={1.5} />
            </span>
          </div>
        </motion.div>

        {/* ===== KANAN ===== */}
        <div className="lg:flex-[273] order-1 lg:order-2 lg:pt-30">
          <div className="w-full lg:ml-auto lg:w-55.5">
            <div className="grid grid-cols-2 gap-y-6 lg:grid-cols-1 lg:gap-y-0">
              {stats.map(({ value, suffix, label }, i) => (
                <motion.div
                  key={label}
                  {...rise(0.35 + i * 0.08)}
                  className="flex flex-col gap-1 text-white max-lg:even:border-l max-lg:even:border-white/15 max-lg:even:pl-12 lg:border-b lg:border-white/15 lg:py-6 lg:first:pt-0 lg:last:border-b-0"
                >
                  <div className="order-1 text-4xl/tight font-semibold lg:text-display-2xl">
                    <CountUp to={value} suffix={suffix} />
                  </div>
                  <div className="order-2 text-[13px] font-medium lg:text-text-md">
                    {label}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div {...rise(0.8)} className="mt-5">
              <Button
                asChild
                className="flex h-12 w-full justify-between rounded-full bg-secondary-100 py-2 pl-4 text-sm font-semibold text-neutral-950 hover:bg-amber-300 active:bg-amber-400"
              >
                <Link href="#contact">
                  Contact Me
                  <ArrowRight
                    className="size-8 rounded-full bg-black p-1 text-white"
                    strokeWidth={2}
                  />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
