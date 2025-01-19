import { BsFillSendFill } from "react-icons/bs";
import { Button } from "./button";
import { Input } from "./input";

const InputButton = () => {
  return (
    <div className="relative">
      <Input
        className="rounded-full text-indigo-900 bg-white w-full pl-8 lg:pr-56 pr-20 text-lg py-8"
        type="email"
        placeholder="Your Email"
      />
      <Button
        size={"xl"}
        className="absolute top-1/2 -translate-y-1/2 right-2 md:px-12 px-4"
        variant={"default"}
      >
        <BsFillSendFill className="text-3xl" />
        <span className="md:text-md text-sm lg:inline-block hidden">
          Subscribe Now
        </span>
      </Button>
    </div>
  );
};

export default InputButton;
