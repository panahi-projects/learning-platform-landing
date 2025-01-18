import CourseItem from "@/components/CourseItem";
import ProgramsCardCarousel from "@/components/ProgramsCardCarousel";
import HeroSlider from "../components/HeroSlider";
import ProgramsCardCarousel2 from "@/components/ProgramsCardCarousel2";
import AccordionSection from "@/components/AccordionSection";
import CommunitySection from "@/components/CommunitySection";
import TeachersCarousel from "@/components/TeachersCarousel";
import EndorsementSection from "@/components/EndorsementSection";

export default function Home() {
  return (
    <div>
      <HeroSlider />
      <div>
        <section className="container py-8">
          <ProgramsCardCarousel />
        </section>
      </div>
      <div>
        <section className="container py-8">
          <CourseItem />
        </section>
      </div>
      <div className="bg-background2">
        <section className="container py-8">
          <ProgramsCardCarousel2 />
        </section>
      </div>
      <div>
        <section className="container pt-32 pb-20">
          <AccordionSection />
        </section>
      </div>
      <div>
        <section className="py-8">
          <CommunitySection />
        </section>
      </div>
      <div>
        <section className="container py-8">
          <TeachersCarousel />
        </section>
      </div>
      <div>
        <section className="py-8">
          <EndorsementSection />
        </section>
      </div>
    </div>
  );
}
