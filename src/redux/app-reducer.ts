import { getAuthUserData } from './auth-reducer'
import { ActionsTypes, AppReducerType } from '../Types'

const initialState = {
    initialized: false,
}

export const appReducer = (
    state: AppReducerType = initialState,
    action: ActionsTypes
): AppReducerType => {
    switch (action.type) {
        case 'INITIALIZED-SUCCESS':
            return {
                ...state,
                initialized: true,
            }
        default:
            return state
    }
}

export const initializedSuccess = () => ({ type: 'INITIALIZED-SUCCESS' })

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise]).then(() => {
        dispatch(initializedSuccess())
    })
}
