import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { compose } from 'redux'
import {
    follow,
    setCurrentPage,
    unfollow,
    toggleFollowingProgress,
    requestUsers,
} from '../../redux/users-reducer'
import {
    getUsers,
    getPageSize,
    getTotalUsersCount,
    getCurrentPage,
    getIsFetching,
    getFollowingInProgress,
} from '../../redux/users-selectors'
import { RootStateType } from '../../Types'
import { Preloader } from '../common/Preloader/Preloader'
import { Users } from './Users'
class UsersClassContainer extends React.Component<UsersPropsFromRedux> {
    componentDidMount = () => {
        const { currentPage, pageSize } = this.props
        this.props.requestUsers(currentPage, pageSize)
    }
    onPageChanged = (pageNumber: number) => {
        const { pageSize } = this.props
        this.props.requestUsers(pageNumber, pageSize)
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
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
})

const connector = connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    requestUsers,
})

export type UsersPropsFromRedux = ConnectedProps<typeof connector>

export const UsersContainer = compose<React.ComponentType>(connector)(
    UsersClassContainer
)
