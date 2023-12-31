"use client";

// import vendors
import Link from "next/link";
import Image from "next/image";

// import hooks
import useMediaQuery from "@/hooks/useMediaQuery";

// import types
import { IHomeArticle } from "@/types/Hero";

export default function HomeCard({
  name,
  description,
  link,
  url,
  img,
  imgMd,
  imgLg,
  ...props
}: IHomeArticle) {
  const isTablet = useMediaQuery("(min-width: 48rem)");
  const isDesktop = useMediaQuery("(min-width: 80rem)");

  return (
    <div
      className={`flex ${
        props.index == 0 && "min-h-[calc(100vh-4.5rem)]"
      } flex-col md:flex-row`}
    >
      <div
        className={`relative aspect-[9/7] w-full md:min-h-[37.5rem] md:w-[36%] xl:w-[58%] ${
          (props.index == 0 || props.index == 2) && "md:order-2"
        }`}
      >
        <Image
          src={isDesktop ? imgLg : isTablet ? imgMd : img}
          alt={name}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      <div
        className={`flex md:w-[64%] xl:w-[42%] ${
          props.index == 0 && "flex-1"
        }  aspect-[9/10] flex-col items-center justify-center px-[1.78125rem] py-[4.5rem] ${
          props.index == 1 || props.index == 2
            ? "bg-white text-black"
            : "bg-black text-white"
        }`}
      >
        <div>
          {props.index == 0 ? (
            <h1 className="mb-4 max-w-[15ch] font-DmSansBold text-[2rem] uppercase leading-10 tracking-[0.208125rem] md:mb-[1.3125rem] md:text-[2.5rem] md:leading-[3rem] md:tracking-[0.260625rem]">
              {name}
            </h1>
          ) : (
            <h2 className="mb-4 max-w-[12ch] font-DmSansBold  text-[2rem] uppercase leading-10 tracking-[0.208125rem] md:mb-[1.3125rem] md:text-[2.5rem] md:leading-[3rem] md:tracking-[0.260625rem]">
              {name}
            </h2>
          )}

          <p className="mb-[1.4375rem] max-w-[40ch] opacity-60 md:mb-12">
            {description}
          </p>
          {link && (
            <Link
              href="#"
              className={` flex items-center ${
                props.index == 0 ? "gap-[1.125rem]" : "gap-[1.625rem]"
              } font-DmSansBold text-xs uppercase leading-[1.5625rem] tracking-[0.125rem]`}
            >
              {link}
              <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
                <g
                  fill="none"
                  fillRule="evenodd"
                  stroke={`${props.index == 0 ? "#fff" : "#000"}`}
                >
                  <path d="M0 7h41.864M35.428 1l6 6-6 6" />
                </g>
              </svg>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
