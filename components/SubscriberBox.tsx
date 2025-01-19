import { BsFillSendFill } from "react-icons/bs";
import InputButton from "./ui/inputButton";

const SubscriberBox = () => {
  return (
    <div className="relative">
      {/* main box */}
      <div className="container z-10 relative pb-12">
        <div
          className="relative bg-cover bg-center text-center py-32 px-8 rounded-3xl text-white"
          style={{ backgroundImage: "url('/images/image-13.jpg')" }}
        >
          {/* overlay */}
          <div className="bg-background3/65 z-0 absolute left-0 right-0 top-0 bottom-0 w-full h-full rounded-3xl"></div>

          {/* text content */}
          <div className="relative z-10">
            <h3 className="lg:text-3xl text-2xl font-bold pb-2">
              Join Our Newsletter
            </h3>
            <p className="mb-12">
              Subscribe to our newsletter to get updated on our latest and new
              activities
            </p>

            {/* form */}
            <div className="mx-auto max-w-2xl">
              <InputButton>
                <BsFillSendFill size={64} className="text-6xl" />
                <span className="md:text-md text-sm lg:inline-block hidden">
                  Subscribe Now
                </span>
              </InputButton>
            </div>
          </div>
        </div>
      </div>

      {/* lower background */}
      <div className="absolute z-0 bottom-0 w-full bg-background2 h-1/2 pb-16"></div>
    </div>
  );
};

export default SubscriberBox;
