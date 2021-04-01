import { useEffect } from "react";
import { useRouter } from "next/router";
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
    const allPosts = await getAllPosts();
    const postIndex = allPosts.findIndex((post) => post.slug === params.slug);

    const post = await getPostBySlug(params.slug);

    return {
        props: {
            post,
        },
    };
};

const Posts = ({ post }) => {
    /* const router = useRouter();

    const pathname = router.asPath.replace(/posts/, "").replace("//", ""); */

    useEffect(() => {
        console.log(post);
    }, []);

    return <></>;
};

export default Posts;
