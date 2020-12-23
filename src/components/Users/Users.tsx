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
                <div className="card">
                    <Avatar
                        alt={u.fullname}
                        src={'/static/images/avatar/1.jpg'}
                    />
                    <h1>{u.fullname}</h1>
                    <h4>{u.status}</h4>
                    <h5>
                        {u.location.city}, {u.location.country}
                    </h5>
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
        </div>
    )
}
