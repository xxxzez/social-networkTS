import React from "react";
import Post from "./Post/Post";
import styles from "./MyPosts.module.css";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <div>
                    <textarea name="" id=""></textarea>
                </div>
                <div>
                    <button>Add post</button>
                    <button>Delete post</button>
                </div>
            </div>
            <div className={styles.posts}>
                <Post message="First post!!!!" likesCount={17} />
                <Post message="Some bullshit" likesCount={6} />
            </div>
        </div>
    );
};

export default MyPosts;
