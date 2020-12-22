import { dialogsReducer } from './dialogs-reducer'
import { profileReducer } from './profile-reducer'
import { combineReducers, createStore } from 'redux'

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
})

const store: AppRootStateType = createStore(rootReducer)
export type AppRootStateType = ReturnType<typeof rootReducer>

export default store