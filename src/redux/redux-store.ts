import { usersReducer } from './users-reducer'
import { dialogsReducer } from './dialogs-reducer'
import { profileReducer } from './profile-reducer'
import { combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { authReducer } from './auth-reducer'

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
})

export type AppRootStateType = any
const store: AppRootStateType = createStore(rootReducer, composeWithDevTools())

export default store
//@ts-ignore
window.store = store
