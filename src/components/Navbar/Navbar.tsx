import React from "react"
import { NavLink } from "react-router-dom"
import styles from "./Navbar.module.css"
import icon from "../../assets/profileIcon.png"

type NavbarItemType = {
    link: string
    title: string
}

const NavbarItem: React.FC<NavbarItemType> = (props) => {
    return (
        <div className={styles.item}>
            <div className={styles.icon}>
                <img src={icon} alt="" />
            </div>
            <NavLink to={`/${props.link}`}>{props.title}</NavLink>
        </div>
    )
}

const Navbar = () => {
    return (
        <div className={styles.nav}>
            <NavbarItem link="profile" title="Profile" />
            <NavbarItem link="messages" title="Messages" />
            <NavbarItem link="news" title="News feed" />
            <NavbarItem link="settings" title="Settings" />
        </div>
    )
}

export default Navbar