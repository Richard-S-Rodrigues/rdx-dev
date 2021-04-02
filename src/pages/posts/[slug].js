import { useEffect } from "react";

import Post from "../../components/Post";

import {
    getPostBySlug,
    getAllPosts,
    getPostsFiles,
} from "../../lib/getPosts.js";

import { formatSlug } from "../../lib/utils.js";

export const getStaticPaths = async () => {
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

export const getStaticProps = async ({ params }) => {
    const post = await getPostBySlug(params.slug);

    return {
        props: {
            post,
        },
    };
};

const Posts = ({ post }) => {
    const { data, body_markdown } = post;
    useEffect(() => {
        console.log(data, body_markdown);
    }, []);

    return (
        <>
            <Post data={data} body_markdown={body_markdown} />
        </>
    );
};

export default Posts;
