import React from "react"
import { NavLink } from "react-router-dom"
import styles from "./Dialogs.module.css"

type DialogType = {
    name: string
    id: number
}

type MessageType = {
    id: number
    message: string
}

const DialogsData: Array<DialogType> = [
    { id: 1, name: "Юля" },
    { id: 2, name: "Ника" },
    { id: 3, name: "Влад" },
    { id: 4, name: "Игорь" },
    { id: 5, name: "Серега" },
]

const MessagesData: Array<MessageType> = [
    { id: 1, message: "Ну шо ты там" },
    { id: 2, message: "Просто здравствуй" },
    { id: 3, message: "Просто как дела" },
    { id: 4, message: "Где встретимся?" },
    { id: 5, message: "Всё ясно, пока" },
]

const DialogItem: React.FC<DialogType> = (props) => {
    return (
        <div className={styles.dialog}>
            <NavLink to={`/messages/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}

const Message: React.FC<MessageType> = (props) => {
    return <div className={styles.message}>{props.message}</div>
}

const Dialogs = () => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                <DialogItem name={DialogsData[0].name} id={DialogsData[0].id} />
                <DialogItem name={DialogsData[1].name} id={DialogsData[1].id} />
                <DialogItem name={DialogsData[2].name} id={DialogsData[2].id} />
                <DialogItem name={DialogsData[3].name} id={DialogsData[3].id} />
                <DialogItem name={DialogsData[4].name} id={DialogsData[4].id} />
            </div>
            <div className={styles.messages}>
                <Message
                    message={MessagesData[0].message}
                    id={MessagesData[0].id}
                />
                <Message
                    message={MessagesData[1].message}
                    id={MessagesData[1].id}
                />
                <Message
                    message={MessagesData[2].message}
                    id={MessagesData[2].id}
                />
                <Message
                    message={MessagesData[3].message}
                    id={MessagesData[3].id}
                />
                <Message
                    message={MessagesData[4].message}
                    id={MessagesData[4].id}
                />
            </div>
        </div>
    )
}

export default Dialogs
