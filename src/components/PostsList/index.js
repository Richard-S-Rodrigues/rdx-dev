import Link from "next/link";

import styles from "./index.module.css";

const PostsList = ({ posts }) => (
    <ul className={styles.container}>
        {posts.map((post) => {
            const { slug, title, date, tags, summary } = post;

            const postDateTemplate = {
                year: "numeric",
                month: "long",
                day: "numeric",
            };

            return (
                <li key={slug} className={styles.card}>
                    <article>
                        <div>
                            <small className={styles.date}>
                                <time dateTime={date}>
                                    {new Date(date).toLocaleDateString(
                                        "en-US",
                                        postDateTemplate
                                    )}
                                </time>
                            </small>

                            <div className={styles.titleContainer}>
                                <h2>
                                    <Link href={`/posts/${slug}`}>{title}</Link>
                                </h2>
                            </div>

                            <div>
                                {tags.map((tag) => (
                                    <p key={tag} className="tag">
                                        {tag}
                                    </p>
                                ))}
                            </div>
                        </div>
                        <div className={styles.summaryContainer}>
                            <p>{summary}</p>

                            <Link href={`/posts/${slug}`}>Read more</Link>
                        </div>
                    </article>
                </li>
            );
        })}
    </ul>
);

export default PostsList;