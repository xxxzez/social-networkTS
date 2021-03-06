import React from 'react'
import Post from './Post/Post'
import s from './MyPosts.module.css'
import { Field, reduxForm } from 'redux-form'
import {
    maxLengthCreator,
    required,
} from '../../../utils/validators/validators'
import { Textarea } from '../../common/FormsControls/FormsControls'
import Button from '@material-ui/core/Button'
import { PostType } from '../../../Types'

type MSTPType = {
    posts: PostType[]
}
type MDTPType = {
    addPost: (newPostBody: string) => void
    deletePost: (userId: string) => void
}
type PropsType = MSTPType & MDTPType

const MyPosts: React.FC<PropsType> = React.memo((props) => {
    const onAddPost = (values: any) => {
        props.addPost(values.newPostBody)
    }
    const deletePost = (userId: string) => {
        props.deletePost(userId)
    }
    const postsElements = props.posts.map((p) => (
        <Post
            key={p.id}
            id={p.id}
            message={p.message}
            likesCount={p.likesCount}
            deletePost={deletePost}
        />
    ))
    return (
        <div className={s.posts}>
            <h3>My posts</h3>
            <AddPostFormRedux onSubmit={onAddPost} />
            <div className={s.posts}>{postsElements}</div>
        </div>
    )
})

export default MyPosts

const maxLength20 = maxLengthCreator(20)

const AddPostForm: React.FC<any> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                name="newPostBody"
                placeholder="Send"
                component={Textarea}
                validate={[required, maxLength20]}
            ></Field>
            <Button variant="contained" color="primary">
                Send
            </Button>
        </form>
    )
}
const AddPostFormRedux = reduxForm({ form: 'profileAddPostForm' })(AddPostForm)
