import React from "react";
import styles from './Header.module.css'
import logo from '../../assets/canadaFlag.jpeg'

const Header = () => {
    return (
        <header className={styles.header}>
            <img
                src={logo}
                alt="Navi logo! Pow-Pow!"
            />
        </header>
    );
}

export default Header;
