import React from "react";
import styles from './Footer.module.css'
import logo from '../../assets/canadaFlag.jpeg'
import Navbar from "../Navbar/Navbar";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <h4>Copyright© 1993-2020</h4>
        </footer>
    );
}

export default Footer;
