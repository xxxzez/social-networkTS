import React from "react"
import styles from "./ProfileInfo.module.css"
import logo from "../../../assets/profilePicture.jpg"

const ProfileInfo = () => {
    return (
        <div className={styles.profile}>
            <div className={styles.profilePicture}>
                <img src={logo} alt="" />
            </div>
            <div>
                <h3>Welcome to my page guys! Happy to see you here!</h3>
            </div>
        </div>
    )
}

export default ProfileInfo
