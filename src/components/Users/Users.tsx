import Button from '@material-ui/core/Button'
import axios from 'axios'
import React from 'react'
import { UsersPropsFromRedux } from './UsersContainer'
import profileIcon from '../../assets/profileIcon.png'
import locationLogo from '../../assets/canadaFlag.jpeg'
import { Grid } from '@material-ui/core'
import styles from './Users.module.css'

type PropsType = UsersPropsFromRedux

export class Users extends React.Component<PropsType> {
    componentDidMount = () => {
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
            )
            .then((response) => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
            )
            .then((response) => this.props.setUsers(response.data.items))
    }
    render = () => {
        const pagesCount = Math.ceil(
            this.props.totalUsersCount / this.props.pageSize
        )
        const pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <Grid item xs={2}>
                <div>
                    {pages.map((page) => (
                        <span
                            onClick={() => this.onPageChanged(page)}
                            className={
                                this.props.currentPage === page
                                    ? styles.selectedPage
                                    : ''
                            }
                        >
                            {page}
                        </span>
                    ))}
                </div>
                {this.props.users.map((u) => (
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
                                        this.props.follow(u.id)
                                    }}
                                >
                                    Unfollow
                                </Button>
                            ) : (
                                <Button
                                    variant="text"
                                    color="primary"
                                    onClick={() => {
                                        this.props.unfollow(u.id)
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
}
