// import datas
import datas from "../static/Home.json";

// import components
import HomeCard from "@/components/HomeCard";
import FeatureCard from "@/components/FeatureCard";
import StoryCard from "@/components/StoryCard";

// TODO rename HomeCard to Stories
export default function Home() {
  return (
    <main>
      {/* section Home Card */}
      <section className="">
        {datas.cards.map((item, i) => (
          <HomeCard key={i} index={i} {...item} />
        ))}
      </section>

      {/* section Stories Card */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {datas.stories.map((item, i) => (
          <StoryCard key={i} {...item} />
        ))}
      </section>

      {/* section Features Card */}
      <section className="grid grid-cols-1 gap-14 px-8 py-20 md:gap-20 md:px-[9.75rem] md:py-[7.5rem] lg:grid-cols-3 lg:gap-[1.875rem] lg:px-16 xl:px-24 2xl:px-[10.3125rem]">
        {datas.features.map((item, i) => (
          <FeatureCard key={i} {...item} />
        ))}
      </section>
    </main>
  );
}
