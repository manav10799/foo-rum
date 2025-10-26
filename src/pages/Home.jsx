import React from "react";
import Posts from "./Posts";
import PostEditor from "./PostEditor";

const Home = () => {
  return (
    <section>
      <PostEditor />
      <Posts />
    </section>
  );
};

export default Home;
