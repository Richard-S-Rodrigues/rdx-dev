import { formatDate } from "../../lib/utils.js";

import styles from "./index.module.css";

const PostHeader = ({ title, date }) => (
    <section className={styles.container}>
        <small>
            <time dateTime={date}>{formatDate(date)}</time>
        </small>
        <h1>{title}</h1>
    </section>
);

export default PostHeader;
