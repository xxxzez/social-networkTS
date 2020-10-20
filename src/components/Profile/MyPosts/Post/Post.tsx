import React from "react"
import s from "./Post.module.css"
import logo from "../../../../assets/canadaFlag.jpeg"

type PostType = {
    message: string
    likesCount: number
}

const Post: React.FC<PostType> = (props) => {
    return (
        <div className={s.item}>
            <img src={logo} alt="" />
            {props.message}
            <div>
                <span>Like! </span>
                {props.likesCount}
            </div>
        </div>
    )
}

export default Post
