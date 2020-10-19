import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import * as serviceWorker from "./serviceWorker"

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
const posts = [
    { id: 1, message: "First post!!!!", likesCount: 17 },
    { id: 2, message: "Some bullshit", likesCount: 7 },
]

const dialogs = [
    { id: 1, name: "Юля" },
    { id: 2, name: "Ника" },
    { id: 3, name: "Влад" },
    { id: 4, name: "Игорь" },
    { id: 5, name: "Серега" },
]

const messages = [
    { id: 1, message: "Ну шо ты там" },
    { id: 2, message: "Просто здравствуй" },
    { id: 3, message: "Просто как дела" },
    { id: 4, message: "Где встретимся?" },
    { id: 5, message: "Всё ясно, пока" },
]

ReactDOM.render(
    <React.StrictMode>
        <App posts={posts} dialogs={dialogs} messages={messages} />
    </React.StrictMode>,
    document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
