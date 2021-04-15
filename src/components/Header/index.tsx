import Link from "next/link";

import useDarkMode from "use-dark-mode";
import DarkModeToggle from "react-dark-mode-toggle";

import styles from "./index.module.css";

const Header = () => {
    const darkMode = useDarkMode(false);

    return (
        <header className={styles.container}>
            <h1>
                <Link href="/">RDX-DEV</Link>
            </h1>

            <p>
                A personal blog by
                <a
                    href="https://github.com/Richard-S-Rodrigues"
                    target="_blank"
                >
                    Richard Rodrigues
                </a>
            </p>

            <div className={styles.toggleContainer}>
                <DarkModeToggle
                    onChange={darkMode.toggle}
                    checked={darkMode.value}
                    size={80}
                />
            </div>
        </header>
    );
};

export default Header;
