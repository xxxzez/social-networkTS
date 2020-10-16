import React from "react";
import styles from './Navbar.module.css'

function Navbar() {
    return (
        <div className={styles.nav}>
            <div className={styles.item}>
                <a href="#s">Profile</a>
            </div>
            <div className={styles.item}>
                <a href="#s">Messages</a>
            </div>
            <div className={styles.item}>
                <a href="#s">News</a>
            </div>
            <div className={styles.item}>
                <a href="#s">Settings</a>
            </div>
        </div>
    );
}

export default Navbar;
