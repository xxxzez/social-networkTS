import { profileReducer } from './profile-reducer'
import { appReducer } from './app-reducer'
import { usersReducer } from './users-reducer'
import { dialogsReducer } from './dialogs-reducer'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { authReducer } from './auth-reducer'
import thunk from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>
export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)
