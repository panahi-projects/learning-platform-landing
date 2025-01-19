"use client";
import { useState } from "react";
import CardsCarousel from "./CardsCarousel";
import TeacherCard from "./TeacherCard";

const TeachersCarousel = () => {
  const cards = [
    {
      id: "1",
      imageSrc: "/images/image-8.png",
      name: "Steven Strange",
      title: "Teacher",
    },
    {
      id: "2",
      imageSrc: "/images/image-9.png",
      name: "Diana Prince",
      title: "Teacher",
    },
    {
      id: "3",
      imageSrc: "/images/image-10.png",
      name: "Edith Nekesa",
      title: "Teacher",
    },
    {
      id: "4",
      imageSrc: "/images/image-11.png",
      name: "Peter Parker",
      title: "Teacher",
    },
  ];
  return (
    <CardsCarousel
      title="Our Best Teachers"
      description="Lorem ipsum dolor sit amet consectetur. Senectus tellus eget nunc posuere quis at vitae consequat. At nulla erat nisi nunc. Sit risus sagittis pellentesque eget convallis commodo. Sit pellentesque dolor neque a diam malesuada."
      slides={4}
    >
      {cards.map((card, index) => (
        <div className="embla__slide" key={`teacher-${card.id}`}>
          <TeacherCard {...card} />
        </div>
      ))}
    </CardsCarousel>
  );
};

export default TeachersCarousel;
