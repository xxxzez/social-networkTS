export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type MessageType = {
    id: number
    message: string
}
export type DialogType = {
    id: number
    name: string
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    _onChange: () => void
    _subscribe: ( observer: () => void) => void
    dispatch: (action: ActionsTypes) => void
}

export type AddPostActionType = {
    type: 'ADD-POST'
    text: string
}

export type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    text: string
}

export type ActionsTypes = AddPostActionType | UpdateNewPostTextActionType
