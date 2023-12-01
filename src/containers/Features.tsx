// import components
import FeatureCard from "@/components/FeatureCard";

// import datas
import datas from "../static/Home.json";

export default function Features() {
  return (
    <section className="grid grid-cols-1 gap-14 px-8 py-20 md:gap-20 md:px-[7.5rem] md:py-[9.75rem]">
      {datas.features.map((item, i) => (
        <FeatureCard key={i} {...item} />
      ))}
    </section>
  );
}
