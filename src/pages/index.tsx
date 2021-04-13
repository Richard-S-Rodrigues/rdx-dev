import { GetStaticProps } from "next";

import PostsList from "../components/PostsList";

import { getAllPosts } from "../lib/getPosts.js";

export const getStaticProps: GetStaticProps = async () => {
    const posts = await getAllPosts();

    return {
        props: { posts },
    };
};

interface PostsDataProps {
    title: string;
    date: string;
    tags: array;
    summary: string;
    slug: string;
}

const Index = ({ posts }: PostsDataProps) => {
    return (
        <div>
            <PostsList posts={posts} />
        </div>
    );
};

export default Index;
