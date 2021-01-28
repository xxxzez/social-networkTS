import { Grid } from '@material-ui/core'
import React from 'react'
import profileIcon from '../../assets/profileIcon.png'
import locationLogo from '../../assets/canadaFlag.jpeg'
import styles from './Users.module.css'
import { UserType } from '../../Types'
import { NavLink } from 'react-router-dom'
import { Paginator } from '../common/Preloader/Paginator'
import axios from 'axios'
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
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
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
                                        : profileIcon
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
                                        props.toggleFollowingProgress(
                                            true,
                                            u.id
                                        )
                                        axios
                                            .delete(
                                                `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,

                                                {
                                                    withCredentials: true,
                                                    headers: {
                                                        'API-KEY':
                                                            '06e5810a-0410-4b5f-98c9-d18a1ae87df4',
                                                    },
                                                }
                                            )
                                            .then((response) => {
                                                if (
                                                    response.data.resultCode ===
                                                    0
                                                ) {
                                                    props.unfollow(u.id)
                                                }
                                                props.toggleFollowingProgress(
                                                    false,
                                                    u.id
                                                )
                                            })
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
                                        props.toggleFollowingProgress(true,u.id)
                                        axios
                                            .post(
                                                `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                                {},
                                                {
                                                    withCredentials: true,
                                                    headers: {
                                                        'API-KEY':
                                                            '06e5810a-0410-4b5f-98c9-d18a1ae87df4',
                                                    },
                                                }
                                            )
                                            .then((response) => {
                                                if (
                                                    response.data.resultCode ===
                                                    0
                                                ) {
                                                    props.follow(u.id)
                                                }
                                                props.toggleFollowingProgress(
                                                    false, u.id
                                                )
                                            })
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
