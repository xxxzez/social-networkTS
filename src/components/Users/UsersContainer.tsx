import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { usersAPI } from '../../api/api'
import {
    follow,
    setCurrentPage,
    toggleIsFetching,
    setTotalUsersCount,
    setUsers,
    unfollow,
    toggleFollowingProgress,
    getUsersTC,
} from '../../redux/users-reducer'
import { RootStateType } from '../../Types'
import { Preloader } from '../common/Preloader/Preloader'
import { Users } from './Users'
class UsersClassContainer extends React.Component<UsersPropsFromRedux> {
    componentDidMount = () => {
        this.props.getUsersTC()
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(pageNumber, this.props.pageSize).then((data) => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
        })
    }
    render = () => (
        <>
            {this.props.isFetching ? (
                <Preloader />
            ) : (
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    onPageChanged={this.onPageChanged}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    toggleFollowingProgress={this.props.toggleFollowingProgress}
                    followingInProgress={this.props.followingInProgress}
                />
            )}
        </>
    )
}

const mapStateToProps = (state: RootStateType) => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
})

const connector = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleFollowingProgress,
    getUsersTC
})
export type UsersPropsFromRedux = ConnectedProps<typeof connector>
export const UsersContainer = connector(UsersClassContainer)
