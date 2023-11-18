// import datas
import datas from "../static/Home.json";

// import components
import HomeCard from "@/components/HomeCard";

export default function HomeCards() {
  return (
    <section className="">
      {/* // <section> */}
      {datas.cards.map((item, i) => (
        <HomeCard key={i} index={i} {...item} />
      ))}
    </section>
  );
}
