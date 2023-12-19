// import datas
import datas from "../../static/Stories.json";

// import components
import StoryCard from "@/components/StoryCard";

export default function Stories() {
  return (
    <main>
      {/* section Story Card */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {datas.stories.map((item, i) => (
          <StoryCard key={i} {...item} />
        ))}
      </section>
    </main>
  );
}
