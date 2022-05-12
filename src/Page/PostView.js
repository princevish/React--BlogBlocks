import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";

const PostView = () => {
  const [post, setPost] = useState("");
  const [postComment, setPostComment] = useState([]);
  const [alert, setAlert] = useState(false);
  const { id } = useParams();
  
  const comments = useCallback(async (id) => {
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/comments`);
      const values = await res.json();
      setPostComment(values.filter((item) => item.postId === id));
    } catch (e) {
      console.error(e);
      setAlert(true);
    }
  }, []);

  const postFetch = useCallback(async () => {
    try {
      const reData = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      const values = await reData.json();
      setPost(values);
      comments(values.id);
    } catch (e) {
      console.error(e);
      setAlert(true);
    }
  }, [id, comments]);

  useEffect(() => {
    postFetch();
  }, [postFetch]);

  if (post.length === 0) {
    return (
      <div
        className="flex items-center justify-center"
        style={{ height: "70vh" }}
      >
        {alert ? (
          <div
            class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <strong class="font-bold">Alert!</strong>
            <span class="block sm:inline">
              Something seriously bad happened.
            </span>
          </div>
        ) : (
          <>
            <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"></div>
            <h1 className="ml-2">Loading</h1>
          </>
        )}
      </div>
    );
  }

  return (
    <div className="container px-5 py-14 mx-auto">
      {post && (
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            {post.title}
          </h1>
          <img
            src="https://picsum.photos/600/200"
            class="max-w-full h-auto"
            alt={post.title}
          />
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            {post.body}
          </p>
        </div>
      )}
      <div className="flex flex-wrap -m-4">
        {postComment.length > 0 &&
          postComment.map((item) => {
            return (
              <div className="xl:w-1/3 md:w-1/2 p-4" key={item.id}>
                <div className="border border-gray-200 p-6 rounded-lg">
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                    {item.name}
                  </h2>
                  <span className="leading-relaxed text-base">
                    {item.email}
                  </span>
                  <p className="leading-relaxed text-base">{item.body}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default PostView;
