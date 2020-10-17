import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import styles from "./Profile.module.css";
import logo from "../../assets/profilePicture.jpeg";

const Profile = () => {
    return (
        <div className={styles.profile}>
            <div className={styles.profilePicture}>
                <img src={logo} alt="" />
            </div>
            <div>Welcome to my page guys! Happy to see you here!</div>
            <MyPosts />
        </div>
    );
};

export default Profile;
