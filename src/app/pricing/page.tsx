// import datas
import datas from "../../static/Pricing.json";

// import components
import GetInviteCard from "@/components/GetInviteCard";
import Hero from "@/components/Hero";

export default function Pricing() {
  return (
    <main>
      <Hero index={0} {...datas.hero} />
      <section>
        <GetInviteCard {...datas.getInvite} />
      </section>
    </main>
  );
}
