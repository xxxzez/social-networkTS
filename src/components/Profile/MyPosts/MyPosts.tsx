import React from 'react'
import Post from './Post/Post'
import s from './MyPosts.module.css'
import { MyPostsPropsFromRedux } from './MyPostsContainer'
import { Field, reduxForm } from 'redux-form'
import {
    maxLengthCreator,
    required,
} from '../../../utils/validators/validators'
import { Textarea } from '../../common/FormsControls/FormsControls'

type PropsType = MyPostsPropsFromRedux

const MyPosts: React.FC<PropsType> = React.memo((props) => {
    const onAddPost = (values: any) => {
        props.addPost(values.newPostBody)
    }

    const postsElements = props.posts.map((p) => (
        <Post key={p.id} message={p.message} likesCount={p.likesCount} />
    ))

    return (
        <div>
            My posts
            <AddPostFormRedux onSubmit={onAddPost} />
            <div className={s.posts}>{postsElements}</div>
        </div>
    )
})

export default MyPosts

const maxLength20 = maxLengthCreator(20)
const AddPostForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                name="newPostBody"
                placeholder="Send"
                component={Textarea}
                validate={[required, maxLength20]}
            ></Field>
            <button>Send</button>
        </form>
    )
}
const AddPostFormRedux = reduxForm({ form: 'profileAddPostForm' })(AddPostForm)
