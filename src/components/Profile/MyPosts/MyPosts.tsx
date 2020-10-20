import React from "react"
import Post from "./Post/Post"
import s from "./MyPosts.module.css"
import { PostType } from "../../../redux/state"

type PropsType = {
    posts: Array<PostType>
}

const MyPosts: React.FC<PropsType> = (props) => {
    const postsElements = props.posts.map((p) => (
        <Post message={p.message} likesCount={p.likesCount} />
    ))
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
            <div className={s.posts}>{postsElements}</div>
        </div>
    )
}

export default MyPosts
