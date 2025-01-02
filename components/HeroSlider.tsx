import { Button } from "@/components/ui/button";
import WavyLine from "./WavyLine";

const HeroSlider = () => {
  return (
    <div className="relative bg-gray-100">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/images/header-banner.jpg')", // Replace with your image path
        }}
      ></div>
      <div className="absolute inset-0 bg-gray-700 bg-opacity-10"></div>
      <div className="wavy-line-container">
        <WavyLine />
      </div>
      {/* Content */}
      <div className="relative fredoka-500 container mx-auto flex flex-col justify-center py-20 px-4 sm:px-8 lg:py-32">
        <div className="text-white text-center lg:text-left">
          <h4 className="text-blue-300 text-sm sm:text-lg uppercase">
            Kindergarten Program
          </h4>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-orange-400 leading-snug lg:w-1/3 w-full mb-10">
            Best Children’s Education Curriculum
          </h1>
          <p className="text-gray-400 text-xs sm:text-sm mb-4 underline">
            Admission Open 20-24 April
          </p>
          <Button size={"xl"} variant={"default"}>
            Apply Now
          </Button>
          {/* <button className="bg-orange-500 text-white py-3 px-6 rounded-md hover:bg-orange-600">
            Apply Now
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
