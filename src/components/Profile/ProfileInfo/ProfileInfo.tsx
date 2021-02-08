import React, { ChangeEvent, useState } from 'react'
import s from './ProfileInfo.module.css'
import { Preloader } from '../../common/Preloader/Preloader'
import { ProfileType } from '../../../Types'
import profilePicture from '../../../assets/profilePicture.png'
import { ProfileStatus } from './ProfileStatus'
import { ProfileDataReduxForm } from './ProfileDataForm'
import Button from '@material-ui/core/Button'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'

type PropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: any) => void
    saveProfile: any
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
            {isOwner && (
                <div>
                    <Button
                        variant="contained"
                        color="primary"
                        startIcon={<CloudUploadIcon />}
                        component="label"
                    >
                        Upload File
                        <input
                            onChange={mainPhotoSelected}
                            type="file"
                            hidden
                        />
                    </Button>
                </div>
            )}

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

const ProfileData: React.FC<any> = ({ profile, isOwner, goToEditMode }) => {
    return (
        <div>
            {isOwner && (
                <div>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={goToEditMode}
                    >
                        Edit
                    </Button>
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
                {profile.lookingForAJob ? 'Yes' : 'No'}
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

const Contact: React.FC<ContactPropsType> = ({
    contactTitle,
    contactValue,
}) => {
    return (
        <div className={s.contact}>
            <b>{contactTitle}</b>: {contactValue}
        </div>
    )
}
