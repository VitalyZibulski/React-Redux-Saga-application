import React from "react";
import PostForm from "./components/PostForm";
import Posts from "./components/Posts";
import FetchedPosts from "./components/FetchedPosts";

function App() {
  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col">
          <PostForm />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h6>Synchron posts</h6>
          <Posts posts={[1, 2, 3, 4]} />
        </div>
        <div className="col">
          <h6>Asynchron posts</h6>
          <FetchedPosts posts={[]} />
        </div>
      </div>
    </div>
  );
}

export default App;
