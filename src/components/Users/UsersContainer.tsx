import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { usersAPI } from '../../api/api'
import {
    follow,
    setCurrentPage,
    setToggleIsFetching,
    setTotalUsersCount,
    setUsers,
    unfollow,
} from '../../redux/users-reducer'
import { RootStateType } from '../../Types'
import { Preloader } from '../common/Preloader/Preloader'
import { Users } from './Users'
class UsersClassContainer extends React.Component<UsersPropsFromRedux> {
    componentDidMount = () => {
        this.props.setToggleIsFetching(true)
        usersAPI
            .getUsers(this.props.currentPage, this.props.pageSize)
            .then((data) => {
                this.props.setToggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.setToggleIsFetching(true)
        usersAPI.getUsers(pageNumber, this.props.pageSize).then((data) => {
            this.props.setToggleIsFetching(false)
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
})

const connector = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setToggleIsFetching,
})
export type UsersPropsFromRedux = ConnectedProps<typeof connector>
export const UsersContainer = connector(UsersClassContainer)
