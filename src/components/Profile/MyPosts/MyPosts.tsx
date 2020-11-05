import React, { ChangeEvent } from 'react'
import Post from './Post/Post'
import s from './MyPosts.module.css'
import { PostType } from '../../../Types'

type PropsType = {
    posts: Array<PostType>
    addPost: (text: string) => void
    updateNewPostText: (text: string) => void
    newPostText: string
}

const MyPosts: React.FC<PropsType> = (props) => {
    const postsElements = props.posts.map((p) => (
        <Post key={p.id} message={p.message} likesCount={p.likesCount} />
    ))

    const onAddPost = () => {
        props.addPost(props.newPostText)
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
    }

    return (
        <div>
            My posts
            <div>
                <div>
                    <textarea
                        onChange={onPostChange}
                        value={props.newPostText}
                    />
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>{postsElements}</div>
        </div>
    )
}

export default MyPosts
