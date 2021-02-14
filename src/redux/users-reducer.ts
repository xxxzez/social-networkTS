import { Dispatch } from 'redux'
import { BaseThunkType, InferActionsTypes } from './store'
import { updateObjectInArray } from './../utils/object-helpers'
import { UserType } from '../Types'
import { usersAPI } from '../api/users-api'

const initialState = {
    users: [] as UserType[],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as number[],
}

export const actions = {
    followSuccess: (userId: number) =>
        ({
            type: 'FOLLOW',
            userId,
        } as const),

    unfollowSuccess: (userId: number) =>
        ({
            type: 'UNFOLLOW',
            userId,
        } as const),
    setUsers: (users: Array<UserType>) =>
        ({
            type: 'SET-USERS',
            users,
        } as const),
    setCurrentPage: (currentPage: number) =>
        ({
            type: 'SET-CURRENT-PAGE',
            currentPage,
        } as const),
    setTotalUsersCount: (totalUsersCount: number) =>
        ({
            type: 'SET-TOTAL-USERS-COUNT',
            totalUsersCount,
        } as const),
    toggleIsFetching: (isFetching: boolean) =>
        ({
            type: 'SET-TOGGLE-IS-FETCHING',
            isFetching,
        } as const),
    toggleFollowingProgress: (isFetching: boolean, userId: number) =>
        ({
            type: 'TOGGLE-IS-FOLLOWING-PROGRESS',
            isFetching,
            userId,
        } as const),
}

export const requestUsers = (page: number, pageSize: number): ThunkType => {
    return async (dispatch) => {
        dispatch(actions.toggleIsFetching(true))
        dispatch(actions.setCurrentPage(page))
        const data = await usersAPI.getUsers(page, pageSize)
        dispatch(actions.toggleIsFetching(false))
        dispatch(actions.setUsers(data.items))
        dispatch(actions.setTotalUsersCount(data.totalCount))
    }
}

const _followUnfollowFlow = async (
    dispatch: Dispatch<ActionsTypes>,
    userId: number,
    apiMethod: any,
    actionCreator: (userId: number) => ActionsTypes
) => {
    dispatch(actions.toggleFollowingProgress(true, userId))
    const response = await apiMethod(userId)
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(actions.toggleFollowingProgress(false, userId))
}

export const follow = (userId: number): ThunkType => {
    return async (dispatch) => {
        _followUnfollowFlow(
            dispatch,
            userId,
            usersAPI.follow.bind(usersAPI),
            actions.followSuccess
        )
    }
}
export const unfollow = (userId: number): ThunkType => {
    return async (dispatch) => {
        _followUnfollowFlow(
            dispatch,
            userId,
            usersAPI.unfollow.bind(usersAPI),
            actions.unfollowSuccess
        )
    }
}

export const usersReducer = (
    state = initialState,
    action: ActionsTypes
): InitialStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {
                    followed: true,
                }),
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {
                    followed: false,
                }),
            }
        case 'SET-USERS':
            return {
                ...state,
                users: action.users,
            }
        case 'SET-CURRENT-PAGE':
            return {
                ...state,
                currentPage: action.currentPage,
            }
        case 'SET-TOTAL-USERS-COUNT':
            return {
                ...state,
                totalUsersCount: action.totalUsersCount,
            }
        case 'SET-TOGGLE-IS-FETCHING':
            return {
                ...state,
                isFetching: action.isFetching,
            }
        case 'TOGGLE-IS-FOLLOWING-PROGRESS':
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(
                          (id) => id !== action.userId
                      ),
            }
        default:
            return state
    }
}

type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes>
