import { ActionsTypes, UsersPageType, UserType } from '../Types'

const initialState: UsersPageType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1
}
export const followAC = (userId: string) => {
    return {
        type: 'FOLLOW',
        userId: userId,
    } as const
}
export const unfollowAC = (userId: string) => {
    return {
        type: 'UNFOLLOW',
        userId: userId,
    } as const
}
export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: 'SET-USERS',
        users: users,
    } as const
}
export const usersReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u
                }),
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u
                }),
            }
        case 'SET-USERS':
            return {
                ...state,
                users: [...state.users, ...action.users],
            }
        default:
            return state
    }
}
