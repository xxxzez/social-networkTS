import React from "react";
import styles from './Post.module.css';
import logo from '../../../../assets/canadaFlag.jpeg'

type MessageType = {
    message: string;
};

const Post: React.FC<MessageType> = (props) => {
    return (
        <div className={styles.item}>
            <img src={logo} alt=""/>
           {props.message}
            <div>
                <span>Like!</span>
            </div>
        </div>
        
    );
}

export default Post;
