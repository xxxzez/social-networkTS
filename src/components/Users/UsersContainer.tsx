import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { actions } from '../../redux/users-reducer'
import { AppStateType } from '../../redux/store'
import { follow, unfollow, requestUsers } from '../../redux/users-reducer'
import {
    getUsers,
    getPageSize,
    getTotalUsersCount,
    getCurrentPage,
    getIsFetching,
    getFollowingInProgress,
} from '../../redux/users-selectors'
import { UserType } from '../../Types'
import { Preloader } from '../common/Preloader/Preloader'
import { Users } from './Users'

type MSTPType = {
    currentPage: number
    pageSize: number
    isFetching: boolean
    totalUsersCount: number
    followingInProgress: number[]
    users: UserType[]
}
type MDTPType = {
    requestUsers: (currentPage: number, pageSize: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

type PropsType = MSTPType & MDTPType

class UsersClassContainer extends React.Component<PropsType> {
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

const mapStateToProps = (state: AppStateType) => ({
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
})

const setCurrentPage = actions.setCurrentPage
const toggleFollowingProgress = actions.toggleFollowingProgress

export const UsersContainer = compose<React.ComponentType>(
    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        toggleFollowingProgress,
        requestUsers,
    })
)(UsersClassContainer)
