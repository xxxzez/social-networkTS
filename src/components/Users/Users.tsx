import React from 'react'
import { Grid } from '@material-ui/core'
import styles from './Users.module.css'
import { UserType } from '../../Types'
import { Paginator } from '../common/Paginator'
import { User } from './User'

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

export const Users: React.FC<PropsType> = ({
    currentPage,
    totalUsersCount,
    pageSize,
    onPageChanged,
    users,
    ...props
}) => {
    const pagesCount = Math.ceil(totalUsersCount / pageSize)
    const pages: number[] = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <Grid item xs={2}>
            <div>
                {
                    <Paginator
                        currentPage={currentPage}
                        onPageChanged={onPageChanged}
                        totalItemsCount={totalUsersCount}
                        pageSize={pageSize}
                    />
                }
            </div>
            <div className={styles.userCards}>
                {users.map((u) => (
                    <User
                        key={u.id}
                        user={u}
                        follow={props.follow}
                        unfollow={props.unfollow}
                        followingInProgress={props.followingInProgress}
                    />
                ))}
            </div>
        </Grid>
    )
}
