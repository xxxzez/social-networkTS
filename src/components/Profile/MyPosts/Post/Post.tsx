import React from 'react'
import s from './Post.module.css'
import logo from '../../../../assets/canadaFlag.jpeg'
import { Button } from '@material-ui/core'



type PostType = {
    message: string
    likesCount: number
}

const Post: React.FC<PostType> = React.memo((props) => {
    return (
        <div className={s.item}>
            <img src={logo} alt="" />
            {props.message}
            <div>
                <span>Like! </span>
                {props.likesCount}
                <Button variant="contained" color="primary">
                    Delete post
                </Button>
            </div>
        </div>
    )
})

export default Post
