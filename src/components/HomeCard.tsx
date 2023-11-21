// import vendors
import Link from "next/link";
import Image from "next/image";

// import hooks
// import useMediaQuery from "@/hooks/useMediaQuery";

// import types
import { IHomeArticle } from "@/types/HomeArticle";

export default function HomeCard({
  name,
  description,
  link,
  url,
  img,
  imgMd,
  imgLg,
  index,
}: IHomeArticle) {
  //   const isDesktop = useMediaQuery("(min-width: 62rem)");

  return (
    <div
      className={`flex ${index == 0 && "min-h-[calc(100vh-4.5rem)]"} flex-col`}
    >
      <div className="relative aspect-[9/7] w-full">
        <Image src={img} alt={name} fill style={{ objectFit: "cover" }} />
      </div>

      <div
        className={`flex ${
          index == 0 && "flex-1"
        }  aspect-[9/10] flex-col justify-center px-[1.78125rem] py-[4.5rem] ${
          index == 1 || index == 2
            ? "bg-white text-black"
            : "bg-black text-white"
        }`}
      >
        {index == 0 ? (
          <h1 className="mb-4 max-w-[15ch] font-DmSansBold text-[2rem] uppercase leading-10 tracking-[0.208125rem]">
            {name}
          </h1>
        ) : (
          <h2 className="mb-4 max-w-[12ch]  font-DmSansBold text-[2rem] uppercase leading-10 tracking-[0.208125rem]">
            {name}
          </h2>
        )}

        <p className="mb-[1.4375rem] opacity-60">{description}</p>
        <Link
          href="#"
          className={` flex items-center ${
            index == 0 ? "gap-[1.125rem]" : "gap-[1.625rem]"
          } font-DmSansBold text-xs uppercase leading-[1.5625rem] tracking-[0.125rem]`}
        >
          {link}
          <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
            <g
              fill="none"
              fillRule="evenodd"
              stroke={`${index == 0 ? "#fff" : "#000"}`}
            >
              <path d="M0 7h41.864M35.428 1l6 6-6 6" />
            </g>
          </svg>
        </Link>
      </div>
    </div>
  );
}
