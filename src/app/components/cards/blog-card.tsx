import React from "react";
interface Post {
  title: string;
  category: string;
  author: string;
  content: string;
  icon: string;
  link: string;
}

// Define the prop types for the PostCard component
interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div className="  h-fit p-5 space-y-3 rounded-lg bg-background/70 backdrop-blur-lg ring-1 ring-gray-500">
      <div className="text-xl font-bold ">{post.title}</div>
      <div className="flex flex-row">
        <div className="text-gray-500 ">{post.category}</div>
        <div className="text-gray-600 ">{post.author}</div>
      </div>
      <p className="text-gray-800">{post.content}</p>
      <div className="mt-4 flex items-center">
        <span className={`text-${post.icon} text-2xl mr-2`}></span> {/* Icon */}
        <a href={post.link} className="text-blue-500 hover:underline">
          Read More
        </a>{" "}
        {/* Link */}
      </div>
    </div>
  );
};

export default PostCard;
