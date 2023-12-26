// import datas
import datas from "../../static/Pricing.json";

// import components
import GetInviteCard from "@/components/GetInviteCard";
import Hero from "@/components/Hero";

// import vendors
import Image from "next/image";

export default function Pricing() {
  return (
    <main>
      <Hero index={0} {...datas.hero} />
      {/* section Compare */}
      <section className="px-7 py-16">
        {/* <tr>
            <th>The features</th>
            {datas.compare.types.map((type, i) => (
              <th>{type}</th>
            ))}
          </tr>
          {datas.compare.features.map((feature, i) => (
            <tr>
              <th>{feature.name}</th>
              <th>
                {feature.basic && (
                  <Image
                    src="./assets/images/pricing/desktop/check.svg"
                    alt="check"
                    width={18}
                    height={15}
                  />
                )}
              </th>
              <th>
                {feature.pro && (
                  <Image
                    src="./assets/images/pricing/desktop/check.svg"
                    alt="check"
                    width={18}
                    height={15}
                  />
                )}
              </th>
              <th>
                {feature.business && (
                  <Image
                    src="./assets/images/pricing/desktop/check.svg"
                    alt="check"
                    width={18}
                    height={15}
                  />
                )}
              </th>
            </tr>
          ))} */}
        <p className="mb-6 font-DmSansBold text-xs uppercase leading-[1.5625rem] tracking-[0.125rem] after:mt-6 after:block after:w-full after:border-b after:border-black">
          The features
        </p>
        {datas.compare.features.map((feature, i) => (
          <div className="mb-6 after:mt-6 after:block after:w-full after:border-b">
            <p className="mb-[1.03125rem] font-DmSansBold text-xs uppercase leading-[1.5625rem] tracking-[0.125rem]">
              {feature.name}
            </p>
            <div className="flex justify-between">
              {datas.compare.types.map((type: string) => (
                <div>
                  <p className="mb-2 font-DmSansBold text-[0.625rem] uppercase leading-[1.5625rem] tracking-[0.104375rem] opacity-50">
                    {type}
                  </p>
                  {feature[type as keyof typeof feature] == true && (
                    <Image
                      src="./assets/images/pricing/desktop/check.svg"
                      alt="check"
                      width={18}
                      height={15}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
      <section>
        <GetInviteCard {...datas.getInvite} />
      </section>
    </main>
  );
}
