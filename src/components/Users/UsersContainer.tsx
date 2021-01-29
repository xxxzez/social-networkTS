import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { compose } from 'redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import {
    follow,
    setCurrentPage,
    unfollow,
    toggleFollowingProgress,
    getUsers,
} from '../../redux/users-reducer'
import { RootStateType } from '../../Types'
import { Preloader } from '../common/Preloader/Preloader'
import { Users } from './Users'
class UsersClassContainer extends React.Component<UsersPropsFromRedux> {
    componentDidMount = () => {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }
    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
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
    setCurrentPage,
    toggleFollowingProgress,
    getUsers,
})

export type UsersPropsFromRedux = ConnectedProps<typeof connector>

export const UsersContainer = compose(
    connector,
    withAuthRedirect
)(UsersClassContainer)
