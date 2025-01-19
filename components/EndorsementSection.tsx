import { FiPlay } from "react-icons/fi";
import CardsCarousel, { CardsCarouselProps } from "./CardsCarousel";
import EndorsementCard, { EndorsementCardProps } from "./EndorsementCard";
import Image from "next/image";

const EndorsementSection = () => {
  const carouselOptions: CardsCarouselProps = {
    slides: 1,
  };
  const Cards: EndorsementCardProps[] = [
    {
      id: "1",
      description:
        "Lorem ipsum dolor sit amet consectetur. Senectus tellus eget nunc posuere quis at vitae consequat. At nulla erat nisi nunc. Sit risus sagittis pellentesque eget convallis commodo. Sit pellentesque dolor neque a diam malesuada.",
      authorName: "John Doe",
      authorTitle: "Software Engineer",
      authorImage: "/images/avatar-1.png",
    },
    {
      id: "2",
      description:
        "I am very happy with the course and the support I received from the instructors. I would recommend this course to anyone who wants to learn web development.",
      authorName: "William Smith",
      authorTitle: "Frontend Developer",
      authorImage: "/images/avatar-2.png",
    },
    {
      id: "3",
      description:
        "I would recommend this course to anyone who wants to learn web development. I am very happy with the course and the support I received from the instructors.",
      authorName: "Sarah Johnson",
      authorTitle: "Fullstack Developer",
      authorImage: "/images/avatar-3.webp",
    },
  ];
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1">
      {/* left side */}
      <div className="text-right bg-background3 text-white py-24 px-4 min-h-[400px] lg:order-1 order-2">
        <div className="px-16 mb-16">
          <h3 className="text-indigo-900 lg:text-2xl text-xl font-bold pb-2">
            What our students say
          </h3>
          <p className="text-sm text-secondary">
            Read what our students have to say about their experience with us.
          </p>
        </div>
        <CardsCarousel {...carouselOptions}>
          {Cards.map((card, index) => (
            <div className="embla__slide" key={index}>
              <EndorsementCard {...card} />
            </div>
          ))}
        </CardsCarousel>
      </div>
      {/* right side */}
      <div className="relative h-full w-full min-h-[400px] lg:order-2 order-1">
        {/* Background overlay */}
        <div className="absolute left-0 right-0 top-0 bottom-0 w-full h-full bg-primary/25 z-10"></div>

        {/* Main Content */}
        <div className="relative w-full h-full">
          <Image
            src="/images/image-12.jpg"
            width={400}
            height={400}
            alt="img-12"
            className="object-cover w-full h-full max-h-[600px]"
          />
          {/* Play Button */}
          <div className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center cursor-pointer">
            <div className="group relative">
              <div className="p-6 border-4 border-white rounded-full">
                <FiPlay size={36} color="white" />
              </div>
              {/* Outer Circle Animation */}
              <div className="absolute -inset-8 rounded-full border-2 border-white scale-90 opacity-100 group-hover:animate-zoomInOut"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EndorsementSection;
