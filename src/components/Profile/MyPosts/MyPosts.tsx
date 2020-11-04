import React from "react"
import Post from "./Post/Post"
import s from "./MyPosts.module.css"
import { PostType } from "../../../Types"

type PropsType = {
    posts: Array<PostType>
    addPost: (text: string) => void
    updateNewPostText: (text: string) => void
}

const MyPosts: React.FC<PropsType> = (props) => {
    const newPostText: any = React.createRef()
    const postsElements = props.posts.map((p) => (
        <Post key={p.id} message={p.message} likesCount={p.likesCount} />
    ))

    const onAddPost = () => {
        const newPost: string = newPostText.current.value
        props.addPost(newPost)
    }

    const onPostChange = () => {
        const text: string = newPostText.current.value
        props.updateNewPostText(text)
    }

    return (
        <div>
            My posts
            <div>
                <div>
                    <textarea ref={newPostText} onChange={onPostChange} />
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                    <button>Delete post</button>
                </div>
            </div>
            <div className={s.posts}>{postsElements}</div>
        </div>
    )
}

export default MyPosts
