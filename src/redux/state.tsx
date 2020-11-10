import { StoreType, PostType } from '../Types'

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
        },
    },
    addPost(text: string) {
        let newPost: PostType = {
            id: Math.random(),
            message: text,
            likesCount: 0,
        }
        if (newPost.message.trim() === '') {
            return
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._onChange()
    },
    updateNewPostText(text: string) {
        this._state.profilePage.newPostText = text
        this._onChange()
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
