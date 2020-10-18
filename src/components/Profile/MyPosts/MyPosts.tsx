import React from "react"
import Post from "./Post/Post"
import styles from "./MyPosts.module.css"

type PostType = {
    id: number
    message: string
    likesCount: number
}

const posts: Array<PostType> = [
    { id: 1, message: "First post!!!!", likesCount: 17 },
    { id: 2, message: "Some bullshit", likesCount: 7 },
    { id: 3, message: "Nothing special", likesCount: 11 },
    { id: 4, message: "Im fine", likesCount: 77 },
    { id: 5, message: "qq", likesCount: 71 },
]

const postsElements = posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
))

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
            <div className={styles.posts}>{postsElements}</div>
        </div>
    )
}

export default MyPosts
