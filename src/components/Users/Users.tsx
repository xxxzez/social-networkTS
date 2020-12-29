import { Button, Grid } from '@material-ui/core'
import React from 'react'
import profileIcon from '../../assets/profileIcon.png'
import locationLogo from '../../assets/canadaFlag.jpeg'
import styles from './Users.module.css'
import { UserType } from '../../Types'

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: Array<UserType>
    onPageChanged: (pageNumber: number) => void
    follow: (userId: string) => void
    unfollow: (userId: string) => void
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
                {pages.map((page) => (
                    <span
                        onClick={() => props.onPageChanged(page)}
                        className={
                            props.currentPage === page
                                ? styles.selectedPage
                                : ''
                        }
                    >
                        {page}
                    </span>
                ))}
            </div>
            {props.users.map((u) => (
                <div className="card" key={u.id}>
                    <img
                        src={
                            u.photos.small !== null
                                ? u.photos.small
                                : profileIcon
                        }
                        alt="ProfileImage"
                        width="90px"
                    />

                    <h3>{u.name}</h3>
                    <h4>{u.status}</h4>
                    <h4>
                        {'Vancouver, Canada '}
                        <img src={locationLogo} alt="" width="30px" />
                    </h4>
                    <p>
                        {u.followed ? (
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => {
                                    props.follow(u.id)
                                }}
                            >
                                Unfollow
                            </Button>
                        ) : (
                            <Button
                                variant="text"
                                color="primary"
                                onClick={() => {
                                    props.unfollow(u.id)
                                }}
                            >
                                Follow
                            </Button>
                        )}
                    </p>
                </div>
            ))}
        </Grid>
    )
}
