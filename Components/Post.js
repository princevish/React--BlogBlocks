import React from "react";
import { Link } from "react-router-dom";
export default function Post({ post }) {
  return (
    <div className="container px-5 py-14 mx-auto">
      <div className="flex flex-wrap -m-4">
        {post &&
          post.map((item) => {
            return (
              <div className="p-4 lg:w-1/3" key={item.id}>
                <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-14 rounded-lg overflow-hidden text-center relative">
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                    {item.title}
                  </h1>
                  <p className="leading-relaxed mb-3">{item.body}</p>
                  <Link
                    to={`${item.id}`}
                    className="text-indigo-500 inline-flex items-center"
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
}
