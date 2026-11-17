"use client";

import { navigationData } from "@/app/constant/navigation-data";
import Link from "next/link";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { motion } from "framer-motion";

const rise = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: "easeOut" as const },
});

const Navbar = () => {
  return (
    <motion.header
      {...rise(0.3)}
      className="fixed inset-x-4 top-4 z-50 mx-auto rounded-full  bg-black/20 backdrop-blur lg:inset-x-0 lg:w-138.5"
    >
      <nav className="flex h-12 w-full items-center justify-between px-5 lg:justify-center lg:p-5">
        {/* desktop menu */}
        <ul className="hidden gap-10.5 text-white lg:flex">
          {navigationData.map((data) => (
            <li
              key={data.label}
              className="text-text-md font-medium hover:text-primary-200"
            >
              <Link href={data.href}>{data.label}</Link>
            </li>
          ))}
        </ul>

        {/* mobile: nama + hamburger */}
        <Sheet>
          <SheetTrigger asChild>
            <button
              type="button"
              aria-label="Buka menu"
              className="flex w-full items-center justify-between text-white lg:hidden"
            >
              <span className="text-xl font-bold">Reno Renaldo</span>
              <Menu className="size-6" />
            </button>
          </SheetTrigger>

          <SheetContent>
            <SheetTitle className="sr-only">Menu navigasi</SheetTitle>
            <nav className="mt-16 px-4">
              <ul className="flex flex-col gap-4">
                {navigationData.map((data) => (
                  <li key={data.label}>
                    <SheetClose asChild>
                      <Link
                        href={data.href}
                        className="text-lg font-medium hover:text-primary-200"
                      >
                        {data.label}
                      </Link>
                    </SheetClose>
                  </li>
                ))}
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </motion.header>
  );
};

export default Navbar;
