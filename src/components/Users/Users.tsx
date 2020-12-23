import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import React from 'react'
import { v1 } from 'uuid'
import { UsersPropsFromRedux } from './UsersContainer'

type PropsType = UsersPropsFromRedux
export const Users: React.FC<PropsType> = (props) => {
    if (props.usersPage.users.length === 0) {
        props.setUsers([
            {
                id: v1(),
                photoUrl: '',
                followed: true,
                fullname: 'Matvei',
                status: 'I am Front-End Developer',
                location: { city: 'Vancouver', country: 'Canada' },
            },
            {
                id: v1(),
                photoUrl: '',
                followed: true,
                fullname: 'Tom',
                status: 'I am Back-End Developer',
                location: { city: 'Toronto', country: 'Canada' },
            },
            {
                id: v1(),
                photoUrl: '',
                followed: false,
                fullname: 'Viktoria',
                status: 'I am devops',
                location: { city: 'Minsk', country: 'Belarus' },
            },
        ])
    }

    return (
        <div>
            {props.usersPage.users.map((u) => (
                <div key={u.id}>
                    <span>
                        <div>
                            <Avatar alt={u.fullname} src={'/static/images/avatar/1.jpg'} />
                        </div>
                        <div>
                            {u.followed ? (
                                <Button
                                    onClick={() => {
                                        props.follow(u.id)
                                    }}
                                >
                                    Unfollow
                                </Button>
                            ) : (
                                <Button
                                    onClick={() => {
                                        props.unfollow(u.id)
                                    }}
                                >
                                    Follow
                                </Button>
                            )}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullname}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.city}</div>
                            <div>{u.location.country}</div>
                        </span>
                    </span>
                </div>
            ))}
        </div>
    )
}
