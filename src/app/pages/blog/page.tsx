import PostCard from "@/app/components/cards/blog-card";
import { posts } from "@/app/components/content/blog";
import TagWithIcon, {
  featuredAutors,
  featuredConcepts,
} from "@/app/components/content/featured";
import Image from "next/image";

import React from "react";

export default function Blog() {
  return (
    <React.Fragment>
      <div className="flex min-h-screen flex-col  items-center space-y-10 mt-5">
        <div className="w-11/12 lg:w-3/6 space-y-5 h-fit p-5 rounded-lg bg-background/70 backdrop-blur-lg ring-1 ring-gray-300">
          <h1
            className="text-left  text-2xl md:text-4xl font-bold 
                    text-gray-900
                    "
          >
            Blog
          </h1>
          <div>
            <h1 className="text-xl">Featured Concepts</h1>
            <div className="flex flex-row flex-wrap gap-5 ">
              {featuredConcepts.map((item, index) => (
                <TagWithIcon key={index} tag={item.name} />
              ))}
            </div>
          </div>
          <div>
            <h1 className="text-xl">Featured Autors</h1>
            <div className="flex flex-row flex-wrap gap-5 ">
              {featuredAutors.map((item, index) => (
                <TagWithIcon key={index} tag={item.name} />
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 w-11/12 gap-5 lg:w-3/6 ">
          {posts.map((post, index) => (
            <div key={index}>
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}
