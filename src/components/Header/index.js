import Link from "next/link";

import styles from "./index.module.css";

const Header = () => (
    <header className={styles.container}>
        <h1>
            <Link href="/">RDX-DEV</Link>
        </h1>

        <p>
            A personal blog by
            <a href="https://github.com/Richard-S-Rodrigues" target="_blank">
                Richard Rodrigues
            </a>
        </p>
    </header>
);

export default Header;
