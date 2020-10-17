import React from "react";
import { NavLink } from "react-router-dom";
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={styles.nav}>
            <div className={styles.item}>
                <NavLink to="/profile">Profile</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/messages">Messages</NavLink>
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
