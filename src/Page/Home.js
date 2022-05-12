import React, { useState, useEffect, useCallback } from "react";
import Post from "./Post";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [alert, setAlert] = useState(false);

  const fetchPost = useCallback(async () => {
    try {
      const resData = await fetch("https://jsonplaceholder.typicode.com/posts");
      const values = await resData.json();
      setPosts(values);
    } catch (e) {
        console.error(e);
        setAlert(true);
    }
  }, []);

  useEffect(() => {
    fetchPost();
  }, [fetchPost]);

  if (posts.length === 0) {
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
  return <Post post={posts} />;
};

export default Home;
