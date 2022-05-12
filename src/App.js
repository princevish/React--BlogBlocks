import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Page/Home";
import PostView from "./Page/PostView";
import AddPost from "./Page/AddPost";

const App = () => {
  return (
    <div className="container mx-auto px-4">
      <BrowserRouter>
        <Navbar />
        <section className="text-gray-600 body-font">
          <Switch>
            <Route path="/add-post" component={AddPost} />
            <Route path="/:id" component={PostView} />
            <Route path="/" exact component={Home} />
          </Switch>
        </section>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
