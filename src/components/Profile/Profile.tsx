import React from "react"
import { PostType } from "../../Types"
import MyPosts from "./MyPosts/MyPosts"
import s from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo"

type PropsType = {
    posts: Array<PostType>
    addPost: (text: string) => void
    updateNewPostText: (text: string) => void
    newPostText: string
}

const Profile: React.FC<PropsType> = (props) => {
    return (
        <div className={s.profile}>
            <ProfileInfo />
            <MyPosts
                posts={props.posts}
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}
                newPostText={props.newPostText}
            />
        </div>
    )
}

export default Profile
