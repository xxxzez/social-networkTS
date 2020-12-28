import { connect, ConnectedProps } from 'react-redux'
import { followAC, setUsersAC, unfollowAC } from '../../redux/users-reducer'
import { RootStateType, UserType } from '../../Types'
import { Users } from './Users'

const mapStateToProps = (state: RootStateType) => ({
    usersPage: state.usersPage,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
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
})

const connector = connect(mapStateToProps, mapDispatchToProps)
export type UsersPropsFromRedux = ConnectedProps<typeof connector>
export const UsersContainer = connector(Users)
