import React from "react";
import styles from './Post.module.css';

function Post() {
    return (
        <div className={styles.item}>
            <img src="https://steamuserimages-a.akamaihd.net/ugc/862862655199713640/C17A53BED1F8B6CF372693537515C8358541CC49/" alt=""/>
            Hi everyone!
            <div>
                <span>Like!</span>
            </div>
        </div>
        
    );
}

export default Post;
