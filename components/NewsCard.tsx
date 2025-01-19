import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { FaCommentDots, FaUser } from "react-icons/fa6";
import { MdOutlineDateRange } from "react-icons/md";

export interface NewsCardProps {
  id: string;
  title: string;
  summary?: string;
  image: string;
  date: string;
  comments?: number;
  author?: string;
}
const NewsCard: React.FC<NewsCardProps> = ({
  id,
  title,
  date,
  image,
  comments,
  author,
}) => {
  return (
    <Card className="p-0 rounded-3xl">
      <CardHeader className="p-0">
        <Image src={image} width={530} height={390} alt={title} />
      </CardHeader>
      <CardContent className="lg:px-12 px-4 pb-12">
        <div className="flex justify-between items-center my-4">
          <span className="flex items-center space-x-2">
            <FaUser className="text-emerald-300" />
            <span className="text-gray-500 text-xs truncate lg:max-w-28 md:max-w-16 max-w-24">
              {author}
            </span>
          </span>
          <span className="flex items-center space-x-2">
            <MdOutlineDateRange className="text-emerald-300" />
            <span className="text-gray-500 text-xs">{date}</span>
          </span>
        </div>
        <h3 className="text-gray-900 font-semibold text-2xl pt-2 line-clamp-3">
          {title}
        </h3>
      </CardContent>
      <CardFooter className="lg:px-12 px-4">
        <div>
          <span className="flex items-center space-x-2">
            <FaCommentDots className="text-emerald-300" />
            <span className="text-gray-500 text-xs">{comments} Comments</span>
          </span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default NewsCard;
