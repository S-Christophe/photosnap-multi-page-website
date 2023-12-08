"use client";

// import vendors
import Image from "next/image";

// import components
// import Motion from "@/components/Motion";

// import variants
import { fadeIn } from "@/utils/motion";

// import types
import { IFeature } from "@/types/Feature";

export default function FeatureCard({
  name,
  description,
  img,
  width,
  height,
}: IFeature) {
  return (
    <div className="flex flex-col items-center gap-12 text-center">
      <div className="flex h-[4.5rem] items-center">
        <Image src={img} alt={name} width={width} height={height} />
      </div>

      <div>
        <h2 className="mb-4 font-DmSansBold text-lg leading-[1.5625rem]">
          {name}
        </h2>
        <p className="max-w-[45ch]">{description}</p>
      </div>
    </div>
  );
}
