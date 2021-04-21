import { ReactNode } from "react";

import PostHeader from "../PostHeader";
import PostBody from "../PostBody";

import styles from "./index.module.css";

interface PostProps {
    data: object;
    body_markdown: ReactNode;
}

interface dataProps {
    title: string;
    date: string;
}

const Post = ({ data, body_markdown }: PostProps) => {
    const { title, date } = data as dataProps;
    return (
        <main className={styles.container}>
            <PostHeader title={title} date={date} />
            <PostBody>{body_markdown}</PostBody>
        </main>
    );
};

export default Post;
