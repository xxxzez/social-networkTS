import React from 'react'
import { ProfileType } from '../../Types'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

type PropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: any) => void
}

export const Profile: React.FC<PropsType> = (props) => {
    return (
        <div className={s.profile}>
            <ProfileInfo
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
                isOwner={props.isOwner}
                savePhoto={props.savePhoto}
            />
            <MyPostsContainer />
        </div>
    )
}
