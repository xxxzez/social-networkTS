import { ActionsTypes, AuthType } from '../Types'

export const setAuthUserData = (id: string, email: string, login: string) => {
    return {
        type: 'SET-USER-DATA',
        data: { id, email, login },
    } as const
}

const initialState = {
    id: '',
    email: '',
    login: '',
    isAuth: true,
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
