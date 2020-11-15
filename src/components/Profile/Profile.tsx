import React from 'react'
import { ActionsTypes } from '../../redux/state'
import { PostType } from '../../Types'
import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

type PropsType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: (action:ActionsTypes) => void
}

export const Profile: React.FC<PropsType> = (props) => {
    return (
        <div className={s.profile}>
            <ProfileInfo />
            <MyPosts
                posts={props.posts}
                newPostText={props.newPostText}
                dispatch={props.dispatch}
            />
        </div>
    )
}
