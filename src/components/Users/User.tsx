import React from 'react'
import profilePicture from '../../assets/profilePicture.png'
import locationLogo from '../../assets/canadaFlag.jpeg'
import styles from './Users.module.css'
import { UserType } from '../../Types'
import { NavLink } from 'react-router-dom'
import Button from '@material-ui/core/Button'

type PropsType = {
    user: UserType
    followingInProgress: number[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

export const User: React.FC<PropsType> = ({
    user,
    followingInProgress,
    follow,
    unfollow,
}) => {
    return (
        <div className={styles.card} key={user.id}>
            <NavLink to={'/profile/' + user.id}>
                <div className={styles.userPhoto}>
                    <img
                        src={
                            user.photos.small !== null
                                ? user.photos.small
                                : profilePicture
                        }
                        alt="ProfileImage"
                        width="100px"
                    />
                </div>
            </NavLink>
            <h3>{user.name}</h3>
            <h4>{user.status}</h4>
            <h5>
                {'Vancouver, Canada '}
                <img src={locationLogo} alt="" width="30px" />
            </h5>
            <p>
                {user.followed ? (
                    <Button
                        disabled={followingInProgress.some(
                            (id) => id === user.id
                        )}
                        onClick={() => {
                            unfollow(user.id)
                        }}
                    >
                        Unfollow
                    </Button>
                ) : (
                    <Button
                        disabled={followingInProgress.some(
                            (id) => id === user.id
                        )}
                        onClick={() => {
                            follow(user.id)
                        }}
                    >
                        Follow
                    </Button>
                )}
            </p>
        </div>
    )
}
