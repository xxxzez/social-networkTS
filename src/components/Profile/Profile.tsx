import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import styles from "./Profile.module.css";
import logo from "../../assets/stadium.jpeg";

const Profile = () => {
    return (
        <div>
            <div>
                <img src={logo} alt="" width="600px" />
            </div>
            <div>The most gorgeous tournament in CSGO history!</div>
            <MyPosts />
        </div>
    );
}

export default Profile;
