import React from "react";
import { Button } from "./ui/button";

const CommunitySection = () => {
  return (
    <div>
      <div
        className="relative bg-cover bg-center"
        style={{ backgroundImage: "url('/images/image-7.jpg')" }}
      >
        <div className="absolute inset-0 bg-sky-400 bg-opacity-75"></div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white py-32 px-4 max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Join Our Community</h1>
          <p className="text-lg mb-6">
            Lorem ipsum dolor sit amet consectetur. Senectus tellus eget nunc
            posuere quis at vitae consequat. At nulla erat nisi nunc. Sit risus
            sagittis pellentesque eget convallis commodo. Sit pellentesque dolor
            neque a diam malesuada.
          </p>
          <Button size={"xl"} variant={"default"}>
            Join Now
          </Button>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-primary h-2 w-3/4"></div>
      </div>
    </div>
  );
};

export default CommunitySection;
