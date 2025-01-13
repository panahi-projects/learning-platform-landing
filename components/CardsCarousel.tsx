"use client";
import { FaFootballBall, FaPaintBrush } from "react-icons/fa";
import { FaMusic } from "react-icons/fa6";
import useEmblaCarousel from "embla-carousel-react";
import React, { ReactNode, useCallback, useEffect, useState } from "react";
import {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType,
} from "embla-carousel";
import "@/public/styles/embla.scss";
import ProgramCard, { CardProps } from "./ProgramCard";
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
  options,
  children,
  onSlideChange,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, startIndex: 1 });
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);
  const [centerindex, setCenterIndex] = useState<number | null>(null);
  const [itemsInViewport, setItemsInViewport] = useState<number[]>([]);

  const isConsecutive = (numbers: number[]): boolean => {
    if (numbers.length <= 1) return true; // An empty or single-element array is considered consecutive

    // Check if each number is exactly 1 greater than the previous number
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] !== numbers[i - 1] + 1) {
        return false;
      }
    }

    return true;
  };

  const logSlidesInView = useCallback((emblaApi: EmblaCarouselType) => {
    const slidesInViewport = emblaApi?.slidesInView();
    setItemsInViewport(slidesInViewport || []);
  }, []);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("slidesInView", logSlidesInView);

      // Listen for the slide change event and notify parent via callback
      emblaApi.on("select", () => {
        const newCenterIndex = emblaApi.selectedScrollSnap();
        setCenterIndex(newCenterIndex); // Update centerIndex
        if (onSlideChange) {
          onSlideChange(newCenterIndex); // Call the custom event handler if provided
        }
      });
    }
  }, [emblaApi, logSlidesInView, onSlideChange]);
  useEffect(() => {
    if (itemsInViewport) {
      const isNormal = isConsecutive(itemsInViewport || []);

      if (isNormal) {
        setCenterIndex(itemsInViewport[1] || 0);
      } else {
        if (itemsInViewport[1] === 1) {
          setCenterIndex(0);
        } else {
          setCenterIndex(itemsInViewport[1] + 1);
        }
      }
    }
  }, [itemsInViewport]);

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
