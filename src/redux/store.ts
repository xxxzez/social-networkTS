// import { v1 } from 'uuid'
// import { StoreType } from '../Types'
// import { dialogsReducer } from './dialogs-reducer'
// import { profileReducer } from './profile-reducer'

// const store: StoreType = {
//     _state: {
//         profilePage: {
//             posts: [
//                 { id: v1(), message: 'Second post!!!!', likesCount: 17 },
//                 { id: v1(), message: 'First post!!!!', likesCount: 7 },
//             ],
//             newPostText: '',
//         },
//         dialogsPage: {
//             dialogs: [
//                 { id: v1(), name: 'Dashiki' },
//                 { id: v1(), name: 'Tommy' },
//                 { id: v1(), name: 'Vlad' },
//                 { id: v1(), name: 'Igor' },
//                 { id: v1(), name: 'Andrew' },
//             ],
//             messages: [
//                 { id: v1(), message: 'Whats going on' },
//                 { id: v1(), message: 'Hello amigo' },
//                 { id: v1(), message: 'My last message' },
//                 { id: v1(), message: 'Miss me?' },
//                 { id: v1(), message: 'See u tomorrow' },
//             ],
//             newMessageBody: '',
//         },
//     },
//     dispatch(action) {
//         this._state.profilePage = profileReducer(
//             this._state.profilePage,
//             action
//         )
//         this._state.dialogsPage = dialogsReducer(
//             this._state.dialogsPage,
//             action
//         )

//         this._onChange()
//     },
//     getState() {
//         return this._state
//     },
//     _subscribe(observer) {
//         this._onChange = observer
//     },
//     _onChange() {},
// }
// export default store
