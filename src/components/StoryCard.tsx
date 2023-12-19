"use client";

// import vendors
import Image from "next/image";
import Link from "next/link";

// import hooks
import useMediaQuery from "@/hooks/useMediaQuery";

// import types
import { IStory } from "@/types/Story";

/**
 * Get Date in format (MM DD YYYY)
 */
function parseDate(date: any) {
  const newDate = new Date(date);
  let year = newDate.getFullYear();
  let month = newDate.toLocaleString("default", { month: "long" });
  let day = newDate.getDate().toString();

  if (day == "1") day = day + "st";
  else if (day == "2" || day == "3") day = day + "nd";
  else day = day + "th";

  return `${month} ${day} ${year}`;
}

export default function StoryCard({
  title,
  author,
  img,
  date,
  showDate,
  imgLg,
}: IStory) {
  const isTablet = useMediaQuery("(min-width: 48rem)");
  const isDesktop = useMediaQuery("(min-width: 80rem)");

  return (
    <div className="relative">
      <div className="relative aspect-[4/4] w-full md:aspect-[7/9] lg:aspect-[8/11]">
        <Image
          src={isDesktop ? imgLg : isTablet ? imgLg : img}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="absolute bottom-10 left-0 right-0 mx-auto w-[calc(100%-64px)] text-white">
        {showDate && <p>{parseDate(date)}</p>}
        <p className="flex font-DmSansBold text-lg leading-[1.5625rem]">
          {title}
        </p>
        <p>by {author}</p>
        <Link
          href="#"
          className="mt-4 grid grid-cols-2 items-center gap-y-5 font-DmSansBold text-xs uppercase leading-[1.5625rem] tracking-[0.125rem] text-white before:col-span-2 before:block before:w-full before:border-t before:opacity-50"
        >
          Read story
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="43"
            height="14"
            className="justify-self-end"
          >
            <g fill="none" fillRule="evenodd" stroke="#fff">
              <path d="M0 7h41.864M35.428 1l6 6-6 6" />
            </g>
          </svg>
        </Link>
      </div>
    </div>
  );
}
