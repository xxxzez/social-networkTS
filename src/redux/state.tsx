import { StoreType } from '../Types'
import { dialogsReducer } from './dialogs-reducer'
import { profileReducer } from './profile-reducer'

export const addPostAC = (newPostText: string) => {
    return {
        type: 'ADD-POST',
        text: newPostText,
    } as const
}

export const onPostChangeAC = (newPostText: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        text: newPostText,
    } as const
}
export const updateNewMessageTextAC = (newMessageText: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT',
        text: newMessageText,
    } as const
}
export const sendMessageTextAC = (newMessageText: string) => {
    return {
        type: 'SEND-MESSAGE',
    } as const
}

const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'First post!!!!', likesCount: 17 },
                { id: 2, message: 'Some bullshit', likesCount: 7 },
            ],
            newPostText: '',
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Dashiki' },
                { id: 2, name: 'Tommy' },
                { id: 3, name: 'Vlad' },
                { id: 4, name: 'Igor' },
                { id: 5, name: 'Andrew' },
            ],
            messages: [
                { id: 1, message: 'Whats going on' },
                { id: 2, message: 'Hello amigo' },
                { id: 3, message: 'My last message' },
                { id: 4, message: 'Miss me?' },
                { id: 5, message: 'See u tomorrow' },
            ],
            newMessageBody: '',
        },
    },
    dispatch(action) {
        profileReducer(this._state.profilePage, action)
        dialogsReducer(this._state.dialogsPage, action)
    },
    getState() {
        return this._state
    },
    _subscribe(observer) {
        this._onChange = observer
    },
    _onChange() {},
}
export default store
