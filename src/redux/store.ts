import { profileReducer } from './profile-reducer'
import { appReducer } from './app-reducer'
import { usersReducer } from './users-reducer'
import { dialogsReducer } from './dialogs-reducer'
import { Action, applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { authReducer } from './auth-reducer'
import { reducer as formReducer } from 'redux-form'
import thunk, { ThunkAction } from 'redux-thunk'

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>

type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never

export type InferActionsTypes<
    T extends { [key: string]: (...args: any[]) => any }
> = ReturnType<PropertiesTypes<T>>

export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<
    R,
    AppStateType,
    unknown,
    A
>
export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)
