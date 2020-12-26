import Button from '@material-ui/core/Button'
import axios from 'axios'
import React from 'react'
import { UsersPropsFromRedux } from './UsersContainer'
import profileIcon from '../../assets/profileIcon.png'
import locationLogo from '../../assets/canadaFlag.jpeg'

type PropsType = UsersPropsFromRedux
export const Users: React.FC<PropsType> = (props) => {
    if (props.usersPage.users.length === 0) {
        axios
            .get('https://social-network.samuraijs.com/api/1.0/users')
            .then((response) => {
                props.setUsers(response.data.items)
            })
    }
    return (
        <div>
            {props.usersPage.users.map((u) => (
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
                        {'Vancouver'}, {'Canada '}
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
        </div>
    )
}
