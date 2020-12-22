import React, { ChangeEvent } from 'react'
import Post from './Post/Post'
import s from './MyPosts.module.css'
import { Button, TextField } from '@material-ui/core'
import { MyPostsPropsFromRedux } from './MyPostsContainer'

type PropsType = MyPostsPropsFromRedux

const MyPosts: React.FC<PropsType> = (props) => {
    const onAddPost = () => {
        props.addPost()
    }
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
    }

    const postsElements = props.posts.map((p) => (
        <Post key={p.id} message={p.message} likesCount={p.likesCount} />
    ))

    return (
        <div>
            My posts
            <div>
                <div>
                    <TextField
                        onChange={onPostChange}
                        value={props.newPostText}
                    />
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
