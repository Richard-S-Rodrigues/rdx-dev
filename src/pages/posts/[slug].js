import { useEffect } from "react";

import {
    getPostBySlug,
    getAllPosts,
    getPostsFiles,
    formatSlug,
} from "../../lib/getPosts.js";

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

const Post = ({ post }) => {
    useEffect(() => {
        console.log(post);
    }, []);

    return <></>;
};

export default Post;
