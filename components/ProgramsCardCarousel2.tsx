"use client";
import { useState } from "react";
import CardsCarousel from "./CardsCarousel";
import { CardProps } from "./ProgramCard";
import ProgramCard2 from "./ProgramCard2";

const ProgramsCardCarousel2 = () => {
  const cards: CardProps[] = [
    {
      id: "1",
      imageSrc: "/images/Rectangle 88.jpg",
      title: "Settling",
      description:
        "To round out our weekend of celebrations, we are holding our reunion.",
      details: {
        age: "4-5 yrs",
        days: "3 days",
        hours: "3.30 hrs",
      },
    },
    {
      id: "2",
      imageSrc: "/images/Rectangle 89.jpg",
      title: "Play Group",
      description:
        "We will be magically transforming the School’s Sports Center into a full game area.",
      details: {
        age: "4-5 yrs",
        days: "3 days",
        hours: "3.30 hrs",
      },
    },
    {
      id: "3",
      imageSrc: "/images/Rectangle 90.jpg",
      title: "Pre-Nursery",
      description:
        "EduKid is thrilled to teach pre-nursery courses to better the lives of our children.",
      details: {
        age: "5-7 yrs",
        days: "3 days",
        hours: "3.30 hrs",
      },
    },
    {
      id: "4",
      imageSrc: "/images/Rectangle 89.jpg",
      title: "Pre-Nursery",
      description:
        "EduKid is thrilled to teach pre-nursery courses to better the lives of our children.",
      details: {
        age: "3-5 yrs",
        days: "3 days",
        hours: "3.30 hrs",
      },
    },
  ];
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(1);

  const handleSlideChange = (index: number) => {
    setCurrentSlideIndex(index);
  };
  return (
    <CardsCarousel
      title="Our Programs Plan"
      description="EduKid opened its doors in 1998 with a unique vision to provide students with a globally focused study of arts."
      onSlideChange={handleSlideChange}
    >
      {cards.map((card, index) => (
        <div className="embla__slide" key={card.id}>
          <ProgramCard2
            {...card}
            classes="transition ease-in-out delay-75"
            isActive={currentSlideIndex === index}
          />
        </div>
      ))}
    </CardsCarousel>
  );
};

export default ProgramsCardCarousel2;
