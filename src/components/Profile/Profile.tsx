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
    saveProfile: any
}

export const Profile: React.FC<PropsType> = ({
    profile,
    status,
    updateStatus,
    isOwner,
    savePhoto,
    saveProfile,
}) => {
    return (
        <div className={s.profile}>
            <ProfileInfo
                profile={profile}
                status={status}
                updateStatus={updateStatus}
                isOwner={isOwner}
                savePhoto={savePhoto}
                saveProfile={saveProfile}
            />
            <MyPostsContainer />
        </div>
    )
}
