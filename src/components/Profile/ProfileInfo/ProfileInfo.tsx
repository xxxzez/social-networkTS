import React from 'react'
import s from './ProfileInfo.module.css'
import { Preloader } from '../../common/Preloader/Preloader'
import { ProfileType } from '../../../Types'
import profilePicture from '../../../assets/profileIcon.png'

type PropsType = {
    profile: ProfileType | null
}

const ProfileInfo: React.FC<PropsType> = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div className={s.profile}>
            <div className={s.profilePicture}>
                {props.profile.photos.large ? (
                    <img src={props.profile.photos.large} alt="" />
                ) : (
                    <img src={profilePicture} alt="" width="300px" />
                )}
            </div>
            <h3>About me: {props.profile.aboutMe}</h3>
            <h3>
                Looking for a job?{' '}
                {props.profile.lookingForAJob ? 'Yes' : 'Currently no!'}
            </h3>
            <h3>
                What kind of job are u looking for?{' '}
                {props.profile.lookingForAJobDescription}
            </h3>
            <h3>Name: {props.profile.fullName}</h3>
            <h3>UserId: {props.profile.userId}</h3>
            <h3>Facebook link: {props.profile.contacts.facebook}</h3>
            <h3>Your website link: {props.profile.contacts.website}</h3>
            <h3>VK link: {props.profile.contacts.vk}</h3>
            <h3>Youtube: {props.profile.contacts.youtube}</h3>
            <h3>Github: {props.profile.contacts.github}</h3>
            <h3>Email: {props.profile.contacts.mainLink}</h3>

            <div>
                <h3>Welcome to my page guys! Happy to see you here!</h3>
            </div>
        </div>
    )
}

export default ProfileInfo
