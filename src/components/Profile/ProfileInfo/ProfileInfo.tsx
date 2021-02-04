import React from 'react'
import s from './ProfileInfo.module.css'
import { Preloader } from '../../common/Preloader/Preloader'
import { ProfileType } from '../../../Types'
import profilePicture from '../../../assets/profilePicture.png'
import { ProfileStatus } from './ProfileStatus'

type PropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
}

const ProfileInfo: React.FC<PropsType> = ({
    profile,
    status,
    updateStatus,
}) => {
    if (!profile) {
        return <Preloader />
    }
    return (
        <div className={s.profile}>
            <div className={s.profilePicture}>
                {profile.photos.large ? (
                    <img src={profile.photos.large} alt="" />
                ) : (
                    <img src={profilePicture} alt="" width="300px" />
                )}
            </div>

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
