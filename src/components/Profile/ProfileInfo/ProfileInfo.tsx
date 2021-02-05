import React, { ChangeEvent } from 'react'
import s from './ProfileInfo.module.css'
import { Preloader } from '../../common/Preloader/Preloader'
import { ProfileType } from '../../../Types'
import profilePicture from '../../../assets/profilePicture.png'
import { ProfileStatus } from './ProfileStatus'

type PropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: any) => void
}

const ProfileInfo: React.FC<PropsType> = ({
    profile,
    status,
    updateStatus,
    isOwner,
    savePhoto,
}) => {
    if (!profile) {
        return <Preloader />
    }

    const mainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            savePhoto(e.target.files[0])
        }
    }

    return (
        <div className={s.profile}>
            <div className={s.profilePicture}>
                {profile.photos.large ? (
                    <img src={profile.photos.large} alt="" />
                ) : (
                    <img src={profilePicture} alt="" />
                )}
            </div>
            {isOwner && <input type="file" onChange={mainPhotoSelected} />}

            <ProfileStatus status={status} updateStatus={updateStatus} />

            <h3>About me: {profile.aboutMe}</h3>
            <h3>
                Looking for a job?{' '}
                {profile.lookingForAJob ? 'Yes' : 'Currently no!'}
            </h3>
            <h3>
                What kind of job are u looking for?{' '}
                {profile.lookingForAJobDescription}
            </h3>
            <h3>Name: {profile.fullName}</h3>
            <h3>UserId: {profile.userId}</h3>
            <h3>Facebook link: {profile.contacts.facebook}</h3>
            <h3>Your website link: {profile.contacts.website}</h3>
            <h3>VK link: {profile.contacts.vk}</h3>
            <h3>Youtube: {profile.contacts.youtube}</h3>
            <h3>Github: {profile.contacts.github}</h3>
            <h3>Email: {profile.contacts.mainLink}</h3>

            <div>
                <h3>Welcome to my page guys! Happy to see you here!</h3>
            </div>
        </div>
    )
}

export default ProfileInfo
