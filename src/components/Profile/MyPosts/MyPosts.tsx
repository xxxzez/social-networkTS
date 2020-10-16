import React from "react";
import Post from "./Post/Post";
import styles from "./MyPosts.module.css";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea name="" id=""></textarea>
                <button>Add post</button>
                <button>Delete post</button>
            </div>
            <div className={styles.posts}>
                <Post message='Canada' />
                <Post message='Netherlands' />
            </div>
        </div>
    );
};

export default MyPosts;
