import React, { ChangeEvent } from 'react'
import Post from './Post/Post'
import s from './MyPosts.module.css'
import { Button, TextField } from '@material-ui/core'
import { PropsFromRedux } from './MyPostsContainer'

type PropsType = PropsFromRedux

const MyPosts: React.FC<PropsType> = (props) => {
    const postsElements = props.posts.map((p) => (
        <Post key={p.id} message={p.message} likesCount={p.likesCount} />
    ))

    const onAddPost = () => {
        props.addPost()
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.updateNewPostText(text)
    }

    return (
        <div>
            My posts
            <div>
                <div>
                    <TextField onChange={onPostChange} value={props.children} />
                </div>
                <div>
                    <Button onClick={onAddPost}>Add post</Button>
                </div>
            </div>
            <div className={s.posts}>{postsElements}</div>
        </div>
    )
}

export default MyPosts
