import { HiHashtag } from "react-icons/hi";

// Define the prop types for TagWithIcon
interface TagWithIconProps {
  tag: string;
}

const TagWithIcon: React.FC<TagWithIconProps> = ({ tag }) => {
  return (
    <div className="flex items-center ">
      <HiHashtag className="text-emerald-600" /> {/* Hashtag Icon */}
      <p className="text-emerald-600">{tag}</p> {/* Tag text */}
    </div>
  );
};

export default TagWithIcon;

export const featuredAutors = [
  {
    name: "James Clear",
    color: "text-brown-500",
  },
  {
    name: "Daren Hardy",
    color: "text-blue-500",
  },
  {
    name: "Stephen R. Covey",
    color: "text-red-500",
  },
  {
    name: "Mark Manson",
    color: "text-green-500",
  },
  {
    name: "Robin Sharma",
    color: "text-purple-500",
  },
  // Add more featured authors
];

export const featuredConcepts = [
  {
    name: "TheCompoundEffect",
    color: "text-custom-hue-1", // Custom hue 1 text color
  },
  {
    name: "Leadership",
    color: "text-custom-hue-2", // Custom hue 2 text color
  },
  {
    name: "Habits",
    color: "text-custom-hue-3", // Custom hue 3 text color
  },
  {
    name: "TheSubconsciousMind",
    color: "text-custom-hue-4", // Custom hue 4 text color
  },
  {
    name: "The10Xrule",
    color: "text-custom-hue-5", // Custom hue 5 text color
  },
  // Add more featured concepts
];

// Add more featured concepts
