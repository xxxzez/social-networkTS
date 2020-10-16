import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import styles from "./Profile.module.css";

function Profile() {
    return (
        <div className={styles.profile}>
            <div>
                <img
                    src="https://media.wired.com/photos/5a602bd0dcebae339730ba65/master/w_2560%2Cc_limit/eslcologne.jpg"
                    alt=""
                    width='600px'
                />
            </div>
            <div>ava + description</div>
            <MyPosts />
        </div>
    );
}

export default Profile;
