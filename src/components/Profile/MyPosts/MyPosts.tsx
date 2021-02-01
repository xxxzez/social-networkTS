import React from 'react'
import Post from './Post/Post'
import s from './MyPosts.module.css'
import { MyPostsPropsFromRedux } from './MyPostsContainer'
import { Field, reduxForm } from 'redux-form'

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

const AddPostForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                name="newPostBody"
                placeholder="Send"
                component="textarea"
            ></Field>
            <button>Send</button>
        </form>
    )
}
const AddPostFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(
    AddPostForm
)
