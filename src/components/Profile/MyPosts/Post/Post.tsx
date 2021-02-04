import React from 'react'
import s from './Post.module.css'
import logo from '../../../../assets/canadaFlag.jpeg'

type PostType = {
    message: string
    likesCount: number
    id: string
    deletePost: (userId: string) => void
}

const Post: React.FC<PostType> = React.memo((props) => {
    const onDelete = () => {
        props.deletePost(props.id)
    }
    return (
        <div className={s.item}>
            <img src={logo} alt="" />
            {props.message}
            <div>
                <span>Like! </span>
                {props.likesCount}
                <button onClick={onDelete}>Delete post</button>
            </div>
        </div>
    )
})

export default Post
