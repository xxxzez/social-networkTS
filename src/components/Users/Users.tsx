import { Grid } from '@material-ui/core'
import React from 'react'
import profilePicture from '../../assets/profilePicture.png'
import locationLogo from '../../assets/canadaFlag.jpeg'
import styles from './Users.module.css'
import { UserType } from '../../Types'
import { NavLink } from 'react-router-dom'
import { Paginator } from '../common/Paginator'
import Button from '@material-ui/core/Button'

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: Array<UserType>
    followingInProgress: number[]
    onPageChanged: (pageNumber: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

export const Users = (props: PropsType) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <Grid item xs={2}>
            <div>
                {
                    <Paginator
                        currentPage={props.currentPage}
                        onPageChanged={props.onPageChanged}
                        totalItemsCount={props.totalUsersCount}
                        pageSize={props.pageSize}
                    />
                }
            </div>
            <div className={styles.userCards}>
                {props.users.map((u) => (
                    <div className={styles.card} key={u.id}>
                        <NavLink to={'/profile/' + u.id}>
                            <img
                                src={
                                    u.photos.small !== null
                                        ? u.photos.small
                                        : profilePicture
                                }
                                alt="ProfileImage"
                                width="100px"
                            />
                        </NavLink>
                        <h3>{u.name}</h3>
                        <h4>{u.status}</h4>
                        <h5>
                            {'Vancouver, Canada '}
                            <img src={locationLogo} alt="" width="30px" />
                        </h5>
                        <p>
                            {u.followed ? (
                                <Button
                                    disabled={props.followingInProgress.some(
                                        (id) => id === u.id
                                    )}
                                    onClick={() => {
                                        props.unfollow(u.id)
                                    }}
                                >
                                    Unfollow
                                </Button>
                            ) : (
                                <Button
                                    disabled={props.followingInProgress.some(
                                        (id) => id === u.id
                                    )}
                                    onClick={() => {
                                        props.follow(u.id)
                                    }}
                                >
                                    Follow
                                </Button>
                            )}
                        </p>
                    </div>
                ))}
            </div>
        </Grid>
    )
}
