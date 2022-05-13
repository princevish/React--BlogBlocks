import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  
  return (
    <div className="container px-5 py-4 mx-auto">
      <div className="flex flex-wrap -m-4">
        {post.length > 0 &&
          post.map((item) => {
            return (
              <div className="p-4 lg:w-1/3" key={item.id}>
                <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-2 pb-2 rounded-lg overflow-hidden text-center relative">
                  <h1 className="title-font sm:text-2xl text-xl text-left font-medium text-gray-900 mb-3">
                    {item.title}
                  </h1>
                  <img
                    src="https://picsum.photos/400/200"
                    class="max-w-full h-auto"
                    alt={item.title}
                  />
                  <p className="leading-relaxed text-left mb-3">{item.body}</p>
                  <Link
                    to={`${item.id}`}
                    className="text-indigo-500 inline-flex text-right items-center"
                  >
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Post;
