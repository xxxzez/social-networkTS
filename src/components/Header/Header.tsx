import React from "react";
import styles from './Header.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <img
                src="https://steamuserimages-a.akamaihd.net/ugc/862862655199713640/C17A53BED1F8B6CF372693537515C8358541CC49/"
                alt="Navi logo! Pow-Pow!"
            />
        </header>
    );
}

export default Header;
