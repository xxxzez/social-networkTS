import React from 'react'
import s from './Post.module.css'
import logo from '../../../../assets/canadaFlag.jpeg'
import Button from '@material-ui/core/Button'

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
                <Button variant="contained" color="primary" onClick={onDelete}>
                    Delete post
                </Button>
            </div>
        </div>
    )
})

export default Post
