"use client";

// import vendors
import Image from "next/image";
import Link from "next/link";

// import hooks
import useMediaQuery from "@/hooks/useMediaQuery";

// import types
import { IGetInvite } from "@/types/GetInvite";

export default function GetInviteCard({
  title,
  img,
  imgMd,
  imgLg,
}: IGetInvite) {
  const isTablet = useMediaQuery("(min-width: 48rem)");
  const isDesktop = useMediaQuery("(min-width: 80rem)");

  return (
    <div className="relative">
      <div className="relative min-h-[18rem] w-full md:min-h-[17.5rem]">
        <Image
          src={isDesktop ? imgLg : isTablet ? imgMd : img}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="absolute top-0 flex h-full w-full flex-col justify-center gap-6 px-8 md:flex-row md:items-center md:justify-normal md:gap-0 md:px-10 md:py-[4.25rem] lg:px-[10.5rem]">
        <p className="max-w-[15ch] font-DmSansBold text-[2rem] uppercase leading-10 tracking-[0.208125rem] text-white md:text-[2.5rem] md:leading-[3rem] md:tracking-[0.260625rem]">
          {title}
        </p>
        <div className="flex items-center gap-4 md:ml-auto">
          <p className="font-DmSansBold text-xs uppercase leading-[1.5625rem] tracking-[0.125rem] text-white">
            Get an invite
          </p>
          <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
            <g fill="none" fillRule="evenodd" stroke="#fff">
              <path d="M0 7h41.864M35.428 1l6 6-6 6" />
            </g>
          </svg>
        </div>
      </div>
      <Link href="#" className="absolute top-0 h-full w-full"></Link>
    </div>
  );
}
