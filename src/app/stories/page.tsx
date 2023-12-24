"use client";

// import components
import StoryCard from "@/components/StoryCard";

// import datas
import datas from "../../static/Stories.json";

// import hooks
import useMediaQuery from "@/hooks/useMediaQuery";

// import vendors
import Link from "next/link";
import Image from "next/image";

/**
 * Get Date in format (MM DD YYYY)
 */
function parseDate(date: any) {
  const newDate = new Date(date);
  let year = newDate.getFullYear();
  let month = newDate.toLocaleString("default", { month: "long" });
  month = month.charAt(0).toUpperCase() + month.slice(1);

  let day = newDate.getDate().toString();

  if (day == "1") day = day + "st";
  else if (day == "2" || day == "3") day = day + "nd";
  else day = day + "th";

  return `${month} ${day} ${year}`;
}

export default function Stories() {
  const isTablet = useMediaQuery("(min-width: 48rem)");
  const isDesktop = useMediaQuery("(min-width: 90rem)");

  return (
    <main>
      <section className="flex min-h-[calc(100vh-4.5rem)] flex-col md:relative">
        <div className="relative aspect-[9/7] w-full md:absolute md:z-10 md:h-full">
          <Image
            src={
              isDesktop
                ? datas.hero.imgLg
                : isTablet
                  ? datas.hero.imgMd
                  : datas.hero.img
            }
            alt={datas.hero.title}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="flex flex-1 flex-col justify-center bg-black px-[1.78125rem] py-[4.5rem] text-white md:z-20 md:bg-transparent md:px-10 lg:px-28">
          <p className="mb-4 font-DmSansBold text-xs uppercase leading-[1.5625rem] tracking-[0.125rem]">
            Last month's featured story
          </p>
          <h1 className="mb-4 max-w-[10ch] font-DmSansBold text-[2rem] uppercase leading-10 tracking-[0.208125rem] md:mb-[1.3125rem] md:text-[2.5rem] md:leading-[3rem] md:tracking-[0.260625rem]">
            {datas.hero.title}
          </h1>
          <p className="mb-6 text-[0.8125rem]">
            <span className="opacity-60">{parseDate(datas.hero.date)}</span> by{" "}
            {datas.hero.author}
          </p>
          <p className="mb-[1.4375rem] max-w-[40ch] opacity-60 md:mb-12">
            {datas.hero.description}
          </p>
          <Link
            href="#"
            className="flex items-center gap-[1.125rem] font-DmSansBold text-xs uppercase leading-[1.5625rem] tracking-[0.125rem]"
          >
            {datas.hero.link}
            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
              <g fill="none" fillRule="evenodd" stroke="#fff">
                <path d="M0 7h41.864M35.428 1l6 6-6 6" />
              </g>
            </svg>
          </Link>
        </div>
      </section>

      {/* section Story Card */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {datas.stories.map((item, i) => (
          <StoryCard key={i} showDate={true} {...item} />
        ))}
      </section>
    </main>
  );
}
