import React from 'react'
import { ProfileType } from '../../Types'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

type PropsType = {
    profile: ProfileType
}

export const Profile: React.FC<PropsType> = (props) => {
    return (
        <div className={s.profile}>
            <ProfileInfo profile={props.profile}  />
            <MyPostsContainer />
        </div>
    )
}
