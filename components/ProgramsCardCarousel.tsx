"use client";
import React, { useState } from "react";
import CardsCarousel from "./CardsCarousel";
import { FaMusic, FaPaintbrush } from "react-icons/fa6";
import { FaFootballBall, FaPaintBrush } from "react-icons/fa";
import ProgramCard, { CardProps } from "./ProgramCard";

const ProgramsCardCarousel = () => {
  const cards: CardProps[] = [
    {
      id: "1",
      title: "Sport Class",
      description:
        "Each day at EduKid is a celebration. We celebrate all sports!",
      icon: <FaFootballBall size={38} className="text-primary" />,
    },
    {
      id: "2",
      title: "Music Class",
      description:
        "Musical indoor and outdoor activities that cater to all domains development!",
      icon: <FaMusic size={38} className="text-primary" />,
    },
    {
      id: "3",
      title: "Drawing Class",
      description:
        "Fun Arts and Crafts projects for the children to work on together!",
      icon: <FaPaintbrush size={38} className="text-primary" />,
    },
    {
      id: "4",
      title: "Sport Class",
      description:
        "Each day at EduKid is a celebration. We celebrate all sports!",
      icon: <FaFootballBall size={38} className="text-primary" />,
    },
    {
      id: "5",
      title: "Music Class",
      description:
        "Musical indoor and outdoor activities that cater to all domains development!",
      icon: <FaMusic size={38} className="text-primary" />,
    },
    {
      id: "6",
      title: "Drawing Class",
      description:
        "Fun Arts and Crafts projects for the children to work on together!",
      icon: <FaPaintBrush size={38} className="text-primary" />,
    },
    {
      id: "7",
      title: "Drawing Class",
      description:
        "Fun Arts and Crafts projects for the children to work on together!",
      icon: <FaPaintbrush size={38} className="text-primary" />,
    },
  ];
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(1);

  const handleSlideChange = (index: number) => {
    setCurrentSlideIndex(index);
  };
  return (
    <CardsCarousel
      title="Our Programs"
      description="Our multi-level kindergarten cater to the age groups 2-5 years with a curriculum focussing children."
      onSlideChange={handleSlideChange}
    >
      {cards.map((card, index) => (
        <div className="embla__slide" key={card.id}>
          <ProgramCard
            {...card}
            classes={[
              "transition ease-in-out delay-75",
              currentSlideIndex === index ? "bg-background3" : "",
            ].join(" ")}
            isActive={currentSlideIndex === index}
          />
        </div>
      ))}
    </CardsCarousel>
  );
};

export default ProgramsCardCarousel;
