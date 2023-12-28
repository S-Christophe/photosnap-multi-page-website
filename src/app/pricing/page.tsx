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
      <section className="ml-auto mr-auto max-w-[48rem] px-7 py-16 font-DmSansBold text-xs uppercase leading-[1.5625rem] tracking-[0.125rem] md:px-10 md:py-28">
        {/* Tablet + */}
        <h2 className="mb-16 hidden text-center font-DmSansBold text-[2.5rem] uppercase leading-[3rem] tracking-[0.260625rem] md:block">
          Compare
        </h2>
        <table className="hidden w-full md:table">
          <thead>
            <tr>
              <th className="w-1/4 border-b border-black pb-6 text-left">
                The features
              </th>
              {datas.compare.types.map((type, i) => (
                <th key={i} className="w-1/4 border-b border-black pb-6">
                  {type}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {datas.compare.features.map((feature, i) => (
              <tr key={i}>
                <td className="border-b pb-6 pt-6">{feature.name}</td>
                <td className="border-b pb-6 pt-6">
                  {feature.basic && (
                    <Image
                      src="./assets/images/pricing/desktop/check.svg"
                      alt="check"
                      width={18}
                      height={15}
                      className="ml-auto mr-auto"
                    />
                  )}
                </td>
                <td className="border-b pb-6 pt-6">
                  {feature.pro && (
                    <Image
                      src="./assets/images/pricing/desktop/check.svg"
                      alt="check"
                      width={18}
                      height={15}
                      className="ml-auto mr-auto"
                    />
                  )}
                </td>
                <td className="border-b pb-6 pt-6">
                  {feature.business && (
                    <Image
                      src="./assets/images/pricing/desktop/check.svg"
                      alt="check"
                      width={18}
                      height={15}
                      className="ml-auto mr-auto"
                    />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Mobile */}
        <div className="md:hidden">
          <p className="mb-6 after:mt-6 after:block after:w-full after:border-b after:border-black">
            The features
          </p>
          {datas.compare.features.map((feature, i) => (
            <div
              key={i}
              className="mb-6 after:mt-6 after:block after:w-full after:border-b"
            >
              <p className="mb-[1.03125rem] ">{feature.name}</p>
              <div className="flex justify-between">
                {datas.compare.types.map((type: string, i) => (
                  <div key={i}>
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
        </div>
      </section>
      <section>
        <GetInviteCard {...datas.getInvite} />
      </section>
    </main>
  );
}
