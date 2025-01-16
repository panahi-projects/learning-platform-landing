"use client";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";

const AccordionSection = () => {
  const collapsibleItems = [
    {
      id: "1",
      title: "To round out our weekend of celebrations, we are holding",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quidem maxime tempora a, praesentium assumenda cumque quam natus, ipsam aliquid explicabo nam voluptatem qui sed iusto! Sed ea possimus distinctio fuga pariatur cupiditate earum soluta eum ipsam, iusto esse suscipit ratione veniam neque? Dolore nam ipsum eos, odio natus veritatis?",
      isOpenDefault: true,
    },
    {
      id: "2",
      title: "To round out our weekend of celebrations, we are holding",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias aliquid, ad vel ut corporis minima saepe ipsam veritatis beatae excepturi similique? Molestias ratione nobis veritatis repellat cupiditate excepturi voluptatem dicta.",
      isOpenDefault: false,
    },
    {
      id: "3",
      title: "To round out our weekend of celebrations, we are holding",
      description:
        "Lorem ipsum dolor sit amet consectetur. Senectus tellus eget nunc posuere quis at vitae consequat.",
      isOpenDefault: false,
    },
  ];
  const [activeItem, setActiveItem] = useState<string | null>("1");
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="order-2 lg:order-1">
          <h3 className="lg:text-2xl text-xl font-bold fredoka-700 text-indigo-900 pb-8">
            Know more about EduKid
          </h3>
          <Accordion
            type="single"
            collapsible
            onValueChange={(value) => setActiveItem(value || null)}
            className="w-full"
            defaultValue="1"
          >
            {collapsibleItems.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="border border-gray-300 mb-2 rounded-xl overflow-hidden"
              >
                <AccordionTrigger className="AccordionTrigger w-full rounded-xl p-4 flex justify-between">
                  <span>{item.title}</span>
                  {activeItem === item.id ? (
                    <AiOutlineMinusCircle size={24} />
                  ) : (
                    <AiOutlinePlusCircle size={24} />
                  )}
                </AccordionTrigger>
                <AccordionContent className="AccordionContent p-8">
                  {item.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="order-1 lg:order-2 text-center w-full flex items-center justify-center p-4">
          <Image
            src="/images/image-6.jpg"
            loading="lazy"
            alt="image-6"
            width={560}
            height={560}
          />
        </div>
      </div>
    </div>
  );
};

export default AccordionSection;
