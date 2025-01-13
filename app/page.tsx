import CourseItem from "@/components/CourseItem";
import ProgramsCardCarousel from "@/components/ProgramsCardCarousel";
import HeroSlider from "../components/HeroSlider";

export default function Home() {
  return (
    <div>
      <HeroSlider />
      <section className="container py-8">
        <ProgramsCardCarousel />
      </section>
      <section className="container py-8">
        <CourseItem />
      </section>
    </div>
  );
}
