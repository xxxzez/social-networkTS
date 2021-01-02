import { ActionsTypes, AuthType } from '../Types'

export const setAuthUserData = (
    userId: string,
    email: string,
    login: string
) => {
    return {
        type: 'SET-USER-DATA',
        data: { userId, email, login },
    } as const
}

const initialState = {
    id: '',
    email: '',
    login: '',
    isAuth: false,
}

export const authReducer = (
    state: AuthType = initialState,
    action: ActionsTypes
): AuthType => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }
        default:
            return state
    }
}
