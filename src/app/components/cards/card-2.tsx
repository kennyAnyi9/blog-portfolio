// ContentItem.tsx
// ContentItem.tsx
import React from "react";
import { IconType } from "react-icons/lib";
import Button from "../buttons/button-2";

interface ContentItemProps {
  title: string;
  description: string;
  icon: IconType; // Import IconType from 'react-icons/lib' for type checking
}

const ContentItem2: React.FC<ContentItemProps> = ({
  title,
  description,
  icon: Icon,
}) => {
  return (
    <div className="  h-fit p-5 space-y-5 rounded-lg bg-background/70 backdrop-blur-lg ring-1 ring-gray-500">
      <div className="flex flex-row space-y-0 justify-between">
        <div className="flex flex-row space-x-3">
          {" "}
          <div className="text-2xl">
            <Icon />
          </div>
          <div className=" text-lg md:text-xl text-gray-900 font-bold">
            {title}
          </div>
        </div>
        <Button text="Read" isPrimary={false} />
      </div>
      <div>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ContentItem2;
