import React from 'react'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

type PropsType = {}

export const Profile: React.FC<PropsType> = () => {
    return (
        <div className={s.profile}>
            <ProfileInfo />
            <MyPostsContainer />
        </div>
    )
}
