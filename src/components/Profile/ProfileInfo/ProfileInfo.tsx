import React, { ChangeEvent, useState } from 'react'
import s from './ProfileInfo.module.css'
import { Preloader } from '../../common/Preloader/Preloader'
import { ProfileType } from '../../../Types'
import profilePicture from '../../../assets/profilePicture.png'
import { ProfileStatus } from './ProfileStatus'
import { ProfileDataReduxForm } from './ProfileDataForm'

type PropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: any) => void
    saveProfile: (data: any) => void
}

const ProfileInfo: React.FC<PropsType> = ({
    profile,
    status,
    updateStatus,
    isOwner,
    savePhoto,
    saveProfile,
}) => {
    const [editMode, setEditMode] = useState(false)

    if (!profile) {
        return <Preloader />
    }

    const mainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            savePhoto(e.target.files[0])
        }
    }
    const onSubmit = (formData: any) => {
        saveProfile(formData).then(() => {
            setEditMode(false)
        })
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

            {editMode ? (
                <ProfileDataReduxForm
                    initialValues={profile}
                    onSubmit={onSubmit}
                />
            ) : (
                <ProfileData
                    profile={profile}
                    isOwner={isOwner}
                    goToEditMode={() => {
                        setEditMode(true)
                    }}
                />
            )}
        </div>
    )
}

export default ProfileInfo

type ContactPropsType = {
    contactTitle: string
    contactValue: any
}

const ProfileData = ({ profile, isOwner, goToEditMode }: any) => {
    return (
        <div>
            {isOwner && (
                <div>
                    <button onClick={goToEditMode}>Edit</button>
                </div>
            )}

            <div>
                <b>Name:</b> {profile.fullName}
            </div>
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
