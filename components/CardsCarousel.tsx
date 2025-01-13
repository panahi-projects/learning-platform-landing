"use client";
import "@/public/styles/embla.scss";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import React, { ReactNode, useEffect, useState } from "react";
import { DotButton, useDotButton } from "./DotButton";

interface CardsCarouselProps {
  title?: string;
  description?: string;
  options?: EmblaOptionsType;
  children: ReactNode;
  onSlideChange?: (index: number) => void; // Custom event callback to notify parent
}

const CardsCarousel: React.FC<CardsCarouselProps> = ({
  title,
  description,
  children,
  onSlideChange,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, startIndex: 1 });
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);
  const [centerindex, setCenterIndex] = useState<number | null>(null);

  useEffect(() => {
    if (emblaApi) {
      // Listen for the slide change event and notify parent via callback
      emblaApi.on("select", () => {
        const newCenterIndex = emblaApi.selectedScrollSnap();
        setCenterIndex(newCenterIndex); // Update centerindex
        if (onSlideChange) {
          onSlideChange(newCenterIndex); // Call the custom event handler if provided
        }
      });
    }
  }, [emblaApi, onSlideChange]);

  // Clone children and pass centerindex to each one
  const clonedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(
        child as React.ReactElement<{ centerindex: number | null }>,
        { centerindex }
      );
    }
    return child;
  });

  return (
    <div>
      <section className="text-center py-8 mb-8">
        <h3 className="lg:text-2xl text-xl font-bold pb-2 fredoka-700 text-indigo-900">
          {title}
        </h3>
        <p className="text-gray-600 mt-2 mx-auto max-w-md text-md">
          {description}
        </p>
      </section>
      <section className="embla lg:px-14 px-0">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">{clonedChildren}</div>
        </div>
        <div className="">
          <div className="embla__dots">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={"embla__dot".concat(
                  index === selectedIndex ? " embla__dot--selected" : ""
                )}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CardsCarousel;
