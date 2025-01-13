import React from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

export interface CardProps {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactElement;
  classes?: string;
  isActive?: boolean;
}

const ProgramCard: React.FC<CardProps> = ({
  id,
  title,
  description,
  icon,
  classes,
  isActive,
}) => {
  return (
    <Card
      key={`program-card-${id}`}
      className={`flex flex-col justify-center items-center select-none text-center border-dotted border-2 border-primary text-gray-700 min-h-96 ${classes} ${
        isActive ? "text-white" : ""
      }`}
    >
      <CardHeader className="text-center flex items-center justify-center -mb-2">
        <div
          className={` transition ease-in-out delay-75 w-24 h-24 mb-4 rounded-full flex items-center justify-center ${
            isActive ? "bg-white" : "bg-orange-100/50"
          } `}
        >
          {icon}
        </div>
        <CardTitle className="fredoka-600 text-center text-xl">
          <h3>{title}</h3>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="my-2 text-md px-10 min-h-24">{description}</p>
      </CardContent>
      <CardFooter>
        <Button
          size={"lg"}
          variant={"outline"}
          className={isActive ? `bg-transparent text-white border-white` : ""}
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProgramCard;
