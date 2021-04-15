import { GetStaticProps, GetStaticPaths } from "next";

import hydrate from "next-mdx-remote/hydrate";

import Post from "../../components/Post";
import MDComponents from "../../components/MDComponents";

import { getPostBySlug, getAllPosts, getPostsFiles } from "../../lib/getPosts";

import { formatSlug } from "../../lib/utils";

export const getStaticPaths: GetStaticPaths = async () => {
    const posts = await getPostsFiles();

    return {
        paths: posts.map((post) => ({
            params: {
                slug: formatSlug(post),
            },
        })),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const post = await getPostBySlug(params.slug);

    return {
        props: {
            post,
        },
    };
};

const Posts = ({ post }) => {
    const { data, body_markdown } = post;

    const content = hydrate(body_markdown, {
        components: MDComponents,
    });

    return <Post data={data} body_markdown={content} />;
};

export default Posts;
