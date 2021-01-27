import { ActionsTypes, AuthType } from '../Types'

const initialState = {
    id: 0,
    email: '',
    login: 'not correct login',
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
export const setAuthUserData = (id: number, email: string, login: string) => {
    return {
        type: 'SET-USER-DATA',
        data: { id, email, login },
    } as const
}
