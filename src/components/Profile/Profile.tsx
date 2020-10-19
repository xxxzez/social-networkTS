import React from "react"
import { PostType } from "../.."
import MyPosts from "./MyPosts/MyPosts"
import styles from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo"

type PropsType = {
    posts: Array<PostType>
}

const Profile: React.FC<PropsType> = (props) => {
    return (
        <div className={styles.profile}>
            <ProfileInfo />
            <MyPosts posts={props.posts} />
        </div>
    )
}

export default Profile
