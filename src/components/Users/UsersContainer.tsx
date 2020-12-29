import axios from 'axios'
import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
} from '../../redux/users-reducer'
import { RootStateType, UserType } from '../../Types'
import { Users } from './Users'

class UsersClassContainer extends React.Component<UsersPropsFromRedux> {
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
    render = () => (
        <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            users={this.props.users}
            onPageChanged={this.onPageChanged}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
        />
    )
}

const mapStateToProps = (state: RootStateType) => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
})

const mapDispatchToProps = (dispatch: any) => ({
    follow: (userId: string) => {
        dispatch(followAC(userId))
    },
    unfollow: (userId: string) => {
        dispatch(unfollowAC(userId))
    },
    setUsers: (users: Array<UserType>) => {
        dispatch(setUsersAC(users))
    },
    setCurrentPage: (currentPage: number) => {
        dispatch(setCurrentPageAC(currentPage))
    },
    setTotalUsersCount: (totalUsersCount: number) => {
        dispatch(setTotalUsersCountAC(totalUsersCount))
    },
})

const connector = connect(mapStateToProps, mapDispatchToProps)
export type UsersPropsFromRedux = ConnectedProps<typeof connector>

export const UsersContainer = connector(UsersClassContainer)
