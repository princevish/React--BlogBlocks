import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
export default function Postview() {
  const [post, setPost] = useState("");
  const [postcomment, setPostcomment] = useState("");
  const { id } = useParams();
  const comments = async (id) => {
    try {
      const fetchdata = await fetch(
        `https://jsonplaceholder.typicode.com/comments`
      );
      const values = await fetchdata.json();

      setPostcomment(values.filter((item) => item.postId === id));
    } catch (e) {
      console.error(e);
    }
  };
  const data = async () => {
    try {
      const fetchdata = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      const values = await fetchdata.json();
      setPost(values);
      comments(values.id);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    data();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className="container px-5 py-14 mx-auto">
      <div className="flex flex-col text-center w-full mb-12">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          {post && post.title}
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          {post && post.body}
        </p>
      </div>
      {postcomment &&
        postcomment.map((item) => {
          return (
            <div className="xl:w-1/3 md:w-1/2 p-4" key={item.id}>
              <div className="border border-gray-200 p-6 rounded-lg">
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  {item.name}
                </h2>
                <span className="leading-relaxed text-base">{item.email}</span>
                <p className="leading-relaxed text-base">{item.body}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
}
