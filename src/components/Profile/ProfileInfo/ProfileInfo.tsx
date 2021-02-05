import React, { ChangeEvent } from 'react'
import s from './ProfileInfo.module.css'
import { Preloader } from '../../common/Preloader/Preloader'
import { ProfileType } from '../../../Types'
import profilePicture from '../../../assets/profilePicture.png'
import { ProfileStatus } from './ProfileStatus'

type PropsType = {
    profile: ProfileType
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
            <ProfileData profile={profile} />
        </div>
    )
}

export default ProfileInfo

type ContactPropsType = {
    contactTitle: string
    contactValue: any
}

const ProfileData = ({ profile }: any) => {
    return (
        <div>
            <div>
                <b>About me: </b>
                {profile.aboutMe}
            </div>
            <div>
                <b>Looking for a job?</b>
                {profile.lookingForAJob ? 'Yes' : 'Currently no!'}
            </div>
            {profile.lookingForAJob && (
                <div>
                    <b>My professional skills:</b>
                    {profile.lookingForAJobDescription}
                </div>
            )}
            <div>
                <b>Name:</b> {profile.fullName}
            </div>
            <div>
                <b>UserId:</b> {profile.userId}
            </div>
            <div>
                <b>Contacts:</b>:
                {Object.keys(profile.contacts).map((key) => {
                    return (
                        <Contact
                            key={key}
                            contactTitle={key}
                            contactValue={profile.contacts[key]}
                        />
                    )
                })}
            </div>
            <div></div>
        </div>
    )
}

const Contact = ({ contactTitle, contactValue }: ContactPropsType) => {
    return (
        <div className={s.contact}>
            <b>{contactTitle}</b>: {contactValue}
        </div>
    )
}
