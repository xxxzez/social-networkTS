import React from 'react'
import s from './ProfileInfo.module.css'
import { Preloader } from '../../common/Preloader/Preloader'
import { ProfileType } from '../../../Types'

type PropsType = {
    profile: ProfileType
}

const ProfileInfo: React.FC<PropsType> = (props) => {
    // if (!props.profile) {
    //     return <Preloader />
    // }
    return (
        <div className={s.profile}>
            <div className={s.profilePicture}>
                <img src={props.profile.photos.large} alt="" />
            </div>
            <h3>Welcome to my page guys! Happy to see you here!</h3>
            <h3>{props.profile.aboutMe}</h3>
            <h3>{props.profile.lookingForAJob}</h3>
            <h3>{props.profile.lookingForAJobDescription}</h3>
            <h3>{props.profile.fullName}</h3>
            <h3>{props.profile.userId}</h3>
            <h3>{props.profile.contacts.facebook}</h3>
            <h3>{props.profile.contacts.website}</h3>
            <h3>{props.profile.contacts.vk}</h3>
            <h3>{props.profile.contacts.youtube}</h3>
            <h3>{props.profile.contacts.github}</h3>
            <h3>{props.profile.contacts.mainLink}</h3>

            <div>
                <h3>Welcome to my page guys! Happy to see you here!</h3>
            </div>
        </div>
    )
}

export default ProfileInfo
