import { Button, Grid } from '@material-ui/core'
import React from 'react'
import profileIcon from '../../assets/profileIcon.png'
import locationLogo from '../../assets/canadaFlag.jpeg'
import './Users.module.scss'
import { UserType } from '../../Types'
import { NavLink } from 'react-router-dom'

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
        <div>
        <Grid item xs={2}>
            <input type="text"/>
            <div>
                {pages.map((page) => (
                    <span key={page} onClick={() => props.onPageChanged(page)}>
                        {page}
                    </span>
                ))}
            </div>
            {props.users.map((u) => (
                <input id="slider" className="customSlider" type="checkbox" >
                {/* <label for="slider"></label> */}
                <div className="wrapper">
                    <div className="top-icons">
                        <i className="fas fa-long-arrow-alt-left"></i>
                        <i className="fas fa-ellipsis-v"></i>
                        <i className="far fa-heart"></i>
                    </div>
                    <div className="profile">
                        <img src={u.photos.small !== null ? u.photos.small : profileIcon} className="thumbnail" />
                        <div className="check"><i className="fas fa-check"></i></div>
                        <h3 className="name">{u.name}</h3>
                        <p className="title">Javascript Developer</p>
                        <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aliquam aliquid porro!</p>
                        {u.followed ? 
                        (<button onClick={() => {
                                    props.follow(u.id)
                                }} 
                                type="button" 
                                className="btn">Unfollow</button>) 
                      : (<button onClick={() => {
                                        props.unfollow(u.id)
                                    }
                                } type="button" 
                                className="btn">Follow</button>
                                )}
                    </div>
                    <div className="social-icons">
                        <div className="icon">
                            <a href="/"><i className="fab fa-dribbble"></i></a>
                            <h4>12.8k</h4>
                            <p>Followers</p>
                        </div>
                        <div className="icon">
                            <a href="#"><i className="fab fa-behance"></i></a>
                            <h4>12.8k</h4>
                            <p>Followers</p>
                        </div>
                        <div className="icon">
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <h4>12.8k</h4>
                            <p>Followers</p>
                        </div>
                    </div>
                </div>
            ))}
        </Grid>
        </div>
    )
}
