import { comment } from "postcss";
import NewsCard, { NewsCardProps } from "./NewsCard";

const NewsSection = () => {
  const NewsItems: NewsCardProps[] = [
    {
      id: "1",
      title: "Tips to Understand Your Child Better - A Guide for Parents!",
      summary: "",
      image: "/images/news-1.jpg",
      author: "Ken C.J",
      date: "2021-01-01",
      comments: 10,
    },
    {
      id: "2",
      title: "The Importance of Early Childhood Education",
      summary: "",
      image: "/images/news-2.jpg",
      author: "Carl Johnson",
      date: "2024-11-23",
      comments: 5,
    },
    {
      id: "3",
      title: "The Benefits of Learning a Second Language",
      summary: "",
      image: "/images/news-3.jpg",
      author: "David Beckham",
      date: "2025-01-23",
      comments: 8,
    },
  ];
  const description =
    "It is our goal to provide age appropriate opportunity for every child enrolled in EduKid Kids Club enrichment classes.";
  return (
    <div>
      <div className="mb-12">
        <h3 className="lg:text-2xl text-xl font-bold pb-2 fredoka-700 text-indigo-900">
          EduKid News
        </h3>
        <p className="text-gray-600 mt-2 text-md max-w-4xl">{description}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-6 gap-4">
        {NewsItems.map((news, index) => (
          <div key={`news-${news.id}-${index}`}>
            <NewsCard {...news} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
