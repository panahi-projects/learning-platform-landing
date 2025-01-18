import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import Image from "next/image";
import { FaFacebookF, FaLinkedin, FaYoutube } from "react-icons/fa6";

export interface TeacherCardProps {
  id: string;
  name: string;
  title?: string;
  imageSrc?: string;
}

const TeacherCard: React.FC<TeacherCardProps> = ({
  id,
  name,
  imageSrc,
  title,
}) => {
  return (
    <Card className="relative group rounded-3xl border-none overflow-hidden p-0">
      <CardContent className="p-0">
        <Image src={imageSrc || ""} width={395} height={610} alt={name} />
      </CardContent>
      <CardFooter className="absolute transition-all duration-500 ease-in-out flex flex-col z-10 p-0 bottom-0 w-full bg-white bg-opacity-80 backdrop-blur-md rounded-3xl">
        <div className="flex flex-col text-center pt-4 pb-2">
          <p className="text-lg text-center w-full font-medium block">{name}</p>
          <span className="block text-xs text-gray-700 pb-2">{title}</span>
        </div>
        <div className="group-hover:h-10 h-0 overflow-hidden transition-all duration-500 ease-in-out bg-primary w-full flex flex-row justify-center gap-4  text-white">
          <span className="py-3 inline-block">
            <FaLinkedin />
          </span>
          <span className="py-3 inline-block">
            <FaFacebookF />
          </span>
          <span className="py-3 inline-block">
            <FaYoutube />
          </span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default TeacherCard;
