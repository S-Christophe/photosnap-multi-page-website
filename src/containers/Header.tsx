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
    <header className="flex flex-row items-center bg-white">
      <Link href="/" className="py-7 pl-6">
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
        className="absolute top-[4.5rem] w-full bg-white px-[2.03125rem] py-8"
      >
        <ul className="font-DmSansBold flex flex-col gap-5 text-center uppercase tracking-[0.15625rem]">
          <li>
            <Link href="#">Stories</Link>
          </li>
          <li>
            <Link href="#">Features</Link>
          </li>
          <li>
            <Link href="#">Pricing</Link>
          </li>
          <li className="relative mt-5 before:absolute before:-top-5 before:left-0 before:w-full before:border">
            <Link
              href="#"
              className="block w-full bg-black py-[0.875rem] text-white"
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
