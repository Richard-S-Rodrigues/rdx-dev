import { GetStaticProps, GetStaticPaths } from "next";

import hydrate from "next-mdx-remote/hydrate";

import Post from "../../components/Post";
import MDXComponents from "../../components/MDXComponents.js";

import {
    getPostBySlug,
    getAllPosts,
    getPostsFiles,
} from "../../lib/getPosts.js";

import { formatSlug } from "../../lib/utils.js";

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

interface PostDataProps {
    data: object;
    body_markdown: object;
}

const Posts = ({ post }: PostDataProps) => {
    const { data, body_markdown } = post;

    const content = hydrate(body_markdown, {
        components: MDXComponents,
    });

    return (
        <>
            <Post data={data} body_markdown={content} />
        </>
    );
};

export default Posts;
