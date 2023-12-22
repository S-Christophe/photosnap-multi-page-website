"use client";
// import vendors
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// import variants
import { animateMenu } from "@/utils/motion";

export default function Header() {
  const [isActive, setActive] = useState(false);

  return (
    <header className="flex flex-row items-center">
      <Link
        href="/"
        className="my-7 ml-6 md:ml-[2.46875rem] lg:ml-[10.3125rem]"
      >
        <Image
          src="./assets/images/shared/desktop/logo.svg"
          alt="Photosnap"
          width={176}
          height={16}
        />
      </Link>
      <motion.nav
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
        variants={animateMenu}
        className="absolute top-[4.5rem] z-10 w-full bg-white px-[2.03125rem] py-8 md:static md:mr-[2.46875rem] md:!block md:w-auto md:flex-grow md:px-0 md:py-0 md:!opacity-100 lg:mr-[10.3125rem]"
      >
        <ul className="flex flex-col gap-5 text-center font-DmSansBold uppercase tracking-[0.15625rem] md:flex-row md:items-center md:gap-0 md:text-[0.75rem] md:tracking-[0.125rem]">
          <li className="md:ml-auto">
            <Link href="/stories">Stories</Link>
          </li>
          <li className="md:ml-[2.3125rem]">
            <Link href="/features">Features</Link>
          </li>
          <li className="md:ml-[2.3125rem]">
            <Link href="/pricing">Pricing</Link>
          </li>
          <li className="relative mt-5 before:absolute before:-top-5 before:left-0 before:w-full before:border md:ml-auto md:mt-0 md:before:hidden">
            <Link
              href="#"
              className="block w-full bg-black py-[0.875rem] text-white md:px-6 md:py-3"
            >
              Get an invite
            </Link>
          </li>
        </ul>
      </motion.nav>
      <div
        className="ml-auto pr-6 md:hidden"
        onClick={() => setActive((current) => !current)}
      >
        <Image
          src="./assets/images/shared/mobile/menu.svg"
          alt="Menu"
          width={20}
          height={6}
        />
      </div>
    </header>
  );
}
