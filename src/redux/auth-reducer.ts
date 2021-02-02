import { authAPI } from './../api/api'
import { ActionsTypes, AuthType } from '../Types'
import { stopSubmit } from 'redux-form'

const initialState = {
    id: null,
    email: null,
    login: null,
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
                ...action.payload,
            }
        default:
            return state
    }
}
export const setAuthUserData = (
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
) => {
    return {
        type: 'SET-USER-DATA',
        payload: { id, email, login, isAuth },
    } as const
}

export const getAuthUserData = () => (dispatch: any) => {
    return authAPI.getUserData().then((response) => {
        if (response.data.resultCode === 0) {
            let { id, login, email } = response.data.data
            dispatch(setAuthUserData(id, email, login, true))
        }
    })
}

export const login = (email: string, password: string, rememberMe: boolean) => {
    return (dispatch: any) => {
        authAPI.login(email, password, rememberMe).then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                let message =
                    response.data.messages.length > 0
                        ? response.data.messages[0]
                        : 'Some error'
                dispatch(
                    stopSubmit('login', {
                        _error: message,
                    })
                )
            }
        })
    }
}
export const logout = () => {
    return (dispatch: any) => {
        authAPI.logout().then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
    }
}
