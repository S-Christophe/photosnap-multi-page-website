// import datas
import datas from "../../static/Features.json";

// import components
import FeatureCard from "@/components/FeatureCard";
import GetInviteCard from "@/components/GetInviteCard";
import HomeCard from "@/components/HomeCard";

export default function Features() {
  return (
    <main>
      <HomeCard index={0} {...datas.hero} />
      {/* section Feature Card */}
      <section className="grid grid-cols-1 gap-14 px-8 py-20 md:grid-cols-2 md:gap-3 md:gap-y-20 md:px-[2.4375rem] md:py-28 lg:grid-cols-3 lg:gap-[1.875rem] lg:gap-y-[6.5rem] lg:px-16 lg:py-40 xl:px-24 2xl:px-[10.3125rem]">
        {datas.features.map((item, i) => (
          <FeatureCard key={i} {...item} />
        ))}
      </section>
      <section>
        <GetInviteCard {...datas.getInvite} />
      </section>
    </main>
  );
}
