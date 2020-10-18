import React from "react"
import DialogItem from "./DialogItem/DialogItem"
import styles from "./Dialogs.module.css"
import Message from "./Message/Message"
import { DialogType } from "./DialogItem/DialogItem"
import { MessageType } from "./Message/Message"

const dialogs: Array<DialogType> = [
    { id: 1, name: "Юля" },
    { id: 2, name: "Ника" },
    { id: 3, name: "Влад" },
    { id: 4, name: "Игорь" },
    { id: 5, name: "Серега" },
]

const messages: Array<MessageType> = [
    { id: 1, message: "Ну шо ты там" },
    { id: 2, message: "Просто здравствуй" },
    { id: 3, message: "Просто как дела" },
    { id: 4, message: "Где встретимся?" },
    { id: 5, message: "Всё ясно, пока" },
]
const dialogsElements = dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
))
const messagesElements = messages.map((m) => (
    <Message message={m.message} id={m.id} />
))

const Dialogs = () => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>{dialogsElements}</div>
            <div className={styles.messages}>{messagesElements}</div>
        </div>
    )
}

export default Dialogs
