import React, { ChangeEvent } from 'react'
import Post from './Post/Post'
import s from './MyPosts.module.css'
import { ActionsTypes, PostType } from '../../../Types'
import { addPostAC } from '../../../redux/profile-reducer'
import { Button, TextField } from '@material-ui/core'

type PropsType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}

const MyPosts: React.FC<PropsType> = (props) => {
    const postsElements = props.posts.map((p) => (
        <Post key={p.id} message={p.message} likesCount={p.likesCount} />
    ))

    const onAddPost = () => {
        props.dispatch(addPostAC(props.newPostText))
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch({
            type: 'UPDATE-NEW-POST-TEXT',
            text: e.currentTarget.value,
        })
    }

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
