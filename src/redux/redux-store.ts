import { dialogsReducer } from './dialogs-reducer'
import { profileReducer } from './profile-reducer'
import { combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
})

export type AppRootStateType = any
const store: AppRootStateType = createStore(rootReducer, composeWithDevTools())



export default store