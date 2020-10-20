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
}
export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

const state: RootStateType = {
    profilePage: {
        posts: [
            { id: 1, message: "First post!!!!", likesCount: 17 },
            { id: 2, message: "Some bullshit", likesCount: 7 },
        ],
    },
    dialogsPage: {
        dialogs: [
            { id: 1, name: "Юля" },
            { id: 2, name: "Ника" },
            { id: 3, name: "Влад" },
            { id: 4, name: "Игорь" },
            { id: 5, name: "Серега" },
        ],
        messages: [
            { id: 1, message: "Ну шо ты там" },
            { id: 2, message: "Просто здравствуй" },
            { id: 3, message: "Просто как дела" },
            { id: 4, message: "Где встретимся?" },
            { id: 5, message: "Всё ясно, пока" },
        ],
    },
}

export default state
