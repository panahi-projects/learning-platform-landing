import Image from "next/image";
import { IoMdPlay } from "react-icons/io";
import { IoChevronForward } from "react-icons/io5";
import { Button } from "./ui/button";

const CourseItem = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:p-12">
      {/* Left Side: Image */}
      <div className="w-full lg:w-1/2 flex justify-center max-h-[450px]">
        <Image
          src="/images/course-image.jfif" // Replace with your actual image path
          alt="Program Illustration"
          width={400} // Adjust width and height as needed
          height={400}
          className="rounded-3xl lg:max-w-[500px] w-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Right Side: Text and Details */}
      <div className="w-full lg:w-1/2 flex flex-col items-start">
        <h3 className="lg:text-2xl text-xl font-bold text-indigo-900 mb-4">
          Our Courses
        </h3>
        <p className="text-gray-700 text-sm lg:text-base mb-6">
          Being brave isn't always a grand gesture; sometimes it just means
          having a go, attempting that difficult question, offering an answer in
          a lesson when you're simply really trying new.
        </p>

        {/* Statistics */}
        <div className="grid grid-cols-3 gap-4 mb-6 bg-background3 text-white py-6 px-4 rounded-3xl">
          {[
            { number: "14+", label: "Years of experience" },
            { number: "100+", label: "Students each year" },
            { number: "8+", label: "Award winning" },
          ].map((item, index) => (
            <div
              key={index}
              className="text-center p-2 first:border-none border-l-2 border-white"
            >
              <p className="text-lg lg:text-xl font-bold">{item.number}</p>
              <p className="text-xs lg:text-sm">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Beliefs */}
        <ul className="list-none list-inside text-gray-700 mb-6 space-y-3">
          {[
            "We believe every child is intelligent, so we care.",
            "Teachers make a difference in your child.",
          ].map((text, index) => (
            <li key={index} className="flex items-center gap-2">
              {/* Chevron Circle */}
              <span className="inline-block mr-1 bg-emerald-100 rounded-full p-1">
                <IoChevronForward size={18} className="text-emerald-600" />
              </span>

              {/* Text */}
              <p className="text-gray-700 text-sm lg:text-base">{text}</p>
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="flex items-center md:flex-row flex-col gap-4 md:w-auto w-full">
          <Button size={"xl"} variant={"default"} className="w-full">
            View More
          </Button>
          <Button
            variant={"link"}
            className="flex items-center gap-2 px-4 w-full"
          >
            <div className="p-1 border-primary border-2 rounded-full">
              <div className="p-2 border-primary border-2 rounded-full text-primary">
                <IoMdPlay />
              </div>
            </div>
            <span>Promotional Video</span>
          </Button>
          {/* <button className="flex items-center gap-2 px-4 py-3 bg-transparent border border-yellow-400 text-yellow-400 rounded-md shadow hover:bg-yellow-400 hover:text-white transition">
            <IoMdPlay />
            <span>Promotional Video</span>
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default CourseItem;
