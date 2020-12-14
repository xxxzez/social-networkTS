import React from 'react'
import s from './ProfileInfo.module.css'
import logo from '../../../assets/profilePicture.jpg'

const ProfileInfo = () => {
    return (
        <div className={s.profile}>
            <div className={s.profilePicture}>
                <img src={logo} alt="" />
            </div>
            <div>
                <h3>Welcome to my page guys! Happy to see you here!</h3>
            </div>
        </div>
    )
}

export default ProfileInfo
