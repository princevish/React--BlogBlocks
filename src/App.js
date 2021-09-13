import React, { useState, useEffect } from "react";
import Post from "./Components/Post";
import Navbar from "./Components/Navbar";
import Postview from "./Components/Postview";
import { BrowserRouter, Switch, Route } from "react-router-dom";
function App() {
  const [posts, setPosts] = useState();
  const data = async () => {
    try {
      const fetchdata = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const values = await fetchdata.json();
      setPosts(values);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    data();
  }, []);
  return (
    <div className="container mx-auto px-4">
      <BrowserRouter>
        <Navbar />
        <section className="text-gray-600 body-font">
          <Switch>
            <Route path="/" exact>
              <Post post={posts} />
            </Route>

            <Route path="/:id" component={Postview} />
          </Switch>
        </section>
      </BrowserRouter>
    </div>
  );
}

export default App;
