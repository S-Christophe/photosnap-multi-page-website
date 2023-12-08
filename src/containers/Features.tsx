// import components
import FeatureCard from "@/components/FeatureCard";

// import datas
import datas from "../static/Home.json";

export default function Features() {
  return (
    <section className="grid grid-cols-1 gap-14 px-8 py-20 md:gap-20 md:px-[9.75rem] md:py-[7.5rem] lg:grid-cols-3 lg:gap-[1.875rem] lg:px-16 xl:px-24 2xl:px-[10.3125rem]">
      {datas.features.map((item, i) => (
        <FeatureCard key={i} {...item} />
      ))}
    </section>
  );
}
