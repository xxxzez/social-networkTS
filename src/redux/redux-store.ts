import { usersReducer } from './users-reducer'
import { dialogsReducer } from './dialogs-reducer'
import { profileReducer } from './profile-reducer'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { authReducer } from './auth-reducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
})

export type AppRootStateType = any
const store: AppRootStateType = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

export default store
