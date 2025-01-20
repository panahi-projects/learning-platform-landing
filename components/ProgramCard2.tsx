import Image from "next/image";
import { CardProps } from "./ProgramCard";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

const ProgramCard2: React.FC<CardProps> = ({
  id,
  imageSrc,
  title,
  description,
  classes,
  isActive,
  details,
}) => {
  return (
    <Card
      key={`program-card-${id}`}
      className={`flex flex-col justify-center items-center select-none text-left rounded-3xl border-none text-gray-700 min-h-96 ${classes}`}
    >
      <CardHeader className="-mb-2 w-full">
        <Image src={imageSrc || ""} alt={title} width={460} height={360} />
        <CardTitle className="text-left text-xl w-full pt-2">
          <h3>{title}</h3>
        </CardTitle>
      </CardHeader>
      <CardContent className="w-full">
        <CardDescription>
          <p className="my-1 text-md min-h-24 w-full">{description}</p>
        </CardDescription>
      </CardContent>
      <CardFooter className="w-full">
        <div
          className={`grid grid-cols-3 text-white p-4 w-full rounded-2xl font-bold ${
            isActive ? "bg-primary" : "bg-background3"
          }`}
        >
          <div className="text-center px-4 flex flex-col">
            <span className="whitespace-break-spaces  inline-block px-2">
              {details?.age}
            </span>
            <span className="text-xs font-thin">age</span>
          </div>
          <div
            className={`text-center px-4 flex flex-col relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[1px] before:h-10 ${
              isActive ? "before:bg-orange-300" : "before:bg-sky-300"
            }`}
          >
            <span className="whitespace-break-spaces inline-block px-2">
              {details?.days}
            </span>
            <span className="text-xs font-thin">weekly</span>
          </div>
          <div
            className={`text-center px-4 flex flex-col relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[1px] before:h-10 ${
              isActive ? "before:bg-orange-300" : "before:bg-sky-300"
            }`}
          >
            <span className="whitespace-break-spaces inline-block px-2">
              {details?.hours}
            </span>
            <span className="text-xs font-thin">period</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProgramCard2;
