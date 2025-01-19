import Image from "next/image";
import React from "react";

export interface EndorsementCardProps {
  id: string;
  description: string;
  authorName: string;
  authorTitle?: string;
  authorImage?: string;
}
const EndorsementCard: React.FC<EndorsementCardProps> = ({
  id,
  description,
  authorName,
  authorTitle,
  authorImage,
}) => {
  return (
    <div data-id={id} className="py-2 px-2">
      <p className="pb-8">{description}</p>
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center">
          <Image
            src={authorImage || "/images/avatar-1.png"}
            width={50}
            height={50}
            alt={authorName}
            className="rounded-full"
          />
          <div className="ml-4 text-left font-semibold text-sm">
            <h3>{authorName}</h3>
            <p>{authorTitle}</p>
          </div>
        </div>
        <div>
          <Image src="/images/quote.png" width={65} height={43} alt="quote" />
        </div>
      </div>
    </div>
  );
};

export default EndorsementCard;
