import PostHeader from "../PostHeader";
import PostBody from "../PostBody";

import styles from "./index.module.css";

const Post = ({ data, body_markdown }) => {
    const { title, date } = data;
    return (
        <main className={styles.container}>
            <PostHeader title={title} date={date} />
            <PostBody body_markdown={body_markdown} />
        </main>
    );
};

export default Post;
