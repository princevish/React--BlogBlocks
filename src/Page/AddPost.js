import React, { useState, useCallback } from "react";

const AddPost = () => {
  const [postData, setPostData] = useState({
    title: "",
    userId: "",
    body: "",
  });
  const [alert, setAlert] = useState(false);
  const [publish, setPublish] = useState(false);

  const onChangeInput = useCallback(
    ({ target }) => {
      if (publish) {
        setPublish(false);
      }
      setPostData((prev) => ({ ...prev, [target.name]: target.value.trim() }));
    },
    [publish]
  );

  const onSubmitForm = useCallback(
    async (e) => {
      e.preventDefault();
      const { title, userId, body } = postData;
      if ((title === "", userId === "", body === "")) return;
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
          method: "POST",
          body: JSON.stringify(postData),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });
        if (res.status === 201) {
          setPublish(true);
          setPostData({
            title: "",
            userId: "",
            body: "",
          });
        }
      } catch (e) {
        console.error(e);
        setAlert(true);
      }
    },
    [postData]
  );

  if (alert) {
    return (
      <div
        className="flex items-center justify-center"
        style={{ height: "70vh" }}
      >
        <div
          class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong class="font-bold">Alert!</strong>
          <span class="block sm:inline">Something seriously bad happened.</span>
        </div>
      </div>
    );
  }
  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-1 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Add Post
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            A practical blog htmlFor impractical people
          </p>
        </div>
        {publish && (
          <div
            class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <strong class="font-bold">Success!</strong>
            <span class="block sm:inline">Article Publish Now</span>
          </div>
        )}
        <form onSubmit={onSubmitForm}>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="title"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    onChange={onChangeInput}
                    value={postData.title}
                  />
                </div>
                <div className="mt-1 w-full">
                  <div className="relative">
                    <label
                      htmlFor="userId"
                      className="leading-7 text-sm text-gray-600"
                    >
                      User ID
                    </label>
                    <input
                      type="text"
                      id="userId"
                      name="userId"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      onChange={onChangeInput}
                      value={postData.userId}
                    />
                  </div>
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="body"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Description
                  </label>
                  <textarea
                    id="body"
                    name="body"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    onChange={onChangeInput}
                    value={postData.body}
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  type="submit"
                  className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                  Publish
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddPost;
