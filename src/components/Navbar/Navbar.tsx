import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import icon from "../../assets/profileIcon.png";

const Navbar = () => {
    return (
        <div className={styles.nav}>
            <div className={styles.item}>
                <div className={styles.icon}>
                    <img src={icon} alt="" />
                </div>
                <NavLink to="/profile">Profile</NavLink>
            </div>
            <div className={styles.item}>
                <div className={styles.icon}>
                    <img src={icon} alt="" />
                </div>
                <NavLink to="/messages">Messages</NavLink>
            </div>
            <div className={styles.item}>
                <div className={styles.icon}>
                    <img src={icon} alt="" />
                </div>
                <NavLink to="/news">News</NavLink>
            </div>
            <div className={styles.item}>
                <div className={styles.icon}>
                    <img src={icon} alt="" />
                </div>
                <NavLink to="/settings">Settings</NavLink>
            </div>
        </div>
    );
};

export default Navbar;
