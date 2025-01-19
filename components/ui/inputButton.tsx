import { BsFillSendFill } from "react-icons/bs";
import { Button } from "./button";
import { Input } from "./input";
import { ReactNode } from "react";

interface InputButtonProps {
  children?: ReactNode;
}

const InputButton: React.FC<InputButtonProps> = ({ children }) => {
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
        {children}
      </Button>
    </div>
  );
};

export default InputButton;
