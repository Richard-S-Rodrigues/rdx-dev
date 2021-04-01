import PostsList from "../components/PostsList";

import { getAllPosts } from "../lib/getPosts.js";

export const getStaticProps = async () => {
  const posts = await getAllPosts();

  return {
    props: { posts },
  };
};

const Index = ({ posts }) => (
  <div>
    <PostsList posts={posts} />
  </div>
);

export default Index;
