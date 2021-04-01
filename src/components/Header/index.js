import styles from "./index.module.css";

export default function Header() {
    return (
        <header className={styles.container}>
            <h1>RDX-DEV</h1>
            <p>
                A personal blog by
                <a
                    href="https://github.com/Richard-S-Rodrigues"
                    target="_blank"
                >
                    Richard Rodrigues
                </a>
            </p>
        </header>
    );
}
