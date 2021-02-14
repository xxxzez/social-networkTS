import { InferActionsTypes } from './store'
import { getAuthUserData } from './auth-reducer'

const initialState = {
    initialized: false,
}
type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>

export const appReducer = (
    state = initialState,
    action: ActionsType
): InitialStateType => {
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

export const actions = {
    initializedSuccess: () => ({ type: 'INITIALIZED-SUCCESS' } as const),
}

export const initializeApp = () => (dispatch: any) => {
    const promise = dispatch(getAuthUserData())
    Promise.all([promise]).then(() => {
        dispatch(actions.initializedSuccess())
    })
}
