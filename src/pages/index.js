import Header from "../components/Header";
import PostsList from "../components/PostsList";

import { getAllPosts } from "../lib/getPosts.js";

import { useEffect } from "react";

export async function getStaticProps() {
  const posts = await getAllPosts();

  return {
    props: { posts },
  };
}

export default function Index({ posts }) {
  useEffect(() => {
    console.log(posts);
  }, []);
  return (
    <div>
      <Header />
      <PostsList posts={posts} />
    </div>
  );
}
